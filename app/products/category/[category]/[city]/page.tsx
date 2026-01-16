'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react'

export default function CategoryCityPage() {
  const params = useParams()
  const category = params.category as string
  const city = params.city as string

  const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/products" className="hover:text-amber-600">Products</Link>
          <span>/</span>
          <Link 
            href={`/products/category/${category}`}
            className="hover:text-amber-600"
          >
            {categoryName}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{cityName}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-amber-600" />
            <h1 className="text-4xl font-light text-gray-800">
              {categoryName} in {cityName}
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Find specialized {category.replace(/-/g, ' ')} products with local delivery and support in {cityName}
          </p>
        </div>

        {/* Local Benefits */}
        <div className="bg-gradient-to-br from-amber-50 to-cream-50 border border-amber-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-amber-600" />
            Local Services in {cityName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Express Delivery</h3>
                <p className="text-gray-700">Free home delivery within 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900">In-Person Consultations</h3>
                <p className="text-gray-700">Meet specialists in your area</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Partner Hospitals</h3>
                <p className="text-gray-700">Connected with leading hospitals nearby</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Easy Pickup & Returns</h3>
                <p className="text-gray-700">Hassle-free local pickup points</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-gray-200 rounded-lg p-8 hover:border-amber-300 transition hover:shadow-lg">
            <MessageCircle className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Book a Consultation</h3>
            <p className="text-gray-600 mb-6">
              Connect with local specialists in {cityName} for personalized product recommendations
            </p>
            <Link 
              href="/consultations"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Book Now
            </Link>
          </div>

          <div className="border border-gray-200 rounded-lg p-8 hover:border-sage-300 transition hover:shadow-lg">
            <Phone className="w-12 h-12 text-sage-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Support</h3>
            <p className="text-gray-600 mb-6">
              Have questions? Our {cityName} team is here to help you 9 AM - 6 PM IST
            </p>
            <div className="space-y-3">
              <a 
                href="/faq"
                className="inline-block border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Products Section Placeholder */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Available Products
          </h2>
          <p className="text-gray-600 mb-6">
            Browse our selection of {categoryName.toLowerCase()} specifically curated for customers in {cityName}.
          </p>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">Product listings coming soon</p>
            <Link 
              href="/products"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Browse all products →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
