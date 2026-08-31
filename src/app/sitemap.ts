import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.odehhealthcare.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${siteUrl}/dental`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/dental/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/dental/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/dental/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/therapy`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/therapy/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/therapy/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/therapy/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
