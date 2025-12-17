import {
  ExternalLink,
  Globe,
  BriefcaseBusiness,
  Building2,
  LineChart,
  Banknote,
  Users,
  ShieldCheck,
} from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ErdgeifyDetailsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=1920&q=80"
          alt="Global business skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div
              className="flex items-center gap-4 mb-3"
              style={{ animation: "fadeUp 700ms ease-out both" }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-2xl flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Erdgeify
              </h1>
            </div>
            <p
              className="text-white/85 text-lg md:text-xl max-w-3xl"
              style={{
                animation: "fadeUp 800ms ease-out both",
                animationDelay: "120ms",
              }}
            >
              Strategic holding company empowering international businesses
              across trade, real estate, and human capacity building.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                About Erdgeify
              </h2>
              <p className="text-lg text-[#2B2B2B] dark:text-[#E0E0E0] leading-relaxed mb-6">
                Erdgeify oversees a select group of global enterprises, driving
                growth within each portfolio company while leveraging
                cross-company synergies. We focus on world-class execution and
                long-term value, partnering with leaders and institutions to
                unlock opportunities across markets.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]"
                  aria-label="Partner with Erdgeify"
                >
                  Partner
                </a>
                <a
                  href="mailto:info@sbbcworldwide.org?subject=Erdgeify%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]"
                  aria-label="Send an email to Erdgeify"
                >
                  Send a Mail
                </a>
              </div>
            </div>
            <div
              className="relative h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
              style={{ animation: "fadeUp 800ms ease-out both" }}
            >
              <img
                src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1600&q=80"
                alt="International business meeting"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities with animated iOS-style icons */}
      <section className="py-20 px-6 bg-[#F8F8FA] dark:bg-[#171717]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white text-center mb-12">
            What We Do
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm">
              <div
                className="w-14 h-14 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-2xl flex items-center justify-center shadow-md mb-4"
                style={{ animation: "iconFloat 3.5s ease-in-out infinite" }}
              >
                <BriefcaseBusiness className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                Advisory & Strategy
              </h4>
              <p className="text-[#2B2B2B] dark:text-[#CFCFCF]">
                Executive counsel, market entry, and growth strategy for
                high-impact outcomes.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm">
              <div
                className="w-14 h-14 bg-gradient-to-br from-[#4FD1C5] to-[#38B2AC] rounded-2xl flex items-center justify-center shadow-md mb-4"
                style={{
                  animation: "iconFloat 3.7s ease-in-out infinite",
                  animationDelay: "120ms",
                }}
              >
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                Real Estate
              </h4>
              <p className="text-[#2B2B2B] dark:text-[#CFCFCF]">
                Global property management and development with institutional
                standards.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm">
              <div
                className="w-14 h-14 bg-gradient-to-br from-[#9F7AEA] to-[#805AD5] rounded-2xl flex items-center justify-center shadow-md mb-4"
                style={{
                  animation: "iconFloat 3.9s ease-in-out infinite",
                  animationDelay: "220ms",
                }}
              >
                <LineChart className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                Global Trade
              </h4>
              <p className="text-[#2B2B2B] dark:text-[#CFCFCF]">
                International sourcing and distribution of premium building
                materials.
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm">
              <div
                className="w-14 h-14 bg-gradient-to-br from-[#F56565] to-[#E53E3E] rounded-2xl flex items-center justify-center shadow-md mb-4"
                style={{
                  animation: "iconFloat 4.1s ease-in-out infinite",
                  animationDelay: "320ms",
                }}
              >
                <Banknote className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                Capital & Banking
              </h4>
              <p className="text-[#2B2B2B] dark:text-[#CFCFCF]">
                Structured finance, partnerships, and bank-grade governance
                support.
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm">
              <div
                className="w-14 h-14 bg-gradient-to-br from-[#48BB78] to-[#38A169] rounded-2xl flex items-center justify-center shadow-md mb-4"
                style={{ animation: "iconFloat 3.5s ease-in-out infinite" }}
              >
                <Users className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                Human Capacity
              </h4>
              <p className="text-[#2B2B2B] dark:text-[#CFCFCF]">
                Training and coaching designed to upskill teams and leaders.
              </p>
            </div>
            {/* Card 6 */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-6 border border-black/5 shadow-sm">
              <div
                className="w-14 h-14 bg-gradient-to-br from-[#667EEA] to-[#764BA2] rounded-2xl flex items-center justify-center shadow-md mb-4"
                style={{ animation: "iconFloat 3.8s ease-in-out infinite" }}
              >
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                Governance
              </h4>
              <p className="text-[#2B2B2B] dark:text-[#CFCFCF]">
                Risk management, compliance, and operational excellence.
              </p>
            </div>
            {/* Image tile */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div
                className="relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl"
                style={{ animation: "fadeUp 800ms ease-out both" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&q=80"
                  alt="Global logistics and international trade"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
            Partner with Erdgeify
          </h4>
          <p className="text-[#2B2B2B] dark:text-[#E0E0E0] mb-8">
            Let’s build global value together. We welcome strategic partners,
            institutions, and talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]"
            >
              Partner
            </a>
            <a
              href="mailto:info@sbbcworldwide.org?subject=Erdgeify%20Partnership"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]"
            >
              Send a Mail
            </a>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(14px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes iconFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="fadeUp"], [style*="iconFloat"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
