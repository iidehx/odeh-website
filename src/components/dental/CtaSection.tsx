import Link from "next/link";

export default function DentalCtaSection() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready for Your Next Dental Opportunity?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          Submit your application today and our team will review your
          information for relevant opportunities.
        </p>
        <div className="mt-9">
          <Link
            href="/dental/apply"
            className="inline-block rounded-md bg-teal-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
