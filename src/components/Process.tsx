import type { ComponentType } from "react";

export interface ProcessStep {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function Process({
  eyebrow,
  heading,
  description,
  steps,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  steps: ProcessStep[];
}) {
  return (
    <section id="process" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-xl border border-slate-200 bg-white p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Step {index + 1}
              </span>
              <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-900 text-white">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
