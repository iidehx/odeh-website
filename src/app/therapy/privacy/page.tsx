import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Odeh Therapy",
  description: "How Odeh Therapy collects, uses, and protects applicant information.",
  alternates: { canonical: "/therapy/privacy" },
  robots: { index: true, follow: true },
};

export default function TherapyPrivacyPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="font-[family-name:var(--font-therapy-serif)] text-3xl font-semibold tracking-tight text-stone-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-stone-500">Odeh Therapy</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-stone-600">
          <p>
            This Privacy Policy explains how Odeh Therapy (&quot;we&quot;,
            &quot;us&quot;) collects, uses, and protects the information you
            provide when you submit an application through this website.
          </p>
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              Information We Collect
            </h2>
            <p className="mt-2">
              When you submit an application, we collect your name, email
              address, phone number, country, profession, years of
              experience, preferred location, any message you provide, and
              your uploaded CV.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              How We Use Your Information
            </h2>
            <p className="mt-2">
              We use the information you provide to review your application
              and, where there is a suitable opportunity, to contact you.
              We do not sell your personal information.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              Data Storage
            </h2>
            <p className="mt-2">
              Application information, including uploaded CVs, is stored
              securely and is only accessible to our internal team.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-stone-900">
              Contact
            </h2>
            <p className="mt-2">
              If you have questions about this policy or would like your
              information removed, contact us at{" "}
              <a
                href="mailto:Odeh90@gmail.com"
                className="text-orange-800 hover:underline"
              >
                Odeh90@gmail.com
              </a>
              .
            </p>
          </div>
          <p className="text-xs text-stone-400">
            This is a general policy summary and does not constitute legal
            advice.
          </p>
        </div>
      </div>
    </section>
  );
}
