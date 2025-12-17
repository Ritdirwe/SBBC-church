import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Search, Save, CheckCircle, ExternalLink } from "lucide-react";

const PAGE_OPTIONS = [
  {
    label: "Deep Knowledge Academy",
    path: "/education/deep-knowledge-academy",
  },
  { label: "Seminary (Home)", path: "/education/seminary" },
  { label: "Marriage Academy", path: "/education/marriage-academy" },
  { label: "Lawson University", path: "/education/lawson-university" },
  { label: "Finance", path: "/finance" },
  { label: "Foundation", path: "/foundation" },
  { label: "Pastorium", path: "/pastorium" },
  { label: "Vision", path: "/vision" },
  { label: "News", path: "/news" },
  { label: "Messages", path: "/messages" },
  { label: "Education (Hub)", path: "/education" },
];

export function SEOTab() {
  const qc = useQueryClient();
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("ng");
  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [selectedPage, setSelectedPage] = useState(PAGE_OPTIONS[0].path);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const enabled = useMemo(() => keyword.trim().length > 0, [keyword]);

  const researchQuery = useQuery({
    queryKey: ["seo-research", keyword, country],
    enabled: false,
    queryFn: async () => {
      const res = await fetch(
        `/integrations/seo-keyword-research/keynew.php?keyword=${encodeURIComponent(keyword)}&country=${encodeURIComponent(
          country,
        )}`,
        { method: "GET" },
      );
      if (!res.ok) {
        throw new Error(
          `When fetching SEO integration, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
  });

  const { data: savedKeywords = [] } = useQuery({
    queryKey: ["seo-keywords"],
    queryFn: async () => {
      const res = await fetch("/api/seo/keywords");
      if (!res.ok) {
        throw new Error(
          `When fetching /api/seo/keywords, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
  });

  const saveMutation = useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/seo/keywords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(
          `When saving /api/seo/keywords, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["seo-keywords"] });
    },
  });

  const runResearch = () => {
    if (!enabled) return;
    researchQuery.refetch();
  };

  const onPickKeyword = (kw) => {
    setSelectedKeyword(kw);
    const suggestedTitle = `${kw.text} | SBBC`;
    const suggestedDesc = `Learn about ${kw.text} with SBBC. Explore details, programs, and how to get started.`;
    setMetaTitle(suggestedTitle);
    setMetaDescription(suggestedDesc);
  };

  const onSave = () => {
    if (!selectedPage) return;
    saveMutation.mutate({
      page_path: selectedPage,
      country,
      primary_keyword: selectedKeyword?.text || null,
      meta_title: metaTitle || null,
      meta_description: metaDescription || null,
      additional_keywords: [],
    });
  };

  return (
    <div>
      {/* Search */}
      <div className="bg-white border border-[#E9E9E9] rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Search className="w-5 h-5" /> SEO Keyword Research
        </h2>
        <div className="flex flex-col md:flex-row gap-3">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter a topic or seed keyword (e.g., christian school Lagos)"
            className="flex-1 border border-[#E9E9E9] rounded-lg px-4 py-3 outline-none"
          />
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country (e.g., ng)"
            className="w-[140px] border border-[#E9E9E9] rounded-lg px-4 py-3 outline-none"
          />
          <button
            onClick={runResearch}
            disabled={!enabled || researchQuery.isFetching}
            className="bg-black text-white px-5 py-3 rounded-lg disabled:opacity-50"
          >
            {researchQuery.isFetching ? "Searching…" : "Search"}
          </button>
        </div>
        {researchQuery.error && (
          <div className="text-red-600 mt-3">{researchQuery.error.message}</div>
        )}
      </div>

      {/* Results + Assign */}
      {researchQuery.data?.length > 0 && (
        <div className="grid md:grid-cols-5 gap-6">
          {/* Results table */}
          <div className="md:col-span-3 bg-white border border-[#E9E9E9] rounded-xl p-4 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[#6E6E6E] text-sm">
                    <th className="py-2 px-2">Keyword</th>
                    <th className="py-2 px-2">Volume</th>
                    <th className="py-2 px-2">CPC</th>
                    <th className="py-2 px-2">Comp.</th>
                    <th className="py-2 px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {researchQuery.data.map((kw, idx) => (
                    <tr key={idx} className="border-t border-[#F0F0F0]">
                      <td className="py-2 px-2">{kw.text}</td>
                      <td className="py-2 px-2">
                        {kw.vol?.toLocaleString?.() || kw.v}
                      </td>
                      <td className="py-2 px-2">{kw.cpc}</td>
                      <td className="py-2 px-2 capitalize">{kw.competition}</td>
                      <td className="py-2 px-2 text-right">
                        <button
                          onClick={() => onPickKeyword(kw)}
                          className="text-black underline"
                        >
                          Assign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Assign panel */}
          <div className="md:col-span-2 bg-white border border-[#E9E9E9] rounded-xl p-4">
            <h3 className="font-semibold mb-3">Assign to a page</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-[#6E6E6E] mb-1">
                  Chosen keyword
                </label>
                <input
                  value={selectedKeyword?.text || ""}
                  readOnly
                  placeholder="Pick from results"
                  className="w-full border border-[#E9E9E9] rounded-lg px-3 py-2 bg-[#FAFAFA]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#6E6E6E] mb-1">
                  Page
                </label>
                <select
                  value={selectedPage}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="w-full border border-[#E9E9E9] rounded-lg px-3 py-2"
                >
                  {PAGE_OPTIONS.map((p) => (
                    <option key={p.path} value={p.path}>
                      {p.label} ({p.path})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-[#6E6E6E] mb-1">
                  Meta title
                </label>
                <input
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Title tag for this page"
                  className="w-full border border-[#E9E9E9] rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm text-[#6E6E6E] mb-1">
                  Meta description
                </label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="One or two sentences that would make sense on Google"
                  className="w-full border border-[#E9E9E9] rounded-lg px-3 py-2 h-24"
                />
              </div>
              <button
                onClick={onSave}
                disabled={saveMutation.isLoading || !selectedPage}
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {saveMutation.isLoading ? "Saving..." : "Save Target"}
              </button>
              {saveMutation.isSuccess && (
                <div className="text-green-700 flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" /> Saved
                </div>
              )}
              {saveMutation.error && (
                <div className="text-red-600 text-sm">
                  {saveMutation.error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Saved targets */}
      <div className="mt-8 bg-white border border-[#E9E9E9] rounded-xl">
        <div className="p-4 border-b border-[#F0F0F0] flex items-center justify-between">
          <h3 className="font-semibold">Saved Targets</h3>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noreferrer"
            className="text-sm flex items-center gap-1 underline"
          >
            View sitemap <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="p-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#6E6E6E] text-sm">
                <th className="py-2 px-2">Page</th>
                <th className="py-2 px-2">Country</th>
                <th className="py-2 px-2">Primary Keyword</th>
                <th className="py-2 px-2">Meta Title</th>
                <th className="py-2 px-2">Meta Description</th>
              </tr>
            </thead>
            <tbody>
              {savedKeywords.map((row) => (
                <tr key={row.id} className="border-t border-[#F0F0F0]">
                  <td className="py-2 px-2">{row.page_path}</td>
                  <td className="py-2 px-2 uppercase">{row.country}</td>
                  <td className="py-2 px-2">{row.primary_keyword || "—"}</td>
                  <td className="py-2 px-2">{row.meta_title || "—"}</td>
                  <td className="py-2 px-2 text-[#6E6E6E] max-w-[420px] truncate">
                    {row.meta_description || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
