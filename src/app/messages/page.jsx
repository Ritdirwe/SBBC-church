import { ArrowRight } from "lucide-react";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import { useQuery } from "@tanstack/react-query";
import SEOHead from "@/components/SEOHead";

export default function MessagesPage() {
  // Config: set your Channel ID (UCxxxxxxxx) to always show the newest upload
  const YT_CHANNEL_ID =
    process.env.NEXT_PUBLIC_YT_CHANNEL_ID || "REPLACE_WITH_YOUR_CHANNEL_ID";

  // Keep channel URL configurable for the CTA button
  const youtubeChannelUrl = "https://youtube.com/@sbbcworldwide";
  // Fallback video (used until a Channel ID is provided or if the feed fails)
  const fallbackVideoId = "dyiZYGb_4iU";

  // Query latest upload from our API (uses YouTube RSS feed, no API key required)
  const { data, error } = useQuery({
    queryKey: ["latest-youtube-upload", YT_CHANNEL_ID],
    enabled: !!YT_CHANNEL_ID && !YT_CHANNEL_ID.includes("REPLACE"),
    queryFn: async () => {
      const res = await fetch(
        `/api/youtube/latest?channelId=${encodeURIComponent(YT_CHANNEL_ID)}`,
      );
      if (!res.ok) {
        throw new Error(
          `When fetching /api/youtube/latest, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
  });

  const featuredVideoId = data?.videoId || fallbackVideoId;
  const showChannelHint = !YT_CHANNEL_ID || YT_CHANNEL_ID.includes("REPLACE");
  const hasError = Boolean(error);

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
      }}
    >
      {/* SEO */}
      <SEOHead path="/messages" />
      <ChurchHeader />

      {/* Simple header (reverted from background hero) */}
      <section
        className="pt-24 pb-6 px-6 bg-white"
        aria-label="Watch Messages header"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Watch Messages
          </h1>
          <p className="text-black/70">
            Catch up on recent sermons and teachings.
          </p>
          {hasError ? (
            <p className="mt-2 text-sm text-red-600">
              Couldn’t load the latest video right now. Showing a recent message
              instead.
            </p>
          ) : null}
          {showChannelHint ? (
            <p className="mt-2 text-sm text-black/60">
              To always show your newest upload, share your YouTube Channel ID
              and I’ll plug it in.
            </p>
          ) : null}
        </div>
      </section>

      {/* Single full-size YouTube video that fills its section */}
      <section
        className="relative w-full h-screen overflow-hidden bg-black"
        data-animate
        aria-label="Featured Message Video"
      >
        {/* The iframe is centered and sized to cover the entire section without letterboxing */}
        <iframe
          src={`https://www.youtube.com/embed/${featuredVideoId}?enablejsapi=1&modestbranding=1&rel=0&playsinline=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "177.78vh", // 16:9 cover sizing based on viewport height
            height: "100vh",
          }}
        />
      </section>

      {/* Visit channel link under the video */}
      <section className="py-6 px-6 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto">
          <div className="flex">
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-lg"
            >
              Visit YouTube Channel
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* removed Facebook section */}

      <ChurchFooter />
    </div>
  );
}
