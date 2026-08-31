import { EarIcon, HeartHandIcon, LeafIcon, SparkleIcon } from "@/components/icons";

const services = [
  {
    icon: HeartHandIcon,
    title: "Physical Therapy",
    description:
      "Opportunities for physical therapists supporting patients through movement and recovery.",
  },
  {
    icon: LeafIcon,
    title: "Occupational Therapy",
    description:
      "Connect with opportunities helping people build skills for everyday, independent living.",
  },
  {
    icon: EarIcon,
    title: "Speech Therapy",
    description:
      "Explore opportunities supporting communication, language, and swallowing needs.",
  },
  {
    icon: SparkleIcon,
    title: "Other Specialties",
    description:
      "Opportunities for other therapy-related professionals across the field.",
  },
];

export default function TherapyServices() {
  return (
    <section id="opportunities" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-800">
            Opportunities
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-therapy-serif)] text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            A Place for Every Therapy Specialty
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Wherever your specialty lies, Odeh Therapy helps you present your
            experience to the right opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-stone-200 bg-[#fdf6ec] p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-800">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-stone-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
