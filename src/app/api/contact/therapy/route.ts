import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  checkHoneypotAndTiming,
  checkRateLimit,
  saveInquiryRecord,
  validateInquiryFields,
} from "@/lib/inquiries";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  try {
    checkRateLimit(ip);

    const formData = await request.formData();
    checkHoneypotAndTiming(formData);

    const fields = validateInquiryFields(formData);

    const record = await saveInquiryRecord({ category: "therapy", ...fields, ip });

    return NextResponse.json({ success: true, id: record.id }, { status: 201 });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        { success: false, field: error.field, message: error.message },
        { status: 400 }
      );
    }
    console.error("Therapy contact submission failed", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
