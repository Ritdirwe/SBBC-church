import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle,
  Paperclip,
  PlayCircle,
  Calendar,
  Users,
  Shield,
  Sparkles,
  Globe,
  Heart,
  Share2,
  Link as LinkIcon,
  Youtube,
  ArrowRight,
} from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import useUpload from "@/utils/useUpload";
import ShareFormLink from "@/components/ShareFormLink";

export default function NursingPage() {
  const [formData, setFormData] = useState({
    school_name: "Lawson University",
    full_name: "",
    email: "",
    phone: "",
    qualifications: "",
    program: "",
    degree_type: "Bachelor's",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [upload, { loading: uploading }] = useUpload();

  // iOS-like UI data
  const quickActions = [
    {
      label: "Apply",
      href: "#apply",
      icon: <ArrowRight className="w-5 h-5" />,
    },
    {
      label: "Programs",
      href: "#programs",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      label: "Admissions",
      href: "/education/lawson-university/admissions",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      label: "Video Tour",
      href: "https://www.youtube.com/@SBBCMedia",
      icon: <PlayCircle className="w-5 h-5" />,
    },
  ];

  const highlights = [
    { icon: <Globe className="w-5 h-5" />, title: "Global Outlook" },
    { icon: <Shield className="w-5 h-5" />, title: "Accredited Paths" },
    { icon: <Users className="w-5 h-5" />, title: "Small Cohorts" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Modern Labs" },
  ];

  const programCards = [
    {
      href: "/education/lawson-university/undergraduate",
      title: "Bachelor's",
      desc: "Future‑ready majors across science, tech, business, arts, and health.",
      icon: <BookOpen className="w-7 h-7 text-white" />,
    },
    {
      href: "/education/lawson-university/masters",
      title: "Master's",
      desc: "Advance your career with rigorous, industry‑mentored programs.",
      icon: <Award className="w-7 h-7 text-white" />,
    },
    {
      href: "/education/lawson-university/doctorate",
      title: "Doctorate",
      desc: "High‑impact research with strong faculty guidance and resources.",
      icon: <GraduationCap className="w-7 h-7 text-white" />,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let qualifications_pdf_url = null;
      if (pdfFile) {
        const { url, mimeType, error } = await upload({ file: pdfFile });
        if (error) {
          throw new Error(error);
        }
        if (mimeType && !mimeType.startsWith("application/pdf")) {
          throw new Error("Please upload a PDF file");
        }
        qualifications_pdf_url = url;
      }

      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, qualifications_pdf_url }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      setMessage(data.message);
      setFormData({
        school_name: "Lawson University",
        full_name: "",
        email: "",
        phone: "",
        qualifications: "",
        program: "",
        degree_type: "Bachelor's",
      });
      setPdfFile(null);
    } catch (error) {
      console.error(error);
      setMessage(error?.message || "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E0E10] font-inter">
      {/* SEO */}
      <SEOHead path="/education/lawson-university" />
      <ChurchHeader />

      {/* Ambient background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#10B981]/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#F4D03F]/20 to-[#C29C1A]/10 blur-3xl" />
      </div>

      {/* Hero */}
      <div className="relative w-full h-[420px] md:h-[520px]">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=800&fit=crop&q=80"
          alt="Lawson University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Frosted title card */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-4xl w-full backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] animate-fade-up">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/90 text-sm mb-4">
                <Sparkles className="w-4 h-4 text-[#F4D03F]" />
                <span>Innovate. Impact. Lead.</span>
              </div>
              <GraduationCap className="w-16 h-16 text-[#F4D03F] mb-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Lawson University
              </h1>
              <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl">
                Cutting‑edge Bachelor's, Master's, and Doctorate paths designed
                to shape innovators, researchers, and leaders.
              </p>

              {/* Quick action dock */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
                {quickActions.map((a) => (
                  <a
                    key={a.label}
                    href={a.href}
                    className="group flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white/90 bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 transition-all duration-150"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] text-black shadow-sm group-hover:animate-sheen">
                      {a.icon}
                    </span>
                    {a.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Discover. Learn. Lead.
            </h2>
            <p className="text-[#2B2B2B] dark:text-[#E0E0E0] leading-relaxed text-base md:text-lg">
              Lawson University is a comprehensive institution committed to
              academic excellence, research, and real‑world impact. With expert
              faculty, modern labs, and global partnerships, we prepare students
              to thrive and lead with purpose.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "AI, Data Science, and Software Engineering tracks",
                "Business, Economics, and Entrepreneurship incubator",
                "Public Health, Nursing, and Biomedical Research",
                "Theology, Ethics, and Leadership studies",
                "State‑of‑the‑art labs, studios, and research centers",
                "Flexible online and hybrid learning options",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  <CheckCircle className="w-5 h-5 text-[#F4D03F] mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl p-4 bg-white dark:bg-[#1A1A1A] border border-[#E9E9E9] dark:border-[#2A2A2A] shadow-sm hover:shadow-md transition-all animate-fade-up"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center text-black mb-3">
                    {h.icon}
                  </div>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    {h.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Degrees */}
      <section
        id="programs"
        className="py-14 px-6 bg-[#FAFAFA] dark:bg-[#121212]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-10">
            Explore Degrees
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {programCards.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="block rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333] bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-md shadow-sm hover:shadow-2xl transition-all duration-200 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-2xl flex items-center justify-center mb-4 text-black shadow-md">
                  {c.icon}
                </div>
                <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">{c.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-[#C29C1A]">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions steps */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl border border-[#E9E9E9] dark:border-[#2A2A2A] bg-white dark:bg-[#141414] p-8 md:p-10">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
            Your path to Lawson
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Apply",
                text: "Tell us about your goals and background.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Review",
                text: "Our team reviews and guides your next steps.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Enroll",
                text: "Secure your spot and start strong.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl p-6 bg-[#FAFAFA] dark:bg-[#1A1A1A] border border-[#E9E9E9] dark:border-[#2A2A2A]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] text-black flex items-center justify-center mb-3">
                  {s.icon}
                </div>
                <p className="font-semibold text-black dark:text-white">
                  {s.title}
                </p>
                <p className="text-sm text-[#6E6E6E] dark:text-[#A0A0A0] mt-1">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section id="apply" className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border border-[#E9E9E9] dark:border-[#333333] bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur-md shadow-xl p-6 md:p-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-black dark:text-white">
                Apply to Lawson University
              </h2>
              <p className="text-[#6E6E6E] dark:text-[#A0A0A0] mt-2">
                Start your application. Our admissions team will guide you
                through next steps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Program (e.g., BSc Computer Science)"
                  value={formData.program}
                  onChange={(e) =>
                    setFormData({ ...formData, program: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                />
              </div>
              <div>
                <select
                  value={formData.degree_type}
                  onChange={(e) =>
                    setFormData({ ...formData, degree_type: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                >
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>Doctorate</option>
                  <option>Diploma / Certificate</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Academic Background (e.g., High School, Bachelor's, etc.)"
                  value={formData.qualifications}
                  onChange={(e) =>
                    setFormData({ ...formData, qualifications: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4D03F] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              {/* PDF Upload */}
              <div>
                <label className="flex items-center gap-2 text-sm text-[#6E6E6E] dark:text-[#A0A0A0]">
                  <Paperclip className="w-4 h-4" /> Qualifications PDF
                  (optional)
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) =>
                    setPdfFile(
                      e.target.files && e.target.files[0]
                        ? e.target.files[0]
                        : null,
                    )
                  }
                  className="mt-1 w-full px-4 py-2 border border-[#E9E9E9] dark:border-[#333333] rounded-xl bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                />
                {pdfFile ? (
                  <p className="text-xs mt-1 text-[#6E6E6E] dark:text-[#A0A0A0]">
                    {pdfFile.name}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={loading || uploading}
                className="w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold py-3 rounded-xl transition-transform duration-200 hover:scale-105 active:scale-[0.98] disabled:opacity-50 shadow-md hover:shadow-lg"
              >
                {loading || uploading ? "Submitting..." : "Submit Application"}
              </button>
              {message && (
                <p className="text-center text-sm text-[#C29C1A]">{message}</p>
              )}
            </form>

            <ShareFormLink
              label="Share this application form"
              anchor="#apply"
            />

            {/* Share & Contact strip */}
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2 text-[#6E6E6E] dark:text-[#A0A0A0]">
                <Heart className="w-4 h-4 text-[#F4D03F]" />
                <span>Need help? admissions@lawson.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white"
                >
                  <LinkIcon className="w-4 h-4" /> Programs
                </a>
                <a
                  href="https://www.youtube.com/@SBBCMedia"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white"
                >
                  <Youtube className="w-4 h-4" /> Watch
                </a>
                <button
                  type="button"
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText(
                        `${typeof window !== "undefined" ? window.location.href : ""}`,
                      );
                    } catch (e) {
                      console.error(e);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAFAFA] dark:bg-[#222] border border-[#E9E9E9] dark:border-[#2A2A2A] text-black dark:text-white"
                >
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />

      {/* Animations (only animations here) */}
      <style jsx global>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 600ms ease-out both; }
        @keyframes sheen {
          0% { box-shadow: inset -60px 0 40px -40px rgba(255,255,255,0.0); }
          50% { box-shadow: inset -60px 0 40px -40px rgba(255,255,255,0.6); }
          100% { box-shadow: inset -60px 0 40px -40px rgba(255,255,255,0.0); }
        }
        .animate-sheen { animation: sheen 900ms ease-in-out; }
      `}</style>
    </div>
  );
}
