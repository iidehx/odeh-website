import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.omarodehcpa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/resources/bookkeeper-vs-cpa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/resources/fractional-cfo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/dental`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/dental/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/dental/resources/dental-overhead-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/dental/resources/dental-cpa-cost`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/dental/resources/production-vs-collections`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/therapy`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/therapy/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/therapy/resources/aba-cash-reserve-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/therapy/resources/aba-payroll-bookkeeping`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/real-estate`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/real-estate/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/real-estate/resources/quarterly-tax-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/real-estate/resources/tax-deductions-checklist`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
