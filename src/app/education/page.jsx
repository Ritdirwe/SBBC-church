import {
  GraduationCap,
  Code,
  ArrowRight,
  Trophy,
  Heart,
  BookOpen,
  Send,
  BadgeDollarSign,
  MapPin,
  Search,
  PlayCircle,
} from "lucide-react";
// Removed slider-related hooks since we're reverting to the original design
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead"; // added

export default function EducationPage() {
  // Reverted: removed admissions slider logic

  const schools = [
    {
      name: "Lawson University",
      icon: GraduationCap,
      description:
        "A modern university offering Bachelor's, Master's, and Doctorate degrees across disciplines.",
      href: "/education/lawson-university", // updated route to match new name
      color: "from-[#F4D03F] to-[#C29C1A]",
      category: "University",
    },
    {
      name: "Mandate Institute of Innovation and Technology",
      icon: Code,
      description:
        "Learn cutting-edge technology skills and prepare for the digital economy.",
      href: "/education/tech-hub",
      color: "from-[#4FD1C5] to-[#38B2AC]",
      category: "Institute",
    },
    {
      name: "Sunrise Theological School",
      iconType: "image",
      iconSrc:
        "https://ucarecdn.com/e129ad09-93b4-493e-80de-5a09fc4f7f26/-/format/auto/",
      description:
        "Deepen your understanding of Scripture and prepare for ministry leadership.",
      href: "/education/seminary",
      color: "from-[#9F7AEA] to-[#805AD5]",
      category: "Seminary",
    },
    // Added new academies
    {
      name: "Football Academy",
      icon: Trophy,
      description:
        "Develop talent with elite coaching, fitness, and competitive play pathways.",
      href: "/education/football-academy",
      color: "from-[#34D399] to-[#059669]", // green
      category: "Academy",
    },
    {
      name: "Marriage Academy",
      icon: Heart,
      description:
        "Courses and mentoring for premarital, marriage enrichment, and family life.",
      href: "/education/marriage-academy",
      color: "from-[#FB7185] to-[#F43F5E]", // rose/red
      category: "Academy",
    },
    {
      name: "Deep Knowledge Academy",
      icon: BookOpen,
      description:
        "Intensive study tracks to grow depth in truth, wisdom, and leadership.",
      href: "/education/deep-knowledge-academy",
      color: "from-[#60A5FA] to-[#3B82F6]", // blue
      category: "Academy",
    },
  ];

  // Featured program links used for the Programs count and CTA grid
  const featuredPrograms = [
    {
      title: "Undergraduate (Lawson)",
      href: "/education/lawson-university/undergraduate",
      color: "from-[#F4D03F] to-[#C29C1A]",
      icon: GraduationCap,
    },
    {
      title: "Masters (Lawson)",
      href: "/education/lawson-university/masters",
      color: "from-[#E6B422] to-[#C29C1A]",
      icon: GraduationCap,
    },
    {
      title: "Doctorate (Lawson)",
      href: "/education/lawson-university/doctorate",
      color: "from-[#D2A400] to-[#A07C00]",
      icon: GraduationCap,
    },
    {
      title: "Seminary Programs",
      href: "/education/seminary/programs",
      color: "from-[#9F7AEA] to-[#805AD5]",
      icon: BookOpen,
    },
  ];

  // Fetch live counts for Applicants and Students (public endpoints)
  const {
    data: admissions = [],
    isLoading: admLoading,
    error: admError,
  } = useQuery({
    queryKey: ["school-admission"],
    queryFn: async () => {
      const res = await fetch("/api/school-admission");
      if (!res.ok) {
        throw new Error(
          `When fetching /api/school-admission, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
  });

  const {
    data: students = [],
    isLoading: stuLoading,
    error: stuError,
  } = useQuery({
    queryKey: ["students-all"],
    queryFn: async () => {
      const res = await fetch("/api/students");
      if (!res.ok) {
        throw new Error(
          `When fetching /api/students, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
  });

  const totalApplicants = Array.isArray(admissions) ? admissions.length : 0;
  const totalStudents = Array.isArray(students) ? students.length : 0;

  // Search and filter controls
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const categories = ["All", "University", "Institute", "Seminary", "Academy"];
  const filteredSchools = useMemo(() => {
    const term = search.trim().toLowerCase();
    return schools.filter((s) => {
      const matchCat = cat === "All" || s.category === cat;
      if (!term) return matchCat;
      const hay = `${s.name} ${s.description}`.toLowerCase();
      return matchCat && hay.includes(term);
    });
  }, [schools, search, cat]);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        // iOS-inspired layered gray with a cool blue tint
        background:
          "radial-gradient(1200px 600px at 10% -10%, rgba(74,88,119,0.10), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(25,32,44,0.30), transparent 60%), linear-gradient(180deg, #0b0e14 0%, #0f131a 40%, #10151f 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, sans-serif',
      }}
    >
      {/* SEO */}
      <SEOHead path="/education" />
      <ChurchHeader />

      {/* Hero updated with frosted glass title card */}
      <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=800&fit=crop&q=80"
          alt="Education hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0d121a]/60 to-[#0d121a]/90" />

        {/* Floating glass panel */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          {/* REMOVE reveal/hide dependency: drop the reveal class */}
          <div className="backdrop-blur-xl bg-white/7 border border-white/15 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 md:p-8 max-w-3xl w-full text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs md:text-sm mb-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Explore Our Institutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Education
            </h1>
            <p className="mt-3 md:mt-4 text-white/80 md:text-lg">
              Discover pathways in academia, ministry, technology, sports, and
              family life.
            </p>
          </div>
        </div>
      </div>

      {/* Quick actions dock beneath hero */}
      {/* remove unused data-animate flag to avoid invisible states */}
      <section className="px-6 -mt-10 md:-mt-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="w-full backdrop-blur-xl bg-white/8 border border-white/15 rounded-2xl p-3 overflow-x-auto">
            <div className="flex gap-3 md:gap-4 min-w-max">
              <a
                href="/education/lawson-university/admissions"
                className="action-chip"
              >
                <Send className="w-4 h-4" /> Apply Now
              </a>
              <a href="/education/seminary/admissions" className="action-chip">
                <Send className="w-4 h-4" /> Seminary Admissions
              </a>
              <a
                href="/education/lawson-university/tuition-aid"
                className="action-chip"
              >
                <BadgeDollarSign className="w-4 h-4" /> Scholarships & Aid
              </a>
              <a href="/education/lawson-university" className="action-chip">
                <MapPin className="w-4 h-4" /> Visit Campus
              </a>
              <a href="/education" className="action-chip">
                <PlayCircle className="w-4 h-4" /> Explore Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and category filters */}
      <section className="mt-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-white/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search institutions…"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/10 border border-white/15 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto md:overflow-visible">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-2 rounded-xl border ${
                  cat === c
                    ? "bg-white/15 border-white/30 text-white"
                    : "bg-white/5 border-white/10 text-white/85 hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* REMOVE reveal/hide dependency: drop the reveal class */}
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Our Educational Institutions
          </h2>

          {filteredSchools.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {filteredSchools.map((school, index) => {
                // Defensive: fallback icon to avoid render errors
                const IconComp = school.icon || GraduationCap;
                return (
                  <a
                    key={index}
                    href={school.href}
                    className="group relative block rounded-3xl p-6 md:p-8 bg-white/6 hover:bg-white/8 border border-white/12 hover:border-white/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                  >
                    {/* Icon tile */}
                    <div className="relative w-20 h-20 rounded-2xl mb-6 shadow-lg overflow-hidden">
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${school.color}`}
                      />
                      <div className="absolute inset-0 bg-white/10" />
                      <div className="absolute -inset-8 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%)] animate-sheen" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        {school.iconType === "image" ? (
                          <img
                            src={school.iconSrc}
                            alt={`${school.name} logo`}
                            className="w-[84px] h-[84px] object-contain"
                          />
                        ) : (
                          <IconComp className="w-10 h-10 text-white" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight mb-1">
                      {school.name}
                    </h3>
                    <div className="inline-flex items-center text-[11px] uppercase tracking-wide text-white/70 mb-2 px-2 py-0.5 rounded-full border border-white/15 bg-white/5">
                      {school.category}
                    </div>
                    <p className="text-white/80 pr-8">{school.description}</p>

                    {/* CTA */}
                    <div className="mt-6 inline-flex items-center gap-2 text-amber-300/90 group-hover:text-amber-200 transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>

                    {/* Subtle gradient border shine on hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/25" />
                  </a>
                );
              })}
            </div>
          ) : (
            // No results state: avoid large empty gaps
            <div className="mx-auto max-w-2xl text-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-8">
              <div className="text-lg font-semibold">No institutions found</div>
              <p className="text-white/80 mt-2 text-sm">
                Try clearing the search or selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured programs */}
      <section className="py-6 md:py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Featured Programs
            </h3>
            <a
              href="/education/lawson-university"
              className="text-amber-300/90 hover:text-amber-200 text-sm"
            >
              See all programs →
            </a>
          </div>
          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            {featuredPrograms.map((fp, idx) => (
              <a
                key={idx}
                href={fp.href}
                className="group rounded-2xl p-5 bg-white/6 hover:bg-white/8 border border-white/12 hover:border-white/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative w-14 h-14 rounded-xl mb-4 overflow-hidden shadow">
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${fp.color}`}
                  />
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="absolute -inset-6 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%)] animate-sheen" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <fp.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="font-semibold leading-snug">{fp.title}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-amber-300/90 group-hover:text-amber-200 text-xs">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />

      {/* animations for reveal-on-scroll and sheen */}
      <style jsx global>{`
        @keyframes slideUpSoft {
          0% { opacity: 0; transform: translateY(22px) scale(0.98); filter: blur(6px); }
          60% { opacity: 1; transform: translateY(-2px) scale(1); filter: blur(0); }
          100% { transform: translateY(0); }
        }
        .reveal { opacity: 0; }
        .reveal.show { animation: slideUpSoft 650ms cubic-bezier(0.22, 1, 0.36, 1) both; }
        @keyframes sheen {
          0% { transform: translateX(-40%); opacity: 0; }
          40% { opacity: 0.9; }
          100% { transform: translateX(40%); opacity: 0; }
        }
        .animate-sheen { animation: sheen 2.8s ease-in-out infinite; }
        /* soft floating used for chips */
        @keyframes floaty { 0% { transform: translateY(0px); } 50% { transform: translateY(-2px); } 100% { transform: translateY(0px); } }
        .action-chip { display: inline-flex; align-items: center; gap: 8px; font-weight: 500; color: white; padding: 10px 14px; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); backdrop-filter: blur(8px); transition: all 200ms ease; white-space: nowrap; }
        .action-chip:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }
        .stat-card { backdrop-filter: blur(12px); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.18); border-radius: 16px; padding: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.25); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; filter: none !important; }
          .reveal.show { animation: none !important; }
          .animate-sheen { animation: none !important; }
          .action-chip { transform: none !important; }
        }
      `}</style>
    </div>
  );
}
