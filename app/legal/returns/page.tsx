import type { Metadata } from 'next'
import Link from 'next/link'
import { RefreshCw, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Returns & Exchange Policy | Nuvanaah Cancer Care Products',
  description: 'Returns and exchange policy for Nuvanaah products. Learn about our 7-day return policy, conditions, and process for cancer care products.',
}

export default function ReturnsPage() {
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
              <RefreshCw className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-4xl font-light text-gray-900">
                Returns & <span className="font-semibold text-teal-600">Exchange Policy</span>
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
              We want you to be completely satisfied with your purchase. If you're not happy with your product, we're here to help with returns and exchanges.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7-Day Return Policy</h2>
            <p className="text-gray-700 mb-4">
              You have <strong>7 days</strong> from the date of delivery to return or exchange eligible products.
            </p>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">✓ Eligible for Return/Exchange</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Product received is defective or damaged</li>
                <li>Wrong product delivered</li>
                <li>Size or fit issues (for clothing items)</li>
                <li>Product not as described</li>
                <li>Manufacturing defects</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Conditions</h2>
            <p className="text-gray-700 mb-4">To be eligible for return, products must meet these conditions:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Unused & Unopened:</strong> Product must be in original, unused condition</li>
              <li><strong>Original Packaging:</strong> Must include all original packaging, tags, and accessories</li>
              <li><strong>Hygiene Sealed:</strong> Hygiene seals (if any) must be intact</li>
              <li><strong>7-Day Window:</strong> Return request must be made within 7 days of delivery</li>
              <li><strong>Proof of Purchase:</strong> Original invoice or order confirmation required</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Non-Returnable Items</h2>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-6">
              <p className="text-gray-900 font-semibold mb-3">The following items cannot be returned:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Opened/Used Products:</strong> Products with broken hygiene seals or showing signs of use</li>
                <li><strong>Custom/Personalized Items:</strong> Products made to custom specifications or measurements</li>
                <li><strong>Intimate Apparel:</strong> Undergarments, bras (if hygiene seal is broken)</li>
                <li><strong>Wigs (Styled):</strong> Wigs that have been cut, styled, or worn</li>
                <li><strong>Final Sale Items:</strong> Products marked as "Final Sale" or "Non-Returnable"</li>
                <li><strong>Gift Cards:</strong> Gift cards are non-refundable</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Initiate a Return</h2>

            <div className="bg-teal-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Process</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-3">
                <li><strong>Contact Us Within 7 Days</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                    <li>Email: <a href="mailto:support@nuvanaah.com" className="text-teal-600 hover:text-teal-700">support@nuvanaah.com</a></li>
                    <li>Phone: <a href="tel:+919819461612" className="text-teal-600 hover:text-teal-700">+91-9819461612</a></li>
                    <li>WhatsApp: <a href="https://wa.me/919819461612" className="text-teal-600 hover:text-teal-700" target="_blank" rel="noopener noreferrer">+91-9819461612</a></li>
                  </ul>
                </li>
                <li><strong>Provide Order Details</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                    <li>Order number</li>
                    <li>Product name and SKU</li>
                    <li>Reason for return</li>
                    <li>Photos (if product is defective/damaged)</li>
                  </ul>
                </li>
                <li><strong>Return Authorization</strong>
                  <p className="ml-6 mt-2 text-sm">We'll review your request and provide return authorization if eligible</p>
                </li>
                <li><strong>Ship the Product</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
                    <li>Pack securely in original packaging</li>
                    <li>Include invoice copy</li>
                    <li>Use courier service we recommend</li>
                  </ul>
                </li>
                <li><strong>Inspection & Processing</strong>
                  <p className="ml-6 mt-2 text-sm">Once received, we'll inspect and process within 3-5 business days</p>
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exchange Policy</h2>
            <p className="text-gray-700 mb-4">We offer exchanges for:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Size/Fit Issues:</strong> Exchange for different size (subject to availability)</li>
              <li><strong>Defective Products:</strong> Exchange for same product or refund</li>
              <li><strong>Wrong Item:</strong> Exchange for correct item at no extra cost</li>
            </ul>

            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Exchange Process</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li>Contact us with exchange request</li>
                <li>Return original product (same process as returns)</li>
                <li>We'll ship replacement once original is received and inspected</li>
                <li>No additional shipping charges for defective/wrong items</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Timeline</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><strong>Inspection:</strong> 2-3 business days after receiving returned product</li>
              <li><strong>Approval:</strong> Email notification once refund is approved</li>
              <li><strong>Processing:</strong> Refund initiated within 3-5 business days</li>
              <li><strong>Credit:</strong> 5-10 business days for amount to reflect (depends on bank)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Method</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Online Payments:</strong> Refunded to original payment method</li>
              <li><strong>Cash on Delivery (COD):</strong> Bank transfer (provide account details)</li>
              <li><strong>Partial Refunds:</strong> May apply if item shows signs of use or damage</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Shipping</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">✓ Free Return Shipping</h3>
                <p className="text-gray-700 text-sm mb-2">We cover return shipping for:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Defective products</li>
                  <li>Wrong items delivered</li>
                  <li>Damaged products</li>
                  <li>Manufacturing defects</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Pays Shipping</h3>
                <p className="text-gray-700 text-sm mb-2">You cover return shipping for:</p>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Change of mind</li>
                  <li>Size/fit preference</li>
                  <li>No longer needed</li>
                  <li>Non-defective returns</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Damaged or Defective Products</h2>
            <p className="text-gray-700 mb-4">If you receive a damaged or defective product:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Contact us immediately (within 48 hours of delivery)</li>
              <li>Provide photos of damage/defect and packaging</li>
              <li>Do not return without authorization</li>
              <li>We'll arrange pickup or provide prepaid return label</li>
              <li>Full refund or replacement provided</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Late or Missing Refunds</h2>
            <p className="text-gray-700 mb-4">If you haven't received your refund:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Check your bank account again (allow 10 business days)</li>
              <li>Contact your credit card company (may take time to post)</li>
              <li>Contact your bank (processing time before posted)</li>
              <li>If still not received, contact us at <a href="mailto:support@nuvanaah.com" className="text-teal-600 hover:text-teal-700 font-semibold">support@nuvanaah.com</a></li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Important Notes</h2>
            <div className="bg-cream-50 rounded-lg p-6">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>All returns are subject to inspection and approval</li>
                <li>We reserve the right to refuse returns not meeting criteria</li>
                <li>Return authorization must be obtained before shipping</li>
                <li>Products returned without authorization may not be processed</li>
                <li>Original shipping charges are non-refundable</li>
                <li>Return shipping charges are non-refundable (unless defective/wrong item)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us for Returns</h2>
            <div className="bg-teal-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">Our customer care team is here to help:</p>
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
