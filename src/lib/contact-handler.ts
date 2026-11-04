import {
  ValidationError,
  checkHoneypotAndTiming,
  checkRateLimit,
  createInquiryRecord,
  validateInquiryFields,
  type Category,
} from "./inquiries";
import { sendInquiryNotification, type EmailConfig } from "./email";

const UNDELIVERED_MESSAGE =
  "We couldn't send your message. Please call 714-204-9779 or email info@omarodehcpa.com.";

export async function handleContactSubmission(
  request: Request,
  category: Category,
  config: EmailConfig
) {
  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  try {
    checkRateLimit(ip);

    const formData = await request.formData();
    checkHoneypotAndTiming(formData);

    const fields = validateInquiryFields(formData);
    const record = createInquiryRecord({ category, ...fields, ip });

    // There is no database, so an inquiry only reaches anyone by email.
    if (!(await sendInquiryNotification(record, config))) {
      console.error(`${category} inquiry ${record.id} could not be emailed`);
      return Response.json({ success: false, message: UNDELIVERED_MESSAGE }, { status: 503 });
    }

    return Response.json({ success: true, id: record.id }, { status: 201 });
  } catch (error) {
    if (error instanceof ValidationError) {
      return Response.json(
        { success: false, field: error.field, message: error.message },
        { status: 400 }
      );
    }
    console.error(`${category} contact submission failed`, error);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
