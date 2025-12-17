import {
  Heart,
  ArrowRight,
  Users,
  Globe2,
  Shield,
  Sparkles,
  PlayCircle,
  Phone,
  Mail,
  MapPin,
  Share2,
  Star,
  ArrowUpRight,
  Gift,
  Coins,
  Building2,
} from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

export default function FoundationPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* SEO */}
      <SEOHead path="/foundation" />
      <ChurchHeader />

      {/* Decorative background layers for iOS depth */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-[#80C7FF] to-[#7C4DFF]" />
        <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-15 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Hero */}
      <section className="relative w-full">
        <div className="relative w-full h-[380px] md:h-[520px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=900&fit=crop&q=80"
            alt="Lawson Foundation Hero"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/80" />

          {/* Glass title card */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="anim-fade-up w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-[0_10px_50px_rgba(0,0,0,0.35)] p-6 md:p-10 text-center">
              <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] flex items-center justify-center shadow-lg">
                <Heart className="w-9 h-9 text-black" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Lawson Foundation
              </h1>
              <p className="mt-3 md:mt-4 text-sm md:text-lg text-white/80 max-w-2xl mx-auto">
                Practical love for people. Relief, education, and hope —
                delivered with excellence.
              </p>

              {/* Quick action chips */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://paystack.com/pay/sbbcworldwide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  Donate Now <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/10 border border-white/15 hover:bg-white/15 transition-all"
                >
                  <Gift className="w-4 h-4" /> Projects
                </a>
                <a
                  href="#volunteer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/10 border border-white/15 hover:bg-white/15 transition-all"
                >
                  <Users className="w-4 h-4" /> Volunteer
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white/10 border border-white/15 hover:bg-white/15 transition-all"
                >
                  <Share2 className="w-4 h-4" /> Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics ribbon */}
      <section className="relative z-10 -mt-10 md:-mt-12 px-6">
        <div className="anim-fade-up max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            {
              icon: <Sparkles className="w-5 h-5" />,
              label: "People Helped",
              value: "25,000+",
            },
            {
              icon: <Globe2 className="w-5 h-5" />,
              label: "Cities Reached",
              value: "40+",
            },
            {
              icon: <Shield className="w-5 h-5" />,
              label: "Active Projects",
              value: "18",
            },
            {
              icon: <Users className="w-5 h-5" />,
              label: "Volunteers",
              value: "1,200+",
            },
          ].map((m, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-4 md:px-5 md:py-5 flex items-center gap-3 md:gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/90">
                {m.icon}
              </div>
              <div>
                <div className="text-xs md:text-sm text-white/70">
                  {m.label}
                </div>
                <div className="text-lg md:text-2xl font-semibold">
                  {m.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story + Video */}
      <section className="px-6 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div className="anim-fade-up rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80"
              alt="Serving the community"
              className="w-full h-64 md:h-[380px] object-cover"
            />
            <div className="p-5 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Hope in Action
              </h3>
              <p className="mt-3 text-white/80 text-sm md:text-base leading-relaxed">
                From rapid relief to long-term development, our teams deliver
                food, shelter, education support and medical aid with compassion
                and excellence.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10">
                  Disaster relief
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10">
                  Education
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-white/10 border border-white/10">
                  Healthcare
                </span>
              </div>
            </div>
          </div>

          <div className="anim-fade-up rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#80C7FF] to-[#7C4DFF] flex items-center justify-center shadow-md">
                <PlayCircle className="w-7 h-7" />
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-semibold">
                See the Difference
              </h3>
              <p className="mt-3 text-white/80 text-sm md:text-base">
                A quick look at recent outreach moments and milestones.
              </p>
            </div>
            <a
              href="https://youtube.com/@SBBCWorldwide"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 self-start rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 hover:bg-white/15 transition-colors"
            >
              Watch on YouTube{" "}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section id="projects" className="px-6 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="anim-fade-up flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Key Initiatives</h2>
            <a
              href="#donate"
              className="hidden md:inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              Support an initiative <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Community Development",
                desc: "Clean water, shelter, and small business empowerment for lasting change.",
              },
              {
                icon: <Coins className="w-6 h-6" />,
                title: "Education Support",
                desc: "Scholarships, school kits, and after‑school hubs for children and teens.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Medical Outreach",
                desc: "Mobile clinics, screenings, and essential supplies in underserved areas.",
              },
              {
                icon: <Globe2 className="w-6 h-6" />,
                title: "Disaster Relief",
                desc: "Fast, coordinated response delivering food, blankets, and shelter.",
              },
              {
                icon: <Gift className="w-6 h-6" />,
                title: "Family Care",
                desc: "Nutrition packs, counseling access, and safe activity spaces for kids.",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Skills & Purpose",
                desc: "Mentorship and training that unlocks confidence and opportunity.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="anim-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 md:p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/75 text-sm md:text-base">
                  {c.desc}
                </p>
                <div className="mt-4 text-xs text-white/60">Learn more →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact gallery */}
      <section className="px-6 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="anim-fade-up text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Moments of Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                src: "https://ucarecdn.com/ecbb44c6-aed9-4a8d-a36d-f5151fb16228/-/format/auto/",
                alt: "Food distribution",
              },
              {
                src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000&q=80",
                alt: "Children learning",
              },
              {
                src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=80",
                alt: "Community support",
              },
            ].map((g, i) => (
              <div
                key={i}
                className="anim-fade-up relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full h-56 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-4 text-sm text-white/90">
                  {g.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation tiers */}
      <section id="donate" className="px-6 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="anim-fade-up text-center max-w-2xl mx-auto mb-6 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Fuel the Mission</h2>
            <p className="mt-3 text-white/80">
              Choose a tier that matches your heart. Every gift moves help
              closer to people who need it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                name: "Supporter",
                amount: "₦5,000",
                perks: ["Relief packs", "School kits"],
                badge: "from",
              },
              {
                name: "Partner",
                amount: "₦25,000",
                perks: ["Clinic days", "Scholarships"],
                badge: "most popular",
              },
              {
                name: "Champion",
                amount: "₦100,000",
                perks: ["Project funding", "Community hubs"],
                badge: "impact+",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="anim-fade-up rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col"
              >
                <div className="text-xs uppercase tracking-wide text-white/60">
                  {t.badge}
                </div>
                <div className="mt-1 text-xl font-semibold">{t.name}</div>
                <div className="mt-1 text-3xl font-bold">{t.amount}</div>
                <ul className="mt-4 space-y-1 text-white/80 text-sm">
                  {t.perks.map((p, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#F4D03F]" /> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://paystack.com/pay/sbbcworldwide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  Donate <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section id="volunteer" className="px-6 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="anim-fade-up rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Join the Volunteer Network
            </h3>
            <p className="mt-3 text-white/80 text-sm md:text-base">
              Lend your time, skills, and heart. We train and deploy volunteers
              for safe, effective outreach.
            </p>
            <a
              href="mailto:info@sbbcworldwide.org?subject=Volunteer%20with%20Lawson%20Foundation"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 hover:bg-white/15 transition-colors"
            >
              <Users className="w-4 h-4" /> I want to help
            </a>
          </div>
          <div className="anim-fade-up rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80"
              alt="Volunteer efforts"
              className="w-full h-56 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section id="contact" className="px-6 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+2347064200926"
              className="group flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-white/70">Call</div>
                <div className="font-medium group-hover:underline">
                  +234 706 420 0926
                </div>
              </div>
            </a>
            <a
              href="mailto:info@sbbcworldwide.org"
              className="group flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-white/70">Email</div>
                <div className="font-medium group-hover:underline">
                  info@sbbcworldwide.org
                </div>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-white/70">Location</div>
                <div className="font-medium">Worldwide Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-up { animation: fadeUp 600ms ease-out both; }
      `}</style>
    </div>
  );
}
