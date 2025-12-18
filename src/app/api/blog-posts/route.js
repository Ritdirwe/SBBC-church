import sql from "../utils/sql.js";

export async function GET(request) {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts 
      WHERE published = true 
      ORDER BY created_at DESC
    `;

    return Response.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return Response.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, content, excerpt, image_url, published = true } = body;

    if (!title || !content) {
      return Response.json(
        { error: "Title and content are required" },
        { status: 400 },
      );
    }

    const result = await sql`
      INSERT INTO blog_posts (title, content, excerpt, image_url, published, created_at, updated_at)
      VALUES (${title}, ${content}, ${excerpt || null}, ${image_url || null}, ${published}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      RETURNING id, title, content, excerpt, image_url, author, published, created_at, updated_at
    `;

    return Response.json(result[0]);
  } catch (error) {
    console.error("Error creating blog post:", error);
    return Response.json(
      { error: "Failed to create blog post" },
      { status: 500 },
    );
  }
}
