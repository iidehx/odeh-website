import Hero from "@/components/Hero";
import HeroGraphic from "@/components/HeroGraphic";
import Services, { type ServiceItem } from "@/components/Services";
import Process, { type ProcessStep } from "@/components/Process";
import WhyUs, { type WhyUsPoint } from "@/components/WhyUs";
import Faq, { type FaqItem } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import {
  ActivityIcon,
  CalculatorIcon,
  ClipboardCheckIcon,
  CompassIcon,
  FileTextIcon,
  HandshakeIcon,
  MessageCircleIcon,
  PieChartIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/icons";

const services: ServiceItem[] = [
  {
    icon: CalculatorIcon,
    title: "Bookkeeping",
    description:
      "Day-to-day tracking of commissions, listing expenses, and closing costs, so you have accurate financials whenever you need them.",
    details:
      "We reconcile your commission deposits and closing costs against your statements on a regular schedule, categorize marketing and listing expenses correctly, and keep your books audit-ready year-round. We work inside whatever accounting software you already use.",
    relatedLinks: [
      { label: "QuickBooks", href: "https://quickbooks.intuit.com/" },
      { label: "Xero", href: "https://www.xero.com/" },
      { label: "Digits", href: "https://digits.com/" },
    ],
  },
  {
    icon: PieChartIcon,
    title: "Budgeting",
    description:
      "Budgets built around irregular, commission-based income and marketing spend, not generic templates.",
    details:
      "We build your budget around real, irregular commission income rather than a steady paycheck assumption, so marketing spend and personal draws are planned around your actual deal cycle.",
    relatedLinks: [
      { label: "SBA Business Guide", href: "https://www.sba.gov/business-guide" },
    ],
  },
  {
    icon: HandshakeIcon,
    title: "Financial Consulting",
    description:
      "Guidance on entity structure, 1099 income planning, and growth decisions — business analysis, where to grow, and how to source funding — from someone who understands real estate income cycles.",
    details:
      "Considering forming an entity, growing your team, or expanding into a new market? We walk through the numbers with you first, so the decision is grounded in what your business can actually support.",
    relatedLinks: [
      { label: "SBA: Fund Your Business", href: "https://www.sba.gov/business-guide" },
      { label: "SCORE Business Mentoring", href: "https://www.score.org/" },
    ],
  },
  {
    icon: TrendingUpIcon,
    title: "Cash Flow Management",
    description:
      "Visibility into deal-based, inconsistent income so you can plan through slow months without cash flow surprises.",
    details:
      "We track your deal pipeline against your fixed costs, so you can see a slow month coming and plan around it instead of being surprised by it.",
    relatedLinks: [
      { label: "SBA Business Guide", href: "https://www.sba.gov/business-guide" },
    ],
  },
  {
    icon: ReceiptIcon,
    title: "Tax Preparation",
    description:
      "Maximizing every deduction available to you — mileage, marketing, 1099 income — and making sure you pay exactly what you truly owe.",
    details:
      "We review a full year of your books for every available deduction — mileage, marketing, home office, 1099 income planning — and file accurately and on time.",
    relatedLinks: [
      {
        label: "IRS Small Business & Self-Employed Tax Center",
        href: "https://www.irs.gov/businesses/small-businesses-self-employed",
      },
    ],
  },
  {
    icon: UsersIcon,
    title: "Payroll",
    description:
      "Processing payroll accurately and on time for your support staff and team, every pay period without fail.",
    details:
      "If you employ support staff or a team, we handle the full payroll cycle — withholdings, payroll tax deposits — so everyone is paid correctly and on time, every pay period.",
    relatedLinks: [
      {
        label: "IRS Employment Taxes",
        href: "https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes",
      },
      { label: "DOL Wage and Hour Division", href: "https://www.dol.gov/agencies/whd" },
    ],
  },
  {
    icon: CompassIcon,
    title: "Fractional CFO",
    description:
      "High-level financial strategy and leadership for your business, without the cost of a full-time hire — guidance on scaling your team and growing your deal volume.",
    details:
      "Get strategic financial leadership for your business — forecasting, scaling your team, growing deal volume — without the overhead of a full-time CFO on staff.",
    relatedLinks: [{ label: "SCORE Business Mentoring", href: "https://www.score.org/" }],
  },
  {
    icon: ActivityIcon,
    title: "Business Management",
    description:
      "Deal pipeline, marketing spend, and commission-split metrics tracked and reported clearly.",
    details:
      "We track the metrics that actually reflect how your business is performing — deal pipeline, marketing ROI, commission splits — and report on them clearly so you always know where you stand.",
  },
];

const processSteps: ProcessStep[] = [
  {
    icon: MessageCircleIcon,
    title: "We Learn Your Business",
    description:
      "We start by understanding how you actually earn — your commission structure, marketing spend, and how you're currently tracking deals and expenses. No accounting background needed on your end.",
  },
  {
    icon: FileTextIcon,
    title: "You Send Us the Basics",
    description:
      "After each closing (or monthly, whichever fits how you work), you share your commission statements and expenses. That's the extent of what we need from you.",
  },
  {
    icon: CalculatorIcon,
    title: "We Turn It Into Plain Answers",
    description:
      "Instead of confusing spreadsheets, you get a simple summary: what you earned, what you spent, and what's actually left over — even through the slow months.",
  },
  {
    icon: ReceiptIcon,
    title: "We Handle Tax Season",
    description:
      "Before filing, we review everything for deductions specific to real estate professionals — mileage, marketing, 1099 income — so nothing's missed.",
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

const faqItems: FaqItem[] = [
  {
    question: "I'm a solo agent — is this still for me?",
    answer:
      "Yes. Whether you're a solo agent or run a team, we tailor our services to how you actually earn.",
  },
  {
    question: "How do you handle inconsistent, commission-based income?",
    answer:
      "That's the core of our cash flow and budgeting work — planning around the slow months, not just the good ones.",
  },
  {
    question: "Do you handle 1099 tax planning?",
    answer: "Yes, including mileage, marketing, and other real estate-specific deductions.",
  },
  {
    question: "Can you help me decide whether to grow my team?",
    answer: "Yes, that's a common financial consulting and fractional CFO conversation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the contact form — tell us a bit about your business and we'll follow up to see how we can help.",
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
      <Process
        eyebrow="How It Works"
        heading="Accounting, Explained in Plain English"
        description="You don't need to understand accounting — you just need to close deals. Here's exactly what working with us looks like."
        steps={processSteps}
      />
      <WhyUs
        eyebrow="About Omar Odeh, CPA"
        heading="A Partner Who Understands Real Estate Income"
        description="Real estate income doesn't arrive on a steady schedule. Omar Odeh, CPA works with you throughout the year so your books stay accurate and your decisions stay informed, deal or no deal."
        points={points}
      />
      <Faq items={faqItems} />
      <CtaSection
        heading="Ready to Get Your Business's Books in Order?"
        description="Reach out and tell us about your business — we'll follow up to see how we can help."
        ctaHref="/real-estate/contact"
      />
    </>
  );
}
