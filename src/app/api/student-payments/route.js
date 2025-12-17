import sql from "@/app/api/utils/sql";
import { sendPaymentReceiptEmail } from "@/app/api/utils/email";

// GET /api/student-payments?student_id=123 or ?school=Lawson%20University
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const studentId = url.searchParams.get("student_id");
    const school = url.searchParams.get("school");

    if (studentId) {
      const rows = await sql`
        SELECT sp.*
        FROM student_payments sp
        WHERE sp.student_id = ${Number(studentId)}
        ORDER BY sp.payment_date DESC, sp.created_at DESC
      `;
      return Response.json(rows);
    }

    if (school) {
      const rows = await sql`
        SELECT sp.*
        FROM student_payments sp
        JOIN students s ON s.id = sp.student_id
        WHERE s.school_name = ${school}
        ORDER BY sp.payment_date DESC, sp.created_at DESC
      `;
      return Response.json(rows);
    }

    const rows = await sql`
      SELECT * FROM student_payments
      ORDER BY payment_date DESC, created_at DESC
    `;
    return Response.json(rows);
  } catch (error) {
    console.error("Error fetching student payments:", error);
    return Response.json(
      { error: "Failed to fetch student payments" },
      { status: 500 },
    );
  }
}

// POST /api/student-payments
// Body: { student_id, amount, currency?, method?, reference?, confirmed?, receipt_url?, term?, notes?, payment_date? }
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      student_id,
      amount,
      currency = "NGN",
      method = null,
      reference = null,
      confirmed = false,
      receipt_url = null,
      term = null,
      notes = null,
      payment_date = null,
    } = body || {};

    if (!student_id || !amount) {
      return Response.json(
        { error: "student_id and amount are required" },
        { status: 400 },
      );
    }

    const rows = await sql`
      INSERT INTO student_payments (
        student_id, term, amount, currency, method, reference, confirmed, receipt_url, payment_date, notes, created_at
      ) VALUES (
        ${Number(student_id)}, ${term}, ${amount}, ${currency}, ${method}, ${reference}, ${confirmed}, ${receipt_url}, ${payment_date}, ${notes}, CURRENT_TIMESTAMP
      )
      RETURNING *
    `;

    const payment = rows[0];

    // Attempt to send receipt email on confirmed payments (non-blocking for API response)
    if (payment?.confirmed) {
      try {
        const studentRows = await sql`
          SELECT * FROM students WHERE id = ${Number(student_id)} LIMIT 1
        `;
        const student = studentRows?.[0];
        if (student) {
          const recipient =
            student.email || student.parent_email || student.parent2_email;
          if (recipient) {
            await sendPaymentReceiptEmail({ to: recipient, student, payment });
          } else {
            console.warn("No recipient email for student id", student_id);
          }
        }
      } catch (mailErr) {
        console.error("Failed to send receipt email:", mailErr);
        // do not fail the request if email fails
      }
    }

    return Response.json(payment, { status: 201 });
  } catch (error) {
    console.error("Error creating student payment:", error);
    return Response.json(
      { error: "Failed to create student payment" },
      { status: 500 },
    );
  }
}
