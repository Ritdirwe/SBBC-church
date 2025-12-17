import { useQuery } from "@tanstack/react-query";

export function useSeo(path) {
  return useQuery({
    queryKey: ["seo-keyword", path],
    queryFn: async () => {
      const res = await fetch(
        `/api/seo/keywords?path=${encodeURIComponent(path)}`,
      );
      if (!res.ok) {
        throw new Error(
          `When fetching /api/seo/keywords?path=${path}, the response was [${res.status}] ${res.statusText}`,
        );
      }
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
  });
}

export default useSeo;
