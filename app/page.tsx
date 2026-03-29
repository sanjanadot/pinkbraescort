import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Locations from "@/components/Locations";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Featured Services */}
      <ServicesGrid />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Escorts In Mumbai
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              All our Pink Bra <strong>escorts in Mumbai</strong> are excellent professionals. They
              are highly professional and will always meet you with enthusiasm. Their dedication to
              providing the best services ensures that your time with them is worthwhile.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our independent <strong>escorts in Mumbai</strong> understand what gentlemen expect
              from them. They are always successful in providing the services you desire, bringing
              excitement and thrill to your life.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 my-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                About Mumbai&apos;s Premier Escort Service
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Since 2015, Pink Bra Escorts has been Mumbai&apos;s most trusted escort agency,
                providing verified high-class escorts across all major areas including{" "}
                <Link href="/escorts-bandra" className="text-pink-600 hover:text-pink-700 font-semibold">Bandra</Link>,{" "}
                <Link href="/escorts-juhu" className="text-pink-600 hover:text-pink-700 font-semibold">Juhu</Link>,{" "}
                <Link href="/escorts-andheri" className="text-pink-600 hover:text-pink-700 font-semibold">Andheri</Link>,{" "}
                <Link href="/escorts-powai" className="text-pink-600 hover:text-pink-700 font-semibold">Powai</Link>, and{" "}
                <Link href="/escorts-colaba" className="text-pink-600 hover:text-pink-700 font-semibold">Colaba</Link>.
                Our 5247+ verified escorts represent the pinnacle of beauty, sophistication, and professionalism.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We understand that privacy and discretion are paramount. Every booking is handled
                with complete confidentiality, and our escorts are trained to maintain the highest
                standards of professional conduct.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: "fas fa-shield-alt", title: "100% Verified", desc: "All our escorts are thoroughly verified and professional" },
                { icon: "fas fa-clock", title: "24/7 Available", desc: "Round the clock availability for your convenience" },
                { icon: "fas fa-user-secret", title: "Complete Discretion", desc: "Your privacy and confidentiality is our top priority" },
                { icon: "fas fa-star", title: "Premium Quality", desc: "High-class escorts with exceptional beauty and charm" },
              ].map((item) => (
                <div key={item.title} className="text-center p-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${item.icon} text-2xl text-pink-500`} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Escort Services Available In Mumbai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "fas fa-home", title: "Outcall Services", desc: "Our escorts in Mumbai will visit you at your preferred location - hotel, home, or office" },
              { icon: "fas fa-building", title: "Incall Services", desc: "Visit our comfortable and private locations for an intimate experience" },
              { icon: "fas fa-plane", title: "Travel Companion", desc: "Perfect escorts for business trips, vacations, and social events" },
              { icon: "fas fa-calendar-alt", title: "Long Term Booking", desc: "Extended bookings available for weeks or months with special rates" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-2xl text-pink-500`} aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <Locations />

      {/* Booking Process */}
      <section id="booking" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            How to Book Escorts In Mumbai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Choose an Escort", desc: "Browse our gallery and select your preferred companion" },
              { step: 2, title: "Contact Us", desc: "Call or WhatsApp us to discuss your requirements" },
              { step: 3, title: "Confirm Booking", desc: "We'll confirm your booking and finalize all details" },
              { step: 4, title: "Enjoy Your Time", desc: "Your chosen escort will arrive at your location as scheduled" },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Premium <span className="text-pink-600">Escorts In Mumbai</span> Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse selection of verified <strong>escorts in Mumbai</strong> across all categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fas fa-crown", title: "VIP Escorts Mumbai", href: "/vip-escorts-mumbai", cta: "Explore VIP Escorts", desc: "Ultra-luxury VIP escorts in Mumbai for exclusive experiences. Perfect for high-profile events, corporate meetings, and elite social gatherings." },
              { icon: "fas fa-star", title: "Celebrity Escorts Mumbai", href: "/celebrity-escorts-mumbai", cta: "Meet Celebrity Escorts", desc: "Bollywood models, TV actresses, and influencers as escorts in Mumbai. Experience celebrity-level beauty and sophistication." },
              { icon: "fas fa-globe", title: "Russian Escorts Mumbai", href: "/russian-escorts-mumbai", cta: "Book Russian Escorts", desc: "Authentic Russian models and international escorts in Mumbai. Eastern European beauty, sophistication, and world-class companionship." },
              { icon: "fas fa-graduation-cap", title: "College Escorts Mumbai", href: "/college-girl-mumbai", cta: "Meet College Escorts", desc: "Young, vibrant college models as escorts in Mumbai. Fresh energy, youthful companionship, and genuine connections." },
              { icon: "fas fa-user", title: "Independent Escorts Mumbai", href: "/independent-escorts-mumbai", cta: "Browse Independent", desc: "Professional independent escorts in Mumbai working on their own terms. Direct booking with verified independent escorts." },
              { icon: "fas fa-home", title: "Housewife Escorts Mumbai", href: "/housewife-escorts-mumbai", cta: "Connect With Housewives", desc: "Mature, experienced housewife escorts in Mumbai offering genuine emotional connections and real companionship." },
              { icon: "fas fa-camera", title: "Model Escorts Mumbai", href: "/vip-escorts-mumbai", cta: "View Model Portfolio", desc: "Professional fashion models and runway escorts in Mumbai. Stunning beauty combined with sophisticated personalities." },
              { icon: "fas fa-heart", title: "Mature Escorts Mumbai", href: "/mature-escorts-mumbai", cta: "Meet Mature Escorts", desc: "Sophisticated mature escorts in Mumbai with life experience and emotional intelligence. Perfect for meaningful connections." },
              { icon: "fas fa-briefcase", title: "Corporate Escorts Mumbai", href: "/vip-escorts-mumbai", cta: "Book Corporate Escorts", desc: "Professional corporate escorts for business events. Well-educated, articulate escorts perfect for business dinners and conferences." },
            ].map((cat) => (
              <div key={cat.title} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 hover:shadow-2xl transition-all">
                <div className="text-pink-600 text-5xl mb-4">
                  <i className={cat.icon} aria-hidden="true"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{cat.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{cat.desc}</p>
                <Link href={cat.href} className="text-pink-600 font-semibold hover:text-pink-700 flex items-center gap-2">
                  {cat.cta} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: "How do I book an escort?", a: "Simply browse our gallery, choose your preferred escort, and contact us via phone or WhatsApp to make a booking." },
              { q: "Are your escorts verified?", a: "Yes, all our escorts are thoroughly verified and are genuine professionals in the industry." },
              { q: "Do you provide outcall services?", a: "Yes, we provide both incall and outcall services. Our escorts can visit your hotel, home, or preferred location." },
              { q: "Is my privacy protected?", a: "Absolutely. We maintain complete discretion and confidentiality for all our clients." },
              { q: "What are your rates?", a: "Our rates vary depending on the escort and duration. Contact us for detailed pricing information." },
              { q: "How quickly can an escort reach me?", a: "Typically, our escorts can reach your location within 45 minutes to 1 hour after booking confirmation." },
            ].map((faq) => (
              <div key={faq.q} className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <i className="fas fa-question-circle text-pink-500" aria-hidden="true"></i>
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
