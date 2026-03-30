import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery | Pink Bra Escorts Mumbai - View All Escorts",
  description:
    "View our gallery of 5000+ verified escorts in Mumbai. VIP models, celebrity escorts, Russian girls, and more. Available 24/7.",
  alternates: { canonical: "/gallery" },
};

const galleryImages = [
  { src: "vip-escorts-mumbai.webp", title: "VIP Escorts", href: "/vip-escorts-mumbai" },
  { src: "celebrity-escorts-mumbai.webp", title: "Celebrity Escorts", href: "/celebrity-escorts-mumbai" },
  { src: "elite-model-mumbai.webp", title: "Elite Models", href: "/elite-model-mumbai" },
  { src: "russian-escorts-mumbai.webp", title: "Russian Escorts", href: "/russian-escorts-mumbai" },
  { src: "college-girl-mumbai.webp", title: "College Girls", href: "/college-girl-mumbai" },
  { src: "high-class-model-mumbai.webp", title: "High Class Models", href: "/high-class-model-mumbai" },
  { src: "arab-girls-mumbai.webp", title: "Arab Girls", href: "/arab-girls-mumbai" },
  { src: "bengali-escorts-mumbai.webp", title: "Bengali Escorts", href: "/bengali-escorts-mumbai" },
  { src: "big-boobs-escorts-mumbai.webp", title: "Busty Escorts", href: "/big-boobs-escorts-mumbai" },
  { src: "bombay-escorts-mumbai.webp", title: "Bombay Escorts", href: "/bombay-escorts-mumbai" },
  { src: "cheap-escorts-mumbai.webp", title: "Affordable Escorts", href: "/cheap-escorts-mumbai" },
  { src: "euro-escorts-mumbai.webp", title: "Euro Escorts", href: "/euro-escorts-mumbai" },
  { src: "event-companion-mumbai.webp", title: "Event Companion", href: "/event-companion-mumbai" },
  { src: "foreign-models-mumbai.webp", title: "Foreign Models", href: "/foreign-models-mumbai" },
  { src: "girlfriend-escorts-mumbai.webp", title: "Girlfriend Experience", href: "/girlfriend-escorts-mumbai" },
  { src: "housewife-escorts-mumbai.webp", title: "Housewife Escorts", href: "/housewife-escorts-mumbai" },
  { src: "incall-escorts-mumbai.webp", title: "Incall Escorts", href: "/incall-escorts-mumbai" },
  { src: "independent-escorts-mumbai.webp", title: "Independent Escorts", href: "/independent-escorts-mumbai" },
  { src: "local-beauties-mumbai.webp", title: "Local Beauties", href: "/local-beauties-mumbai" },
  { src: "local-escorts-mumbai.webp", title: "Local Escorts", href: "/local-escorts-mumbai" },
  { src: "mature-escorts-mumbai.webp", title: "Mature Escorts", href: "/mature-escorts-mumbai" },
  { src: "mature-girls-mumbai.webp", title: "Mature Girls", href: "/mature-girls-mumbai" },
  { src: "nepali-escorts-mumbai.webp", title: "Nepali Escorts", href: "/nepali-escorts-mumbai" },
  { src: "north-indian-escorts-mumbai.webp", title: "North Indian Escorts", href: "/north-indian-escorts-mumbai" },
  { src: "outcall-escorts-mumbai.webp", title: "Outcall Escorts", href: "/outcall-escorts-mumbai" },
  { src: "premium-models-mumbai.webp", title: "Premium Models", href: "/premium-models-mumbai" },
  { src: "punjabi-escorts-mumbai.webp", title: "Punjabi Escorts", href: "/punjabi-escorts-mumbai" },
  { src: "slim-escorts-mumbai.webp", title: "Slim Escorts", href: "/slim-escorts-mumbai" },
  { src: "top-class-model-mumbai.webp", title: "Top Class Models", href: "/top-class-model-mumbai" },
  { src: "travel-escorts-mumbai.webp", title: "Travel Escorts", href: "/travel-escorts-mumbai" },
  { src: "unsatisfied-bhabhi-mumbai.webp", title: "Unsatisfied Bhabhi", href: "/unsatisfied-bhabhi-mumbai" },
  { src: "unsatisfied-female-mumbai.webp", title: "Unsatisfied Females", href: "/unsatisfied-female-mumbai" },
  { src: "young-girl-mumbai.webp", title: "Young Girls", href: "/young-girl-mumbai" },
  { src: "independent-model-escorts.webp", title: "Independent Models", href: "/independent-model-escorts" },
  { src: "expert-escorts-mumbai.webp", title: "Expert Escorts", href: "/expert-escorts-mumbai" },
  { src: "special-companionship-mumbai.webp", title: "Special Companionship", href: "/special-companionship-mumbai" },
];

export default function GalleryPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Escort Gallery Mumbai</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Browse our exclusive gallery of Mumbai&apos;s finest escorts. All photos are verified and
            represent actual escorts available for booking.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img) => (
              <Link
                key={img.src}
                href={img.href}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/images/services/${img.src}`}
                    alt={`${img.title} Mumbai`}
                    width={300}
                    height={350}
                    className="w-full h-72 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="text-white font-semibold">Book Now →</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                    {img.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-pink-100 mb-8 text-lg">
            Call or WhatsApp us now to book your preferred escort. Available 24/7.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="tel:+919653203658"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919653203658"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
