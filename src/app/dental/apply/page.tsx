import type { Metadata } from "next";
import DentalApplyForm from "@/components/dental/ApplyForm";

export const metadata: Metadata = {
  title: "Apply | Odeh Dental Careers",
  description:
    "Submit your application to Odeh Dental. Tell us about your experience as a dentist, dental assistant, hygienist, or technician.",
  alternates: {
    canonical: "/dental/apply",
  },
  robots: { index: true, follow: true },
};

export default function DentalApplyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Apply Now
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Submit Your Dental Application
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Fill out the form below and our team will review your
            information for relevant opportunities.
          </p>
        </div>

        <div className="mt-12">
          <DentalApplyForm />
        </div>
      </div>
    </section>
  );
}
