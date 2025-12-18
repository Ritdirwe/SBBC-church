import sql from "../utils/sql.js";
import { sendWelcomeEmail } from "../utils/email.js";
import {
  isValidEmail,
  safeName,
  normalizePhone,
  safeLongText,
  trimToNull,
  clampText,
} from "../utils/validators.js";

export async function GET() {
  try {
    const rows = await sql`
      SELECT id, school_name, full_name, email, phone, qualifications, program, degree_type, qualifications_pdf_url, created_at
      FROM school_admissions
      ORDER BY created_at DESC
    `;
    return Response.json(rows);
  } catch (error) {
    console.error("Error fetching school admissions:", error);
    return Response.json(
      { error: "Failed to fetch admissions" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { school_name, full_name, email, phone, qualifications } = body;

    // New optional fields
    const rawProgram = clampText((body.program || "").trim(), 120);
    const rawDegreeType = clampText((body.degree_type || "").trim(), 80);
    const rawPdfUrl = clampText(
      (body.qualifications_pdf_url || "").trim(),
      2048,
    );

    const school = clampText((school_name || "").trim(), 120);
    const name = safeName(full_name || "");
    const mail = (email || "").trim();
    const tel = normalizePhone(phone || "");
    const quals = trimToNull(safeLongText(qualifications || ""));

    const program = trimToNull(rawProgram);
    const degreeType = trimToNull(rawDegreeType);
    const pdfUrl = trimToNull(rawPdfUrl);

    if (!school || !name || !mail || !tel) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }
    if (!isValidEmail(mail)) {
      return Response.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    await sql`
      INSERT INTO school_admissions (school_name, full_name, email, phone, qualifications, program, degree_type, qualifications_pdf_url)
      VALUES (${school}, ${name}, ${mail}, ${tel}, ${quals}, ${program}, ${degreeType}, ${pdfUrl})
    `;

    // Send welcome email from institution (non-blocking failure)
    try {
      await sendWelcomeEmail({
        to: mail,
        name,
        fromType: "institution",
      });
    } catch (e) {
      console.error("Failed to send welcome email (school-admission):", e);
    }

    return Response.json({
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.error("Error submitting school admission:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
