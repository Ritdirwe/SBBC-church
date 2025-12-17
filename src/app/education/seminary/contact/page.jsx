import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Mail, Phone, MapPin } from "lucide-react";

export default function SeminaryContactPage() {
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
              className="shrink-0 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg:white/10 text-sm text-black dark:text-white"
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
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=400&fit=crop&q=80"
          alt="Contact - Sunrise Theological School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Contact
            </h1>
            <p className="mt-2 text-white/85">We're here to help</p>
          </div>
        </div>
      </div>

      <Nav />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-xl font-bold text-black dark:text-white mb-2">
              Admissions
            </h2>
            <a
              href="mailto:admissions@sts.edu"
              className="flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]"
            >
              <Mail className="w-4 h-4" /> admissions@sts.edu
            </a>
            <a
              href="tel:+2347064200926"
              className="mt-2 flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]"
            >
              <Phone className="w-4 h-4" /> +234 706 420 0926
            </a>
          </div>
          <div className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-xl font-bold text-black dark:text:white mb-2">
              Academics
            </h2>
            <a
              href="mailto:academics@sts.edu"
              className="flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]"
            >
              <Mail className="w-4 h-4" /> academics@sts.edu
            </a>
          </div>
          <div className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-xl font-bold text-black dark:text:white mb-2">
              Headquarters
            </h2>
            <p className="flex items-start gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
              <MapPin className="w-4 h-4 mt-1" /> Sunrise Theological School,
              International HQ
            </p>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
