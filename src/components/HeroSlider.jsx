import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function HeroSlider() {
  // Smooth, slow, gentle sliding
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      // Replace first slide with uploaded image and provide responsive variants
      image:
        "https://ucarecdn.com/717504d3-bba3-46d5-ab57-538bff3e8681/-/scale_crop/1920x1080/center/-/quality/smart/-/format/auto/",
      imageSrcSet: [
        "https://ucarecdn.com/717504d3-bba3-46d5-ab57-538bff3e8681/-/scale_crop/1280x720/center/-/quality/smart/-/format/auto/ 1280w",
        "https://ucarecdn.com/717504d3-bba3-46d5-ab57-538bff3e8681/-/scale_crop/1920x1080/center/-/quality/smart/-/format/auto/ 1920w",
        "https://ucarecdn.com/717504d3-bba3-46d5-ab57-538bff3e8681/-/scale_crop/2560x1440/center/-/quality/smart/-/format/auto/ 2560w",
      ].join(", "),
      sizes: "100vw",
      alt: "Church leader speaking on stage",
      heading: "Welcome Home", // heading removed from UI below per request
      type: "text",
    },
    {
      // UPDATED: Make the newly uploaded image the next hero after the first with responsive variants
      // CHANGED: Use the latest uploaded image (hero 3) and adjust focal point to 12% from the left
      image:
        "https://ucarecdn.com/f897ebcb-3e9c-4783-9bb3-75f781bdaafd/-/scale_crop/1920x1080/center/-/quality/smart/-/format/auto/",
      imageSrcSet: [
        "https://ucarecdn.com/f897ebcb-3e9c-4783-9bb3-75f781bdaafd/-/scale_crop/1280x720/center/-/quality/smart/-/format/auto/ 1280w",
        "https://ucarecdn.com/f897ebcb-3e9c-4783-9bb3-75f781bdaafd/-/scale_crop/1920x1080/center/-/quality/smart/-/format/auto/ 1920w",
        "https://ucarecdn.com/f897ebcb-3e9c-4783-9bb3-75f781bdaafd/-/scale_crop/2560x1440/center/-/quality/smart/-/format/auto/ 2560w",
      ].join(", "),
      sizes: "100vw",
      alt: "SBBC hero image",
      type: "text",
      // NEW: shift visible area ~12% towards the left to reveal more of the people
      objectPosition: "12% center",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=1080&fit=crop&q=80",
      alt: "Church exterior",
      type: "social",
    },
  ];

  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Slow interval (7.5s) for a gentle pace
    timerRef.current = setInterval(nextSlide, 7500);
    return () => clearInterval(timerRef.current);
  }, []);

  const transition = "transform 1500ms cubic-bezier(0.22, 1, 0.36, 1)"; // smooth & warm ease-out

  // socialLinks removed visually; kept here if needed later
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@sbbcworldwide",
      icon: "https://img.icons8.com/3d-fluency/200/youtube-play.png",
      gradient: "from-red-500 via-red-600 to-red-700",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/sbbcworldwide",
      icon: "https://img.icons8.com/color/200/facebook-new.png",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@sbbcworldwide",
      icon: "https://img.icons8.com/3d-fluency/200/tiktok.png",
      gradient: "from-pink-500 via-purple-600 to-cyan-500",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Sliding track */}
      <div
        className="absolute inset-0 h-full w-full flex"
        style={{ transform: `translateX(-${currentSlide * 100}%)`, transition }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.alt}
              // Add responsive sources for the uploaded hero so it fits 1920x1080 and serves 2560x1440 on large screens
              srcSet={slide.imageSrcSet}
              sizes={slide.sizes}
              className="w-full h-full object-cover"
              // NEW: allow per-slide focal shift
              style={{ objectPosition: slide.objectPosition || "50% 50%" }}
            />
            {/* Darker, warmer overlay for better contrast on the homepage */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.45)), radial-gradient(1200px 600px at 20% 10%, rgba(244,208,63,0.06), transparent 60%)",
              }}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              {slide.type === "text" ? (
                // Remove headings and decorative line per request
                <div className="text-center max-w-5xl" />
              ) : (
                // Social slide without icons per request, keeping the Join Us CTA
                <div className="text-center">
                  {/* Join Us Button (increased size by ~50%) */}
                  <div className="mt-12 flex items-center justify-center">
                    <a
                      href="/join"
                      className="group inline-flex items-center gap-4 px-9 py-[18px] rounded-full text-black font-bold text-xl bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] shadow-[0_8px_24px_rgba(194,156,26,0.45)] hover:shadow-[0_12px_28px_rgba(194,156,26,0.6)] transition-all"
                      style={{
                        transform:
                          currentSlide === index
                            ? "translateY(0)"
                            : "translateY(20px)",
                        opacity: currentSlide === index ? 1 : 0,
                        transition: "all 900ms cubic-bezier(0.22,1,0.36,1)",
                        transitionDelay:
                          currentSlide === index ? "0.85s" : "0s",
                      }}
                      aria-label="Join Us"
                    >
                      Join Us
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          clearInterval(timerRef.current);
          prevSlide();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => {
          clearInterval(timerRef.current);
          nextSlide();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? "bg-[#F4D03F] w-8" : "bg-white/60 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
