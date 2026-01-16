'use client'

import { Shield, Heart, Truck, Wallet, Phone, Award, Star } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: '45+ Years Legacy',
      description: 'Trusted heritage through K-Hair India since 1976. Decades of caring for our community.',
      accent: 'gold',
    },
    {
      icon: Heart,
      title: 'Doctor Endorsed',
      description: 'Recommended by leading oncologists and partnered with premier cancer hospitals.',
      accent: 'teal',
    },
    {
      icon: Truck,
      title: 'Complimentary Delivery',
      description: 'Free shipping across India with discreet, elegant packaging to respect your privacy.',
      accent: 'gold',
    },
    {
      icon: Wallet,
      title: 'Safe & Easy Payments',
      description: 'Pay via UPI, Card, or Cash on Delivery.',
      accent: 'teal',
    },
    {
      icon: Award,
      title: 'Govt. Recognized',
      description: 'Proud member of Startup India with official government recognition.',
      accent: 'gold',
    },
    {
      icon: Phone,
      title: 'Personal Concierge',
      description: 'Dedicated care specialists to guide you through your selection.',
      accent: 'teal',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="section-label">The Nuvanaah Difference</span>
          <h2 className="section-title">
            Care You Can <span className="text-gradient-gold">Trust</span>
          </h2>
          <p className="section-subtitle">
            Every product is curated with empathy, tested with care, and delivered with compassion.
          </p>
        </div>

        {/* Reasons Grid - Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-cream-50 hover:bg-white rounded-3xl p-8 transition-luxury hover:shadow-luxury border border-transparent hover:border-gray-100"
            >
              {/* Gold Accent Corner */}
              {reason.accent === 'gold' && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold-100/50 to-transparent rounded-tr-3xl" />
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${reason.accent === 'gold'
                  ? 'bg-gradient-to-br from-gold-100 to-gold-50'
                  : 'bg-gradient-to-br from-teal-100 to-teal-50'
                  }`}
              >
                <reason.icon className={`w-8 h-8 ${reason.accent === 'gold' ? 'text-gold-600' : 'text-teal-600'
                  }`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Premium */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 mb-6">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="ml-2 font-medium">Rated 4.9/5 by 2,000+ patients</span>
          </div>
          <p className="text-gray-600 mb-8 text-lg">Have questions about our products?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919819461612"
              className="btn-primary"
            >
              <Phone className="w-5 h-5" />
              Call: +91-9819461612
            </a>
            <a
              href="https://wa.me/919819461612"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-green-600 border-green-500 hover:bg-green-500 hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
