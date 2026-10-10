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
      "Day-to-day tracking of production, collections, and expenses across your clinic, so your books always match your chairside reality and you have accurate financials whenever you need them.",
    details:
      "We reconcile your production and collections against your bank deposits on a regular schedule, categorize supply and lab expenses correctly, and keep your clinic's books audit-ready year-round. We work inside whatever practice management and accounting software you already use.",
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
      "Budgets built around your clinic's real overhead — supplies, lab fees, staff, and equipment — not generic templates.",
    details:
      "We build your budget from your clinic's actual spending history — supplies, lab fees, equipment leases, staff — so you can plan a new hire, a renovation, or new equipment with real numbers behind the decision.",
    relatedLinks: [
      { label: "SBA Business Guide", href: "https://www.sba.gov/business-guide" },
    ],
  },
  {
    icon: HandshakeIcon,
    title: "Financial Consulting",
    description:
      "Guidance on associate buy-ins, equipment purchases, and growth decisions — business analysis, where to grow, and how to source funding — from someone who understands dental clinic economics.",
    details:
      "Considering an associate buy-in, a second location, or major equipment financing? We walk through the numbers with you first, so the decision is grounded in what your clinic can actually support.",
    relatedLinks: [
      { label: "SBA: Fund Your Business", href: "https://www.sba.gov/business-guide" },
      { label: "SCORE Business Mentoring", href: "https://www.score.org/" },
    ],
  },
  {
    icon: TrendingUpIcon,
    title: "Cash Flow Management",
    description:
      "Visibility into production versus collections and insurance reimbursement timing, so cash flow gaps don't catch you off guard.",
    details:
      "We track the gap between what you produce and what actually gets collected, including insurance reimbursement timing, so a slow reimbursement month doesn't catch your clinic off guard.",
    relatedLinks: [
      { label: "SBA Business Guide", href: "https://www.sba.gov/business-guide" },
    ],
  },
  {
    icon: ReceiptIcon,
    title: "Tax Preparation",
    description:
      "Maximizing every deduction available to your clinic — equipment, supplies, lab fees — and making sure you pay exactly what you truly owe.",
    details:
      "We review a full year of your clinic's books for every available deduction — equipment depreciation, supplies, lab fees, entity structure — and file accurately and on time.",
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
      "Processing payroll accurately and on time for your hygienists, assistants, and front desk staff, every pay period without fail.",
    details:
      "We handle the full payroll cycle for your clinic's team — hygienists, assistants, front desk — including withholdings and payroll tax deposits, so everyone is paid correctly, on time, every period.",
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
      "High-level financial strategy and leadership for your clinic, without the cost of a full-time hire — guidance on expansion, equipment financing, and big decisions.",
    details:
      "Get strategic financial leadership for your clinic — forecasting, expansion planning, equipment financing decisions — without the overhead of a full-time CFO on staff.",
    relatedLinks: [{ label: "SCORE Business Mentoring", href: "https://www.score.org/" }],
  },
  {
    icon: ActivityIcon,
    title: "Business Management",
    description:
      "Chair utilization, hygiene production, overhead ratios, and other clinic-level metrics tracked and reported clearly.",
    details:
      "We track the metrics that actually reflect how your clinic is performing — chair utilization, hygiene production, overhead as a percentage of production — and report on them clearly so you always know where you stand.",
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

const faqItems: FaqItem[] = [
  {
    question: "Do I need to switch practice management software?",
    answer:
      "No. We work with the systems your clinic already uses and pull the numbers we need from there.",
  },
  {
    question: "What if my clinic's books are a mess or out of date?",
    answer:
      "That's common, and we can help bring them current before moving forward with ongoing bookkeeping.",
  },
  {
    question: "Do you work with multi-location practices?",
    answer:
      "Yes, we can track and report on each location separately or combined, whichever is more useful to you.",
  },
  {
    question: "Can you help with associate buy-ins or partnership decisions?",
    answer: "Yes, that falls under our financial consulting and fractional CFO services.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the contact form — tell us a bit about your clinic and we'll follow up to see how we can help.",
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
      <Faq items={faqItems} />
      <CtaSection
        heading="Ready to Get Your Clinic's Books in Order?"
        description="Reach out and tell us about your clinic — we'll follow up to see how we can help."
        ctaHref="/dental/contact"
      />
    </>
  );
}
