import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import ExternalLink, { linkClasses } from "@/components/ExternalLink";
import PrintButton from "@/components/PrintButton";

const PATH = "/real-estate/resources/tax-deductions-checklist";
const TITLE = "Real Estate Agent Tax Deductions Checklist (2026)";
const DESCRIPTION =
  "A printable 2026 checklist of tax deductions for real estate agents: mileage, marketing, dues, home office, gifts, retirement, and the records to keep.";

export const metadata: Metadata = {
  title: `${TITLE} | Omar Odeh, CPA`,
  description: DESCRIPTION,
  keywords: [
    "real estate agent tax deductions",
    "realtor tax deductions checklist",
    "real estate agent tax write-offs",
    "1099 real estate agent deductions",
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
  mileage: "https://www.irs.gov/tax-professionals/standard-mileage-rates",
  homeOffice:
    "https://www.irs.gov/businesses/small-businesses-self-employed/simplified-option-for-home-office-deduction",
  p463: "https://www.irs.gov/publications/p463",
  retirement:
    "https://www.irs.gov/newsroom/401k-limit-increases-to-24500-for-2026-ira-limit-increases-to-7500",
  sep: "https://www.irs.gov/retirement-plans/plan-participant-employee/sep-contribution-limits-including-grandfathered-sarseps",
};

interface Item {
  title: string;
  note: ReactNode;
}

const groups: { heading: string; items: Item[] }[] = [
  {
    heading: "Car and travel",
    items: [
      {
        title: "Business mileage",
        note: (
          <>
            72.5¢ per mile from January 1 to June 30, 2026, and 76¢ per mile
            from July 1 to December 31, 2026 (
            <ExternalLink href={SOURCES.mileage}>IRS</ExternalLink>). Showings,
            listing appointments, inspections, and closings count. Commuting
            from home to your regular office doesn&apos;t.
          </>
        ),
      },
      {
        title: "Parking and tolls for business trips",
        note: "Deductible on top of the standard mileage rate.",
      },
      {
        title: "Overnight business travel",
        note: "Conferences and out-of-town trips: transportation, lodging, and 50% of meals.",
      },
    ],
  },
  {
    heading: "Marketing",
    items: [
      { title: "Signs, flyers, and mailers", note: "Including printing and postage." },
      { title: "Listing photos, video, and virtual tours", note: "Including drone footage you pay for." },
      { title: "Staging you pay for", note: "When it's your expense, not the seller's." },
      { title: "Online ads and listing portals", note: "Paid placements, lead services, and social media ads." },
      { title: "Website, domain, and CRM", note: "Hosting, design, and subscriptions." },
      { title: "Open house costs", note: "Refreshments, signage, and sign-in materials." },
    ],
  },
  {
    heading: "Brokerage, licensing, and dues",
    items: [
      { title: "Desk, transaction, and franchise fees", note: "Fees your brokerage charges you." },
      { title: "MLS dues and lockbox fees", note: "Including key or app subscriptions." },
      {
        title: "Association and board dues",
        note: "Your association reports what share of dues went to lobbying; that part isn't deductible.",
      },
      { title: "License renewals and continuing education", note: "Required courses, exam fees, and renewals." },
      { title: "Errors and omissions (E&O) insurance", note: "Plus any business liability coverage." },
    ],
  },
  {
    heading: "Office and equipment",
    items: [
      {
        title: "Home office",
        note: (
          <>
            Only for space used regularly and exclusively for business. The
            simplified method is $5 per square foot, up to 300 square feet (
            <ExternalLink href={SOURCES.homeOffice}>IRS</ExternalLink>).
          </>
        ),
      },
      { title: "Phone and internet", note: "The business-use share of the bill." },
      { title: "Software and apps", note: "E-signature, transaction management, accounting, and design tools." },
      { title: "Office supplies", note: "Paper, ink, postage, and similar." },
      {
        title: "Computer, camera, and other equipment",
        note: "Larger purchases may be deducted all at once or over several years. Ask your CPA which is better for you.",
      },
    ],
  },
  {
    heading: "Clients and people",
    items: [
      {
        title: "Client gifts",
        note: (
          <>
            Up to $25 per person per year. Packaging and shipping don&apos;t
            count toward the $25 (
            <ExternalLink href={SOURCES.p463}>IRS Publication 463</ExternalLink>
            ).
          </>
        ),
      },
      {
        title: "Business meals",
        note: "Generally 50% deductible when business is discussed. Entertainment, like sporting events or golf, isn't deductible.",
      },
      { title: "Assistants and contractors you pay", note: "Transaction coordinators, photographers, virtual assistants." },
      { title: "Professional fees", note: "Your CPA, bookkeeper, and attorney, for the business." },
    ],
  },
  {
    heading: "Health and retirement",
    items: [
      {
        title: "Self-employed health insurance",
        note: "Premiums for you and your family, if you're not eligible for an employer plan, including a spouse's.",
      },
      {
        title: "SEP-IRA contributions",
        note: (
          <>
            Generally up to about 20% of your net self-employment earnings,
            with a 2026 maximum of $72,000 (
            <ExternalLink href={SOURCES.sep}>IRS</ExternalLink>).
          </>
        ),
      },
      {
        title: "Solo 401(k) contributions",
        note: (
          <>
            Up to $24,500 of your own contributions in 2026, plus
            profit-sharing contributions, within the same overall $72,000 limit
            (<ExternalLink href={SOURCES.retirement}>IRS</ExternalLink>). Higher
            if you&apos;re 50 or older.
          </>
        ),
      },
    ],
  },
  {
    heading: "Taken on your return automatically",
    items: [
      {
        title: "Half of your self-employment tax",
        note: "Reduces your income tax. Your tax software or CPA handles it.",
      },
      {
        title: "Qualified business income (QBI) deduction",
        note: "Up to 20% of your business profit for most agents, with limits at higher incomes.",
      },
    ],
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What is the biggest tax deduction for real estate agents?",
    answer:
      "For many agents it's car expenses, because so much of the job is driving. At 72.5¢ to 76¢ per mile in 2026, 15,000 business miles is worth over $10,000 in deductions. That only holds up with a mileage log.",
  },
  {
    question: "Can I deduct clothes I wear to showings?",
    answer:
      "Usually not. Clothing is only deductible if your work requires it and it isn't suitable for everyday wear, like a uniform. Regular business attire doesn't qualify, even if you only wear it for work.",
  },
  {
    question: "Do I need receipts for everything?",
    answer:
      "Keep records for every expense, and for car expenses keep a log with the date, miles, and business purpose of each trip. Bank and card statements help, but they don't show the business purpose on their own.",
  },
  {
    question: "Are deductions taken before or after my brokerage split?",
    answer:
      "If your 1099 shows your full commission before the split, the share paid to your brokerage is a deductible expense. If it shows only your share, there's nothing more to deduct for the split. Check how your brokerage reports it.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  mainEntityOfPage: `https://www.omarodehcpa.com${PATH}`,
  image: "https://www.omarodehcpa.com/opengraph-image.png",
  author: { "@type": "Organization", name: "Omar Odeh, CPA", url: "https://www.omarodehcpa.com" },
  publisher: { "@type": "Organization", name: "Omar Odeh, CPA", url: "https://www.omarodehcpa.com" },
};

export default function TaxDeductionsChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <header className="bg-white pt-16 pb-10 sm:pt-20 print:pt-0">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Free Checklist
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {TITLE}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              As a 1099 agent, every legitimate business expense you track
              lowers both your income tax and your self-employment tax. Check
              off what applies to you, then print it or bring it to your tax
              appointment.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <PrintButton />
              <span className="text-sm text-slate-500 print:hidden">
                Updated November 3, 2026
              </span>
            </div>
          </div>
        </header>

        <div className="bg-white pb-20 print:pb-0">
          <div className="mx-auto max-w-3xl space-y-10 px-6">
            {groups.map((group, gi) => (
              <fieldset key={group.heading} className="break-inside-avoid">
                <legend className="text-xl font-semibold text-slate-900">{group.heading}</legend>
                <ul className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                  {group.items.map((item, ii) => {
                    const id = `deduction-${gi}-${ii}`;
                    return (
                      <li key={item.title} className="flex gap-4 p-4">
                        <input
                          id={id}
                          type="checkbox"
                          aria-describedby={`${id}-note`}
                          className="mt-1 h-4 w-4 flex-none cursor-pointer accent-amber-700"
                        />
                        <div>
                          <label htmlFor={id} className="block cursor-pointer font-medium text-slate-900">
                            {item.title}
                          </label>
                          <p id={`${id}-note`} className="mt-1 text-sm leading-relaxed text-slate-600">
                            {item.note}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </fieldset>
            ))}

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-lg font-semibold text-slate-900">Records to keep</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700">
                <li>A mileage log with the date, miles, and business purpose of each trip.</li>
                <li>Receipts for every expense, especially gifts, meals, and anything paid in cash.</li>
                <li>Your 1099s, plus your brokerage&apos;s year-end statement of fees and splits.</li>
                <li>Square footage of your home office and of your whole home.</li>
              </ul>
              <p className="mt-3 text-sm text-slate-600">
                Rules for car, gift, and meal records are in{" "}
                <ExternalLink href={SOURCES.p463}>IRS Publication 463</ExternalLink>.
              </p>
            </section>

            <p className="text-base leading-relaxed text-slate-600 print:hidden">
              Deductions lower what you owe, but you still need to pay during
              the year. Use our{" "}
              <Link href="/real-estate/resources/quarterly-tax-calculator" className={linkClasses}>
                real estate agent tax calculator
              </Link>{" "}
              to see how much of each commission check to set aside.
            </p>

            <p className="text-xs leading-relaxed text-slate-500">
              Educational checklist, not tax advice. Rules have limits and
              exceptions; confirm what applies to you with a tax professional.
              2026 figures from the IRS.
            </p>
          </div>
        </div>
      </article>

      <div className="print:hidden">
        <Faq items={faqItems} />
        <CtaSection
          heading="Want a CPA to find every deduction for you?"
          description="We'll review your year, catch what's missing, and set you up so next year's records are easy."
          ctaHref="/real-estate/contact"
          ctaLabel="Contact Us"
        />
      </div>
    </>
  );
}
