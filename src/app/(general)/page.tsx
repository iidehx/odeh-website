import Hero from "@/components/Hero";
import HeroGraphic from "@/components/HeroGraphic";
import Services, { type ServiceItem } from "@/components/Services";
import Process, { type ProcessStep } from "@/components/Process";
import Industries, { type IndustryItem } from "@/components/Industries";
import WhyUs, { type WhyUsPoint } from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import {
  ActivityIcon,
  CalculatorIcon,
  ClipboardCheckIcon,
  FileTextIcon,
  HandshakeIcon,
  HeartHandIcon,
  HomeIcon,
  MessageCircleIcon,
  PieChartIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  ToothIcon,
  TrendingUpIcon,
} from "@/components/icons";

const services: ServiceItem[] = [
  {
    icon: CalculatorIcon,
    title: "Bookkeeping",
    description:
      "Accurate, up-to-date records of your income, expenses, and transactions so your books are always ready when you need them.",
  },
  {
    icon: PieChartIcon,
    title: "Budgeting",
    description:
      "Structured budgets that reflect how your business actually operates, built to guide spending and planning decisions.",
  },
  {
    icon: HandshakeIcon,
    title: "Financial Consulting",
    description:
      "Practical guidance on financial strategy and business decisions, explained in plain language, not jargon.",
  },
  {
    icon: TrendingUpIcon,
    title: "Cash Flow Management",
    description:
      "Ongoing visibility into what's coming in and going out, so you can plan ahead with confidence instead of guessing.",
  },
  {
    icon: ReceiptIcon,
    title: "Tax Preparation",
    description:
      "Accurate, timely preparation and filing of your business tax returns, done right the first time.",
  },
  {
    icon: ActivityIcon,
    title: "Business Management",
    description:
      "Operational metrics and reporting tailored to your business, so you always know how you're really doing.",
  },
];

const processSteps: ProcessStep[] = [
  {
    icon: MessageCircleIcon,
    title: "Reach Out",
    description: "Tell us a bit about your business and what you need help with.",
  },
  {
    icon: FileTextIcon,
    title: "We Learn Your Business",
    description:
      "We take the time to understand how your business actually operates before recommending anything.",
  },
  {
    icon: CalculatorIcon,
    title: "We Handle Your Books",
    description: "Ongoing bookkeeping, budgeting, and reporting, handled accurately and on time.",
  },
  {
    icon: TrendingUpIcon,
    title: "You Stay Informed",
    description: "Clear, regular updates so you always know exactly where your business stands.",
  },
];

const industries: IndustryItem[] = [
  {
    icon: ToothIcon,
    title: "Dental Practices",
    description: "Accounting built around how a dental practice actually runs.",
    href: "/dental",
  },
  {
    icon: HeartHandIcon,
    title: "Therapy Practices",
    description: "Accounting built around how a therapy practice actually runs.",
    href: "/therapy",
  },
  {
    icon: HomeIcon,
    title: "Real Estate",
    description: "Accounting built around how real estate income actually works.",
    href: "/real-estate",
  },
];

const points: WhyUsPoint[] = [
  {
    icon: FileTextIcon,
    title: "Personalized Service",
    description:
      "One-on-one attention tailored to how your business actually operates, not a one-size-fits-all package.",
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
    description: "Plain-language guidance and straightforward answers, not confusing jargon.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        label="Accounting for Growing Businesses"
        headline="Financial Clarity, Built Around Your Business."
        description="Omar Odeh, CPA provides bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management for growing businesses, with specialized experience in dental, therapy, and real estate."
        primaryCtaHref="#industries"
        primaryCtaLabel="Get Started"
        secondaryCtaHref="#services"
        secondaryCtaLabel="Our Services"
        graphic={<HeroGraphic variant="general" />}
      />
      <Services
        eyebrow="Services"
        heading="Everything Your Books Need, In One Place"
        description="From day-to-day bookkeeping to tax season, we handle the numbers so you can focus on running your business."
        services={services}
      />
      <Process
        eyebrow="How We Work"
        heading="A Straightforward Process, Start to Finish"
        description="No confusing onboarding, no guesswork — just a clear path from first conversation to organized books."
        steps={processSteps}
      />
      <Industries industries={industries} />
      <WhyUs
        eyebrow="About Omar Odeh, CPA"
        heading="A Partner Who Actually Knows Your Numbers"
        description="Growing businesses deserve more than a once-a-year tax appointment. Omar Odeh, CPA works with you throughout the year so your books stay accurate and your decisions stay informed."
        points={points}
      />
      <CtaSection
        heading="Ready to Get Your Books in Order?"
        description="Select your industry above, or reach out directly using the contact details below — we'll follow up to see how we can help."
        ctaHref="#industries"
        ctaLabel="Get Started"
      />
    </>
  );
}
