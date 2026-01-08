'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const badges = [
  {
    icon: '100%',
    title: '100% Real Hair',
    description: 'Genuine human hair for natural look and feel'
  },
  {
    icon: '45+',
    title: '45+ Years Experience',
    description: 'Decades of expertise in hair solutions'
  },
  {
    icon: '✓',
    title: 'Medical Grade',
    description: 'Certified for sensitive scalp care'
  },
  {
    icon: '💬',
    title: 'Free Consultation',
    description: 'Expert guidance tailored to your needs'
  }
]

export default function TrustBadges() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-sage-600">Nuvanaah</span>?
          </h2>
          <p className="text-xl text-gray-600">Trusted by thousands for quality, care, and confidence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-sage-50 to-cream-100 p-8 rounded-2xl border border-sage-200 hover:border-sage-400 transition"
            >
              <div className="text-5xl font-bold text-sage-600 mb-4">{badge.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
