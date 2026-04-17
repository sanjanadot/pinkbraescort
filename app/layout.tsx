import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const SITE_URL = "https://pinkbraescort.in";
const SITE_NAME = "Pink Bra Escorts Mumbai";
const OG_IMAGE = `${SITE_URL}/images/services/default-escort.webp`;

export const metadata: Metadata = {
  title: {
    default: `Escorts in Mumbai – Verified Companions 24/7 | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Book verified escorts in Mumbai — VIP, college, independent, Russian and more. Professional, discreet companionship available 24 hours across all Mumbai areas. Call +91-9653203658.",
  openGraph: {
    title: `Escorts in Mumbai – Verified Companions 24/7 | ${SITE_NAME}`,
    description:
      "Verified escorts in Mumbai available 24/7. VIP models, independent and celebrity companions. Discreet, professional service across all Mumbai areas.",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Pink Bra Escorts Mumbai" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Escorts in Mumbai – Verified Companions 24/7 | ${SITE_NAME}`,
    description: "Verified escorts in Mumbai available 24/7. Professional, discreet service across all Mumbai areas.",
    images: [OG_IMAGE],
  },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: "Gk8yQC6YSwo8bMUu813PGVBqFpbwYThNHsQI8T1NlM4" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: "+919653203658",
    email: "sanjanadotsingh@gmail.com",
    description:
      "Pink Bra Escorts is Mumbai's trusted escort agency offering verified, professional companions across all Mumbai areas since 2015.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: "Mumbai" },
    priceRange: "₹₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "347",
    },
    sameAs: ["https://t.me/pinkbraescorts"],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/{search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en-IN">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
