import type { NextRequest } from "next/server";
import { handleContactSubmission } from "@/lib/contact-handler";

export const runtime = "nodejs";

export function POST(request: NextRequest) {
  return handleContactSubmission(request, "dental");
}
