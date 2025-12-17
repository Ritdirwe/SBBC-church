import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Wallet, BadgeDollarSign, ArrowRight } from "lucide-react";

export default function LawsonTuitionAidPage() {
  const tuition = [
    {
      level: "Bachelor's (per year)",
      amount: "₦6,500",
      notes: "Varies by program and labs.",
    },
    {
      level: "Master's (per year)",
      amount: "₦8,200",
      notes: "Varies by program; capstone fees may apply.",
    },
    {
      level: "Doctorate (per year)",
      amount: "₦9,500",
      notes: "Research/supervision fees vary by department.",
    },
  ];

  const aid = [
    {
      title: "Merit Scholarships",
      desc: "Awarded based on academic excellence. Automatic consideration on application.",
    },
    {
      title: "Need-Based Aid",
      desc: "Designed to support students with demonstrated financial need.",
    },
    {
      title: "Graduate Assistantships",
      desc: "Teaching/research roles that provide stipends and tuition support.",
    },
    {
      title: "Work-Study",
      desc: "On-campus roles that fit around your studies.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full h-72">
        <img
          src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=1800&h=480&fit=crop&q=80"
          alt="Tuition & Aid"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <Wallet className="w-16 h-16 text-[#F4D03F] mx-auto mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Tuition & Aid
            </h1>
            <p className="mt-2 text-white/90 max-w-2xl mx-auto">
              Affordable paths, generous scholarships, and transparent costs.
            </p>
          </div>
        </div>
      </div>

      {/* Tuition Table */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Estimated Tuition
          </h2>
          <div className="space-y-4">
            {tuition.map((t) => (
              <div
                key={t.level}
                className="flex items-start justify-between bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]"
              >
                <div>
                  <p className="text-lg font-semibold text-black dark:text-white">
                    {t.level}
                  </p>
                  <p className="text-[#6E6E6E] dark:text-[#A0A0A0] text-sm">
                    {t.notes}
                  </p>
                </div>
                <p className="text-2xl font-bold text-[#0B132B] dark:text-white">
                  {t.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aid */}
      <section className="py-8 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            Scholarships & Support
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aid.map((a) => (
              <div
                key={a.title}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]"
              >
                <div className="flex items-center gap-3">
                  <BadgeDollarSign className="w-6 h-6 text-[#C29C1A]" />
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {a.title}
                  </h3>
                </div>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0] mt-2">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/education/lawson-university/admissions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              See Admission Requirements <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
