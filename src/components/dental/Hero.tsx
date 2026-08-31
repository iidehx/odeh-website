import Link from "next/link";
import DentalHeroGraphic from "./HeroGraphic";

export default function DentalHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Dental Careers
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Your Next Opportunity in Dental Care Starts Here.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Odeh Dental helps dentists, assistants, hygienists, and
            technicians connect with relevant opportunities in the dental
            field. Submit your information once, and our team will review it
            carefully.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/dental/apply"
              className="rounded-md bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
            >
              Apply Now
            </Link>
            <Link
              href="#opportunities"
              className="rounded-md border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>

        <div className="mx-auto aspect-square w-full max-w-md">
          <DentalHeroGraphic />
        </div>
      </div>
    </section>
  );
}
