'use client'

import { useState } from 'react'
import { Instagram, MessageCircle, Mail, Phone, Facebook, Youtube, ArrowRight } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Main Footer - 4 Column Layout */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Logo variant="white" />
            <p className="text-sm leading-relaxed text-white/70">
              Care that supports you through treatment. We are here to help you feel like yourself again.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+919819461612"
                className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-primary-fixed"
              >
                <Phone className="h-4 w-4" />
                +91-9819461612
              </a>
              <a
                href="mailto:hello@nuvanaah.com"
                className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-primary-fixed"
              >
                <Mail className="h-4 w-4" />
                hello@nuvanaah.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="https://instagram.com/nuvanaah" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-primary-600" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/919819461612" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#25D366]" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#1877F2]" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#FF0000]" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="mb-6 font-display text-lg font-semibold tracking-wide text-white">Shop</h4>
            <ul className="space-y-4">
              <li><Link href="/products/category/post-surgery" className="text-sm text-white/70 transition-colors hover:text-white">Post-Surgery Care</Link></li>
              <li><Link href="/products/category/wigs-hair" className="text-sm text-white/70 transition-colors hover:text-white">Wigs & Hair</Link></li>
              <li><Link href="/products/category/lymphedema" className="text-sm text-white/70 transition-colors hover:text-white">Lymphedema Care</Link></li>
              <li><Link href="/products/category/chemo-essentials" className="text-sm text-white/70 transition-colors hover:text-white">Chemo Essentials</Link></li>
              <li><Link href="/products/category/sensitive-skin" className="text-sm text-white/70 transition-colors hover:text-white">Sensitive Skin</Link></li>
            </ul>
          </div>

          {/* Column 3: Support & Company */}
          <div>
            <h4 className="mb-6 font-display text-lg font-semibold tracking-wide text-white">Support</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-white/70 transition-colors hover:text-white">Our Story</Link></li>
              <li><Link href="/blog" className="text-sm text-white/70 transition-colors hover:text-white">Journal</Link></li>
              <li><Link href="/faq" className="text-sm text-white/70 transition-colors hover:text-white">FAQs</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 transition-colors hover:text-white">Contact Us</Link></li>
              <li><Link href="/consultations" className="text-sm text-white/70 transition-colors hover:text-white">Free Consultation</Link></li>
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h4 className="mb-6 font-display text-lg font-semibold tracking-wide text-white">Stay Connected</h4>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Join our community for recovery tips, inspiring stories, and exclusive access to new products.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/20 bg-white/5 py-3 pl-5 pr-12 text-sm text-white placeholder:text-white/40 focus:border-primary-fixed focus:outline-none focus:ring-1 focus:ring-primary-fixed"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-dark transition-all hover:bg-primary-fixed"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {status === 'success' && (
              <p className="mt-3 text-sm text-primary-fixed fade-in-up visible">Thank you for subscribing!</p>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-sm text-white/50">
            © {currentYear} Nuvanaah · Made with care in India 🇮🇳
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/legal/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/legal/terms" className="transition-colors hover:text-white">Terms of Service</Link>
            <Link href="/legal/shipping" className="transition-colors hover:text-white">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
