import Link from "next/link";
import { ChevronRightIcon } from "@/components/icons";

export interface ResourceItem {
  tag: string;
  title: string;
  description: string;
  href: string;
}

export default function Resources({ resources }: { resources: ResourceItem[] }) {
  return (
    <section id="resources" className="scroll-mt-20 bg-white pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Free Tools &amp; Guides
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Answers You Can Use Today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Free calculators and plain-English guides. No sign-up needed.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <li key={resource.href}>
              <Link
                href={resource.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  {resource.tag}
                </span>
                <span className="mt-2 text-base font-semibold text-slate-900">
                  {resource.title}
                </span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {resource.description}
                </span>
                <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-amber-700">
                  Open
                  <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
