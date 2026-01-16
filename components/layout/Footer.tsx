'use client'

import { Instagram, MessageCircle, Mail, Phone, Heart } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900">
      {/* Main Footer Content - Single unified section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo variant="white" className="mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Supporting your journey with dignity, care, and compassion. Every product chosen with empathy.
            </p>
            <div className="flex items-center gap-2 text-teal-400 text-sm">
              <Heart className="w-4 h-4" />
              <span className="italic">"You are not alone in this journey."</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/nuvanaah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919819461612"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links - Shop */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Post-Surgery Essentials
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Chemo Comfort Wear
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Wig Care & Accessories
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Compression & Recovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/consultations" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:+919819461612"
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>+91-9819461612</span>
              </a>
              <a
                href="https://wa.me/919819461612"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="mailto:hello@nuvanaah.com"
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>hello@nuvanaah.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/legal/privacy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/legal/terms" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/legal/shipping" className="hover:text-teal-400 transition-colors">
              Shipping & Returns
            </Link>
          </div>
          <p className="text-center">
            © {currentYear} Nuvanaah. Made with <Heart className="w-3 h-3 inline text-red-400" /> in India
          </p>
        </div>
      </div>
    </footer>
  )
}
