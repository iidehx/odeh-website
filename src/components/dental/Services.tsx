import {
  ClipboardCheckIcon,
  ToothIcon,
  UsersIcon,
  WrenchIcon,
} from "@/components/icons";

const services = [
  {
    icon: ToothIcon,
    title: "Dentists",
    description:
      "Opportunities for qualified dental professionals across a range of practice settings.",
  },
  {
    icon: UsersIcon,
    title: "Dental Assistants",
    description:
      "Connect with opportunities in dental clinics and practices looking for skilled assistants.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Dental Hygienists",
    description:
      "Explore relevant professional opportunities suited to your hygiene expertise.",
  },
  {
    icon: WrenchIcon,
    title: "Dental Technicians",
    description:
      "Opportunities within dental laboratories and practices for technical specialists.",
  },
];

export default function DentalServices() {
  return (
    <section id="opportunities" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Opportunities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for Every Role in Dental Care
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Whatever your specialty, Odeh Dental helps you present your
            experience to the right opportunities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <service.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
