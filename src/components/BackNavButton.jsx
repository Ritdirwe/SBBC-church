import { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function BackNavButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      if (typeof window === "undefined") return;
      const path = window.location.pathname;
      const notHome = path !== "/";
      const canGoBack = window.history.length > 1;
      // Show if not on home OR there is history to go back
      setShow(notHome || canGoBack);
    };

    updateVisibility();
    window.addEventListener("popstate", updateVisibility);
    return () => window.removeEventListener("popstate", updateVisibility);
  }, []);

  const handleBack = () => {
    if (typeof window === "undefined") return;
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  if (!show) return null;

  return (
    <button
      onClick={handleBack}
      aria-label="Go back"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[55] w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
      style={{
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "0.5px solid rgba(255,255,255,0.2)",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
      }}
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
}
