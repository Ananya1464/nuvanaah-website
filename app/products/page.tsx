'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Shield, Truck, Phone, ArrowRight } from 'lucide-react'
import { products } from '@/lib/products-data'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter options mapping to Shop by Need strategy
  const filterOptions = [
    { id: 'all', label: 'All Products' },
    { id: 'after-surgery', label: 'After Surgery' },
    { id: 'hair-loss', label: 'Hair & Confidence' },
    { id: 'daily-comfort', label: 'Everyday Wellness' },
    { id: 'gift', label: 'Gift Ideas' }
  ]

  // Filter products based on selected pill
  const filteredProducts = products.filter(p => {
    if (selectedCategory === 'all') return true
    if (selectedCategory === 'after-surgery') return p.shopByNeed?.includes('after-surgery')
    if (selectedCategory === 'hair-loss') return p.shopByNeed?.includes('hair-loss')
    if (selectedCategory === 'daily-comfort') return p.shopByNeed?.includes('daily-comfort')
    if (selectedCategory === 'gift') return p.isGiftPopular === true || p.tags?.includes('gift')
    return true
  })

  return (
    <div className="min-h-screen bg-[#faf7f2] pb-20 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2c1f1a]/5 via-[#faf7f2]/20 to-[#faf7f2] pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[#884d53] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
              Care Designed with Dignity
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c18] mb-4">
              Shop all products
            </h1>
            <p className="text-sm sm:text-base text-[#524344] max-w-xl mx-auto leading-relaxed">
              Thoughtfully crafted for comfort, confidence, and healing.
            </p>
          </div>

          {/* Redesigned Trust Badges - Tight single inline row */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-[#524344] mt-6 border-t border-[#ded0bf]/40 pt-4 max-w-4xl mx-auto">
            <span className="flex items-center gap-1.5 font-semibold">
              <Shield className="w-4 h-4 text-[#884d53]" /> Skin-Safe
            </span>
            <span className="h-3 w-px bg-[#ded0bf] hidden sm:block"></span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Heart className="w-4 h-4 text-[#884d53]" /> Doctor Endorsed
            </span>
            <span className="h-3 w-px bg-[#ded0bf] hidden sm:block"></span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Truck className="w-4 h-4 text-[#884d53]" /> Free Shipping
            </span>
            <span className="h-3 w-px bg-[#ded0bf] hidden sm:block"></span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Phone className="w-4 h-4 text-[#884d53]" /> Personal Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Scrollable Filter Pills Row */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-8 border-b border-[#ded0bf]/30">
          {filterOptions.map((opt) => {
            const isSelected = selectedCategory === opt.id
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedCategory(opt.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected 
                    ? 'bg-[#884d53] text-white border-[#884d53] shadow-sm' 
                    : 'bg-white border-[#ded0bf] text-[#524344] hover:border-[#884d53]'
                }`}
              >
                {opt.label}
              </button>
            )
          })}
        </div>

        {/* Dynamic Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const isFeatured = product.id === 'willow-support' || product.id === 'bloomcrown'
            const mainImage = product.images?.[0]?.src || '/images/placeholder.png'
            
            // Subtitle clean format (type · key detail)
            let cleanSubtitle = product.subtitle || ''
            if (product.id === 'willow-support') {
              cleanSubtitle = 'Post-Surgery Comfort Bra · Set of 2'
            } else if (product.id === 'flowsleeve') {
              cleanSubtitle = 'Compression Sleeve · Shoulder Belt'
            } else if (product.id === 'comfort-shape') {
              cleanSubtitle = 'Breast Form · Plant Fiber'
            } else if (product.id === 'bloomtips') {
              cleanSubtitle = 'Press-on Nails · 24pc'
            }

            return (
              <Link
                key={product.id}
                href={`/products/${product.slug || product.id}`}
                className={`group bg-white rounded-3xl border border-[#ded0bf]/40 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col relative ${
                  isFeatured ? 'sm:col-span-2 md:flex-row md:items-stretch' : ''
                }`}
              >
                {/* Visual Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
                  {product.isGiftPopular && (
                    <span className="bg-[#884d53] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      Popular Gift
                    </span>
                  )}
                  {isFeatured && (
                    <span className="bg-[#446651] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      Free Consultation
                    </span>
                  )}
                </div>

                {/* Product Image */}
                <div className={`relative bg-[#faf7f2]/40 overflow-hidden flex items-center justify-center border-b border-[#ded0bf]/30 ${
                  isFeatured 
                    ? 'aspect-[4/3] md:aspect-auto md:w-1/2 md:border-b-0 md:border-r' 
                    : 'aspect-[4/3]'
                }`}>
                  <Image
                    src={mainImage}
                    alt={product.name}
                    fill
                    sizes={isFeatured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 640px) 100vw, 33vw'}
                    className="object-contain p-6 group-hover:scale-[1.03] transition-transform duration-500"
                    priority={isFeatured}
                  />
                </div>

                {/* Product Info */}
                <div className={`p-6 flex-1 flex flex-col justify-between ${
                  isFeatured ? 'md:w-1/2 md:p-8' : ''
                }`}>
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#446651] font-bold uppercase tracking-widest">
                      {product.categories?.[0]?.name || 'Care Product'}
                    </span>
                    <h3 className="text-xl font-bold text-[#1c1c18] group-hover:text-[#884d53] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#847374] font-medium">
                      {cleanSubtitle}
                    </p>
                  </div>

                  {/* Bottom Row: Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#ded0bf]/30 mt-6">
                    <div>
                      {product.comingSoon ? (
                        <p className="text-base font-bold text-[#884d53]">Price TBC</p>
                      ) : (
                        <p className="text-lg font-bold text-[#1c1c18]">
                          {product.priceFrom && 'From '}₹{Number(product.price).toLocaleString('en-IN')}
                        </p>
                      )}
                      <p className="text-[10px] text-[#847374] font-medium">Free delivery over ₹999</p>
                    </div>

                    {product.id === 'bloomcrown' ? (
                      <span className="text-xs font-bold text-[#884d53] group-hover:underline flex items-center gap-1 transition-all">
                        Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#884d53] group-hover:bg-[#6e3d42] text-white flex items-center justify-center transition-colors shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Redesigned Need Help Section - Clean, quiet white card with dual CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white border border-[#ded0bf]/40 rounded-3xl p-8 sm:p-12 shadow-sm text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#884d53] to-[#446651]"></div>
          <Heart className="w-7 h-7 text-[#884d53] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#1c1c18] mb-3">
            Need guidance choosing a product?
          </h2>
          <p className="text-sm text-[#524344] mb-8 max-w-md mx-auto leading-relaxed">
            Our care team is here to support you warmly and privately. Reach out anytime for sizing advice or product recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
            <a
              href="https://wa.me/919819461612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#884d53] hover:bg-[#6e3d42] text-white px-6 py-3 rounded-full font-bold text-xs transition-all shadow-sm flex-1"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/consultations"
              className="inline-flex items-center justify-center bg-white border border-[#ded0bf] hover:border-[#884d53] text-[#524344] px-6 py-3 rounded-full font-bold text-xs transition-all shadow-sm flex-1"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
