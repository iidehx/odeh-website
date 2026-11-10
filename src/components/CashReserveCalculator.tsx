"use client";

import { useId, useState } from "react";

// Typical payment times: Beancount, "ABA Therapy Practice Bookkeeping" (2026):
// commercial 30–45 days, Medicaid 45–90 days; plan around the slower number.
const DEFAULT_COMMERCIAL_DAYS = "45";
const DEFAULT_MEDICAID_DAYS = "90";

// Cushion on top of the payment gap: Asset Allies (2026) suggests reserves
// covering 4–6 weeks of operating costs independent of incoming collections.
const CUSHION_WEEKS_MIN = 4;
const CUSHION_WEEKS_MAX = 6;

const DAYS_PER_MONTH = 365 / 12;

function parseNumber(value: string) {
  const n = Number(value.replace(/[$,%\s]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const baseInput =
  "w-full rounded-md border border-slate-300 bg-white py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20";

function Field({
  id,
  label,
  hint,
  value,
  onChange,
  unit,
  invalid = false,
}: {
  id: string;
  label: string;
  hint: string;
  value: string;
  onChange: (value: string) => void;
  unit: "$" | "%" | "days";
  invalid?: boolean;
}) {
  const before = unit === "$";
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
          className={`pointer-events-none absolute inset-y-0 flex items-center text-sm text-slate-400 ${before ? "left-3" : "right-3"}`}
        >
          {unit}
        </span>
        <input
          id={id}
          inputMode="decimal"
          autoComplete="off"
          placeholder="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={`${id}-hint`}
          aria-invalid={invalid || undefined}
          className={`${baseInput} ${before ? "pl-7 pr-3" : unit === "days" ? "pl-3 pr-12" : "pl-3 pr-8"}`}
        />
      </div>
    </div>
  );
}

export default function CashReserveCalculator() {
  const id = useId();
  const [costs, setCosts] = useState("");
  const [commercialShare, setCommercialShare] = useState("");
  const [medicaidShare, setMedicaidShare] = useState("");
  const [commercialDays, setCommercialDays] = useState(DEFAULT_COMMERCIAL_DAYS);
  const [medicaidDays, setMedicaidDays] = useState(DEFAULT_MEDICAID_DAYS);

  const costsNum = parseNumber(costs);
  const commercialPct = parseNumber(commercialShare);
  const medicaidPct = parseNumber(medicaidShare);
  const commercialDaysNum = parseNumber(commercialDays);
  const medicaidDaysNum = parseNumber(medicaidDays);

  const mixTooHigh = commercialPct + medicaidPct > 100;
  const privatePct = Math.max(0, 100 - commercialPct - medicaidPct);
  const hasResults = costsNum > 0 && commercialPct + medicaidPct > 0 && !mixTooHigh;

  // Private pay is assumed to be collected at the time of service.
  const avgDays =
    (commercialPct * commercialDaysNum + medicaidPct * medicaidDaysNum) / 100;
  const dailyCosts = costsNum / DAYS_PER_MONTH;
  const gap = dailyCosts * avgDays;
  const targetMin = gap + dailyCosts * CUSHION_WEEKS_MIN * 7;
  const targetMax = gap + dailyCosts * CUSHION_WEEKS_MAX * 7;
  const medicaidShift = Math.max(
    0,
    dailyCosts * 0.1 * (medicaidDaysNum - commercialDaysNum),
  );

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <form
        className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <Field
          id={`${id}-costs`}
          label="Monthly operating costs"
          hint="Everything you pay out in a normal month: RBT and BCBA payroll with payroll taxes and benefits, rent, software, insurance, and so on."
          value={costs}
          onChange={setCosts}
          unit="$"
        />

        <fieldset className="space-y-5 border-t border-slate-200 pt-5">
          <legend className="text-sm font-semibold text-slate-900">Payer mix</legend>
          <p className="text-xs text-slate-500">
            The share of your revenue from each type of payer. Whatever&apos;s
            left over is treated as private pay, collected at the time of
            service.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id={`${id}-commercial`}
              label="Commercial insurance share"
              hint="Share of revenue."
              value={commercialShare}
              onChange={setCommercialShare}
              unit="%"
              invalid={mixTooHigh}
            />
            <Field
              id={`${id}-medicaid`}
              label="Medicaid share"
              hint="Including managed Medicaid plans."
              value={medicaidShare}
              onChange={setMedicaidShare}
              unit="%"
              invalid={mixTooHigh}
            />
          </div>
          {mixTooHigh && (
            <p role="alert" className="text-sm font-medium text-red-700">
              Commercial and Medicaid together can&apos;t be more than 100%.
            </p>
          )}
        </fieldset>

        <fieldset className="space-y-5 border-t border-slate-200 pt-5">
          <legend className="text-sm font-semibold text-slate-900">
            Days from session to payment
          </legend>
          <p className="text-xs text-slate-500">
            Pre-filled with the slow end of typical ranges. If you know your
            own averages, use those instead.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id={`${id}-commercial-days`}
              label="Commercial: days to payment"
              hint="Typically 30–45 days."
              value={commercialDays}
              onChange={setCommercialDays}
              unit="days"
            />
            <Field
              id={`${id}-medicaid-days`}
              label="Medicaid: days to payment"
              hint="Typically 45–90 days."
              value={medicaidDays}
              onChange={setMedicaidDays}
              unit="days"
            />
          </div>
        </fieldset>
      </form>

      <section
        aria-live="polite"
        aria-label="Your cash reserve results"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:sticky lg:top-24 lg:self-start"
      >
        <h2 className="text-lg font-semibold text-slate-900">Your results</h2>

        {!hasResults ? (
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Enter your monthly operating costs and payer mix to see how much
            cash your practice needs on hand to keep paying staff while
            insurance payments catch up.
          </p>
        ) : (
          <>
            <div className="mt-5 rounded-xl bg-white p-5 ring-1 ring-slate-200">
              <p className="text-sm text-slate-600">Recommended cash reserve</p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {money.format(targetMin)} – {money.format(targetMax)}
              </p>
              <p className="mt-3 text-sm text-slate-700">
                That&apos;s about {(targetMin / costsNum).toFixed(1)} to{" "}
                {(targetMax / costsNum).toFixed(1)} months of operating costs.
              </p>
            </div>

            <table className="mt-6 w-full text-left text-sm">
              <caption className="sr-only">How your recommended reserve is built</caption>
              <tbody>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="py-3 pr-2 font-medium text-slate-800">
                    Average wait for payment
                  </th>
                  <td className="py-3 text-right text-slate-900">{Math.round(avgDays)} days</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <th scope="row" className="py-3 pr-2 font-medium text-slate-800">
                    Payment gap to cover
                  </th>
                  <td className="py-3 text-right text-slate-900">{money.format(gap)}</td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 pr-2 font-medium text-slate-800">
                    Cushion for denials and slow months ({CUSHION_WEEKS_MIN}–{CUSHION_WEEKS_MAX} weeks)
                  </th>
                  <td className="py-3 text-right text-slate-900">
                    {money.format(targetMin - gap)} – {money.format(targetMax - gap)}
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-5 text-sm leading-relaxed text-slate-700">
              Private pay share: {privatePct.toFixed(0)}%.
              {medicaidShift > 0 && (
                <>
                  {" "}Every 10% of revenue that moves from commercial to
                  Medicaid adds about <strong>{money.format(medicaidShift)}</strong>{" "}
                  to the cash you need.
                </>
              )}
            </p>
          </>
        )}

        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          Educational estimate only, not financial advice. Assumes claims go
          out promptly after each session. Billing delays, authorization gaps,
          or rapid growth all raise the cash you need.
        </p>
      </section>
    </div>
  );
}
