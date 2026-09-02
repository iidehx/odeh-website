import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Omar Odeh, CPA",
  description: "How Omar Odeh, CPA collects, uses, and protects your information.",
  alternates: { canonical: "/real-estate/privacy" },
  robots: { index: true, follow: true },
};

export default function RealEstatePrivacyPage() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Omar Odeh, CPA</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-600">
          <p>
            This Privacy Policy explains how Omar Odeh, CPA (&quot;we&quot;,
            &quot;us&quot;) collects, uses, and protects the information you
            provide when you contact us through this website.
          </p>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Information We Collect
            </h2>
            <p className="mt-2">
              When you submit the contact form, we collect your name,
              business name (if provided), email address, phone number, the
              service you&apos;re interested in, and your message.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              How We Use Your Information
            </h2>
            <p className="mt-2">
              We use the information you provide to respond to your
              inquiry and follow up about our services. We do not sell your
              personal information.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Data Storage
            </h2>
            <p className="mt-2">
              Information submitted through this website is stored securely
              and is only accessible to our internal team.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Contact
            </h2>
            <p className="mt-2">
              If you have questions about this policy or would like your
              information removed, contact us at{" "}
              <a
                href="mailto:Odeh90@gmail.com"
                className="text-amber-700 hover:underline"
              >
                Odeh90@gmail.com
              </a>
              .
            </p>
          </div>
          <p className="text-xs text-slate-400">
            This is a general policy summary and does not constitute legal
            advice.
          </p>
        </div>
      </div>
    </section>
  );
}
