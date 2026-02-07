'use client'

import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Footer - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Column 1: Brand */}
          <div>
            <Logo variant="white" className="mb-3" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Care that supports you through treatment.
            </p>

            {/* Contact Info */}
            <div className="mt-4 space-y-2">
              <a
                href="tel:+919819461612"
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91-9819461612
              </a>
              <a
                href="mailto:hello@nuvanaah.com"
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@nuvanaah.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 mt-4">
              <a
                href="https://instagram.com/nuvanaah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-teal-600 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919819461612"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/shipping" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-xs">
            © {currentYear} Nuvanaah Care Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
