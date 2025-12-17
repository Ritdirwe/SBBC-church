import {
  ExternalLink,
  TrendingUp,
  Building2,
  Globe,
  ShieldCheck,
  HandCoins,
  ArrowRight,
  Rocket,
  Factory,
  LineChart,
} from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

export default function FinancePage() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% -10%, rgba(74,88,119,0.10), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(25,32,44,0.30), transparent 60%), linear-gradient(180deg, #0b0e14 0%, #0f131a 40%, #10151f 100%)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, sans-serif',
      }}
    >
      {/* SEO */}
      <SEOHead path="/finance" />
      <ChurchHeader />

      {/* Hero */}
      <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=800&fit=crop&q=80"
          alt="Finance and Investment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0d121a]/60 to-[#0d121a]/90" />

        {/* Floating glass panel */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="backdrop-blur-xl bg-white/7 border border-white/15 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6 md:p-8 max-w-3xl w-full text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 text-xs md:text-sm mb-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Building Sustainable Futures
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Finance & Investment
            </h1>
            <p className="mt-3 md:mt-4 text-white/80 md:text-lg">
              Ethical investments that fuel ministry, education, and
              humanitarian impact.
            </p>

            {/* Quick inline actions */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              <a href="#philosophy" className="action-chip">
                <ShieldCheck className="w-4 h-4" /> Philosophy
              </a>
              <a href="#erdgeify" className="action-chip">
                <Globe className="w-4 h-4" /> Erdgeify
              </a>
              <a href="#focus" className="action-chip">
                <TrendingUp className="w-4 h-4" /> Focus Areas
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Action dock */}
      <section className="px-6 -mt-10 md:-mt-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="w-full backdrop-blur-xl bg-white/8 border border-white/15 rounded-2xl p-3 overflow-x-auto">
            <div className="flex gap-3 md:gap-4 min-w-max">
              <a href="/finance/erdgeify" className="action-chip">
                <Globe className="w-4 h-4" /> Portfolio
              </a>
              <a href="#philosophy" className="action-chip">
                <ShieldCheck className="w-4 h-4" /> Our Ethos
              </a>
              <a href="/foundation" className="action-chip">
                <HandCoins className="w-4 h-4" /> Impact
              </a>
              <a href="/news" className="action-chip">
                <Rocket className="w-4 h-4" /> Updates
              </a>
              <a href="/messages" className="action-chip">
                <ExternalLink className="w-4 h-4" /> Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro blurb */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Strategic Investments for Kingdom Impact
          </h2>
          <p className="text-white/85 leading-relaxed">
            We steward resources with excellence. Each investment is screened
            for ethics, sustainability, and long-term value creation that
            supports our global mission.
          </p>
        </div>
      </section>

      {/* Erdgeify Spotlight */}
      <section id="erdgeify" className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80"
                alt="Global trade and international business skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F4D03F] to-[#C29C1A] rounded-2xl flex items-center justify-center shadow-md">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-4xl font-bold">Erdgeify</h2>
            </div>
            <p className="text-white/85 leading-relaxed mb-6">
              Erdgeify is our strategic holding company, guiding a select group
              of international businesses. We foster excellence within each
              portfolio, leverage synergies across the group, and deliver
              lasting value to partners and communities.
            </p>
            <a
              href="/finance/erdgeify"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold px-6 py-3 rounded-full transition-all duration-200 ease-out hover:scale-105 active:scale-[0.98] shadow-lg hover:shadow-xl"
              aria-label="Learn more about Erdgeify"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section id="philosophy" className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Investment Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="card-glass">
              <div className="icon-ring from-[#4FD1C5] to-[#38B2AC]">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title">Ethics First</h3>
              <p className="card-body">
                We align every decision with biblical principles—integrity,
                transparency, and stewardship.
              </p>
            </div>
            <div className="card-glass">
              <div className="icon-ring from-[#F4D03F] to-[#C29C1A]">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title">Sustainable Growth</h3>
              <p className="card-body">
                We invest for compounding, long-term value—not short-term gains.
              </p>
            </div>
            <div className="card-glass">
              <div className="icon-ring from-[#9F7AEA] to-[#805AD5]">
                <HandCoins className="w-8 h-8 text-white" />
              </div>
              <h3 className="card-title">Kingdom Impact</h3>
              <p className="card-body">
                Returns are reinvested into ministry, education, and
                humanitarian work worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="py-8 md:py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-bold">Focus Areas</h3>
            <a
              href="/finance/erdgeify"
              className="text-amber-300/90 hover:text-amber-200 text-sm"
            >
              Explore portfolio →
            </a>
          </div>
          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            <div className="tile-glass">
              <div className="tile-icon from-[#60A5FA] to-[#3B82F6]">
                <LineChart className="w-7 h-7 text-white" />
              </div>
              <div className="tile-title">Financial Services</div>
              <div className="tile-sub">Advisory, risk, fintech</div>
            </div>
            <div className="tile-glass">
              <div className="tile-icon from-[#34D399] to-[#059669]">
                <Factory className="w-7 h-7 text-white" />
              </div>
              <div className="tile-title">Trade & Logistics</div>
              <div className="tile-sub">Commerce, supply chains</div>
            </div>
            <div className="tile-glass">
              <div className="tile-icon from-[#FB7185] to-[#F43F5E]">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div className="tile-title">Real Assets</div>
              <div className="tile-sub">Property, infrastructure</div>
            </div>
            <div className="tile-glass">
              <div className="tile-icon from-[#F4D03F] to-[#C29C1A]">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="tile-title">Venture</div>
              <div className="tile-sub">Innovation & growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-10 md:py-16 px-6">
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Partner With Us</h3>
          <p className="text-white/85 mt-2 max-w-2xl mx-auto">
            Interested in collaborating or learning more about our portfolio?
            We’d love to connect.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="/messages" className="action-chip">
              <ExternalLink className="w-4 h-4" /> Contact Us
            </a>
            <a href="/foundation" className="action-chip">
              <HandCoins className="w-4 h-4" /> See Our Impact
            </a>
          </div>
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />

      {/* Animations & shared styles */}
      <style jsx global>{`
        @keyframes slideUpSoft { 0% { opacity: 0; transform: translateY(22px) scale(0.98); filter: blur(6px); } 60% { opacity: 1; transform: translateY(-2px) scale(1); filter: blur(0); } 100% { transform: translateY(0); } }
        @keyframes sheen { 0% { transform: translateX(-40%); opacity: 0; } 40% { opacity: 0.9; } 100% { transform: translateX(40%); opacity: 0; } }
        .animate-sheen { animation: sheen 2.8s ease-in-out infinite; }
        .action-chip { display: inline-flex; align-items: center; gap: 8px; font-weight: 500; color: white; padding: 10px 14px; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.08); backdrop-filter: blur(8px); transition: all 200ms ease; white-space: nowrap; }
        .action-chip:hover { background: rgba(255,255,255,0.12); transform: translateY(-2px); }
        .card-glass { backdrop-filter: blur(12px); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.18); border-radius: 18px; padding: 22px; box-shadow: 0 10px 30px rgba(0,0,0,0.25); }
        .icon-ring { width: 64px; height: 64px; border-radius: 9999px; display: flex; align-items: center; justify-content: center; background-image: linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to)); box-shadow: 0 10px 30px rgba(0,0,0,0.25); margin-bottom: 16px; position: relative; overflow: hidden; }
        .icon-ring::after { content: ''; position: absolute; inset: -20%; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), transparent 40%); animation: sheen 3.5s ease-in-out infinite; }
        .card-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; }
        .card-body { color: rgba(255,255,255,0.85); }
        .tile-glass { backdrop-filter: blur(10px); background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.16); border-radius: 16px; padding: 16px; transition: all 200ms ease; }
        .tile-glass:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.35); }
        .tile-icon { position: relative; width: 56px; height: 56px; border-radius: 14px; margin-bottom: 10px; overflow: hidden; background-image: linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to)); }
        .tile-icon::after { content: ''; position: absolute; inset: -25%; background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%); animation: sheen 3s ease-in-out infinite; }
        .tile-title { font-weight: 600; }
        .tile-sub { font-size: 0.85rem; color: rgba(255,255,255,0.8); }
        @media (prefers-reduced-motion: reduce) { .animate-sheen { animation: none !important; } .action-chip { transform: none !important; } .tile-glass:hover { transform: none !important; } }
      `}</style>
    </div>
  );
}
