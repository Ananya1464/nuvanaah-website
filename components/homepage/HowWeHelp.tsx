'use client'

import { motion } from 'framer-motion'
import { Search, Phone, ShoppingBag, Heart } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Explore Products',
    description: 'Browse our curated collection designed specifically for your recovery needs',
  },
  {
    icon: Phone,
    number: '02',
    title: 'Free Consultation',
    description: 'Book a call with our certified specialists—no obligation, just guidance',
  },
  {
    icon: ShoppingBag,
    number: '03',
    title: 'Comfortable Shopping',
    description: 'Order with confidence. Discreet packaging, easy returns, secure checkout',
  },
  {
    icon: Heart,
    number: '04',
    title: 'Ongoing Support',
    description: 'Our team is always here for adjustments, questions, and encouragement',
  },
]

export default function HowWeHelp() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute left-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-teal-200 via-sage-300 to-cream-200 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            How We Support You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to delivery—and beyond—we're with you every step
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                  <span className="text-6xl font-bold text-teal-100">
                    {step.number}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </motion.div>
                  {/* Pulse Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-teal-300 animate-ping opacity-20" />
                </div>

                {/* Spacer for even layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
