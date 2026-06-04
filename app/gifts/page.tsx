'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Gift, Heart, Sparkles, Star } from 'lucide-react'
import { getProductBySlug } from '@/lib/products-data'

const giftBundles = [
  {
    title: 'Daily Comfort Gift',
    description: 'A thoughtful collection of gentle, bamboo-based essentials perfect for everyday wellness and comfort during treatment.',
    icon: <Heart className="w-6 h-6 text-[#884d53]" />,
    image: '/images/catalog/petal_leaf/1.jpeg', // Using PetalWrap main image
    products: ['petalwrap', 'dewleaf', 'bloomtips']
  },
  {
    title: 'Recovery Essentials Gift',
    description: 'The definitive physical support kit. Designed with oncologists to provide essential comfort immediately after surgery.',
    icon: <Star className="w-6 h-6 text-[#884d53]" />,
    image: '/images/catalog/WillowSupport/1.jpeg', // Using Willow Support main image
    products: ['comfort-shape', 'willow-support', 'nature-nest']
  },
  {
    title: 'Confidence Collection',
    description: 'A beautiful ensemble focused on self-image and feeling like yourself again during and after hair loss.',
    icon: <Sparkles className="w-6 h-6 text-[#884d53]" />,
    image: '/images/catalog/AirBloom/1.jpeg', // Using AirBloom main image
    products: ['airbloom', 'browbloom', 'willow-wrap']
  },
  {
    title: 'Complete Recovery Kit',
    description: 'The ultimate care package offering comprehensive support, combining physical recovery with gentle daily wellness.',
    icon: <Gift className="w-6 h-6 text-[#884d53]" />,
    image: '/images/catalog/NestCarry/1.jpeg', // Using Nest Carry main image
    products: ['nest-carry', 'flowsleeve', 'dewleaf']
  }
]

export default function GiftsPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* ── HERO ── */}
      <div className="bg-[#1c1c18] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/catalog/petal_leaf/4.jpeg"
            alt="Gift background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-[#ded0bf] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
            Curated For Care
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Thoughtful Gifts<br />for Her Journey
          </h1>
          <p className="text-[#ded0bf] text-lg sm:text-xl max-w-2xl mx-auto">
            Show you care with purposeful combinations designed for true comfort, dignity, and healing.
          </p>
        </div>
      </div>

      {/* ── CURATED BUNDLES ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {giftBundles.map((bundle, index) => {
            const bundleProducts = bundle.products
              .map(slug => getProductBySlug(slug))
              .filter(p => !!p)

            return (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Bundle Image / Intro */}
                <div className="w-full lg:w-1/3">
                  <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#ded0bf]/40 h-full flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      {bundle.icon}
                    </div>
                    <div className="w-16 h-16 rounded-full bg-[#884d53]/10 flex items-center justify-center mb-6">
                      {bundle.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-[#1c1c18] mb-4">{bundle.title}</h2>
                    <p className="text-[#524344] leading-relaxed mb-8">{bundle.description}</p>
                    
                    <div className="space-y-4">
                      <p className="text-sm font-bold uppercase tracking-wider text-[#1c1c18]">What's Inside:</p>
                      <ul className="space-y-2">
                        {bundleProducts.map(p => (
                          <li key={p?.id} className="text-[#524344] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#884d53]"></span>
                            {p?.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Products (No fake SKU) */}
                <div className="w-full lg:w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {bundleProducts.map(product => (
                      <Link 
                        key={product?.id} 
                        href={`/products/${product?.slug}`}
                        className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-md border border-[#ded0bf]/40 transition-all flex flex-col h-full"
                      >
                        <div className="aspect-square relative rounded-xl overflow-hidden mb-4 bg-[#faf7f2]">
                          <Image
                            src={product?.images?.[0]?.src || '/images/placeholder.png'}
                            alt={product?.name || ''}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#446651] mb-1">
                            {product?.categories?.[0]?.name}
                          </p>
                          <h3 className="font-bold text-[#1c1c18] mb-1 leading-tight">{product?.name}</h3>
                          <p className="text-xs text-[#524344] mb-3 line-clamp-2 flex-1">{product?.subtitle}</p>
                          {(product?.isComplimentaryGift || product?.tags?.includes('gift')) ? (
                            <span className="inline-flex self-start rounded-full bg-[#884d53]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#884d53]">
                              Complimentary Gift
                            </span>
                          ) : (
                            <p className="font-bold text-[#884d53]">₹{Number(product?.price).toLocaleString('en-IN')}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── CONSULTATION BANNER ── */}
      <div className="bg-[#884d53] text-white py-20 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-[#ded0bf] text-lg mb-8 max-w-xl mx-auto">
            Not sure what your loved one needs right now? Our care team can help you select the most supportive and appropriate gift for their specific stage of recovery.
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=I%20need%20help%20choosing%20a%20gift"
            className="inline-block bg-white text-[#884d53] font-bold px-8 py-4 rounded-full transition-all hover:bg-[#faf7f2] hover:scale-105 shadow-lg"
          >
            Speak to a Care Guide
          </a>
        </div>
      </div>
    </div>
  )
}
