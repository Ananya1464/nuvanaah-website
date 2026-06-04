import { Metadata } from 'next'
import HomePageClient, { faqItems } from './HomePageClient'

export const metadata: Metadata = {
  title: "Nuvanaah — Care That Supports You Through Treatment",
  description: "Premium recovery and wellness products for women navigating breast cancer treatment and post-surgical recovery. Designed with warmth, dignity, and care.",
  alternates: {
    canonical: 'https://www.nuvanaah.com'
  }
}

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nuvanaah",
    "url": "https://www.nuvanaah.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98194-61612",
      "contactType": "customer support",
      "availableLanguage": ["English", "Hindi"]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient />
    </>
  )
}
