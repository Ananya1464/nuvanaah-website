'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const hasMultipleImages = images.length > 1

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cream-50 to-sage-50 group">
        <Image
          src={images[selectedImage]}
          alt={`${productName} - View ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Zoom Button */}
        <button
          onClick={() => setIsZoomed(true)}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-lg"
          aria-label="Zoom image"
        >
          <ZoomIn className="w-5 h-5 text-teal-700" />
        </button>

        {/* Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-teal-700" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-md"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-teal-700" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {hasMultipleImages && (
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Grid */}
      {hasMultipleImages && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                'relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300',
                index === selectedImage
                  ? 'border-teal-600 ring-2 ring-teal-200 scale-105'
                  : 'border-transparent hover:border-teal-300'
              )}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 15vw"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Labels */}
      {hasMultipleImages && (
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
          {['Product', 'Detail', 'Lifestyle', 'Usage'].slice(0, images.length).map((label, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={cn(
                'px-3 py-1 rounded-full transition-colors',
                idx === selectedImage
                  ? 'bg-teal-100 text-teal-700 font-medium'
                  : 'hover:bg-gray-100'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
            <Image
              src={images[selectedImage]}
              alt={`${productName} zoomed`}
              fill
              className="object-contain"
              quality={100}
              sizes="100vw"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsZoomed(false)
              }}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close zoom"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
