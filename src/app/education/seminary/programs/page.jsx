import { BookOpen, CheckCircle, FileText } from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function SeminaryProgramsPage() {
  const courses = [
    {
      title: "Certificate in Ministry",
      duration: "1 year (modular)",
      items: [
        "Bible Survey I & II",
        "Basics of Discipleship",
        "Intro to Evangelism",
        "Christian Foundations",
      ],
    },
    {
      title: "Diploma in Theology",
      duration: "2 years",
      items: [
        "Hermeneutics",
        "Systematic Theology I",
        "Church History",
        "Pastoral Ministry I",
      ],
    },
    {
      title: "Bachelor in Theology (BTh)",
      duration: "3-4 years",
      items: [
        "Greek/Hebrew (intro)",
        "Apologetics",
        "Homiletics",
        "Leadership & Admin",
      ],
    },
    {
      title: "Graduate Studies (MDiv/MA)",
      duration: "2-3 years",
      items: [
        "Advanced Exegesis",
        "Biblical Theology",
        "Pastoral Counseling",
        "Mission Strategy",
      ],
    },
  ];

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
          src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?w=1600&h=400&fit=crop&q=80"
          alt="Programs - Sunrise Theological School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Programs
            </h1>
            <p className="mt-2 text-white/85">
              Certificate, Diploma, Degree & Graduate studies
            </p>
          </div>
        </div>
      </div>

      <Nav />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {courses.map((c) => (
            <div
              key={c.title}
              className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {c.title}
                  </h3>
                  <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">
                    {c.duration}
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]"
                  >
                    <CheckCircle className="w-5 h-5 text-[#9F7AEA] mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/education/seminary/admissions#apply"
            className="px-5 py-3 rounded-lg bg-[#9F7AEA] hover:bg-[#805AD5] text-white font-semibold inline-flex items-center gap-2"
          >
            <FileText className="w-4 h-4" /> Apply Now
          </a>
          <a
            href="/education/seminary/faith"
            className="px-5 py-3 rounded-lg border border-black/10 dark:border-white/10 text-black dark:text-white"
          >
            Read Faith & Doctrine
          </a>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
