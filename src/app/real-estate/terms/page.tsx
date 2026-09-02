import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Omar Odeh, CPA",
  description: "Terms of use for the Omar Odeh, CPA website.",
  alternates: { canonical: "/real-estate/terms" },
  robots: { index: true, follow: true },
};

export default function RealEstateTermsPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Terms
        </h1>
        <p className="mt-2 text-sm text-slate-500">Omar Odeh, CPA</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            By using this website and submitting the contact form, you
            agree to the following terms.
          </p>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              No Advice Without Engagement
            </h2>
            <p className="mt-2">
              Information on this website is general in nature and does not
              constitute professional accounting, tax, or financial advice.
              Specific guidance is provided only after we&apos;ve engaged with
              you directly about your business.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Accuracy of Information
            </h2>
            <p className="mt-2">
              You agree that the information you submit through this site
              is accurate and up to date to the best of your knowledge.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Acceptable Use
            </h2>
            <p className="mt-2">
              You agree not to submit false information, spam, or attempt
              to interfere with the normal operation of this website.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            This is a general terms summary and does not constitute legal
            advice.
          </p>
        </div>
      </div>
    </section>
  );
}
