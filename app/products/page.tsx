'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, Shield, Truck, Phone, Filter, X } from 'lucide-react'
import { products, getAllCategories, getProductsByCategory } from '@/lib/products-data'

// Get categories dynamically from products
const allCategories = getAllCategories()
const categories = [
  { id: 'all', name: 'All Products', slug: 'all', count: products.length },
  ...allCategories.map(cat => ({
    id: cat.slug,
    name: cat.name,
    slug: cat.slug,
    count: cat.count
  }))
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  // Filter products by category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : getProductsByCategory(selectedCategory)

  // Group products by category for display
  const groupedProducts = selectedCategory === 'all'
    ? allCategories.map(cat => ({
      category: cat.name,
      products: getProductsByCategory(cat.slug)
    })).filter(g => g.products.length > 0)
    : [{ category: categories.find(c => c.id === selectedCategory)?.name || '', products: filteredProducts }]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-teal-50 via-cream-50 to-white pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
              Care Designed with Dignity
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient-teal">Products</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughtfully crafted for comfort, confidence, and healing.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-3 shadow-soft text-center">
              <Shield className="w-6 h-6 text-teal-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-gray-900">Skin-Safe</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-soft text-center">
              <Heart className="w-6 h-6 text-teal-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-gray-900">Doctor Endorsed</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-soft text-center">
              <Truck className="w-6 h-6 text-teal-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-gray-900">Free Shipping</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow-soft text-center">
              <Phone className="w-6 h-6 text-teal-600 mx-auto mb-1" />
              <p className="text-xs font-semibold text-gray-900">Personal Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all ${selectedCategory === cat.id
                      ? 'bg-teal-500 text-white font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>{cat.name}</span>
                      <span className={`text-sm ${selectedCategory === cat.id ? 'text-teal-100' : 'text-gray-400'}`}>
                        {cat.count}
                      </span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredProducts.length}</span> products
            </p>
            <button
              onClick={() => setShowFilters(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-soft text-gray-700"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          {/* Mobile Filter Modal */}
          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 animate-slide-up">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Filter by Category</h3>
                  <button onClick={() => setShowFilters(false)} className="p-2">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id)
                        setShowFilters(false)
                      }}
                      className={`w-full text-left px-4 py-4 rounded-xl transition-all ${selectedCategory === cat.id
                        ? 'bg-teal-500 text-white font-semibold'
                        : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                      <span className="flex items-center justify-between">
                        <span>{cat.name}</span>
                        <span>{cat.count}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {groupedProducts.map((group, groupIndex) => (
              <div key={groupIndex} className="mb-12">
                {/* Category Header */}
                {selectedCategory === 'all' && (
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{group.category}</h2>
                    <span className="text-sm text-gray-500">{group.products.length} products</span>
                  </div>
                )}

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {group.products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      className="group card-product"
                    >
                      {/* Product Image */}
                      <div className="card-product-image relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Wishlist Button */}
                        <button
                          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-teal-50 z-10"
                          onClick={(e) => {
                            e.preventDefault()
                            // Add to wishlist logic
                          }}
                        >
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* In Stock Badge */}
                        {product.inStock && (
                          <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full z-10">
                            In Stock
                          </span>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="card-product-body">
                        {/* Category */}
                        <span className="text-xs text-teal-600 font-semibold uppercase tracking-wider">
                          {product.category}
                        </span>

                        {/* Name */}
                        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-1 group-hover:text-teal-600 transition-colors line-clamp-2">
                          {product.name}
                        </h3>

                        {/* Short Description */}
                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.short_description}</p>

                        {/* Price & CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            <p className="text-xl font-bold text-gray-900">₹{Number(product.price).toLocaleString()}</p>
                            <p className="text-xs text-gray-500">Free shipping</p>
                          </div>
                          <span className="bg-teal-500 text-white px-4 py-2 rounded-xl text-sm font-semibold group-hover:bg-teal-600 transition-colors">
                            View
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Need Help Section */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg text-teal-100 mb-8">
            Our care specialists are here to guide you. Every body is unique, and we're here to help you find the perfect fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919819461612"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-cream-50 transition shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call: +91-9819461612
            </a>
            <a
              href="https://wa.me/919819461612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-900 transition shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
