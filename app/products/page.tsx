import { Metadata } from 'next'
import { Suspense } from 'react'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: "All Products — Nuvanaah",
  description: "Recovery bras, breast forms, compression sleeves, hair scarves, wigs, and wellness accessories — thoughtfully designed for women in recovery.",
  alternates: {
    canonical: 'https://www.nuvanaah.com/products'
  }
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
