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
      "Day-to-day tracking of commissions, listing expenses, and closing costs, so your books stay accurate deal by deal.",
  },
  {
    icon: PieChartIcon,
    title: "Budgeting",
    description:
      "Budgets built around irregular, commission-based income and marketing spend, not generic templates.",
  },
  {
    icon: HandshakeIcon,
    title: "Financial Consulting",
    description:
      "Guidance on entity structure, 1099 income planning, and growth decisions, from someone who understands real estate income cycles.",
  },
  {
    icon: TrendingUpIcon,
    title: "Cash Flow Management",
    description:
      "Visibility into deal-based, inconsistent income so you can plan through slow months without cash flow surprises.",
  },
  {
    icon: ReceiptIcon,
    title: "Tax Preparation",
    description:
      "Accurate, timely tax filing that accounts for 1099 income, mileage, and real estate-specific deductions.",
  },
  {
    icon: ActivityIcon,
    title: "Business Management",
    description:
      "Deal pipeline, marketing spend, and commission-split metrics tracked and reported clearly.",
  },
];

const points: WhyUsPoint[] = [
  {
    icon: FileTextIcon,
    title: "Personalized Service",
    description:
      "One-on-one attention tailored to your business's structure and goals, not a one-size-fits-all package.",
  },
  {
    icon: ClipboardCheckIcon,
    title: "Accurate & Timely",
    description:
      "Reliable, up-to-date financials so you always know exactly where your business stands.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Confidential & Secure",
    description:
      "Your financial information is handled with care, discretion, and professional standards.",
  },
  {
    icon: MessageCircleIcon,
    title: "Clear Communication",
    description:
      "Plain-language guidance from someone who understands real estate income cycles, not confusing jargon.",
  },
];

export default function RealEstatePage() {
  return (
    <>
      <Hero
        label="Accounting for Real Estate"
        headline="Financial Clarity for Your Real Estate Business."
        description="Omar Odeh, CPA helps real estate agents, brokers, and real estate businesses stay organized and in control of their finances with bookkeeping, budgeting, cash flow management, and business management built around how real estate income actually works."
        primaryCtaHref="/real-estate/contact"
        primaryCtaLabel="Contact Us"
        secondaryCtaHref="#services"
        secondaryCtaLabel="Explore Services"
        graphic={<HeroGraphic variant="realEstate" />}
      />
      <Services
        eyebrow="Services"
        heading="Everything Your Business's Books Need"
        description="From day-to-day bookkeeping to deal-level metrics, we handle the numbers so you can focus on closing."
        services={services}
      />
      <WhyUs
        eyebrow="About Omar Odeh, CPA"
        heading="A Partner Who Understands Real Estate Income"
        description="Real estate income doesn't arrive on a steady schedule. Omar Odeh, CPA works with you throughout the year so your books stay accurate and your decisions stay informed, deal or no deal."
        points={points}
      />
      <CtaSection
        heading="Ready to Get Your Business's Books in Order?"
        description="Reach out and tell us about your business — we'll follow up to see how we can help."
        ctaHref="/real-estate/contact"
      />
    </>
  );
}
