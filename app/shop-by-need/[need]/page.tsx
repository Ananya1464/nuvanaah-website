import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getProductsByNeed } from '@/lib/products-data'
import ProductCard from '@/components/products/ProductCard'

// ─── NEED DEFINITIONS ─────────────────────────────────────────────────────────
const needMeta: Record<string, {
  title:       string
  heading:     string
  sub:         string
  description: string
  accent:      string
  bg:          string
}> = {
  'after-surgery': {
    title:       'After Surgery — Recovery Products | Nuvanaah',
    heading:     'After Surgery',
    sub:         'Comfort and support for your recovery journey',
    description: 'These products are chosen for the weeks immediately after surgery — designed to reduce discomfort, simplify daily care, and let you focus entirely on healing.',
    accent:      '#884d53',
    bg:          'from-[#2c1f1a] to-[#3a2820]',
  },
  'hair-loss': {
    title:       'Managing Hair Loss — Coverage & Confidence | Nuvanaah',
    heading:     'Managing Hair Loss',
    sub:         'Feel like yourself during treatment',
    description: 'These products are chosen for women experiencing hair loss during or after treatment — offering coverage, confidence, and the ability to feel like yourself on ordinary days.',
    accent:      '#4a6fa5',
    bg:          'from-[#1a202c] to-[#2d3748]',
  },
  'daily-comfort': {
    title:       'Daily Comfort — Everyday Wellness Products | Nuvanaah',
    heading:     'Daily Comfort',
    sub:         'Gentle products for sensitive skin and daily care',
    description: 'These products are designed for the everyday — soft, absorbent, and gentle enough for skin that needs a little more care. For mornings, evenings, and the small moments in between.',
    accent:      '#446651',
    bg:          'from-[#1a2e23] to-[#243b2d]',
  },
}

const VALID_NEEDS = Object.keys(needMeta)

// ─── SEO ─────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return VALID_NEEDS.map(need => ({ need }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ need: string }> }
): Promise<Metadata> {
  const { need } = await params
  const meta = needMeta[need]
  if (!meta) return {}
  return {
    title:       meta.title,
    description: meta.sub,
    alternates:  { canonical: `https://nuvanaah.com/shop-by-need/${need}` },
  }
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default async function ShopByNeedPage(
  { params }: { params: Promise<{ need: string }> }
) {
  const { need } = await params

  if (!VALID_NEEDS.includes(need)) notFound()

  const meta     = needMeta[need]
  const needProducts = getProductsByNeed(need)

  return (
    <div className="min-h-screen bg-[#faf7f2]">

      {/* ── HEADER ── */}
      <div className={`bg-gradient-to-b ${meta.bg} text-white py-20 sm:py-28 px-4`}>
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#shop-by-need"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[13px] mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Shop by your situation
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
            {meta.heading}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-light">
            {meta.description}
          </p>
        </div>
      </div>

      {/* ── PRODUCTS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {needProducts.length > 0 ? (
          <>
            <p className="text-[#524344] mb-8">
              <span className="font-semibold text-[#1c1c18]">{needProducts.length}</span> products selected for this situation
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
              {needProducts.map(product => (
                <ProductCard key={String(product.id)} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white border border-[#ded0bf] rounded-2xl p-12 text-center mb-20">
            <p className="text-[#6a5448] mb-6">No products available for this category yet.</p>
            <Link href="/products" className="inline-flex items-center gap-2 bg-[#884d53] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6c363c] transition-colors">
              Browse All Products
            </Link>
          </div>
        )}

        {/* ── CROSS-NAVIGATION ── */}
        <div className="border-t border-[#2c1f1a]/10 pt-12">
          <p className="text-center text-[#524344] mb-6">Also looking for something else?</p>
          <div className="flex flex-wrap justify-center gap-3">
            {VALID_NEEDS.filter(n => n !== need).map(n => (
              <Link
                key={n}
                href={`/shop-by-need/${n}`}
                className="rounded-full border border-[#2c1f1a]/20 px-5 py-2.5 text-[13px] font-medium text-[#1c1c18] hover:border-[#884d53] hover:text-[#884d53] transition-colors"
              >
                {needMeta[n].heading}
              </Link>
            ))}
            <Link
              href="/products/flowsleeve"
              className="rounded-full border border-[#2c1f1a]/20 px-5 py-2.5 text-[13px] font-medium text-[#1c1c18] hover:border-[#884d53] hover:text-[#884d53] transition-colors"
            >
              Lymphedema Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
