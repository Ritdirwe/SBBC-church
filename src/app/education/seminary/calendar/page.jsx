import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function SeminaryCalendarPage() {
  const Nav = () => (
    <nav className="w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-3 overflow-x-auto py-3 no-scrollbar">
          {[
            { title: "Overview", href: "/education/seminary" },
            { title: "Programs", href: "/education/seminary/programs" },
            { title: "Admissions", href: "/education/seminary/admissions" },
            { title: "Tuition & Aid", href: "/education/seminary/tuition-aid" },
            { title: "Faculty", href: "/education/seminary/faculty" },
            { title: "Calendar", href: "/education/seminary/calendar" },
            { title: "Faith & Doctrine", href: "/education/seminary/faith" },
            { title: "Student Life", href: "/education/seminary/student-life" },
            { title: "Contact", href: "/education/seminary/contact" },
          ].map((l) => (
            <a
              key={l.title}
              href={l.href}
              className="shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-sm text-black dark:text-white"
            >
              {l.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );

  const terms = [
    {
      title: "Fall Term",
      dates: [
        "Classes begin: Sept 1",
        "Midterm: Oct 15",
        "Break: Nov 1-7",
        "Final exams: Dec 10-15",
      ],
    },
    {
      title: "Spring Term",
      dates: [
        "Classes begin: Jan 15",
        "Midterm: Mar 1",
        "Break: Apr 10-14",
        "Final exams: May 25-30",
      ],
    },
    {
      title: "Summer Term",
      dates: ["Modules: Jun-Jul", "Practicum & Missions: Aug"],
    },
  ];

  return (
    <div
      className="min-h-screen bg-white dark:bg-[#121212]"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
      }}
    >
      <ChurchHeader />

      <div className="relative w-full h-64">
        <img
          src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=1600&h=400&fit=crop&q=80"
          alt="Academic Calendar - Sunrise Theological School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Academic Calendar
            </h1>
            <p className="mt-2 text-white/85">
              Key dates across the academic year
            </p>
          </div>
        </div>
      </div>

      <Nav />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {terms.map((t) => (
            <div
              key={t.title}
              className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]"
            >
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                {t.title}
              </h2>
              <ul className="space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
                {t.dates.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
