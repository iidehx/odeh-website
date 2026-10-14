import type { InquiryRecord } from "./inquiries";

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "Odeh90@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Omar Odeh CPA Website <onboarding@resend.dev>";

const CATEGORY_LABELS: Record<InquiryRecord["category"], string> = {
  dental: "Dental Clinic",
  therapy: "Therapy Practice",
  "real-estate": "Real Estate",
};

export async function sendInquiryNotification(record: InquiryRecord) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY is not set — skipping email notification. The inquiry was still saved."
    );
    return;
  }

  const categoryLabel = CATEGORY_LABELS[record.category] ?? record.category;

  const html = `
    <h2>New ${categoryLabel} inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(record.fullName)}</p>
    ${record.practiceName ? `<p><strong>Business/Practice Name:</strong> ${escapeHtml(record.practiceName)}</p>` : ""}
    <p><strong>Email:</strong> ${escapeHtml(record.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(record.phone)}</p>
    <p><strong>Service Needed:</strong> ${escapeHtml(record.service)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(record.message).replace(/\n/g, "<br/>")}</p>
    <hr/>
    <p style="color:#888;font-size:12px;">Submitted ${record.submittedAt}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFY_EMAIL],
        reply_to: record.email,
        subject: `New ${categoryLabel} inquiry from ${record.fullName}`,
        html,
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("Failed to send inquiry notification email", response.status, body);
    }
  } catch (error) {
    console.error("Failed to send inquiry notification email", error);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
