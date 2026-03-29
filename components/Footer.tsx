import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
              <i className="fas fa-heart" aria-hidden="true"></i> Pink Bra Escorts
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium escort services providing high-class escorts for discerning
              gentlemen. Discretion, quality, and satisfaction guaranteed.
            </p>
            <div className="flex space-x-3 flex-wrap">
              <a
                href="tel:+919653203658"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                title="Call Us"
              >
                <i className="fas fa-phone text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919653203658"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                title="WhatsApp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-whatsapp text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://t.me/+919653203658"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                title="Telegram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-telegram text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="https://arratai.com/919653203658"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                title="Arratai"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fas fa-comments text-xl" aria-hidden="true"></i>
              </a>
              <a
                href="mailto:sanjanadotsingh@gmail.com"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
                title="Email"
              >
                <i className="fas fa-envelope text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Premium Services */}
          <div>
            <h4 className="text-lg font-semibold text-pink-400 mb-4">Premium Services</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                { label: "VIP Escorts Mumbai", href: "/vip-escorts-mumbai" },
                { label: "Celebrity Escorts", href: "/celebrity-escorts-mumbai" },
                { label: "Russian Escorts", href: "/russian-escorts-mumbai" },
                { label: "Elite Models", href: "/elite-model-mumbai" },
                { label: "College Girls", href: "/college-girl-mumbai" },
                { label: "High Class Models", href: "/high-class-model-mumbai" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-pink-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Services", href: "/services" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-pink-400 mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              {[
                { icon: "fas fa-phone", text: "+91 9653203658" },
                { icon: "fab fa-whatsapp", text: "WhatsApp Available" },
                { icon: "fab fa-telegram", text: "Telegram Available" },
                { icon: "fas fa-comments", text: "Arratai Available" },
                { icon: "fas fa-envelope", text: "sanjanadotsingh@gmail.com" },
                { icon: "fas fa-clock", text: "24/7 Service" },
                { icon: "fas fa-map-marker-alt", text: "Mumbai, Maharashtra" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <i className={`${item.icon} text-pink-400`} aria-hidden="true"></i>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2026 Pink Bra Escorts. All Rights Reserved. Premium Escorts In Mumbai.
            </p>
            <span className="text-gray-400 text-sm">
              Outcall &amp; Incall | Discreet &amp; Professional | 18+ Only
            </span>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              This website is intended for adults 18+ only. All content is for entertainment purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
