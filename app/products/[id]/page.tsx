'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { 
  Star, ShoppingCart, Heart, Share2, Truck, RotateCcw, Shield,
  ChevronDown, Check
} from 'lucide-react'
import { getProductById, isVariableProduct } from '@/lib/products-data'
import { getProductImages } from '@/lib/product-images'
import type { Product, ProductVariation } from '@/lib/types'

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [productImages, setProductImages] = useState<string[]>([])
  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)
  const [activeTab, setActiveTab] = useState('description')
  const [expandedFAQ, setExpandedFAQ] = useState(0)
  const [loading, setLoading] = useState(true)

  // Load product data
  useEffect(() => {
    if (params.id) {
      const productId = String(params.id)
      const foundProduct = getProductById(productId)
      
      if (foundProduct) {
        setProduct(foundProduct)
        
        // For variable products, set first variation as default
        if (isVariableProduct(foundProduct) && foundProduct.variations && foundProduct.variations.length > 0) {
          setSelectedVariation(foundProduct.variations[0])
          // Get images from first variation
          const varImages = foundProduct.variations[0].images?.map(img => img.src) || []
          setProductImages(varImages.length > 0 ? varImages : (foundProduct.images?.map(img => img.src) || []))
        } else {
          // For simple products, get images from product
          const images = getProductImages(foundProduct.slug || String(productId))
          setProductImages(images.length > 0 ? images : (foundProduct.images?.map(img => img.src).filter((src): src is string => !!src) || []))
        }
        setLoading(false)
      } else {
        // Product not found - redirect to products page
        router.push('/products')
      }
    }
  }, [params.id, router])

  // Handle variation change
  const handleVariationChange = (variation: ProductVariation) => {
    setSelectedVariation(variation)
    // Update images when variation changes
    const varImages = variation.images?.map(img => img.src) || []
    if (varImages.length > 0) {
      setProductImages(varImages)
      setSelectedImage(0) // Reset to first image
    }
  }

  // Get current price and stock status
  const currentPrice = selectedVariation ? selectedVariation.price : product?.price
  const currentRegularPrice = selectedVariation ? selectedVariation.regular_price : product?.regular_price
  const currentStockStatus = selectedVariation ? selectedVariation.stock_status : product?.stock_status
  const isVariable = product && isVariableProduct(product)

  // Calculate discount if there's a regular price
  const hasDiscount = currentRegularPrice && Number(currentRegularPrice) > Number(currentPrice)
  const discountPercent = hasDiscount
    ? Math.round(((Number(currentRegularPrice) - Number(currentPrice!)) / Number(currentRegularPrice)) * 100)
    : 0

  if (loading || !product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-600">
        <a href="/" className="hover:text-amber-600">Home</a>
        <span className="mx-2">/</span>
        <a href="/products" className="hover:text-amber-600">Products</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={productImages[selectedImage] || product.image || 'https://images.unsplash.com/photo-1584512814423-69f8b3e1d919?w=800&h=800&fit=crop'}
                alt={product.name}
                fill
                className="object-cover"
              />
              {discountPercent > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {discountPercent}% OFF
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-2">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === idx
                      ? 'border-amber-600'
                      : 'border-gray-200 hover:border-amber-200'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category & Title */}
            <div>
              <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide mb-2">
                {product.categories && product.categories.length > 0 
                  ? (typeof product.categories[0] === 'string' ? product.categories[0] : product.categories[0].name)
                  : 'Product'}
              </p>
              <h1 className="text-4xl font-bold text-gray-900">
                {product.name}
              </h1>
            </div>

            {/* Product Description */}
            <div className="text-gray-700">
              <p>{product.description || product.short_description}</p>
            </div>


            {/* Rating */}
            {product.rating && product.rating > 0 && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(product.rating || 0)
                          ? 'fill-amber-500 text-amber-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">{product.rating} out of 5</span>
                <span className="text-gray-500">({product.reviewCount || 0} reviews)</span>
              </div>
            )}

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{Number(currentPrice).toLocaleString('en-IN')}
                </span>
                {hasDiscount && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      ₹{Number(currentRegularPrice).toLocaleString('en-IN')}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {discountPercent}% OFF
                    </span>
                  </>
                )}
              </div>
              {isVariable && (
                <p className="text-sm text-gray-600">
                  Price varies by length
                </p>
              )}
              <p className="text-sm text-gray-600">
                Inclusive of all taxes
              </p>
            </div>

            {/* Length Selector for Variable Products */}
            {isVariable && product.variations && product.variations.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Select Length {selectedVariation && <span className="text-teal-600">({selectedVariation.length})</span>}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {product.variations.map((variation) => (
                    <button
                      key={variation.id}
                      onClick={() => handleVariationChange(variation)}
                      className={`py-3 px-4 rounded-lg border-2 font-semibold transition ${
                        selectedVariation?.id === variation.id
                          ? 'border-teal-600 bg-teal-50 text-teal-900'
                          : 'border-gray-200 hover:border-teal-200 text-gray-800'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold">{variation.length}</div>
                        <div className="text-xs text-gray-600 mt-1">₹{Number(variation.price).toLocaleString('en-IN')}</div>
                      </div>
                    </button>
                  ))}
                </div>
                {selectedVariation && (
                  <p className="text-sm text-gray-600 mt-2">
                    {selectedVariation.description}
                  </p>
                )}
              </div>
            )}


            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:border-amber-600 transition text-gray-600"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:border-amber-600 transition text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                disabled={currentStockStatus !== 'instock' || (isVariable && !selectedVariation) || false}
                className="flex-1 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                <ShoppingCart className="w-5 h-5" />
                {currentStockStatus === 'instock' ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className="w-14 border-2 border-gray-300 rounded-lg hover:border-amber-600 transition flex items-center justify-center"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`}
                />
              </button>
              <button className="w-14 border-2 border-gray-300 rounded-lg hover:border-amber-600 transition flex items-center justify-center">
                <Share2 className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Info Box */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex gap-3">
                <Truck className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-800">Free Shipping</p>
                  <p className="text-xs text-gray-600">Pan India delivery</p>
                </div>
              </div>
              <div className="flex gap-3">
                <RotateCcw className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-800">Easy Returns</p>
                  <p className="text-xs text-gray-600">30-day returns</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-800">Secure</p>
                  <p className="text-xs text-gray-600">Safe checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          {/* Tabs */}
          <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-8">
            {[
              { id: 'description', label: 'Description' },
              { id: 'features', label: 'Features & Benefits' },
              { id: 'materials', label: 'Materials & Why It Works' },
              { id: 'care', label: 'How to Use & Care' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'faqs', label: 'FAQs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-semibold text-sm border-b-2 transition ${
                  activeTab === tab.id
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 gap-12">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  About This Product
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {product.description || product.short_description}
                </p>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Product Features
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>{product.description || product.short_description}</p>
                </div>
              </div>
            )}

            {/* Materials Tab */}
            {activeTab === 'materials' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Materials & Care
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p>{product.description || product.short_description}</p>
                </div>
              </div>
            )}

            {/* Care Tab */}
            {activeTab === 'care' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Care Instructions
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Hand wash gently in lukewarm water</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Use mild, fragrance-free soap</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Air dry flat or hang to dry</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Avoid direct sunlight and heat sources</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Customer Reviews ({product.reviewCount || 0})
                </h2>
                {/* Placeholder for reviews component */}
                <div className="grid gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-500 text-amber-500"
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gray-900">Verified Purchase</span>
                    </div>
                    <p className="text-gray-700 mb-2">Excellent quality and very comfortable. Highly recommend!</p>
                    <p className="text-sm text-gray-500">Verified Buyer • 2 weeks ago</p>
                  </div>
                </div>
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === 0 ? -1 : 0)}
                      className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-gray-900">How do I choose the right size?</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-600 transition ${
                          expandedFAQ === 0 ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedFAQ === 0 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">Please refer to our sizing guide. If you're between sizes, we recommend sizing up for comfort.</p>
                      </div>
                    )}
                  </div>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === 1 ? -1 : 1)}
                      className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-gray-900">What is your return policy?</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-600 transition ${
                          expandedFAQ === 1 ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedFAQ === 1 && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">We offer 30-day returns for unused items in original packaging.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-12 border-t border-gray-200 bg-sage-50 rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Unsure Which Product Is Right for You?
            </h2>
            <p className="text-gray-700 mb-6">
              Our expert team is here to help. Book a free virtual consultation to discuss your needs and find the perfect fit for your recovery journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Add to Cart
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition">
                Free Virtual Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
