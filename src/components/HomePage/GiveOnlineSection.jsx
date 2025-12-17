import { ArrowRight } from "lucide-react";

export function GiveOnlineSection() {
  return (
    <section data-animate className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="rounded-3xl border shadow-xl p-8"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
            borderColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Support Our Mission
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Your generous giving helps us spread God's love worldwide and
            transform lives through faith.
          </p>
          <a
            href="https://paystack.com/pay/sbbcworldwide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 ease-out hover:scale-105 active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            Give Online
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
