import { useState } from "react";
import {
  BookOpen,
  Clock,
  Calendar,
  CheckCircle,
  Users,
  GraduationCap,
  School,
  FileText,
  Landmark,
  Phone,
} from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import ShareFormLink from "@/components/ShareFormLink";

export default function SeminaryPage() {
  const [formData, setFormData] = useState({
    school_name: "Sunrise Theological School",
    full_name: "",
    email: "",
    phone: "",
    qualifications: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/school-admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      setMessage(data.message);
      setFormData({
        ...formData,
        full_name: "",
        email: "",
        phone: "",
        qualifications: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Mini-site top links reused across STS pages
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
      {/* SEO */}
      <SEOHead path="/education/seminary" />
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=600&fit=crop&q=80"
          alt="Sunrise Theological School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-6">
            <BookOpen className="w-20 h-20 text-[#9F7AEA] mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Sunrise Theological School
            </h1>
            <p className="mt-3 text-white/85 max-w-2xl mx-auto">
              Christ-centered training for pastors, evangelists, and Christian
              leaders.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="#apply"
                className="px-5 py-3 rounded-lg bg-[#9F7AEA] hover:bg-[#805AD5] text-white font-semibold"
              >
                Apply Now
              </a>
              <a
                href="/education/seminary/programs"
                className="px-5 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mini-site nav */}
      <Nav />

      {/* Overview */}
      <section className="py-16 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
              Equipped for Ministry, Grounded in Truth
            </h2>
            <p className="text-lg text-[#2B2B2B] dark:text-[#E0E0E0] leading-relaxed mb-6">
              STS unites rigorous study of God’s Word with mentoring, prayer,
              and supervised ministry so graduates are biblically grounded and
              practically equipped.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Programs",
                  text: "Certificate, Diploma, Degree tracks",
                },
                {
                  icon: School,
                  title: "Campuses",
                  text: "Main HQ + extension centers",
                },
                {
                  icon: Users,
                  title: "Mentorship",
                  text: "Small cohorts and pastoral coaching",
                },
                {
                  icon: Landmark,
                  title: "Doctrinal",
                  text: "Historic, evangelical statement of faith",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-6 border border-[#E9E9E9] dark:border-[#333333]">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Quick Facts
            </h3>
            <ul className="space-y-3 text-[#2B2B2B] dark:text-[#E0E0E0]">
              <li>• Academic sessions start every September</li>
              <li>• Evening & weekend classes available</li>
              <li>• Field ministry placements each term</li>
              <li>• Scholarships and pastoral discounts</li>
            </ul>
            <a
              href="/education/seminary/admissions"
              className="mt-5 inline-block px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
            >
              Admissions
            </a>
          </aside>
        </div>
      </section>

      {/* What you'll study (unchanged content retained) */}
      <section className="py-4 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-4xl font-bold text-black dark:text-white mb-6">
              About Sunrise Theological School (STS)
            </h3>
            <p
              className="text-lg text-black/70 dark:text-white/70 leading-relaxed mb-6"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
              }}
            >
              Sunrise Theological School (STS) is a Christ-centered,
              co-educational training college for pastors, evangelists,
              Christian workers, and soul-winners. We unite rigorous study of
              God’s Word with mentoring, prayer, and supervised ministry so
              graduates are equipped for ministry and grounded in biblical
              truth.
            </p>

            {/* Program Availability */}
            <div className="bg-[#F5F5F7] dark:bg-[#1A1A1A] rounded-2xl p-6 mb-8 border border-black/5 dark:border-white/10">
              <p
                className="text-base text-black/80 dark:text-white/80 leading-relaxed"
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                }}
              >
                Certificate courses run on all campuses. Diploma and remedial
                courses will roll out later. Degree and graduate programs will
                be available at the international headquarters.
              </p>
            </div>

            {/* Aims & Objectives */}
            <div>
              <h4 className="text-4xl font-bold text-black dark:text-white mb-6">
                Aims, Goals & Objectives of STS
              </h4>
              <div className="space-y-4">
                <p
                  className="text-lg text-black/70 dark:text-white/70 leading-relaxed"
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                  }}
                >
                  STS equips men and women for ministry through practical,
                  whole-of-life training that touches every area of service. In
                  a prayerful community shaped by the fruit of the Spirit,
                  learning is anchored to Scripture and applied in real ministry
                  contexts.
                </p>
                <p
                  className="text-lg text-black/70 dark:text-white/70 leading-relaxed"
                  style={{
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
                  }}
                >
                  Our objective is that every student is equipped for ministry
                  and grounded in truth: knowing the Word, living holy and
                  compassionate lives, and serving with integrity—able to
                  preach, counsel, disciple, and lead for the glory of God.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  Program Duration
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">
                  3-year Master of Divinity (example)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                  Academic Sessions
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">
                  Starts September annually
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA] dark:bg-[#1A1A1A] rounded-2xl p-8 border border-[#E9E9E9] dark:border-[#333333]">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              What You'll Study
            </h3>
            <ul className="space-y-3">
              {[
                "Biblical Exegesis and Hermeneutics",
                "Systematic Theology and Church History",
                "Pastoral Ministry and Counseling",
                "Homiletics and Expository Preaching",
                "Mission and Evangelism Strategies",
                "Leadership and Church Administration",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#2B2B2B] dark:text-[#E0E0E0]"
                >
                  <CheckCircle className="w-5 h-5 text-[#9F7AEA] flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="/education/seminary/programs"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#9F7AEA] hover:bg-[#805AD5] text-white"
              >
                <FileText className="w-4 h-4" />
                View Course Outlines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Apply */}
      <section id="apply" className="py-20 px-6 bg-[#FAFAFA] dark:bg-[#1A1A1A]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-xl p-12 border border-[#E9E9E9] dark:border-[#333333]">
            <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-6">
              Quick Application
            </h2>
            <p className="text-lg text-[#6E6E6E] dark:text-[#A0A0A0] text-center mb-8">
              Ready to begin? Submit this short form or see full steps on the
              Admissions page.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7AEA] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
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
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7AEA] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
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
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7AEA] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Educational Background & Ministry Experience (if any)"
                  value={formData.qualifications}
                  onChange={(e) =>
                    setFormData({ ...formData, qualifications: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-3 border border-[#E9E9E9] dark:border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F7AEA] bg-white dark:bg-[#1E1E1E] text-black dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#9F7AEA] to-[#805AD5] hover:from-[#AF87F2] hover:to-[#906ADD] text-white font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-[0.98] disabled:opacity-50 shadow-md hover:shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
              {message && (
                <p className="text-center text-sm text-[#9F7AEA]">{message}</p>
              )}
              <p className="text-xs text-center text-[#6E6E6E] dark:text-[#A0A0A0]">
                Full details at{" "}
                <a href="/education/seminary/admissions" className="underline">
                  Admissions
                </a>{" "}
                or contact us at{" "}
                <a className="underline" href="mailto:admissions@sts.edu">
                  admissions@sts.edu
                </a>
              </p>
            </form>

            <ShareFormLink
              label="Share this application form"
              anchor="#apply"
            />
          </div>
        </div>
      </section>

      <section className="pb-8 px-6">
        <div className="max-w-6xl mx-auto rounded-2xl border border-black/5 dark:border-white/10 p-8 bg-white dark:bg-[#1A1A1A]">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                Have questions?
              </h3>
              <p className="text-[#6E6E6E] dark:text-[#A0A0A0]">
                See our{" "}
                <a href="/education/seminary/faith" className="underline">
                  faith & doctrine
                </a>
                , check the{" "}
                <a href="/education/seminary/calendar" className="underline">
                  academic calendar
                </a>
                , or{" "}
                <a href="/education/seminary/contact" className="underline">
                  contact the seminary team
                </a>
                .
              </p>
            </div>
            <a
              href="/education/seminary/admissions"
              className="px-5 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Start Application
            </a>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
