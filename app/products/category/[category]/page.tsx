'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string

  const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          {categoryName}
        </h1>
        <p className="text-gray-600 mb-8">
          Explore our curated collection of {category.replace(/-/g, ' ')} products designed with care and comfort in mind.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition">
            <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
            <p className="text-gray-600">Carefully selected products for your comfort and well-being</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition">
            <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
            <p className="text-gray-600">Free consultations available with specialists</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:border-amber-300 transition">
            <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
            <p className="text-gray-600">30-day hassle-free returns on all products</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-700 mb-6">
            Our specialists can help you find the perfect products for your needs. Book a free consultation today.
          </p>
          <Link 
            href="/consultations"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Book Free Consultation
          </Link>
        </div>

        <div className="mt-8">
          <Link 
            href="/products" 
            className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center gap-2"
          >
            ← Back to all products
          </Link>
        </div>
      </div>
    </div>
  )
}
