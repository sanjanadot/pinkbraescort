import Image from "next/image";
import Link from "next/link";

const services = [
  { slug: "vip-escorts-mumbai", title: "VIP Escorts", desc: "Premium VIP Service", badge: "VIP", img: "vip-escorts-mumbai.webp" },
  { slug: "celebrity-escorts-mumbai", title: "Celebrity Escorts", desc: "Star-Like Escorts", badge: "CELEBRITY", img: "celebrity-escorts-mumbai.webp" },
  { slug: "elite-model-mumbai", title: "Elite Models", desc: "Professional Model Escorts", badge: "ELITE", img: "elite-model-mumbai.webp" },
  { slug: "arab-girls-mumbai", title: "Arab Girls", desc: "Exotic Arabian Beauty", badge: "EXOTIC", img: "arab-girls-mumbai.webp" },
  { slug: "college-girl-mumbai", title: "College Girls", desc: "Young Student Escorts", badge: "YOUTHFUL", img: "college-girl-mumbai.webp" },
  { slug: "high-class-model-mumbai", title: "High Class Models", desc: "Luxury Model Escorts", badge: "LUXURY", img: "high-class-model-mumbai.webp" },
  { slug: "slim-escorts-mumbai", title: "Slim Escorts", desc: "Elegant Slim Escorts", badge: "ELEGANT", img: "slim-escorts-mumbai.webp" },
  { slug: "young-girl-mumbai", title: "Young Girls", desc: "Fresh Youthful Energy", badge: "FRESH", img: "young-girl-mumbai.webp" },
  { slug: "cheap-escorts-mumbai", title: "Affordable Escorts", desc: "Budget-Friendly Options", badge: "BUDGET", img: "cheap-escorts-mumbai.webp" },
  { slug: "premium-models-mumbai", title: "Premium Models", desc: "Professional models with stunning looks", badge: "PREMIUM", img: "premium-models-mumbai.webp" },
  { slug: "foreign-models-mumbai", title: "Foreign Models", desc: "International beauties from Europe", badge: "FOREIGN", img: "foreign-models-mumbai.webp" },
  { slug: "independent-escorts-mumbai", title: "Independent Escorts", desc: "Professional independent escorts", badge: "INDEPENDENT", img: "independent-escorts-mumbai.webp" },
  { slug: "local-beauties-mumbai", title: "Local Beauties", desc: "Regional beauties from different states", badge: "LOCAL", img: "local-beauties-mumbai.webp" },
  { slug: "outcall-escorts-mumbai", title: "Outcall Escorts", desc: "Visit you at your preferred location", badge: "OUTCALL", img: "outcall-escorts-mumbai.webp" },
  { slug: "incall-escorts-mumbai", title: "Incall Escorts", desc: "Visit our comfortable private locations", badge: "INCALL", img: "incall-escorts-mumbai.webp" },
  { slug: "travel-escorts-mumbai", title: "Travel Companion", desc: "Perfect escorts for business trips", badge: "TRAVEL", img: "travel-escorts-mumbai.webp" },
  { slug: "event-companion-mumbai", title: "Event Companion", desc: "Elegant escorts for social events", badge: "EVENT", img: "event-companion-mumbai.webp" },
  { slug: "mature-escorts-mumbai", title: "Mature Escorts", desc: "Experienced sophisticated escorts", badge: "MATURE", img: "mature-escorts-mumbai.webp" },
  { slug: "bengali-escorts-mumbai", title: "Bengali Escorts", desc: "Beautiful Bengali escorts", badge: "BENGALI", img: "bengali-escorts-mumbai.webp" },
  { slug: "housewife-escorts-mumbai", title: "Housewife Escorts", desc: "Mature housewife escorts", badge: "HOUSEWIFE", img: "housewife-escorts-mumbai.webp" },
  { slug: "bombay-escorts-mumbai", title: "Bombay Escorts", desc: "Classic Bombay style escorts", badge: "BOMBAY", img: "bombay-escorts-mumbai.webp" },
  { slug: "euro-escorts-mumbai", title: "Euro Escorts", desc: "European beauties with class", badge: "EUROPEAN", img: "euro-escorts-mumbai.webp" },
  { slug: "girlfriend-escorts-mumbai", title: "Girlfriend Experience", desc: "Intimate girlfriend experience", badge: "GFE", img: "girlfriend-escorts-mumbai.webp" },
  { slug: "russian-escorts-mumbai", title: "Russian Escorts", desc: "Exotic Russian beauties", badge: "RUSSIAN", img: "russian-escorts-mumbai.webp" },
  { slug: "punjabi-escorts-mumbai", title: "Punjabi Escorts", desc: "Energetic Punjabi escorts", badge: "PUNJABI", img: "punjabi-escorts-mumbai.webp" },
  { slug: "nepali-escorts-mumbai", title: "Nepali Escorts", desc: "Beautiful Nepali escorts", badge: "NEPALI", img: "nepali-escorts-mumbai.webp" },
  { slug: "north-indian-escorts-mumbai", title: "North Indian Escorts", desc: "Traditional North Indian beauties", badge: "NORTH INDIAN", img: "north-indian-escorts-mumbai.webp" },
  { slug: "top-class-model-mumbai", title: "Top Class Models", desc: "Elite top class model escorts", badge: "TOP CLASS", img: "top-class-model-mumbai.webp" },
  { slug: "local-escorts-mumbai", title: "Local Escorts", desc: "Local Mumbai escorts", badge: "LOCAL", img: "local-escorts-mumbai.webp" },
  { slug: "mature-girls-mumbai", title: "Mature Girls", desc: "Experienced mature escorts", badge: "MATURE", img: "mature-escorts-mumbai.webp" },
  { slug: "independent-model-escorts", title: "Independent Models", desc: "Independent professional models", badge: "MODEL", img: "independent-model-escorts.webp" },
  { slug: "expert-escorts-mumbai", title: "Expert Services", desc: "Professional expert service providers", badge: "EXPERT", img: "expert-escorts-mumbai.webp" },
  { slug: "big-boobs-escorts-mumbai", title: "Busty Escorts", desc: "Voluptuous escorts with curves", badge: "BUSTY", img: "big-boobs-escorts-mumbai.webp" },
  { slug: "unsatisfied-bhabhi-mumbai", title: "Unsatisfied Bhabhi", desc: "Unsatisfied married women", badge: "BHABHI", img: "unsatisfied-bhabhi-mumbai.webp" },
  { slug: "unsatisfied-female-mumbai", title: "Unsatisfied Females", desc: "Unsatisfied women seeking companionship", badge: "FEMALE", img: "unsatisfied-female-mumbai.webp" },
  { slug: "special-companionship-mumbai", title: "Special Companionship", desc: "Unique special companionship services", badge: "SPECIAL", img: "special-companionship-mumbai.webp" },
];

export default function ServicesGrid() {
  return (
    <section id="escorts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Premium Escorts In Mumbai - Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={`/images/services/${service.img}`}
                  alt={`${service.title} Mumbai`}
                  width={400}
                  height={384}
                  className="w-full h-96 object-cover object-top transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                  <i className="fas fa-star text-xs" aria-hidden="true"></i>
                  <span>{service.badge}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link
                  href={`/${service.slug}`}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transform hover:-translate-y-1 transition-all duration-300 inline-block"
                >
                  Book {service.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transform hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
