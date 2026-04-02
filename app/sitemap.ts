import type { MetadataRoute } from "next";
import { existsSync } from "fs";
import { join } from "path";
import { blogPosts } from "@/lib/blog-posts";
import { serviceList, locationList, toSlug } from "@/lib/data";

const BASE_URL = "https://pinkbraescort.in";

/** Returns the absolute image URL for a location if the file actually exists, otherwise null. */
function locationImage(loc: string): string | undefined {
  const slug = toSlug(loc);
  const filePath = join(process.cwd(), "public", "images", "locations", "mumbai", `${slug}.webp`);
  return existsSync(filePath) ? `${BASE_URL}/images/locations/mumbai/${slug}.webp` : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/services`,          lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/blog`,              lastModified: now, changeFrequency: "daily",   priority: 0.8 },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      // Declare every service image so Google indexes them from the gallery page
      images: serviceList.map((s) => `${BASE_URL}/images/services/${s.img}`),
    },
    { url: `${BASE_URL}/about`,             lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`,           lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`,    lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`,  lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    // /blog/submit intentionally excluded — disallowed in robots.txt
  ];

  // Service pages — each with its own image
  const servicePages: MetadataRoute.Sitemap = serviceList.map(({ slug, img }) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    images: [`${BASE_URL}/images/services/${img}`],
  }));

  // Escorts location pages — include the location image where available
  const escortPages: MetadataRoute.Sitemap = locationList.map((loc) => {
    const img = locationImage(loc);
    return {
      url: `${BASE_URL}/escorts-${toSlug(loc)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      ...(img && { images: [img] }),
    };
  });

  // Call girls location pages
  const callGirlPages: MetadataRoute.Sitemap = locationList.map((loc) => {
    const img = locationImage(loc);
    return {
      url: `${BASE_URL}/call-girls-${toSlug(loc)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
      ...(img && { images: [img] }),
    };
  });

  // SPA center pages
  const spaPages: MetadataRoute.Sitemap = locationList.map((loc) => {
    const img = locationImage(loc);
    return {
      url: `${BASE_URL}/spa-center-${toSlug(loc)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
      ...(img && { images: [img] }),
    };
  });

  // Blog post pages — each post carries its own cover image
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    ...(post.image && { images: [`${BASE_URL}${post.image}`] }),
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
