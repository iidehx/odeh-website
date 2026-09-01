import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export type Category = "dental" | "therapy";

export interface InquiryRecord {
  id: string;
  category: Category;
  fullName: string;
  practiceName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
  ip: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "inquiries.json");

export class ValidationError extends Error {
  field: string;
  constructor(field: string, message: string) {
    super(message);
    this.field = field;
  }
}

function isNonEmptyString(v: FormDataEntryValue | null): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

const SERVICES = new Set([
  "Bookkeeping",
  "Budgeting",
  "Financial Consulting",
  "Cash Flow Management",
  "Tax Preparation",
  "Practice Management",
  "Other",
]);

export function validateInquiryFields(formData: FormData) {
  const fullName = formData.get("fullName");
  const practiceName = formData.get("practiceName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  if (!isNonEmptyString(fullName) || fullName.trim().length < 2) {
    throw new ValidationError("fullName", "Please enter your full name.");
  }
  if (!isNonEmptyString(email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new ValidationError("email", "Please enter a valid email address.");
  }
  if (!isNonEmptyString(phone) || !/^[0-9+\-\s()]{7,20}$/.test(phone)) {
    throw new ValidationError("phone", "Please enter a valid phone number.");
  }
  if (!isNonEmptyString(service) || !SERVICES.has(service.toString())) {
    throw new ValidationError("service", "Please select a service.");
  }
  if (!isNonEmptyString(message) || message.trim().length < 10) {
    throw new ValidationError(
      "message",
      "Please tell us a bit about what you need (at least 10 characters)."
    );
  }

  return {
    fullName: fullName.trim().slice(0, 200),
    practiceName:
      typeof practiceName === "string" ? practiceName.trim().slice(0, 200) : "",
    email: email.trim().slice(0, 200),
    phone: phone.trim().slice(0, 30),
    service: service.toString().trim().slice(0, 100),
    message: message.trim().slice(0, 2000),
  };
}

export function checkHoneypotAndTiming(formData: FormData) {
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    throw new ValidationError("company", "Spam detected.");
  }
  const startedAt = Number(formData.get("startedAt"));
  if (!startedAt || Number.isNaN(startedAt)) {
    return;
  }
  const elapsed = Date.now() - startedAt;
  if (elapsed >= 0 && elapsed < 2000) {
    throw new ValidationError("form", "Please review your message and try again.");
  }
}

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;
const rateLimitStore = new Map<string, number[]>();

export function checkRateLimit(ip: string) {
  const now = Date.now();
  const timestamps = (rateLimitStore.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    throw new ValidationError("form", "Too many submissions. Please try again later.");
  }
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
}

export async function saveInquiryRecord(
  record: Omit<InquiryRecord, "id" | "submittedAt">
) {
  await fs.mkdir(DATA_DIR, { recursive: true });

  let existing: InquiryRecord[] = [];
  try {
    const raw = await fs.readFile(DB_FILE, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  const full: InquiryRecord = {
    ...record,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };

  existing.push(full);
  await fs.writeFile(DB_FILE, JSON.stringify(existing, null, 2), "utf-8");

  return full;
}
