import {
  ClipboardCheckIcon,
  FileTextIcon,
  LayersIcon,
  MessageCircleIcon,
} from "@/components/icons";

const points = [
  {
    icon: FileTextIcon,
    title: "Simple Application",
    description: "Submit your information through one straightforward form.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Professional Process",
    description: "Present your experience and qualifications clearly.",
  },
  {
    icon: LayersIcon,
    title: "Centralized Information",
    description: "Keep your applicant information organized in one place.",
  },
  {
    icon: MessageCircleIcon,
    title: "Easy Communication",
    description:
      "We make it easier for our team to review applications and reach out to suitable candidates.",
  },
];

export default function DentalWhyUs() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            About Odeh Dental
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A Straightforward Way to Move Your Career Forward
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Odeh Dental was built to make the application process clear and
            efficient for dental professionals, so you can focus on your
            qualifications, not paperwork.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-900 text-white">
                <point.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
