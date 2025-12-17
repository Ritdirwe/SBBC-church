"use client";
import { useEffect } from "react";
import { useSeo } from "@/utils/useSeo";

export default function SEOHead({ path }) {
  const { data, error } = useSeo(path);

  const title = data?.meta_title || null;
  const description = data?.meta_description || null;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (title) {
      document.title = title;
    }
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);

  // Also render tags so they are present on initial render
  return (
    <>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {error ? <meta name="robots" content="noindex,follow" /> : null}
    </>
  );
}
