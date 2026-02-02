import { kebabCase, startCase, toLower } from 'lodash';
import type { HtmlTagDescriptor, PluginOption } from 'vite';
import fs from 'node:fs';
import fg from 'fast-glob';

const GOOGLE_FONTS = new Map<string, string>(
  [
    'Inter',
  ].map((f) => [f.replaceAll(' ', '-').toLowerCase(), f])
);

// Only load commonly used weights (not all 18 variations)
const styleString = '0,400;0,500;0,600;0,700;1,400';

const getFontURL = (font: string) => {
  return `https://fonts.googleapis.com/css2?${`family=${font.replaceAll(' ', '+')}:ital,wght@${styleString}`}&display=swap`;
};

const fontBlacklist = new Set([
  'sans',
  'serif',
  'mono',
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'bolder',
  'black',
]);

const extractFonts = (code: string) => {
  // Regular expression to match class names starting with "font-" that appear
  // inside class attributes
  const [fontRegex1, fontRegex2] = [/\bfont-(?:\w*)(?:-\w*)*\b/g, /\bfont\-\[(?:[^\]]+)\]/g];

  // Find all class attributes
  const fontsUsed = new Set<string>();

  // For each class attribute, extract the "font-" prefixed classes
  const fontMatches = code.match(fontRegex1) ?? [];
  for (const fontClass of fontMatches) {
    if (!fontBlacklist.has(fontClass)) {
      fontsUsed.add(fontClass.replace('font-', ''));
    }
  }
  const familyMatches = code.match(fontRegex2) ?? [];
  for (const family of familyMatches) {
    // Extract the font name from the match
    const fontName = family
      .replaceAll('font-[', '')
      .replaceAll(']', '')
      .replaceAll(/['"]/g, '')
      .replaceAll(/_/g, ' ');
    if (!fontBlacklist.has(fontName)) {
      fontsUsed.add(fontName.toLowerCase().replaceAll(' ', '-'));
    }
  }

  const fonts = [...fontsUsed]
    .map((f) => GOOGLE_FONTS.get(f) ?? null)
    .filter((f): f is string => f !== null);
  return fonts.sort((a, b) => a.localeCompare(b));
};

export function loadFontsFromTailwindSource(): PluginOption {
  // Store collected font names
  const collectedFonts = new Set<string>();

  // Reset the collected fonts
  const reset = () => {
    collectedFonts.clear();
  };
  const collectFonts = async () => {
    const files = await fg('src/**/*.{js,ts,jsx,tsx}');
    const allFonts = await Promise.all(
      files.map(async (file) => {
        const code = await fs.promises.readFile(file, 'utf-8');
        return extractFonts(code);
      })
    );
    for (const font of allFonts.flat()) {
      collectedFonts.add(font);
    }
  };

  return [
    {
      name: 'load-fonts-from-tailwind-source',
      enforce: 'pre',
      async buildStart() {
        reset();
        await collectFonts();
      },
      transform(code, id) {
        if (!/\.([cm]?[jt]sx)$/.test(id)) {
          return null;
        }
        const fonts = extractFonts(code);
        for (const font of fonts) {
          collectedFonts.add(font);
        }
        return null;
      },
    },
    {
      name: 'add-fonts-to-root',
      enforce: 'post',
      resolveId(id) {
        if (id === 'virtual:load-fonts.jsx') return id;
      },
      load(id) {
        if (id === 'virtual:load-fonts.jsx') {
          // Always include Inter font as it's the default
          const fontsToLoad = collectedFonts.size > 0 ? collectedFonts : new Set(['Inter']);
          
          const code = `
      export function LoadFonts() {
        return (
          <>
            ${[...fontsToLoad]
              .map((font) => {
                return `<link rel="stylesheet" href="${getFontURL(font)}" />`;
              })
              .join('\n')}
          </>
        );
      }
      export default LoadFonts;
    `;
          return code;
        }
      },
      async handleHotUpdate({ file, server, modules }) {
        const fontsBefore = new Set(collectedFonts);
        await collectFonts();
        const fontsAfter = new Set(collectedFonts);
        if (
          fontsBefore.size === fontsAfter.size &&
          [...fontsBefore].every((f) => fontsAfter.has(f))
        ) {
          return;
        }
        const virtualModuleId = 'virtual:load-fonts.jsx';
        const mod = server.moduleGraph.getModuleById(virtualModuleId);
        if (!mod) {
          return;
        }
        server.reloadModule(mod);
        server.ws.send({
          type: 'custom',
          event: 'update-font-links',
          data: [...fontsAfter].map((font) => getFontURL(font)),
        });
      },
    },
  ];
}
