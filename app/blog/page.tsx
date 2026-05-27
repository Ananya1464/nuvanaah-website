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
      <section className="relative w-full aspect-[4/3] md:aspect-[16/9] max-h-[80vh] overflow-hidden fade-in-up visible">
        <Image 
          alt="Young Indian woman sitting peacefully by a sunlit window" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="/images/blog/young-woman-blog.png" 
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent flex flex-col justify-end px-4 md:px-8 pb-16 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-center mx-auto space-y-4">
            <h1 className="font-display text-4xl md:text-6xl text-white font-bold">The Nuvanaah Journal</h1>
            <p className="font-ui text-lg md:text-xl text-white/80">Stories, guidance, and quiet reassurance for your healing journey.</p>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full fade-in-up visible">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 rounded-card overflow-hidden border border-border">
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
            <span className="inline-block px-3 py-1 bg-secondary-container text-secondary font-bold text-[10px] rounded-full uppercase tracking-widest">Featured</span>
            <h2 className="font-display text-3xl md:text-4xl text-primary-700 font-bold leading-tight">Finding Quiet Strength During Treatment</h2>
            <p className="font-ui text-text-secondary leading-relaxed">An exploration of resilience, shared experiences, and the profound comfort found in intergenerational bonds during challenging times.</p>
            <Link className="inline-flex items-center justify-center bg-primary-600 text-white font-semibold text-[14px] px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all" href="/blog/mental-wellness-cancer">
                Read the Story
            </Link>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-16 md:py-24 bg-surface border-t border-border">
        <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-border pb-6 gap-6 fade-in-up visible">
            <h3 className="font-display text-3xl font-bold text-dark">Recent Articles</h3>
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Post-Surgery Care', 'Self-Care', 'Identity', 'Health', 'Shopping Guide'].map((cat, i) => (
                <button key={cat} className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${i === 0 ? 'bg-primary-600 text-white' : 'bg-white border border-border text-text hover:border-primary-light hover:text-primary-600'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="fade-in-up visible">
                <article className="group h-full border border-border rounded-card overflow-hidden hover:shadow-card-hover transition-all duration-300 bg-white hover:-translate-y-1">
                  <div className="aspect-[1.37] overflow-hidden relative">
                    <Image 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                      src={post.image}
                      fill
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <span className="inline-block px-3 py-1 bg-surface-low text-primary-600 font-bold text-[10px] rounded-full uppercase tracking-widest">{post.category}</span>
                    <h4 className="font-display text-xl font-bold text-dark">{post.title}</h4>
                    <p className="font-ui text-text-secondary leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-surface-low py-16 md:py-24 px-4 md:px-8 text-center border-t border-border fade-in-up visible">
        <div className="max-w-xl mx-auto space-y-6">
          <Flower className="text-primary-600 w-12 h-12 mx-auto" strokeWidth={1} />
          <h3 className="font-display text-3xl font-bold text-dark">Subscribe for weekly support</h3>
          <p className="font-ui text-text-secondary">Receive gentle guidance, recovery stories, and product curations delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-grow bg-white border border-border focus:border-primary-600 focus:ring-1 focus:ring-primary-600 rounded-full px-6 py-4 font-ui text-text placeholder:text-text-muted transition-colors" placeholder="Your email address" type="email" required />
            <button className="bg-primary-600 text-white font-semibold text-[14px] px-8 py-4 rounded-full hover:bg-primary-700 transition-colors shrink-0" type="submit">
                Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}


