import { Target, ShieldCheck, Quote, Megaphone, Globe } from "lucide-react";

export function VisionDetails() {
  return (
    <section data-animate className="py-16 px-6 bg-[#0e1219]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-base md:text-lg text-white/80 leading-relaxed">
            To disciple the Nations with the transformative message of holiness
            with prosperity, raising a generation of Christ centered leaders to
            embody integrity, walk in divine abundance, and shape societies with
            kingdom influence until the whole world reflects the glory of God.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-hidden="true"
            >
              <Target className="w-5 h-5 text-[#C29C1A]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                Our Mission
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                To proclaim Christ, disciple believers in holiness and empower
                them to prosper and transform the world for God's glory.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-hidden="true"
            >
              <ShieldCheck className="w-5 h-5 text-[#C29C1A]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                Core Values
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                Intercession (2) · Holiness (3) · Mission (4) · Welfare
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-hidden="true"
            >
              <Quote className="w-5 h-5 text-[#C29C1A]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                Our Motto
              </h3>
              <p className="text-white/80 text-base leading-relaxed italic">
                "We Believe God, We Believe What God Says" — Ephe. 3:20
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-hidden="true"
            >
              <Megaphone className="w-5 h-5 text-[#C29C1A]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                Message
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                "Reaching the world with the gospel of Holiness with Prosperity"
                — 2 Peter 1:3
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-[#0f131a] border border-white/10 rounded-2xl p-5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(244,208,63,0.25), rgba(194,156,26,0.18))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-hidden="true"
            >
              <Globe className="w-5 h-5 text-[#C29C1A]" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                The Mandate
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                Discipling the Whole World — Matthew 28:19
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
