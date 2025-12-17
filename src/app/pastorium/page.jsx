import {
  Target,
  Users,
  Music,
  UserCircle,
  Video,
  ArrowRight,
  Building,
} from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

export default function PastoriumPage() {
  const sections = [
    {
      name: "Be Mandate",
      icon: Target,
      description: "Our mission to transform lives and communities worldwide.",
      color: "from-[#F4D03F] to-[#C29C1A]",
    },
    {
      name: "Youth Church",
      icon: Users,
      description: "Empowering the next generation with faith and purpose.",
      color: "from-[#4FD1C5] to-[#38B2AC]",
    },
    {
      name: "Worship/Intersensory",
      icon: Music,
      description:
        "Experience God through powerful worship and creative expression.",
      color: "from-[#9F7AEA] to-[#805AD5]",
    },
    {
      name: "The Pastors",
      icon: UserCircle,
      description:
        "Meet our dedicated pastoral team serving the global church.",
      color: "from-[#F56565] to-[#C53030]",
    },
    {
      name: "Media Hub",
      icon: Video,
      description: "Watch sermons, testimonies, and stay connected digitally.",
      color: "from-[#ED8936] to-[#C05621]",
    },
    // Added new section: Church Structures
    {
      name: "Church Structures",
      icon: Building,
      description: "How our church is organized for ministry and service.",
      color: "from-[#60A5FA] to-[#2563EB]",
    },
  ];

  return (
    <div
      className="min-h-screen text-white font-inter"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% -10%, rgba(74,88,119,0.15), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(25,32,44,0.35), transparent 60%), linear-gradient(180deg, #0b0e14 0%, #0f131a 40%, #10151f 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, sans-serif',
      }}
    >
      {/* SEO */}
      <SEOHead path="/pastorium" />
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full">
        <div className="relative w-full h-[360px] md:h-[440px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=700&fit=crop&q=80"
            alt="Pastorium"
            className="w-full h-full object-cover scale-105"
          />
          {/* gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(800px 240px at 20% 10%, rgba(255,255,255,0.07), transparent 60%)",
            }}
          />

          {/* iOS glass title pill */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div
              className="backdrop-blur-md bg-white/10 border border-white/15 rounded-3xl px-6 py-3 md:px-8 md:py-4 shadow-[0_8px_40px_rgba(0,0,0,0.35)] animate-fadeSlideUp"
              aria-label="Operations Header"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <span className="inline-flex w-2 h-2 rounded-full bg-[#F4D03F] shadow-[0_0_0_4px_rgba(244,208,63,0.2)]" />
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Operations
                </h1>
                <span className="hidden md:inline-flex text-sm md:text-base text-white/80">
                  • Ministry pillars & teams
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Intro */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto -mt-10 md:-mt-12" data-animate>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-white/80 text-base md:text-lg">
                  Explore the pillars that power our ministry. Tap any card to
                  dive deeper.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active initiatives
                </span>
                <span className="hidden md:inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/70">
                  iOS-inspired UI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sections.map((section, index) => {
              // compute slug and Icon for link and rendering
              const slug = section.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
              const Icon = section.icon;

              return (
                <a
                  key={index}
                  href={`/pastorium/${slug}`}
                  aria-label={`${section.name} - Learn more`}
                  className="group rounded-2xl relative overflow-hidden"
                  style={{
                    boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
                  }}
                >
                  {/* Card chrome: glass + border */}
                  <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-white/6 border border-white/10" />

                  {/* subtle highlight sweep on hover */}
                  <div className="absolute -inset-x-20 -top-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 [transform:skewY(-8deg)] animate-none group-hover:animate-sheen" />

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-lg shadow-black/30 group-hover:scale-[1.03] transition-transform`}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                      {section.name}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base mb-5">
                      {section.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#F4D03F] font-medium">
                      <span>Learn more</span>
                      <ArrowRight
                        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Accent ring on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/15 transition-colors" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp { animation: fadeSlideUp 600ms cubic-bezier(0.22, 1, 0.36, 1) both; }

        @keyframes sheen {
          0% { transform: translateX(-120%) skewY(-8deg); }
          100% { transform: translateX(120%) skewY(-8deg); }
        }
        .animate-sheen { animation: sheen 1200ms ease-in-out; }

        @media (prefers-reduced-motion: reduce) {
          [class*="animate-"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
