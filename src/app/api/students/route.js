import sql from "../utils/sql.js";

// GET /api/students?school=Lawson%20University
// Returns list of students, optionally filtered by school_name
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const school = url.searchParams.get("school");

    if (school) {
      const rows = await sql`
        SELECT * FROM students
        WHERE school_name = ${school}
        ORDER BY created_at DESC
      `;
      return Response.json(rows);
    }

    const rows = await sql`
      SELECT * FROM students
      ORDER BY created_at DESC
    `;
    return Response.json(rows);
  } catch (error) {
    console.error("Error fetching students:", error);
    return Response.json(
      { error: "Failed to fetch students" },
      { status: 500 },
    );
  }
}

// POST /api/students
// Body: { school_name, full_name, email, phone?, program?, parent_name?, parent_email?, parent_phone?, parent2_name?, parent2_email?, parent2_phone?, discipline?, admission_year?, graduation_year?, student_code?, status?, extra? }
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      school_name,
      full_name,
      email,
      phone = null,
      program = null,
      // Parent/Guardian 1
      parent_name = null,
      parent_email = null,
      parent_phone = null,
      // Parent/Guardian 2 (new)
      parent2_name = null,
      parent2_email = null,
      parent2_phone = null,
      discipline = null,
      admission_year = null,
      graduation_year = null,
      student_code = null,
      status = "enrolled",
      extra = {},
    } = body || {};

    if (!school_name || !full_name || !email) {
      return Response.json(
        { error: "school_name, full_name and email are required" },
        { status: 400 },
      );
    }

    // Require at least one parent's info (name) before proceeding
    const hasParent1 = Boolean(parent_name && String(parent_name).trim());
    const hasParent2 = Boolean(parent2_name && String(parent2_name).trim());
    if (!hasParent1 && !hasParent2) {
      return Response.json(
        { error: "At least one parent/guardian is required (provide a name)." },
        { status: 400 },
      );
    }

    const rows = await sql`
      INSERT INTO students (
        school_name, full_name, email, phone, program,
        parent_name, parent_email, parent_phone,
        parent2_name, parent2_email, parent2_phone,
        discipline,
        admission_year, graduation_year, student_code, status, extra, created_at, updated_at
      ) VALUES (
        ${school_name}, ${full_name}, ${email}, ${phone}, ${program},
        ${parent_name}, ${parent_email}, ${parent_phone},
        ${parent2_name}, ${parent2_email}, ${parent2_phone},
        ${discipline},
        ${admission_year}, ${graduation_year}, ${student_code}, ${status}, ${JSON.stringify(extra)}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
      )
      RETURNING *
    `;

    return Response.json(rows[0], { status: 201 });
  } catch (error) {
    console.error("Error creating student:", error);
    return Response.json(
      { error: "Failed to create student" },
      { status: 500 },
    );
  }
}
