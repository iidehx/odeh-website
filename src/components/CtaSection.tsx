import Link from "next/link";

export default function CtaSection({
  heading,
  description,
  ctaHref,
  ctaLabel = "Contact Us",
}: {
  heading: string;
  description: string;
  ctaHref: string;
  ctaLabel?: string;
}) {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300">{description}</p>
        <div className="mt-9">
          <Link
            href={ctaHref}
            className="inline-block rounded-md bg-amber-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
