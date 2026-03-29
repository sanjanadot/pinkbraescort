import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Main crawlers — allow everything except internals and form pages
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/blog/submit"],
      },
      // Block AI training crawlers (they scrape for datasets, not search indexing)
      {
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web", "Amazonbot", "YouBot", "PerplexityBot"],
        disallow: "/",
      },
      // Allow Google's AI search features (SGE / AI Overviews drive real traffic)
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: "https://pinkbraescort.in/sitemap.xml",
    host: "https://pinkbraescort.in",
  };
}
