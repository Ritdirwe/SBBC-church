import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");

    // Ensure table exists
    await sql(`
      CREATE TABLE IF NOT EXISTS public.seo_keywords (
        id SERIAL PRIMARY KEY,
        page_path TEXT UNIQUE NOT NULL,
        country TEXT DEFAULT 'us',
        primary_keyword TEXT,
        meta_title TEXT,
        meta_description TEXT,
        additional_keywords JSONB DEFAULT '[]'::jsonb,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    if (path) {
      const rows =
        await sql`SELECT * FROM public.seo_keywords WHERE page_path = ${path}`;
      return Response.json(rows[0] || null);
    }

    const rows =
      await sql`SELECT * FROM public.seo_keywords ORDER BY updated_at DESC, id DESC`;
    return Response.json(rows);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to load SEO keywords" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      page_path,
      country = "us",
      primary_keyword = null,
      meta_title = null,
      meta_description = null,
      additional_keywords = [],
    } = body || {};

    if (!page_path) {
      return Response.json({ error: "page_path is required" }, { status: 400 });
    }

    // Ensure table exists
    await sql(`
      CREATE TABLE IF NOT EXISTS public.seo_keywords (
        id SERIAL PRIMARY KEY,
        page_path TEXT UNIQUE NOT NULL,
        country TEXT DEFAULT 'us',
        primary_keyword TEXT,
        meta_title TEXT,
        meta_description TEXT,
        additional_keywords JSONB DEFAULT '[]'::jsonb,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Upsert by page_path
    const query = `
      INSERT INTO public.seo_keywords (
        page_path, country, primary_keyword, meta_title, meta_description, additional_keywords, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6::jsonb, CURRENT_TIMESTAMP)
      ON CONFLICT (page_path)
      DO UPDATE SET
        country = EXCLUDED.country,
        primary_keyword = EXCLUDED.primary_keyword,
        meta_title = EXCLUDED.meta_title,
        meta_description = EXCLUDED.meta_description,
        additional_keywords = EXCLUDED.additional_keywords,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *;
    `;

    const values = [
      page_path,
      country,
      primary_keyword,
      meta_title,
      meta_description,
      JSON.stringify(additional_keywords || []),
    ];

    const rows = await sql(query, values);
    return Response.json(rows[0]);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to save SEO keyword" },
      { status: 500 },
    );
  }
}
