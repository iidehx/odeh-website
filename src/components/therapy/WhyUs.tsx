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
    description: "Share your information through one welcoming, straightforward form.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Professional Process",
    description: "Present your experience and qualifications with clarity.",
  },
  {
    icon: LayersIcon,
    title: "Centralized Information",
    description: "Your information is kept organized in one place.",
  },
  {
    icon: MessageCircleIcon,
    title: "Easy Communication",
    description:
      "We make it easier for our team to review applications and reach out to suitable candidates.",
  },
];

export default function TherapyWhyUs() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#fbf1e2] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-800">
            About Odeh Therapy
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-therapy-serif)] text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            A Warmer Way to Take the Next Step
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Odeh Therapy was built to make the application process calm and
            clear for therapy professionals, so you can focus on the people
            you help, not paperwork.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-orange-800 text-white">
                <point.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-stone-900">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
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
