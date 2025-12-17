import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      try {
        setVisible(window.scrollY > 200);
      } catch (e) {
        // no-op
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  };

  // simple fade/slide for mount/unmount feel without heavy animations
  const style = {
    opacity: visible ? 1 : 0,
    transform: `translateY(${visible ? 0 : 8}px)`,
    transition: "opacity 180ms ease, transform 180ms ease",
    pointerEvents: visible ? "auto" : "none",
  };

  return (
    <div
      className="fixed right-6 z-40 flex items-center gap-2"
      // Keep aligned above the (smaller) chat button: 24px bottom + 40px size + 24px gap = 88px
      style={{ bottom: "88px", ...style }}
      aria-hidden={!visible}
    >
      <button
        onClick={handleClick}
        aria-label="Scroll to top"
        className="w-10 h-10 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C29C1A]/50 hover:-translate-y-0.5 hover:scale-105"
        style={{
          background: "linear-gradient(90deg, #F4D03F, #C29C1A)",
        }}
      >
        <ArrowUp className="w-5 h-5 mx-auto text-black" />
      </button>
    </div>
  );
}
