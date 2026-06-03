'use client'

import { useState, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Star } from 'lucide-react'
import { Product } from '@/lib/types'

interface ProductHeroProps {
  product: Product
  categoryName: string
  categoryHref: string
  images: { id: number; src: string; alt: string; direction?: string }[]
  benefitStatement: string
  renderOptions: () => ReactNode
  renderActions: () => ReactNode
  renderTrustStrip: () => ReactNode
}

export function ProductHero({
  product,
  categoryName,
  categoryHref,
  images,
  benefitStatement,
  renderOptions,
  renderActions,
  renderTrustStrip,
}: ProductHeroProps) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section className="relative w-full bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        
        {/* Left Column: Image Gallery (Mobile swipeable, Desktop grid/sticky) */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:max-h-[900px]">
          <div className="relative h-[55vh] min-h-[400px] w-full lg:h-[75vh] lg:min-h-[600px]">
            {/* 
              Mandatory Rule: No text over face. 
              The image sits completely unobstructed at the top on mobile. 
              On desktop, it fills its container. 
            */}
            <Image
              src={images[activeImage]?.src || product.images?.[0]?.src || '/images/placeholder.png'}
              alt={images[activeImage]?.alt || product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center lg:object-[80%_center] transition-opacity duration-300"
            />
          </div>

          {/* Desktop Thumbnails */}
          <div className="hidden lg:flex gap-4 p-8 overflow-x-auto no-scrollbar">
            {images.map((img, index) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(index)}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                  activeImage === index ? 'border-primary' : 'border-transparent hover:border-primary/50'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Mobile Thumbnails */}
          <div className="flex lg:hidden gap-3 p-4 overflow-x-auto no-scrollbar">
            {images.map((img, index) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(index)}
                className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                  activeImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Info (Stacks below image on mobile) */}
        <div className="flex w-full flex-col px-4 py-8 lg:w-1/2 lg:px-12 lg:py-16 xl:px-16">
          <div className="mx-auto w-full max-w-lg lg:max-w-none">
            
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center text-[12px] font-medium text-text-secondary">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-3 w-3" />
              <Link href={categoryHref} className="hover:text-primary transition-colors">{categoryName}</Link>
              <ChevronRight className="mx-2 h-3 w-3" />
              <span className="text-text">{product.name}</span>
            </nav>

            {/* Category Pill */}
            <span className="mb-4 inline-block rounded-full bg-secondary-container px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-secondary">
              {categoryName}
            </span>

            {/* Title & Rating */}
            <h1 className="mb-4 font-display text-3xl font-bold leading-tight text-text lg:text-4xl">
              {product.name}
            </h1>
            
            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center text-[#B68B45]">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 font-bold">4.9</span>
              </div>
              <button className="text-[14px] text-text-secondary hover:text-primary transition-colors underline-offset-4 hover:underline">
                (Read Reviews)
              </button>
            </div>

            {/* Price */}
            <div className="mb-6">
              {product.price === 'TBD' ? (
                <span className="text-2xl font-bold text-primary-700">₹ — Contact us</span>
              ) : (
                <span className="text-2xl font-bold text-primary-700">₹{product.price}</span>
              )}
            </div>

            {/* Benefit Statement */}
            <p className="mb-8 text-[16px] leading-relaxed text-text-secondary">
              {benefitStatement}
            </p>

            <hr className="mb-8 border-border" />

            {/* Injected Options (Size, Variants) */}
            <div className="mb-8">
              {renderOptions()}
            </div>

            {/* Injected Actions (Add to Bag, Wishlist) */}
            <div className="mb-8">
              {renderActions()}
            </div>

            {/* Trust Strip & Support */}
            <div className="mt-auto">
              {renderTrustStrip()}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
