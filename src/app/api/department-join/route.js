import sql from "../utils/sql.js";
import { sendWelcomeEmail } from "../utils/email.js";
// ADD: basic input validators/sanitizers
import {
  isValidEmail,
  safeName,
  normalizePhone,
  safeDepartment,
  trimToNull,
} from "../utils/validators.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, department } = body || {};

    // sanitize inputs
    const name = safeName(full_name || "");
    const mail = (email || "").trim();
    const tel = normalizePhone(phone || "");
    const dept = safeDepartment(department || "");

    if (!name || !mail || !dept) {
      return Response.json(
        { error: "Name, email, and department are required" },
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
      INSERT INTO department_members (full_name, email, phone, department)
      VALUES (${name}, ${mail}, ${trimToNull(tel)}, ${dept})
    `;

    // Send welcome email from the pastor (non-blocking failure)
    try {
      await sendWelcomeEmail({
        to: mail,
        name,
        fromType: "pastor",
      });
    } catch (e) {
      console.error("Failed to send welcome email (department-join):", e);
    }

    return Response.json({
      success: true,
      message: "Successfully joined the department!",
    });
  } catch (error) {
    console.error("Error joining department:", error);
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
