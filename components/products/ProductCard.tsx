'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react'
import { Product } from '@/lib/types'
import { getProductImages } from '@/lib/product-images'
import { useState, useEffect } from 'react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.inStock === false
  const [imageError, setImageError] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  // Get all product images - use mapped images
  const productImages = getProductImages(product.slug || String(product.id))
  const hasMultipleImages = productImages.length > 1
  
  // Auto-advance slideshow on hover
  useEffect(() => {
    if (!isHovered || !hasMultipleImages) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
    }, 2000) // Change image every 2 seconds
    
    return () => clearInterval(interval)
  }, [isHovered, hasMultipleImages, productImages.length])
  
  // Reset to first image when mouse leaves
  useEffect(() => {
    if (!isHovered) {
      setCurrentImageIndex(0)
    }
  }, [isHovered])
  
  const goToNextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }
  
  const goToPreviousImage = (e: React.MouseEvent) => {
    e.preventDefault()
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div 
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg shadow-md mb-4 h-64 bg-gradient-to-br from-cream-50 to-sage-50 border border-gray-200">
          <Image
            src={productImages[currentImageIndex]}
            alt={`${product.name} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />

          {/* Image Navigation Arrows (show on hover if multiple images) */}
          {hasMultipleImages && isHovered && (
            <>
              <button
                onClick={goToPreviousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-teal-700" />
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-teal-700" />
              </button>
            </>
          )}
          
          {/* Image Indicators */}
          {hasMultipleImages && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentImageIndex(index)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-6 bg-white' 
                      : 'w-1.5 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Out of Stock Overlay */}
          {isOutOfStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
              <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Out of Stock
              </span>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              // TODO: Add to cart functionality
            }}
            className="absolute bottom-3 right-3 bg-teal-600 hover:bg-teal-700 text-white p-2 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100 z-10"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Category */}
          <p className="text-xs text-teal-600 font-medium uppercase tracking-wider">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-teal-600 transition">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating && product.rating > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating || 0)
                        ? 'fill-amber-500 text-amber-500'
                        : 'text-gray-300'
                      }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600">
                ({product.reviewCount || 0})
              </span>
            </div>
          )}

          {/* Price */}
          <p className="text-lg font-bold text-gray-900">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>
      </div>
    </Link>
  )
}
