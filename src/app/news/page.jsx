import {
  ArrowRight,
  Play,
  Users,
  Clock,
  Share2,
  Copy,
  Heart,
  Tv,
  Radio,
  Wifi,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ChurchHeader from "@/components/ChurchHeader";
import ChurchFooter from "@/components/ChurchFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

export default function NewsPage() {
  // Config sources (env + optional URL overrides)
  const defaultChannelId = process.env.NEXT_PUBLIC_YT_CHANNEL_ID || "";
  const [channelId, setChannelId] = useState(defaultChannelId);
  const [liveVideoId, setLiveVideoId] = useState(
    process.env.NEXT_PUBLIC_YT_LIVE_VIDEO_ID || "",
  );

  // Read optional ?channelId= and ?videoId= from the URL (client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const qChannel = params.get("channelId");
    const qVideo = params.get("videoId");
    if (qChannel) setChannelId(qChannel);
    if (qVideo) setLiveVideoId(qVideo);
  }, []);

  // Fetch latest upload for share links/fallbacks (no API key; via RSS-backed API)
  const {
    data: latest,
    isLoading: isLoadingLatest,
    error: latestError,
  } = useQuery({
    queryKey: ["youtube-latest", channelId],
    queryFn: async () => {
      if (!channelId) return null;
      const res = await fetch(
        `/api/youtube/latest?channelId=${encodeURIComponent(channelId)}`,
      );
      if (!res.ok) {
        throw new Error(
          `When fetching /api/youtube/latest, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
    enabled: !!channelId,
    staleTime: 1000 * 60, // 1 minute
  });

  // New: Fetch all blog posts for the Updates list
  const {
    data: posts = [],
    isLoading: isLoadingPosts,
    error: postsError,
  } = useQuery({
    queryKey: ["blog-posts", "all"],
    queryFn: async () => {
      const response = await fetch("/api/blog-posts");
      if (!response.ok) {
        throw new Error(
          `When fetching /api/blog-posts, the response was [${response.status}] ${response.statusText}`,
        );
      }
      return response.json();
    },
    staleTime: 1000 * 30,
  });

  // Compute derived URLs
  const watchUrl = useMemo(() => {
    if (liveVideoId) {
      return `https://www.youtube.com/watch?v=${liveVideoId}`;
    }
    if (channelId) {
      return `https://www.youtube.com/channel/${channelId}/live`;
    }
    // Fallback to latest upload if available
    if (latest && latest.videoId) {
      return `https://www.youtube.com/watch?v=${latest.videoId}`;
    }
    return "https://www.youtube.com";
  }, [channelId, liveVideoId, latest]);

  const [chatUrl, setChatUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!liveVideoId) return;
    if (typeof window === "undefined") return;
    const domain = window.location.hostname;
    const url = `https://www.youtube.com/live_chat?v=${liveVideoId}&embed_domain=${domain}`;
    setChatUrl(url);
  }, [liveVideoId]);

  const handleCopyLink = async () => {
    try {
      const link =
        typeof window !== "undefined" ? window.location.href : watchUrl;
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO */}
      <SEOHead path="/news" />
      <ChurchHeader />

      {/* iOS-styled Hero with glass panel */}
      <section className="relative pt-24 pb-10 md:pb-14 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Ambient gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#F4D03F]/25 to-[#C29C1A]/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-tl from-sky-400/10 to-indigo-500/10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Dynamic Island style pill */}
          <div className="mx-auto w-fit mb-6">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.16)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                {liveVideoId ? "Live now" : "Live stream"}
              </span>
            </div>
          </div>

          {/* Glass headline card */}
          <div
            className="max-w-4xl mx-auto text-center rounded-3xl p-8 md:p-10 border shadow-2xl mb-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.06))",
              borderColor: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Stream{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-[#C29C1A]">
                Live
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Join us for worship, teaching, and fellowship from anywhere in the
              world.
            </p>
          </div>

          {/* Compact stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5" />
              <span className="text-sm">Live congregation</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Sundays 10:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Play className="w-5 h-5" />
              <span className="text-sm">HD quality</span>
            </div>
          </div>

          {/* Action dock */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(90deg, #F4D03F, #C29C1A)",
                color: "#0b0b0b",
              }}
              aria-label="Watch on YouTube"
            >
              <Play className="w-5 h-5" /> Watch on YouTube
            </a>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.20)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color: "#fff",
              }}
              aria-label="Copy page link"
            >
              <Copy className="w-4 h-4" /> {copied ? "Copied!" : "Copy link"}
            </button>

            {channelId ? (
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(watchUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.20)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  color: "#fff",
                }}
                aria-label="Share on Facebook"
              >
                <Share2 className="w-4 h-4" /> Share
              </a>
            ) : null}

            <a
              href="https://paystack.com/pay/sbbcworldwide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.20)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                color: "#fff",
              }}
              aria-label="Give online"
            >
              <Heart className="w-4 h-4" /> Give
            </a>
          </div>

          {/* Helper note if not configured */}
          {!channelId && (
            <p className="mt-6 text-white/70 text-sm max-w-2xl mx-auto text-center">
              To enable the live player, set NEXT_PUBLIC_YT_CHANNEL_ID in your
              settings, or add ?channelId=UC... to this page URL. Optionally add
              ?videoId= for live chat.
            </p>
          )}
        </div>
      </section>

      {/* Live Stream Content Section (glass layout) */}
      <section
        id="live"
        className="py-14 px-6"
        style={{
          background: "linear-gradient(180deg, #0c111a, #0f141d 40%, #0c111a)",
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Video Player card */}
          <div
            className="lg:col-span-2 rounded-3xl overflow-hidden border shadow-2xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
              borderColor: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {channelId ? (
              <iframe
                src={`https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1&mute=0&modestbranding=1&rel=0`}
                title="YouTube Live Stream"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-video"
              />
            ) : (
              <div className="p-12 text-white text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center border border-white/15">
                    <Play className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Live Stream Setup</h3>
                  <p className="text-white/80 mb-2">
                    Add your YouTube Channel ID to show the live player.
                  </p>
                  <p className="text-white/60 text-sm">
                    You can also test quickly by adding ?channelId=UC... to the
                    URL.
                  </p>
                </div>
              </div>
            )}

            {/* Mini info strip */}
            <div
              className="flex flex-wrap items-center gap-4 px-5 py-3 border-t"
              style={{ borderColor: "rgba(255,255,255,0.10)" }}
            >
              <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                <Tv className="w-4 h-4" /> Best viewed on YouTube app
              </span>
              <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                <Radio className="w-4 h-4" /> Audio available
              </span>
              <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                <Wifi className="w-4 h-4" /> Stable internet recommended
              </span>
            </div>
          </div>

          {/* Right Column: Chat + Info + Latest */}
          <div className="space-y-6">
            {/* Live Chat */}
            <div
              className="rounded-3xl overflow-hidden border shadow-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,0.85))",
                borderColor: "rgba(17,24,39,0.12)",
              }}
            >
              <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <h3 className="font-bold text-lg">Live Chat</h3>
                <p className="text-white/70 text-sm">Join the conversation</p>
              </div>
              {chatUrl ? (
                <iframe
                  src={chatUrl}
                  title="YouTube Live Chat"
                  frameBorder="0"
                  className="w-full h-[420px]"
                />
              ) : (
                <div className="p-6 text-center bg-white/80">
                  <div className="text-4xl mb-3">💬</div>
                  <p className="font-semibold text-gray-800 mb-1">
                    Chat unavailable
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Provide a live video ID via NEXT_PUBLIC_YT_LIVE_VIDEO_ID or
                    add ?videoId= to the URL.
                  </p>
                  {channelId && (
                    <a
                      href={watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#C29C1A] hover:text-[#F4D03F] font-medium"
                    >
                      View on YouTube to chat <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Service Info */}
            <div
              className="rounded-3xl p-6 border shadow-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,0.85))",
                borderColor: "rgba(17,24,39,0.12)",
              }}
            >
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Service information
              </h3>
              <div className="space-y-3 text-gray-800">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service time</span>
                  <span className="font-medium">Sunday 10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">~2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">Worldwide</span>
                </div>
              </div>
            </div>

            {/* Latest Upload helper */}
            {channelId && !liveVideoId && (
              <div
                className="rounded-3xl p-6 border shadow-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,0.85))",
                  borderColor: "rgba(17,24,39,0.12)",
                }}
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Latest upload
                </h3>
                {isLoadingLatest ? (
                  <p className="text-gray-700">Loading latest video…</p>
                ) : latestError ? (
                  <p className="text-red-600 text-sm">
                    {String(latestError.message || latestError)}
                  </p>
                ) : latest?.videoId ? (
                  <a
                    href={`https://www.youtube.com/watch?v=${latest.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C29C1A] hover:text-[#F4D03F] font-medium"
                  >
                    Watch: {latest.title || latest.videoId}
                  </a>
                ) : (
                  <p className="text-gray-700">No recent uploads found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* New: All News & Updates list */}
      <section id="updates" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              All News & Updates
            </h2>
            <a
              href="#live"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Back to top ↑
            </a>
          </div>

          {isLoadingPosts ? (
            <p className="text-gray-700">Loading updates…</p>
          ) : postsError ? (
            <p className="text-red-600">
              {String(postsError.message || postsError)}
            </p>
          ) : posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const dateStr = post.created_at
                  ? new Date(post.created_at).toLocaleDateString()
                  : "";
                return (
                  <article
                    id={`update-${post.id}`}
                    key={post.id}
                    className="rounded-2xl overflow-hidden border shadow-sm bg-white"
                    style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    {post.image_url ? (
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-56 object-cover"
                      />
                    ) : null}
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {dateStr}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {post.title}
                      </h3>
                      <div className="prose prose-sm max-w-none text-gray-800">
                        <p>{post.content}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-700">
              No updates yet. Please check back soon.
            </p>
          )}
        </div>
      </section>

      <ChurchFooter />
      <WhatsAppButton />

      {/* Animations for subtle sheen/glow */}
      <style jsx global>{`
        @keyframes sheen {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .sheen::after {
          content: "";
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          animation: sheen 3s infinite;
        }
      `}</style>
    </div>
  );
}
