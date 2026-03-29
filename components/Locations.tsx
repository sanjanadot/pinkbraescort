import Link from "next/link";

const locations = [
  "Andheri", "Bandra", "Juhu", "Powai", "Lower Parel", "Worli", "Colaba", "Fort",
  "Thane", "Navi Mumbai", "Airoli", "Ambernath", "Belapur", "Bhandup", "Bhayandar",
  "Bhiwandi", "Borivali", "Byculla", "Chembur", "Churchgate", "Dadar", "Dombivli",
  "Ghatkopar", "Goregaon", "Jogeshwari", "Kalyan", "Kandivali", "Khar", "Kharghar",
  "Kurla", "Malad", "Marine Lines", "Mira Road", "Mulund", "Panvel", "Santacruz",
  "Vasai", "Vashi", "Versova", "Virar", "Ambivali", "Asangaon", "Badlapur", "Boisar",
  "Charni Road", "Chinchpokli", "Chuna Bhatti", "CST", "Diva", "Ghansoli",
  "Ghodbunder Road", "Govandi", "Grant Road", "Juinagar", "Kalamboli", "Kalwa",
  "Kanjurmarg", "Karjat", "Kasara", "Khopoli", "Kopar Khairane", "Lokhandwala",
  "Mahim", "Masjid Bandar", "Mumbai Airport", "Mumbai Central", "Mumbai", "Mumbra",
  "Nahur", "Naigaon", "Nalasopara", "Nariman Point", "Neral", "Nerul", "Palghar",
  "Parel", "Prabhadevi", "Rabale", "Sakinaka", "Sanpada", "Saphale", "Seawoods",
  "Sion", "Thakurli", "Titwala", "Ulhasnagar", "Ulwe", "Vidyavihar", "Vikhroli",
  "Vile Parle", "Wadala",
];

function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Locations() {
  return (
    <section id="locations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Premium Escorts In Mumbai - All Locations
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
  );
}
