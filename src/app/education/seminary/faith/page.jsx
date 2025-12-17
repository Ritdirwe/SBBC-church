import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function SeminaryFaithPage() {
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

  const statement = [
    {
      h: "Scripture",
      p: "We affirm the Holy Bible as the inspired, infallible Word of God and the supreme authority for faith and life.",
    },
    {
      h: "God",
      p: "We believe in one God, eternally existing in three Persons: Father, Son, and Holy Spirit.",
    },
    {
      h: "Jesus Christ",
      p: "We confess the full deity and humanity of Jesus Christ, His virgin birth, sinless life, substitutionary atonement, bodily resurrection, and return.",
    },
    {
      h: "Salvation",
      p: "We are saved by grace through faith in Jesus Christ alone. The Holy Spirit regenerates, indwells, and sanctifies believers.",
    },
    {
      h: "Church",
      p: "The universal Church is the Body of Christ, called to worship, discipleship, and mission in the world.",
    },
    {
      h: "Mission",
      p: "We embrace the Great Commission to make disciples of all nations, proclaiming the gospel in word and deed.",
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
          src="https://images.unsplash.com/photo-1533001168400-33df6d0d63f4?w=1600&h=400&fit=crop&q=80"
          alt="Faith & Doctrine - Sunrise Theological School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Faith & Doctrine
            </h1>
            <p className="mt-2 text-white/85">
              Our core convictions shape every class and ministry
            </p>
          </div>
        </div>
      </div>

      <Nav />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {statement.map((s) => (
            <div
              key={s.h}
              className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]"
            >
              <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                {s.h}
              </h2>
              <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
