import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Odeh Therapy",
  description: "Terms of use for the Odeh Therapy recruitment platform.",
  alternates: { canonical: "/therapy/terms" },
  robots: { index: true, follow: true },
};

export default function TherapyTermsPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-[family-name:var(--font-therapy-serif)] text-3xl font-semibold tracking-tight text-stone-900">
          Terms
        </h1>
        <p className="mt-2 text-sm text-stone-500">Odeh Therapy</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-stone-600">
          <p>
            By using this website and submitting an application, you agree
            to the following terms.
          </p>
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              No Guarantee of Placement
            </h2>
            <p className="mt-2">
              Submitting an application through Odeh Therapy does not
              guarantee employment, an interview, or placement of any kind.
              Our team reviews applications and reaches out where there is a
              suitable opportunity.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              Accuracy of Information
            </h2>
            <p className="mt-2">
              You agree that the information you submit, including your
              CV, is accurate and up to date to the best of your knowledge.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              Acceptable Use
            </h2>
            <p className="mt-2">
              You agree not to submit false information, spam, or attempt
              to interfere with the normal operation of this website.
            </p>
          </div>
          <p className="text-xs text-stone-400">
            This is a general terms summary and does not constitute legal
            advice.
          </p>
        </div>
      </div>
    </section>
  );
}
