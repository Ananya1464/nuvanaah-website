'use client'

import { motion } from 'framer-motion'
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 justify-center md:justify-start group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors"
              >
                <badge.icon className="w-6 h-6 text-teal-600" />
              </motion.div>
              <div>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{badge.title}</p>
                <p className="text-xs sm:text-sm text-gray-500">{badge.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
