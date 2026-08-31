import Link from "next/link";
import { ChevronRightIcon, HeartHandIcon, ToothIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center justify-center bg-slate-50 px-6 py-20">
      <div className="w-full max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Odeh Healthcare
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Choose Your Path
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          Select the platform that matches your field to explore
          opportunities and submit your application.
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
              Odeh Dental
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Opportunities for dental professionals.
            </p>
            <span className="mt-6 flex items-center gap-1 text-sm font-semibold text-teal-700">
              Enter Dental
              <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link
            href="/therapy"
            className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-10 transition-shadow hover:shadow-lg"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-800 text-white">
              <HeartHandIcon className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-xl font-semibold text-slate-900">
              Odeh Therapy
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Opportunities for therapy professionals.
            </p>
            <span className="mt-6 flex items-center gap-1 text-sm font-semibold text-orange-800">
              Enter Therapy
              <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
