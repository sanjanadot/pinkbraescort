import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["pinkbraescort.in"],
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      // ── Edge cases: old slug differs from new slug ──────────────────
      // Old site used "seawoods", new site uses "seawood"
      { source: "/escorts-seawoods.html",    destination: "/escorts-seawood",    permanent: true },
      { source: "/call-girls-seawoods.html", destination: "/call-girls-seawood", permanent: true },
      // "Chuna Bhatti" is not in the new locations list → redirect to Mumbai
      { source: "/escorts-chuna-bhatti.html",    destination: "/escorts-mumbai",    permanent: true },
      { source: "/call-girls-chuna-bhatti.html", destination: "/call-girls-mumbai", permanent: true },

      // ── Generic catch-all: strip .html / .php extension ────────────
      // Covers every other old page: /escorts-andheri.html → /escorts-andheri, etc.
      { source: "/:slug([a-z0-9][a-z0-9-]*).html", destination: "/:slug", permanent: true },
      { source: "/:slug([a-z0-9][a-z0-9-]*).php",  destination: "/:slug", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Robots-Tag", value: "index, follow" },
        ],
      },
    ];
  },
};

export default nextConfig;
