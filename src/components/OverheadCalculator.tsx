"use client";

import { useId, useState } from "react";

interface Category {
  key: string;
  label: string;
  hint: string;
  min: number;
  max: number;
}

// Blue Cloud CPA, "Dental Practice Bookkeeping: Overhead Benchmarks" (2026).
const CATEGORIES: Category[] = [
  {
    key: "staff",
    label: "Staff",
    hint: "Wages, payroll taxes, and benefits for your team, including any associate dentists on payroll. Leave out your own pay as the owner.",
    min: 25,
    max: 30,
  },
  {
    key: "facility",
    label: "Facility",
    hint: "Rent or mortgage, utilities, repairs, and maintenance.",
    min: 5,
    max: 8,
  },
  {
    key: "supplies",
    label: "Dental supplies",
    hint: "Clinical and dental supplies.",
    min: 5,
    max: 8,
  },
  {
    key: "lab",
    label: "Lab fees",
    hint: "Outside dental lab costs.",
    min: 8,
    max: 12,
  },
  {
    key: "other",
    label: "Everything else",
    hint: "Marketing, software, insurance, office supplies, professional fees, equipment leases.",
    min: 8,
    max: 12,
  },
];

const TOTAL_MIN = 55;
const TOTAL_MAX = 65;
const RED_FLAG = 70;

type Status = "below" | "typical" | "above" | "redflag";

const STATUS_STYLES: Record<Status, string> = {
  below: "bg-sky-50 text-sky-800 ring-sky-200",
  typical: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  above: "bg-amber-50 text-amber-900 ring-amber-200",
  redflag: "bg-red-50 text-red-800 ring-red-200",
};

const STATUS_LABELS: Record<Status, string> = {
  below: "Below typical",
  typical: "Typical",
  above: "Above typical",
  redflag: "Well above typical",
};

function rangeStatus(pct: number, min: number, max: number): Status {
  if (pct < min) return "below";
  if (pct > max) return "above";
  return "typical";
}

function parseAmount(value: string) {
  const n = Number(value.replace(/[$,\s]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${STATUS_STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}

const inputClasses =
  "w-full rounded-md border border-slate-300 bg-white py-2.5 pl-7 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20";

export default function OverheadCalculator() {
  const idPrefix = useId();
  const [collections, setCollections] = useState("");
  const [values, setValues] = useState<Record<string, string>>({});

  const collectionsNum = parseAmount(collections);
  const amounts = CATEGORIES.map((c) => parseAmount(values[c.key] ?? ""));
  const total = amounts.reduce((sum, a) => sum + a, 0);
  const hasResults = collectionsNum > 0 && total > 0;

  const totalPct = hasResults ? (total / collectionsNum) * 100 : 0;
  const totalStatus: Status =
    totalPct > RED_FLAG
      ? "redflag"
      : rangeStatus(totalPct, TOTAL_MIN, TOTAL_MAX);
  const remaining = collectionsNum - total;

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <form
        className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        onSubmit={(e) => e.preventDefault()}
        aria-describedby={`${idPrefix}-period`}
      >
        <p id={`${idPrefix}-period`} className="text-sm text-slate-600">
          Use the same time period for every number: one month, or one year.
        </p>

        <div>
          <label htmlFor={`${idPrefix}-collections`} className="text-sm font-semibold text-slate-900">
            Collections
          </label>
          <p id={`${idPrefix}-collections-hint`} className="mt-1 text-xs text-slate-500">
            Money actually received from patients and insurance (not production).
          </p>
          <div className="relative mt-2">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-slate-400">$</span>
            <input
              id={`${idPrefix}-collections`}
              inputMode="decimal"
              autoComplete="off"
              placeholder="0"
              value={collections}
              onChange={(e) => setCollections(e.target.value)}
              aria-describedby={`${idPrefix}-collections-hint`}
              className={inputClasses}
            />
          </div>
        </div>

        <fieldset className="space-y-5 border-t border-slate-200 pt-5">
          <legend className="text-sm font-semibold text-slate-900">Expenses</legend>
          {CATEGORIES.map((c) => (
            <div key={c.key}>
              <label htmlFor={`${idPrefix}-${c.key}`} className="text-sm font-medium text-slate-800">
                {c.label}
              </label>
              <p id={`${idPrefix}-${c.key}-hint`} className="mt-1 text-xs text-slate-500">
                {c.hint}
              </p>
              <div className="relative mt-2">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-slate-400">$</span>
                <input
                  id={`${idPrefix}-${c.key}`}
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="0"
                  value={values[c.key] ?? ""}
                  onChange={(e) => setValues((prev) => ({ ...prev, [c.key]: e.target.value }))}
                  aria-describedby={`${idPrefix}-${c.key}-hint`}
                  className={inputClasses}
                />
              </div>
            </div>
          ))}
        </fieldset>
      </form>

      <section
        aria-live="polite"
        aria-label="Your overhead results"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:sticky lg:top-24 lg:self-start"
      >
        <h2 className="text-lg font-semibold text-slate-900">Your results</h2>

        {!hasResults ? (
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Enter your collections and at least one expense to see your
            overhead percentage, compared category by category with typical
            dental clinic benchmarks.
          </p>
        ) : (
          <>
            <div className="mt-5 rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-sm text-slate-600">Total overhead</p>
              <p className="mt-1 text-4xl font-semibold tracking-tight text-slate-900">
                {totalPct.toFixed(1)}%
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <StatusBadge status={totalStatus} />
                <span className="text-xs text-slate-500">
                  Typical: {TOTAL_MIN}–{TOTAL_MAX}% of collections
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-700">
                {remaining >= 0 ? (
                  <>
                    <strong>{money.format(remaining)}</strong> (
                    {(100 - totalPct).toFixed(1)}%) is left for the owner
                    dentist&apos;s pay and profit.
                  </>
                ) : (
                  <>
                    Expenses exceed collections by{" "}
                    <strong>{money.format(-remaining)}</strong>.
                  </>
                )}
              </p>
            </div>

            <table className="mt-6 w-full text-left text-sm">
              <caption className="sr-only">Overhead by category compared with typical ranges</caption>
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                  <th scope="col" className="py-2 font-semibold">Category</th>
                  <th scope="col" className="py-2 font-semibold">Yours</th>
                  <th scope="col" className="py-2 font-semibold">Typical</th>
                  <th scope="col" className="py-2 font-semibold"><span className="sr-only">Status</span></th>
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map((c, i) => {
                  const pct = (amounts[i] / collectionsNum) * 100;
                  return (
                    <tr key={c.key} className="border-b border-slate-200 last:border-0">
                      <th scope="row" className="py-3 pr-2 font-medium text-slate-800">{c.label}</th>
                      <td className="py-3 pr-2 text-slate-900">{amounts[i] > 0 ? `${pct.toFixed(1)}%` : "—"}</td>
                      <td className="py-3 pr-2 text-slate-500">{c.min}–{c.max}%</td>
                      <td className="py-3 text-right">
                        {amounts[i] > 0 && <StatusBadge status={rangeStatus(pct, c.min, c.max)} />}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {totalStatus === "redflag" && (
              <p className="mt-5 rounded-lg bg-red-50 p-4 text-sm text-red-800 ring-1 ring-red-200">
                Overhead above {RED_FLAG}% usually points to a structural
                problem worth finding at the account level, such as staffing,
                lab costs, or rent.
              </p>
            )}
          </>
        )}

        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          Educational estimate only, not financial or tax advice. Benchmarks
          vary by specialty, location, and how expenses are categorized.
        </p>
      </section>
    </div>
  );
}
