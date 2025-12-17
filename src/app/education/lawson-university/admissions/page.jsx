import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ClipboardList, ArrowRight, CheckCircle, FileText } from "lucide-react";

export default function LawsonAdmissionsPage() {
  const steps = [
    {
      title: "Start Application",
      desc: "Create your profile and tell us about your goals.",
    },
    {
      title: "Submit Documents",
      desc: "Upload transcripts, ID, test scores (if any).",
    },
    {
      title: "Review & Decision",
      desc: "Admissions team reviews and sends next steps.",
    },
    {
      title: "Enroll",
      desc: "Secure your place and choose your courses.",
    },
  ];

  const requirements = [
    "Completed application form",
    "Official transcripts (all schools attended)",
    "Government-issued ID / Passport",
    "English proficiency (where required)",
    "Two recommendation letters (graduate/doctoral)",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full h-72">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1800&h=480&fit=crop&q=80"
          alt="Admissions at Lawson University"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <ClipboardList className="w-16 h-16 text-[#F4D03F] mx-auto mb-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Admissions
            </h1>
            <p className="mt-2 text-white/90 max-w-2xl mx-auto">
              Join a vibrant learning community focused on impact and
              excellence.
            </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
            How to Apply
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.title}
                className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {s.title}
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0] mt-2">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-8 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Admission Requirements
          </h2>
          <ul className="space-y-3">
            {requirements.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]"
              >
                <CheckCircle className="w-5 h-5 text-[#F4D03F] flex-shrink-0 mt-1" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="/education/lawson-university#apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105"
            >
              Start Your Application <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
