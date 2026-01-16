'use client'

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export default function Blog() {
  const posts = [
    {
      id: 1,
      slug: 'mastectomy-recovery-timeline',
      title: 'Complete Mastectomy Recovery Timeline: Week by Week Guide',
      excerpt: 'A comprehensive guide to what you can expect during your mastectomy recovery, from hospital to home.',
      category: 'Recovery',
      readTime: '8 min read',
      image: '📅',
    },
    {
      id: 2,
      slug: 'choosing-right-breast-prosthesis',
      title: 'How to Choose the Right Breast Prosthesis After Surgery',
      excerpt: 'Everything you need to know about selecting the perfect breast form for comfort and confidence.',
      category: 'Products',
      readTime: '6 min read',
      image: '💝',
    },
    {
      id: 3,
      slug: 'chemotherapy-port-care-tips',
      title: 'Essential Chemotherapy Port Care: Tips from Experts',
      excerpt: 'Doctor-approved tips for keeping your chemo port clean, comfortable, and protected.',
      category: 'Tips',
      readTime: '5 min read',
      image: '💊',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Blog & Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Helpful <span className="text-gradient-teal">Resources</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group card-content overflow-hidden"
            >
              {/* Image Area */}
              <div className="h-48 bg-gradient-to-br from-teal-50 to-cream-100 flex items-center justify-center relative overflow-hidden">
                <span className="text-6xl transition-transform group-hover:scale-110 duration-300">
                  {post.image}
                </span>
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Read Time */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Read More Link */}
                <span className="inline-flex items-center gap-1 text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
