'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Shield, Truck, Heart, Phone } from 'lucide-react'
import { getProductsByCategory, categoryMappings } from '@/lib/products-data'
import ProductCard from '@/components/products/ProductCard'

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.category as string

  const categoryProducts = getProductsByCategory(categorySlug)
  const categoryName = categoryMappings[categorySlug] || categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            {categoryName}
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl">
            Explore our curated collection of {categoryName.toLowerCase()} designed with care and comfort in mind.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {categoryProducts.length} Product{categoryProducts.length !== 1 ? 's' : ''} Available
              </h2>
              <p className="text-gray-600">All products are in stock and ready to ship</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No Products Found
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any products in this category. Please check back soon or explore our other categories.
            </p>
            <Link 
              href="/products" 
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              View All Products
            </Link>
          </div>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition">
            <Shield className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-gray-900">Premium Quality</h3>
            <p className="text-gray-600">Carefully selected products for your comfort and well-being</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition">
            <Heart className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-gray-900">Expert Support</h3>
            <p className="text-gray-600">Free consultations available with specialists</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition">
            <Truck className="w-12 h-12 text-teal-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-gray-900">Easy Returns</h3>
            <p className="text-gray-600">30-day hassle-free returns on all products</p>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="bg-gradient-to-br from-amber-50 to-gold-50 border border-amber-200 rounded-2xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <Phone className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Our specialists can help you find the perfect products for your needs. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/consultations"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Book Free Consultation
              </Link>
              <a 
                href="tel:+919819461612"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-teal-700 border-2 border-teal-600 px-8 py-4 rounded-xl font-semibold transition"
              >
                <Phone className="w-5 h-5" />
                +91-9819461612
              </a>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link 
            href="/products" 
            className="text-teal-600 hover:text-teal-700 font-semibold inline-flex items-center gap-2 text-lg"
          >
            ← Back to all products
          </Link>
        </div>
      </div>
    </div>
  )
}
