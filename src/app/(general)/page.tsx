import Hero from "@/components/Hero";
import HeroGraphic from "@/components/HeroGraphic";
import Services, { type ServiceItem } from "@/components/Services";
import Process, { type ProcessStep } from "@/components/Process";
import Industries, { type IndustryItem } from "@/components/Industries";
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
  HeartHandIcon,
  HomeIcon,
  MessageCircleIcon,
  PieChartIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  ToothIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/icons";

const services: ServiceItem[] = [
  {
    icon: CalculatorIcon,
    title: "Bookkeeping",
    description:
      "Accurate, up-to-date records of your income, expenses, and transactions, so you have accurate financials whenever you need them.",
    details:
      "We record and reconcile every transaction on a regular schedule, categorize your spending correctly, and keep your books audit-ready year-round — not just scrambled together each April. We work inside whatever software you already use, or help you set one up.",
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
      "Structured budgets that reflect how your business actually operates, built to guide spending and planning decisions.",
    details:
      "A budget built from your actual historical numbers, not a generic template, so you can see where money is going before it's gone and plan major purchases or hires with real numbers behind the decision.",
    relatedLinks: [
      { label: "SBA Business Guide", href: "https://www.sba.gov/business-guide" },
    ],
  },
  {
    icon: HandshakeIcon,
    title: "Financial Consulting",
    description:
      "Practical guidance on financial strategy and business decisions — business analysis, where and how to grow, and how to source funding — explained in plain language, not jargon.",
    details:
      "When you're weighing a big decision — expanding, hiring, taking on a loan or investor — we walk through the numbers with you first, so the decision is based on what your business can actually support, not a guess.",
    relatedLinks: [
      { label: "SBA: Fund Your Business", href: "https://www.sba.gov/business-guide" },
      { label: "SCORE Business Mentoring", href: "https://www.score.org/" },
    ],
  },
  {
    icon: TrendingUpIcon,
    title: "Cash Flow Management",
    description:
      "Ongoing visibility into what's coming in and going out, so you can plan ahead with confidence instead of guessing.",
    details:
      "We track the timing of money in and out, not just the totals, so you can see a cash crunch coming weeks in advance instead of finding out when the bank balance is already low.",
    relatedLinks: [
      { label: "SBA Business Guide", href: "https://www.sba.gov/business-guide" },
    ],
  },
  {
    icon: ReceiptIcon,
    title: "Tax Preparation",
    description:
      "Maximizing every deduction available to your business and making sure you pay exactly what you truly owe — no more, no less.",
    details:
      "We prepare and file your business returns accurately and on time, reviewing your full year of books for every deduction you're entitled to, so tax season is a formality, not a scramble.",
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
      "Processing your payroll accurately and on time, every time, so your team always gets paid without fail.",
    details:
      "From calculating withholdings to filing payroll tax deposits on schedule, we handle the full payroll cycle so your team is paid correctly and on time, every pay period, with no compliance surprises.",
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
      "High-level financial strategy and leadership, without the cost of a full-time hire — budgeting, forecasting, and big decisions guided by someone who knows your numbers.",
    details:
      "Get the strategic financial leadership a growing business needs — forecasting, scenario planning, and a second set of eyes on major decisions — without the overhead of a full-time executive.",
    relatedLinks: [{ label: "SCORE Business Mentoring", href: "https://www.score.org/" }],
  },
  {
    icon: ActivityIcon,
    title: "Business Management",
    description:
      "Operational metrics and reporting tailored to your business, so you always know how you're really doing.",
    details:
      "We track the specific numbers that matter to how your business runs day to day and report on them clearly and regularly, so performance questions have a real answer, not a guess.",
    relatedLinks: [
      { label: "SBA Business Guide", href: "https://www.sba.gov/business-guide" },
    ],
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
    title: "Dental Clinics",
    description: "Accounting built around how a dental clinic actually runs.",
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

const faqItems: FaqItem[] = [
  {
    question: "Do I need to have my books organized before reaching out?",
    answer:
      "No. Many clients come to us with messy or incomplete records. We'll help you get organized from wherever you're starting.",
  },
  {
    question: "What accounting software do you use?",
    answer:
      "We work with whatever software fits your business, or help you set one up if you don't have one yet.",
  },
  {
    question: "How often will we talk?",
    answer:
      "That depends on what you need — some clients prefer monthly check-ins, others want more frequent contact. We'll set a schedule that works for you.",
  },
  {
    question: "Do you only work with dental, therapy, and real estate businesses?",
    answer:
      "Those are where we have the deepest specialized experience, but we work with growing businesses across industries.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the contact details below — tell us a bit about your business and we'll follow up to see how we can help.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        label="Accounting for Growing Businesses"
        headline="Financial Clarity, Built Around Your Business."
        description="Omar Odeh, CPA provides bookkeeping, budgeting, financial consulting, cash flow management, tax preparation, and business management for growing businesses, with specialized experience in dental clinics, therapy practices, and real estate businesses."
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
      <Faq items={faqItems} />
      <CtaSection
        heading="Ready to Get Your Books in Order?"
        description="Select your industry above, or reach out directly using the contact details below — we'll follow up to see how we can help."
        ctaHref="#industries"
        ctaLabel="Get Started"
      />
    </>
  );
}
