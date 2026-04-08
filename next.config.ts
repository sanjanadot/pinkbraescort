import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["pinkbraescort.in"],
    formats: ["image/webp", "image/avif"],
  },
  async redirects() {
    return [
      // ── Edge cases: old slug differs from new slug ──────────────────
      { source: "/escorts-seawoods.html",    destination: "/escorts-seawood",    permanent: true },
      { source: "/call-girls-seawoods.html", destination: "/call-girls-seawood", permanent: true },
      { source: "/escorts-chuna-bhatti.html",    destination: "/escorts-mumbai",    permanent: true },
      { source: "/call-girls-chuna-bhatti.html", destination: "/call-girls-mumbai", permanent: true },

      // ── Products pages (old e-commerce site) ───────────────────────
      { source: "/products/:id*", destination: "/", permanent: true },

      // ── Language subdirectories (Marathi / Hindi) ──────────────────
      { source: "/mr/:path*", destination: "/", permanent: true },
      { source: "/hi/:path*", destination: "/", permanent: true },

      // ── AMP pages ──────────────────────────────────────────────────
      { source: "/amp/:path*", destination: "/", permanent: true },

      // ── RSS / XML feed files ───────────────────────────────────────
      { source: "/rss/:path*",          destination: "/", permanent: true },
      { source: "/feed/:path*",         destination: "/", permanent: true },
      { source: "/:slug-rss.xml",       destination: "/", permanent: true },

      // ── Blog gallery → /gallery ────────────────────────────────────
      { source: "/blog/gallery",        destination: "/gallery", permanent: true },
      { source: "/blog/gallery/:path*", destination: "/gallery", permanent: true },

      // ── Blog nested paths (old WordPress-style nested slugs) ───────
      // e.g. /blog/escorts-in-singrauli/call-girls-bandra.php
      { source: "/blog/:parent/:child",        destination: "/blog", permanent: true },
      { source: "/blog/:parent/:child/:rest*", destination: "/blog", permanent: true },

      // ── Miscellaneous legacy / bot-crawled paths ───────────────────
      { source: "/locations.php",     destination: "/", permanent: true },
      { source: "/search",            destination: "/", permanent: true },
      { source: "/shigotoba",         destination: "/", permanent: true },
      { source: "/kaisya/:path*",     destination: "/", permanent: true },
      { source: "/guide/:path*",      destination: "/", permanent: true },
      { source: "/ol/:path*",         destination: "/", permanent: true },
      { source: "/iqr/:path*",        destination: "/", permanent: true },
      { source: "/odr/:path*",        destination: "/", permanent: true },
      { source: "/tpc/:path*",        destination: "/", permanent: true },
      { source: "/mbr/:path*",        destination: "/", permanent: true },

      // ── Malformed URLs ─────────────────────────────────────────────
      { source: "/:slug.htmlIf",      destination: "/", permanent: true },

      // ── Generic catch-all: strip .html / .php extension ────────────
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
