'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Flower } from 'lucide-react'


const posts = [
  {
    id: '1',
    slug: 'mastectomy-recovery-timeline',
    title: 'Mastectomy Recovery: A Complete Timeline',
    excerpt: 'Detailed mastectomy recovery timeline week-by-week. Learn what to expect after breast cancer surgery, products that help, when to call doctor.',
    category: 'Post-Surgery Care',
    image: '/images/blog/bamboo-cotton.png'
  },
  {
    id: '2',
    slug: 'choosing-prosthesis',
    title: 'How to Choose the Right Breast Prosthesis',
    excerpt: 'A comprehensive guide to finding comfort and confidence after surgery. How to pick the best fit for your body and lifestyle.',
    category: 'Shopping Guide',
    image: '/images/blog/silicone-prosthesis.png'
  },
  {
    id: '3',
    slug: 'managing-chemo-side-effects',
    title: 'Managing Chemo Side Effects on Your Skin',
    excerpt: 'A gentle guide to safe and soothing skincare routines during chemotherapy.',
    category: 'Self-Care',
    image: '/images/blog/applying-lotion.png'
  },
  {
    id: '4',
    slug: 'hair-loss-solutions',
    title: 'Navigating Hair Loss',
    excerpt: 'Embracing change with elegance and dignity through curated headwear and wigs.',
    category: 'Identity',
    image: '/images/blog/dark-wig.png'
  },
  {
    id: '5',
    slug: 'lymphedema-management',
    title: 'Understanding and Managing Lymphedema',
    excerpt: 'Comprehensive strategies for managing lymphedema after breast cancer surgery. Early detection and treatment options.',
    category: 'Health',
    image: '/images/blog/compression-sleeve.png'
  }
]

export default function BlogPage() {
  return (
    <main className="w-full">
      {/* Hero Header */}
      <section className="relative w-full aspect-[4/3] md:aspect-[16/9] max-h-[80vh] overflow-hidden">
        <Image 
          alt="Two Indian women of different generations embracing warmly" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="/images/blog/embracing-women.png" 
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/40 to-transparent flex flex-col justify-end px-4 md:px-8 pb-16 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-center mx-auto space-y-4">
            <h1 className="font-serif text-4xl md:text-6xl text-white">The Nuvaanah Journal</h1>
            <p className="font-sans text-lg md:text-xl text-cream-50">Stories, guidance, and quiet reassurance for your healing journey.</p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 rounded-xl overflow-hidden border border-gray-200">
            <Link href="/blog/mental-wellness-cancer">
              <Image 
                alt="Sunlit bedroom with soft linen sheets and a journal" 
                className="w-full h-auto object-cover aspect-[1.75] hover:scale-105 transition-transform duration-700 ease-out" 
                src="/images/blog/sunlit-bedroom.png" 
                width={800}
                height={450}
              />
            </Link>
          </div>
          <div className="md:col-span-5 md:pl-8 space-y-6 mt-8 md:mt-0 flex flex-col items-start">
            <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 font-semibold text-xs rounded-full uppercase tracking-wider">Featured</span>
            <h2 className="font-serif text-3xl md:text-4xl text-teal-900">Finding Quiet Strength During Treatment</h2>
            <p className="font-sans text-gray-600 leading-relaxed">An exploration of resilience, shared experiences, and the profound comfort found in intergenerational bonds during challenging times.</p>
            <Link className="inline-flex items-center justify-center bg-teal-700 text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-teal-800 transition-colors" href="/blog/mental-wellness-cancer">
                Read the Story
            </Link>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 md:py-24 bg-cream-50 border-t border-gray-100">
        <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
          <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
            <h3 className="font-serif text-3xl text-teal-900">Recent Articles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group h-full border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="aspect-[1.37] overflow-hidden relative">
                    <Image 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                      src={post.image}
                      fill
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 font-semibold text-[10px] rounded-full uppercase tracking-wider">{post.category}</span>
                    <h4 className="font-serif text-xl text-teal-900">{post.title}</h4>
                    <p className="font-sans text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-8 text-center border-t border-gray-100">
        <div className="max-w-xl mx-auto space-y-6">
          <Flower className="text-gold-500 w-12 h-12 mx-auto" strokeWidth={1.5} />
          <h3 className="font-serif text-3xl text-teal-900">Subscribe for weekly support</h3>
          <p className="font-sans text-gray-600">Receive gentle guidance, recovery stories, and product curations delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-grow bg-gray-50 border-b border-gray-300 focus:border-teal-500 focus:ring-0 focus:outline-none px-4 py-3 font-sans text-gray-900 placeholder:text-gray-400 transition-colors" placeholder="Your email address" type="email" required />
            <button className="bg-teal-700 text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-teal-800 transition-colors shrink-0" type="submit">
                Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}


