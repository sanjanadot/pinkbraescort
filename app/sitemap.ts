import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { serviceList, locationList, toSlug } from "@/lib/data";

const BASE_URL = "https://pinkbraescort.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/services`,          lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/blog`,              lastModified: now, changeFrequency: "daily",   priority: 0.8 },
    { url: `${BASE_URL}/gallery`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`,             lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`,           lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`,  lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    // /blog/submit intentionally excluded — disallowed in robots.txt
  ];

  // Service pages — derived from the single source in lib/data.ts
  const servicePages: MetadataRoute.Sitemap = serviceList.map(({ slug }) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Escorts location pages — derived from the single source in lib/data.ts
  const escortPages: MetadataRoute.Sitemap = locationList.map((loc) => ({
    url: `${BASE_URL}/escorts-${toSlug(loc)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Call girls location pages
  const callGirlPages: MetadataRoute.Sitemap = locationList.map((loc) => ({
    url: `${BASE_URL}/call-girls-${toSlug(loc)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // SPA center pages
  const spaPages: MetadataRoute.Sitemap = locationList.map((loc) => ({
    url: `${BASE_URL}/spa-center-${toSlug(loc)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  // Blog post pages
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...escortPages,
    ...callGirlPages,
    ...spaPages,
    ...blogPostPages,
  ];
}
