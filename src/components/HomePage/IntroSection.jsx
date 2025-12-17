import { Play } from "lucide-react";

export function IntroSection() {
  return (
    <section data-animate className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="rounded-3xl border shadow-xl p-6 md:p-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
            borderColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <a
            href="/messages"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 mb-8 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <Play className="w-5 h-5" />
            Watch Messages
          </a>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-5 text-white">
            Transform your life through faith,
            <br />
            grow in God's love,
            <br />
            and make a difference in the world.
          </h2>

          <p className="text-lg text-white/75 italic mt-8">
            "For I know the plans I have for you, declares the Lord, plans to
            prosper you and not to harm you, plans to give you hope and a
            future." - Jeremiah 29:11
          </p>
        </div>
      </div>
    </section>
  );
}
