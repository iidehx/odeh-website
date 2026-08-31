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

const DENTAL_PROFESSIONS = new Set([
  "Dentist",
  "Dental Assistant",
  "Dental Hygienist",
  "Dental Technician",
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
    if (!DENTAL_PROFESSIONS.has(fields.profession)) {
      throw new ValidationError("profession", "Please select a valid profession.");
    }

    const { cvFileName, cvStoredPath } = await validateAndStoreCv(formData, "dental");

    const record = await saveApplicationRecord({
      category: "dental",
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
    console.error("Dental application submission failed", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
