export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("keyword");
    const country = searchParams.get("country") || "us";

    if (!keyword) {
      return Response.json(
        { error: "Missing required query param: keyword" },
        { status: 400 },
      );
    }

    // Call the SEO Keyword Research integration directly from the backend
    const integrationUrl = `/integrations/seo-keyword-research/keynew.php?keyword=${encodeURIComponent(
      keyword,
    )}&country=${encodeURIComponent(country)}`;

    const res = await fetch(integrationUrl, { method: "GET" });
    if (!res.ok) {
      return Response.json(
        {
          error: `SEO integration failed: [${res.status}] ${res.statusText}`,
        },
        { status: res.status },
      );
    }

    const data = await res.json();
    return Response.json({ results: data });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Unexpected error during SEO research" },
      { status: 500 },
    );
  }
}
