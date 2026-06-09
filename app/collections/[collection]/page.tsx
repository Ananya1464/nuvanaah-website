import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import {
  getProductsByCategory,
  categoryDisplayNames,
  categoryDescriptions,
} from '@/lib/products-data'
import ProductCard from '@/components/products/ProductCard'

// ─── VALID COLLECTION SLUGS ──────────────────────────────────────────────────
const VALID_COLLECTIONS = ['recovery-body-support', 'hair-confidence', 'everyday-wellness']

// ─── SEO ─────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return VALID_COLLECTIONS.map(collection => ({ collection }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ collection: string }> }
): Promise<Metadata> {
  const { collection } = await params
  const name = categoryDisplayNames[collection] || 'Products'
  return {
    title: `${name} — Comfort & Recovery Products | Nuvanaah`,
    description: `Shop ${name} products at Nuvanaah. Designed for women in recovery — soft, breathable, and thoughtfully made for everyday comfort.`,
    alternates: { canonical: `https://nuvanaah.com/collections/${collection}` },
    openGraph: {
      title: `${name} | Nuvanaah`,
      description: categoryDescriptions[collection] || '',
    },
  }
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default async function CollectionPage(
  { params }: { params: Promise<{ collection: string }> }
) {
  const { collection } = await params

  if (!VALID_COLLECTIONS.includes(collection)) notFound()

  const collectionProducts = getProductsByCategory(collection)
  const name        = categoryDisplayNames[collection]
  const description = categoryDescriptions[collection]

  // Pill colour per collection
  const accentMap: Record<string, string> = {
    'recovery-body-support': '#884d53',
    'hair-confidence':       '#4a6fa5',
    'everyday-wellness':     '#446651',
  }
  const accent = accentMap[collection] || '#884d53'

  return (
    <div className="min-h-screen bg-[#faf7f2]">

      {/* ── HEADER ── */}
      <div className="bg-gradient-to-b from-[#2c1f1a] to-[#3a2820] text-white py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-[12px] text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">{name}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
            {name}
          </h1>
          {description && (
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-light">{description}</p>
          )}
          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/80">
              {collectionProducts.length} {collectionProducts.length === 1 ? 'product' : 'products'}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/80">
              Free shipping in India
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* ── PRODUCTS GRID ── */}
        {collectionProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {collectionProducts.map(product => (
              <ProductCard key={String(product.id)} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#ded0bf] rounded-2xl p-12 text-center mb-20 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1c1c18] mb-4">Coming Soon</h2>
            <p className="text-[#6a5448] mb-8 max-w-md mx-auto">
              We are adding products to this collection. Check back soon or browse all products.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#884d53] hover:bg-[#6c363c] text-white px-6 py-3 rounded-full font-medium transition-all shadow-sm"
            >
              Browse All Products
            </Link>
          </div>
        )}

        {/* ── CONSULTATION CTA ── */}
        <div className="bg-gradient-to-br from-[#f2e5e5] to-[#ede0d4] border border-[#e8d1d1] rounded-3xl p-8 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <Phone className="w-10 h-10 mx-auto mb-6 opacity-70" style={{ color: accent }} />
            <h2 className="text-3xl font-semibold text-[#1c1c18] mb-4">
              Not sure which product is right for you?
            </h2>
            <p className="text-[#524344] text-lg mb-10 max-w-xl mx-auto font-light">
              Our care specialists can guide you — privately, warmly, and without pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919819461612"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                WhatsApp Us
              </a>
              <Link
                href="/consultations"
                className="inline-flex items-center justify-center gap-2 bg-[#884d53] hover:bg-[#6c363c] text-white px-8 py-4 rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
