import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative w-full h-[360px] md:h-[460px]" data-animate>
      <img
        src="https://images.unsplash.com/photo-1596495578065-8f02bd6c2234?w=1920&h=800&fit=crop&q=80"
        alt="Deep Knowledge Academy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Deep Knowledge Academy
            </h1>
            <p className="mt-3 text-white/90">
              A Christian faith‑based Nursery, Primary, and Secondary school
              forming minds and hearts in knowledge, character, and Christ.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#admissions"
                className="inline-flex items-center gap-2 bg-[#F4D03F] hover:bg-[#C29C1A] text-black font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                Apply Now <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                Explore Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
