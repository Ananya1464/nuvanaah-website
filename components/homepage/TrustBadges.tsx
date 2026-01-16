'use client'

import { Shield, Heart, Truck, Award } from 'lucide-react'

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: '45+ Years Legacy',
      subtitle: 'Trusted since 1976',
    },
    {
      icon: Heart,
      title: 'Doctor Endorsed',
      subtitle: 'Hospital partnerships',
    },
    {
      icon: Award,
      title: 'Govt. Recognized',
      subtitle: 'Startup India',
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      subtitle: 'COD Available',
    },
  ]

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{badge.title}</p>
                <p className="text-xs sm:text-sm text-gray-500">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
