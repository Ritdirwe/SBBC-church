import { Play, MapPin, Heart, Users } from "lucide-react";

export function QuickActionsDock({ mapsDirectionsUrl }) {
  return (
    <section data-animate className="px-6 -mt-8 md:-mt-12">
      <div className="max-w-6xl mx-auto">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 rounded-3xl p-3 md:p-4 shadow-xl border"
          style={{
            background: "rgba(255,255,255,0.06)",
            borderColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          {/* Give */}
          <a
            href="https://paystack.com/pay/sbbcworldwide"
            target="_blank"
            rel="noopener noreferrer"
            className="ios-cta group rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 border transition-all"
            style={{
              background: "rgba(15,19,26,0.7)",
              borderColor: "rgba(255,255,255,0.12)",
              animationDelay: "0s",
            }}
            aria-label="Give Online"
          >
            <div
              className="ios-icon rounded-xl p-3 shadow"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244,208,63,0.35), rgba(194,156,26,0.25))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Heart className="w-6 h-6 text-black" />
            </div>
            <span className="text-sm font-semibold text-white/90">Give</span>
          </a>

          {/* Visit */}
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ios-cta group rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 border transition-all"
            style={{
              background: "rgba(15,19,26,0.7)",
              borderColor: "rgba(255,255,255,0.12)",
              animationDelay: "0.15s",
            }}
            aria-label="Get Directions"
          >
            <div
              className="ios-icon rounded-xl p-3 shadow"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-white/90">Visit</span>
          </a>

          {/* Stream */}
          <a
            href="/messages"
            className="ios-cta group rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 border transition-all"
            style={{
              background: "rgba(15,19,26,0.7)",
              borderColor: "rgba(255,255,255,0.12)",
              animationDelay: "0.3s",
            }}
            aria-label="Stream Services"
          >
            <div
              className="ios-icon rounded-xl p-3 shadow"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244,208,63,0.30), rgba(194,156,26,0.22))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Play className="w-6 h-6 text-black" />
            </div>
            <span className="text-sm font-semibold text-white/90">Stream</span>
          </a>

          {/* Join */}
          <a
            href="/join"
            className="ios-cta group rounded-2xl px-4 py-5 flex flex-col items-center justify-center gap-3 border transition-all"
            style={{
              background: "rgba(15,19,26,0.7)",
              borderColor: "rgba(255,255,255,0.12)",
              animationDelay: "0.45s",
            }}
            aria-label="Join Departments"
          >
            <div
              className="ios-icon rounded-xl p-3 shadow"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-white/90">Join</span>
          </a>
        </div>
      </div>

      {/* iOS-style micro-interactions for the dock buttons */}
      <style jsx global>{`
        @keyframes ios-float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }
        @keyframes ios-glow {
          0% { box-shadow: 0 8px 24px rgba(255, 215, 64, 0.06); }
          50% { box-shadow: 0 10px 28px rgba(255, 215, 64, 0.14); }
          100% { box-shadow: 0 8px 24px rgba(255, 215, 64, 0.06); }
        }
        .ios-cta {
          will-change: transform, box-shadow, filter;
          transform: translateZ(0);
          transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
                      box-shadow 220ms ease,
                      border-color 220ms ease,
                      background 220ms ease;
          animation: ios-float 6s ease-in-out infinite;
        }
        .ios-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.18), 0 6px 14px rgba(0,0,0,0.12);
          border-color: rgba(255,255,255,0.18);
          filter: saturate(1.05);
        }
        .ios-cta:active {
          transform: translateY(0) scale(0.98);
          transition-duration: 120ms;
        }
        .ios-cta:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.35), 0 10px 26px rgba(0,0,0,0.16);
        }
        .ios-cta .ios-icon {
          transition: transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
                      filter 220ms ease;
        }
        .ios-cta:hover .ios-icon {
          transform: translateY(-2px) scale(1.04);
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.25));
        }
        /* Give gets a subtle golden glow to draw attention */
        a[aria-label="Give Online"] .ios-icon { animation: ios-glow 3.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
