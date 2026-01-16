import type { Metadata } from 'next'
import Link from 'next/link'
import { Truck, ArrowLeft, Package, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | Nuvanaah Cancer Care Products',
  description: 'Shipping and delivery information for Nuvanaah products. Free shipping across India, discreet packaging, 3-7 day delivery timeline.',
}

export default function ShippingPage() {
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
              <Truck className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h1 className="text-4xl font-light text-gray-900">
                Shipping & <span className="font-semibold text-teal-600">Delivery</span>
              </h1>
              <p className="text-gray-600 mt-2">Last Updated: January 10, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-teal-600 rounded-r-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">✓ Free Shipping Across India</h3>
            <p className="text-gray-700">
              We provide <strong>free shipping on all orders</strong> to every corner of India. No minimum order value required.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Timeline</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-teal-50 rounded-lg p-6">
                <MapPin className="w-8 h-8 text-teal-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Metro Cities</h3>
                <p className="text-gray-700 text-sm mb-2">Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata</p>
                <p className="text-2xl font-bold text-teal-600">3-5 Days</p>
              </div>

              <div className="bg-cream-50 rounded-lg p-6">
                <MapPin className="w-8 h-8 text-teal-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Other Cities</h3>
                <p className="text-gray-700 text-sm mb-2">Tier 2 & 3 cities, towns, rural areas</p>
                <p className="text-2xl font-bold text-teal-600">5-7 Days</p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Note:</strong> Delivery times are estimated and may vary due to location, weather, local holidays, or courier delays. Remote areas may take additional 1-2 days.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Discreet Packaging</h2>
            <div className="bg-purple-50 rounded-lg p-6 mb-4">
              <Package className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Privacy Matters</h3>
              <p className="text-gray-700 mb-4">
                We understand the sensitive nature of our products. All orders are shipped in <strong>plain, unmarked packaging</strong> with no indication of contents.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>No product names or descriptions on external packaging</li>
                <li>Sender shown as "Nuvanaah" or "K-Hair India"</li>
                <li>No medical or health-related labels</li>
                <li>Secure, tamper-proof packaging</li>
                <li>Completely discreet delivery</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Processing</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li><strong>Order Confirmation:</strong> You'll receive email/SMS confirmation immediately after placing order</li>
              <li><strong>Processing Time:</strong> Orders processed within 1-2 business days</li>
              <li><strong>Quality Check:</strong> Each product carefully inspected before packing</li>
              <li><strong>Dispatch:</strong> Order dispatched with tracking information</li>
              <li><strong>In Transit:</strong> Track your order via SMS/email updates</li>
              <li><strong>Delivery:</strong> Courier delivers to your doorstep</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping Partners</h2>
            <p className="text-gray-700 mb-4">We work with trusted courier partners:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Shiprocket (Primary partner)</li>
              <li>Blue Dart</li>
              <li>DTDC</li>
              <li>Delhivery</li>
              <li>India Post (for remote areas)</li>
            </ul>
            <p className="text-gray-600 text-sm mt-4 italic">
              Courier partner assigned based on your location for fastest delivery
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Tracking</h2>
            <div className="bg-teal-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Track Your Order</h3>
              <p className="text-gray-700 mb-4">Once your order is dispatched, you'll receive:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Tracking Number:</strong> Unique AWB/tracking number</li>
                <li><strong>Tracking Link:</strong> Direct link to track shipment</li>
                <li><strong>SMS Updates:</strong> Delivery status notifications</li>
                <li><strong>Email Updates:</strong> Detailed shipping information</li>
              </ul>
              <p className="text-gray-700">
                You can also track your order by logging into your account or contacting our support team.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cash on Delivery (COD)</h2>
            <p className="text-gray-700 mb-4">
              <strong>COD Available:</strong> Yes, we accept Cash on Delivery for most locations.
            </p>
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">COD Details</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Payment:</strong> Pay when order is delivered to you</li>
                <li><strong>Payment Methods:</strong> Cash or card to delivery person</li>
                <li><strong>COD Charges:</strong> No extra charges for COD</li>
                <li><strong>Inspection:</strong> You can inspect outer packaging before payment</li>
                <li><strong>Availability:</strong> Check COD availability at checkout</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Attempt & Re-delivery</h2>
            <p className="text-gray-700 mb-4">If delivery fails on first attempt:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Courier will attempt delivery 2-3 times</li>
              <li>You'll receive call/SMS before each attempt</li>
              <li>Provide alternative delivery instructions if needed</li>
              <li>Contact courier directly to schedule re-delivery</li>
              <li>Package held at local courier office for pickup</li>
            </ol>
            <p className="text-amber-600 font-semibold mt-4">
              ⚠️ If not delivered after 3 attempts, order may be returned to us
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What to Do on Delivery</h2>
            <div className="bg-cream-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Delivery Checklist</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Check Packaging:</strong> Inspect outer packaging for damage</li>
                <li><strong>Verify Order:</strong> Confirm order number on package matches yours</li>
                <li><strong>Immediate Issues:</strong> If package is damaged, take photos before opening</li>
                <li><strong>Open Carefully:</strong> Open package and check contents</li>
                <li><strong>Report Damage:</strong> Contact us within 48 hours if product is damaged</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shipping Restrictions</h2>
            <p className="text-gray-700 mb-4">We currently ship to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>✓ All Indian states and union territories</li>
              <li>✓ PO Box addresses (with phone number)</li>
              <li>✓ Residential and commercial addresses</li>
            </ul>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">We Cannot Ship To:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>International addresses (India only)</li>
                <li>Addresses without proper pin codes</li>
                <li>Unverified or incomplete addresses</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delayed or Lost Shipments</h2>
            <p className="text-gray-700 mb-4">If your order is delayed or lost:</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Check tracking information for latest status</li>
              <li>Allow extra 2-3 days beyond estimated delivery</li>
              <li>Contact courier partner directly with tracking number</li>
              <li>If unresolved, contact our support team</li>
              <li>We'll investigate and provide solution within 24-48 hours</li>
            </ol>

            <div className="bg-teal-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700 text-sm">
                <strong>Our Commitment:</strong> If shipment is confirmed lost, we'll reship or provide full refund immediately.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Holidays & Non-Working Days</h2>
            <p className="text-gray-700 mb-4">Please note:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>No processing or dispatch on Sundays and national holidays</li>
              <li>Orders placed on Sundays processed next working day</li>
              <li>Delivery timelines extended during festival seasons</li>
              <li>We'll notify you of any expected delays</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Shipping</h2>
            <p className="text-gray-700 mb-4">
              Currently, we ship <strong>only within India</strong>. International shipping is not available at this time.
            </p>
            <p className="text-gray-700">
              If you're outside India and need our products, please contact us at <a href="mailto:support@nuvanaah.com" className="text-teal-600 hover:text-teal-700 font-semibold">support@nuvanaah.com</a> for assistance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us for Shipping Queries</h2>
            <div className="bg-cream-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">Have questions about your shipment?</p>
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
