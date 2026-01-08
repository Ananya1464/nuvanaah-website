'use client'

import { useState } from 'react'
import Image from 'next/image'
import Hero from '@/components/homepage/Hero'
import TrustBadges from '@/components/homepage/TrustBadges'
import Categories from '@/components/homepage/Categories'
import Footer from '@/components/homepage/Footer'
import Newsletter from '@/components/homepage/Newsletter'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-sage-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Nuvanaah Logo"
              width={40}
              height={40}
              className="w-auto h-10"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-sage-700 to-gold-600 bg-clip-text text-transparent">
              Nuvanaah
            </span>
          </div>
          <button className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-full transition">
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Categories */}
      <Categories />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  )
}
