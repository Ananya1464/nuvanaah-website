'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getCategoryImage } from '@/lib/product-images'

const categories = [
  {
    name: 'Post-Surgery Essentials',
    shortName: 'Post-Surgery',
    description: 'Mastectomy bras, prosthetics & recovery support',
    href: '/products/category/post-surgery-essentials',
    image: getCategoryImage('post-surgery-essentials'),
    category: 'post-surgery-essentials',
    priceRange: '₹659 - ₹1,099',
    productCount: 4,
  },
  {
    name: 'Chemotherapy Support',
    shortName: 'Chemo Care',
    description: 'Protective masks, bags & treatment essentials',
    href: '/products/category/chemotherapy-support',
    image: getCategoryImage('chemotherapy-support'),
    category: 'chemotherapy-support',
    priceRange: '₹329 - ₹549',
    productCount: 3,
  },
  {
    name: 'Hair Loss Solutions',
    shortName: 'Wigs & Scarves',
    description: 'Medical & premium wigs, head scarves with lace',
    href: '/products/category/hair-loss-solutions',
    image: getCategoryImage('hair-loss-solutions'),
    category: 'hair-loss-solutions',
    priceRange: '₹879 - ₹29,149',
    productCount: 11,
  },
  {
    name: 'Lymphedema Management',
    shortName: 'Compression',
    description: 'Medical-grade compression sleeves',
    href: '/products/category/lymphedema-management',
    image: getCategoryImage('lymphedema-management'),
    category: 'lymphedema-management',
    priceRange: '₹2,749',
    productCount: 1,
  },
]

export default function Categories() {
  return (
    <section className="section bg-cream-100">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Shop by Category</span>
          <h2 className="section-title">Find What You Need</h2>
          <p className="section-subtitle">
            Products thoughtfully designed for every stage of your treatment journey.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all hover:-translate-y-2 duration-300"
            >
              {/* Category Image */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-cream-50 to-sage-50">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* View Products Text on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    View Products
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {category.shortName}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {category.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-1 text-sm font-medium text-teal-600">
                  Shop Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link href="/products" className="btn-secondary">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
