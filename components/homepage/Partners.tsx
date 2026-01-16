'use client'

import { Shield, Award, Building2, Heart } from 'lucide-react'

export default function Partners() {
  const partners = [
    {
      name: 'Tata Memorial Hospital',
      type: 'Healthcare Partner',
      icon: Building2,
    },
    {
      name: 'Indian Cancer Society',
      type: 'NGO Partner',
      icon: Heart,
    },
    {
      name: 'Startup India',
      type: 'Govt. Recognition',
      icon: Award,
    },
    {
      name: 'FSSAI Certified',
      type: 'Quality Standard',
      icon: Shield,
    },
  ]

  return (
    <section id="partners" className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Trusted Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient-brown">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Working together with leading healthcare institutions to bring you the best care.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <partner.icon className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{partner.name}</h3>
              <p className="text-sm text-gray-500">{partner.type}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Proud to be a part of <span className="font-semibold text-gray-900">Startup India</span> program
          </p>
        </div>
      </div>
    </section>
  )
}
