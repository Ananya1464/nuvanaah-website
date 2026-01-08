'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="bg-sage-50 text-sage-700 px-4 py-2 rounded-full text-sm font-semibold border border-sage-200">
              ✨ Trusted by Thousands
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your <span className="bg-gradient-to-r from-sage-600 to-gold-600 bg-clip-text text-transparent">Crown of Confidence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Premium medical-grade wigs crafted with care. Regain your confidence and embrace your beauty, every single day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition shadow-lg hover:shadow-xl"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-sage-600 text-sage-600 hover:bg-sage-50 px-8 py-4 rounded-full font-semibold text-lg transition"
            >
              Explore Collections
            </motion.button>
          </div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto max-w-2xl aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-sage-100 to-gold-100 shadow-2xl"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-400">Featured Product Image</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
