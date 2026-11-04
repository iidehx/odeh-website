import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import ExternalLink, { linkClasses } from "@/components/ExternalLink";

const PATH = "/therapy/resources/aba-payroll-bookkeeping";
const TITLE = "ABA Practice Bookkeeping: What an RBT Hour Really Costs";
const DESCRIPTION =
  "How to track RBT and BCBA payroll in your ABA practice's books, with a worked example of the true cost of each billable hour and what changes your margin.";

export const metadata: Metadata = {
  title: "ABA Practice Bookkeeping: RBT and BCBA Payroll Costs | Omar Odeh, CPA",
  description: DESCRIPTION,
  keywords: [
    "ABA practice bookkeeping",
    "ABA payroll",
    "RBT payroll cost",
    "ABA practice profit margin",
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
  bacb: "https://www.bacb.com/rbt/",
  dolHoursWorked: "https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked",
  dolOvertime: "https://www.dol.gov/agencies/whd/overtime",
  irsEmploymentTaxes:
    "https://www.irs.gov/taxtopics/tc751",
  irsWorkerStatus:
    "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee",
};

// A fictional RBT's week. Rates and wages are illustrative only.
const EMPLOYER_FICA = 0.0765; // Social Security 6.2% + Medicare 1.45%
const SUPERVISION_SHARE = 0.05; // BACB minimum: 5% of service hours
const rbtWage = 24;
const bcbaWage = 45;
const paidHours = 30;
const reimbursementPerHour = 56;

function weekCost(billableHours: number) {
  const rbtCost = paidHours * rbtWage * (1 + EMPLOYER_FICA);
  const supervisionCost = billableHours * SUPERVISION_SHARE * bcbaWage * (1 + EMPLOYER_FICA);
  const costPerBillable = (rbtCost + supervisionCost) / billableHours;
  const margin = reimbursementPerHour - costPerBillable;
  return {
    rbtCost,
    supervisionCost,
    rbtPerBillable: rbtCost / billableHours,
    supervisionPerBillable: supervisionCost / billableHours,
    costPerBillable,
    margin,
    marginPct: margin / reimbursementPerHour,
  };
}

const base = weekCost(24);
const lower = weekCost(21);

const money2 = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pct = (n: number) => `${Math.round(n * 100)}%`;

const accounts = [
  { name: "RBT direct service wages", what: "Hours spent in billable sessions." },
  {
    name: "RBT non-billable wages",
    what: "Drive time between clients, paid cancellations, training, documentation, and meetings.",
  },
  { name: "BCBA clinical wages", what: "Supervision, assessments, treatment planning, parent training." },
  { name: "Administrative wages", what: "Intake, scheduling, billing, and office staff." },
  { name: "Employer payroll taxes", what: "Social Security, Medicare, and federal and state unemployment taxes." },
  { name: "Benefits and workers' comp", what: "Health insurance, retirement match, and workers' compensation." },
];

const metrics = [
  {
    name: "Billable utilization",
    how: "Billable hours ÷ paid hours, for each RBT.",
    why: "The single biggest driver of your margin.",
  },
  {
    name: "Cost per billable hour",
    how: "Total RBT and supervision payroll ÷ billable hours.",
    why: "Compare it with what each payer pays.",
  },
  {
    name: "Revenue per billable hour, by payer",
    how: "Collections for each payer ÷ hours billed to them.",
    why: "Shows which contracts actually make money.",
  },
  {
    name: "Authorization use",
    how: "Units delivered ÷ units authorized, per client.",
    why: "Underuse is lost revenue; overuse is unpaid work.",
  },
  {
    name: "Supervision percentage",
    how: "BCBA supervision hours ÷ RBT service hours.",
    why: "Must stay at or above the 5% minimum.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Should RBTs be W-2 employees or 1099 contractors?",
    answer:
      "When a practice sets schedules, decides how sessions are run, and provides supervision, RBTs usually meet the IRS's definition of an employee. Misclassifying employees as contractors can mean back taxes, penalties, and unpaid overtime claims. Review your setup with a CPA or employment attorney.",
  },
  {
    question: "Do I have to pay RBTs for drive time between clients?",
    answer:
      "For hourly employees, generally yes. The Department of Labor counts travel from one job site to another during the workday as hours worked, and those hours count toward overtime.",
  },
  {
    question: "Is BCBA supervision billable?",
    answer:
      "It depends on the payer and what happens in the session. Some supervision with the client present may be billable, often under code 97155, while other supervision time isn't. Track both separately so you know your real cost.",
  },
  {
    question: "What's a good billable utilization rate for RBTs?",
    answer:
      "There's no single standard, because it depends on your scheduling model and travel. What matters is tracking it per RBT every month and knowing where your break-even point is. The worked example on this page shows how quickly margin falls as utilization drops.",
  },
];

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
      {children}
    </h2>
  );
}

function Row({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <tr className="border-b border-slate-200 last:border-0">
      <th scope="row" className={`py-3 pr-4 ${strong ? "font-semibold text-slate-900" : "font-medium text-slate-800"}`}>
        {label}
      </th>
      <td className={`py-3 text-right ${strong ? "font-semibold text-slate-900" : "text-slate-900"}`}>{value}</td>
    </tr>
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

export default function AbaPayrollBookkeepingPage() {
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
              ABA &amp; Therapy Practice Finances
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
                In an ABA practice, payroll is the biggest cost, and you pay for
                far more hours than you can bill: drive time, cancellations,
                training, and BCBA supervision. Good bookkeeping splits billable
                from non-billable payroll, so you can see your{" "}
                <strong>true cost per billable hour</strong> and compare it with
                what each payer pays you.
              </p>
            </div>

            <H2>Why paid hours and billable hours don&apos;t match</H2>
            <p className="mt-6">
              Insurers pay for direct service time, usually billed in
              15-minute units under codes like 97153 for RBT sessions. Your
              RBTs get paid for much more than that:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-slate-900">Drive time between clients.</strong>{" "}
                The Department of Labor counts it as hours worked (
                <ExternalLink href={SOURCES.dolHoursWorked}>Fact Sheet #22</ExternalLink>
                ), including toward overtime.
              </li>
              <li>
                <strong className="text-slate-900">Cancellations.</strong> If
                you pay RBTs for sessions that get canceled, that time has no
                matching revenue.
              </li>
              <li>
                <strong className="text-slate-900">Training, documentation, and meetings.</strong>{" "}
                Necessary, and almost never billable.
              </li>
              <li>
                <strong className="text-slate-900">Supervision.</strong> The
                BACB requires RBTs to be supervised for at least 5% of their
                service hours each month (
                <ExternalLink href={SOURCES.bacb}>BACB</ExternalLink>). Depending
                on the payer, some of that BCBA time is billable and some
                isn&apos;t.
              </li>
            </ul>

            <H2>Worked example: one RBT&apos;s week</H2>
            <p className="mt-6">
              The numbers below are fictional, but the math is the same for any
              practice. An RBT earns {money2(rbtWage)} an hour and works{" "}
              {paidHours} paid hours this week. Of those, 24 are billable
              sessions. The payer reimburses {money2(reimbursementPerHour)} per
              hour of 97153. Their supervising BCBA earns {money2(bcbaWage)} an
              hour, and in this example none of the supervision is billed.
            </p>
            <table className="mt-6 w-full text-left text-sm">
              <caption className="sr-only">Cost per billable RBT hour at 80% utilization</caption>
              <tbody>
                <Row label="Billable utilization" value={`24 of ${paidHours} hours (80%)`} />
                <Row
                  label="RBT wages plus 7.65% employer Social Security and Medicare"
                  value={money2(base.rbtCost)}
                />
                <Row label="RBT cost per billable hour" value={money2(base.rbtPerBillable)} />
                <Row
                  label="BCBA supervision (5% of billable hours) per billable hour"
                  value={money2(base.supervisionPerBillable)}
                />
                <Row label="True cost per billable hour" value={money2(base.costPerBillable)} strong />
                <Row label="Reimbursement per hour" value={money2(reimbursementPerHour)} />
                <Row
                  label="Left to cover rent, admin, and profit"
                  value={`${money2(base.margin)} (${pct(base.marginPct)})`}
                  strong
                />
              </tbody>
            </table>
            <p className="mt-4">
              Notice that the RBT&apos;s {money2(rbtWage)} wage really costs{" "}
              {money2(base.costPerBillable)} per hour you can bill, before
              unemployment taxes, workers&apos; comp, or benefits, which add
              more. Employer Social Security and Medicare rates are from the{" "}
              <ExternalLink href={SOURCES.irsEmploymentTaxes}>IRS</ExternalLink>.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              Now drop utilization to 70%
            </h3>
            <p className="mt-4">
              Same RBT, same {paidHours} paid hours, but two extra
              cancellations and more drive time leave 21 billable hours instead
              of 24.
            </p>
            <table className="mt-4 w-full text-left text-sm">
              <caption className="sr-only">Cost per billable RBT hour at 80% compared with 70% utilization</caption>
              <thead>
                <tr className="border-b border-slate-300 text-xs uppercase tracking-wide text-slate-500">
                  <th scope="col" className="py-2 pr-4 font-semibold">Utilization</th>
                  <th scope="col" className="py-2 pr-4 text-right font-semibold">Cost per billable hour</th>
                  <th scope="col" className="py-2 text-right font-semibold">Left over</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="py-3 pr-4 font-medium text-slate-800">80% (24 hours)</th>
                  <td className="py-3 pr-4 text-right text-slate-900">{money2(base.costPerBillable)}</td>
                  <td className="py-3 text-right text-slate-900">{pct(base.marginPct)}</td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 pr-4 font-medium text-slate-800">70% (21 hours)</th>
                  <td className="py-3 pr-4 text-right text-slate-900">{money2(lower.costPerBillable)}</td>
                  <td className="py-3 text-right text-slate-900">{pct(lower.marginPct)}</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4">
              Three fewer billable hours a week cut what&apos;s left over from{" "}
              {pct(base.marginPct)} to {pct(lower.marginPct)} of every
              reimbursed hour, with no change in wages or rates. That&apos;s why
              utilization belongs in your monthly numbers, not just your
              schedule.
            </p>

            <H2>How to set up payroll in your books</H2>
            <p className="mt-6">
              Most bookkeeping lumps all payroll into one line. Splitting it
              into these accounts is what makes the math above possible every
              month:
            </p>
            <table className="mt-6 w-full text-left text-sm">
              <caption className="sr-only">Suggested payroll accounts for an ABA practice</caption>
              <thead>
                <tr className="border-b border-slate-300 text-xs uppercase tracking-wide text-slate-500">
                  <th scope="col" className="py-2 pr-4 font-semibold">Account</th>
                  <th scope="col" className="py-2 font-semibold">What goes in it</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((a) => (
                  <tr key={a.name} className="border-b border-slate-200">
                    <th scope="row" className="py-3 pr-4 align-top font-medium text-slate-800">{a.name}</th>
                    <td className="py-3 text-slate-700">{a.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <H2>Five numbers to review every month</H2>
            <div className="mt-6 space-y-4">
              {metrics.map((m) => (
                <div key={m.name} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">{m.name}</h3>
                  <p className="mt-1 text-sm">
                    <span className="font-medium text-slate-800">How: </span>
                    {m.how}
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-medium text-slate-800">Why: </span>
                    {m.why}
                  </p>
                </div>
              ))}
            </div>

            <H2>Payroll rules that catch ABA practices</H2>
            <ul className="mt-6 list-disc space-y-3 pl-5">
              <li>
                <strong className="text-slate-900">Overtime.</strong> Hourly
                RBTs are generally owed time and a half for hours over 40 in a
                workweek (
                <ExternalLink href={SOURCES.dolOvertime}>Department of Labor</ExternalLink>
                ), and drive time counts toward the 40.
              </li>
              <li>
                <strong className="text-slate-900">Worker classification.</strong>{" "}
                Paying RBTs as 1099 contractors when they work like employees
                is risky. See the{" "}
                <ExternalLink href={SOURCES.irsWorkerStatus}>
                  IRS guide to employees vs. contractors
                </ExternalLink>
                .
              </li>
              <li>
                <strong className="text-slate-900">Work past authorizations.</strong>{" "}
                Sessions delivered beyond a client&apos;s authorized units, or
                after an authorization expires, still cost payroll but may never
                be paid.
              </li>
            </ul>

            <p className="mt-10">
              Payroll goes out every pay period, but insurers pay weeks or
              months later. To see how much cash that gap ties up, try our{" "}
              <Link href="/therapy/resources/aba-cash-reserve-calculator" className={linkClasses}>
                ABA cash reserve calculator
              </Link>
              , or read about our{" "}
              <Link href="/therapy" className={linkClasses}>
                ABA and therapy practice accounting services
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <Faq items={faqItems} />

      <CtaSection
        heading="Want to know your real cost per billable hour?"
        description="We'll set up your books to track it, and review it with you every month in plain English."
        ctaHref="/therapy/contact"
        ctaLabel="Contact Us"
      />
    </>
  );
}
