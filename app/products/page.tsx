import { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: "All Products — Nuvanaah",
  description: "Recovery bras, breast forms, compression sleeves, hair scarves, wigs, and wellness accessories — thoughtfully designed for women in recovery.",
  alternates: {
    canonical: 'https://www.nuvanaah.com/products'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nuvanaah.com/products',
    title: "All Products — Nuvanaah",
    description: "Recovery bras, breast forms, compression sleeves, hair scarves, wigs, and wellness accessories — thoughtfully designed for women in recovery.",
    siteName: 'Nuvanaah',
    images: [{ url: 'https://www.nuvanaah.com/images/about/hero-embrace.png', width: 1200, height: 630, alt: 'Nuvanaah Products' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "All Products — Nuvanaah",
    description: "Recovery bras, breast forms, compression sleeves, hair scarves, wigs, and wellness accessories for women in recovery.",
  },
}

export default function ProductsPage() {
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
        "name": "Products",
        "item": "https://www.nuvanaah.com/products"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={null}>
        <ProductsClient />
      </Suspense>
    </>
  )
}
