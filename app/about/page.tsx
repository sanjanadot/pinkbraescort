import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pink Bra Escorts Mumbai – Verified Companions Since 2015",
  description:
    "Pink Bra Escorts has provided verified, professional companionship services in Mumbai since 2015. Learn about our standards, values, and commitment to discretion.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Pink Bra Escorts Mumbai – Verified Companions Since 2015",
    description: "Trusted escort agency in Mumbai since 2015. Verified companions, full discretion, 24/7 availability.",
    url: "https://pinkbraescort.in/about",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Pink Bra Escorts Mumbai",
  url: "https://pinkbraescort.in/about",
  description:
    "Pink Bra Escorts is a trusted companionship agency in Mumbai, operating since 2015 with verified escorts, complete discretion, and professional service standards.",
  publisher: {
    "@type": "Organization",
    name: "Pink Bra Escorts Mumbai",
    url: "https://pinkbraescort.in",
    telephone: "+919653203658",
    foundingDate: "2015",
    areaServed: { "@type": "City", name: "Mumbai" },
  },
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pink Bra Escorts</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Mumbai&apos;s #1 premium escort agency since 2015, providing verified high-class escorts
            for discerning gentlemen
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Pink Bra Escorts is Mumbai&apos;s leading premium escort service, established in 2015. We
              have built our reputation on trust, discretion, and providing the highest quality
              companionship services to our valued clients.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              With over 5000+ verified escorts across all categories — from VIP models and celebrity
              escorts to Russian models and independent professionals — we offer an unmatched
              selection to meet every client&apos;s unique preferences and requirements.
            </p>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Our Commitment</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              We are committed to providing a safe, discreet, and professional experience for every
              client. All our escorts undergo thorough verification processes, and we maintain strict
              standards of professionalism and confidentiality.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16">
            {[
              { num: "5000+", label: "Verified Escorts" },
              { num: "4.9★", label: "Average Rating" },
              { num: "10+", label: "Years Experience" },
              { num: "24/7", label: "Availability" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-pink-50 rounded-2xl">
                <div className="text-3xl font-bold text-pink-500 mb-2">{stat.num}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Pink Bra Escorts?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "fas fa-shield-alt", title: "100% Verified", desc: "Every escort is thoroughly verified with authentic photos and professional background" },
              { icon: "fas fa-lock", title: "Complete Discretion", desc: "Your privacy is paramount. We never share client information under any circumstances" },
              { icon: "fas fa-clock", title: "24/7 Service", desc: "Available round the clock, 365 days a year for bookings and inquiries" },
              { icon: "fas fa-map-marker-alt", title: "All Mumbai Locations", desc: "Service across all major Mumbai areas including suburbs and Navi Mumbai" },
              { icon: "fas fa-star", title: "Premium Quality", desc: "Only the highest quality escorts who meet our strict standards of beauty and professionalism" },
              { icon: "fas fa-bolt", title: "Quick Arrival", desc: "30-45 minute arrival guaranteed after booking confirmation" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`${item.icon} text-pink-500 text-lg`} aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </main>
  );
}
