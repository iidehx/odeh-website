import type { Metadata } from "next";
import OverheadCalculator from "@/components/OverheadCalculator";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Dental Overhead Calculator (2026 Benchmarks) | Omar Odeh, CPA",
  description:
    "Free dental overhead calculator. Enter your collections and expenses to see your overhead percentage against 2026 benchmarks, category by category.",
  keywords: [
    "dental overhead calculator",
    "dental overhead percentage",
    "dental practice overhead benchmarks",
    "dental office overhead",
  ],
  alternates: { canonical: "/dental/resources/dental-overhead-calculator" },
  openGraph: {
    title: "Dental Overhead Calculator (2026 Benchmarks)",
    description:
      "See how your clinic's overhead compares with typical dental benchmarks, category by category.",
    url: "/dental/resources/dental-overhead-calculator",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

const faqItems: FaqItem[] = [
  {
    question: "What is a good overhead percentage for a dental practice?",
    answer:
      "Most well-run general dental practices spend 55% to 65% of collections on overhead, not counting the owner dentist's pay. Overhead above 70% usually points to a structural problem worth digging into.",
  },
  {
    question: "Should I use production or collections?",
    answer:
      "Collections. Overhead benchmarks compare expenses with money actually received, not the value of work billed. If your collection rate is low, a production-based figure will make overhead look better than it is.",
  },
  {
    question: "Does overhead include the owner dentist's salary?",
    answer:
      "No. Benchmarks leave out the owner's compensation; what's left after overhead is what's available for the owner's pay and profit. Associate dentists on payroll do count, under staff costs.",
  },
  {
    question: "My overhead is above the typical range. What should I do first?",
    answer:
      "Look at the category furthest above its range; that's usually where the biggest savings are. Staff costs and lab fees are the most common culprits. A CPA who works with dental clinics can review the account-level detail with you.",
  },
];

export default function DentalOverheadCalculatorPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-10 sm:pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Free Tool
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Dental Overhead Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Find out what percentage of your clinic&apos;s collections goes to
            overhead, and how each expense category compares with typical
            dental practice benchmarks. Free, no sign-up, and nothing you enter
            leaves your browser.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <OverheadCalculator />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            How to read your results
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              <strong className="text-slate-900">Overhead percentage</strong>{" "}
              is your total operating expenses divided by your collections.
              At 60% overhead, 40 cents of every dollar collected is left for
              your own pay and profit.
            </p>
            <p>
              <strong className="text-slate-900">Typical ranges</strong> are
              comparison points, not rules. A specialty practice, a
              high-rent city, or a recent equipment purchase can all push a
              category above range for good reasons. The useful question is
              whether you can explain why a number is where it is.
            </p>
            <p>
              <strong className="text-slate-900">Below typical</strong>{" "}
              isn&apos;t always good news either. Very low staff costs, for
              example, can mean an overworked team or a hiring gap that limits
              how many patients you can see.
            </p>
          </div>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Where the benchmarks come from
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Category ranges and the 55%–65% total come from Blue Cloud
            CPA&apos;s{" "}
            <a
              href="https://bluecloudcpa.com/guides/dental-practice-bookkeeping-overhead-benchmarks"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
            >
              dental overhead benchmarks guide
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            . Other sources land in the same area: ZenOne&apos;s{" "}
            <a
              href="https://www.zenone.com/blog/dental-practice-overhead-benchmarks-are-you-spending-too-much/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
            >
              2026 overhead breakdown
              <span className="sr-only"> (opens in a new tab)</span>
            </a>{" "}
            reports a national median of 62% (Overjet, 2025), with
            high-performing practices at 55%–60%. Sources differ on how they
            group expenses, so compare totals more confidently than
            individual categories.
          </p>
        </div>
      </section>

      <Faq items={faqItems} />

      <CtaSection
        heading="Want a CPA to look at your real numbers?"
        description="Send us your clinic's figures and we'll walk through where your overhead stands and what to look at first. No accounting background needed."
        ctaHref="/dental/contact"
        ctaLabel="Get Your Numbers Reviewed"
      />
    </>
  );
}
