import type { Metadata } from "next";
import TherapyApplyForm from "@/components/therapy/ApplyForm";

export const metadata: Metadata = {
  title: "Apply | Odeh Therapy Careers",
  description:
    "Submit your application to Odeh Therapy. Tell us about your experience as a physical, occupational, or speech therapist.",
  alternates: {
    canonical: "/therapy/apply",
  },
  robots: { index: true, follow: true },
};

export default function TherapyApplyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-800">
            Apply Now
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-therapy-serif)] text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Submit Your Therapy Application
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-600">
            Fill out the form below and our team will review your
            information for relevant opportunities.
          </p>
        </div>

        <div className="mt-12">
          <TherapyApplyForm />
        </div>
      </div>
    </section>
  );
}
