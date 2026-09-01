import Link from "next/link";
import HeroGraphic from "./HeroGraphic";

export default function Hero({
  base,
  variant,
  label,
  headline,
  description,
}: {
  base: "/dental" | "/therapy";
  variant: "dental" | "therapy";
  label: string;
  headline: string;
  description: string;
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
              href={`${base}/contact`}
              className="rounded-md bg-amber-700 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-800"
            >
              Contact Us
            </Link>
            <Link
              href="#services"
              className="rounded-md border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="mx-auto aspect-square w-full max-w-md">
          <HeroGraphic variant={variant} />
        </div>
      </div>
    </section>
  );
}
