import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Nuvanaah Cancer Care Products India',
  description: 'Terms and conditions for using Nuvanaah website and purchasing cancer care products. Read our policies and guidelines.',
}

export default function TermsPage() {
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
              <FileText className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-4xl font-light text-gray-900">
                Terms & <span className="font-semibold text-teal-600">Conditions</span>
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
              Welcome to Nuvanaah. By accessing or using our website and services, you agree to these Terms and Conditions. Please read them carefully.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. About Nuvanaah</h2>
            <p className="text-gray-700 mb-4">
              Nuvanaah is operated by <strong>K-Hair India Pvt. Ltd.</strong>, a company with 45+ years of experience in providing quality products for individuals undergoing cancer treatment and recovery.
            </p>
            <p className="text-gray-700">
              Our products are designed to provide comfort, dignity, and support during sensitive health journeys.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Website</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility</h3>
            <p className="text-gray-700 mb-4">You must be at least 18 years old to make purchases on our website.</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Responsibility</h3>
            <p className="text-gray-700 mb-4">If you create an account:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>You are responsible for maintaining password confidentiality</li>
              <li>You agree to provide accurate and current information</li>
              <li>You are responsible for all activities under your account</li>
              <li>You must notify us immediately of unauthorized access</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Products & Pricing</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>We strive to display accurate product descriptions and images</li>
              <li>Actual products may vary slightly from images</li>
              <li>All products are designed as comfort and support accessories</li>
              <li>Products are not medical devices unless specifically stated</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>All prices are in Indian Rupees (INR)</li>
              <li>Prices are subject to change without notice</li>
              <li>The price at the time of order placement applies</li>
              <li>We reserve the right to correct pricing errors</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Orders & Payment</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Acceptance</h3>
            <p className="text-gray-700 mb-4">
              Receipt of an order confirmation does not constitute acceptance. We reserve the right to refuse or cancel orders for reasons including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Product unavailability</li>
              <li>Pricing or product information errors</li>
              <li>Suspected fraudulent transactions</li>
              <li>Delivery limitations to certain areas</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Methods</h3>
            <p className="text-gray-700 mb-4">We accept:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Credit/Debit Cards</li>
              <li>UPI Payments</li>
              <li>Net Banking</li>
              <li>Cash on Delivery (COD) - for eligible orders</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Shipping & Delivery</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Free Shipping:</strong> Available on all orders across India</li>
              <li><strong>Discreet Packaging:</strong> All orders shipped in unmarked packaging</li>
              <li><strong>Delivery Time:</strong> 3-7 business days (may vary by location)</li>
              <li><strong>Tracking:</strong> Tracking information provided via email/SMS</li>
              <li><strong>Delivery Delays:</strong> We are not liable for delays caused by courier services or force majeure</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Returns & Exchanges</h2>
            <p className="text-gray-700 mb-4">Please refer to our <Link href="/legal/returns" className="text-teal-600 hover:text-teal-700 font-semibold">Returns & Exchange Policy</Link> for detailed information.</p>

            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Due to hygiene reasons, some products may not be eligible for return after opening</li>
                <li>Custom-sized or personalized products are non-returnable</li>
                <li>All returns must be in original, unused condition</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Medical Disclaimer</h2>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
              <p className="text-gray-900 font-semibold mb-3">Important Medical Information</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Our products are comfort and support accessories, not medical treatments</li>
                <li>Products do not diagnose, treat, cure, or prevent any disease</li>
                <li>Always consult your healthcare provider before use</li>
                <li>Follow your doctor's recommendations for post-surgery care</li>
                <li>We are not liable for any health outcomes from product use</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on this website, including text, images, logos, designs, and product descriptions, is owned by K-Hair India Pvt. Ltd. or its licensors.
            </p>
            <p className="text-gray-700">
              You may not reproduce, distribute, or use any content without written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our liability is limited to the amount paid for the product</li>
              <li>We do not guarantee uninterrupted or error-free website operation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Privacy</h2>
            <p className="text-gray-700">
              Your privacy is important to us. Please review our <Link href="/legal/privacy" className="text-teal-600 hover:text-teal-700 font-semibold">Privacy Policy</Link> to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the website constitutes acceptance of modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <div className="bg-cream-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">For questions about these Terms:</p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:support@nuvanaah.com" className="text-teal-600 hover:text-teal-700">support@nuvanaah.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919819461612" className="text-teal-600 hover:text-teal-700">+91-9819461612</a> | <a href="tel:+919967711116" className="text-teal-600 hover:text-teal-700">+91-9967711116</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/919819461612" className="text-teal-600 hover:text-teal-700" target="_blank" rel="noopener noreferrer">+91-9819461612</a></p>
                <p className="mt-4"><strong>Business Hours:</strong> Monday - Saturday, 10:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
