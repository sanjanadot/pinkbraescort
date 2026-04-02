import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Pink Bra Escorts Mumbai. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-pink-100 text-lg">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p>
                Pink Bra Escorts (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal
                information and your right to privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website or contact us.
              </p>
              <p className="mt-3">
                By using our services, you agree to the collection and use of information in accordance
                with this policy. If you do not agree with the terms of this Privacy Policy, please
                discontinue use of our site and services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Contact Information:</strong> Name, phone number, email address, and WhatsApp number you provide when contacting us.</li>
                <li><strong>Usage Data:</strong> Information your browser sends when you visit our site, including IP address, browser type, pages visited, and time of visit.</li>
                <li><strong>Cookies:</strong> Small files stored on your device to improve your browsing experience and analyze site traffic.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your enquiries and process bookings.</li>
                <li>Improve our website and services.</li>
                <li>Send relevant information about our services (only if you have opted in).</li>
                <li>Ensure the security and integrity of our services.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Disclosure of Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our website and conducting our business, subject to confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organisational security measures to protect
                your personal information against unauthorised access, alteration, disclosure, or
                destruction. However, no method of transmission over the internet is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Cookies</h2>
              <p>
                Our website uses cookies to enhance your experience. You can choose to disable
                cookies through your browser settings. Note that disabling cookies may affect
                the functionality of certain parts of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We have no control over
                and assume no responsibility for the content, privacy policies, or practices of
                any third-party sites. We encourage you to review the privacy policy of every
                site you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Age Restriction</h2>
              <p>
                Our services are strictly for adults aged 18 years and above. We do not knowingly
                collect personal information from anyone under 18. If you are under 18, please do
                not use our services or provide any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by updating the &quot;Last updated&quot; date at the top of this policy. Your
                continued use of our services after any changes constitutes acceptance of the
                new Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices,
                please contact us:
              </p>
              <div className="mt-3 space-y-2">
                <p><strong>Phone / WhatsApp:</strong>{" "}
                  <a href="tel:+919653203658" className="text-pink-600 hover:underline">+91-9653203658</a>
                </p>
                <p><strong>Website:</strong>{" "}
                  <Link href="/contact" className="text-pink-600 hover:underline">Contact Page</Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
