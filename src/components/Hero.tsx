import Link from "next/link";
import type { ReactNode } from "react";

export default function Hero({
  label,
  headline,
  description,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
  graphic,
}: {
  label: string;
  headline: string;
  description: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  graphic: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            {label}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={primaryCtaHref}
              className="rounded-md bg-amber-700 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
            >
              {primaryCtaLabel}
            </Link>
            <Link
              href={secondaryCtaHref}
              className="rounded-md border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div className="mx-auto aspect-square w-full max-w-md">{graphic}</div>
      </div>
    </section>
  );
}
