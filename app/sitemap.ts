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
  "Andheri", "Bandra", "Juhu", "Powai", "Lower Parel", "Worli", "Colaba", "Fort",
  "Thane", "Navi Mumbai", "Airoli", "Ambernath", "Belapur", "Bhandup", "Bhayandar",
  "Bhiwandi", "Borivali", "Byculla", "Chembur", "Churchgate", "Dadar", "Dombivli",
  "Ghatkopar", "Goregaon", "Jogeshwari", "Kalyan", "Kandivali", "Khar", "Kharghar",
  "Kurla", "Malad", "Marine Lines", "Mira Road", "Mulund", "Panvel", "Santacruz",
  "Vasai", "Vashi", "Versova", "Virar", "Ambivali", "Asangaon", "Badlapur", "Boisar",
  "Charni Road", "Chinchpokli", "Chuna Bhatti", "CST", "Diva", "Ghansoli",
  "Ghodbunder Road", "Govandi", "Grant Road", "Juinagar", "Kalamboli", "Kalwa",
  "Kanjurmarg", "Karjat", "Kasara", "Kamothe", "Khopoli", "Kopar Khairane",
  "Lokhandwala", "Mahim", "Masjid Bandar", "Mumbai Airport", "Mumbai Central",
  "Mumbai", "Mumbra", "Nahur", "Naigaon", "Nalasopara", "Nariman Point", "Neral",
  "Nerul", "Palghar", "Parel", "Prabhadevi", "Rabale", "Sakinaka", "Sanpada",
  "Saphale", "Seawoods", "Sion", "Taloja", "Thakurli", "Titwala", "Ulhasnagar",
  "Ulwe", "Vidyavihar", "Vikhroli", "Vile Parle", "Wadala",
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
    { url: `${BASE_URL}/blog/submit`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
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
