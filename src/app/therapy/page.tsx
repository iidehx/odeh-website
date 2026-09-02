import Hero from "@/components/Hero";
import HeroGraphic from "@/components/HeroGraphic";
import Services, { type ServiceItem } from "@/components/Services";
import WhyUs, { type WhyUsPoint } from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import {
  ActivityIcon,
  CalculatorIcon,
  ClipboardCheckIcon,
  FileTextIcon,
  HandshakeIcon,
  MessageCircleIcon,
  PieChartIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
} from "@/components/icons";

const services: ServiceItem[] = [
  {
    icon: CalculatorIcon,
    title: "Bookkeeping",
    description:
      "Day-to-day tracking of session billing, insurance reimbursements, and expenses, so your books stay accurate between sessions.",
  },
  {
    icon: PieChartIcon,
    title: "Budgeting",
    description:
      "Budgets built around your practice's real costs — space, equipment, staff, and continuing education — not generic templates.",
  },
  {
    icon: HandshakeIcon,
    title: "Financial Consulting",
    description:
      "Guidance on hiring additional providers, expanding your practice, or adjusting your fee schedule, from someone who understands therapy practice economics.",
  },
  {
    icon: TrendingUpIcon,
    title: "Cash Flow Management",
    description:
      "Visibility into billed versus collected revenue and insurance reimbursement timing, so cash flow gaps don't catch you off guard.",
  },
  {
    icon: ReceiptIcon,
    title: "Tax Preparation",
    description:
      "Accurate, timely tax filing that accounts for entity structure, equipment, and therapy-specific deductions.",
  },
  {
    icon: ActivityIcon,
    title: "Business Management",
    description:
      "Session utilization, no-show rates, provider productivity, and other practice-level metrics tracked and reported clearly.",
  },
];

const points: WhyUsPoint[] = [
  {
    icon: FileTextIcon,
    title: "Personalized Service",
    description:
      "One-on-one attention tailored to your practice's structure and goals, not a one-size-fits-all package.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Accurate & Timely",
    description:
      "Reliable, up-to-date financials so you always know exactly where your practice stands.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Confidential & Secure",
    description:
      "Your practice's financial information is handled with care, discretion, and professional standards.",
  },
  {
    icon: MessageCircleIcon,
    title: "Clear Communication",
    description:
      "Plain-language guidance from someone who understands therapy practice economics, not confusing jargon.",
  },
];

export default function TherapyPage() {
  return (
    <>
      <Hero
        label="Accounting for Therapy Practices"
        headline="Financial Clarity for Your Therapy Practice."
        description="Omar Odeh, CPA helps physical, occupational, and speech therapy practices stay organized and in control of their finances with bookkeeping, budgeting, cash flow management, and business management built around how a therapy practice actually runs."
        primaryCtaHref="/therapy/contact"
        primaryCtaLabel="Contact Us"
        secondaryCtaHref="#services"
        secondaryCtaLabel="Explore Services"
        graphic={<HeroGraphic variant="therapy" />}
      />
      <Services
        eyebrow="Services"
        heading="Everything Your Practice's Books Need"
        description="From day-to-day bookkeeping to practice-level metrics, we handle the numbers so you can focus on patients."
        services={services}
      />
      <WhyUs
        eyebrow="About Omar Odeh, CPA"
        heading="A Partner Who Understands Therapy Practices"
        description="Therapy practices deserve more than a once-a-year tax appointment. Omar Odeh, CPA works with you throughout the year so your books stay accurate and your decisions stay informed."
        points={points}
      />
      <CtaSection
        heading="Ready to Get Your Practice's Books in Order?"
        description="Reach out and tell us about your practice — we'll follow up to see how we can help."
        ctaHref="/therapy/contact"
      />
    </>
  );
}
