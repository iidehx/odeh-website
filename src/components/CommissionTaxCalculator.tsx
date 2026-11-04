"use client";

import { useId, useState } from "react";

type FilingStatus = "single" | "joint" | "head";

interface Bracket {
  upTo: number;
  rate: number;
}

// 2026 figures: IRS Rev. Proc. 2025-32 (brackets, standard deduction,
// section 199A thresholds) and SSA (Social Security wage base).
const BRACKETS: Record<FilingStatus, Bracket[]> = {
  single: [
    { upTo: 12_400, rate: 0.1 },
    { upTo: 50_400, rate: 0.12 },
    { upTo: 105_700, rate: 0.22 },
    { upTo: 201_775, rate: 0.24 },
    { upTo: 256_225, rate: 0.32 },
    { upTo: 640_600, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  joint: [
    { upTo: 24_800, rate: 0.1 },
    { upTo: 100_800, rate: 0.12 },
    { upTo: 211_400, rate: 0.22 },
    { upTo: 403_550, rate: 0.24 },
    { upTo: 512_450, rate: 0.32 },
    { upTo: 768_700, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
  head: [
    { upTo: 17_700, rate: 0.1 },
    { upTo: 67_450, rate: 0.12 },
    { upTo: 105_700, rate: 0.22 },
    { upTo: 201_750, rate: 0.24 },
    { upTo: 256_200, rate: 0.32 },
    { upTo: 640_600, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 },
  ],
};

const STANDARD_DEDUCTION: Record<FilingStatus, number> = {
  single: 16_100,
  joint: 32_200,
  head: 24_150,
};

const QBI_THRESHOLD: Record<FilingStatus, number> = {
  single: 201_750,
  joint: 403_500,
  head: 201_750,
};

const QBI_PHASE_IN: Record<FilingStatus, number> = {
  single: 75_000,
  joint: 150_000,
  head: 75_000,
};

const ADDITIONAL_MEDICARE_THRESHOLD: Record<FilingStatus, number> = {
  single: 200_000,
  joint: 250_000,
  head: 200_000,
};

const SS_WAGE_BASE = 184_500;

const STATUS_OPTIONS: { value: FilingStatus; label: string }[] = [
  { value: "single", label: "Single" },
  { value: "joint", label: "Married filing jointly" },
  { value: "head", label: "Head of household" },
];

const DEADLINES = [
  { quarter: "1st payment", covers: "Jan 1 – Mar 31, 2026", due: "April 15, 2026" },
  { quarter: "2nd payment", covers: "Apr 1 – May 31, 2026", due: "June 15, 2026" },
  { quarter: "3rd payment", covers: "Jun 1 – Aug 31, 2026", due: "September 15, 2026" },
  { quarter: "4th payment", covers: "Sep 1 – Dec 31, 2026", due: "January 15, 2027" },
];

function incomeTax(taxable: number, status: FilingStatus) {
  let tax = 0;
  let lower = 0;
  for (const { upTo, rate } of BRACKETS[status]) {
    if (taxable <= lower) break;
    tax += (Math.min(taxable, upTo) - lower) * rate;
    lower = upTo;
  }
  return tax;
}

function estimate(
  status: FilingStatus,
  commissions: number,
  expenses: number,
  spouseWages: number,
  stateRate: number,
) {
  const profit = Math.max(0, commissions - expenses);

  // Self-employment tax (Schedule SE). No tax below $400 of net earnings.
  const seEarnings = profit * 0.9235;
  const hasSe = seEarnings >= 400;
  const socialSecurity = hasSe ? Math.min(seEarnings, SS_WAGE_BASE) * 0.124 : 0;
  const medicare = hasSe ? seEarnings * 0.029 : 0;
  const additionalMedicare = hasSe
    ? Math.max(
        0,
        seEarnings -
          Math.max(0, ADDITIONAL_MEDICARE_THRESHOLD[status] - spouseWages),
      ) * 0.009
    : 0;
  const halfSeDeduction = (socialSecurity + medicare) / 2;

  // Federal income tax with and without the commission income, so the
  // estimate only counts the tax the commissions add.
  const std = STANDARD_DEDUCTION[status];
  const withoutTax = incomeTax(Math.max(0, spouseWages - std), status);

  const beforeQbi = Math.max(0, profit + spouseWages - halfSeDeduction - std);
  const qbi = Math.max(0, profit - halfSeDeduction);
  // Real estate agents aren't a "specified service" business, but with no
  // employees or property the deduction phases out above the threshold.
  const over = beforeQbi - QBI_THRESHOLD[status];
  const phaseFactor = over <= 0 ? 1 : Math.max(0, 1 - over / QBI_PHASE_IN[status]);
  const qbiDeduction = Math.min(qbi * 0.2 * phaseFactor, beforeQbi * 0.2);
  const withTax = incomeTax(Math.max(0, beforeQbi - qbiDeduction), status);

  const selfEmployment = socialSecurity + medicare + additionalMedicare;
  const federal = Math.max(0, withTax - withoutTax);
  const state = profit * (stateRate / 100);
  const total = selfEmployment + federal + state;

  return {
    profit,
    selfEmployment,
    federal,
    state,
    total,
    rate: commissions > 0 ? total / commissions : 0,
  };
}

function parseAmount(value: string) {
  const n = Number(value.replace(/[$,%\s]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const inputClasses =
  "w-full rounded-md border border-slate-300 bg-white py-2.5 pl-7 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20";

function MoneyField({
  id,
  label,
  hint,
  value,
  onChange,
  prefix = "$",
}: {
  id: string;
  label: string;
  hint: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
}) {
  const isPercent = prefix === "%";
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-slate-900">
        {label}
      </label>
      <p id={`${id}-hint`} className="mt-1 text-xs text-slate-500">
        {hint}
      </p>
      <div className="relative mt-2">
        <span
          className={`pointer-events-none absolute inset-y-0 flex items-center text-sm text-slate-400 ${isPercent ? "right-3" : "left-3"}`}
        >
          {prefix}
        </span>
        <input
          id={id}
          inputMode="decimal"
          autoComplete="off"
          placeholder="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={`${id}-hint`}
          className={isPercent ? inputClasses.replace("pl-7 pr-3", "pl-3 pr-8") : inputClasses}
        />
      </div>
    </div>
  );
}

export default function CommissionTaxCalculator() {
  const id = useId();
  const [status, setStatus] = useState<FilingStatus>("single");
  const [commissions, setCommissions] = useState("");
  const [expenses, setExpenses] = useState("");
  const [spouseWages, setSpouseWages] = useState("");
  const [stateRate, setStateRate] = useState("");
  const [check, setCheck] = useState("");

  const commissionsNum = parseAmount(commissions);
  const checkNum = parseAmount(check);
  const result = estimate(
    status,
    commissionsNum,
    parseAmount(expenses),
    status === "joint" ? parseAmount(spouseWages) : 0,
    Math.min(parseAmount(stateRate), 20),
  );
  const hasResults = commissionsNum > 0 && result.profit > 0;

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <form
        className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <fieldset>
          <legend className="text-sm font-semibold text-slate-900">Filing status</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {STATUS_OPTIONS.map((option) => (
              <label
                key={option.value}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-800 has-[:checked]:border-amber-700 has-[:checked]:bg-amber-50"
              >
                <input
                  type="radio"
                  name={`${id}-status`}
                  value={option.value}
                  checked={status === option.value}
                  onChange={() => setStatus(option.value)}
                  className="accent-amber-700"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="space-y-5 border-t border-slate-200 pt-5">
          <MoneyField
            id={`${id}-commissions`}
            label="Expected commissions this year"
            hint="Your share after the brokerage split, before taxes. A rough estimate is fine."
            value={commissions}
            onChange={setCommissions}
          />
          <MoneyField
            id={`${id}-expenses`}
            label="Expected business expenses this year"
            hint="Mileage, MLS and association dues, marketing, desk fees, phone, licensing, and so on."
            value={expenses}
            onChange={setExpenses}
          />
          {status === "joint" && (
            <MoneyField
              id={`${id}-spouse`}
              label="Spouse's wages"
              hint="Your spouse's W-2 salary for the year, if any. We assume their paycheck withholding already covers the tax on it."
              value={spouseWages}
              onChange={setSpouseWages}
            />
          )}
          <MoneyField
            id={`${id}-state`}
            label="State income tax rate"
            hint="Your state's rate on this income. Enter 0 for states with no income tax, such as Texas or Florida."
            value={stateRate}
            onChange={setStateRate}
            prefix="%"
          />
        </div>

        <div className="border-t border-slate-200 pt-5">
          <MoneyField
            id={`${id}-check`}
            label="Commission check amount (optional)"
            hint="Enter a check you just received to see exactly how much of it to set aside."
            value={check}
            onChange={setCheck}
          />
        </div>
      </form>

      <section
        aria-live="polite"
        aria-label="Your tax set-aside results"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:sticky lg:top-24 lg:self-start"
      >
        <h2 className="text-lg font-semibold text-slate-900">Your results</h2>

        {!hasResults ? (
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Enter your expected commissions and expenses to see how much of
            each commission check to set aside for taxes, and what your
            quarterly payments might be.
          </p>
        ) : (
          <>
            <div className="mt-5 rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-sm text-slate-600">Set aside from every commission check</p>
              <p className="mt-1 text-4xl font-semibold tracking-tight text-slate-900">
                {(result.rate * 100).toFixed(1)}%
              </p>
              {checkNum > 0 && (
                <p className="mt-3 text-sm text-slate-700">
                  From a {money.format(checkNum)} check, set aside{" "}
                  <strong>{money.format(checkNum * result.rate)}</strong>.
                </p>
              )}
            </div>

            <table className="mt-6 w-full text-left text-sm">
              <caption className="sr-only">Estimated yearly tax on your commission income</caption>
              <tbody>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="py-3 pr-2 font-medium text-slate-800">Self-employment tax</th>
                  <td className="py-3 text-right text-slate-900">{money.format(result.selfEmployment)}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="py-3 pr-2 font-medium text-slate-800">Federal income tax</th>
                  <td className="py-3 text-right text-slate-900">{money.format(result.federal)}</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="py-3 pr-2 font-medium text-slate-800">State income tax</th>
                  <td className="py-3 text-right text-slate-900">{money.format(result.state)}</td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 pr-2 font-semibold text-slate-900">Estimated total for the year</th>
                  <td className="py-3 text-right font-semibold text-slate-900">{money.format(result.total)}</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-900">
                Quarterly federal payments: about{" "}
                {money.format((result.selfEmployment + result.federal) / 4)} each
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                {DEADLINES.map((d) => (
                  <li key={d.due} className="flex justify-between gap-4">
                    <span>{d.quarter}</span>
                    <span className="text-slate-900">{d.due}</span>
                  </li>
                ))}
              </ul>
              {result.state > 0 && (
                <p className="mt-3 text-xs text-slate-500">
                  Your state has its own estimated payment schedule; the
                  state amount above isn&apos;t included in these payments.
                </p>
              )}
            </div>
          </>
        )}

        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          Educational estimate only, not tax advice. Uses 2026 IRS figures and
          assumes the standard deduction, no employees, and no retirement or
          health insurance deductions, which would lower your tax.
        </p>
      </section>
    </div>
  );
}
