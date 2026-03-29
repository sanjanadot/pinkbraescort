import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/blog/submit"],
      },
    ],
    sitemap: "https://pinkbraescort.in/sitemap.xml",
    host: "https://pinkbraescort.in",
  };
}
