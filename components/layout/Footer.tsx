'use client'

import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-tertiary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Footer - 4 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">

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
                className="flex items-center gap-2 text-sm text-neutral-200 transition-colors hover:text-secondary-300"
              >
                <Phone className="w-4 h-4" />
                +91-9819461612
              </a>
              <a
                href="mailto:hello@nuvanaah.com"
                className="flex items-center gap-2 text-sm text-neutral-200 transition-colors hover:text-secondary-300"
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
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-tertiary-600 text-neutral-200 transition-all hover:bg-primary-600 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919819461612"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-tertiary-600 text-neutral-200 transition-all hover:bg-secondary-600 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/category/post-surgery" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Post-Surgery Care
                </Link>
              </li>
              <li>
                <Link href="/products/category/wigs-hair" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Wigs & Hair
                </Link>
              </li>
              <li>
                <Link href="/products/category/lymphedema" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Lymphedema Care
                </Link>
              </li>
              <li>
                <Link href="/products/category/chemo-essentials" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Chemo Essentials
                </Link>
              </li>
              <li>
                <Link href="/products/category/sensitive-skin" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Sensitive Skin
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/consultations" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/shipping" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-neutral-200 transition-colors hover:text-secondary-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-tertiary-600 pt-6">
          <p className="text-center text-xs text-neutral-300">
            © {currentYear} Nuvanaah Care Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
