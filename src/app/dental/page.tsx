import Hero from "@/components/Hero";
import HeroGraphic from "@/components/HeroGraphic";
import Services, { type ServiceItem } from "@/components/Services";
import Process, { type ProcessStep } from "@/components/Process";
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
      "Day-to-day tracking of production, collections, and expenses across your clinic, so your books always match your chairside reality.",
  },
  {
    icon: PieChartIcon,
    title: "Budgeting",
    description:
      "Budgets built around your clinic's real overhead — supplies, lab fees, staff, and equipment — not generic templates.",
  },
  {
    icon: HandshakeIcon,
    title: "Financial Consulting",
    description:
      "Guidance on associate buy-ins, equipment purchases, and growth decisions, from someone who understands dental clinic economics.",
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
    title: "Business Management",
    description:
      "Chair utilization, hygiene production, overhead ratios, and other clinic-level metrics tracked and reported clearly.",
  },
];

const processSteps: ProcessStep[] = [
  {
    icon: MessageCircleIcon,
    title: "We Learn Your Clinic",
    description:
      "We start by understanding how your clinic actually runs — patient volume, how insurance reimbursements come in, and how you're currently keeping track of money. No accounting background needed on your end.",
  },
  {
    icon: FileTextIcon,
    title: "You Send Us the Basics",
    description:
      "Each month, you share your production and collections numbers, or we help you start tracking them if you're not already. That's the extent of what we need from you.",
  },
  {
    icon: CalculatorIcon,
    title: "We Turn It Into Plain Answers",
    description:
      "Instead of confusing spreadsheets, you get a simple summary: what your clinic brought in, what it spent, and what's actually left over.",
  },
  {
    icon: ReceiptIcon,
    title: "We Handle Tax Season",
    description:
      "Before filing, we review everything for deductions specific to dental clinics — equipment, supplies, lab fees — so you're not leaving money on the table.",
  },
];

const points: WhyUsPoint[] = [
  {
    icon: FileTextIcon,
    title: "Personalized Service",
    description:
      "One-on-one attention tailored to your clinic's structure and goals, not a one-size-fits-all package.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Accurate & Timely",
    description:
      "Reliable, up-to-date financials so you always know exactly where your clinic stands.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Confidential & Secure",
    description:
      "Your clinic's financial information is handled with care, discretion, and professional standards.",
  },
  {
    icon: MessageCircleIcon,
    title: "Clear Communication",
    description:
      "Plain-language guidance from someone who understands dental clinic economics, not confusing jargon.",
  },
];

export default function DentalPage() {
  return (
    <>
      <Hero
        label="Accounting for Dental Clinics"
        headline="Financial Clarity for Your Dental Clinic."
        description="Omar Odeh, CPA helps dental clinics stay organized and in control of their finances with bookkeeping, budgeting, cash flow management, and business management built around how a dental office actually runs."
        primaryCtaHref="/dental/contact"
        primaryCtaLabel="Contact Us"
        secondaryCtaHref="#services"
        secondaryCtaLabel="Explore Services"
        graphic={<HeroGraphic variant="dental" />}
      />
      <Services
        eyebrow="Services"
        heading="Everything Your Clinic's Books Need"
        description="From day-to-day bookkeeping to clinic-level metrics, we handle the numbers so you can focus on patients."
        services={services}
      />
      <Process
        eyebrow="How It Works"
        heading="Accounting, Explained in Plain English"
        description="You don't need to understand accounting — you just need to run your clinic. Here's exactly what working with us looks like."
        steps={processSteps}
      />
      <WhyUs
        eyebrow="About Omar Odeh, CPA"
        heading="A Partner Who Understands Dental Clinics"
        description="Dental clinics deserve more than a once-a-year tax appointment. Omar Odeh, CPA works with you throughout the year so your books stay accurate and your decisions stay informed."
        points={points}
      />
      <CtaSection
        heading="Ready to Get Your Clinic's Books in Order?"
        description="Reach out and tell us about your clinic — we'll follow up to see how we can help."
        ctaHref="/dental/contact"
      />
    </>
  );
}
