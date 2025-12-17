import { useState } from "react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
// NEW: iOS-style icons
import {
  Globe2,
  BookOpen,
  Users2,
  Flame,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import ShareFormLink from "@/components/ShareFormLink"; // ADD: share row

export default function VisionPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/discipleship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();
      setMessage(data.message);
      setFormData({ full_name: "", email: "", phone: "" });
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen text-white font-inter"
      style={{
        // iOS-inspired layered gray with a cool tint
        background:
          "radial-gradient(1200px 600px at 10% -10%, rgba(74,88,119,0.12), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(25,32,44,0.3), transparent 60%), linear-gradient(180deg, #0b0e14 0%, #0f131a 40%, #10151f 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, sans-serif',
      }}
    >
      {/* SEO */}
      <SEOHead path="/vision" />
      <ChurchHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background image with soft overlay */}
        <div className="relative w-full h-[360px] md:h-[460px]">
          <img
            // UPDATED: Use uploaded image as hero and ensure it fills the hero section cleanly
            src="https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1920x800/center/-/quality/smart/-/format/auto/"
            srcSet={[
              "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1280x533/center/-/quality/smart/-/format/auto/ 1280w",
              "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/1920x800/center/-/quality/smart/-/format/auto/ 1920w",
              "https://ucarecdn.com/b5e223ab-77a6-4adb-b499-c6781849b4fd/-/scale_crop/2560x1067/center/-/quality/smart/-/format/auto/ 2560w",
            ].join(", ")}
            sizes="100vw"
            alt="SBBC Vision"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,21,31,0.4),rgba(16,21,31,0.85))]" />
          {/* Glass headline */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div
              data-animate
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl px-6 py-5 md:px-10 md:py-7 shadow-2xl max-w-4xl text-center"
            >
              <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/70 mb-3">
                <Sparkles size={16} className="text-[#F4D03F]" />
                <span>Sunrise Banner Bible Church</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Our Vision
              </h1>
              <p className="mt-3 md:mt-4 text-white/80 max-w-2xl mx-auto text-sm md:text-base">
                A clear call to reach the nations, disciple believers, and
                transform communities by the power of the gospel.
              </p>
            </div>
          </div>

          {/* subtle glow accents */}
          <div className="pointer-events-none absolute -top-24 -left-24 w-[320px] h-[320px] rounded-full bg-[#4a5877]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-[320px] h-[320px] rounded-full bg-[#f4d03f]/10 blur-3xl" />
        </div>
      </section>

      {/* PILLARS */}
      <section data-animate className="px-6 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Our Pillars
          </h2>
          <p className="text-white/70 mb-10 max-w-3xl">
            These guide how we live and lead: reaching people with good news,
            discipling with Scripture, building family, and igniting purpose.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Reach the Nations",
                Icon: Globe2,
                desc: "Go everywhere with the love and message of Jesus.",
              },
              {
                title: "Disciple by the Word",
                Icon: BookOpen,
                desc: "Grow deep roots through teaching and practice.",
              },
              {
                title: "Build Family",
                Icon: Users2,
                desc: "Belong, care, serve, and grow together.",
              },
              {
                title: "Ignite Purpose",
                Icon: Flame,
                desc: "Live boldly with Spirit-led passion and hope.",
              },
            ].map(({ title, Icon, desc }, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center mb-4 shadow-md">
                  <Icon size={22} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-white/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASTOR BIO (glass card) */}
      <section data-animate className="px-6 pb-6 md:pb-12">
        {/* Add max-h to trim ~30% from the bottom on this section's card while keeping overflow hidden */}
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden max-h-[420px] md:max-h-[560px]">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src="https://ucarecdn.com/37789dc9-dbe8-4ccd-9a72-e6a44d506c15/-/format/auto/"
                alt="Dr. Pastor Lawson Ngoa"
                className="w-full h-full object-cover"
                // Ensure we preserve the top of the image so the trim comes from the bottom
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* The text column will also be clipped from the bottom due to the outer max-h and overflow-hidden */}
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Dr. Pastor Lawson Ngoa
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Pastor Dr. Lawson Ngoa is a hot-gospeler, minister, and a
                blessing to this generation. His core assignment is preaching
                the gospel of Jesus Christ and discipling the nations.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                He founded Sunrise Banner Bible Church Worldwide. Through
                conferences and missions, his ministry has impacted millions
                across communities and nations.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                His life’s purpose is to restore hope, heal the hurting, and
                raise faithful disciples through strong apostolic teaching.
              </p>
              <p className="text-white/80 leading-relaxed">
                He believes the Word of God is the final authority—bringing
                light to human nature, problems, and the way back to God.
              </p>
              {/* ADDED: supplemental line requested under the write-up */}
              <p className="text-white/80 leading-relaxed mt-4">
                The set man has led many crusades and outreaches in many parts
                of Nigeria and is known for his dedication and zeal for the
                things and principles of the kingdom of heaven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: EXTENDED WRITE-UP ABOUT THE PASTOR */}
      <section data-animate className="px-6 py-10 md:py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Main narrative */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              A Heart After God — Commitment, Love, and Service
            </h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Dr. Pastor Lawson Ngoa carries a burning love for the Lord and a
              deep compassion for people. His walk is marked by prayer,
              humility, and obedience to the Holy Spirit. Whether in the pulpit,
              in a village outreach, or in a quiet counseling room, he serves
              with the same excellence and tenderness of Christ.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              His commitment is simple and strong: preach Christ, build people,
              and bless cities. For decades, he has invested himself in teaching
              sound doctrine, raising leaders, and restoring families. Countless
              men and women testify of how his messages unlocked purpose, healed
              hearts, and ignited a passion for holiness and service.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              Beyond the pulpit, his life models integrity and generosity. He
              believes ministry is not a stage but a life poured out. He mentors
              young ministers, strengthens pastors, and stands with churches
              across denominations—always pointing eyes to Jesus and not to
              self.
            </p>
            <p className="text-white/80 leading-relaxed mb-2">
              His love for the Scriptures is evident in every sermon and every
              decision. He teaches the Word with clarity and power, calling the
              church to maturity, prayer, and mission.
            </p>
          </div>

          {/* Highlights / Impact card */}
          <aside className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-2xl">
            <h4 className="text-xl font-semibold mb-3">Impact in Nigeria</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Citywide crusades and soul-winning outreaches</li>
              <li>• Church plants and strengthening across states</li>
              <li>• Training for emerging pastors and workers</li>
              <li>• Campus missions and youth discipleship</li>
              <li>• Compassion initiatives for the poor and displaced</li>
              <li>• Unity projects across Christian denominations</li>
            </ul>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/75 italic">
                “Our nation will see the glory of Jesus as the church walks in
                truth, love, and power.”
              </p>
              <p className="text-white/60 mt-2 text-sm">
                — Dr. Pastor Lawson Ngoa
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* VALUES RIBBON */}
      <section data-animate className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            {[
              "Faith-filled",
              "Scripture-centered",
              "Spirit-led",
              "Compassionate",
              "Excellent",
              "Serving",
            ].map((v, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-4 py-2 text-sm text-white/80"
              >
                <Sparkles size={16} className="text-[#F4D03F]" /> {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DISCIPLESHIP CTA + FORM */}
      <section data-animate className="px-6 py-14 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-6">
          {/* Left: CTA */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm text-white/70 mb-3">
              <Sparkles size={16} className="text-[#F4D03F]" />
              <span>Next step</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Join the Discipleship Program
            </h3>
            <p className="text-white/75 mb-6">
              Take the next step in your faith journey. Let’s grow together in
              Christ.
            </p>
            <ul className="space-y-2 text-white/75 text-sm mb-6 list-disc list-inside">
              <li>Weekly Word sessions</li>
              <li>Small groups and mentorship</li>
              <li>Serving opportunities</li>
            </ul>
            <div className="flex items-center gap-3 text-sm text-white/80">
              <a
                href="mailto:info@sbbchurch.org"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Mail size={16} className="text-[#F4D03F]" /> info@sbbchurch.org
              </a>
              <span className="opacity-40">•</span>
              {/* Updated phone number and tel link */}
              <a
                href="tel:+2347064200926"
                className="inline-flex items-center gap-2 hover:text-white"
                aria-label="Call SBBC discipleship contact number +234 706 420 0926"
              >
                <Phone size={16} className="text-[#F4D03F]" /> +234 706 420 0926
              </a>
            </div>
          </div>

          {/* Right: Form */}
          {/* ADD id for deep link */}
          <div
            id="discipleship-form"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold py-3 rounded-xl transition-all duration-150 active:scale-[0.98] disabled:opacity-60 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? "Submitting..." : "Start Your Journey"}
                  {!loading && <ArrowRight size={18} />}
                </span>
                {/* sheen */}
                <span className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:-left-1/4 before:top-0 before:h-full before:w-1/3 before:rotate-12 before:bg-white/30 before:blur-md before:transition-opacity before:duration-300 opacity-0 group-hover:opacity-100" />
              </button>
              {message && (
                <p className="text-center text-sm text-[#F4D03F]">{message}</p>
              )}
            </form>

            {/* ADD: Share row for this form */}
            <ShareFormLink
              label="Share this discipleship form"
              anchor="#discipleship-form"
            />
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeSlideUpVision {
          0% { opacity: 0; transform: translateY(16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        [data-animate] {
          animation: fadeSlideUpVision 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          [data-animate] { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
}
