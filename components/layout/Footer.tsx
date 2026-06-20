'use client'

import { useState } from 'react'
import { MessageCircle, Mail, Phone, Facebook } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
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
                href="tel:+919076041779"
                className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-primary-fixed"
              >
                <Phone className="h-4 w-4" />
                +91-9076041779
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/17h6t4nRvN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#1877F2]" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://wa.me/919076041779" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#25D366]" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="mb-6 font-display text-lg font-semibold tracking-wide text-white">Shop</h4>
            <ul className="space-y-4">
              <li><Link href="/products/category/recovery-body-support" className="text-sm text-white/70 transition-colors hover:text-white">Recovery & Body Support</Link></li>
              <li><Link href="/products/category/hair-confidence" className="text-sm text-white/70 transition-colors hover:text-white">Hair & Confidence</Link></li>
              <li><Link href="/products/category/everyday-wellness" className="text-sm text-white/70 transition-colors hover:text-white">Everyday Wellness</Link></li>
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
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h4 className="mb-6 font-display text-lg font-semibold tracking-wide text-white">Stay Connected</h4>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Join our community for recovery tips, inspiring stories, and exclusive access to new products.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                style={{ border: '1px solid rgba(28,28,24,0.15)' }}
                className="w-full rounded-[4px] sm:rounded-r-none bg-[#faf7f2] px-4 py-[12px] text-sm text-[#1c1c18] placeholder:text-[#7a6f6a] focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto flex items-center justify-center rounded-[4px] sm:rounded-l-none sm:rounded-r-[4px] bg-[#884d53] px-6 py-[12px] text-white transition-all hover:bg-[#884d53]/90 font-medium text-sm"
              >
                Join
              </button>
            </form>
            <p className="mt-2 text-[13px] text-[#7a6f6a]">
              No spam. Unsubscribe any time.
            </p>
            {status === 'success' && (
              <p className="mt-3 text-[13px] text-[#446651] fade-in-up visible">Thank you — we'll be in touch.</p>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-sm text-white/50">
            © {currentYear} Nuvanaah · Made with care in India
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/legal/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/legal/terms" className="transition-colors hover:text-white">Terms of Service</Link>
            <Link href="/legal/shipping" className="transition-colors hover:text-white">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
