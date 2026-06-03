import { Metadata } from 'next'
import { getProductBySlug, getProductById } from '@/lib/products-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const product = getProductBySlug(resolvedParams.slug) || getProductById(resolvedParams.slug)

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
      images: product.images?.[0]?.src ? [{ url: product.images[0].src }] : [],
    },
    alternates: {
      canonical: `https://nuvanaah.com/products/${product.slug}`,
    },
  }
}

function buildJsonLd(product: NonNullable<ReturnType<typeof getProductBySlug>>) {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.metaDescription || product.description,
    image: product.images?.map(img => img.src) || [],
    brand: {
      '@type': 'Brand',
      name: 'Nuvanaah',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.priceOnRequest ? undefined : Number(product.price),
      availability: product.stock_status === 'instock'
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: `https://nuvanaah.com/products/${product.slug}`,
    },
  }

  const faqSchema = product.faqs && product.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  } : null

  return { productSchema, faqSchema }
}

export default async function ProductLayout({ children, params }: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const product = getProductBySlug(resolvedParams.slug) || getProductById(resolvedParams.slug)

  const jsonLd = product ? buildJsonLd(product) : null

  return (
    <>
      {jsonLd && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.productSchema) }}
          />
          {jsonLd.faqSchema && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd.faqSchema) }}
            />
          )}
        </>
      )}
      {children}
    </>
  )
}
