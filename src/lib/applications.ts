import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export type Category = "dental" | "therapy";

export interface ApplicationRecord {
  id: string;
  category: Category;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  profession: string;
  experienceYears: number;
  preferredLocation: string;
  message: string;
  cvFileName: string;
  cvStoredPath: string;
  submittedAt: string;
  ip: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const UPLOADS_DIR = path.join(DATA_DIR, "uploads");
const DB_FILE = path.join(DATA_DIR, "applications.json");

const ALLOWED_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);
const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

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

export function validateCommonFields(formData: FormData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const country = formData.get("country");
  const profession = formData.get("profession");
  const experience = formData.get("experienceYears");
  const location = formData.get("preferredLocation");
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
  if (!isNonEmptyString(country) || country.trim().length < 2) {
    throw new ValidationError("country", "Please enter your country.");
  }
  if (!isNonEmptyString(profession)) {
    throw new ValidationError("profession", "Please select a profession.");
  }
  const experienceYears = Number(experience);
  if (
    !isNonEmptyString(experience) ||
    Number.isNaN(experienceYears) ||
    experienceYears < 0 ||
    experienceYears > 60
  ) {
    throw new ValidationError("experienceYears", "Please enter a valid number of years.");
  }
  if (!isNonEmptyString(location) || location.trim().length < 2) {
    throw new ValidationError("preferredLocation", "Please enter your preferred location.");
  }
  const messageText = typeof message === "string" ? message.trim().slice(0, 1000) : "";

  return {
    fullName: fullName.trim().slice(0, 200),
    email: email.trim().slice(0, 200),
    phone: phone.trim().slice(0, 30),
    country: country.trim().slice(0, 100),
    profession: profession.toString().trim().slice(0, 100),
    experienceYears,
    preferredLocation: location.trim().slice(0, 200),
    message: messageText,
  };
}

export async function validateAndStoreCv(formData: FormData, category: Category) {
  const file = formData.get("cv");
  if (!(file instanceof File) || file.size === 0) {
    throw new ValidationError("cv", "Please attach your CV.");
  }
  if (file.size > MAX_FILE_SIZE_BYTES) {
    throw new ValidationError("cv", "CV file must be smaller than 5MB.");
  }
  const originalName = file.name || "cv";
  const ext = path.extname(originalName).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    throw new ValidationError("cv", "CV must be a PDF, DOC, or DOCX file.");
  }
  if (file.type && !ALLOWED_MIME_TYPES.has(file.type)) {
    throw new ValidationError("cv", "CV must be a PDF, DOC, or DOCX file.");
  }

  const categoryDir = path.join(UPLOADS_DIR, category);
  await fs.mkdir(categoryDir, { recursive: true });

  const storedName = `${crypto.randomUUID()}${ext}`;
  const storedPath = path.join(categoryDir, storedName);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(storedPath, buffer);

  return {
    cvFileName: originalName.slice(0, 200),
    cvStoredPath: `uploads/${category}/${storedName}`,
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
    throw new ValidationError("form", "Please review your application and try again.");
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

export async function saveApplicationRecord(
  record: Omit<ApplicationRecord, "id" | "submittedAt">
) {
  await fs.mkdir(DATA_DIR, { recursive: true });

  let existing: ApplicationRecord[] = [];
  try {
    const raw = await fs.readFile(DB_FILE, "utf-8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  const full: ApplicationRecord = {
    ...record,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };

  existing.push(full);
  await fs.writeFile(DB_FILE, JSON.stringify(existing, null, 2), "utf-8");

  return full;
}
