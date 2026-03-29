import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Escort Services Mumbai | All Categories - Pink Bra Escorts",
  description:
    "Browse all escort services in Mumbai - VIP, Celebrity, Russian, College, Independent escorts and more. 5000+ verified escorts available 24/7.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Escort Services in Mumbai</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Browse 5000+ verified escorts across all categories. Premium VIP models, celebrity
            escorts, Russian girls and more — available 24/7 across all Mumbai locations.
          </p>
        </div>
      </section>
      <ServicesGrid />
    </main>
  );
}
