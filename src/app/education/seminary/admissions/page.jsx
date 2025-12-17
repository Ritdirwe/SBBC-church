import { useState, useMemo } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  FileText,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Paperclip,
} from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import useUpload from "@/utils/useUpload";

export default function SeminaryAdmissionsPage() {
  const [formData, setFormData] = useState({
    school_name: "Sunrise Theological School",
    full_name: "",
    email: "",
    phone: "",
    qualifications: "",
    program: "",
    degree_type: "Diploma / Certificate",
  });
  const [message, setMessage] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [upload, { loading: uploading }] = useUpload();

  const mutation = useMutation({
    mutationFn: async (vars) => {
      const res = await fetch("/api/school-admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          qualifications_pdf_url: vars?.pdfUrl || null,
        }),
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(
          `When fetching /api/school-admission, the response was [${res.status}] ${res.statusText} - ${txt}`,
        );
      }
      return res.json();
    },
    onSuccess: (data) => {
      setMessage(data.message || "Application submitted successfully.");
      setFormData((prev) => ({
        ...prev,
        full_name: "",
        email: "",
        phone: "",
        qualifications: "",
        program: "",
        degree_type: "Diploma / Certificate",
      }));
      setPdfFile(null);
    },
    onError: (err) => {
      console.error(err);
      setMessage("Failed to submit. Please try again.");
    },
  });

  const Nav = useMemo(
    () => () => (
      <nav className="w-full bg-white/70 dark:bg-[#121212]/70 backdrop-blur sticky top-0 z-30 border-b border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto py-3 no-scrollbar">
            {[
              { title: "Overview", href: "/education/seminary" },
              { title: "Programs", href: "/education/seminary/programs" },
              { title: "Admissions", href: "/education/seminary/admissions" },
              {
                title: "Tuition & Aid",
                href: "/education/seminary/tuition-aid",
              },
              { title: "Faculty", href: "/education/seminary/faculty" },
              { title: "Calendar", href: "/education/seminary/calendar" },
              { title: "Faith & Doctrine", href: "/education/seminary/faith" },
              {
                title: "Student Life",
                href: "/education/seminary/student-life",
              },
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
    ),
    [],
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

      {/* Hero */}
      <div className="relative w-full h-64">
        <img
          src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1600&h=400&fit=crop&q=80"
          alt="Admissions - Sunrise Theological School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Admissions
            </h1>
            <p className="mt-2 text-white/85">
              Start your journey at Sunrise Theological School
            </p>
          </div>
        </div>
      </div>

      <Nav />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              How to Apply
            </h2>
            <ol className="space-y-4 text-[#2B2B2B] dark:text-[#E0E0E0]">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#9F7AEA] mt-1" /> Review
                programs and choose your track (Certificate, Diploma, Degree).
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#9F7AEA] mt-1" /> Prepare
                transcripts and references (as applicable).
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#9F7AEA] mt-1" /> Complete
                the application form below.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#9F7AEA] mt-1" />{" "}
                Interview and placement (we’ll reach out after review).
              </li>
            </ol>

            <div className="mt-10 bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                Requirements
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[#2B2B2B] dark:text-[#E0E0E0]">
                <li>Completed application form</li>
                <li>Government ID / Passport</li>
                <li>
                  Academic transcripts or church reference (program dependent)
                </li>
                <li>Statement of faith and testimony</li>
              </ul>
            </div>

            {/* Application Form */}
            <div
              id="apply"
              className="mt-12 bg-white dark:bg-[#1E1E1E] rounded-2xl shadow p-8 border border-[#E9E9E9] dark:border-[#333333]"
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
                Apply to STS
              </h3>
              <p className="text-[#6E6E6E] dark:text-[#A0A0A0] mb-6">
                Submit your application and our team will contact you.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setMessage("");
                  // Upload PDF first if present
                  let pdfUrl = null;
                  if (pdfFile) {
                    const { url, mimeType, error } = await upload({
                      file: pdfFile,
                    });
                    if (error) {
                      setMessage(error);
                      return;
                    }
                    if (mimeType && !mimeType.startsWith("application/pdf")) {
                      setMessage("Please upload a PDF file");
                      return;
                    }
                    pdfUrl = url;
                  }
                  mutation.mutate({ pdfUrl });
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.full_name}
                    onChange={(e) =>
                      setFormData({ ...formData, full_name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Program (e.g., Diploma in Theology)"
                    value={formData.program}
                    onChange={(e) =>
                      setFormData({ ...formData, program: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  />
                </div>
                {/* Degree Type */}
                <div>
                  <select
                    value={formData.degree_type}
                    onChange={(e) =>
                      setFormData({ ...formData, degree_type: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  >
                    <option>Diploma / Certificate</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>Doctorate</option>
                  </select>
                </div>
                <textarea
                  placeholder="Educational Background, Ministry Experience, and Statement of Faith (brief)"
                  value={formData.qualifications}
                  onChange={(e) =>
                    setFormData({ ...formData, qualifications: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
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
                    className="mt-1 w-full px-4 py-2 border border-[#E9E9E9] dark:border-[#333333] rounded-lg bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={mutation.isLoading || uploading}
                  className="w-full bg-gradient-to-r from-[#9F7AEA] to-[#805AD5] hover:from-[#AF87F2] hover:to-[#906ADD] text-white font-semibold py-3 rounded-lg disabled:opacity-50"
                >
                  {mutation.isLoading || uploading
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
                {message ? (
                  <p className="text-center text-sm text-[#9F7AEA]">
                    {message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Key Dates
              </h3>
              <ul className="text-[#2B2B2B] dark:text-[#E0E0E0] space-y-2">
                <li>• Fall intake: Sept 1</li>
                <li>• Application priority: July 15</li>
                <li>• Orientation: Last week of Aug</li>
              </ul>
              <a
                href="/education/seminary/calendar"
                className="mt-3 inline-flex items-center gap-2 text-[#9F7AEA]"
              >
                <ArrowRight className="w-4 h-4" /> View Full Calendar
              </a>
            </div>

            <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Need Help?
              </h3>
              <p className="text-[#6E6E6E] dark:text-[#A0A0A0] mb-3">
                Our admissions team is here to help you through each step.
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:admissions@sts.edu"
                  className="flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  <Mail className="w-4 h-4" /> admissions@sts.edu
                </a>
                <a
                  href="tel:+2347064200926"
                  className="flex items-center gap-2 text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  <Phone className="w-4 h-4" /> +234 706 420 0926
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]">
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                Tuition & Aid
              </h3>
              <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">
                Explore scholarships and pastoral discounts.
              </p>
              <a
                href="/education/seminary/tuition-aid"
                className="mt-2 inline-flex items-center gap-2 text-[#9F7AEA]"
              >
                <ArrowRight className="w-4 h-4" /> Learn More
              </a>
            </div>
          </aside>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
