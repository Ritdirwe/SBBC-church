// Simple email helper using Resend's REST API.
// You must set the following secrets in Project Settings > Secrets (backend):
// - RESEND_API_KEY: Your Resend API key
// - EMAIL_FROM_PASTOR: The pastor's from header, e.g. "Dr. Pastor Lawson Ngoa, The General Overseer SBBC Worldwide <pastor@sbbcworldwide.org>"
// - EMAIL_FROM_INSTITUTION: The institution's from header, e.g. "SBBC Educational Institution <admissions@sbbcworldwide.org>"
// Optional:
// - SBBC_WHATSAPP_NUMBER: A WhatsApp number like +2347064200926
// - SBBC_WHATSAPP_DEFAULT_TEXT: Default prefilled message for WhatsApp link

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const LOGO_URL =
  "https://raw.createusercontent.com/160d9076-4e45-4665-8dc3-a03b2c64cb23/"; // SBBC logo used on the site

const DEFAULT_WHATSAPP_NUMBER = "+2347064200926";

function buildWhatsAppLink() {
  const num = process.env.SBBC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
  const text =
    process.env.SBBC_WHATSAPP_DEFAULT_TEXT ||
    "Hello SBBC Worldwide team, I would love to speak with someone.";

  // Strip non-digits for wa.me format
  const digits = (num || "").replace(/[^0-9]/g, "");
  if (!digits) return null;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${digits}?text=${encoded}`;
}

function welcomeEmailHtml(name) {
  const whatsappLink = buildWhatsAppLink();
  const safeName = name ? name.split(" ")[0] : "Friend";

  return `
  <div style="background:#f7f7f7;padding:24px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #eee;">
      <tr>
        <td style="padding:24px 24px 0 24px;text-align:center;">
          <img src="${LOGO_URL}" alt="SBBC Worldwide" width="96" height="96" style="border-radius:50%;box-shadow:0 6px 20px rgba(0,0,0,0.08);object-fit:cover;" />
        </td>
      </tr>
      <tr>
        <td style="padding:8px 24px 0 24px;text-align:center;">
          <h1 style="margin:0;font-size:22px;line-height:28px;color:#111">Welcome to SBBC Worldwide</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 24px 0 24px;text-align:center;">
          <p style="margin:0;font-size:16px;line-height:24px;color:#444;">Hi ${safeName}, we're so glad you reached out! You're warmly, kindly, and happily welcome. We're honored to have you with us.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px 0 24px;text-align:center;">
          <p style="margin:0;font-size:15px;line-height:24px;color:#444;">Our heart is to disciple the whole world with the message of holiness with prosperity. If you have any questions or need support, we're here for you.</p>
        </td>
      </tr>
      ${
        whatsappLink
          ? `
      <tr>
        <td style="padding:20px 24px 0 24px;text-align:center;">
          <a href="${whatsappLink}" style="display:inline-block;background:linear-gradient(90deg,#F4D03F,#C29C1A);color:#111;text-decoration:none;padding:12px 18px;border-radius:999px;font-weight:600;box-shadow:0 4px 14px rgba(0,0,0,0.12)">Talk to us on WhatsApp</a>
        </td>
      </tr>
      `
          : ""
      }
      <tr>
        <td style="padding:24px;text-align:center;color:#777;font-size:12px;">
          <p style="margin:0 0 6px 0;">With love,</p>
          <p style="margin:0;font-weight:600;color:#111">SBBC Worldwide</p>
        </td>
      </tr>
    </table>
    <div style="max-width:640px;margin:12px auto 0 auto;text-align:center;color:#999;font-size:11px;line-height:16px;">
      <p style="margin:0 0 6px 0;">You're receiving this because you recently contacted SBBC Worldwide.</p>
      <p style="margin:0;">© ${new Date().getFullYear()} SBBC Worldwide</p>
    </div>
  </div>
  `;
}

export async function sendWelcomeEmail({ to, name, fromType = "pastor" }) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    let from;

    // Choose the appropriate from address based on form type
    if (fromType === "institution") {
      from = process.env.EMAIL_FROM_INSTITUTION;
    } else {
      from = process.env.EMAIL_FROM_PASTOR;
    }

    if (!apiKey || !from) {
      console.warn(
        "Email not sent: RESEND_API_KEY or appropriate EMAIL_FROM is not set.",
      );
      return { ok: false, error: "Missing email configuration" };
    }

    const subject = "Welcome to SBBC Worldwide";
    const html = welcomeEmailHtml(name);

    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Resend error [${res.status}] ${res.statusText} ${text}`);
    }

    const data = await res.json().catch(() => null);
    return { ok: true, data };
  } catch (err) {
    console.error("sendWelcomeEmail error:", err);
    return { ok: false, error: String(err?.message || err) };
  }
}

// --- Payment Receipt Email ---
function formatCurrency(amount, currency = "NGN") {
  const value = typeof amount === "string" ? Number(amount) : amount;
  if (!Number.isFinite(value)) return `${currency} ${amount}`;
  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
    }).format(value);
  } catch {
    return `${currency} ${value.toFixed(2)}`;
  }
}

function paymentReceiptHtml({ student, payment }) {
  const paidAt = payment.payment_date
    ? new Date(payment.payment_date)
    : new Date();
  const dateStr = paidAt.toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const statusBadge = payment.confirmed
    ? '<span style="display:inline-block;padding:6px 10px;border-radius:999px;background:#E8F5E9;color:#1B5E20;font-weight:600;font-size:12px;">CONFIRMED</span>'
    : '<span style="display:inline-block;padding:6px 10px;border-radius:999px;background:#FFF3E0;color:#E65100;font-weight:600;font-size:12px;">PENDING</span>';

  return `
  <div style="background:#f6f7f9;padding:24px 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #eaeaea;">
      <tr>
        <td style="padding:24px 24px 0 24px;text-align:center;background:linear-gradient(180deg,rgba(244,208,63,0.22),rgba(255,255,255,0));">
          <img src="${LOGO_URL}" alt="SBBC" width="72" height="72" style="border-radius:50%;box-shadow:0 6px 18px rgba(0,0,0,0.10);object-fit:cover;" />
          <h1 style="margin:12px 0 6px 0;font-size:20px;line-height:26px;color:#111">Payment Receipt</h1>
          <p style="margin:0;font-size:13px;color:#555;">${student.school_name || "SBBC Institution"}</p>
          <div style="margin-top:10px;">${statusBadge}</div>
        </td>
      </tr>

      <tr>
        <td style="padding:16px 24px 0 24px;">
          <table width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;color:#555;font-size:13px;">Receipt No.</td>
              <td style="padding:10px 0;color:#111;font-weight:600;font-size:13px;text-align:right;">#${payment.id || "temp"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#555;font-size:13px;">Date</td>
              <td style="padding:10px 0;color:#111;font-weight:600;font-size:13px;text-align:right;">${dateStr}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#555;font-size:13px;">Student</td>
              <td style="padding:10px 0;color:#111;font-weight:600;font-size:13px;text-align:right;">${student.full_name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#555;font-size:13px;">Program</td>
              <td style="padding:10px 0;color:#111;font-weight:600;font-size:13px;text-align:right;">${student.program || "-"}</td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:8px 24px 0 24px;">
          <div style="height:1px;background:#eee;"></div>
        </td>
      </tr>

      <tr>
        <td style="padding:8px 24px 0 24px;">
          <table width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;color:#555;font-size:13px;">Term</td>
              <td style="padding:10px 0;color:#111;font-weight:600;font-size:13px;text-align:right;">${payment.term || "-"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#555;font-size:13px;">Method</td>
              <td style="padding:10px 0;color:#111;font-weight:600;font-size:13px;text-align:right;">${payment.method || "-"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#555;font-size:13px;">Reference</td>
              <td style="padding:10px 0;color:#111;font-weight:600;font-size:13px;text-align:right;">${payment.reference || "-"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#555;font-size:13px;">Amount</td>
              <td style="padding:10px 0;color:#111;font-weight:800;font-size:15px;text-align:right;">${formatCurrency(payment.amount, payment.currency)}</td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding:16px 24px 0 24px;">
          <div style="background:#fafafa;border:1px solid #eee;border-radius:12px;padding:14px;">
            <p style="margin:0 0 6px 0;color:#333;font-weight:600;font-size:13px;">Notes</p>
            <p style="margin:0;color:#555;font-size:13px;">${payment.notes || "Thank you for your payment. This email serves as your official receipt."}</p>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:24px;text-align:center;color:#888;font-size:12px;">
          <p style="margin:0 0 6px 0;">If you have questions or need changes to this receipt, reply to this email.</p>
          <p style="margin:0;">© ${new Date().getFullYear()} SBBC Worldwide</p>
        </td>
      </tr>
    </table>
  </div>`;
}

export async function sendPaymentReceiptEmail({ to, student, payment }) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.EMAIL_FROM_INSTITUTION;

    if (!apiKey || !from) {
      console.warn(
        "Receipt email not sent: missing RESEND_API_KEY or EMAIL_FROM_INSTITUTION",
      );
      return { ok: false, error: "Missing email configuration" };
    }

    const subject = `Receipt • ${student.school_name || "SBBC Institution"} • ${formatCurrency(payment.amount, payment.currency)}`;
    const html = paymentReceiptHtml({ student, payment });

    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Resend error [${res.status}] ${res.statusText} ${text}`);
    }

    const data = await res.json().catch(() => null);
    return { ok: true, data };
  } catch (err) {
    console.error("sendPaymentReceiptEmail error:", err);
    return { ok: false, error: String(err?.message || err) };
  }
}
