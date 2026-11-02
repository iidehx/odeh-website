import type { Metadata } from "next";
import CommissionTaxCalculator from "@/components/CommissionTaxCalculator";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import ExternalLink from "@/components/ExternalLink";

export const metadata: Metadata = {
  title: "Real Estate Agent Tax Calculator (2026) | Omar Odeh, CPA",
  description:
    "Free tax calculator for real estate agents. See how much of each commission check to set aside and your 2026 quarterly estimated tax deadlines.",
  keywords: [
    "real estate agent tax calculator",
    "real estate agent quarterly taxes",
    "how much to set aside for taxes from commission",
    "realtor estimated taxes",
  ],
  alternates: { canonical: "/real-estate/resources/quarterly-tax-calculator" },
  openGraph: {
    title: "Real Estate Agent Tax Calculator (2026)",
    description:
      "How much of each commission check to set aside for taxes, plus the 2026 quarterly deadlines.",
    url: "/real-estate/resources/quarterly-tax-calculator",
    siteName: "Omar Odeh, CPA",
    type: "website",
    locale: "en_US",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

const deadlines = [
  { covers: "January 1 – March 31, 2026", due: "April 15, 2026" },
  { covers: "April 1 – May 31, 2026", due: "June 15, 2026" },
  { covers: "June 1 – August 31, 2026", due: "September 15, 2026" },
  { covers: "September 1 – December 31, 2026", due: "January 15, 2027" },
];

const faqItems: FaqItem[] = [
  {
    question: "What percentage of my commission should I set aside for taxes?",
    answer:
      "A common rule of thumb is 25% to 30% of each check, but the right number depends on your income, expenses, filing status, and state. The calculator above works out your own percentage using 2026 IRS figures.",
  },
  {
    question: "Do real estate agents have to pay quarterly taxes?",
    answer:
      "Usually, yes. Most agents are paid as independent contractors on a 1099, so no tax is withheld from commission checks. The IRS generally expects quarterly estimated payments if you'll owe $1,000 or more when you file.",
  },
  {
    question: "What happens if I miss a quarterly payment?",
    answer:
      "The IRS charges an underpayment penalty, which works like interest on the amount that was late. Paying as soon as you can keeps it small, and you can still make the next payment on time.",
  },
  {
    question: "How do I make an estimated tax payment?",
    answer:
      "Online through IRS Direct Pay or your IRS online account, or by mailing a check with Form 1040-ES. Most states have their own online payment system for state estimates.",
  },
  {
    question: "Why is my set-aside higher than my tax bracket?",
    answer:
      "Because self-employed agents also pay self-employment tax: 15.3% for Social Security and Medicare on most of your net earnings. An employee splits that with their employer; as a 1099 agent, you pay both halves.",
  },
];

export default function QuarterlyTaxCalculatorPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-10 sm:pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Free Tool
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Real Estate Agent Tax Calculator: How Much to Set Aside
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            No one withholds taxes from your commission checks, so it&apos;s on
            you to set money aside. Enter your numbers to see what percentage
            of each check to save and what your 2026 quarterly payments might
            be. Free, no sign-up, and nothing you enter leaves your browser.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <CommissionTaxCalculator />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            2026 quarterly estimated tax deadlines
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Federal estimated taxes are due four times a year. The periods
            aren&apos;t equal quarters, which catches a lot of agents off guard.
          </p>
          <table className="mt-6 w-full text-left text-sm">
            <caption className="sr-only">2026 federal estimated tax due dates</caption>
            <thead>
              <tr className="border-b border-slate-300 text-xs uppercase tracking-wide text-slate-500">
                <th scope="col" className="py-2 pr-4 font-semibold">Income earned</th>
                <th scope="col" className="py-2 font-semibold">Payment due</th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((d) => (
                <tr key={d.due} className="border-b border-slate-200">
                  <td className="py-3 pr-4 text-slate-700">{d.covers}</td>
                  <th scope="row" className="py-3 font-medium text-slate-900">{d.due}</th>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-sm text-slate-500">
            Source:{" "}
            <ExternalLink href="https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes">
              IRS, Estimated Taxes
            </ExternalLink>
            . Your state may use different dates.
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What goes into your set-aside number
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              <strong className="text-slate-900">Self-employment tax.</strong>{" "}
              Social Security and Medicare, 15.3% on about 92% of your profit.
              The Social Security part stops at $184,500 of earnings in 2026.
              This is often the biggest surprise for new agents.
            </p>
            <p>
              <strong className="text-slate-900">Federal income tax.</strong>{" "}
              Charged on your profit after the standard deduction, half of
              your self-employment tax, and the 20% qualified business income
              deduction most agents qualify for.
            </p>
            <p>
              <strong className="text-slate-900">State income tax.</strong>{" "}
              Depends entirely on where you live. Texas, Florida, and several
              other states have none.
            </p>
            <p>
              Your <strong className="text-slate-900">expenses matter</strong>{" "}
              because tax is charged on profit, not on commissions. Every
              legitimate business expense you track, from mileage to MLS dues,
              lowers the amount you need to set aside.
            </p>
          </div>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            How to avoid an underpayment penalty
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            You generally won&apos;t owe a penalty if your payments during the
            year add up to at least 90% of this year&apos;s tax, or 100% of
            last year&apos;s tax (110% if last year&apos;s adjusted gross income
            was over $150,000). Paying based on last year is the simplest
            option when your income swings from year to year, because you know
            the number in advance. See{" "}
            <ExternalLink href="https://www.irs.gov/publications/p505">
              IRS Publication 505
            </ExternalLink>{" "}
            for the full rules, and pay online with{" "}
            <ExternalLink href="https://www.irs.gov/payments/direct-pay">
              IRS Direct Pay
            </ExternalLink>
            .
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            About this calculator
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            It uses the 2026 tax brackets, standard deductions, and qualified
            business income limits from{" "}
            <ExternalLink href="https://www.irs.gov/pub/irs-drop/rp-25-32.pdf">
              IRS Revenue Procedure 2025-32
            </ExternalLink>{" "}
            and the 2026 Social Security wage base from the{" "}
            <ExternalLink href="https://www.ssa.gov/oact/cola/cbb.html">
              Social Security Administration
            </ExternalLink>
            . It assumes you take the standard deduction and have no employees.
            Retirement contributions, self-employed health insurance, and
            itemized deductions would all lower your actual tax.
          </p>
        </div>
      </section>

      <Faq items={faqItems} />

      <CtaSection
        heading="Want a CPA to plan your quarterly taxes?"
        description="We'll work out what to set aside based on your actual numbers and make sure you're claiming every deduction you're entitled to."
        ctaHref="/real-estate/contact"
        ctaLabel="Plan My Quarterly Taxes"
      />
    </>
  );
}
