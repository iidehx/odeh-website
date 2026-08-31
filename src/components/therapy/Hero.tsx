import Link from "next/link";
import TherapyHeroGraphic from "./HeroGraphic";

export default function TherapyHero() {
  return (
    <section className="relative overflow-hidden bg-[#fdf6ec]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-800">
            Therapy Careers
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-therapy-serif)] text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
            Build Your Next Chapter in Therapy.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            Odeh Therapy helps physical, occupational, and speech therapy
            professionals connect with relevant opportunities. Share your
            experience with us, and our team will take it from there.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/therapy/apply"
              className="rounded-full bg-orange-800 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-900"
            >
              Apply Now
            </Link>
            <Link
              href="#opportunities"
              className="rounded-full border border-stone-300 px-7 py-3.5 text-sm font-semibold text-stone-900 transition-colors hover:bg-white"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>

        <div className="mx-auto aspect-square w-full max-w-md">
          <TherapyHeroGraphic />
        </div>
      </div>
    </section>
  );
}
