import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Dental Practice Accounting | Omar Odeh, CPA",
  description:
    "Get in touch with Omar Odeh, CPA about bookkeeping, budgeting, financial consulting, cash flow, tax preparation, or practice management for your dental practice.",
  alternates: {
    canonical: "/dental/contact",
  },
  robots: { index: true, follow: true },
};

export default function DentalContactPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s Talk About Your Practice
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Fill out the form below and we&apos;ll follow up with you shortly.
          </p>
        </div>

        <div className="mt-12">
          <ContactForm category="dental" practiceLabel="Practice Name" />
        </div>
      </div>
    </section>
  );
}
