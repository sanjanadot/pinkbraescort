import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Pink Bra Escorts Mumbai",
  description: "Terms of Service for Pink Bra Escorts Mumbai. Please read these terms carefully before using our services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-pink-100 text-lg">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Pink Bra Escorts website and services, you agree to be
                bound by these Terms of Service. If you do not agree to these terms, you must not
                use our website or services. We reserve the right to update these terms at any time
                without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Age Requirement</h2>
              <p>
                You must be at least <strong>18 years of age</strong> to use our services. By using
                this website, you confirm that you are 18 or older and legally permitted to access
                adult content and services in your jurisdiction. If you are under 18, you must
                immediately leave this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Nature of Services</h2>
              <p>
                Pink Bra Escorts provides companionship and social escort services. All services
                are provided by consenting adults. Our services are offered lawfully and in
                compliance with applicable regulations. We do not facilitate or condone any illegal
                activities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Provide accurate and truthful information when contacting us.</li>
                <li>Treat all escorts and staff with respect and dignity.</li>
                <li>Not engage in any abusive, threatening, or illegal behaviour.</li>
                <li>Not record, photograph, or share any private interaction without explicit consent.</li>
                <li>Comply with all agreed-upon terms discussed prior to any booking.</li>
                <li>Not attempt to facilitate any illegal activity through our services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Booking and Cancellation</h2>
              <p>
                Bookings are confirmed only after direct communication with our team via phone
                or WhatsApp. We reserve the right to decline any booking at our sole discretion
                without providing a reason.
              </p>
              <p className="mt-3">
                Cancellations must be made with reasonable advance notice. Repeated last-minute
                cancellations may result in refusal of future services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Confidentiality</h2>
              <p>
                We treat all client information with the strictest confidence. Similarly, clients
                are expected to maintain the privacy and confidentiality of all escorts and staff.
                Sharing personal details of escorts on social media or any public platform is
                strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, graphics, and logos, is the
                property of Pink Bra Escorts and is protected by applicable copyright laws.
                Reproduction, distribution, or use of any content without written permission is
                strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
              <p>
                Pink Bra Escorts shall not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of our services or website. Our total
                liability in any matter arising out of or related to these terms shall not exceed
                the amount paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Disclaimer</h2>
              <p>
                Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
                We make no warranties, expressed or implied, regarding the accuracy, reliability,
                or availability of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the
                laws of India. Any disputes arising under these terms shall be subject to the
                exclusive jurisdiction of courts in Mumbai, Maharashtra.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Us</h2>
              <p>
                For any questions or concerns regarding these Terms of Service, please contact us:
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
