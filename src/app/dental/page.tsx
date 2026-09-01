import Hero from "@/components/Hero";
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
      "Day-to-day tracking of production, collections, and expenses across your practice, so your books always match your chairside reality.",
  },
  {
    icon: PieChartIcon,
    title: "Budgeting",
    description:
      "Budgets built around your practice's real overhead — supplies, lab fees, staff, and equipment — not generic templates.",
  },
  {
    icon: HandshakeIcon,
    title: "Financial Consulting",
    description:
      "Guidance on associate buy-ins, equipment purchases, and growth decisions, from someone who understands dental practice economics.",
  },
  {
    icon: TrendingUpIcon,
    title: "Cash Flow Management",
    description:
      "Visibility into production versus collections and insurance reimbursement timing, so cash flow gaps don't catch you off guard.",
  },
  {
    icon: ReceiptIcon,
    title: "Tax Preparation",
    description:
      "Accurate, timely tax filing that accounts for equipment depreciation, entity structure, and dental-specific deductions.",
  },
  {
    icon: ActivityIcon,
    title: "Practice Management",
    description:
      "Chair utilization, hygiene production, overhead ratios, and other practice-level metrics tracked and reported clearly.",
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
      "Plain-language guidance from someone who understands dental practice economics, not confusing jargon.",
  },
];

export default function DentalPage() {
  return (
    <>
      <Hero
        base="/dental"
        variant="dental"
        label="Accounting for Dental Practices"
        headline="Financial Clarity for Your Dental Practice."
        description="Omar Odeh, CPA helps dental practices stay organized and in control of their finances with bookkeeping, budgeting, cash flow management, and practice management built around how a dental office actually runs."
      />
      <Services
        eyebrow="Services"
        heading="Everything Your Practice's Books Need"
        description="From day-to-day bookkeeping to practice-level metrics, we handle the numbers so you can focus on patients."
        services={services}
      />
      <WhyUs
        eyebrow="About Omar Odeh, CPA"
        heading="A Partner Who Understands Dental Practices"
        description="Dental practices deserve more than a once-a-year tax appointment. Omar Odeh, CPA works with you throughout the year so your books stay accurate and your decisions stay informed."
        points={points}
      />
      <CtaSection
        base="/dental"
        heading="Ready to Get Your Practice's Books in Order?"
        description="Reach out and tell us about your practice — we'll follow up to see how we can help."
      />
    </>
  );
}
