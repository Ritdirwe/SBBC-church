import ChurchHeader from "@/components/ChurchHeader";
import HeroSlider from "@/components/HeroSlider";
import MetricsBar from "@/components/MetricsBar";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { QuickActionsDock } from "@/components/HomePage/QuickActionsDock";
import { IntroSection } from "@/components/HomePage/IntroSection";
import { GiveOnlineSection } from "@/components/HomePage/GiveOnlineSection";
import { FeaturedVideoSection } from "@/components/HomePage/FeaturedVideoSection";
import { YouthMinistrySection } from "@/components/HomePage/YouthMinistrySection";
import { VisionStatement } from "@/components/HomePage/VisionStatement";
import { VisionDetails } from "@/components/HomePage/VisionDetails";
import { GallerySection } from "@/components/HomePage/GallerySection";
import { CounselingSection } from "@/components/HomePage/CounselingSection";
import { NewsSection } from "@/components/HomePage/NewsSection";
import { useBlogPosts } from "@/hooks/useBlogPosts";
// Removed useMemo import since scripture chips section was deleted

export default function HomePage() {
  // Keep maps link for Visit actions that depend on it
  const mapsDirectionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=8.898111%2C7.256139";

  // Keep blog posts for News section
  const { data: posts = [], isLoading: isLoadingPosts } = useBlogPosts();

  // Removed: scriptureChips and the scripture cards section below the hero as requested
  // const scriptureChips = useMemo(
  //   () => [
  //     { text: "The Lord is my shepherd", ref: "Psalm 23:1" },
  //     { text: "We walk by faith, not by sight", ref: "2 Cor. 5:7" },
  //     { text: "Ask and it shall be given", ref: "Matt. 7:7" },
  //     { text: "God so loved the world", ref: "John 3:16" },
  //   ],
  //   [],
  // );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#121212]">
      {/* Header */}
      <ChurchHeader />

      {/* Hero — restored to original usage without extra overlays or effects */}
      <HeroSlider />

      {/* Quick actions (iOS-style) just below hero */}
      <QuickActionsDock mapsDirectionsUrl={mapsDirectionsUrl} />

      {/* Removed scripture cards section per request */}
      {/**
      <section className="px-6 mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {scriptureChips.map((chip, idx) => {
              const title = chip.text;
              const ref = chip.ref;
              return (
                <div
                  key={idx}
                  className="rounded-2xl px-4 py-4 border shadow"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(0,0,0,0.08)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  <div className="text-sm font-semibold text-[#111] dark:text-white/95 tracking-tight">
                    {title}
                  </div>
                  <div className="text-xs mt-1 text-[#444] dark:text-white/70">
                    {ref}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      */}

      {/* Removed quick counseling section below the hero per request */}

      {/* Core sections */}
      <IntroSection />
      <MetricsBar />
      <GiveOnlineSection />
      <FeaturedVideoSection />
      <YouthMinistrySection />
      <VisionStatement />
      <VisionDetails />
      <GallerySection />
      <CounselingSection mapsDirectionsUrl={mapsDirectionsUrl} />
      <NewsSection posts={posts} isLoading={isLoadingPosts} />

      {/* Footer & helpers */}
      <ChurchFooter />
      <WhatsAppButton />
    </div>
  );
}
