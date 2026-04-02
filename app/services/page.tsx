import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Escort Services in Mumbai – All Categories",
  description:
    "Browse all escort service categories in Mumbai — VIP models, college companions, Russian escorts, independent professionals and more. Verified, discreet, available 24/7.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Escort Services in Mumbai – All Categories | Pink Bra Escorts",
    description: "All escort categories in Mumbai. Verified companions available 24/7 for incall and outcall bookings.",
    url: "https://pinkbraescort.in/services",
    type: "website",
    images: [{ url: "https://pinkbraescort.in/images/services/vip-escorts-mumbai.webp", width: 1200, height: 630, alt: "Escort Services in Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Escort Services in Mumbai – All Categories",
    description: "All escort categories in Mumbai. Verified companions available 24/7 for incall and outcall bookings.",
    images: ["https://pinkbraescort.in/images/services/vip-escorts-mumbai.webp"],
  },
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Escort Services in Mumbai</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Browse verified escorts across all categories in Mumbai — VIP models, college companions,
            Russian escorts, independent professionals and more. Available 24 hours for incall and outcall bookings.
          </p>
        </div>
      </section>
      <ServicesGrid />
    </main>
  );
}
