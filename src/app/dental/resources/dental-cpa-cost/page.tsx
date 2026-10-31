import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";

const PATH = "/dental/resources/dental-cpa-cost";
const TITLE = "How Much Does a Dental CPA Cost? (2026 Pricing Guide)";
const DESCRIPTION =
  "Dental CPAs typically charge 1% to 2% of collections. See 2026 price ranges by service and clinic size, what's included, and what costs extra.";

export const metadata: Metadata = {
  title: `${TITLE} | Omar Odeh, CPA`,
  description: DESCRIPTION,
  keywords: [
    "dental CPA cost",
    "dental accountant fees",
    "dental bookkeeping cost",
    "how much does a dental CPA charge",
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
  percentology: "https://www.percentology.com/post/what-does-a-dental-cpa-cost",
  reciprocity: "https://reciprocityaccounting.com/blog/how-much-does-dental-bookkeeping-cost",
};

const serviceRanges = [
  { service: "Basic bookkeeping only", cost: "$200 – $500 / month" },
  { service: "General small-business accountant", cost: "$500 – $1,200 / month" },
  { service: "Dental-specific bookkeeping", cost: "$700 – $3,500 / month" },
  { service: "Tax preparation only", cost: "$2,000 – $6,000 / year" },
  { service: "Fractional CFO", cost: "$3,000 – $10,000+ / month" },
  { service: "Practice purchase or sale support", cost: "$3,000 – $8,000 one-time" },
];

const sizeRanges = [
  { size: "Solo clinic ($500K – $1.5M collections)", cost: "$750 – $1,500 / month" },
  { size: "Growing clinic with associates", cost: "$1,800 – $3,000 / month" },
  { size: "Multiple locations", cost: "$3,000 – $5,000+ / month" },
];

const questions = [
  "Is the fee a flat monthly price, a percentage of collections, or hourly?",
  "Which of these are included: bookkeeping, payroll, business tax return, personal tax return, tax planning meetings?",
  "How often will I get financial reports, and will someone walk me through them?",
  "Do you reconcile collections against my practice management software, or only my bank account?",
  "What does it cost to catch up if my books are behind?",
  "What happens to the price if I add an associate or a second location?",
];

const faqItems: FaqItem[] = [
  {
    question: "How much does a dental CPA cost per year?",
    answer:
      "Commonly 1% to 2% of collections for core accounting and tax work. For a clinic collecting $1 million, that's about $10,000 to $20,000 a year. Payroll, personal tax returns, and consulting can push it higher.",
  },
  {
    question: "Is a dental-specific CPA worth paying more for?",
    answer:
      "Often, yes. A CPA who knows dental clinics tracks production, collections, and overhead against dental benchmarks, and knows the deductions that apply to equipment, supplies, and lab fees. A generalist may only reconcile your bank account and file your return.",
  },
  {
    question: "Do I need a bookkeeper and a CPA?",
    answer:
      "Many clinics have both: a bookkeeper for day-to-day records and a CPA for taxes, planning, and review. Some firms, including ours, handle both so you have one point of contact.",
  },
  {
    question: "Are CPA fees tax-deductible for a dental clinic?",
    answer:
      "Accounting and tax preparation fees for your business are generally deductible as an ordinary business expense. Fees for your personal return are treated differently, so ask your CPA how they bill those.",
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
  datePublished: "2026-10-31",
  dateModified: "2026-10-31",
  mainEntityOfPage: `https://www.omarodehcpa.com${PATH}`,
  image: "https://www.omarodehcpa.com/opengraph-image.png",
  author: { "@type": "Organization", name: "Omar Odeh, CPA", url: "https://www.omarodehcpa.com" },
  publisher: { "@type": "Organization", name: "Omar Odeh, CPA", url: "https://www.omarodehcpa.com" },
};

export default function DentalCpaCostPage() {
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
              Dental Clinic Finances
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-sm text-slate-500">Updated October 31, 2026</p>
          </div>
        </header>

        <div className="bg-white pb-20">
          <div className="mx-auto max-w-3xl px-6 text-base leading-relaxed text-slate-600">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">
                The short answer
              </p>
              <p className="mt-2 text-slate-800">
                Most dental CPAs charge <strong>1% to 2% of collections</strong>{" "}
                for monthly bookkeeping, the business tax return, and tax
                planning. For a clinic collecting $1 million a year, that&apos;s
                roughly <strong>$10,000 to $20,000 a year</strong>. Payroll,
                personal tax returns, and consulting usually cost extra.
              </p>
            </div>

            <H2>2026 dental accounting prices by service</H2>
            <p className="mt-6">
              These are typical published ranges. Where your clinic falls
              depends on its size, how organized the books are, and how much
              hands-on help you want.
            </p>
            <table className="mt-6 w-full text-left text-sm">
              <caption className="sr-only">Typical 2026 dental accounting prices by service</caption>
              <thead>
                <tr className="border-b border-slate-300 text-xs uppercase tracking-wide text-slate-500">
                  <th scope="col" className="py-2 pr-4 font-semibold">Service</th>
                  <th scope="col" className="py-2 font-semibold">Typical cost</th>
                </tr>
              </thead>
              <tbody>
                {serviceRanges.map((r) => (
                  <tr key={r.service} className="border-b border-slate-200">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-800">{r.service}</th>
                    <td className="py-3 text-slate-900">{r.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-slate-500">
              Source:{" "}
              <ExternalLink href={SOURCES.reciprocity}>
                Reciprocity Accounting, dental bookkeeping cost guide (March 2026)
              </ExternalLink>
              .
            </p>

            <H2>What it costs by clinic size</H2>
            <table className="mt-6 w-full text-left text-sm">
              <caption className="sr-only">Typical monthly dental accounting budget by clinic size</caption>
              <thead>
                <tr className="border-b border-slate-300 text-xs uppercase tracking-wide text-slate-500">
                  <th scope="col" className="py-2 pr-4 font-semibold">Clinic</th>
                  <th scope="col" className="py-2 font-semibold">Typical budget</th>
                </tr>
              </thead>
              <tbody>
                {sizeRanges.map((r) => (
                  <tr key={r.size} className="border-b border-slate-200">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-800">{r.size}</th>
                    <td className="py-3 text-slate-900">{r.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-slate-500">
              Source:{" "}
              <ExternalLink href={SOURCES.reciprocity}>Reciprocity Accounting</ExternalLink>
              . Very large clinics and groups may not fit the 1% to 2% average,
              according to{" "}
              <ExternalLink href={SOURCES.percentology}>Percentology</ExternalLink>
              .
            </p>

            <H2>The three ways dental CPAs charge</H2>
            <div className="mt-6 space-y-4">
              <p>
                <strong className="text-slate-900">Percentage of collections.</strong>{" "}
                The fee scales with your clinic, usually 1% to 2%. It&apos;s
                simple to budget for, but your bill rises as you grow even if
                the work doesn&apos;t.
              </p>
              <p>
                <strong className="text-slate-900">Flat monthly package.</strong>{" "}
                A set price for a defined list of services, such as monthly
                bookkeeping, payroll, and the year-end tax return. You know the
                cost in advance; just check exactly what&apos;s in the package.
              </p>
              <p>
                <strong className="text-slate-900">Hourly or per project.</strong>{" "}
                Common for one-off work like cleaning up books that are behind,
                buying or selling a clinic, or a single tax return. Ask for an
                estimate up front.
              </p>
            </div>

            <H2>What&apos;s usually included, and what costs extra</H2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">Usually included</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  <li>Monthly bookkeeping and bank reconciliations</li>
                  <li>The clinic&apos;s business tax return</li>
                  <li>A tax planning meeting</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">Often extra</h3>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm">
                  <li>Payroll</li>
                  <li>Paying bills on your behalf</li>
                  <li>Reconciling collections to your practice software</li>
                  <li>Your personal tax return</li>
                  <li>Consulting and growth planning</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Source:{" "}
              <ExternalLink href={SOURCES.percentology}>
                Percentology, &ldquo;What Does a Dental CPA Cost?&rdquo; (2026)
              </ExternalLink>
              .
            </p>

            <H2>Questions to ask before you hire a dental CPA</H2>
            <p className="mt-6">
              Two quotes can look far apart until you compare what&apos;s
              actually in them. Ask every firm the same questions:
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-5">
              {questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>

            <H2>Is a dental CPA worth it?</H2>
            <p className="mt-6">
              A good CPA should pay for a large part of their fee in what they
              find: deductions you were missing, overhead that&apos;s drifted
              above range, or a cash flow gap you can fix before it hurts. If
              you&apos;re not sure where your clinic stands today, try our free{" "}
              <Link href="/dental/resources/dental-overhead-calculator" className={linkClasses}>
                dental overhead calculator
              </Link>
              . It compares your expenses with typical dental benchmarks in
              about a minute.
            </p>

            <H2>How Omar Odeh, CPA prices dental clinics</H2>
            <p className="mt-6">
              We quote each clinic based on its size and the services it
              needs, so you only pay for what you use. We work fully online with
              dental clinics anywhere in the US. Tell us a bit about your clinic
              through the{" "}
              <Link href="/dental/contact" className={linkClasses}>
                contact form
              </Link>{" "}
              and we&apos;ll follow up with a quote, or read more about our{" "}
              <Link href="/dental" className={linkClasses}>
                dental CPA and bookkeeping services
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <Faq items={faqItems} />

      <CtaSection
        heading="Get a quote for your clinic"
        description="Tell us about your clinic and the help you need. We'll follow up with a clear quote, in plain English."
        ctaHref="/dental/contact"
        ctaLabel="Get a Quote"
      />
    </>
  );
}
