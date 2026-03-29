import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const BASE_URL = "https://pinkbraescort.in";

const services = [
  "vip-escorts-mumbai",
  "celebrity-escorts-mumbai",
  "elite-model-mumbai",
  "arab-girls-mumbai",
  "college-girl-mumbai",
  "high-class-model-mumbai",
  "slim-escorts-mumbai",
  "young-girl-mumbai",
  "cheap-escorts-mumbai",
  "premium-models-mumbai",
  "foreign-models-mumbai",
  "independent-escorts-mumbai",
  "local-beauties-mumbai",
  "outcall-escorts-mumbai",
  "incall-escorts-mumbai",
  "travel-escorts-mumbai",
  "event-companion-mumbai",
  "mature-escorts-mumbai",
  "bengali-escorts-mumbai",
  "housewife-escorts-mumbai",
  "bombay-escorts-mumbai",
  "euro-escorts-mumbai",
  "girlfriend-escorts-mumbai",
  "russian-escorts-mumbai",
  "punjabi-escorts-mumbai",
  "nepali-escorts-mumbai",
  "north-indian-escorts-mumbai",
  "top-class-model-mumbai",
  "local-escorts-mumbai",
  "mature-girls-mumbai",
  "independent-model-escorts",
  "expert-escorts-mumbai",
  "big-boobs-escorts-mumbai",
  "unsatisfied-bhabhi-mumbai",
  "unsatisfied-female-mumbai",
  "special-companionship-mumbai",
  "special-escorts-mumbai",
  "hj-bj-expert-escorts-mumbai",
  "pink-tits-mumbai",
];

const locations = [
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

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Escorts location pages
  const escortPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/escorts-${toSlug(loc)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Call girls location pages
  const callGirlPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${BASE_URL}/call-girls-${toSlug(loc)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Blog pages
  const blogStaticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    // /blog/submit intentionally excluded — disallowed in robots.txt
  ];
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const blogPages = [...blogStaticPages, ...blogPostPages];

  return [...staticPages, ...servicePages, ...escortPages, ...callGirlPages, ...blogPages];
}
