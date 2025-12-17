import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BackNavButton from "@/components/BackNavButton";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import ScrollTopButton from "@/components/ScrollTopButton";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  // Page scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);

  // GA: read measurement id from env (frontend-safe)
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const isProd = process.env.NODE_ENV === "production";

  // Add smooth, slightly faster custom scrolling for in-page anchor links
  useEffect(() => {
    // Respect user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    // CHANGED: use a gentler, more "buttery" easing (similar tail to Lenis)
    const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);
    const smoothScrollTo = (targetY, duration = 360) => {
      const startY = window.scrollY || window.pageYOffset;
      const diff = targetY - startY;
      if (Math.abs(diff) < 1) return; // nothing to do
      const startTime = performance.now();
      const step = (now) => {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = easeOutQuint(t);
        window.scrollTo({ top: startY + diff * eased, left: 0 });
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    // Anchor link smoother (header-aware)
    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      // Try to measure a fixed header if present
      const header = document.querySelector("header");
      const headerOffset = header ? Math.min(header.offsetHeight, 96) : 72;
      const rect = el.getBoundingClientRect();
      const targetY =
        (window.scrollY || window.pageYOffset) + rect.top - headerOffset;
      smoothScrollTo(targetY, 360); // CHANGED: a bit faster
    };

    // Keyboard-based smooth scrolling for a softer feel (arrows, page up/down, space)
    const onKeyDown = (e) => {
      // Avoid hijacking typing/inputs
      const tag = document.activeElement?.tagName?.toLowerCase();
      const isTyping =
        tag === "input" ||
        tag === "textarea" ||
        document.activeElement?.isContentEditable;
      if (isTyping) return;

      const key = e.key;
      const viewport = window.innerHeight;
      const currentY = window.scrollY || window.pageYOffset;

      // Map keys to deltas/targets
      if (key === "ArrowDown") {
        e.preventDefault();
        smoothScrollTo(currentY + 80, 240); // CHANGED: quicker micro-step
      } else if (key === "ArrowUp") {
        e.preventDefault();
        smoothScrollTo(currentY - 80, 240);
      } else if (key === "PageDown") {
        e.preventDefault();
        smoothScrollTo(currentY + Math.floor(viewport * 0.85), 380); // a touch faster
      } else if (key === "PageUp") {
        e.preventDefault();
        smoothScrollTo(currentY - Math.floor(viewport * 0.85), 380);
      } else if (key === " ") {
        // Spacebar
        e.preventDefault();
        const delta = Math.floor(viewport * 0.85) * (e.shiftKey ? -1 : 1);
        smoothScrollTo(currentY + delta, 380);
      } else if (key === "Home") {
        e.preventDefault();
        smoothScrollTo(0, 420);
      } else if (key === "End") {
        e.preventDefault();
        const maxY =
          Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
          ) - viewport;
        smoothScrollTo(maxY, 420);
      }
    };

    document.addEventListener("click", onAnchorClick, { passive: false });
    document.addEventListener("keydown", onKeyDown, { passive: false });

    return () => {
      document.removeEventListener("click", onAnchorClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Track scroll progress
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      setScrollProgress(Math.min(100, Math.max(0, (scrollTop / max) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for tasteful section reveal animations
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (reduce) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 },
    );
    const els = document.querySelectorAll("[data-animate]");
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Apply iPhone-style system font and 70/30/10 color balance baseline */}
      <div
        className="min-h-screen bg-white text-black"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
        }}
      >
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="fixed left-3 top-3 z-[100] -translate-y-16 focus:translate-y-0 transition-transform bg-black text-white px-3 py-2 rounded-md"
        >
          Skip to content
        </a>

        {/* Thin scroll progress bar */}
        <div
          aria-hidden
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: 3,
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #F4D03F, #C29C1A)",
            boxShadow: "0 0 8px rgba(194, 156, 26, 0.6)",
            zIndex: 60,
            transition: "width 120ms linear",
          }}
        />

        {/* Main app */}
        <main id="main-content">{children}</main>

        {/* Global back navigation button pinned near the bottom (over hero). Hidden on home. */}
        <BackNavButton />
      </div>
      {/* New global top button positioned above the chat button */}
      <ScrollTopButton />

      {/* Toasts */}
      <Toaster richColors position="top-center" />

      {/* Google Analytics (only if configured and in production) */}
      {isProd && GA_MEASUREMENT_ID ? (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          ></script>
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
          `}</script>
        </>
      ) : null}

      {/* Global reveal animations for [data-animate] */}
      <style jsx global>{`
        [data-animate] { opacity: 0; transform: translateY(14px); }
        .in-view { opacity: 1; transform: translateY(0); transition: opacity 500ms ease, transform 600ms cubic-bezier(0.22,1,0.36,1); }
      `}</style>
    </QueryClientProvider>
  );
}
