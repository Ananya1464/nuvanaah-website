'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, ArrowRight, Search, Clock, ShoppingBag } from 'lucide-react'

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime: number
  featured?: boolean
  image?: string
}

const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'mastectomy-recovery-timeline',
    title: 'Complete Mastectomy Recovery Timeline: Week-by-Week Guide + Products You\'ll Need',
    excerpt: 'Detailed mastectomy recovery timeline week-by-week. Learn what to expect after breast cancer surgery, products that help, when to call doctor.',
    author: 'Dr. Anjali Sharma',
    date: 'January 10, 2026',
    category: 'Post-Surgery Care',
    readTime: 12,
    featured: true,
    image: '/images/blog/mastectomy-timeline.png'
  },
  {
    id: '2',
    slug: 'choosing-prosthesis',
    title: 'Choosing the Right Breast Prosthesis: Complete Guide for Indian Women',
    excerpt: 'A comprehensive guide to finding comfort and confidence after surgery. How to pick the best fit for your body and lifestyle.',
    author: 'Anjali Gupta',
    date: 'December 28, 2025',
    category: 'Shopping Guide',
    readTime: 8,
    image: '/images/blog/choosing-prosthesis.png'
  },
  {
    id: '3',
    slug: 'managing-chemo-side-effects',
    title: 'Managing Chemotherapy Side Effects: Practical Tips That Actually Work',
    excerpt: 'Real advice from cancer patients and oncologists on managing nausea, fatigue, hair loss, and other chemo side effects.',
    author: 'Dr. Meera Patel',
    date: 'December 20, 2025',
    category: 'Wellness',
    readTime: 10,
    image: '/images/blog/managing-chemo.png'
  },
  {
    id: '4',
    slug: 'hair-loss-solutions',
    title: 'Hair Loss During Chemo: Wigs, Scarves & Confidence Tips',
    excerpt: 'Everything you need to know about caring for your wig, styling headscarves, and feeling confident during treatment.',
    author: 'Neha Singh',
    date: 'December 10, 2025',
    category: 'Beauty',
    readTime: 7,
    image: '/images/blog/hair-loss.png'
  },
  {
    id: '5',
    slug: 'lymphedema-management',
    title: 'Living Well with Lymphedema: Prevention, Management & Treatment',
    excerpt: 'Comprehensive strategies for managing lymphedema after breast cancer surgery. Early detection and treatment options.',
    author: 'Dr. Vikram Das',
    date: 'November 30, 2025',
    category: 'Health',
    readTime: 9,
    image: '/images/blog/lymphedema.png'
  },
  {
    id: '6',
    slug: 'mental-wellness-cancer',
    title: 'Mental Health During Cancer Treatment: You\'re Not Alone',
    excerpt: 'Addressing the emotional aspects of cancer care. Practical tips for anxiety, depression, and finding support.',
    author: 'Dr. Anjali Nair',
    date: 'November 15, 2025',
    category: 'Mental Health',
    readTime: 11,
    image: '/images/blog/mental-wellness.png'
  },
]

const categories = ['All', 'Post-Surgery Care', 'Shopping Guide', 'Wellness', 'Beauty', 'Health', 'Mental Health']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = posts.find(p => p.featured)
  const regularPosts = filteredPosts.filter(p => !p.featured || selectedCategory !== 'All')

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
              Cancer Care Resources
            </span>
            <h1 className="text-4xl lg:text-5xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Journey <span className="italic text-gold-300">Guides</span>
            </h1>
            <p className="text-xl text-teal-100">
              Compassionate, practical advice for every step of your cancer care journey. Written by doctors, patients, and caregivers.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-1 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <div className="mb-16">
            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-4">Featured Article</h2>
            <Link href={`/blog/${featuredPost.slug}`}>
              <article className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto bg-gray-100 flex items-center justify-center overflow-hidden">
                    {featuredPost.image ? (
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <ShoppingBag className="w-24 h-24 text-teal-300 relative z-10" />
                    )}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-gold-400 text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4 group-hover:text-teal-600 transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                      Read Full Guide <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-semibold text-gray-900">
            {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
            <span className="text-gray-400 font-normal ml-2">({filteredPosts.length})</span>
          </h2>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'All' && !searchQuery ? regularPosts : filteredPosts).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-card hover:border-teal-200 transition-all">
                  {/* Image */}
                  <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <ShoppingBag className="w-16 h-16 text-teal-200 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    )}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[100px]">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date.split(',')[0]}</span>
                      </div>
                      <span className="ml-auto">{post.readTime} min</span>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 flex items-center gap-2 text-teal-600 font-medium text-sm group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}
              className="text-teal-600 font-semibold hover:text-teal-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Get These Guides in Your Inbox
          </h2>
          <p className="text-teal-100 mb-8">
            New articles and wellness tips delivered directly to you every week.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="bg-gold-400 hover:bg-gold-500 text-gray-900 px-6 py-3 rounded-xl font-semibold transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
