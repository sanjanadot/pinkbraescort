export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Hero section">
      {/* Animated background elements (desktop only) */}
      <div
        className="absolute inset-0 overflow-hidden hidden sm:block"
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      >
        <div
          className="absolute top-1/4 left-1/4 text-white opacity-10 text-6xl"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          ♥
        </div>
        <div
          className="absolute top-1/3 right-1/4 text-white opacity-10 text-4xl"
          style={{ animation: "float 4s ease-in-out 1s infinite" }}
        >
          ♥
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-white opacity-10 text-5xl"
          style={{ animation: "float 3.5s ease-in-out 2s infinite" }}
        >
          ♥
        </div>
      </div>

      <div className="hero-content relative z-10">
        {/* Heading */}
        <div className="mb-6 sm:mb-8 px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
              Escorts In Mumbai
            </span>
            <span className="block bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
              #1 Premium VIP Service
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl text-pink-100 mt-3">
              5000+ Verified Escorts Available 24/7
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed text-pink-50 font-light px-2">
          <span className="hidden sm:inline">
            Experience Mumbai&apos;s finest{" "}
            <strong className="text-yellow-200">escorts in Mumbai</strong> with our premium
            verified escorts. Our professional{" "}
            <strong className="text-yellow-200">Mumbai escorts</strong> provide elite{" "}
            <strong className="text-yellow-200">outcall and incall services</strong> across all
            areas including{" "}
            <em className="text-pink-100">Bandra, Juhu, Andheri, Powai, Colaba &amp; Navi Mumbai</em>.
          </span>
          <span className="sm:hidden">
            Mumbai&apos;s finest{" "}
            <strong className="text-yellow-200">verified escorts</strong> available 24/7.
            Professional service across all Mumbai areas.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons px-4">
          <a
            href="tel:+919653203658"
            className="cta-btn cta-primary"
            aria-label="Call Pink Bra Escorts Mumbai"
          >
            <span className="text-xl" aria-hidden="true">📞</span>
            <span className="text-base sm:text-lg">Call Now</span>
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
              24/7
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919653203658"
            className="cta-btn cta-secondary"
            aria-label="WhatsApp Pink Bra Escorts Mumbai"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-xl" aria-hidden="true">💬</span>
            <span className="text-base sm:text-lg">WhatsApp</span>
            <div className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full animate-pulse">
              Fast
            </div>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators px-2">
          {[
            { icon: "🛡️", label: "5247+ Verified" },
            { icon: "🔒", label: "100% Safe" },
            { icon: "⭐", label: "4.9★ Rating" },
            { icon: "🕐", label: "24/7 Available" },
            { icon: "📍", label: "All Mumbai" },
            { icon: "⚡", label: "30-Min Arrival" },
          ].map((badge) => (
            <div key={badge.label} className="trust-badge">
              <span className="text-lg sm:text-xl block mb-1" aria-hidden="true">
                {badge.icon}
              </span>
              <span className="block">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm opacity-75">Explore Services</span>
          <span aria-hidden="true">⬇</span>
        </div>
      </div>
    </section>
  );
}
