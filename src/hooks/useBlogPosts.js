import { useQuery } from "@tanstack/react-query";

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blog-posts", "home-latest"],
    queryFn: async () => {
      const response = await fetch("/api/blog-posts");
      if (!response.ok) {
        throw new Error(
          `When fetching /api/blog-posts, the response was [${response.status}] ${response.statusText}`,
        );
      }
      return response.json();
    },
  });
}
