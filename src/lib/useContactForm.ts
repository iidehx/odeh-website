"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface UseContactFormOptions {
  category: "dental" | "therapy" | "real-estate";
}

export function useContactForm({ category }: UseContactFormOptions) {
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

    const service = String(formData.get("service") || "").trim();
    if (!service) {
      newErrors.service = "Please select a service.";
    }

    const message = String(formData.get("message") || "").trim();
    if (message.length < 10) {
      newErrors.message = "Please tell us a bit about what you need (at least 10 characters).";
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
      const response = await fetch(`/api/contact/${category}`, {
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
