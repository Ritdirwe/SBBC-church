import { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";

export default function ChurchHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shrink, setShrink] = useState(0);
  // ADD: a nonce to retrigger item animations each time menu opens
  const [openNonce, setOpenNonce] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 120, 1);
      setShrink(progress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When menu opens, bump nonce so items remount and replay stagger animation
  useEffect(() => {
    if (isMenuOpen) {
      setOpenNonce((n) => n + 1);
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "The Vision", href: "/vision" },
    { name: "Institutions", href: "/education" },
    { name: "Operations", href: "/pastorium" },
    { name: "Finance & Investment", href: "/finance" },
    { name: "Lawson Foundation", href: "/foundation" },
    // Rename "News" to "Stream Live" (uppercase styling is applied via className)
    { name: "Stream Live", href: "/news#live" },
  ];

  // iOS-style smooth interpolation (larger, clearer at top; tidy when scrolled)
  const padY = 20 - shrink * 8; // top/bottom padding
  const logoSize = 55 - shrink * 17; // logo circle size: 55 -> 38 (reduced by 14%)
  // INCREASE: brand title size for higher pixel density appearance (28 -> 22)
  const titleSize = 28 - shrink * 6; // was 22 -> 16
  const crossSize = 22 - shrink * 6; // ✞ size remains balanced
  const taglineSize = 12 - shrink * 2; // tagline font: 12 -> 10
  // INCREASE: nav font size for clearer menu text (17 -> 16)
  const navSize = 17 - shrink * 1; // was 15 -> 14
  const headerOpacity = 1 - shrink;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out"
        style={{
          opacity: headerOpacity,
          pointerEvents: headerOpacity === 0 ? "none" : "auto",
        }}
      >
        <div
          className="px-6 sm:px-8"
          style={{ paddingTop: padY, paddingBottom: padY }}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto transition-all duration-300">
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
              <div
                className="rounded-full overflow-hidden flex items-center justify-center bg:white bg-white"
                style={{
                  width: logoSize,
                  height: logoSize,
                  boxShadow: "0 0 20px rgba(0,0,0,0.08)",
                  transition: "width 300ms ease, height 300ms ease",
                }}
              >
                {/* REPLACE cross with provided SBBC logo image */}
                <img
                  src="https://raw.createusercontent.com/160d9076-4e45-4665-8dc3-a03b2c64cb23/"
                  alt="SBBC Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <h1
                  className="font-playfair-display text-white tracking-tight"
                  style={{
                    fontSize: titleSize,
                    lineHeight: 1.05,
                    transition: "font-size 300ms ease",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "geometricPrecision",
                    letterSpacing: "-0.25px",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ display: "block" }}>SBBC</span>
                  <span style={{ display: "block" }}>Worldwide</span>
                </h1>
                <p
                  className="text-white/80"
                  style={{
                    fontSize: taglineSize,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "optimizeLegibility",
                    letterSpacing: "-0.1px",
                  }}
                >
                  Discipling The Whole World
                </p>
              </div>
              <div className="sm:hidden">
                <h1
                  className="font-playfair-display text-white tracking-tight"
                  style={{
                    fontSize: 20 - shrink * 3,
                    lineHeight: 1.05,
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "geometricPrecision",
                    letterSpacing: "-0.2px",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ display: "block" }}>SBBC</span>
                  <span style={{ display: "block" }}>Worldwide</span>
                </h1>
                {/* ADD: Tagline shown on mobile as requested */}
                <p
                  className="text-white/80"
                  style={{
                    fontSize: taglineSize,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "optimizeLegibility",
                    letterSpacing: "-0.1px",
                  }}
                >
                  Discipling The Whole World
                </p>
              </div>
            </div>

            {/* Desktop Navigation returned to original position (top-right) */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="uppercase font-medium text-white/90 hover:text-white transition-all duration-200 relative group"
                  style={{
                    fontSize: navSize,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "optimizeLegibility",
                    letterSpacing: "-0.1px",
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* REMOVED (hidden): Desktop menu row under the brand */}
          <div className="hidden">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="uppercase font-medium text-white/90 hover:text-white transition-all duration-200 relative group"
                  style={{
                    fontSize: navSize,
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                    textRendering: "optimizeLegibility",
                    letterSpacing: "-0.1px",
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Language selector removed per request */}
        </div>

        {/* Mobile controls: move to the very top of the page (viewport) */}
        <div className="lg:hidden px-6 sm:px-8">
          {/* CHANGED: use fixed positioning so the buttons sit at the top-right of the page */}
          {/* ADJUST: lowered buttons slightly (top-6 -> top-8) per request */}
          <div className="fixed top-8 right-4 flex flex-col items-end gap-2 z-50">
            {/* Menu button at top-right */}
            <button
              className="p-2 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              {isMenuOpen ? (
                <X size={29} color="white" />
              ) : (
                <Menu size={29} color="white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with smooth slide down & staggered drop-in */}
        <div
          id="mobile-menu-panel"
          className="lg:hidden overflow-hidden transition-all ease-out"
          style={{
            maxHeight: isMenuOpen ? "420px" : "0px", // a bit taller for large menus
            opacity: isMenuOpen ? 1 : 0,
            transform: `translateY(${isMenuOpen ? 0 : -8}px)`,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(16px)",
            borderTop: isMenuOpen ? "1px solid rgba(255,255,255,0.1)" : "none",
            transitionDuration: isMenuOpen ? "700ms" : "500ms", // slower, smoother open
          }}
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            {/* REMOVED: Inline language selector for mobile to keep the flag below menu */}
            {navItems.map((item, idx) => (
              <a
                // bump key with openNonce so animation restarts each open
                key={`${item.name}-${openNonce}`}
                href={item.href}
                className="uppercase font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 px-4 py-3 rounded-lg"
                style={{
                  // INCREASE: mobile drawer menu text size and clarity
                  fontSize: 17,
                  fontWeight: 600,
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility",
                  // Staggered drop-in animation
                  animationName: isMenuOpen ? "menuItemDrop" : "none",
                  animationDuration: "650ms",
                  animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  animationFillMode: "both",
                  animationDelay: `${idx * 90}ms`,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ADD: global keyframes for the staggered drop-in */}
      <style jsx global>{`
        @keyframes menuItemDrop {
          0% {
            opacity: 0;
            transform: translateY(-12px);
          }
          60% {
            opacity: 1;
            transform: translateY(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
