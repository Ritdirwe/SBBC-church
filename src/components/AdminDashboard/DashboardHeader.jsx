import { useEffect, useState } from "react";

export function DashboardHeader() {
  // Track fullscreen state to toggle button label
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fsError, setFsError] = useState(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const enterFullscreen = async () => {
    setFsError(null);
    try {
      const el = document.documentElement;
      const anyEl = el;
      if (el.requestFullscreen) {
        await el.requestFullscreen();
      } else if (anyEl.webkitRequestFullscreen) {
        // Safari
        await anyEl.webkitRequestFullscreen();
      } else if (anyEl.msRequestFullscreen) {
        await anyEl.msRequestFullscreen();
      } else {
        setFsError("Fullscreen not supported by this browser");
      }
    } catch (e) {
      console.error(e);
      setFsError(
        "Could not enter fullscreen. Your browser may be blocking it.",
      );
    }
  };

  const exitFullscreen = async () => {
    setFsError(null);
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      }
    } catch (e) {
      console.error(e);
      setFsError("Could not exit fullscreen");
    }
  };

  return (
    <div className="bg-white border-b border-[#E9E9E9] px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-black">Admin Dashboard</h1>
          <p className="text-[#6E6E6E] mt-1">
            Manage your church website content and view submissions
          </p>
        </div>

        {/* External Preview / Fullscreen toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={isFullscreen ? exitFullscreen : enterFullscreen}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black text-white hover:bg-[#111] active:bg-[#000] transition-colors shadow-sm"
            title={
              isFullscreen
                ? "Exit Fullscreen (Esc)"
                : "External Preview (Fullscreen)"
            }
          >
            {/* Icon: expand/contract drawn in pure CSS to avoid imports */}
            <span aria-hidden className="relative inline-block w-4 h-4">
              <span
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 40%, white 40% 60%, transparent 60%)",
                  maskImage:
                    "linear-gradient(135deg, transparent 47%, black 47% 53%, transparent 53%)",
                }}
              />
            </span>
            <span className="font-semibold text-sm">
              {isFullscreen ? "Exit Fullscreen" : "External Preview"}
            </span>
          </button>
          <a
            href="/admin?bypass=1"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full px-4 py-2 border border-[#E9E9E9] text-[#111] hover:bg-[#F7F7F7] transition-colors"
            title="Open dashboard in a new tab"
          >
            Open in new tab →
          </a>
        </div>
      </div>
      {fsError ? (
        <div className="max-w-7xl mx-auto mt-2 text-sm text-[#9b1c1c] bg-[#fff5f5] border border-[#ffd6d6] rounded-md px-3 py-2">
          {fsError} — try the “Open in new tab” option instead.
        </div>
      ) : null}
      <div className="max-w-7xl mx-auto mt-1 text-xs text-[#6E6E6E]">
        Tip: Press Esc to exit fullscreen.
      </div>
    </div>
  );
}
