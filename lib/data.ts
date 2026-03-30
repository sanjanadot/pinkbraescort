/**
 * Single source of truth for services, locations, and spa treatments.
 * Both app/[slug]/page.tsx and app/sitemap.ts import from here.
 */

export type ServiceItem = {
  slug: string;
  title: string;
  desc: string;
  badge: string;
  img: string;
};

export const serviceList: ServiceItem[] = [
  { slug: "vip-escorts-mumbai",              title: "VIP Escorts",               desc: "Premium VIP Service",                           badge: "VIP",          img: "vip-escorts-mumbai.webp" },
  { slug: "celebrity-escorts-mumbai",        title: "Celebrity Escorts",         desc: "Star-Like Escorts",                             badge: "CELEBRITY",    img: "celebrity-escorts-mumbai.webp" },
  { slug: "elite-model-mumbai",              title: "Elite Models",              desc: "Professional Model Escorts",                    badge: "ELITE",        img: "elite-model-mumbai.webp" },
  { slug: "arab-girls-mumbai",               title: "Arab Girls",                desc: "Exotic Arabian Beauty",                         badge: "EXOTIC",       img: "arab-girls-mumbai.webp" },
  { slug: "college-girl-mumbai",             title: "College Girls",             desc: "Young Student Escorts",                         badge: "YOUTHFUL",     img: "college-girl-mumbai.webp" },
  { slug: "high-class-model-mumbai",         title: "High Class Models",         desc: "Luxury Model Escorts",                          badge: "LUXURY",       img: "high-class-model-mumbai.webp" },
  { slug: "slim-escorts-mumbai",             title: "Slim Escorts",              desc: "Elegant Slim Escorts",                          badge: "ELEGANT",      img: "slim-escorts-mumbai.webp" },
  { slug: "young-girl-mumbai",               title: "Young Girls",               desc: "Fresh Youthful Energy",                         badge: "FRESH",        img: "young-girl-mumbai.webp" },
  { slug: "cheap-escorts-mumbai",            title: "Affordable Escorts",        desc: "Budget-Friendly Options",                       badge: "BUDGET",       img: "cheap-escorts-mumbai.webp" },
  { slug: "premium-models-mumbai",           title: "Premium Models",            desc: "Professional models with stunning looks",        badge: "PREMIUM",      img: "premium-models-mumbai.webp" },
  { slug: "foreign-models-mumbai",           title: "Foreign Models",            desc: "International beauties from Europe",             badge: "FOREIGN",      img: "foreign-models-mumbai.webp" },
  { slug: "independent-escorts-mumbai",      title: "Independent Escorts",       desc: "Professional independent escorts",               badge: "INDEPENDENT",  img: "independent-escorts-mumbai.webp" },
  { slug: "local-beauties-mumbai",           title: "Local Beauties",            desc: "Regional beauties from different states",        badge: "LOCAL",        img: "local-beauties-mumbai.webp" },
  { slug: "outcall-escorts-mumbai",          title: "Outcall Escorts",           desc: "Visit you at your preferred location",           badge: "OUTCALL",      img: "outcall-escorts-mumbai.webp" },
  { slug: "incall-escorts-mumbai",           title: "Incall Escorts",            desc: "Visit our comfortable private locations",        badge: "INCALL",       img: "incall-escorts-mumbai.webp" },
  { slug: "travel-escorts-mumbai",           title: "Travel Companion",          desc: "Perfect escorts for business trips",             badge: "TRAVEL",       img: "travel-escorts-mumbai.webp" },
  { slug: "event-companion-mumbai",          title: "Event Companion",           desc: "Elegant escorts for social events",              badge: "EVENT",        img: "event-companion-mumbai.webp" },
  { slug: "mature-escorts-mumbai",           title: "Mature Escorts",            desc: "Experienced sophisticated escorts",              badge: "MATURE",       img: "mature-escorts-mumbai.webp" },
  { slug: "bengali-escorts-mumbai",          title: "Bengali Escorts",           desc: "Beautiful Bengali escorts",                     badge: "BENGALI",      img: "bengali-escorts-mumbai.webp" },
  { slug: "housewife-escorts-mumbai",        title: "Housewife Escorts",         desc: "Mature housewife escorts",                      badge: "HOUSEWIFE",    img: "housewife-escorts-mumbai.webp" },
  { slug: "bombay-escorts-mumbai",           title: "Bombay Escorts",            desc: "Classic Bombay style escorts",                  badge: "BOMBAY",       img: "bombay-escorts-mumbai.webp" },
  { slug: "euro-escorts-mumbai",             title: "Euro Escorts",              desc: "European beauties with class",                  badge: "EUROPEAN",     img: "euro-escorts-mumbai.webp" },
  { slug: "girlfriend-escorts-mumbai",       title: "Girlfriend Experience",     desc: "Intimate girlfriend experience",                badge: "GFE",          img: "girlfriend-escorts-mumbai.webp" },
  { slug: "russian-escorts-mumbai",          title: "Russian Escorts",           desc: "Exotic Russian beauties",                       badge: "RUSSIAN",      img: "russian-escorts-mumbai.webp" },
  { slug: "punjabi-escorts-mumbai",          title: "Punjabi Escorts",           desc: "Energetic Punjabi escorts",                     badge: "PUNJABI",      img: "punjabi-escorts-mumbai.webp" },
  { slug: "nepali-escorts-mumbai",           title: "Nepali Escorts",            desc: "Beautiful Nepali escorts",                      badge: "NEPALI",       img: "nepali-escorts-mumbai.webp" },
  { slug: "north-indian-escorts-mumbai",     title: "North Indian Escorts",      desc: "Traditional North Indian beauties",             badge: "NORTH INDIAN", img: "north-indian-escorts-mumbai.webp" },
  { slug: "top-class-model-mumbai",          title: "Top Class Models",          desc: "Elite top class model escorts",                 badge: "TOP CLASS",    img: "top-class-model-mumbai.webp" },
  { slug: "local-escorts-mumbai",            title: "Local Escorts",             desc: "Local Mumbai escorts",                          badge: "LOCAL",        img: "local-escorts-mumbai.webp" },
  { slug: "mature-girls-mumbai",             title: "Mature Girls",              desc: "Experienced mature escorts",                    badge: "MATURE",       img: "mature-escorts-mumbai.webp" },
  { slug: "independent-model-escorts",       title: "Independent Models",        desc: "Independent professional models",               badge: "MODEL",        img: "independent-model-escorts.webp" },
  { slug: "expert-escorts-mumbai",           title: "Expert Services",           desc: "Professional expert service providers",         badge: "EXPERT",       img: "expert-escorts-mumbai.webp" },
  { slug: "big-boobs-escorts-mumbai",        title: "Busty Escorts",             desc: "Voluptuous escorts with curves",                badge: "BUSTY",        img: "big-boobs-escorts-mumbai.webp" },
  { slug: "unsatisfied-bhabhi-mumbai",       title: "Unsatisfied Bhabhi",        desc: "Mature married women escorts",                  badge: "BHABHI",       img: "unsatisfied-bhabhi-mumbai.webp" },
  { slug: "unsatisfied-female-mumbai",       title: "Unsatisfied Females",       desc: "Women seeking companionship",                   badge: "FEMALE",       img: "unsatisfied-female-mumbai.webp" },
  { slug: "special-companionship-mumbai",    title: "Special Companionship",     desc: "Unique special companionship services",         badge: "SPECIAL",      img: "special-companionship-mumbai.webp" },
  { slug: "special-escorts-mumbai",          title: "Special Escorts",           desc: "Special escort services in Mumbai",             badge: "SPECIAL",      img: "special-companionship-mumbai.webp" },
  { slug: "hj-bj-expert-escorts-mumbai",     title: "HJ BJ Expert Escorts",      desc: "Expert intimate escorts in Mumbai",             badge: "EXPERT",       img: "expert-escorts-mumbai.webp" },
  { slug: "pink-tits-mumbai",                title: "Pink Escorts",              desc: "Beautiful Pink Bra escorts",                    badge: "PINK",         img: "pink-tits-mumbai.webp" },
];

export const locationList: string[] = [
  // Mumbai — prime areas
  "Andheri", "Bandra", "Juhu", "Powai", "Lower Parel", "Worli", "Colaba", "Fort",
  "Churchgate", "Nariman Point", "Dadar", "Mahim", "Mahalaxmi", "Parel", "Prabhadevi",
  "Santacruz", "Versova", "Lokhandwala", "Goregaon", "Malad", "Kandivali", "Borivali",
  "Khar", "Khar Road", "Byculla", "Chembur", "Ghatkopar", "Kurla", "Sakinaka",
  "Vikhroli", "Kanjurmarg", "Vidyavihar", "Sion", "Masjid Bandar", "Charni Road",
  "Grant Road", "Mumbai Central", "Marine Lines", "CST", "Chinchpokli", "Govandi",
  "Mankhurd", "Wadala", "Jogeshwari", "Bhandup", "Mulund", "Nahur", "Ghansoli",
  "Matunga", "Baba", "Mumbai Airport", "Mumbai",
  // Thane & suburbs
  "Thane", "Bhiwandi", "Dombivli", "Kalyan", "Ambernath", "Badlapur", "Titwala",
  "Thakurli", "Ulhasnagar", "Diva", "Ambivali", "Asangaon", "Kasara", "Karjat",
  "Khopoli", "Boisar", "Palghar", "Saphale",
  // Navi Mumbai
  "Navi Mumbai", "Airoli", "Belapur", "Juinagar", "Kalamboli", "Kalwa",
  "Kamothe", "Kharghar", "Kopar Khairane", "Nerul", "Panvel", "Rabale", "Sanpada",
  "Seawood", "Ulwe", "Vashi",
  // Mumbai outskirts / Mira-Virar
  "Bhayandar", "Mira Road", "Vasai", "Virar", "Naigaon", "Nalasopara", "Neral",
  "Mumbra", "Ghodbunder Road", "Taloja", "Vile Parle",
  // Maharashtra other cities
  "Pune", "Nashik", "Nagpur", "Aurangabad",
  // Pan-India cities
  "Delhi", "Noida", "Gurgaon", "Agra", "Lucknow", "Kanpur", "Varanasi", "Patna",
  "Jaipur", "Jodhpur", "Udaipur", "Ajmer",
  "Ahmedabad", "Surat", "Rajkot", "Vadodara",
  "Bangalore", "Hyderabad", "Chennai", "Kochi", "Coimbatore", "Mysore",
  "Mangalore", "Vijayawada", "Visakhapatnam",
  "Kolkata", "Siliguri", "Guwahati",
  "Chandigarh", "Ludhiana", "Jalandhar", "Amritsar",
  "Bhopal", "Indore", "Gwalior",
  "Goa", "Ranchi", "Bhubaneswar", "Dehradun",
];

export const spaServiceList = [
  { slug: "swedish-massage",    title: "Swedish Full Body",    desc: "Gentle long strokes to relieve muscle tension and improve circulation.",              badge: "POPULAR" },
  { slug: "deep-tissue-massage",title: "Deep Tissue Massage",  desc: "Firm pressure targeting chronic muscle tension and knots.",                          badge: "THERAPEUTIC" },
  { slug: "hot-stone-spa",      title: "Hot Stone Spa",        desc: "Heated basalt stones melt away stress from deep muscle layers.",                     badge: "PREMIUM" },
  { slug: "aromatherapy",       title: "Aromatherapy Massage", desc: "Essential oils blended with relaxing massage for total mind-body calm.",             badge: "CALMING" },
  { slug: "thai-massage",       title: "Thai Massage",         desc: "Assisted stretching and acupressure to restore energy and flexibility.",             badge: "ENERGISING" },
  { slug: "b2b-massage",        title: "B2B Massage",          desc: "A deeply intimate body-to-body massage experience for full relaxation.",             badge: "INTIMATE" },
  { slug: "nuru-massage",       title: "Nuru Massage",         desc: "Traditional Japanese full-body gel massage for ultimate sensory relaxation.",        badge: "EXOTIC" },
  { slug: "tantric-massage",    title: "Tantric Massage",      desc: "A mindful, meditative full-body massage to awaken and balance energy.",              badge: "HOLISTIC" },
  { slug: "four-hands-massage", title: "Four Hands Massage",   desc: "Two therapists working in perfect synchrony for twice the relaxation.",              badge: "LUXURY" },
  { slug: "couples-massage",    title: "Couples Massage",      desc: "Side-by-side relaxation experience for two — perfect for any occasion.",            badge: "COUPLES" },
  { slug: "foot-reflexology",   title: "Foot Reflexology",     desc: "Pressure points on the feet stimulated to relieve tension throughout the body.",    badge: "WELLNESS" },
  { slug: "body-scrub-wrap",    title: "Body Scrub & Wrap",    desc: "Exfoliation and hydration treatment for glowing, refreshed skin.",                  badge: "GLOW" },
];

export const mumbaiAreaSet = new Set([
  "Andheri", "Bandra", "Juhu", "Powai", "Lower Parel", "Worli", "Colaba", "Fort",
  "Churchgate", "Nariman Point", "Dadar", "Mahim", "Mahalaxmi", "Parel", "Prabhadevi",
  "Santacruz", "Versova", "Lokhandwala", "Goregaon", "Malad", "Kandivali", "Borivali",
  "Khar", "Khar Road", "Byculla", "Chembur", "Ghatkopar", "Kurla", "Sakinaka",
  "Vikhroli", "Kanjurmarg", "Vidyavihar", "Sion", "Masjid Bandar", "Charni Road",
  "Grant Road", "Mumbai Central", "Marine Lines", "CST", "Chinchpokli", "Govandi",
  "Mankhurd", "Wadala", "Jogeshwari", "Bhandup", "Mulund", "Nahur", "Ghansoli",
  "Matunga", "Baba", "Mumbai Airport", "Mumbai",
  "Thane", "Bhiwandi", "Dombivli", "Kalyan", "Ambernath", "Badlapur", "Titwala",
  "Thakurli", "Ulhasnagar", "Diva", "Ambivali", "Asangaon", "Kasara", "Karjat",
  "Khopoli", "Boisar", "Palghar", "Saphale",
  "Navi Mumbai", "Airoli", "Belapur", "Juinagar", "Kalamboli", "Kalwa",
  "Kamothe", "Kharghar", "Kopar Khairane", "Nerul", "Panvel", "Rabale", "Sanpada",
  "Seawood", "Ulwe", "Vashi",
  "Bhayandar", "Mira Road", "Vasai", "Virar", "Naigaon", "Nalasopara", "Neral",
  "Mumbra", "Ghodbunder Road", "Taloja", "Vile Parle",
]);

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
