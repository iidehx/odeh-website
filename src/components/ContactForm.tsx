"use client";

import { useId } from "react";
import { useContactForm } from "@/lib/useContactForm";
import { AlertCircleIcon, CheckCircleIcon } from "@/components/icons";

const SERVICES = [
  "Bookkeeping",
  "Budgeting",
  "Financial Consulting",
  "Cash Flow Management",
  "Tax Preparation",
  "Practice Management",
  "Other",
];

const inputClasses =
  "mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20";

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-slate-800">
      {children}
      {required && <span className="ml-0.5 text-amber-700">*</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
      <AlertCircleIcon className="h-3.5 w-3.5 flex-none" />
      {message}
    </p>
  );
}

export default function ContactForm({
  category,
  practiceLabel,
}: {
  category: "dental" | "therapy";
  practiceLabel: string;
}) {
  const { status, errors, serverMessage, handleSubmit } = useContactForm({ category });
  const idPrefix = useId();

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-700">
          <CheckCircleIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-6 text-2xl font-semibold text-slate-900">
          Message Received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          Thank you for reaching out. We&apos;ll review your message and follow
          up with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot field — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-company`}>Company</label>
        <input
          id={`${idPrefix}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && serverMessage && (
        <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircleIcon className="mt-0.5 h-4 w-4 flex-none" />
          <span>{serverMessage}</span>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor={`${idPrefix}-fullName`} required>
            Full Name
          </FieldLabel>
          <input
            id={`${idPrefix}-fullName`}
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            aria-invalid={Boolean(errors.fullName)}
          />
          <FieldError message={errors.fullName} />
        </div>

        <div>
          <FieldLabel htmlFor={`${idPrefix}-practiceName`}>
            {practiceLabel}
          </FieldLabel>
          <input
            id={`${idPrefix}-practiceName`}
            name="practiceName"
            type="text"
            autoComplete="organization"
            className={inputClasses}
          />
        </div>

        <div>
          <FieldLabel htmlFor={`${idPrefix}-email`} required>
            Email
          </FieldLabel>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <FieldLabel htmlFor={`${idPrefix}-phone`} required>
            Phone Number
          </FieldLabel>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClasses}
            aria-invalid={Boolean(errors.phone)}
          />
          <FieldError message={errors.phone} />
        </div>

        <div className="sm:col-span-2">
          <FieldLabel htmlFor={`${idPrefix}-service`} required>
            Service Needed
          </FieldLabel>
          <select
            id={`${idPrefix}-service`}
            name="service"
            required
            defaultValue=""
            className={inputClasses}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <FieldError message={errors.service} />
        </div>

        <div className="sm:col-span-2">
          <FieldLabel htmlFor={`${idPrefix}-message`} required>
            Message
          </FieldLabel>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={5}
            required
            maxLength={2000}
            placeholder="Tell us a bit about your practice and what you need help with"
            className={inputClasses}
            aria-invalid={Boolean(errors.message)}
          />
          <FieldError message={errors.message} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-amber-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
