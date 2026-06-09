import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProductPageClient from './ProductPageClient'
import ProductPageSkeleton from './ProductPageSkeleton'
import { getPublicProductBySlug, getPublicProducts } from '@/lib/products-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getPublicProducts().map(product => ({
    slug: product.slug || String(product.id),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getPublicProductBySlug(slug) || getPublicProducts().find(item => String(item.id) === slug)

  if (!product) {
    return { title: 'Product Not Found | Nuvanaah' }
  }

  const title = product.seoTitle || product.name
  const description = product.metaDescription || product.description?.substring(0, 160)

  return {
    title: `${title} | Nuvanaah`,
    description,
    openGraph: {
      title: product.ogTitle || title,
      description: product.ogDescription || description,
      url: 'https://www.nuvanaah.com',
      images: product.images?.[0]?.src ? [{ url: product.images[0].src }] : [],
    },
    alternates: {
      canonical: `https://www.nuvanaah.com/products/${product.slug}`,
    },
  }
}

export default async function ProductPageServer({ params }: Props) {
  const { slug } = await params
  const allProducts = getPublicProducts()
  const index = allProducts.findIndex(p => p.slug === slug || String(p.id) === slug)
  const product = allProducts[index]

  if (!product) notFound()

  const prevProduct = index > 0 ? allProducts[index - 1] : null
  const nextProduct = index < allProducts.length - 1 ? allProducts[index + 1] : null

  const prevNav = prevProduct ? { slug: prevProduct.slug || String(prevProduct.id), name: prevProduct.name, image: prevProduct.images?.[0]?.src } : null
  const nextNav = nextProduct ? { slug: nextProduct.slug || String(nextProduct.id), name: nextProduct.name, image: nextProduct.images?.[0]?.src } : null

  const productUrl = `https://www.nuvanaah.com/products/${product.slug || product.id}`
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.nuvanaah.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": product.categoryNav || product.categories?.[0]?.name || "Products",
        "item": `https://www.nuvanaah.com/collections/${product.categories?.[0]?.slug || 'all'}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": productUrl
      }
    ]
  }

  const availability = product.comingSoon
    ? "https://schema.org/PreOrder"
    : "https://schema.org/InStock"

  const offers: any = {
    "@type": "Offer",
    "availability": availability,
    "priceCurrency": "INR",
    "url": productUrl,
    "seller": { "@type": "Organization", "name": "Nuvanaah" }
  }

  if (product.id === 'dewleaf' || product.comingSoon) {
    delete offers.priceCurrency
  } else if (product.id === 'bloomcrown' || product.priceFrom) {
    offers["@type"] = "AggregateOffer"
    offers["lowPrice"] = product.price
    offers["priceCurrency"] = "INR"
  } else {
    offers["price"] = product.price
  }

  const productSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.metaDescription || product.description?.substring(0, 160),
    "image": product.images?.map((img: any) => img.src).filter(Boolean) || [],
    "url": productUrl,
    "sku": product.slug || String(product.id),
    "brand": {
      "@type": "Brand",
      "name": "Nuvanaah"
    },
    "offers": offers
  }

  if (product.categories?.[0]?.name) {
    productSchema["category"] = product.categories[0].name
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[8px] mb-[24px] text-[12px] text-[#7a6f6a] font-normal w-full">
        <Link href="/" className="text-[#7a6f6a] hover:text-[#884d53] transition-colors">Home</Link>
        <span className="px-[8px] text-[#1c1c18]/25">/</span>
        {product.categoryNav && product.categories?.[0] && (
          <>
            <Link href={`/collections/${product.categories[0].slug}`} className="text-[#7a6f6a] hover:text-[#884d53] transition-colors">
              {product.categoryNav}
            </Link>
            <span className="px-[8px] text-[#1c1c18]/25">/</span>
          </>
        )}
        <span className="text-[#1c1c18] font-medium">{product.name}</span>
      </div>
      <Suspense fallback={<ProductPageSkeleton />}>
        <ProductPageClient product={product} prevProduct={prevNav} nextProduct={nextNav} />
      </Suspense>
    </>
  )
}