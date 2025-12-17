import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { DollarSign, CheckCircle } from "lucide-react";

export default function SeminaryTuitionAidPage() {
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
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&h=400&fit=crop&q=80"
          alt="Tuition & Aid - Sunrise Theological School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Tuition & Aid
            </h1>
            <p className="mt-2 text-white/85">
              Affordable training with scholarships and discounts
            </p>
          </div>
        </div>
      </div>

      <Nav />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Sample Tuition (per term)
            </h2>
            <ul className="space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
              <li>• Certificate: ₦300</li>
              <li>• Diploma: ₦450</li>
              <li>• BTh: ₦600</li>
              <li>• Graduate: ₦800</li>
            </ul>
            <p className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0] mt-3">
              Exact figures may vary by campus and course load.
            </p>
          </div>

          <div className="rounded-2xl p-6 border border-black/5 dark:border-white/10 bg-white dark:bg-[#1E1E1E]">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Scholarships & Discounts
            </h2>
            <ul className="space-y-2">
              {[
                "Pastoral/missionary discount",
                "Need-based scholarships",
                "Merit awards",
                "Payment plans",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  <CheckCircle className="w-5 h-5 text-[#9F7AEA] mt-0.5" /> {t}
                </li>
              ))}
            </ul>
            <a
              href="/education/seminary/admissions#apply"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9F7AEA] hover:bg-[#805AD5] text-white"
            >
              <DollarSign className="w-4 h-4" /> Apply for Aid
            </a>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
