import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Mail } from "lucide-react";

const faculty = [
  {
    name: "Dr. Grace A. Mensah",
    role: "Dean, Biblical Studies",
    email: "g.mensah@sts.edu",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
  {
    name: "Rev. Samuel Okoye",
    role: "Director, Pastoral Ministry",
    email: "s.okoye@sts.edu",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80",
  },
  {
    name: "Prof. Adaeze Uche",
    role: "Church History & Doctrine",
    email: "a.uche@sts.edu",
    photo:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80",
  },
  {
    name: "Dr. Michael Ade",
    role: "Missiology & Evangelism",
    email: "m.ade@sts.edu",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80",
  },
];

export default function SeminaryFacultyPage() {
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
          src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=1600&h=400&fit=crop&q=80"
          alt="Faculty - Sunrise Theological School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Faculty & Staff
            </h1>
            <p className="mt-2 text-white/85">
              Biblical scholars and ministry practitioners
            </p>
          </div>
        </div>
      </div>

      <Nav />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((f) => (
            <div
              key={f.email}
              className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-4 border border-[#E9E9E9] dark:border-[#333333]"
            >
              <img
                src={f.photo}
                alt={f.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-bold text-black dark:text-white">
                {f.name}
              </h3>
              <p className="text-[#6E6E6E] dark:text-[#A0A0A0] mb-3">
                {f.role}
              </p>
              <a
                href={`mailto:${f.email}`}
                className="inline-flex items-center gap-2 text-[#9F7AEA]"
              >
                <Mail className="w-4 h-4" /> Contact
              </a>
            </div>
          ))}
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
