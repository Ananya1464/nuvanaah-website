'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Heart, Shield, Truck, Check, Phone, Filter, X } from 'lucide-react'

// Product data
const products = [
  {
    id: 'mastectomy-bra',
    name: 'NUAANA Prosthetic Bra - Post Mastectomy Comfort Bra',
    tagline: 'gentle support after surgery',
    description: 'Gentle support designed specifically for post-mastectomy recovery.',
    price: 2999,
    category: 'Post-Surgery Essentials',
    features: ['Hidden prosthetic pockets', 'Body-safe fabric', 'Adjustable straps'],
    inStock: true,
  },
  {
    id: 'silicone-breast-form',
    name: 'NUAANA Partial Breast Form - Silicone Prosthesis',
    tagline: 'organic, soft material',
    description: 'Organic, soft material breast prosthesis designed for natural comfort.',
    price: 8999,
    category: 'Post-Surgery Essentials',
    features: ['Medical-grade silicone', 'Natural weight', 'Temperature adaptive'],
    inStock: true,
  },
  {
    id: 'chemo-port-shirt',
    name: 'ChemoPort Access Shirt - Dual Zipper Design',
    tagline: 'easy port access for chemo',
    description: 'Easy-access shirt designed for chemotherapy port patients.',
    price: 1999,
    category: 'Chemo Comfort Wear',
    features: ['Quick port access', 'Bamboo fabric', 'Discreet design'],
    inStock: true,
  },
  {
    id: 'drainage-bag-holder',
    name: 'Post-Surgery Drainage Bag Holder',
    tagline: 'hands-free drain management',
    description: 'Hands-free drainage bag management system for recovery.',
    price: 1299,
    category: 'Post-Surgery Essentials',
    features: ['4 secure pockets', 'Adjustable strap', 'Machine washable'],
    inStock: true,
  },
  {
    id: 'chemo-port-pillow',
    name: 'ChemoPort Protection Pillow - Seatbelt Guard',
    tagline: 'protects port from seatbelt',
    description: 'Protective cushion to prevent seatbelt pressure on ports.',
    price: 999,
    category: 'Chemo Comfort Wear',
    features: ['Cushioned protection', 'Ergonomic design', 'Portable'],
    inStock: true,
  },
  {
    id: 'mastectomy-camisole',
    name: 'Post-Mastectomy Camisole with Drain Pockets',
    tagline: 'all-in-one recovery wear',
    description: 'All-in-one post-surgery camisole with drain management.',
    price: 2499,
    category: 'Post-Surgery Essentials',
    features: ['Built-in drain pockets', 'Prosthesis support', 'Cotton fabric'],
    inStock: true,
  },
  {
    id: 'wig-grip-band',
    name: 'Medical Wig Grip Band',
    tagline: 'secure wig hold',
    description: 'Medical wig grip band prevents wig slipping during chemo.',
    price: 599,
    category: 'Wig Care & Accessories',
    features: ['Non-slip silicone', 'Velvet soft', 'Adjustable fit'],
    inStock: true,
  },
  {
    id: 'lymphedema-sleeve',
    name: 'Lymphedema Compression Arm Sleeve',
    tagline: 'reduces arm swelling',
    description: 'Medical-grade compression sleeve for lymphedema care.',
    price: 1799,
    category: 'Compression & Recovery',
    features: ['Graduated compression', 'Moisture-wicking', 'UV protection'],
    inStock: true,
  },
  {
    id: 'breast-form-adhesive',
    name: 'Breast Form Medical Adhesive',
    tagline: 'secure prosthesis hold',
    description: 'Medical-grade adhesive for breast prosthesis.',
    price: 1299,
    category: 'Post-Surgery Essentials',
    features: ['Strong 12-16hr hold', 'Water-resistant', 'Easy removal'],
    inStock: true,
  },
]

// Categories
const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'mastectomy', name: 'Post-Surgery Essentials', count: products.filter(p => p.category === 'Post-Surgery Essentials').length },
  { id: 'chemotherapy', name: 'Chemo Comfort Wear', count: products.filter(p => p.category === 'Chemo Comfort Wear').length },
  { id: 'wigs', name: 'Wig Care & Accessories', count: products.filter(p => p.category === 'Wig Care & Accessories').length },
  { id: 'lymphedema', name: 'Compression & Recovery', count: products.filter(p => p.category === 'Compression & Recovery').length },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  // Filter products by category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => {
      if (selectedCategory === 'mastectomy') return p.category === 'Post-Surgery Essentials'
      if (selectedCategory === 'chemotherapy') return p.category === 'Chemo Comfort Wear'
      if (selectedCategory === 'wigs') return p.category === 'Wig Care & Accessories'
      if (selectedCategory === 'lymphedema') return p.category === 'Compression & Recovery'
      return true
    })

  // Group products by category for display
  const groupedProducts = selectedCategory === 'all'
    ? categories.slice(1).map(cat => ({
      category: cat.name,
      products: products.filter(p => p.category === cat.name)
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
                      <div className="card-product-image relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-50 to-cream-100">
                          <ShoppingBag className="w-16 h-16 text-teal-300" />
                        </div>

                        {/* Wishlist Button */}
                        <button
                          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-teal-50"
                          onClick={(e) => {
                            e.preventDefault()
                            // Add to wishlist logic
                          }}
                        >
                          <Heart className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* In Stock Badge */}
                        {product.inStock && (
                          <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
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

                        {/* Tagline */}
                        <p className="text-sm text-gray-500 italic mb-3">{product.tagline}</p>

                        {/* Features */}
                        <div className="space-y-1 mb-4">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                              <Check className="w-3 h-3 text-teal-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Price & CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div>
                            <p className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</p>
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
