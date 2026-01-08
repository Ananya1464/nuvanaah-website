'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 1,
    title: 'Medical Wigs',
    description: 'Specially designed for post-treatment healing and daily confidence',
    color: 'from-sage-500 to-sage-600',
    icon: '🏥'
  },
  {
    id: 2,
    title: 'Premium Wigs',
    description: 'Luxury collections for everyday elegance and special occasions',
    color: 'from-gold-500 to-gold-600',
    icon: '✨'
  },
  {
    id: 3,
    title: 'Accessories',
    description: 'Wig caps, stands, care products, and styling essentials',
    color: 'from-sage-400 to-sage-500',
    icon: '🎀'
  }
]

export default function Categories() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Collections
          </h2>
          <p className="text-xl text-gray-600">Find the perfect solution for your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              {/* Card Background */}
              <div className={`bg-gradient-to-br ${category.color} rounded-3xl p-1 h-full`}>
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-6xl mb-6">{category.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 flex-grow mb-6">
                    {category.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sage-600 font-semibold group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
