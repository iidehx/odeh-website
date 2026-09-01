import Link from "next/link";
import {
  CalculatorIcon,
  ChevronRightIcon,
  HeartHandIcon,
  ToothIcon,
} from "@/components/icons";

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-slate-50 px-6 py-20">
      <div className="w-full max-w-3xl text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-white">
          <CalculatorIcon className="h-7 w-7" />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
          Omar Odeh, CPA
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Accounting Built for Dental & Therapy Practices
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          Bookkeeping, budgeting, financial consulting, cash flow
          management, tax preparation, and practice management, tailored
          to how your practice actually runs. Select your field to learn
          more.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Link
            href="/dental"
            className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-10 transition-shadow hover:shadow-lg"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-white">
              <ToothIcon className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-xl font-semibold text-slate-900">
              Dental Practices
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Accounting and practice management for dental practices.
            </p>
            <span className="mt-6 flex items-center gap-1 text-sm font-semibold text-amber-700">
              Explore Dental Services
              <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link
            href="/therapy"
            className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-10 transition-shadow hover:shadow-lg"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 text-white">
              <HeartHandIcon className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-xl font-semibold text-slate-900">
              Therapy Practices
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Accounting and practice management for therapy practices.
            </p>
            <span className="mt-6 flex items-center gap-1 text-sm font-semibold text-amber-700">
              Explore Therapy Services
              <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
