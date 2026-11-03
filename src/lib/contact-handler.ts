import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  checkHoneypotAndTiming,
  checkRateLimit,
  createInquiryRecord,
  saveInquiryRecord,
  validateInquiryFields,
  type Category,
} from "@/lib/inquiries";
import { sendInquiryNotification } from "@/lib/email";

const UNDELIVERED_MESSAGE =
  "We couldn't send your message. Please call 714-204-9779 or email info@omarodehcpa.com.";

export async function handleContactSubmission(request: NextRequest, category: Category) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  try {
    checkRateLimit(ip);

    const formData = await request.formData();
    checkHoneypotAndTiming(formData);

    const fields = validateInquiryFields(formData);
    const record = createInquiryRecord({ category, ...fields, ip });

    const [saved, emailed] = await Promise.all([
      saveInquiryRecord(record),
      sendInquiryNotification(record),
    ]);

    // Only report success if the inquiry actually reached someone.
    if (!saved && !emailed) {
      console.error(`${category} inquiry ${record.id} was neither saved nor emailed`);
      return NextResponse.json(
        { success: false, message: UNDELIVERED_MESSAGE },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true, id: record.id }, { status: 201 });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        { success: false, field: error.field, message: error.message },
        { status: 400 }
      );
    }
    console.error(`${category} contact submission failed`, error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
