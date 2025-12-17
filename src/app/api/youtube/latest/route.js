export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const channelId =
      searchParams.get("channelId") || process.env.NEXT_PUBLIC_YT_CHANNEL_ID;

    if (!channelId || channelId.includes("REPLACE")) {
      return Response.json(
        {
          error:
            "channelId is required. Pass ?channelId=UC... or set NEXT_PUBLIC_YT_CHANNEL_ID.",
        },
        { status: 400 },
      );
    }

    // YouTube uploads RSS feed (no API key required)
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${encodeURIComponent(channelId)}`;
    const res = await fetch(feedUrl, {
      // Some CDNs are picky about missing UA; provide a basic one
      headers: {
        "User-Agent": "AnythingApp/1.0 (+https://createanything.com)",
      },
      // Avoid caching too long in case of frequent updates
      cache: "no-store",
    });

    if (!res.ok) {
      return Response.json(
        {
          error: `Failed to fetch YouTube feed: [${res.status}] ${res.statusText}`,
        },
        { status: res.status },
      );
    }

    const xml = await res.text();

    // Extract the first <entry> block
    const entryMatch = xml.match(/<entry[\s\S]*?<\/entry>/);
    if (!entryMatch) {
      return Response.json(
        { error: "No entries found in the YouTube feed" },
        { status: 404 },
      );
    }

    const entry = entryMatch[0];

    // Extract values with simple regex
    const videoIdMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
    const publishedMatch = entry.match(/<published>([^<]+)<\/published>/);
    const linkMatch = entry.match(/<link[^>]+href=\"([^\"]+)\"/);

    const payload = {
      videoId: videoIdMatch ? videoIdMatch[1] : null,
      title: titleMatch ? titleMatch[1] : null,
      publishedAt: publishedMatch ? publishedMatch[1] : null,
      url: linkMatch
        ? linkMatch[1]
        : videoIdMatch
          ? `https://www.youtube.com/watch?v=${videoIdMatch[1]}`
          : null,
    };

    if (!payload.videoId) {
      return Response.json(
        { error: "Could not parse latest videoId from feed" },
        { status: 422 },
      );
    }

    return Response.json(payload, { status: 200 });
  } catch (err) {
    console.error("/api/youtube/latest error", err);
    return Response.json(
      { error: "Unexpected error while fetching latest YouTube upload" },
      { status: 500 },
    );
  }
}
