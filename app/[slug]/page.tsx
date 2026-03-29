import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

/* ── Services ── */
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
  { slug: "unsatisfied-bhabhi-mumbai", title: "Unsatisfied Bhabhi", desc: "Mature married women escorts", badge: "BHABHI", img: "unsatisfied-bhabhi-mumbai.webp" },
  { slug: "unsatisfied-female-mumbai", title: "Unsatisfied Females", desc: "Women seeking companionship", badge: "FEMALE", img: "unsatisfied-female-mumbai.webp" },
  { slug: "special-companionship-mumbai", title: "Special Companionship", desc: "Unique special companionship services", badge: "SPECIAL", img: "special-companionship-mumbai.webp" },
  { slug: "special-escorts-mumbai", title: "Special Escorts", desc: "Special escort services in Mumbai", badge: "SPECIAL", img: "special-companionship-mumbai.webp" },
  { slug: "hj-bj-expert-escorts-mumbai", title: "HJ BJ Expert Escorts", desc: "Expert intimate escorts in Mumbai", badge: "EXPERT", img: "expert-escorts-mumbai.webp" },
  { slug: "pink-tits-mumbai", title: "Pink Escorts", desc: "Beautiful Pink Bra escorts", badge: "PINK", img: "pink-tits-mumbai.webp" },
];

/* ── Locations ── */
const locations = [
  "Andheri", "Bandra", "Juhu", "Powai", "Lower Parel", "Worli", "Colaba", "Fort",
  "Thane", "Navi Mumbai", "Airoli", "Ambernath", "Belapur", "Bhandup", "Bhayandar",
  "Bhiwandi", "Borivali", "Byculla", "Chembur", "Churchgate", "Dadar", "Dombivli",
  "Ghatkopar", "Goregaon", "Jogeshwari", "Kalyan", "Kandivali", "Khar", "Kharghar",
  "Kurla", "Malad", "Marine Lines", "Mira Road", "Mulund", "Panvel", "Santacruz",
  "Vasai", "Vashi", "Versova", "Virar", "Ambivali", "Asangaon", "Badlapur", "Boisar",
  "Charni Road", "Chinchpokli", "Chuna Bhatti", "CST", "Diva", "Ghansoli",
  "Ghodbunder Road", "Govandi", "Grant Road", "Juinagar", "Kalamboli", "Kalwa",
  "Kanjurmarg", "Karjat", "Kasara", "Kamothe", "Khopoli",
  "Kopar Khairane", "Lokhandwala", "Mahim", "Masjid Bandar", "Mumbai Airport",
  "Mumbai Central", "Mumbai", "Mumbra", "Nahur", "Naigaon", "Nalasopara",
  "Nariman Point", "Neral", "Nerul", "Palghar", "Parel", "Prabhadevi", "Rabale",
  "Sakinaka", "Sanpada", "Saphale", "Seawoods", "Sion", "Taloja", "Thakurli",
  "Titwala", "Ulhasnagar", "Ulwe", "Vidyavihar", "Vikhroli",
  "Vile Parle", "Wadala",
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

/* ── Lookup maps ── */
const serviceMap = new Map(services.map((s) => [s.slug, s]));
const locationByPart = new Map(locations.map((loc) => [toSlug(loc), loc]));

/* ── Slug parser ── */
type Parsed =
  | { kind: "service"; service: (typeof services)[number] }
  | { kind: "location"; location: string; keyword: "Escorts" | "Call Girls" };

function parseSlug(slug: string): Parsed | null {
  const service = serviceMap.get(slug);
  if (service) return { kind: "service", service };

  if (slug.startsWith("escorts-")) {
    const loc = locationByPart.get(slug.slice(8));
    if (loc) return { kind: "location", location: loc, keyword: "Escorts" };
  }
  if (slug.startsWith("call-girls-")) {
    const loc = locationByPart.get(slug.slice(11));
    if (loc) return { kind: "location", location: loc, keyword: "Call Girls" };
  }
  return null;
}

/* ── Static params ── */
export function generateStaticParams() {
  const serviceSlugs = services.map((s) => ({ slug: s.slug }));
  const escortSlugs = locations.map((loc) => ({ slug: `escorts-${toSlug(loc)}` }));
  const callGirlSlugs = locations.map((loc) => ({ slug: `call-girls-${toSlug(loc)}` }));
  return [...serviceSlugs, ...escortSlugs, ...callGirlSlugs];
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return { title: "Pink Bra Escorts Mumbai" };

  if (parsed.kind === "service") {
    const { service } = parsed;
    return {
      title: `${service.title} Mumbai | Pink Bra Escorts - Book Now`,
      description: `Book ${service.title} in Mumbai. Verified, discreet and professional. 5000+ escorts available 24/7. Call +91-9653203658.`,
      alternates: { canonical: `/${slug}` },
    };
  }

  const { location, keyword } = parsed;
  return {
    title: `${keyword} in ${location} Mumbai | Pink Bra - Book Now`,
    description: `Book premium ${keyword.toLowerCase()} in ${location}, Mumbai. Verified, discreet and professional. Available 24/7. Call +91-9653203658.`,
    alternates: { canonical: `/${slug}` },
  };
}

/* ── Page ── */
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  /* ── Service page ── */
  if (parsed.kind === "service") {
    const { service } = parsed;
    return (
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              {service.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title} in Mumbai
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
              {service.desc} — Verified, discreet and available 24/7 across all Mumbai locations.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+919653203658" className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors">
                📞 Call Now
              </a>
              <a href="https://api.whatsapp.com/send?phone=919653203658" rel="noopener noreferrer" target="_blank" className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={`/images/services/${service.img}`}
                  alt={`${service.title} Mumbai`}
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover object-top"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  About Our {service.title} in Mumbai
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                  Pink Bra Escorts offers the finest <strong>{service.title.toLowerCase()}</strong> in
                  Mumbai. Our escorts are carefully verified, fully professional, and dedicated to
                  providing an unforgettable experience.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Available across Andheri, Bandra, Juhu, Powai, Thane, Navi Mumbai and all major
                  Mumbai locations. We provide both incall and outcall services.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  With 5000+ verified escorts and 10+ years of experience, Pink Bra Escorts is
                  Mumbai&apos;s most trusted name. Complete discretion guaranteed for every booking.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: "fas fa-check-circle", text: "100% Verified" },
                    { icon: "fas fa-clock", text: "Available 24/7" },
                    { icon: "fas fa-shield-alt", text: "Full Discretion" },
                    { icon: "fas fa-bolt", text: "30-Min Arrival" },
                  ].map((feat) => (
                    <div key={feat.text} className="flex items-center gap-2 text-gray-700">
                      <i className={`${feat.icon} text-pink-500`} aria-hidden="true"></i>
                      <span className="font-medium">{feat.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap">
                  <a href="tel:+919653203658" className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors">
                    Book Now — Call Us
                  </a>
                  <Link href="/contact" className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">More Escort Services in Mumbai</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {services.filter((s) => s.slug !== slug).slice(0, 12).map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="bg-white border border-pink-100 hover:border-pink-400 hover:bg-pink-50 text-gray-700 text-center py-3 px-3 rounded-lg font-medium transition-all duration-200 text-sm">
                  {s.title}
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/services" className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Book {service.title} Now</h2>
            <p className="text-pink-100 mb-8 text-lg">Available 24/7 across all Mumbai locations. Call or WhatsApp to book instantly.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+919653203658" className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors">
                📞 +91-9653203658
              </a>
              <a href="https://api.whatsapp.com/send?phone=919653203658" rel="noopener noreferrer" target="_blank" className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors">
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /* ── Location / Call-Girls page ── */
  const { location, keyword } = parsed;
  const isCallGirls = keyword === "Call Girls";

  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {keyword} in {location}, Mumbai
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
            Premium verified {keyword.toLowerCase()} available in {location} and surrounding areas.
            Discreet, professional and available 24/7.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919653203658" className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors">
              📞 Call Now
            </a>
            <a href="https://api.whatsapp.com/send?phone=919653203658" rel="noopener noreferrer" target="_blank" className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Premium {keyword} Service in {location}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            Pink Bra Escorts provides Mumbai&apos;s finest {keyword.toLowerCase()} in{" "}
            <strong>{location}</strong>. Whether you&apos;re staying at a hotel, at home, or need
            a companion for an event — we are just a call away.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            All {keyword.toLowerCase()} serving {location} are 100% verified, professional, and
            trained to maintain complete discretion. We offer both incall and outcall services
            with a guaranteed 30–45 minute arrival time.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            With 5000+ verified escorts and over 10 years of experience, Pink Bra Escorts is
            Mumbai&apos;s most trusted agency. Book today and experience the difference.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              { icon: "fas fa-check-circle", title: "100% Verified", desc: "All escorts personally verified before joining our roster" },
              { icon: "fas fa-shield-alt", title: "Complete Discretion", desc: "Your identity and details are always kept private and secure" },
              { icon: "fas fa-clock", title: "24/7 Availability", desc: "Book any time of day or night, including weekends and holidays" },
              { icon: "fas fa-bolt", title: "Fast Arrival", desc: "Escorts arrive within 30–45 minutes of confirmed booking" },
            ].map((feat) => (
              <div key={feat.title} className="flex gap-4 p-5 bg-pink-50 rounded-xl">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${feat.icon} text-pink-500`} aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{feat.title}</h3>
                  <p className="text-gray-600 text-sm">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <a href="tel:+919653203658" className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors">
              Book Now — Call Us
            </a>
            <Link href="/services" className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors">
              Browse All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Also available as: escorts / call-girls cross-link */}
      <section className="py-8 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700">
            Also see:{" "}
            <Link
              href={isCallGirls ? `/escorts-${toSlug(location)}` : `/call-girls-${toSlug(location)}`}
              className="text-pink-600 font-semibold hover:underline"
            >
              {isCallGirls ? "Escorts" : "Call Girls"} in {location}
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Services Available in {location}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {services.slice(0, 12).map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} className="bg-white border border-pink-100 hover:border-pink-400 hover:bg-pink-50 text-gray-700 text-center py-3 px-3 rounded-lg font-medium transition-all duration-200 text-sm">
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {keyword} in Other Mumbai Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {locations
              .filter((loc) => loc !== location)
              .slice(0, 20)
              .map((loc) => (
                <Link
                  key={loc}
                  href={isCallGirls ? `/call-girls-${toSlug(loc)}` : `/escorts-${toSlug(loc)}`}
                  className="bg-pink-500 hover:bg-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-300 block text-sm"
                >
                  {loc}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Book {keyword} in {location} Now</h2>
          <p className="text-pink-100 mb-8 text-lg">
            Available 24/7 in {location} and all Mumbai areas. Call or WhatsApp to book instantly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+919653203658" className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors">
              📞 +91-9653203658
            </a>
            <a href="https://api.whatsapp.com/send?phone=919653203658" rel="noopener noreferrer" target="_blank" className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors">
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
