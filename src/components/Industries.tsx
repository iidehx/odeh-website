import Link from "next/link";
import type { ComponentType } from "react";
import { ChevronRightIcon } from "@/components/icons";

export interface IndustryItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}

export default function Industries({ industries }: { industries: IndustryItem[] }) {
  return (
    <section id="industries" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Industries We Serve
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Specialized Experience Where It Counts
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We work with businesses across industries, and we&apos;ve built
            deep, specialized experience in a few. Select yours to see how
            we can help.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <industry.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {industry.description}
              </p>
              <span className="mt-6 flex items-center gap-1 text-sm font-semibold text-amber-700">
                Explore Services
                <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
