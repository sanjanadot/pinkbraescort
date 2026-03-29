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
      title: `${service.title} in Mumbai – Book Now`,
      description: `${service.desc} in Mumbai. Verified, professional companions available 24/7 for incall and outcall. Call +91-9653203658 for same-day booking.`,
      alternates: { canonical: `/${slug}` },
      openGraph: {
        title: `${service.title} in Mumbai – Book Now`,
        description: `${service.desc} available 24/7 in Mumbai. Verified and discreet.`,
        url: `https://pinkbraescort.in/${slug}`,
        type: "website",
      },
    };
  }

  const { location, keyword } = parsed;
  return {
    title: `${keyword} in ${location}, Mumbai – Book Now`,
    description: `Looking for ${keyword.toLowerCase()} in ${location}? Pink Bra offers verified, discreet companions available 24/7 in ${location}, Mumbai. Call +91-9653203658.`,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${keyword} in ${location}, Mumbai – Book Now`,
      description: `Verified ${keyword.toLowerCase()} in ${location}, Mumbai. Discreet, professional, available 24/7.`,
      url: `https://pinkbraescort.in/${slug}`,
      type: "website",
    },
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

  /* ── Shared building blocks ── */
  const trustCards = [
    { icon: "fas fa-shield-alt", title: "100% Verified", desc: "Every escort is personally verified before joining our roster — authentic photos, real profiles." },
    { icon: "fas fa-user-secret", title: "Complete Discretion", desc: "Your identity and booking details are always kept strictly private and confidential." },
    { icon: "fas fa-clock", title: "Available 24/7", desc: "Book any time of day or night — including weekends, late nights and public holidays." },
    { icon: "fas fa-bolt", title: "30-Min Arrival", desc: "After confirmation your companion reaches your preferred location in 30–45 minutes." },
  ];

  const stats = [
    { num: "5000+", label: "Verified Escorts" },
    { num: "4.9★", label: "Average Rating" },
    { num: "10+", label: "Years in Mumbai" },
    { num: "24/7", label: "Always Available" },
  ];

  const bookingSteps = [
    { step: 1, title: "Call or WhatsApp", desc: "Contact us on +91-9653203658 any time — day or night." },
    { step: 2, title: "Choose Your Escort", desc: "Tell us your preference and we match you with the perfect companion." },
    { step: 3, title: "Confirm Booking", desc: "We confirm instantly and share everything you need." },
    { step: 4, title: "Enjoy Your Time", desc: "Your escort arrives at your location, on time, every time." },
  ];

  /* ── Service page ── */
  if (parsed.kind === "service") {
    const { service } = parsed;
    const otherServices = services.filter((s) => s.slug !== slug);
    const faqs = [
      { q: `What is included in ${service.title} service in Mumbai?`, a: `Our ${service.title} service in Mumbai includes professional companionship for personal meetings, hotel visits, events, dinner dates and overnight stays. All escorts are personally verified and maintain complete discretion at all times.` },
      { q: `How do I book ${service.title} in Mumbai?`, a: `Simply call or WhatsApp +91-9653203658. Share your preferred location and timing and we will confirm your booking within minutes, any time of the day or night.` },
      { q: `Are ${service.title} available at night in Mumbai?`, a: `Yes. Our ${service.title} are available 24 hours a day, 7 days a week, including late nights, weekends and public holidays, across all Mumbai areas.` },
      { q: `Do ${service.title} offer outcall service in Mumbai?`, a: `Yes. Companions provide both incall and outcall services and can visit your hotel room, home, or any location in Mumbai within 30 to 45 minutes of confirmation.` },
      { q: `Is the ${service.title} booking completely private?`, a: `Absolutely. We operate with full discretion. Your personal details and booking information are never shared with any third party under any circumstances.` },
      { q: `What areas in Mumbai are covered by ${service.title}?`, a: `We cover all Mumbai areas including Andheri, Bandra, Juhu, Powai, Colaba, Worli, Thane, Navi Mumbai, Borivali, Malad, Goregaon, Kurla and all surrounding suburbs.` },
      { q: `How much does ${service.title} cost in Mumbai?`, a: `Rates vary depending on duration and requirements. Contact us on +91-9653203658 for a personalized quote. All pricing is transparent with no hidden charges.` },
      { q: `Are the ${service.title} companions genuinely verified?`, a: `Yes. Every escort offering ${service.title} in Mumbai is personally interviewed and verified by our team before joining our roster. All profile photos are genuine and up to date.` },
      { q: `Can I choose a specific companion for ${service.title}?`, a: `Yes. Describe your preferences — appearance, personality, language — and we will match you with the ideal companion from our verified ${service.title} roster.` },
      { q: `Is ${service.title} available at hotels in Mumbai?`, a: `Yes. Our companions are experienced at hotel visits and handle lobby and reception professionally. Both 3-star and 5-star hotel visits are fully supported across Mumbai.` },
      { q: `How far in advance should I book ${service.title} in Mumbai?`, a: `Same-day and last-minute bookings are accepted. For a specific companion we recommend booking at least 2 hours in advance. Late-night and weekend slots fill quickly.` },
      { q: `What makes Pink Bra Escorts the best for ${service.title} in Mumbai?`, a: `Pink Bra Escorts has operated in Mumbai since 2015 with over 5,000 verified companions, a 4.9-star rating, guaranteed 30-minute arrival and complete confidentiality on every booking.` },
    ];

    return (
      <main>
        {/* ── HERO ── */}
        <section className="hero-section" aria-label={`${service.title} Mumbai`}>
          {/* Floating hearts */}
          <div className="absolute inset-0 overflow-hidden hidden sm:block" style={{ pointerEvents: "none" }} aria-hidden="true">
            <div className="absolute top-1/4 left-1/4 text-white opacity-10 text-6xl" style={{ animation: "float 3s ease-in-out infinite" }}>♥</div>
            <div className="absolute top-1/3 right-1/4 text-white opacity-10 text-4xl" style={{ animation: "float 4s ease-in-out 1s infinite" }}>♥</div>
            <div className="absolute bottom-1/3 left-1/3 text-white opacity-10 text-5xl" style={{ animation: "float 3.5s ease-in-out 2s infinite" }}>♥</div>
          </div>
          <div className="hero-content relative z-10">
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
              {service.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                {service.title}
              </span>
              <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                in Mumbai
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-pink-50 font-light px-2">
              {service.desc} — verified, discreet and available 24/7 across all Mumbai locations.
            </p>
            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10 px-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/15 rounded-xl py-3 px-2 text-center">
                  <div className="text-xl font-bold text-white">{s.num}</div>
                  <div className="text-pink-100 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="cta-buttons px-4">
              <a href="tel:+919653203658" className="cta-btn cta-primary" aria-label="Call Pink Bra Escorts Mumbai">
                <span className="text-xl" aria-hidden="true">📞</span>
                <span className="text-base sm:text-lg">Call Now</span>
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">24/7</div>
              </a>
              <a href="https://api.whatsapp.com/send?phone=919653203658" rel="noopener noreferrer" target="_blank" className="cta-btn cta-secondary" aria-label="WhatsApp Pink Bra Escorts Mumbai">
                <span className="text-xl" aria-hidden="true">💬</span>
                <span className="text-base sm:text-lg">WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── ABOUT + IMAGE ── */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={`/images/services/${service.img}`}
                  alt={`${service.title} Mumbai`}
                  width={600}
                  height={600}
                  className="w-full h-[480px] object-cover object-top"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  About Our {service.title} in Mumbai
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                  Pink Bra Escorts offers Mumbai&apos;s finest <strong>{service.title.toLowerCase()}</strong> — professionally screened, genuinely discreet and dedicated to making every experience exceptional.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Available across Andheri, Bandra, Juhu, Powai, Colaba, Thane, Navi Mumbai and every major Mumbai area. Both incall and outcall services are offered.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Since 2015, Pink Bra Escorts has been Mumbai&apos;s most trusted companion agency. Your privacy, comfort and satisfaction are our only priorities.
                </p>
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

        {/* ── TRUST CARDS ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose Our {service.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustCards.map((item) => (
                <div key={item.title} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-2xl text-pink-500`} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO BOOK ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              How to Book {service.title} in Mumbai
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bookingSteps.map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OTHER SERVICES (image cards) ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              More Escort Services in Mumbai
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherServices.slice(0, 6).map((s) => (
                <div key={s.slug} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/images/services/${s.img}`}
                      alt={`${s.title} Mumbai`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <i className="fas fa-star text-xs" aria-hidden="true"></i>
                      <span>{s.badge}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                    <Link href={`/${s.slug}`} className="bg-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-600 transform hover:-translate-y-1 transition-all duration-300 inline-block text-sm">
                      Book {s.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/services" className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transform hover:-translate-y-1 transition-all duration-300 inline-block">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── LOCATIONS ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {service.title} Available Across Mumbai
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {locations.map((loc) => (
                <Link
                  key={loc}
                  href={`/escorts-${toSlug(loc)}`}
                  className="bg-pink-500 hover:bg-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-300 block text-sm"
                >
                  Escorts in {loc}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Book {service.title} in Mumbai Now</h2>
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

        {/* ── FAQ + SCHEMA ── */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden">
          {/* decorative blobs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-rose-200 rounded-full opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* heading */}
            <div className="text-center mb-14">
              <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-3 tracking-wide uppercase">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                Everything you need to know about {service.title} in Mumbai — answered.
              </p>
            </div>
            {/* 2-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* left column — first 6 */}
              <div className="space-y-4">
                {faqs.slice(0, 6).map((faq, i) => (
                  <div
                    key={faq.q}
                    className="group bg-white rounded-2xl shadow-sm border border-pink-100 p-6 hover:shadow-md hover:border-pink-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white text-sm font-bold flex items-center justify-center shadow">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2 leading-snug group-hover:text-pink-600 transition-colors">
                          {faq.q}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* right column — last 6 */}
              <div className="space-y-4">
                {faqs.slice(6).map((faq, i) => (
                  <div
                    key={faq.q}
                    className="group bg-white rounded-2xl shadow-sm border border-pink-100 p-6 hover:shadow-md hover:border-pink-300 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white text-sm font-bold flex items-center justify-center shadow">
                        {i + 7}
                      </span>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2 leading-snug group-hover:text-pink-600 transition-colors">
                          {faq.q}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://pinkbraescort.in" },
                  { "@type": "ListItem", position: 2, name: "Services", item: "https://pinkbraescort.in/services" },
                  { "@type": "ListItem", position: 3, name: service.title, item: `https://pinkbraescort.in/${slug}` },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                name: `${service.title} in Mumbai`,
                description: `${service.desc} — professional, verified companions available 24/7 in Mumbai.`,
                provider: { "@type": "LocalBusiness", name: "Pink Bra Escorts Mumbai", telephone: "+919653203658", url: "https://pinkbraescort.in" },
                areaServed: { "@type": "City", name: "Mumbai" },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              },
            ]),
          }}
        />
      </main>
    );
  }

  /* ── Location / Call-Girls page ── */
  const { location, keyword } = parsed;
  const isCallGirls = keyword === "Call Girls";
  const prefix = isCallGirls ? "call-girls" : "escorts";

  const faqs = [
    { q: `How do I book ${keyword.toLowerCase()} in ${location}, Mumbai?`, a: `Call or WhatsApp +91-9653203658 and mention ${location} as your preferred area. We confirm bookings within minutes and arrange the companion of your choice, any time of day or night.` },
    { q: `Are ${keyword.toLowerCase()} available late at night in ${location}?`, a: `Yes. Our ${keyword.toLowerCase()} in ${location} are available round the clock — including late nights, weekends and public holidays. There is no time restriction on bookings.` },
    { q: `Do ${keyword.toLowerCase()} in ${location} offer hotel visits?`, a: `Yes. Outcall services are available — companions visit your hotel room, serviced apartment or any location in and around ${location}, Mumbai. All hotels are supported.` },
    { q: `How long does it take for a companion to arrive in ${location}?`, a: `After booking confirmation companions typically arrive within 30 to 45 minutes, depending on traffic in the ${location} area of Mumbai.` },
    { q: `Is booking ${keyword.toLowerCase()} in ${location} discreet?`, a: `Yes, completely. All bookings are handled with strict confidentiality. Your personal information is never shared or stored beyond the booking process.` },
    { q: `What is the cost of ${keyword.toLowerCase()} in ${location}?`, a: `Rates depend on duration, service type and companion selection. Call +91-9653203658 for a personalised quote with full transparency and no hidden charges.` },
    { q: `Are all ${keyword.toLowerCase()} in ${location} verified?`, a: `Yes. Every companion serving ${location} is personally interviewed and profile-verified by our team. All photos are genuine, recent and unedited.` },
    { q: `Can I request a specific type of companion in ${location}?`, a: `Absolutely. Share your preferences — appearance, language spoken, personality — and we will match you with the ideal companion from our ${location} roster.` },
    { q: `Do you offer same-day ${keyword.toLowerCase()} bookings in ${location}?`, a: `Yes. Same-day and last-minute bookings are accepted in ${location}. For a specific companion a 2-hour advance notice is recommended, though we always do our best.` },
    { q: `Are both incall and outcall options available in ${location}?`, a: `Yes. Incall locations near ${location} are available for convenience, and outcall service covers your hotel, home or office anywhere in the ${location} area of Mumbai.` },
    { q: `What services are available with ${keyword.toLowerCase()} in ${location}?`, a: `Companions in ${location} offer personal meetings, dinner dates, event accompaniment, overnight stays and more. All services are tailored to your preferences and boundaries.` },
    { q: `Why choose Pink Bra Escorts for ${keyword.toLowerCase()} in ${location}?`, a: `Pink Bra Escorts has served Mumbai since 2015 with 5,000+ verified companions across all areas including ${location}. We offer a 4.9-star rated service with guaranteed 30-minute arrival and full privacy on every booking.` },
  ];

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-section" aria-label={`${keyword} in ${location}`}>
        <div className="absolute inset-0 overflow-hidden hidden sm:block" style={{ pointerEvents: "none" }} aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 text-white opacity-10 text-6xl" style={{ animation: "float 3s ease-in-out infinite" }}>♥</div>
          <div className="absolute top-1/3 right-1/4 text-white opacity-10 text-4xl" style={{ animation: "float 4s ease-in-out 1s infinite" }}>♥</div>
          <div className="absolute bottom-1/3 left-1/3 text-white opacity-10 text-5xl" style={{ animation: "float 3.5s ease-in-out 2s infinite" }}>♥</div>
        </div>
        <div className="hero-content relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
              {keyword} in {location}
            </span>
            <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
              Mumbai
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-pink-50 font-light px-2">
            Premium verified {keyword.toLowerCase()} in <strong className="text-yellow-200">{location}</strong> — discreet, professional and available 24 hours a day.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10 px-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/15 rounded-xl py-3 px-2 text-center">
                <div className="text-xl font-bold text-white">{s.num}</div>
                <div className="text-pink-100 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="cta-buttons px-4">
            <a href="tel:+919653203658" className="cta-btn cta-primary" aria-label="Call Pink Bra Escorts Mumbai">
              <span className="text-xl" aria-hidden="true">📞</span>
              <span className="text-base sm:text-lg">Call Now</span>
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">24/7</div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=919653203658" rel="noopener noreferrer" target="_blank" className="cta-btn cta-secondary" aria-label="WhatsApp Pink Bra Escorts Mumbai">
              <span className="text-xl" aria-hidden="true">💬</span>
              <span className="text-base sm:text-lg">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Premium {keyword} in {location}, Mumbai
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            Pink Bra Escorts offers Mumbai&apos;s finest {keyword.toLowerCase()} in <strong>{location}</strong>. Whether you&apos;re staying at a hotel, at home, or need a companion for an event — we are just a call away.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            All {keyword.toLowerCase()} serving {location} are 100% verified, professional and trained to maintain complete discretion. We offer both incall and outcall services with a guaranteed 30–45 minute arrival time.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Since 2015, Pink Bra Escorts has been Mumbai&apos;s most trusted agency. Book today and experience the difference.
          </p>
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

      {/* ── TRUST CARDS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Pink Bra Escorts in {location}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustCards.map((item) => (
              <div key={item.title} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-2xl text-pink-500`} aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO BOOK ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How to Book {keyword} in {location}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES (image cards) ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Escort Services Available in {location}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((s) => (
              <div key={s.slug} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/images/services/${s.img}`}
                    alt={`${s.title} in ${location} Mumbai`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                    <i className="fas fa-star text-xs" aria-hidden="true"></i>
                    <span>{s.badge}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{s.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                  <Link href={`/${s.slug}`} className="bg-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-600 transform hover:-translate-y-1 transition-all duration-300 inline-block text-sm">
                    Book {s.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transform hover:-translate-y-1 transition-all duration-300 inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── OTHER LOCATIONS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {keyword} in Other Mumbai Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {locations.filter((loc) => loc !== location).map((loc) => (
              <Link
                key={loc}
                href={`/${prefix}-${toSlug(loc)}`}
                className="bg-pink-500 hover:bg-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-300 block text-sm"
              >
                {keyword} in {loc}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CROSS LINK ── */}
      <section className="py-6 bg-pink-50 text-center">
        <p className="text-gray-700">
          Also see:{" "}
          <Link
            href={isCallGirls ? `/escorts-${toSlug(location)}` : `/call-girls-${toSlug(location)}`}
            className="text-pink-600 font-semibold hover:underline"
          >
            {isCallGirls ? "Escorts" : "Call Girls"} in {location}
          </Link>
        </p>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Book {keyword} in {location} Now</h2>
          <p className="text-pink-100 mb-8 text-lg">Available 24/7 in {location} and all Mumbai areas. Call or WhatsApp to book instantly.</p>
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

      {/* ── FAQ + SCHEMA ── */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-rose-200 rounded-full opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-3 tracking-wide uppercase">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Everything you need to know about {keyword} in {location} — answered.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="space-y-4">
              {faqs.slice(0, 6).map((faq, i) => (
                <div
                  key={faq.q}
                  className="group bg-white rounded-2xl shadow-sm border border-pink-100 p-6 hover:shadow-md hover:border-pink-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white text-sm font-bold flex items-center justify-center shadow">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 leading-snug group-hover:text-pink-600 transition-colors">
                        {faq.q}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {faqs.slice(6).map((faq, i) => (
                <div
                  key={faq.q}
                  className="group bg-white rounded-2xl shadow-sm border border-pink-100 p-6 hover:shadow-md hover:border-pink-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white text-sm font-bold flex items-center justify-center shadow">
                      {i + 7}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 leading-snug group-hover:text-pink-600 transition-colors">
                        {faq.q}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pinkbraescort.in" },
                { "@type": "ListItem", position: 2, name: "Mumbai", item: "https://pinkbraescort.in/escorts-mumbai" },
                { "@type": "ListItem", position: 3, name: `${keyword} in ${location}`, item: `https://pinkbraescort.in/${prefix}-${toSlug(location)}` },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: `${keyword} in ${location}, Mumbai`,
              description: `Verified, discreet ${keyword.toLowerCase()} in ${location}, Mumbai. Available 24/7 for incall and outcall bookings.`,
              provider: { "@type": "LocalBusiness", name: "Pink Bra Escorts Mumbai", telephone: "+919653203658", url: "https://pinkbraescort.in" },
              areaServed: { "@type": "Place", name: `${location}, Mumbai` },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ]),
        }}
      />
    </main>
  );
}


