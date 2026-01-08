'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Heart } from 'lucide-react'

const locations = [
  { city: 'Mumbai', phone: '+91 XXXXX XXXXX' },
  { city: 'Delhi', phone: '+91 XXXXX XXXXX' },
  { city: 'Bangalore', phone: '+91 XXXXX XXXXX' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Nuvanaah</h3>
            <p className="text-gray-400 mb-4">
              Empowering confidence through premium, medical-grade hair solutions for over 45 years.
            </p>
            <div className="flex gap-2">
              <Heart className="w-5 h-5 text-sage-400" />
              <span className="text-sage-400">Care. Quality. Confidence.</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-sage-400 transition">Shop Medical Wigs</a></li>
              <li><a href="#" className="hover:text-sage-400 transition">Premium Collection</a></li>
              <li><a href="#" className="hover:text-sage-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-sage-400 transition">Care Guide</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-sage-400 flex-shrink-0 mt-1" />
                <a href="mailto:info@nuvanaah.com" className="hover:text-sage-400 transition">
                  info@nuvanaah.com
                </a>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-sage-400 flex-shrink-0 mt-1" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-sage-400 transition">
                  +91 XXXXX XXXXX
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Locations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-12 mb-12"
        >
          <h4 className="text-lg font-semibold text-white mb-8">Our Locations</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="flex gap-4">
                <MapPin className="w-5 h-5 text-sage-400 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-white font-semibold mb-1">{location.city}</h5>
                  <a href={`tel:${location.phone}`} className="text-gray-400 hover:text-sage-400 transition">
                    {location.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Nuvanaah. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-sage-400 transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-sage-400 transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-sage-400 transition text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
