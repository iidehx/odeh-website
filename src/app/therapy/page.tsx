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
      "Day-to-day tracking of session billing, insurance reimbursements, and expenses, so you have accurate financials whenever you need them.",
    details:
      "We reconcile your session billing and insurance reimbursements against your deposits on a regular schedule, categorize expenses correctly, and keep your books audit-ready year-round. We work inside whatever billing and accounting software your practice already uses.",
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
      "Budgets built around your practice's real costs — space, equipment, staff, and continuing education — not generic templates.",
    details:
      "We build your budget from your practice's actual spending history — space, equipment, staff, continuing education — so you can plan a new hire or a new location with real numbers behind the decision.",
    relatedLinks: [
      { label: "SBA Business Guide", href: "https://www.sba.gov/business-guide" },
    ],
  },
  {
    icon: HandshakeIcon,
    title: "Financial Consulting",
    description:
      "Guidance on hiring additional providers, expanding your practice, or adjusting your fee schedule — business analysis, where to grow, and how to source funding — from someone who understands therapy practice economics.",
    details:
      "Considering hiring another provider, opening a second location, or adjusting your fee schedule? We walk through the numbers with you first, so the decision is grounded in what your practice can actually support.",
    relatedLinks: [
      { label: "SBA: Fund Your Business", href: "https://www.sba.gov/business-guide" },
      { label: "SCORE Business Mentoring", href: "https://www.score.org/" },
    ],
  },
  {
    icon: TrendingUpIcon,
    title: "Cash Flow Management",
    description:
      "Visibility into billed versus collected revenue and insurance reimbursement timing, so cash flow gaps don't catch you off guard.",
    details:
      "We track the gap between what you bill and what actually gets collected, including insurance reimbursement timing, so a slow reimbursement month doesn't catch your practice off guard.",
    relatedLinks: [
      { label: "SBA Business Guide", href: "https://www.sba.gov/business-guide" },
    ],
  },
  {
    icon: ReceiptIcon,
    title: "Tax Preparation",
    description:
      "Maximizing every deduction available to your practice — continuing education, equipment, space — and making sure you pay exactly what you truly owe.",
    details:
      "We review a full year of your practice's books for every available deduction — continuing education, equipment, space, entity structure — and file accurately and on time.",
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
      "Processing payroll accurately and on time for your providers and support staff, every pay period without fail.",
    details:
      "We handle the full payroll cycle for your practice's team — providers and support staff — including withholdings and payroll tax deposits, so everyone is paid correctly, on time, every period.",
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
      "High-level financial strategy and leadership for your practice, without the cost of a full-time hire — guidance on hiring, expansion, and big decisions.",
    details:
      "Get strategic financial leadership for your practice — forecasting, hiring decisions, expansion planning — without the overhead of a full-time CFO on staff.",
    relatedLinks: [{ label: "SCORE Business Mentoring", href: "https://www.score.org/" }],
  },
  {
    icon: ActivityIcon,
    title: "Business Management",
    description:
      "Session utilization, no-show rates, provider productivity, and other practice-level metrics tracked and reported clearly.",
    details:
      "We track the metrics that actually reflect how your practice is performing — session utilization, no-show rates, provider productivity — and report on them clearly so you always know where you stand.",
  },
];

const processSteps: ProcessStep[] = [
  {
    icon: MessageCircleIcon,
    title: "We Learn Your Practice",
    description:
      "We start by understanding how your practice actually runs — session volume, how insurance billing works for you, and how you're currently tracking income and expenses. No accounting background needed on your end.",
  },
  {
    icon: FileTextIcon,
    title: "You Send Us the Basics",
    description:
      "Each month, you share your billing and payment records, or we help you start organizing them if you're not already. That's the extent of what we need from you.",
  },
  {
    icon: CalculatorIcon,
    title: "We Turn It Into Plain Answers",
    description:
      "Instead of confusing spreadsheets, you get a simple summary: what came in, what went out, and what's actually left over.",
  },
  {
    icon: ReceiptIcon,
    title: "We Handle Tax Season",
    description:
      "Before filing, we review everything for deductions specific to therapy practices — continuing education, equipment, space — so nothing's missed.",
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

const faqItems: FaqItem[] = [
  {
    question: "Do you work with ABA practices specifically?",
    answer:
      "Yes, ABA practices are one of our core areas of focus, alongside physical, occupational, and speech therapy.",
  },
  {
    question: "What if insurance reimbursements are delayed or inconsistent?",
    answer:
      "That's exactly what our cash flow management service is built around — planning through the gaps, not just reacting to them.",
  },
  {
    question: "Do I need special billing or scheduling software?",
    answer: "No, we work with whatever billing and scheduling software your practice already uses.",
  },
  {
    question: "Can you help me decide whether to hire another provider?",
    answer:
      "Yes, that's a common financial consulting and fractional CFO conversation — we'll walk through the numbers with you.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the contact form — tell us a bit about your practice and we'll follow up to see how we can help.",
  },
];

export default function TherapyPage() {
  return (
    <>
      <Hero
        label="Accounting for ABA & Therapy Practices"
        headline="Financial Clarity for Your Therapy Practice."
        description="Omar Odeh, CPA helps ABA, physical, occupational, and speech therapy practices stay organized and in control of their finances with bookkeeping, budgeting, cash flow management, and business management built around how a therapy practice actually runs."
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
      <Process
        eyebrow="How It Works"
        heading="Accounting, Explained in Plain English"
        description="You don't need to understand accounting — you just need to run your practice. Here's exactly what working with us looks like."
        steps={processSteps}
      />
      <WhyUs
        eyebrow="About Omar Odeh, CPA"
        heading="A Partner Who Understands Therapy Practices"
        description="Therapy practices deserve more than a once-a-year tax appointment. Omar Odeh, CPA works with you throughout the year so your books stay accurate and your decisions stay informed."
        points={points}
      />
      <Faq items={faqItems} />
      <CtaSection
        heading="Ready to Get Your Practice's Books in Order?"
        description="Reach out and tell us about your practice — we'll follow up to see how we can help."
        ctaHref="/therapy/contact"
      />
    </>
  );
}
