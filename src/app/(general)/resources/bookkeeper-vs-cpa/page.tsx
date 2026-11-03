import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import ExternalLink, { linkClasses } from "@/components/ExternalLink";

const PATH = "/resources/bookkeeper-vs-cpa";
const TITLE = "Bookkeeper vs. CPA: Which Does Your Business Need?";
const DESCRIPTION =
  "What a bookkeeper does, what a CPA does, and which one your business needs at each stage, with examples from dental, therapy, and real estate.";

export const metadata: Metadata = {
  title: `${TITLE} | Omar Odeh, CPA`,
  description: DESCRIPTION,
  keywords: [
    "bookkeeper vs CPA",
    "bookkeeper vs accountant",
    "do I need a CPA or a bookkeeper",
    "small business bookkeeping",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    siteName: "Omar Odeh, CPA",
    type: "article",
    locale: "en_US",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

const SOURCES = {
  irsCredentials:
    "https://www.irs.gov/tax-professionals/understanding-tax-return-preparer-credentials-and-qualifications",
  blsClerks:
    "https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm",
  blsAccountants: "https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm",
};

const comparison = [
  { task: "Records day-to-day income and expenses", bookkeeper: "Yes", cpa: "Sometimes" },
  { task: "Reconciles bank and credit card accounts", bookkeeper: "Yes", cpa: "Sometimes" },
  { task: "Runs payroll", bookkeeper: "Often", cpa: "Sometimes" },
  { task: "Produces monthly financial statements", bookkeeper: "Yes", cpa: "Yes, and explains them" },
  { task: "Prepares and files tax returns", bookkeeper: "Usually not", cpa: "Yes" },
  { task: "Tax planning to lower what you owe", bookkeeper: "No", cpa: "Yes" },
  { task: "Represents you before the IRS", bookkeeper: "No", cpa: "Yes, without limits" },
  { task: "Advice on loans, hiring, growth", bookkeeper: "No", cpa: "Yes" },
  { task: "License required", bookkeeper: "No", cpa: "Yes, from a state board" },
];

const stages: { situation: string; example: string; need: string; link?: { href: string; label: string } }[] = [
  {
    situation: "Just you, simple finances",
    example: "A newer real estate agent paid by commission",
    need: "Bookkeeping software you keep up yourself, or a part-time bookkeeper, plus a CPA for quarterly estimated taxes and the annual return.",
  },
  {
    situation: "A team on payroll and insurance billing",
    example: "An ABA practice with RBTs and BCBAs",
    need: "Monthly bookkeeping that includes payroll, plus a CPA for taxes and planning around insurance payment delays.",
  },
  {
    situation: "An established clinic or business",
    example: "A dental clinic collecting $1 million or more",
    need: "Monthly bookkeeping with industry-specific reports, and a CPA involved year-round for tax planning, not just at filing time.",
  },
  {
    situation: "A big decision coming up",
    example: "Buying a practice, adding a location, or taking out a loan",
    need: "A CPA or fractional CFO to run the numbers before you commit.",
    link: { href: "/resources/fractional-cfo", label: "What a fractional CFO does" },
  },
  {
    situation: "A letter from the IRS",
    example: "A notice, an audit, or a payment dispute",
    need: "A CPA, enrolled agent, or tax attorney. Bookkeepers can't represent you.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Is a bookkeeper the same as an accountant?",
    answer:
      "No. A bookkeeper records transactions and keeps the books accurate. An accountant uses those records to prepare financial statements, file taxes, and advise you. A CPA is an accountant who has passed the CPA exam and holds a state license.",
  },
  {
    question: "Can my bookkeeper do my taxes?",
    answer:
      "Some bookkeepers prepare simple returns, but that's not the same as tax planning. And only CPAs, enrolled agents, and attorneys have unlimited rights to represent you if the IRS has questions.",
  },
  {
    question: "Do I still need a CPA if I use QuickBooks or Xero?",
    answer:
      "Software makes recording transactions easier, but it doesn't tell you whether they're categorized correctly, which deductions you're missing, or how much to set aside for taxes. Most businesses still need a CPA at least at tax time.",
  },
  {
    question: "How often should I talk to my CPA?",
    answer:
      "At least once before year-end for tax planning, not just at filing time. Businesses with employees, seasonal income, or big decisions ahead usually benefit from a check-in every month or quarter.",
  },
];

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
      {children}
    </h2>
  );
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  mainEntityOfPage: `https://www.omarodehcpa.com${PATH}`,
  image: "https://www.omarodehcpa.com/opengraph-image.png",
  author: { "@type": "Organization", name: "Omar Odeh, CPA", url: "https://www.omarodehcpa.com" },
  publisher: { "@type": "Organization", name: "Omar Odeh, CPA", url: "https://www.omarodehcpa.com" },
};

export default function BookkeeperVsCpaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <header className="bg-white pt-16 pb-10 sm:pt-20">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Choosing Help
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-sm text-slate-500">Updated November 2, 2026</p>
          </div>
        </header>

        <div className="bg-white pb-20">
          <div className="mx-auto max-w-3xl px-6 text-base leading-relaxed text-slate-600">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">
                The short answer
              </p>
              <p className="mt-2 text-slate-800">
                A <strong>bookkeeper</strong> keeps an accurate record of the
                money coming in and going out. A <strong>CPA</strong> is a
                licensed accountant who uses that record to file your taxes,
                lower what you owe, and advise you on big decisions. Most small
                businesses need both: bookkeeping every month, and a CPA at
                least at tax time, and year-round once the business grows.
              </p>
            </div>

            <H2>What each one does</H2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <caption className="sr-only">Tasks handled by a bookkeeper compared with a CPA</caption>
                <thead>
                  <tr className="border-b border-slate-300 text-xs uppercase tracking-wide text-slate-500">
                    <th scope="col" className="py-2 pr-4 font-semibold">Task</th>
                    <th scope="col" className="py-2 pr-4 font-semibold">Bookkeeper</th>
                    <th scope="col" className="py-2 font-semibold">CPA</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.task} className="border-b border-slate-200">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-800">{row.task}</th>
                      <td className="py-3 pr-4 text-slate-900">{row.bookkeeper}</td>
                      <td className="py-3 text-slate-900">{row.cpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              The biggest difference is the license. Bookkeepers don&apos;t
              need one, although some earn optional certifications, according
              to the{" "}
              <ExternalLink href={SOURCES.blsClerks}>Bureau of Labor Statistics</ExternalLink>
              . CPAs are licensed by state boards of accountancy after passing
              the Uniform CPA Examination, and along with enrolled agents and
              attorneys, they&apos;re the only tax professionals with unlimited
              rights to represent you before the IRS, according to the{" "}
              <ExternalLink href={SOURCES.irsCredentials}>IRS</ExternalLink>.
            </p>

            <H2>Which one you need, by stage</H2>
            <p className="mt-6">
              The right mix depends less on your revenue than on how
              complicated your money is. Find the row that sounds most like
              you:
            </p>
            <div className="mt-6 space-y-4">
              {stages.map((s) => (
                <div key={s.situation} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">{s.situation}</h3>
                  <p className="mt-1 text-sm text-slate-500">For example: {s.example}</p>
                  <p className="mt-3 text-sm text-slate-700">
                    <span className="font-semibold text-slate-900">What you need: </span>
                    {s.need}
                  </p>
                  {s.link && (
                    <p className="mt-2 text-sm">
                      <Link href={s.link.href} className={linkClasses}>
                        {s.link.label}
                      </Link>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <H2>What it looks like in three industries</H2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Dental clinics</h3>
                <p className="mt-2">
                  The bookkeeper matches collections in your practice software
                  to bank deposits and categorizes supply and lab costs. The CPA
                  reads those numbers against dental benchmarks, plans for
                  equipment purchases, and files the return. See{" "}
                  <Link href="/dental/resources/production-vs-collections" className={linkClasses}>
                    production vs. collections, explained
                  </Link>{" "}
                  for a worked example, or our{" "}
                  <Link href="/dental" className={linkClasses}>
                    dental CPA and bookkeeping services
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">ABA and therapy practices</h3>
                <p className="mt-2">
                  The bookkeeper tracks insurance payments as they arrive and
                  keeps payroll for your clinicians accurate. The CPA plans
                  cash around slow payers, so payroll never depends on when an
                  insurer pays. Try our{" "}
                  <Link href="/therapy/resources/aba-cash-reserve-calculator" className={linkClasses}>
                    ABA cash reserve calculator
                  </Link>{" "}
                  or see our{" "}
                  <Link href="/therapy" className={linkClasses}>
                    therapy practice accounting services
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Real estate businesses</h3>
                <p className="mt-2">
                  The bookkeeper logs commissions, mileage, and marketing costs
                  as they happen. The CPA works out your quarterly estimated
                  taxes and makes sure every deduction makes it onto the
                  return. Try our{" "}
                  <Link href="/real-estate/resources/quarterly-tax-calculator" className={linkClasses}>
                    real estate agent tax calculator
                  </Link>{" "}
                  or see our{" "}
                  <Link href="/real-estate" className={linkClasses}>
                    real estate accounting services
                  </Link>
                  .
                </p>
              </div>
            </div>

            <H2>Signs you need more than a bookkeeper</H2>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>Your tax bill keeps surprising you.</li>
              <li>You have employees, or you&apos;re about to hire.</li>
              <li>You&apos;re considering a loan, a new location, or buying equipment.</li>
              <li>The monthly reports arrive, but nobody explains what they mean.</li>
              <li>You&apos;ve received a letter from the IRS or your state.</li>
            </ul>

            <H2>What it costs</H2>
            <p className="mt-6">
              Hiring an in-house bookkeeper means a salary: the median for
              bookkeeping clerks was $50,670 a year in 2025, according to the{" "}
              <ExternalLink href={SOURCES.blsClerks}>BLS</ExternalLink>, before
              payroll taxes and benefits. That&apos;s why most small businesses
              outsource bookkeeping for a monthly fee instead. Accountants earn
              more, with a 2025 median of $83,680 according to the{" "}
              <ExternalLink href={SOURCES.blsAccountants}>
                BLS accountants and auditors data
              </ExternalLink>
              , so CPA work is usually billed by the project, the month, or a
              percentage of revenue. For one industry&apos;s actual price
              ranges, see{" "}
              <Link href="/dental/resources/dental-cpa-cost" className={linkClasses}>
                how much a dental CPA costs
              </Link>
              .
            </p>

            <H2>Can one firm do both?</H2>
            <p className="mt-6">
              Yes, and it&apos;s often simpler. When the same team keeps your
              books and files your taxes, nothing gets lost between the two,
              and you have one person to call. Omar Odeh, CPA provides
              bookkeeping, payroll, tax preparation, and CPA-level advice
              together, fully online, for businesses anywhere in the US.
            </p>
          </div>
        </div>
      </article>

      <Faq items={faqItems} />

      <CtaSection
        heading="Not sure what your business needs?"
        description="Pick your industry and tell us a bit about your business. We'll follow up and recommend the right mix, in plain English."
        ctas={[
          { href: "/dental/contact", label: "Dental Clinics" },
          { href: "/therapy/contact", label: "Therapy Practices" },
          { href: "/real-estate/contact", label: "Real Estate Businesses" },
        ]}
      />
    </>
  );
}
