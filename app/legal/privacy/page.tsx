import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nuvanaah Cancer Care Products India',
  description: 'Privacy policy for Nuvanaah. Learn how we collect, use, and protect your personal information when you shop for cancer care products.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-teal-50 to-white pt-24 pb-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-teal-100 rounded-full p-4">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-4xl font-light text-gray-900">
                Privacy <span className="font-semibold text-teal-600">Policy</span>
              </h1>
              <p className="text-gray-600 mt-2">Last Updated: January 10, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-cream-50 border-l-4 border-teal-600 rounded-r-lg p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              At Nuvanaah, we understand the sensitive nature of your health journey. We are committed to protecting your privacy and handling your personal information with the utmost care and respect.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">When you place an order or contact us, we may collect:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Name and contact information (phone, email, address)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment partners)</li>
              <li>Order history and product preferences</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Information</h3>
            <p className="text-gray-700 mb-4">
              If you choose to share information during consultations (such as surgery type, recovery stage, or sizing needs), this information is:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Used solely to recommend appropriate products</li>
              <li>Kept strictly confidential</li>
              <li>Never shared with third parties</li>
              <li>Stored securely with restricted access</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatic Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Browser type and device information</li>
              <li>IP address and location data</li>
              <li>Pages visited and time spent on site</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Order Processing:</strong> To fulfill your orders and communicate about delivery</li>
              <li><strong>Customer Support:</strong> To respond to inquiries and provide assistance</li>
              <li><strong>Product Recommendations:</strong> To suggest appropriate products for your needs</li>
              <li><strong>Communication:</strong> To send order updates, product information (with your consent)</li>
              <li><strong>Service Improvement:</strong> To enhance our website and customer experience</li>
              <li><strong>Legal Compliance:</strong> To meet regulatory and legal requirements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>

            <div className="bg-teal-50 rounded-lg p-6 mb-4">
              <p className="text-gray-900 font-semibold mb-2">We DO NOT sell your personal information.</p>
              <p className="text-gray-700">Your data is never sold to third parties for marketing purposes.</p>
            </div>

            <p className="text-gray-700 mb-4">We may share information only with:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Shipping partners, payment processors (with limited data)</li>
              <li><strong>Legal Requirements:</strong> When required by law or legal process</li>
              <li><strong>Business Transfers:</strong> In case of merger or acquisition (with privacy protections)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">We implement industry-standard security measures:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers with restricted access</li>
              <li>Regular security audits and updates</li>
              <li>Encrypted storage of sensitive information</li>
              <li>Staff training on data protection</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Discreet Packaging</h2>
            <p className="text-gray-700">
              All shipments are sent in unmarked, plain packaging with no indication of contents. Your shipping label will show "Nuvanaah" or "K-Hair India" as the sender, with no product details visible.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications anytime</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, contact us at <a href="mailto:support@nuvanaah.com" className="text-teal-600 hover:text-teal-700 font-semibold">support@nuvanaah.com</a> or call <a href="tel:+919819461612" className="text-teal-600 hover:text-teal-700 font-semibold">+91-9819461612</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-700 mb-4">We use cookies to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Remember your preferences and shopping cart</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Improve website functionality</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party sites. We are not responsible for the privacy practices of these sites. Please review their privacy policies before providing personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to individuals under 18. We do not knowingly collect information from minors.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Significant changes will be communicated via email.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
            <div className="bg-cream-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">If you have questions about this privacy policy or your data:</p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:support@nuvanaah.com" className="text-teal-600 hover:text-teal-700">support@nuvanaah.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919819461612" className="text-teal-600 hover:text-teal-700">+91-9819461612</a> | <a href="tel:+919967711116" className="text-teal-600 hover:text-teal-700">+91-9967711116</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/919819461612" className="text-teal-600 hover:text-teal-700" target="_blank" rel="noopener noreferrer">+91-9819461612</a></p>
                <p className="mt-4"><strong>Address:</strong><br />
                  Nuvanaah (K-Hair India Pvt. Ltd.)<br />
                  Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
