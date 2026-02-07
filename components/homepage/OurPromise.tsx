'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Users, Award } from 'lucide-react'

const promises = [
  {
    icon: Heart,
    title: 'Dignity First',
    description: 'Every product designed with your comfort and confidence in mind',
  },
  {
    icon: Shield,
    title: 'Medical-Grade Quality',
    description: 'Certified materials, hospital-approved designs',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Free consultations with certified fitters and specialists',
  },
  {
    icon: Award,
    title: 'Trusted by 5,000+',
    description: 'Women across India rely on Nuvanaah for their recovery',
  },
]

export default function OurPromise() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 via-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Our Promise to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than products—a partnership in your recovery journey
          </p>
        </motion.div>

        {/* Promise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon
            return (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {promise.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {promise.description}
                  </p>

                  {/* Decorative Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-teal-500 to-teal-700 rounded-b-2xl transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
