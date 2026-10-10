import type { ComponentType } from "react";
import { ChevronRightIcon } from "@/components/icons";

export interface ServiceLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string;
  relatedLinks?: ServiceLink[];
}

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Services({
  eyebrow,
  heading,
  description,
  services,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  services: ServiceItem[];
}) {
  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
          <p className="mt-2 text-sm text-slate-500">
            Select any service below for more detail.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <details
              key={service.title}
              id={`service-${slugify(service.title)}`}
              className="group scroll-mt-24 rounded-xl border border-slate-200 bg-white open:shadow-md"
            >
              <summary className="flex cursor-pointer items-start gap-4 p-6">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <service.icon className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-base font-semibold text-slate-900">
                    {service.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </span>
                </span>
                <ChevronRightIcon className="mt-1 h-5 w-5 flex-none text-slate-400 transition-transform group-open:rotate-90" />
              </summary>

              <div className="px-6 pb-6 pl-[4.25rem]">
                <p className="text-sm leading-relaxed text-slate-600">{service.details}</p>

                {service.relatedLinks && service.relatedLinks.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Related Resources
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {service.relatedLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-amber-700 underline underline-offset-2 hover:text-amber-800"
                          >
                            {link.label}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
