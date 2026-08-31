import { NextRequest, NextResponse } from "next/server";
import {
  ValidationError,
  checkHoneypotAndTiming,
  checkRateLimit,
  saveApplicationRecord,
  validateAndStoreCv,
  validateCommonFields,
} from "@/lib/applications";

export const runtime = "nodejs";

const THERAPY_PROFESSIONS = new Set([
  "Physical Therapist",
  "Occupational Therapist",
  "Speech Therapist",
  "Other",
]);

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  try {
    checkRateLimit(ip);

    const formData = await request.formData();
    checkHoneypotAndTiming(formData);

    const fields = validateCommonFields(formData);
    if (!THERAPY_PROFESSIONS.has(fields.profession)) {
      throw new ValidationError("profession", "Please select a valid profession.");
    }

    const { cvFileName, cvStoredPath } = await validateAndStoreCv(formData, "therapy");

    const record = await saveApplicationRecord({
      category: "therapy",
      ...fields,
      cvFileName,
      cvStoredPath,
      ip,
    });

    return NextResponse.json({ success: true, id: record.id }, { status: 201 });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        { success: false, field: error.field, message: error.message },
        { status: 400 }
      );
    }
    console.error("Therapy application submission failed", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
