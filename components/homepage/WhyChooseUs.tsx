'use client'

import { Truck, Shield, HeartHandshake, Wallet } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free delivery across India on all orders.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Medically tested products from trusted manufacturers.',
  },
  {
    icon: HeartHandshake,
    title: 'Expert Support',
    description: 'Trained staff to help you find the right products.',
  },
  {
    icon: Wallet,
    title: 'Safe & Easy Payments',
    description: 'Pay via UPI, Card, or Cash on Delivery.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Trusted Care, Delivered</h2>
          <p className="section-subtitle">
            We understand the journey you're on. That's why we focus on quality, comfort, and compassion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-cream-100 rounded-2xl p-6 text-center transition-all hover:shadow-md"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-teal-100 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
