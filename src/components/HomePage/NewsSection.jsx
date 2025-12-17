import { Calendar, ArrowRight } from "lucide-react";

export function NewsSection({ posts, isLoading }) {
  const topThree = Array.isArray(posts) ? posts.slice(0, 3) : [];

  return (
    <section data-animate className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            News & Updates
          </h2>
          <div className="flex items-center gap-3">
            <a
              href="/news#live"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg"
            >
              Stream Live
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/news#updates"
              className="text-white/80 hover:text-white font-medium"
            >
              View all updates →
            </a>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center text-white/60">Loading latest posts…</div>
        ) : topThree.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topThree.map((post) => (
              <article
                key={post.id}
                className="rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all duration-200 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))",
                  borderColor: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                {post.image_url && (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.created_at).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-white/75 mb-4">
                    {post.excerpt ||
                      (post.content
                        ? post.content.substring(0, 120) + "..."
                        : "")}
                  </p>
                  {/* Update: Link to the consolidated updates section with an anchor to this post */}
                  <a
                    href={`/news#update-${post.id}`}
                    className="text-[#C29C1A] hover:text-[#F4D03F] font-semibold"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-white/60">No updates yet. Check back soon.</p>
        )}
      </div>
    </section>
  );
}
