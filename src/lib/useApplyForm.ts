"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface UseApplyFormOptions {
  category: "dental" | "therapy";
}

const ALLOWED_CV_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024;

export function useApplyForm({ category }: UseApplyFormOptions) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("startedAt", String(startedAtRef.current));

    // Honeypot: if filled, silently pretend success so bots don't learn.
    const honeypot = String(formData.get("company") || "");
    if (honeypot.trim().length > 0) {
      setStatus("success");
      return;
    }

    const newErrors: Record<string, string> = {};

    const fullName = String(formData.get("fullName") || "").trim();
    if (fullName.length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const email = String(formData.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phone = String(formData.get("phone") || "").trim();
    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    const country = String(formData.get("country") || "").trim();
    if (country.length < 2) {
      newErrors.country = "Please enter your country.";
    }

    const profession = String(formData.get("profession") || "").trim();
    if (!profession) {
      newErrors.profession = "Please select a profession.";
    }

    const experienceRaw = formData.get("experienceYears");
    const experienceNum = Number(experienceRaw);
    if (
      experienceRaw === null ||
      String(experienceRaw).trim() === "" ||
      Number.isNaN(experienceNum) ||
      experienceNum < 0 ||
      experienceNum > 60
    ) {
      newErrors.experienceYears = "Please enter a valid number of years (0-60).";
    }

    const location = String(formData.get("preferredLocation") || "").trim();
    if (location.length < 2) {
      newErrors.preferredLocation = "Please enter your preferred location.";
    }

    const cv = formData.get("cv");
    if (!(cv instanceof File) || cv.size === 0) {
      newErrors.cv = "Please attach your CV.";
    } else {
      const name = cv.name.toLowerCase();
      const validExt = ALLOWED_CV_EXTENSIONS.some((ext) => name.endsWith(ext));
      if (!validExt) {
        newErrors.cv = "CV must be a PDF, DOC, or DOCX file.";
      } else if (cv.size > MAX_CV_SIZE_BYTES) {
        newErrors.cv = "CV file must be smaller than 5MB.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("error");
      setServerMessage("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setServerMessage(null);

    try {
      const response = await fetch(`/api/apply/${category}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setServerMessage(data.message || "Something went wrong. Please try again.");
        if (data.field) {
          setErrors((prev) => ({ ...prev, [data.field]: data.message }));
        }
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please check your connection and try again.");
    }
  }

  return { status, errors, serverMessage, handleSubmit };
}
