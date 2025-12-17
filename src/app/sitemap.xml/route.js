export async function GET() {
  try {
    const base = process.env.APP_URL || ""; // e.g. https://yourdomain.com
    const now = new Date().toISOString();

    const paths = [
      "/",
      "/vision",
      "/news",
      "/messages",
      "/education",
      "/education/deep-knowledge-academy",
      "/education/seminary",
      "/education/marriage-academy",
      "/education/lawson-university",
      "/finance",
      "/foundation",
      "/pastorium",
    ];

    const urlset = paths
      .map((p) => {
        const loc = base ? `${base}${p}` : p;
        return `<url><loc>${loc}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.7"}</priority></url>`;
      })
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>`;

    return new Response(xml, {
      headers: { "Content-Type": "application/xml; charset=utf-8" },
      status: 200,
    });
  } catch (e) {
    console.error(e);
    return new Response("", { status: 500 });
  }
}
