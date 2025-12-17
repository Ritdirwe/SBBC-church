import sql from "@/app/api/utils/sql";
import { sendWelcomeEmail } from "@/app/api/utils/email";
import {
  isValidEmail,
  safeName,
  normalizePhone,
} from "@/app/api/utils/validators";

export async function POST(request) {
  try {
    const body = await request.json();
    const { full_name, email, phone } = body;

    const name = safeName(full_name || "");
    const mail = (email || "").trim();
    const tel = normalizePhone(phone || "");

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
      INSERT INTO discipleship_requests (full_name, email, phone)
      VALUES (${name}, ${mail}, ${tel})
    `;

    // Send welcome email from the pastor (non-blocking failure)
    try {
      await sendWelcomeEmail({
        to: mail,
        name,
        fromType: "pastor",
      });
    } catch (e) {
      console.error("Failed to send welcome email (discipleship):", e);
    }

    return Response.json({
      success: true,
      message: "Thank you for your interest in discipleship!",
    });
  } catch (error) {
    console.error("Error submitting discipleship request:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
