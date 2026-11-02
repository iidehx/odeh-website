import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import ExternalLink, { linkClasses } from "@/components/ExternalLink";

const PATH = "/dental/resources/production-vs-collections";
const TITLE = "Production vs. Collections: Dental Bookkeeping in Plain English";
const DESCRIPTION =
  "What dental production, adjustments, and collections mean for your books, with one clinic's month worked through step by step, from charges to profit.";

export const metadata: Metadata = {
  title: "Production vs. Collections: Dental Bookkeeping Explained | Omar Odeh, CPA",
  description: DESCRIPTION,
  keywords: [
    "dental bookkeeping",
    "production vs collections",
    "dental collection rate",
    "dental net production",
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
  reciprocity: "https://reciprocityaccounting.com/blog/dental-practice-collection-ratio",
  dentistryIq:
    "https://www.dentistryiq.com/revenue-cycle-management/article/55409403/the-7-revenue-cycle-gaps-most-dental-practices-dont-know-they-have",
};

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

// Maple Street Dental is fictional. All figures are for one month.
const clinic = {
  grossProduction: 120_000,
  adjustments: 24_000,
  insurancePayments: 66_200,
  patientPayments: 27_900,
  cardFees: 638,
  arStart: 110_000,
  arOver90: 9_400,
  expenses: [
    { label: "Staff", amount: 26_000 },
    { label: "Facility", amount: 7_000 },
    { label: "Dental supplies", amount: 5_500 },
    { label: "Lab fees", amount: 9_000 },
    { label: "Everything else (including card fees)", amount: 8_960 },
  ],
};
const netProduction = clinic.grossProduction - clinic.adjustments;
const collections = clinic.insurancePayments + clinic.patientPayments;
const deposits = collections - clinic.cardFees;
const collectionRate = collections / netProduction;
const arEnd = clinic.arStart + netProduction - collections;
const totalExpenses = clinic.expenses.reduce((sum, e) => sum + e.amount, 0);
const leftOver = collections - totalExpenses;
const pct = (n: number) => `${(n * 100).toFixed(1)}%`;

const faqItems: FaqItem[] = [
  {
    question: "What's the difference between production and collections in dentistry?",
    answer:
      "Production is the value of the dentistry your clinic performed, priced at your fees. Collections is the money actually received from insurers and patients. Your bank account, and usually your books, run on collections.",
  },
  {
    question: "What is a good collection rate for a dental clinic?",
    answer:
      "98% or higher of net production, meaning production after insurance write-offs. Below 95% usually points to a collections problem worth fixing.",
  },
  {
    question: "Should my books show production or collections as income?",
    answer:
      "Many small dental clinics keep their books on a cash basis, so income is what was collected. Production belongs in your practice management reports, and a good bookkeeper ties the two together every month.",
  },
  {
    question: "Why don't my bank deposits match my collections report?",
    answer:
      "Usually because card processors and patient financing companies deposit payments minus their fees. Timing matters too: a payment posted on the 31st may not hit the bank until the 2nd. Your bookkeeper should explain every difference.",
  },
];

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
      {children}
    </h2>
  );
}

function Row({
  label,
  value,
  strong = false,
  note,
}: {
  label: string;
  value: string;
  strong?: boolean;
  note?: string;
}) {
  return (
    <tr className="border-b border-slate-200 last:border-0">
      <th scope="row" className={`py-3 pr-4 ${strong ? "font-semibold text-slate-900" : "font-medium text-slate-800"}`}>
        {label}
        {note && <span className="block text-xs font-normal text-slate-500">{note}</span>}
      </th>
      <td className={`py-3 text-right ${strong ? "font-semibold text-slate-900" : "text-slate-900"}`}>
        {value}
      </td>
    </tr>
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

export default function ProductionVsCollectionsPage() {
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
                <strong>Production</strong> is the dentistry you did, priced at
                your fees. <strong>Collections</strong> is the money that
                actually arrived. In between are insurance write-offs and
                unpaid balances. Good dental bookkeeping tracks all three every
                month, so you know what you earned, what you&apos;re owed, and
                what really landed in the bank.
              </p>
            </div>

            <H2>The four numbers, in plain English</H2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="font-semibold text-slate-900">Gross production</dt>
                <dd>
                  Every procedure your clinic performed this month, at your
                  full fee schedule. It&apos;s the number your practice
                  management software shows first, and the most flattering one.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Adjustments</dt>
                <dd>
                  The amounts you agreed not to charge. Most are insurance
                  write-offs: if your fee is $1,000 but your PPO contract
                  allows $800, the $200 difference is written off. It was never
                  money you could collect.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Net production</dt>
                <dd>
                  Gross production minus adjustments. This is what you&apos;re
                  actually entitled to collect, and the number to measure
                  everything against.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Collections</dt>
                <dd>
                  Money actually received this month from insurers and
                  patients, including payments for work done in earlier months.
                </dd>
              </div>
            </dl>

            <H2>One clinic&apos;s month, worked through</H2>
            <p className="mt-6">
              Here&apos;s October at Maple Street Dental, a fictional
              single-location general dentistry clinic. The numbers are
              realistic, but the clinic isn&apos;t real.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              Step 1: From production to what you&apos;re owed
            </h3>
            <table className="mt-4 w-full text-left text-sm">
              <caption className="sr-only">Maple Street Dental production for October</caption>
              <tbody>
                <Row label="Gross production" value={money(clinic.grossProduction)} />
                <Row
                  label="Minus adjustments"
                  value={`−${money(clinic.adjustments)}`}
                  note="Mostly PPO write-offs"
                />
                <Row label="Net production" value={money(netProduction)} strong />
              </tbody>
            </table>
            <p className="mt-4">
              The clinic did {money(clinic.grossProduction)} of dentistry at
              full fees, but its insurance contracts mean it can only ever
              collect {money(netProduction)} of that.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              Step 2: What actually came in
            </h3>
            <table className="mt-4 w-full text-left text-sm">
              <caption className="sr-only">Maple Street Dental collections for October</caption>
              <tbody>
                <Row label="Insurance payments" value={money(clinic.insurancePayments)} />
                <Row label="Patient payments" value={money(clinic.patientPayments)} />
                <Row label="Collections" value={money(collections)} strong />
                <Row
                  label="Collection rate"
                  value={pct(collectionRate)}
                  note="Collections ÷ net production"
                  strong
                />
              </tbody>
            </table>
            <p className="mt-4">
              A {pct(collectionRate)} collection rate is healthy. The usual
              benchmark is 98% or more of net production, according to{" "}
              <ExternalLink href={SOURCES.reciprocity}>Reciprocity Accounting</ExternalLink>
              , citing the Academy of Dental CPAs.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              Step 3: Match collections to the bank
            </h3>
            <p className="mt-4">
              The practice software says {money(collections)} was collected,
              but bank deposits for the month total {money(deposits)}. The{" "}
              {money(clinic.cardFees)} difference is card processing fees: the
              processor deposits patient card payments minus its cut.
            </p>
            <p className="mt-4">
              This step is where a lot of dental bookkeeping goes wrong. If the
              books only record bank deposits, the fees disappear and income
              looks lower than it was. If the books record collections but
              nobody checks the bank, missing deposits go unnoticed. The fix is
              to record the full {money(collections)} as income, the{" "}
              {money(clinic.cardFees)} as an expense, and confirm every dollar
              of difference.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              Step 4: What&apos;s still owed
            </h3>
            <table className="mt-4 w-full text-left text-sm">
              <caption className="sr-only">Maple Street Dental accounts receivable for October</caption>
              <tbody>
                <Row label="Owed to the clinic on October 1" value={money(clinic.arStart)} />
                <Row label="Plus net production" value={`+${money(netProduction)}`} />
                <Row label="Minus collections" value={`−${money(collections)}`} />
                <Row label="Owed to the clinic on October 31" value={money(arEnd)} strong />
                <Row label="Of that, older than 90 days" value={money(clinic.arOver90)} />
              </tbody>
            </table>
            <p className="mt-4">
              This running balance is called accounts receivable. It grew by{" "}
              {money(arEnd - clinic.arStart)} this month, which is fine as long
              as the old balances keep getting paid. The{" "}
              {money(clinic.arOver90)} that&apos;s more than 90 days old is the
              part to chase, because the older a balance gets, the less likely
              it is to be collected.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              Step 5: What&apos;s left for the owner
            </h3>
            <table className="mt-4 w-full text-left text-sm">
              <caption className="sr-only">Maple Street Dental expenses and profit for October</caption>
              <tbody>
                <Row label="Collections" value={money(collections)} />
                {clinic.expenses.map((e) => (
                  <Row key={e.label} label={e.label} value={`−${money(e.amount)}`} />
                ))}
                <Row
                  label="Total overhead"
                  value={`${money(totalExpenses)} (${pct(totalExpenses / collections)})`}
                  strong
                />
                <Row
                  label="Left for the owner dentist's pay and profit"
                  value={`${money(leftOver)} (${pct(leftOver / collections)})`}
                  strong
                />
              </tbody>
            </table>
            <p className="mt-4">
              Overhead is measured against collections, not production, and{" "}
              {pct(totalExpenses / collections)} falls inside the typical 55% to
              65% range. Want to check your own clinic&apos;s numbers? Try our
              free{" "}
              <Link href="/dental/resources/dental-overhead-calculator" className={linkClasses}>
                dental overhead calculator
              </Link>
              .
            </p>

            <H2>What the monthly summary looks like</H2>
            <p className="mt-6">
              All of that work should boil down to one page an owner can read
              in two minutes. Here&apos;s what a plain-English summary for
              Maple Street&apos;s October could look like:
            </p>
            <figure className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <figcaption className="text-sm font-semibold text-slate-900">
                Maple Street Dental: October summary
              </figcaption>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>
                  You produced <strong>{money(netProduction)}</strong> after
                  insurance write-offs and collected{" "}
                  <strong>{money(collections)}</strong>, a{" "}
                  {pct(collectionRate)} collection rate. On target.
                </li>
                <li>
                  Overhead was <strong>{pct(totalExpenses / collections)}</strong>{" "}
                  of collections, inside the typical range, and every expense
                  category was within its own benchmark.
                </li>
                <li>
                  <strong>{money(leftOver)}</strong> is available for your pay
                  and profit this month.
                </li>
                <li>
                  Patients and insurers owe you <strong>{money(arEnd)}</strong>.
                  Follow up on the {money(clinic.arOver90)} that&apos;s more
                  than 90 days old.
                </li>
                <li>
                  Bank deposits matched collections after{" "}
                  {money(clinic.cardFees)} in card fees. Nothing missing.
                </li>
              </ul>
            </figure>

            <H2>Why the collection rate is worth watching</H2>
            <p className="mt-6">
              Small gaps add up. Maple Street&apos;s net production works out
              to about {money(netProduction * 12)} a year, so every percentage
              point of collection rate is worth roughly{" "}
              {money(netProduction * 12 * 0.01)} a year. A clinic collecting
              92% instead of 98% would be leaving about{" "}
              {money(netProduction * 12 * 0.06)} a year on the table.{" "}
              <ExternalLink href={SOURCES.dentistryIq}>DentistryIQ</ExternalLink>{" "}
              reports that many clinics that think they collect around 95% are
              really at 88% to 92%, because they measure against gross
              production instead of net.
            </p>

            <H2>Common dental bookkeeping mistakes</H2>
            <ul className="mt-6 list-disc space-y-3 pl-5">
              <li>Recording production as income, which overstates what the clinic earned.</li>
              <li>Booking card and patient financing deposits net of fees, so the fees never show up as expenses.</li>
              <li>Never matching the practice software&apos;s collections report to bank deposits.</li>
              <li>Measuring collection rate against gross production, which hides real collection problems.</li>
              <li>Letting old balances sit without follow-up until they&apos;re written off.</li>
            </ul>

            <p className="mt-10">
              Omar Odeh, CPA handles bookkeeping for dental clinics anywhere in
              the US, fully online, and reports these numbers in plain English
              every month. Read more about our{" "}
              <Link href="/dental" className={linkClasses}>
                dental CPA and bookkeeping services
              </Link>{" "}
              or see{" "}
              <Link href="/dental/resources/dental-cpa-cost" className={linkClasses}>
                what a dental CPA typically costs
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <Faq items={faqItems} />

      <CtaSection
        heading="Want numbers this clear for your clinic?"
        description="Tell us about your clinic and we'll show you what your monthly summary would look like. No accounting background needed."
        ctaHref="/dental/contact"
        ctaLabel="Contact Us"
      />
    </>
  );
}
