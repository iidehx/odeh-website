import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.omarodehcpa.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/dental", "/therapy", "/real-estate"],
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
