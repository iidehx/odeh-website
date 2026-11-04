import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import ExternalLink, { linkClasses } from "@/components/ExternalLink";

const PATH = "/resources/fractional-cfo";
const TITLE = "What Is a Fractional CFO, and When Does a Small Business Need One?";
const DESCRIPTION =
  "What a fractional CFO does, what it costs in 2026 compared with a full-time CFO, and the signs your practice or business is ready for one.";

export const metadata: Metadata = {
  title: "What Is a Fractional CFO? When a Small Business Needs One | Omar Odeh, CPA",
  description: DESCRIPTION,
  keywords: [
    "fractional CFO",
    "fractional CFO for small business",
    "fractional CFO cost",
    "part-time CFO",
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
  mbAccounting: "https://mbaccountinggroup.com/fractional-cfo-cost-small-business/",
  blsFinancialManagers: "https://www.bls.gov/ooh/management/financial-managers.htm",
};

const roles = [
  {
    role: "Bookkeeper",
    question: "What happened?",
    work: "Records transactions, reconciles accounts, runs payroll.",
  },
  {
    role: "CPA",
    question: "What do we owe, and how do we owe less?",
    work: "Files taxes, plans ahead for them, reviews the financial statements.",
  },
  {
    role: "Fractional CFO",
    question: "What should we do next?",
    work: "Forecasts, plans cash, tests big decisions, and talks to lenders.",
  },
];

const pricing = [
  { tier: "Light: 5 to 10 hours a month", cost: "$2,500 – $4,500 / month" },
  { tier: "Standard: 10 to 20 hours a month", cost: "$4,000 – $8,000 / month" },
  { tier: "Heavy: 20 to 40 hours a month", cost: "$7,500 – $12,000+ / month" },
  { tier: "Hourly, when offered", cost: "$150 – $400 / hour" },
];

const triggers = [
  {
    title: "You're opening a second location",
    body: "A new location can drain cash for months before it pays for itself. A CFO models how long, and how much cash you need in the meantime.",
  },
  {
    title: "You're applying for a loan or financing",
    body: "Lenders want forecasts, not just last year's tax return. A CFO builds the projections and answers the lender's questions.",
  },
  {
    title: "You're growing, but cash is always tight",
    body: "Revenue is up, yet payroll still feels close every pay period. That's usually a timing problem a CFO can map and fix.",
  },
  {
    title: "You're buying or selling a practice",
    body: "Valuation, deal structure, and what the business can really afford to pay are CFO questions.",
  },
  {
    title: "You're hiring someone senior",
    body: "An associate, a clinical director, or another agent on your team is a big fixed cost. A CFO checks it against your numbers first.",
  },
  {
    title: "You get reports but can't act on them",
    body: "If the monthly statements show up and nothing changes, you're missing the person who turns numbers into decisions.",
  },
];

const examples = [
  {
    industry: "Dental clinics",
    text: "Deciding between new equipment and an associate, planning a second location, or preparing for an associate buy-in.",
    href: "/dental",
    linkLabel: "Dental CPA and bookkeeping",
  },
  {
    industry: "ABA and therapy practices",
    text: "Planning cash for slow insurance payers, weighing which payer contracts to grow, and staffing up without running short on payroll.",
    href: "/therapy",
    linkLabel: "Therapy practice accounting",
  },
  {
    industry: "Real estate businesses",
    text: "Turning uneven commission income into a steady plan, deciding when to build a team, and modeling the move to your own brokerage.",
    href: "/real-estate",
    linkLabel: "Real estate accounting",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "What does a fractional CFO actually do?",
    answer:
      "The same work as a full-time CFO, part-time: forecasting, cash planning, budgeting, reporting on the numbers that matter, and helping with big decisions like financing, hiring, and expansion.",
  },
  {
    question: "How is a fractional CFO different from a CPA?",
    answer:
      "A CPA focuses on accuracy and taxes: getting the numbers right and paying what you owe, no more. A fractional CFO focuses on the future: what the numbers mean and what to do next. Some CPAs offer both.",
  },
  {
    question: "Is a fractional CFO worth it for a small business?",
    answer:
      "It depends on what's at stake. If you're facing a decision worth far more than a few months of fees, like a new location or a loan, the answer is usually yes. If your finances are simple and stable, a good bookkeeper and CPA may be enough for now.",
  },
  {
    question: "Do I need clean books before hiring a fractional CFO?",
    answer:
      "Yes. Forecasts are only as good as the numbers underneath them. If your books are behind, the first step is catching them up, which many firms can do as part of the engagement.",
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
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  mainEntityOfPage: `https://www.omarodehcpa.com${PATH}`,
  image: "https://www.omarodehcpa.com/opengraph-image.png",
  author: { "@type": "Organization", name: "Omar Odeh, CPA", url: "https://www.omarodehcpa.com" },
  publisher: { "@type": "Organization", name: "Omar Odeh, CPA", url: "https://www.omarodehcpa.com" },
};

export default function FractionalCfoPage() {
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
            <p className="mt-4 text-sm text-slate-500">Updated November 3, 2026</p>
          </div>
        </header>

        <div className="bg-white pb-20">
          <div className="mx-auto max-w-3xl px-6 text-base leading-relaxed text-slate-600">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">
                The short answer
              </p>
              <p className="mt-2 text-slate-800">
                A <strong>fractional CFO</strong> is a part-time chief financial
                officer: an experienced finance lead who works with your
                business a set number of hours each month. You get forecasting,
                cash planning, and help with big decisions for{" "}
                <strong>a few thousand dollars a month</strong> instead of a
                six-figure salary. Most small businesses need one when a big
                decision is coming, or when growth keeps outrunning cash.
              </p>
            </div>

            <H2>Bookkeeper, CPA, or CFO?</H2>
            <p className="mt-6">
              Each role answers a different question about your money:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {roles.map((r) => (
                <div key={r.role} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">{r.role}</h3>
                  <p className="mt-1 text-sm font-medium text-amber-800">&ldquo;{r.question}&rdquo;</p>
                  <p className="mt-2 text-sm">{r.work}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              For the first two, see{" "}
              <Link href="/resources/bookkeeper-vs-cpa" className={linkClasses}>
                bookkeeper vs. CPA: which does your business need?
              </Link>
            </p>

            <H2>What a fractional CFO costs</H2>
            <p className="mt-6">
              Most fractional CFOs charge a monthly retainer based on how many
              hours they work with you.
            </p>
            <table className="mt-6 w-full text-left text-sm">
              <caption className="sr-only">Typical 2026 fractional CFO pricing</caption>
              <thead>
                <tr className="border-b border-slate-300 text-xs uppercase tracking-wide text-slate-500">
                  <th scope="col" className="py-2 pr-4 font-semibold">Engagement</th>
                  <th scope="col" className="py-2 font-semibold">Typical cost</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((p) => (
                  <tr key={p.tier} className="border-b border-slate-200">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-800">{p.tier}</th>
                    <td className="py-3 text-slate-900">{p.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-slate-500">
              Source:{" "}
              <ExternalLink href={SOURCES.mbAccounting}>
                MB Accounting Group, fractional CFO cost guide (April 2026)
              </ExternalLink>
              .
            </p>
            <p className="mt-6">
              Compare that with hiring someone full-time. The median salary for
              financial managers was $166,570 in 2025, according to the{" "}
              <ExternalLink href={SOURCES.blsFinancialManagers}>
                Bureau of Labor Statistics
              </ExternalLink>
              , before payroll taxes, benefits, and recruiting costs. An
              experienced CFO typically costs more. For a business that needs
              strategic help a few days a month, paying a full salary rarely
              makes sense.
            </p>

            <H2>Six signs you&apos;re ready for one</H2>
            <div className="mt-6 space-y-4">
              {triggers.map((t) => (
                <div key={t.title}>
                  <h3 className="font-semibold text-slate-900">{t.title}</h3>
                  <p className="mt-1">{t.body}</p>
                </div>
              ))}
            </div>

            <H2>When you probably don&apos;t need one yet</H2>
            <p className="mt-6">
              If your business is stable, your books are current, and nothing
              big is on the horizon, a good bookkeeper and a CPA who does
              year-round tax planning may be all you need. A fractional CFO
              earns their fee when there&apos;s a decision on the table that&apos;s
              worth far more than the cost of getting it right.
            </p>

            <H2>What it looks like in three industries</H2>
            <div className="mt-6 space-y-5">
              {examples.map((e) => (
                <div key={e.industry}>
                  <h3 className="font-semibold text-slate-900">{e.industry}</h3>
                  <p className="mt-1">
                    {e.text}{" "}
                    <Link href={e.href} className={linkClasses}>
                      {e.linkLabel}
                    </Link>
                  </p>
                </div>
              ))}
            </div>

            <H2>Questions to ask before you hire one</H2>
            <ol className="mt-6 list-decimal space-y-2 pl-5">
              <li>Have you worked with businesses like mine, in my industry?</li>
              <li>How many hours a month are included, and what happens if I need more?</li>
              <li>What will I get each month: a forecast, a report, a meeting?</li>
              <li>Do you work with my current bookkeeper and CPA, or replace them?</li>
              <li>Can we start with a single project before a monthly retainer?</li>
            </ol>

            <H2>How we can help</H2>
            <p className="mt-6">
              Omar Odeh, CPA offers fractional CFO services alongside
              bookkeeping and tax work, so the person planning your next move
              already knows your numbers. Everything is handled online, for
              businesses anywhere in the US.
            </p>
          </div>
        </div>
      </article>

      <Faq items={faqItems} />

      <CtaSection
        heading="Have a big decision coming up?"
        description="Pick your industry and tell us what you're weighing. We'll follow up to talk it through."
        ctas={[
          { href: "/dental/contact", label: "Dental Clinics" },
          { href: "/therapy/contact", label: "Therapy Practices" },
          { href: "/real-estate/contact", label: "Real Estate Businesses" },
        ]}
      />
    </>
  );
}
