'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function FloatingHelpButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Main Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-teal-500 to-teal-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-shadow"
        aria-label={isOpen ? 'Close help menu' : 'Open help menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        {/* Pulse Animation */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-teal-400 opacity-75 animate-ping" />
        )}
      </motion.button>

      {/* Help Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              How can we help you?
            </h3>

            <div className="space-y-3">
              {/* Book Consultation */}
              <Link
                href="/consultations"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-teal-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Book a Consultation</p>
                  <p className="text-sm text-gray-600">Free & confidential</p>
                </div>
              </Link>

              {/* Call */}
              <a
                href="tel:+919819461612"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-teal-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us Now</p>
                  <p className="text-sm text-gray-600">+91-9819461612</p>
                </div>
              </a>

              {/* Email */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-teal-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Send a Message</p>
                  <p className="text-sm text-gray-600">We'll respond within 24hrs</p>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
