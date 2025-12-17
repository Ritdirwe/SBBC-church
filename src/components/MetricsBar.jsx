import { useQuery } from "@tanstack/react-query";
// Replace icon set and prep for improved visuals
import { UsersRound, HeartHandshake, Building2, Church } from "lucide-react"; // refreshed, more expressive icons

export default function MetricsBar() {
  const { data: metrics } = useQuery({
    queryKey: ["metrics"],
    queryFn: async () => {
      const response = await fetch("/api/metrics");
      if (!response.ok) throw new Error("Failed to fetch metrics");
      return response.json();
    },
  });

  const stats = [
    {
      Icon: UsersRound, // fuller silhouette for a friendlier, modern look
      label: "Converts",
      value: metrics?.converts || 0,
    },
    {
      Icon: HeartHandshake,
      label: "Displaced People Supported",
      value: metrics?.displaced_supported || 0,
    },
    {
      Icon: Building2,
      label: "Cities",
      value: metrics?.cities || 0,
    },
    {
      Icon: Church,
      label: "Churches Worldwide",
      value: metrics?.churches || 0,
    },
  ];

  return (
    <div className="py-20 px-6 bg-[#0e1219]">
      <div className="max-w-6xl mx-auto">
        {/* Remove flexbox usage; keep a clean grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ Icon, label, value }, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "0.5px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif',
              }}
            >
              {/* Icon (no flexbox) */}
              <div className="mb-4">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto grid place-items-center"
                  style={{
                    // Subtle gold ring and soft dark glass for a premium feel
                    background:
                      "linear-gradient(145deg, rgba(0,0,0,0.55), rgba(0,0,0,0.34))",
                    border: "1px solid rgba(244,208,63,0.35)",
                    boxShadow:
                      "0 10px 24px rgba(0,0,0,0.16), 0 8px 20px rgba(244,208,63,0.18)",
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#F4D03F" }} />
                </div>
              </div>

              {/* Value */}
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                {`${Number(value).toLocaleString()}+`}
              </div>

              {/* Label */}
              <div className="text-[13px] text-white/70 font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
