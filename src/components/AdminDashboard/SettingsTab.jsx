import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function SettingsTab({ metrics }) {
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSaved(false);
    const formData = new FormData(e.target);
    try {
      const res = await fetch("/api/metrics", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          converts: parseInt(formData.get("converts")),
          displaced_supported: parseInt(formData.get("displaced_supported")),
          cities: parseInt(formData.get("cities")),
          churches: parseInt(formData.get("churches")),
        }),
      });
      if (!res.ok) {
        throw new Error(
          `When updating /api/metrics, the response was [${res.status}] ${res.statusText}`,
        );
      }
      // Refresh metrics in admin and on any page using the same key
      await queryClient.invalidateQueries({ queryKey: ["metrics"] });
      setSaved(true);
    } catch (err) {
      console.error(err);
      setError("Could not update metrics. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-black mb-6">
        Update Ministry Metrics
      </h2>
      <div className="bg-white rounded-xl p-8 border border-[#E9E9E9] max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Number of Converts
            </label>
            <input
              type="number"
              name="converts"
              defaultValue={metrics?.converts || 0}
              className="w-full px-4 py-3 border border-[#E9E9E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Displaced People Supported
            </label>
            <input
              type="number"
              name="displaced_supported"
              defaultValue={metrics?.displaced_supported || 0}
              className="w-full px-4 py-3 border border-[#E9E9E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Number of Cities
            </label>
            <input
              type="number"
              name="cities"
              defaultValue={metrics?.cities || 0}
              className="w-full px-4 py-3 border border-[#E9E9E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Number of Churches
            </label>
            <input
              type="number"
              name="churches"
              defaultValue={metrics?.churches || 0}
              className="w-full px-4 py-3 border border-[#E9E9E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F4D03F] to-[#C29C1A] hover:from-[#F5D65A] hover:to-[#D4A92A] text-black font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-[0.98]"
          >
            Update Metrics
          </button>
          {saved && (
            <p className="text-green-600 text-sm">Saved. Numbers updated.</p>
          )}
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
}
