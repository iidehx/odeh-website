import Link from "next/link";

export default function TherapyCtaSection() {
  return (
    <section className="bg-orange-900 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-[family-name:var(--font-therapy-serif)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to Take the Next Step in Therapy?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-orange-100">
          Submit your application today and our team will review your
          information for relevant opportunities.
        </p>
        <div className="mt-9">
          <Link
            href="/therapy/apply"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-orange-900 transition-colors hover:bg-orange-50"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
