'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'
import { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = !product.inStock

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg shadow-md mb-4 h-64 bg-gray-100 border border-gray-200">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Out of Stock Overlay */}
          {isOutOfStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
            className="absolute bottom-3 right-3 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Category */}
          <p className="text-xs text-amber-600 font-medium uppercase tracking-wider">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-amber-600 transition">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating)
                        ? 'fill-amber-500 text-amber-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600">
                ({product.reviewCount})
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
