'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, Plus, Heart, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'
import { Product } from '@/lib/types'
import { getProductImages } from '@/lib/product-images'
import { useState, useEffect } from 'react'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.inStock === false
  const [imageError, setImageError] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const { addItem } = useCart()
  const { isInWishlist, toggleItem } = useWishlist()
  const wishlisted = isInWishlist(String(product.id))

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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isOutOfStock) {
      addItem({
        id: String(product.id),
        name: product.name,
        price: Number(product.price),
        image: productImages[0],
      })
    }
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleItem({
      id: String(product.id),
      name: product.name,
      price: Number(product.price),
      tagline: product.short_description || product.name,
      category: product.categories?.[0]?.name || 'Uncategorized',
    })
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div
        className="group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-md mb-4 h-64 bg-gradient-to-br from-[#faf7f2] to-[#f7f3ed] border border-black/5">
          {imageError ? (
            <div className="flex h-full w-full items-center justify-center bg-neutral-100 text-[#524344]/40">
              <ShoppingCart className="h-8 w-8" />
            </div>
          ) : (
            <Image
              src={productImages[currentImageIndex]}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
            />
          )}

          {/* Wishlist Heart */}
          <button
            onClick={handleToggleWishlist}
            className={`absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all hover:scale-110 z-10 ${
              wishlisted ? 'text-[#884d53]' : 'text-[#524344]'
            }`}
            aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          >
            <Heart className={`h-4 w-4 ${wishlisted ? 'fill-current' : ''}`} />
          </button>

          {/* Image Navigation Arrows (show on hover if multiple images) */}
          {hasMultipleImages && isHovered && (
            <>
              <button
                onClick={goToPreviousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-[#1c1c18]" />
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white shadow-md z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-[#1c1c18]" />
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
          {!isOutOfStock && (
            <button
              onClick={handleAddToCart}
              className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#884d53] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl opacity-0 group-hover:opacity-100 z-10"
              aria-label={`Add ${product.name} to cart`}
            >
              <Plus className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-1.5">
          {/* Category */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#446651]">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="font-semibold text-[#1c1c18] line-clamp-2 group-hover:text-[#884d53] transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating && product.rating > 0 && (
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating || 0)
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-gray-200 text-gray-200'
                      }`}
                  />
                ))}
              </div>
              <span className="text-[11px] text-[#524344]">
                {product.rating} ({product.reviewCount || 0})
              </span>
            </div>
          )}

          {/* Price */}
          <p className="text-lg font-bold text-[#884d53]">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>
      </div>
    </Link>
  )
}
