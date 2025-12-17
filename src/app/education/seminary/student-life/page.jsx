import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Users, Church, Heart } from "lucide-react";

export default function SeminaryStudentLifePage() {
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

  const items = [
    {
      icon: Church,
      title: "Chapel & Prayer",
      text: "Weekly worship, daily prayer rhythms, and spiritual retreats.",
    },
    {
      icon: Users,
      title: "Ministry Placements",
      text: "Hands-on service in churches and outreach ministries each term.",
    },
    {
      icon: Heart,
      title: "Community",
      text: "Small groups, mentoring, and student-led initiatives.",
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
          src="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?w=1600&h=400&fit=crop&q=80"
          alt="Student Life - Sunrise Theological School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Student Life
            </h1>
            <p className="mt-2 text-white/85">
              Grow in community, character, and calling
            </p>
          </div>
        </div>
      </div>

      <Nav />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center mb-3">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-black dark:text-white mb-1">
                {title}
              </h2>
              <p className="text-[#2B2B2B] dark:text-[#E0E0E0]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
