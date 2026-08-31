"use client";

import { useId } from "react";
import { useApplyForm } from "@/lib/useApplyForm";
import { AlertCircleIcon, CheckCircleIcon, UploadIcon } from "@/components/icons";

const PROFESSIONS = [
  "Physical Therapist",
  "Occupational Therapist",
  "Speech Therapist",
  "Other",
];

const inputClasses =
  "mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-700/20";

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
    <label htmlFor={htmlFor} className="text-sm font-medium text-stone-800">
      {children}
      {required && <span className="ml-0.5 text-orange-800">*</span>}
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

export default function TherapyApplyForm() {
  const { status, errors, serverMessage, handleSubmit } = useApplyForm({
    category: "therapy",
  });
  const idPrefix = useId();

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-orange-200 bg-orange-50 p-10 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-800">
          <CheckCircleIcon className="h-7 w-7" />
        </span>
        <h2 className="mt-6 font-[family-name:var(--font-therapy-serif)] text-2xl font-semibold text-stone-900">
          Application Received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-600">
          Thank you for submitting your information. Our team will review
          your application and contact you if there is a suitable
          opportunity.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" encType="multipart/form-data">
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
        <div className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
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

        <div>
          <FieldLabel htmlFor={`${idPrefix}-country`} required>
            Country
          </FieldLabel>
          <input
            id={`${idPrefix}-country`}
            name="country"
            type="text"
            required
            autoComplete="country-name"
            className={inputClasses}
            aria-invalid={Boolean(errors.country)}
          />
          <FieldError message={errors.country} />
        </div>

        <div>
          <FieldLabel htmlFor={`${idPrefix}-profession`} required>
            Profession / Specialization
          </FieldLabel>
          <select
            id={`${idPrefix}-profession`}
            name="profession"
            required
            defaultValue=""
            className={inputClasses}
            aria-invalid={Boolean(errors.profession)}
          >
            <option value="" disabled>
              Select your specialization
            </option>
            {PROFESSIONS.map((profession) => (
              <option key={profession} value={profession}>
                {profession}
              </option>
            ))}
          </select>
          <FieldError message={errors.profession} />
        </div>

        <div>
          <FieldLabel htmlFor={`${idPrefix}-experienceYears`} required>
            Years of Experience
          </FieldLabel>
          <input
            id={`${idPrefix}-experienceYears`}
            name="experienceYears"
            type="number"
            min={0}
            max={60}
            required
            className={inputClasses}
            aria-invalid={Boolean(errors.experienceYears)}
          />
          <FieldError message={errors.experienceYears} />
        </div>

        <div className="sm:col-span-2">
          <FieldLabel htmlFor={`${idPrefix}-preferredLocation`} required>
            Preferred Location
          </FieldLabel>
          <input
            id={`${idPrefix}-preferredLocation`}
            name="preferredLocation"
            type="text"
            required
            placeholder="City, state, or region"
            className={inputClasses}
            aria-invalid={Boolean(errors.preferredLocation)}
          />
          <FieldError message={errors.preferredLocation} />
        </div>

        <div className="sm:col-span-2">
          <FieldLabel htmlFor={`${idPrefix}-message`}>
            Short Message
          </FieldLabel>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="Anything you'd like our team to know"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <FieldLabel htmlFor={`${idPrefix}-cv`} required>
            CV Upload
          </FieldLabel>
          <div className="mt-2 flex items-center gap-3 rounded-2xl border border-dashed border-stone-300 bg-[#fdf6ec] px-4 py-4">
            <UploadIcon className="h-5 w-5 flex-none text-stone-400" />
            <div className="flex-1">
              <input
                id={`${idPrefix}-cv`}
                name="cv"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                className="w-full text-sm text-stone-600 file:mr-4 file:rounded-full file:border-0 file:bg-orange-800 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-orange-900"
                aria-invalid={Boolean(errors.cv)}
              />
              <p className="mt-1 text-xs text-stone-500">
                PDF, DOC, or DOCX. Max size 5MB.
              </p>
            </div>
          </div>
          <FieldError message={errors.cv} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-orange-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
