import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Book an Escort in Mumbai 24/7",
  description:
    "Contact Pink Bra Escorts Mumbai by phone or WhatsApp at +91-9653203658. Available 24/7 to arrange verified companions across all Mumbai areas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Pink Bra Escorts Mumbai – Call or WhatsApp to Book",
    description: "Reach us 24/7 on +91-9653203658. Quick, discreet booking for escorts across all Mumbai areas.",
    url: "https://pinkbraescort.in/contact",
    type: "website",
    images: [{ url: "https://pinkbraescort.in/images/services/default-escort.webp", width: 1200, height: 630, alt: "Contact Pink Bra Escorts Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pink Bra Escorts Mumbai – Call or WhatsApp to Book",
    description: "Reach us 24/7 on +91-9653203658. Quick, discreet booking for escorts across all Mumbai areas.",
    images: ["https://pinkbraescort.in/images/services/default-escort.webp"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Pink Bra Escorts Mumbai",
  url: "https://pinkbraescort.in/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Pink Bra Escorts Mumbai",
    telephone: "+919653203658",
    email: "sanjanadotsingh@gmail.com",
    url: "https://pinkbraescort.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919653203658",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
      contactOption: "TollFree",
    },
  },
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Book your premium escort in Mumbai today. Available 24/7 for immediate bookings.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Phone */}
            <a
              href="tel:+919653203658"
              className="flex flex-col items-center p-8 bg-pink-50 rounded-2xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-pink-600 transition-colors">
                <i className="fas fa-phone text-white text-3xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Now</h3>
              <p className="text-pink-600 font-bold text-lg">+91 9653203658</p>
              <p className="text-gray-500 text-sm mt-2">Available 24/7</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=919653203658"
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-col items-center p-8 bg-green-50 rounded-2xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <i className="fab fa-whatsapp text-white text-3xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-bold text-lg">+91 9653203658</p>
              <p className="text-gray-500 text-sm mt-2">Quick Response</p>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/+919653203658"
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-col items-center p-8 bg-blue-50 rounded-2xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <i className="fab fa-telegram text-white text-3xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Telegram</h3>
              <p className="text-blue-600 font-bold text-lg">@pinkbraescorts</p>
              <p className="text-gray-500 text-sm mt-2">Secure Messaging</p>
            </a>

            {/* Email */}
            <a
              href="mailto:sanjanadotsingh@gmail.com"
              className="flex flex-col items-center p-8 bg-purple-50 rounded-2xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                <i className="fas fa-envelope text-white text-3xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-purple-600 font-bold text-sm break-all">sanjanadotsingh@gmail.com</p>
              <p className="text-gray-500 text-sm mt-2">For Inquiries</p>
            </a>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">How to Book</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Contact Us", desc: "Call or WhatsApp at +91-9653203658" },
                { step: "2", title: "Choose Your Escort", desc: "Browse and select your preferred companion" },
                { step: "3", title: "Confirm & Enjoy", desc: "Your escort will arrive within 30-60 minutes" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-white text-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-pink-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </main>
  );
}
