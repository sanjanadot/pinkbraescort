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

/* ── Lookup maps ── */
const serviceMap = new Map(services.map((s) => [s.slug, s]));
const locationByPart = new Map(locations.map((loc) => [toSlug(loc), loc]));

/* Locations within Mumbai Metropolitan Region — all others are pan-India cities */
const mumbaiAreaLocations = new Set([
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

/* ── Location-specific editorial content ── */
interface LocationContent {
  cityIntro: string;          // opening paragraph about the city
  whyUs: string;              // why choose us in this city
  categories: string;         // escort categories available here
  coverageNote: string;       // hotel / area coverage note
  experience: string;         // the experience & mood paragraph
  whatSetsApart: string;      // what sets Pink Bra apart here
  disclaimer: string;         // booking note / disclaimer
}

function getLocationContent(location: string, isMumbaiArea: boolean, keyword: string): LocationContent {
  const kw = keyword.toLowerCase();

  /* Individual city overrides */
  const overrides: Record<string, Partial<LocationContent>> = {
    "Andheri": {
      cityIntro: `Andheri is the beating commercial heart of Mumbai — home to SEEPZ, the film studios of Andheri East, and the buzzing nightlife strips of Andheri West. The suburb never truly sleeps, with late-night restaurants, lounges and five-star hotels that draw attention from across the city. Whether you are here on business or leisure, Pink Bra Escorts ensures your evenings in Andheri are as vibrant as the suburb itself, connecting you with the finest verified ${kw} who are always just minutes away.`,
      coverageNote: `Our ${kw} are available across all pockets of Andheri — from the lanes of Versova and Four Bungalows to the corporate corridors of MIDC and Andheri East station. We cover every star hotel in the area including JW Marriott, The Leela, Courtyard by Marriott and more. Companions reach your door within 30–45 minutes of confirmation.`,
    },
    "Bandra": {
      cityIntro: `Bandra is Mumbai's most fashionable address — the suburb that gave Bollywood its residence, the sea its promenade, and the city its cafe culture. From Carter Road to Linking Road, Bandra pulses with energy at every hour. Pink Bra Escorts brings you premium verified ${kw} in Bandra who match the suburb's cosmopolitan spirit — sophisticated, charming and completely discreet.`,
      coverageNote: `We cover all of Bandra — Bandra West, Bandra East, Khar, Reclamation, Band Stand and every hotel along the stretch including Taj Lands End, The Leela and ITC Grand Central. Companions arrive within 30–45 minutes anywhere in the Bandra belt.`,
    },
    "Juhu": {
      cityIntro: `Juhu is where the Arabian Sea meets Bollywood glamour. Home to numerous film celebrities, luxury hotels and the iconic Juhu Beach, this suburb is synonymous with high-end leisure. Pink Bra Escorts offers premium verified ${kw} in Juhu who carry the refined elegance that this exclusive suburb demands — ready to join you on the beachfront, in your hotel suite, or at a private event.`,
      coverageNote: `We serve all of Juhu — from the beachside hotels like JW Marriott Juhu, VITS and Sun-n-Sand to the quiet residential lanes behind the beach. Companions reach your location in 30–45 minutes from confirmation.`,
    },
    "Powai": {
      cityIntro: `Powai is Mumbai's tech-meets-luxury enclave — home to Hiranandani Gardens, IIT Bombay, and the glittering Powai Lake. With its polished malls, rooftop bars and business parks, Powai attracts a sophisticated crowd of professionals and entrepreneurs. Pink Bra Escorts connects you with cultured, well-spoken verified ${kw} in Powai who can accompany you to a corporate dinner, relax with you at the lake-view hotel, or simply be the perfect company at the end of a long day.`,
      coverageNote: `We cover all of Powai — Hiranandani Gardens, Chandivali, Saki Naka junction and every premium hotel including Renaissance Mumbai, Meluha The Fern and Kohinoor Continental. Companions arrive within 30–45 minutes.`,
    },
    "Colaba": {
      cityIntro: `Colaba is the soul of South Mumbai — where the historic Taj Mahal Palace overlooks the Gateway of India, and heritage cafes sit alongside upscale boutiques. This legendary neighbourhood draws discerning travellers from every corner of the world. Pink Bra Escorts provides elite verified ${kw} in Colaba who complement the area's timeless class — perfect companions for a private dinner, a hotel evening, or a stroll along the seafront promenade.`,
      coverageNote: `We serve all of Colaba, Nariman Point, Churchgate, Fort and the entire South Mumbai corridor. Properties covered include the Taj Mahal Palace, The Oberoi, Trident, and Vivanta — with companion arrival within 30–45 minutes.`,
    },
    "Worli": {
      cityIntro: `Worli is where luxury high-rises kiss the sky and the iconic Sea Link connects South Mumbai to the western suburbs. Home to flagship offices, rooftop bars and some of Mumbai's most exclusive residential towers, Worli has evolved into the city's premier upscale address. Pink Bra Escorts offers high-end verified ${kw} in Worli whose sophistication matches the neighbourhood's premium ambience — ideal for intimate evenings or corporate events.`,
      coverageNote: `We cover Worli, Prabhadevi, Lower Parel and the entire Bandra-Worli corridor. Hotels served include Novotel, Four Seasons, Palladium and ITC Grand Central. Companions arrive within 30 minutes.`,
    },
    "Thane": {
      cityIntro: `Thane — the City of Lakes — has grown from a quiet Mumbai satellite into a thriving metropolis in its own right. With sprawling malls, a booming hospitality sector and a cosmopolitan residential population, Thane today offers everything a major city can. Pink Bra Escorts is proud to serve Thane with a curated roster of verified ${kw} who understand local expectations and bring professionalism, warmth and complete discretion to every meeting.`,
      coverageNote: `We cover all of Thane city — Thane West, Thane East, Ghodbunder Road, Kolshet, Majiwada, Hiranandani Estate and all major hotels including Vivanta Thane, Radisson Blu and Atharva. Companions reach you within 45 minutes.`,
    },
    "Navi Mumbai": {
      cityIntro: `Navi Mumbai is one of India's most planned cities — a polished, green urban space that has matured into a destination of its own. Vashi, Kharghar, Belapur and Panvel each carry a distinct energy, and together they form a city that works hard and plays equally well. Pink Bra Escorts brings verified premium ${kw} to Navi Mumbai — professional, discreet and always available to make your stay here genuinely memorable.`,
      coverageNote: `We cover all nodes of Navi Mumbai — Vashi, Nerul, Belapur, Kharghar, Panvel, Airoli, Kopar Khairane, Sanpada, Seawood and Ulwe. Hotels served include Novotel Navi Mumbai, The Lalit, ITC Fortune and Ramada. Companions arrive within 45 minutes.`,
    },
    "Pune": {
      cityIntro: `Pune — the Oxford of the East — is a city that balances centuries of Maratha heritage with a youthful, cosmopolitan energy. Home to premier educational institutions, a booming IT sector and some of Maharashtra's finest dining and nightlife, Pune draws visitors and residents from across India. Pink Bra Escorts offers premium verified ${kw} in Pune who match the city's progressive, educated spirit — charming, articulate and absolutely discreet.`,
      coverageNote: `We serve all major areas of Pune — Koregaon Park, Kalyani Nagar, Baner, Aundh, Hinjewadi, Camp, Shivajinagar and MG Road, including all premium hotels. Companions are arranged on the same day with full privacy.`,
    },
    "Nashik": {
      cityIntro: `Nashik is the land of ancient temples, the sacred Godavari, and India's finest vineyards. A city that is equally rich in spiritual heritage and modern hospitality, Nashik draws pilgrims and wine tourists alike. Pink Bra Escorts provides discreet, verified ${kw} in Nashik for clients who seek genuine companionship and warmth during their stay — relaxed, respectful and tailored to your comfort.`,
      coverageNote: `We cover College Road, Gangapur Road, Indira Nagar, Deolali, Trimbakeshwar Road and all major Nashik hotels. Same-day companion arrangement with complete confidentiality.`,
    },
    "Nagpur": {
      cityIntro: `Nagpur, the Orange City, sits at the geographical centre of India and carries the quiet confidence of a city that knows its own worth. A growing commercial hub with wide tree-lined avenues, excellent hospitality infrastructure and a warm local culture, Nagpur is an increasingly popular destination for business travellers. Pink Bra Escorts delivers verified premium ${kw} in Nagpur — professional, friendly and built around your complete privacy.`,
      coverageNote: `We serve Dharampeth, Sitabuldi, Sadar, Civil Lines, Wardha Road, Hingna and Butibori, covering all star hotels in Nagpur. Same-day bookings available with guaranteed discretion.`,
    },
    "Delhi": {
      cityIntro: `Delhi — the capital of India — is a city of staggering contrasts. Ancient Mughal monuments stand alongside gleaming glass towers, Chandni Chowk's chaotic brilliance meets the polished calm of Connaught Place, and Lutyens' wide boulevards give way to the electric energy of South Delhi's nightlife. For business travellers, government officials and tourists alike, Delhi is a city that demands to be experienced fully. Pink Bra Escorts brings premium verified ${kw} in Delhi who carry the sophistication this grand capital deserves — cultured, multilingual and completely discreet.`,
      coverageNote: `We serve all zones of Delhi — South Delhi, Connaught Place, Aerocity, Karol Bagh, Dwarka, Rohini, Saket, Vasant Kunj, Hauz Khas and all major five-star properties including the Taj, Oberoi, Leela, ITC Maurya and Hyatt Regency. Same-day companions with assured confidentiality.`,
    },
    "Noida": {
      cityIntro: `Noida is Delhi NCR's gleaming IT corridor — a city of glass office towers, luxury apartments and ambitious professionals. Sectors 18, 29 and the Expressway belt pulse with the energy of a modern metropolis, while the Noida-Greater Noida corridor has emerged as one of India's most connected urban zones. Pink Bra Escorts offers verified premium ${kw} in Noida who match the city's professional pace — polished, punctual and always discreet.`,
      coverageNote: `We cover all of Noida — Sector 18, Sector 62, Sector 125, Greater Noida, Noida Expressway and every major hotel. Same-day bookings with full privacy.`,
    },
    "Gurgaon": {
      cityIntro: `Gurgaon — now officially Gurugram — is India's corporate powerhouse, a skyline of Fortune 500 headquarters, five-star hotels and rooftop bars that never close. The city's Cyber City, Golf Course Road and MG Road belt attract some of India's highest-earning professionals and international executives. Pink Bra Escorts provides elite verified ${kw} in Gurgaon whose presence matches the city's executive-class energy — refined, confident and completely private.`,
      coverageNote: `We serve Cyber City, DLF Phase 1–5, Golf Course Road, Sohna Road, NH-48 corridor and all premium hotels including Leela Ambience, Oberoi, Trident, Westin and Hyatt Regency. Same-day companions guaranteed.`,
    },
    "Bangalore": {
      cityIntro: `Bangalore — India's Silicon Valley — is a city that thrives on innovation, cosmopolitan culture and an enviable pub scene. From the green avenues of Indiranagar to the glass towers of Whitefield and Electronic City, Bangalore attracts the brightest minds from across the world. Its outdoor culture, world-class dining, and vibrant social scene make it a city where unwinding is an art. Pink Bra Escorts offers premium verified ${kw} in Bangalore who perfectly match the city's open-minded, educated and sophisticated character.`,
      coverageNote: `We cover MG Road, Koramangala, Indiranagar, Whitefield, Electronic City, HSR Layout, Hebbal, Marathahalli and all major Bangalore hotels including Taj, Oberoi, ITC Windsor and Sheraton. Same-day bookings with complete discretion.`,
    },
    "Hyderabad": {
      cityIntro: `Hyderabad is a city where the Charminar's ancient grandeur coexists with the futuristic towers of HITEC City. The City of Pearls seduces visitors with aromatic biryanis, the glittering Hussain Sagar lake, and a hospitality culture that is genuinely second to none. Pink Bra Escorts brings fine verified ${kw} in Hyderabad who embody the city's blend of royal warmth and modern elegance — graceful, well-spoken and highly discreet.`,
      coverageNote: `We serve Banjara Hills, Jubilee Hills, HITEC City, Gachibowli, Kondapur, Kukatpally, Secunderabad and all star properties including Taj Falaknuma, ITC Kakatiya, Novotel and Marriott. Same-day availability.`,
    },
    "Chennai": {
      cityIntro: `Chennai — the Gateway of South India — is a city of graceful temples, roaring Marina Beach and a thriving IT and manufacturing economy. Nungambakkam's tree-lined lanes, the art-deco heritage of Egmore and the modern energy of OMR together make Chennai a city of quiet strength and deep culture. Pink Bra Escorts offers verified ${kw} in Chennai who respect the city's values of privacy and professionalism while delivering a genuinely warm and memorable companionship experience.`,
      coverageNote: `We cover T. Nagar, Nungambakkam, Anna Nagar, OMR, ECR, Velachery, Adyar, Guindy and all Chennai five-star hotels including Taj Coromandel, ITC Grand Chola, The Westin and Hyatt Regency. Same-day bookings.`,
    },
    "Kolkata": {
      cityIntro: `Kolkata — the City of Joy — carries an intellectual and artistic soul unlike any other Indian city. Victoria Memorial's white marble silhouette, the warmth of adda culture, the iconic yellow taxis and the grandeur of Park Street at night all conspire to make Kolkata one of India's most emotionally vivid cities. Pink Bra Escorts provides warm, cultivated verified ${kw} in Kolkata who understand the city's love for literature, conversation and genuine human connection — perfect companions for an evening that is as much about the mind as the senses.`,
      coverageNote: `We serve Park Street, Salt Lake, New Town, Rajarhat, Howrah, EM Bypass and all premium Kolkata hotels including Taj Bengal, Oberoi Grand, ITC, Novotel and Hyatt. Same-day companions.`,
    },
    "Jaipur": {
      cityIntro: `Jaipur — the Pink City — is one of India's most regal destinations. Amber Fort, Hawa Mahal, City Palace and the bustling Johari Bazaar paint a picture of Rajputana splendour that captivates every visitor. Beyond its monuments, Jaipur is home to a thriving hospitality industry, world-class hotels and a growing business community. Pink Bra Escorts offers verified ${kw} in Jaipur who blend naturally into the city's heritage luxury setting — graceful, charming and completely discreet.`,
      coverageNote: `We cover MI Road, C-Scheme, Bani Park, Malviya Nagar, Vaishali Nagar, Tonk Road and all Jaipur heritage and five-star hotels including Rambagh Palace, Jai Mahal Palace, ITC Rajputana and Marriott. Same-day bookings.`,
    },
    "Ahmedabad": {
      cityIntro: `Ahmedabad — India's first UNESCO World Heritage City — is a place of extraordinary architectural legacy, entrepreneurial ambition and cultural depth. The old walled city's pol culture, the Sabarmati Ashram's quiet dignity and the glittering towers of SG Road together reflect a city in confident transformation. Pink Bra Escorts brings premium verified ${kw} in Ahmedabad who respect the city's culture of discretion and provide companionship that is warm, professional and entirely private.`,
      coverageNote: `We serve SG Road, CG Road, Navrangpura, Bopal, Prahlad Nagar, Vastrapur and all Ahmedabad premium hotels including Hyatt Regency, Courtyard Marriott, Novotel and Radisson Blu. Same-day companions guaranteed.`,
    },
    "Goa": {
      cityIntro: `Goa is India's paradise — sun-kissed beaches, swaying palms, a Portuguese colonial legacy and a festival spirit that never fades. From the shacks of Baga and Calangute to the boutique luxury of Assagao and Panjim's heritage neighbourhoods, Goa is a place where every visitor wants to linger longer. Pink Bra Escorts offers beachside-ready verified ${kw} in Goa who match the state's free-spirited, sun-soaked energy — perfect companions for a sunset dinner, a beach club evening, or a private villa retreat.`,
      coverageNote: `We cover North Goa (Baga, Calangute, Candolim, Anjuna, Vagator, Panjim) and South Goa (Colva, Benaulim, Majorda, Margao). All five-star resorts and beach properties served. Same-day bookings with full discretion.`,
    },
    "Lucknow": {
      cityIntro: `Lucknow — the City of Nawabs — is India's most gracious city. Its tehzeeb (refined courtesy), the fragrant kormas of Hazratganj and the layered beauty of the Bara Imambara make Lucknow a place that cherishes elegance in every form. For visitors seeking companionship in this city of culture, Pink Bra Escorts delivers verified ${kw} in Lucknow who understand and embody the city's ethos of warmth, poise and genuine personal care.`,
      coverageNote: `We serve Hazratganj, Gomti Nagar, Mahanagar, Aliganj, Indiranagar, Sushant Golf City and all premium Lucknow hotels including Taj, Hyatt, Vivanta and Holiday Inn. Same-day bookings.`,
    },
    "Chandigarh": {
      cityIntro: `Chandigarh is the city Le Corbusier built — clean, wide, green and purposefully beautiful. As the capital of both Punjab and Haryana and one of India's highest per-capita income cities, Chandigarh carries a quiet prosperity and an outdoor-loving culture that sets it apart. Sector 17, the Rock Garden and Sukhna Lake form the backdrop of a city that enjoys life to the full. Pink Bra Escorts brings premium verified ${kw} in Chandigarh who match the city's modern, confident and cosmopolitan spirit.`,
      coverageNote: `We cover Sector 17, Sector 22, Sector 35, IT Park, Panchkula, Mohali and all premium properties including Taj, Hyatt, JW Marriott and Lalit. Same-day companions with complete privacy.`,
    },
    "Bhopal": {
      cityIntro: `Bhopal — the City of Lakes — is Madhya Pradesh's tranquil capital, famous for its twin lakes, lush greenery and the iconic Taj-ul-Masjid. A city that balances a relaxed pace of life with growing commercial activity, Bhopal is home to professionals, government officials and business visitors who deserve quality companionship during their stay. Pink Bra Escorts offers verified ${kw} in Bhopal — warm, discreet and professional — perfect for a quiet dinner, a hotel visit or simple, pleasant company.`,
      coverageNote: `We serve New Market, Arera Colony, MP Nagar, Habibganj, Kolar Road, Bawadia Kalan and all major Bhopal hotels including Jehan Numa Palace, Courtyard Marriott, Holiday Inn and Radisson Blu. Same-day bookings with full confidentiality.`,
    },
    "Indore": {
      cityIntro: `Indore — Madhya Pradesh's commercial capital — is a city of extraordinary street food and ambitious growth. The soul of Sarafa Bazaar at midnight, the energy of Vijay Nagar's cafes and the corporate buzz of AB Road together make Indore a city that rewards visitors generously. Pink Bra Escorts provides verified ${kw} in Indore who bring genuine warmth, ease and professionalism to every meeting — making your time in this spirited city truly worthwhile.`,
      coverageNote: `We cover Vijay Nagar, AB Road, Rau, LIG Square, Palasia, MR 10 and all Indore premium hotels. Same-day companions guaranteed with complete discretion.`,
    },
    "Kochi": {
      cityIntro: `Kochi — Queen of the Arabian Sea — is India's most cosmopolitan port city. Spice-scented Fort Kochi, the gleaming IT towers of Infopark, the backwater sunsets and the vibrant food scene of Marine Drive make Kochi a city of extraordinary sensory richness. Pink Bra Escorts offers verified ${kw} in Kochi whose warmth and professionalism match the city's globally outward-looking culture — perfect for an evening in a heritage hotel, a waterfront dinner, or quiet private company.`,
      coverageNote: `We serve Fort Kochi, Ernakulam, Kaloor, Kakkanad, Infopark, Edappally and all Kochi luxury hotels including Taj Malabar, Le Méridien, Crowne Plaza and ITC. Same-day bookings with assured privacy.`,
    },
  };

  /* Per-location overrides merged with defaults */
  const override = overrides[location] ?? {};

  /* Default content (generic city, fully dynamic) */
  const defaults: LocationContent = {
    cityIntro: `${location} is a city that rewards those who know how to experience it fully. Beyond its visible attractions — its markets, hotels and business hubs — lies a vibrant private social scene that only the right companionship can unlock. Pink Bra Escorts brings premium verified ${kw} in ${location} who are professional, genuinely warm and built around your personal comfort. Whether you are visiting for work or leisure, our companions in ${location} will make every hour count.`,
    whyUs: `Pink Bra Escorts has been connecting clients with verified companions for over a decade. In ${location}, we offer a roster of carefully screened ${kw} — each interviewed personally, photographed authentically, and trained to deliver an experience defined by respect, warmth and complete discretion. We are not a phone-book directory or a faceless app; we are a live agency with dedicated executives available 24 hours a day to handle your booking with care and speed.`,
    categories: `Our ${location} companion roster includes professional models, college graduates, working professionals, and experienced independent escorts from across India. Whether you prefer a companion who is vivacious and conversational or one who is quietly sophisticated, we have exactly who you are looking for. Incall, outcall, dinner dates, overnight stays and short-duration bookings are all available — on your schedule, at your pace.`,
    coverageNote: override.coverageNote ?? `We serve all major hotels, residences and localities in ${location}. Our ${kw} travel to your hotel, home or office at your convenience. Same-day and last-minute bookings are welcome and handled with complete confidentiality.`,
    experience: `Our companions in ${location} are not simply service providers — they are intelligent, personable individuals who understand the value of genuine human connection. From the moment you connect, the stress of your day begins to dissolve. Whether it is a candlelight dinner, a relaxed conversation over drinks, or a private evening in your suite, your companion will be engaged, attentive and fully present. This is not a transaction — it is a carefully curated experience that leaves you restored and genuinely satisfied.`,
    whatSetsApart: `What separates Pink Bra Escorts from other ${kw} providers in ${location} is the depth of our curation, the speed of our response and the absolute firmness of our privacy guarantee. Every companion has been vetted by our team. Every photograph is current and unedited. Every booking is handled by a real person, not an automated system. We have maintained a spotless reputation in this industry because we treat our clients with the same respect we expect in return. Your money earns you not just companionship, but trust, quality and an experience worth repeating.`,
    disclaimer: `Our services are available exclusively to adults aged 18 years and above. All interactions between our clients and companions are entered into freely and on the basis of mutual consent and respect. We operate within the boundaries of applicable law and do not facilitate or encourage any form of illegal activity. Pink Bra Escorts acts solely as an intermediary introduction agency; any arrangement beyond introduction is an entirely private matter between consenting adults. Client privacy is paramount and your personal information is never shared, sold or retained beyond the booking interaction. By enquiring about or booking our ${kw} services in ${location}, you confirm that you are an adult and accept these terms fully.`,
  };

  return {
    cityIntro: override.cityIntro ?? defaults.cityIntro,
    whyUs: override.whyUs ?? defaults.whyUs,
    categories: override.categories ?? defaults.categories,
    coverageNote: override.coverageNote ?? defaults.coverageNote,
    experience: override.experience ?? defaults.experience,
    whatSetsApart: override.whatSetsApart ?? defaults.whatSetsApart,
    disclaimer: override.disclaimer ?? defaults.disclaimer,
  };
}

/* ── SPA treatments ── */
const spaServices = [
  { slug: "swedish-massage", title: "Swedish Full Body", desc: "Gentle long strokes to relieve muscle tension and improve circulation.", badge: "POPULAR" },
  { slug: "deep-tissue-massage", title: "Deep Tissue Massage", desc: "Firm pressure targeting chronic muscle tension and knots.", badge: "THERAPEUTIC" },
  { slug: "hot-stone-spa", title: "Hot Stone Spa", desc: "Heated basalt stones melt away stress from deep muscle layers.", badge: "PREMIUM" },
  { slug: "aromatherapy", title: "Aromatherapy Massage", desc: "Essential oils blended with relaxing massage for total mind-body calm.", badge: "CALMING" },
  { slug: "thai-massage", title: "Thai Massage", desc: "Assisted stretching and acupressure to restore energy and flexibility.", badge: "ENERGISING" },
  { slug: "b2b-massage", title: "B2B Massage", desc: "A deeply intimate body-to-body massage experience for full relaxation.", badge: "INTIMATE" },
  { slug: "nuru-massage", title: "Nuru Massage", desc: "Traditional Japanese full-body gel massage for ultimate sensory relaxation.", badge: "EXOTIC" },
  { slug: "tantric-massage", title: "Tantric Massage", desc: "A mindful, meditative full-body massage to awaken and balance energy.", badge: "HOLISTIC" },
  { slug: "four-hands-massage", title: "Four Hands Massage", desc: "Two therapists working in perfect synchrony for twice the relaxation.", badge: "LUXURY" },
  { slug: "couples-massage", title: "Couples Massage", desc: "Side-by-side relaxation experience for two — perfect for any occasion.", badge: "COUPLES" },
  { slug: "foot-reflexology", title: "Foot Reflexology", desc: "Pressure points on the feet stimulated to relieve tension throughout the body.", badge: "WELLNESS" },
  { slug: "body-scrub-wrap", title: "Body Scrub & Wrap", desc: "Exfoliation and hydration treatment for glowing, refreshed skin.", badge: "GLOW" },
];

/* ── Slug parser ── */
type Parsed =
  | { kind: "service"; service: (typeof services)[number] }
  | { kind: "location"; location: string; keyword: "Escorts" | "Call Girls" }
  | { kind: "spa"; location: string };

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
  if (slug.startsWith("spa-center-")) {
    const loc = locationByPart.get(slug.slice(11));
    if (loc) return { kind: "spa", location: loc };
  }
  return null;
}

/* ── Static params ── */
export function generateStaticParams() {
  const serviceSlugs = services.map((s) => ({ slug: s.slug }));
  const escortSlugs = locations.map((loc) => ({ slug: `escorts-${toSlug(loc)}` }));
  const callGirlSlugs = locations.map((loc) => ({ slug: `call-girls-${toSlug(loc)}` }));
  const spaSlugs = locations.map((loc) => ({ slug: `spa-center-${toSlug(loc)}` }));
  return [...serviceSlugs, ...escortSlugs, ...callGirlSlugs, ...spaSlugs];
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
    const ogImage = `https://pinkbraescort.in/images/services/${service.img}`;
    return {
      title: `${service.title} in Mumbai – Book Now`,
      description: `${service.desc} in Mumbai. Verified, professional companions available 24/7 for incall and outcall. Call +91-9653203658 for same-day booking.`,
      alternates: { canonical: `/${slug}` },
      openGraph: {
        title: `${service.title} in Mumbai – Book Now`,
        description: `${service.desc} available 24/7 in Mumbai. Verified and discreet.`,
        url: `https://pinkbraescort.in/${slug}`,
        type: "website",
        images: [{ url: ogImage, width: 1200, height: 630, alt: `${service.title} Mumbai` }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${service.title} in Mumbai – Book Now`,
        description: `${service.desc} available 24/7 in Mumbai. Verified and discreet.`,
        images: [ogImage],
      },
    };
  }

  /* SPA metadata */
  if (parsed.kind === "spa") {
    const { location } = parsed;
    const isMmr = mumbaiAreaLocations.has(location);
    const cityStr = isMmr ? `${location}, Mumbai` : location;
    const ogImg = `https://pinkbraescort.in/images/services/default-escort.webp`;
    return {
      title: `Spa Center in ${cityStr} – Body Massage & Wellness`,
      description: `Looking for the best spa center in ${location}? Pink Bra Spa offers Swedish, deep tissue, B2B, Nuru, Thai massage and more. Available 24/7 in ${cityStr}. Call +91-9653203658.`,
      alternates: { canonical: `/${slug}` },
      openGraph: {
        title: `Spa Center in ${cityStr} – Body Massage & Wellness`,
        description: `Premium spa & massage services in ${cityStr}. Swedish, B2B, Nuru, Thai, Hot Stone and more. Discreet, professional, available 24/7.`,
        url: `https://pinkbraescort.in/${slug}`,
        type: "website",
        images: [{ url: ogImg, width: 1200, height: 630, alt: `Spa Center in ${cityStr}` }],
      },
      twitter: {
        card: "summary_large_image",
        title: `Spa Center in ${cityStr} – Body Massage & Wellness`,
        description: `Premium spa & massage services in ${cityStr}. Available 24/7.`,
        images: [ogImg],
      },
    };
  }

  /* location / call-girls metadata */
  const { location, keyword } = parsed;
  const isMumbaiArea = mumbaiAreaLocations.has(location);
  const cityLabel = isMumbaiArea ? `${location}, Mumbai` : location;
  const ogImage = `https://pinkbraescort.in/images/services/default-escort.webp`;
  return {
    title: `${keyword} in ${cityLabel} – Book Now`,
    description: `Looking for ${keyword.toLowerCase()} in ${location}? Pink Bra offers verified, discreet companions available 24/7 in ${cityLabel}. Call +91-9653203658.`,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${keyword} in ${cityLabel} – Book Now`,
      description: `Verified ${keyword.toLowerCase()} in ${cityLabel}. Discreet, professional, available 24/7.`,
      url: `https://pinkbraescort.in/${slug}`,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${keyword} in ${cityLabel}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${keyword} in ${cityLabel} – Book Now`,
      description: `Verified ${keyword.toLowerCase()} in ${cityLabel}. Discreet, professional, available 24/7.`,
      images: [ogImage],
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

  const locationName = parsed.kind !== "service" ? parsed.location : "";
  const isMumbaiArea = parsed.kind !== "service" && mumbaiAreaLocations.has(parsed.location);
  const cityLabel = isMumbaiArea ? `${locationName}, Mumbai` : locationName;

  /* ── Shared building blocks ── */
  const trustCards = [
    { icon: "fas fa-shield-alt", title: "100% Verified", desc: "Every escort is personally verified before joining our roster — authentic photos, real profiles." },
    { icon: "fas fa-user-secret", title: "Complete Discretion", desc: "Your identity and booking details are always kept strictly private and confidential." },
    { icon: "fas fa-clock", title: "Available 24/7", desc: "Book any time of day or night — including weekends, late nights and public holidays." },
    { icon: "fas fa-bolt", title: isMumbaiArea ? "30-Min Arrival" : "Fast Arrival", desc: isMumbaiArea ? "After confirmation your companion reaches your preferred location in 30–45 minutes." : "We coordinate with verified companions in your city for same-day arrival." },
  ];

  const stats = [
    { num: "5000+", label: "Verified Escorts" },
    { num: "4.9★", label: "Average Rating" },
    { num: "10+", label: isMumbaiArea ? "Years in Mumbai" : "Years India-wide" },
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

  /* ── SPA Center page ── */
  if (parsed.kind === "spa") {
    const { location } = parsed;
    const isMmr = mumbaiAreaLocations.has(location);
    const cityStr = isMmr ? `${location}, Mumbai` : location;

    const spaStats = [
      { num: "12+", label: "Spa Treatments" },
      { num: "4.9★", label: "Average Rating" },
      { num: "10+", label: isMmr ? "Years in Mumbai" : "Years India-wide" },
      { num: "24/7", label: "Always Open" },
    ];

    const spaTrustCards = [
      { icon: "fas fa-user-check", title: "Trained Therapists", desc: "Every therapist is certified, experienced and personally vetted by our team." },
      { icon: "fas fa-user-secret", title: "Complete Privacy", desc: "Your session and personal details are handled with absolute confidentiality." },
      { icon: "fas fa-clock", title: "Available 24/7", desc: "Book any time — day, night, weekends or holidays. No time restrictions." },
      { icon: "fas fa-bolt", title: isMmr ? "30-Min Arrival" : "Same-Day Service", desc: isMmr ? "Our therapist reaches your preferred location in 30–45 minutes after confirmation." : "Same-day home or hotel visits arranged across all areas in ${location}." },
    ];

    const spaBookingSteps = [
      { step: 1, title: "Call or WhatsApp", desc: "Contact us on +91-9653203658 any time." },
      { step: 2, title: "Choose Your Treatment", desc: "Pick from Swedish, Deep Tissue, B2B, Nuru, Thai and more." },
      { step: 3, title: "Confirm Your Slot", desc: "We confirm your booking instantly and share all details." },
      { step: 4, title: "Relax & Unwind", desc: "Our therapist arrives at your location, on time, every time." },
    ];

    const spaFaqs = [
      { q: `What spa and massage services are available in ${location}?`, a: `Pink Bra Spa in ${location} offers Swedish full body massage, deep tissue massage, B2B massage, Nuru massage, Thai massage, hot stone spa, aromatherapy, four hands massage, couples massage, foot reflexology, body scrub & wrap, and tantric massage. All sessions are available 24/7.` },
      { q: `How do I book a spa session in ${cityStr}?`, a: `Simply call or WhatsApp +91-9653203658. Share your preferred treatment, location and timing and we will confirm your booking within minutes.` },
      { q: `Are spa services available at home and hotels in ${location}?`, a: `Yes. We provide full outcall spa services — our trained therapists bring everything needed and visit your home, hotel room or private residence anywhere in ${location}.` },
      { q: `How long does a massage session take in ${location}?`, a: `Sessions range from 60 minutes to 3 hours depending on the treatment type. We also offer extended and overnight relaxation packages tailored to your preference.` },
      { q: `Is the spa booking in ${location} completely discreet?`, a: `Yes. All bookings are handled with strict privacy. Your personal information is never shared, stored or disclosed to any third party.` },
      { q: `Are therapists in ${location} certified and verified?`, a: `Yes. Every therapist is personally interviewed and certified before joining our panel. You can trust that every session is conducted by a professional.` },
      { q: `What is the cost of a massage in ${location}?`, a: `Rates depend on treatment type, duration and therapist selection. Call +91-9653203658 for a transparent quote with no hidden charges.` },
      { q: `Do you offer B2B and Nuru massage in ${location}?`, a: `Yes. Body-to-body (B2B) and Nuru massage are available in ${location} for clients seeking a deeply intimate and relaxing experience. Book via WhatsApp on +91-9653203658.` },
      { q: `Is Thai massage available in ${location}?`, a: `Yes. Traditional Thai massage with assisted stretching and acupressure is available in ${location}. It is ideal for relieving stiffness, improving flexibility and restoring energy after travel or long working hours.` },
      { q: `Can I book a couples massage in ${location}?`, a: `Absolutely. Our couples massage is one of our most popular treatments in ${location}. Two therapists work simultaneously for a shared relaxation experience — perfect for holidays or special occasions.` },
      { q: `Are same-day spa bookings available in ${location}?`, a: `Yes. Same-day and last-minute bookings are always welcome in ${location}. We recommend booking 1–2 hours in advance for a specific therapist, though we do our best to accommodate urgent requests.` },
      { q: `Why choose Pink Bra Spa Center in ${location}?`, a: isMmr ? `Pink Bra Spa has been serving clients in Mumbai since 2015 with certified therapists across all areas including ${location}. We offer 12+ premium treatments, 4.9-star rated service, 30-minute arrival and full confidentiality on every booking.` : `Pink Bra Spa has been serving clients across India since 2015 with certified therapists available in ${location} and all major cities. We offer 12+ premium treatments, a 4.9-star rating and absolute privacy on every booking.` },
    ];

    const spaJsonLd = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        name: `Pink Bra Spa Center ${location}`,
        description: `Premium spa and body massage center in ${cityStr} offering Swedish, deep tissue, B2B, Nuru, Thai and 12+ other treatments. Available 24/7.`,
        telephone: "+919653203658",
        url: `https://pinkbraescort.in/spa-center-${toSlug(location)}`,
        address: { "@type": "PostalAddress", addressLocality: location, addressCountry: "IN" },
        areaServed: { "@type": "Place", name: isMmr ? `${location}, Mumbai` : location },
        openingHours: "Mo-Su 00:00-23:59",
        priceRange: "₹₹",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: spaFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ]);

    return (
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: spaJsonLd }} />

        {/* HERO */}
        <section className="hero-section" aria-label={`Spa Center in ${location}`}>
          <div className="absolute inset-0 overflow-hidden hidden sm:block" style={{ pointerEvents: "none" }} aria-hidden="true">
            <div className="absolute top-1/4 left-1/4 text-white opacity-10 text-6xl" style={{ animation: "float 3s ease-in-out infinite" }}>✿</div>
            <div className="absolute top-1/3 right-1/4 text-white opacity-10 text-4xl" style={{ animation: "float 4s ease-in-out 1s infinite" }}>❀</div>
            <div className="absolute bottom-1/3 left-1/3 text-white opacity-10 text-5xl" style={{ animation: "float 3.5s ease-in-out 2s infinite" }}>✦</div>
          </div>
          <div className="hero-content relative z-10">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <i className="fas fa-spa" aria-hidden="true"></i>
                <span>Premium Spa &amp; Massage {isMmr ? "Mumbai" : location}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                  Spa Center in {location}
                </span>
                {isMmr && (
                  <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                    Mumbai
                  </span>
                )}
              </h1>
              <p className="text-pink-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                Swedish · Deep Tissue · B2B · Nuru · Thai · Hot Stone &amp; 6 more treatments. Certified therapists available 24/7 in {location}.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="tel:+919653203658" className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg">
                  📞 Book Now
                </a>
                <a href="https://api.whatsapp.com/send?phone=919653203658" rel="noopener noreferrer" target="_blank" className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {spaStats.map((s) => (
                <div key={s.label} className="bg-pink-50 rounded-2xl p-6">
                  <div className="text-3xl font-extrabold text-pink-600 mb-1">{s.num}</div>
                  <div className="text-gray-600 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TREATMENTS GRID */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Spa &amp; Massage Treatments in {location}
            </h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
              Choose from 12 premium treatments delivered by certified therapists at your home or hotel in {location}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaServices.map((t) => (
                <div key={t.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/spa/${t.slug}.svg`}
                      alt={`${t.title} spa service in ${location}`}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {t.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{t.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.desc}</p>
                    <a href="tel:+919653203658" className="bg-pink-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-600 transition-colors inline-block text-sm">
                      Book in {location}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST CARDS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose Pink Bra Spa in {location}?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {spaTrustCards.map((c) => (
                <div key={c.title} className="text-center p-6 bg-pink-50 rounded-2xl border border-pink-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <i className={`${c.icon} text-white text-xl`} aria-hidden="true"></i>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">About Us</span>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Premium Spa Center in {cityStr}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                  {isMmr
                    ? `Pink Bra Spa is Mumbai's most trusted home and hotel spa service. In ${location}, we connect you with certified therapists who deliver 12+ premium treatments with complete discretion, any time of day or night.`
                    : `Pink Bra Spa is one of India's most trusted home and hotel spa services. In ${location}, our certified therapists deliver 12+ premium treatments right to your door — with complete professionalism and privacy.`}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  From a classic Swedish relaxation massage to the deeply immersive B2B or Nuru experience, every session is conducted by a trained, verified therapist in a clean, comfortable and fully private setting — at your home or hotel.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Since 2015, we have served thousands of satisfied clients {isMmr ? "across all Mumbai areas" : "across India"}. Our 4.9-star rating reflects our commitment to quality, discretion and genuine care at every session.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a href="tel:+919653203658" className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors">
                    📞 Book a Session
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=919653203658" rel="noopener noreferrer" target="_blank" className="border-2 border-pink-500 text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors">
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "fas fa-spa", label: "12+ Treatments" },
                  { icon: "fas fa-certificate", label: "Certified Therapists" },
                  { icon: "fas fa-hotel", label: "Home & Hotel Visits" },
                  { icon: "fas fa-lock", label: "100% Private" },
                  { icon: "fas fa-clock", label: "Available 24/7" },
                  { icon: "fas fa-star", label: "4.9★ Rating" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-pink-100">
                    <i className={`${item.icon} text-2xl text-pink-500 mb-2 block`} aria-hidden="true"></i>
                    <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO BOOK */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              How to Book a Spa in {location}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {spaBookingSteps.map((step) => (
                <div key={step.step} className="text-center p-6 relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OTHER SPA LOCATIONS */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              {isMmr ? "Spa Centers in Other Mumbai Areas" : "Spa Centers in Other Cities"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {locations.filter((loc) => loc !== location).map((loc) => (
                <Link
                  key={loc}
                  href={`/spa-center-${toSlug(loc)}`}
                  className="bg-pink-500 hover:bg-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-300 block text-sm"
                >
                  Spa in {loc}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Book Your Spa Session in {location} Now</h2>
            <p className="text-pink-100 mb-8 text-lg">Available 24/7 in {location} and {isMmr ? "all Mumbai areas" : "across India"}. Call or WhatsApp to book instantly.</p>
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

        {/* FAQ */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-white relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-rose-200 rounded-full opacity-20 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1 rounded-full mb-3 tracking-wide uppercase">Got Questions?</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Frequently Asked Questions</h2>
              <p className="mt-3 text-gray-500 max-w-xl mx-auto">Everything you need to know about spa services in {location} — answered.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="space-y-4">
                {spaFaqs.slice(0, 6).map((faq, i) => (
                  <div key={faq.q} className="group bg-white rounded-2xl shadow-sm border border-pink-100 p-6 hover:shadow-md hover:border-pink-300 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white text-sm font-bold flex items-center justify-center shadow">{i + 1}</span>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2 leading-snug group-hover:text-pink-600 transition-colors">{faq.q}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {spaFaqs.slice(6).map((faq, i) => (
                  <div key={faq.q} className="group bg-white rounded-2xl shadow-sm border border-pink-100 p-6 hover:shadow-md hover:border-pink-300 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white text-sm font-bold flex items-center justify-center shadow">{i + 7}</span>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2 leading-snug group-hover:text-pink-600 transition-colors">{faq.q}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /* ── Location / Call-Girls page ── */
  const { location, keyword } = parsed;
  const isCallGirls = keyword === "Call Girls";
  const prefix = isCallGirls ? "call-girls" : "escorts";

  const faqs = [
    { q: `How do I book ${keyword.toLowerCase()} in ${cityLabel}?`, a: `Call or WhatsApp +91-9653203658 and mention ${location} as your preferred area. We confirm bookings within minutes and arrange the companion of your choice, any time of day or night.` },
    { q: `Are ${keyword.toLowerCase()} available late at night in ${location}?`, a: `Yes. Our ${keyword.toLowerCase()} in ${location} are available round the clock — including late nights, weekends and public holidays. There is no time restriction on bookings.` },
    { q: `Do ${keyword.toLowerCase()} in ${location} offer hotel visits?`, a: `Yes. Outcall services are available — companions visit your hotel room, serviced apartment or any location in and around ${location}. All hotels are supported.` },
    { q: `How long does it take for a companion to arrive in ${location}?`, a: isMumbaiArea ? `After booking confirmation companions typically arrive within 30 to 45 minutes, depending on traffic in the ${location} area of Mumbai.` : `After booking confirmation our local companions in ${location} are typically arranged on the same day. Exact timing depends on availability and your location.` },
    { q: `Is booking ${keyword.toLowerCase()} in ${location} discreet?`, a: `Yes, completely. All bookings are handled with strict confidentiality. Your personal information is never shared or stored beyond the booking process.` },
    { q: `What is the cost of ${keyword.toLowerCase()} in ${location}?`, a: `Rates depend on duration, service type and companion selection. Call +91-9653203658 for a personalised quote with full transparency and no hidden charges.` },
    { q: `Are all ${keyword.toLowerCase()} in ${location} verified?`, a: `Yes. Every companion serving ${location} is personally interviewed and profile-verified by our team. All photos are genuine, recent and unedited.` },
    { q: `Can I request a specific type of companion in ${location}?`, a: `Absolutely. Share your preferences — appearance, language spoken, personality — and we will match you with the ideal companion from our ${location} roster.` },
    { q: `Do you offer same-day ${keyword.toLowerCase()} bookings in ${location}?`, a: `Yes. Same-day and last-minute bookings are accepted in ${location}. For a specific companion a 2-hour advance notice is recommended, though we always do our best.` },
    { q: `Are both incall and outcall options available in ${location}?`, a: `Yes. Incall and outcall services are both available in ${location}. Outcall covers your hotel, home or office anywhere in ${location}.` },
    { q: `What services are available with ${keyword.toLowerCase()} in ${location}?`, a: `Companions in ${location} offer personal meetings, dinner dates, event accompaniment, overnight stays and more. All services are tailored to your preferences and boundaries.` },
    { q: `Why choose Pink Bra Escorts for ${keyword.toLowerCase()} in ${location}?`, a: isMumbaiArea ? `Pink Bra Escorts has served Mumbai since 2015 with 5,000+ verified companions across all areas including ${location}. We offer a 4.9-star rated service with guaranteed 30-minute arrival and full privacy on every booking.` : `Pink Bra Escorts has served clients across India since 2015 with 5,000+ verified companions available in ${location} and all major cities. We offer a 4.9-star rated service with full privacy on every booking.` },
  ];

  const lc = getLocationContent(location, isMumbaiArea, keyword);

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
            {isMumbaiArea && (
              <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                Mumbai
              </span>
            )}
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
            Premium {keyword} in {cityLabel}
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            {isMumbaiArea ? "Pink Bra Escorts offers Mumbai\u2019s finest" : "Pink Bra Escorts offers India\u2019s finest"} {keyword.toLowerCase()} in <strong>{location}</strong>. Whether you&apos;re staying at a hotel, at home, or need a companion for an event — we are just a call away.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            All {keyword.toLowerCase()} serving {location} are 100% verified, professional and trained to maintain complete discretion. We offer both incall and outcall services{isMumbaiArea ? " with a guaranteed 30\u201345 minute arrival time" : " with same-day availability"}.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Since 2015, Pink Bra Escorts has been {isMumbaiArea ? "Mumbai\u2019s" : "India\u2019s"} most trusted agency. Book today and experience the difference.
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
            {services.map((s) => (
              <div key={s.slug} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/images/services/${s.img}`}
                    alt={`${s.title} in ${cityLabel}`}
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
            {isMumbaiArea ? `${keyword} in Other Mumbai Areas` : `${keyword} in Other Cities`}
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
          <p className="text-pink-100 mb-8 text-lg">Available 24/7 in {location} and {isMumbaiArea ? "all Mumbai areas" : "across India"}. Call or WhatsApp to book instantly.</p>
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

      {/* ── EDITORIAL CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* City intro */}
          <div className="mb-14">
            <span className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
              About {keyword} in {location}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-5">
              Premium {keyword} Service in {location}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">{lc.cityIntro}</p>
          </div>

          {/* Why Pink Bra + Categories side by side */}
          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm" aria-hidden="true">
                  <i className="fas fa-shield-alt"></i>
                </span>
                About Pink Bra Escorts in {location}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{lc.whyUs}</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-sm" aria-hidden="true">
                  <i className="fas fa-heart"></i>
                </span>
                {keyword} Categories in {location}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{lc.categories}</p>
            </div>
          </div>

          {/* Coverage note */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-14 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm" aria-hidden="true">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              {isMumbaiArea ? `${keyword} Available Across All ${location} Areas` : `${keyword} Booking Coverage in ${location}`}
            </h3>
            <p className="text-gray-600 leading-relaxed">{lc.coverageNote}</p>
          </div>

          {/* Experience paragraph */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-gray-800 mb-5">
              The Pink Bra Experience in {location}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{lc.experience}</p>
          </div>

          {/* What sets apart */}
          <div className="mb-14 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-5">
              What Sets Pink Bra Apart from Other {keyword} in {location}?
            </h3>
            <p className="leading-relaxed text-pink-50">{lc.whatSetsApart}</p>
          </div>

          {/* Disclaimer */}
          <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50">
            <h3 className="text-base font-bold text-gray-700 mb-3 uppercase tracking-wide text-sm">
              Important Notice
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{lc.disclaimer}</p>
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
              areaServed: { "@type": "Place", name: isMumbaiArea ? `${location}, Mumbai` : location },
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


