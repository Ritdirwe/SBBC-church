import sql from "@/app/api/utils/sql";
import { sendWelcomeEmail } from "@/app/api/utils/email";
import {
  isValidEmail,
  safeName,
  normalizePhone,
  safeLongText,
  trimToNull,
} from "@/app/api/utils/validators";

// NEW: List counseling bookings for the dashboard analytics/submissions
export async function GET(request) {
  try {
    // Optional: allow simple filtering by email via query param ?email=
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (email) {
      const rows = await sql`
        SELECT * FROM counseling_bookings
        WHERE email = ${email}
        ORDER BY created_at DESC
      `;
      return Response.json(rows);
    }

    const rows = await sql`
      SELECT * FROM counseling_bookings
      ORDER BY created_at DESC
    `;
    return Response.json(rows);
  } catch (error) {
    console.error("Error fetching counseling bookings:", error);
    return Response.json(
      { error: "Failed to fetch counseling bookings" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, preferred_date, message } = body;

    const name = safeName(full_name || "");
    const mail = (email || "").trim();
    const tel = normalizePhone(phone || "");
    const pref = trimToNull(preferred_date || "");
    const msg = trimToNull(safeLongText(message || ""));

    if (!name || !mail || !tel) {
      return Response.json(
        { error: "Name, email, and phone are required" },
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
      INSERT INTO counseling_bookings (full_name, email, phone, preferred_date, message)
      VALUES (${name}, ${mail}, ${tel}, ${pref}, ${msg})
    `;

    // Send welcome email from the pastor (non-blocking failure)
    try {
      await sendWelcomeEmail({
        to: mail,
        name,
        fromType: "pastor",
      });
    } catch (e) {
      console.error("Failed to send welcome email (counseling-booking):", e);
    }

    return Response.json({
      success: true,
      message: "Counseling booking submitted successfully!",
    });
  } catch (error) {
    console.error("Error submitting counseling booking:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
