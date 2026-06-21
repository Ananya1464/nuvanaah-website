import type { Metadata } from 'next'
import Link from 'next/link'
import { Truck, ArrowLeft, Zap, Globe, MapPin, MessageCircle, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping & Delivery | Nuvanaah',
  description: 'Free shipping across India on all orders. Standard delivery within 7 days. International shipping also available.',
}

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">

      {/* Header */}
      <div className="bg-[#1c1c18] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#ded0bf] hover:text-white mb-8 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-3">
            Shipping &amp; Delivery
          </h1>
          <p className="text-[#ded0bf] text-lg">
            Everything you need to know about receiving your order.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">

        {/* Free Shipping */}
        <div className="bg-white border border-[#ded0bf] rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#884d53]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-[#884d53]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1c1c18] mb-2">Free Shipping Across India</h2>
              <p className="text-[#524344] leading-relaxed">
                All orders ship free to every address across India. No minimum order value. No conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Standard Delivery */}
        <div className="bg-white border border-[#ded0bf] rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#884d53]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-[#884d53]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1c1c18] mb-2">Standard Delivery</h2>
              <p className="text-[#524344] leading-relaxed mb-3">
                Standard delivery across India takes up to <strong className="text-[#1c1c18]">7 days</strong> from the date of dispatch.
              </p>
              <p className="text-sm text-[#7a6f6a]">
                Delivery times are estimated and may vary by location. You will receive a tracking link via email and SMS once your order is dispatched.
              </p>
            </div>
          </div>
        </div>

        {/* Urgent Delivery */}
        <div className="bg-white border border-[#ded0bf] rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#884d53]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-[#884d53]" />
            </div>
            <div className="w-full">
              <h2 className="text-xl font-semibold text-[#1c1c18] mb-2">Need Your Order Urgently?</h2>
              <p className="text-[#524344] leading-relaxed mb-5">
                Contact us before placing your order and we will do our best to arrange expedited delivery based on your location and availability.
              </p>
              <a
                href="https://wa.me/919076041779"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1c1c18] text-white rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* International Shipping */}
        <div className="bg-white border border-[#ded0bf] rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#884d53]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-[#884d53]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#1c1c18] mb-2">International Orders</h2>
              <p className="text-[#524344] leading-relaxed">
                We also ship internationally. Additional shipping charges may apply depending on destination. Please contact us before placing an international order so we can confirm availability and charges.
              </p>
            </div>
          </div>
        </div>

        {/* Order Tracking */}
        <div className="bg-white border border-[#ded0bf] rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-[#1c1c18] mb-3">Order Tracking</h2>
          <p className="text-[#524344] leading-relaxed">
            Once your order is dispatched you will receive a tracking number and link via email and SMS. You can also reach out to us at any time for a status update on your order.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-white border border-[#ded0bf] rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-[#1c1c18] mb-3">Questions about your delivery?</h2>
          <p className="text-[#524344] mb-6">
            We are available Monday to Saturday, 10 AM – 6 PM IST. Reach out to us on WhatsApp, by phone, or by email.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/919076041779"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1c1c18] text-white rounded-full font-medium hover:bg-[#333] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="tel:+919076041779"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#ded0bf] text-[#524344] rounded-full font-medium hover:border-[#884d53]/40 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a
              href="mailto:hello@nuvanaah.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#ded0bf] text-[#524344] rounded-full font-medium hover:border-[#884d53]/40 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
