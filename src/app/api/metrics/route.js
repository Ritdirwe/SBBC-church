import sql from "../utils/sql.js";

export async function GET(request) {
  try {
    const metrics = await sql`SELECT * FROM metrics ORDER BY id DESC LIMIT 1`;

    if (metrics.length === 0) {
      return Response.json({
        converts: 0,
        displaced_supported: 0,
        cities: 0,
        churches: 0,
      });
    }

    return Response.json(metrics[0]);
  } catch (error) {
    console.error("Error fetching metrics:", error);
    return Response.json({ error: "Failed to fetch metrics" }, { status: 500 });
  }
}

// NEW: allow admin to update metrics so changes reflect on the public site
export async function PUT(request) {
  try {
    const body = await request.json();
    let { converts, displaced_supported, cities, churches } = body || {};

    const toNonNegativeInt = (v) => {
      const n = Number.parseInt(v, 10);
      return Number.isFinite(n) && n >= 0 ? n : 0;
    };

    converts = toNonNegativeInt(converts);
    displaced_supported = toNonNegativeInt(displaced_supported);
    cities = toNonNegativeInt(cities);
    churches = toNonNegativeInt(churches);

    const result = await sql`
      INSERT INTO metrics (converts, displaced_supported, cities, churches, updated_at)
      VALUES (${converts}, ${displaced_supported}, ${cities}, ${churches}, CURRENT_TIMESTAMP)
      RETURNING *
    `;

    return Response.json(result[0]);
  } catch (error) {
    console.error("Error updating metrics:", error);
    return Response.json(
      { error: "Failed to update metrics" },
      { status: 500 },
    );
  }
}
