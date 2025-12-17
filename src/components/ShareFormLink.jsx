import { useEffect, useMemo, useState } from "react";
import { Share2, Link as LinkIcon } from "lucide-react";

/**
 * ShareFormLink
 * Renders a small share row you can drop under any form.
 * - Uses Web Share API when available
 * - Falls back to platform share links and copy-to-clipboard
 *
 * Props:
 * - label?: string - Heading text (default: "Share this form")
 * - anchor?: string - e.g. "#apply" to deep-link to the form on the page
 */
export default function ShareFormLink({
  label = "Share this form",
  anchor = "",
}) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const url = `${window.location.origin}${window.location.pathname}${anchor || ""}`;
        setShareUrl(url);
      } catch (e) {
        console.error(e);
      }
    }
  }, [anchor]);

  const text = "I thought you might want to fill this form.";
  const title = "Form";

  const encodedUrl = useMemo(
    () => encodeURIComponent(shareUrl || ""),
    [shareUrl],
  );
  const encodedText = useMemo(() => encodeURIComponent(text), []);
  const encodedTitle = useMemo(() => encodeURIComponent(title), []);

  const links = useMemo(() => {
    return [
      {
        name: "WhatsApp",
        href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      },
      {
        name: "Telegram",
        href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      },
      {
        name: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      },
      {
        name: "X",
        href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      },
      {
        name: "Email",
        href: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A${encodedUrl}`,
      },
    ];
  }, [encodedText, encodedUrl, encodedTitle]);

  const onWebShare = async () => {
    try {
      if (navigator.share && shareUrl) {
        await navigator.share({ title, text, url: shareUrl });
        return;
      }
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard");
    } catch (e) {
      console.error(e);
    }
  };

  const onCopy = async () => {
    try {
      if (!shareUrl) return;
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#E9E9E9] dark:border-[#2A2A2A] bg-white/80 dark:bg-[#1E1E1E]/80 text-black dark:text-white shadow-sm">
        <Share2 className="w-4 h-4 text-[#C29C1A]" />
        <span className="font-medium">{label}</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onWebShare}
          className="px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white hover:bg-white/70 dark:hover:bg-[#2A2A2A]"
          aria-label="Share using native share or copy"
        >
          Use Share
        </button>
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white hover:bg-white/70 dark:hover:bg-[#2A2A2A]"
            aria-label={`Share on ${l.name}`}
          >
            {l.name}
          </a>
        ))}
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white"
        >
          <LinkIcon className="w-4 h-4" /> Copy link
        </button>
      </div>
    </div>
  );
}
