import type { Metadata } from "next";
import type { ReactNode } from "react";
import CashReserveCalculator from "@/components/CashReserveCalculator";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "ABA Practice Cash Reserve Calculator (2026) | Omar Odeh, CPA",
  description:
    "Free cash reserve calculator for ABA practices. See how much cash you need to cover payroll while commercial and Medicaid insurance payments catch up.",
  keywords: [
    "ABA practice cash flow",
    "ABA cash reserve",
    "ABA insurance reimbursement time",
    "ABA therapy practice finances",
  ],
  alternates: { canonical: "/therapy/resources/aba-cash-reserve-calculator" },
  openGraph: {
    title: "ABA Practice Cash Reserve Calculator (2026)",
    description:
      "How much cash your ABA practice needs on hand while insurance payments catch up.",
    url: "/therapy/resources/aba-cash-reserve-calculator",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

const SOURCES = {
  beancount: "https://beancount.io/blog/2026/07/14/aba-therapy-practice-bookkeeping-rbt-bcba-guide",
  assetAllies:
    "https://assetalliestax.com/aba-bookkeeping-services-how-clean-financials-help-practices-manage-reimbursement-timing-and-cash-flow-gaps/",
};

const faqItems: FaqItem[] = [
  {
    question: "How long does insurance take to pay an ABA practice?",
    answer:
      "Commercial insurers typically pay in 30 to 45 days and Medicaid in 45 to 90 days. Claims that need extra review, or that are denied and appealed, can take much longer.",
  },
  {
    question: "How many months of cash should an ABA practice keep?",
    answer:
      "Enough to cover your average wait for payment, plus a cushion of about 4 to 6 weeks of operating costs. For many practices that works out to two to four months of costs. Medicaid-heavy practices need more.",
  },
  {
    question: "Why does my practice run short on cash even when it's busy?",
    answer:
      "You pay RBTs and BCBAs every pay period, but insurers pay weeks or months after each session. Adding clients makes the gap bigger before it gets better, because you pay for the new sessions long before the money arrives.",
  },
  {
    question: "Should I use a line of credit instead of a cash reserve?",
    answer:
      "A line of credit can bridge a temporary gap, but interest adds up if you lean on it every month. Many practices use both: a reserve for the normal payment gap, and a line of credit for growth or unexpected delays.",
  },
];

const linkClasses =
  "font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function H2({ children, first = false }: { children: ReactNode; first?: boolean }) {
  return (
    <h2
      className={`${first ? "" : "mt-14 "}text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl`}
    >
      {children}
    </h2>
  );
}

export default function AbaCashReserveCalculatorPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-10 sm:pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Free Tool
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            ABA Practice Cash Reserve Calculator
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Your team gets paid every pay period, but insurance pays weeks or
            months after each session. Find out how much cash your practice
            needs on hand to cover that gap. Free, no sign-up, and nothing you
            enter leaves your browser.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <CashReserveCalculator />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-base leading-relaxed text-slate-600">
          <H2 first>How the calculator works</H2>
          <div className="mt-6 space-y-4">
            <p>
              <strong className="text-slate-900">The payment gap.</strong> If
              insurance takes an average of 60 days to pay, you&apos;re always
              paying for about 60 days of sessions that haven&apos;t been paid
              for yet. Your reserve has to cover those costs. The calculator
              averages your payment times by payer mix and multiplies by your
              daily operating costs.
            </p>
            <p>
              <strong className="text-slate-900">The cushion.</strong> On top of
              the gap, it adds 4 to 6 weeks of operating costs for denials,
              slow months, and surprises. That follows{" "}
              <ExternalLink href={SOURCES.assetAllies}>
                Asset Allies&apos; reserve guideline for ABA practices
              </ExternalLink>
              .
            </p>
            <p>
              <strong className="text-slate-900">The default payment times</strong>{" "}
              are the slow end of the typical ranges reported by{" "}
              <ExternalLink href={SOURCES.beancount}>Beancount</ExternalLink>
              : 30 to 45 days for commercial insurance and 45 to 90 days for
              Medicaid. Their advice is to plan around the slower number, not
              the average.
            </p>
          </div>

          <H2>What makes the gap bigger</H2>
          <ul className="mt-6 list-disc space-y-3 pl-5">
            <li>
              <strong className="text-slate-900">A bigger Medicaid share.</strong>{" "}
              Medicaid typically pays more slowly than commercial plans, so
              the same revenue ties up more cash.
            </li>
            <li>
              <strong className="text-slate-900">Denied claims.</strong>{" "}
              Denial rates in ABA run 15% to 30%, according to Beancount, and
              every denial restarts the wait.
            </li>
            <li>
              <strong className="text-slate-900">Authorization gaps.</strong>{" "}
              Sessions delivered after an authorization expires may not be
              billable at all until it&apos;s renewed.
            </li>
            <li>
              <strong className="text-slate-900">Growth.</strong> Each new
              client means more payroll now and payments later. Run the
              calculator with the operating costs you expect after hiring, not
              today&apos;s.
            </li>
            <li>
              <strong className="text-slate-900">Starting out.</strong> New
              practices often wait months for insurance credentialing before
              they can bill, so they need a larger reserve than this calculator
              shows.
            </li>
          </ul>

          <H2>How to shrink the gap</H2>
          <ul className="mt-6 list-disc space-y-3 pl-5">
            <li>Submit claims weekly, or sooner, instead of in monthly batches.</li>
            <li>
              Track authorization end dates the way you&apos;d track bill due
              dates, and start renewals early.
            </li>
            <li>
              Appeal denials systematically. Beancount reports that consistent
              appeals recover 30% to 40% of denied revenue.
            </li>
            <li>
              Compare what each payer actually pays, and how fast, when you
              decide which contracts to grow.
            </li>
          </ul>
        </div>
      </section>

      <Faq items={faqItems} />

      <CtaSection
        heading="Want help planning your practice's cash flow?"
        description="We'll look at your real payment times, payer mix, and payroll, and build a cash plan you can actually follow. No accounting background needed."
        ctaHref="/therapy/contact"
        ctaLabel="Plan My Cash Flow"
      />
    </>
  );
}
