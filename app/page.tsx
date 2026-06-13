import { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: "Nuvanaah — Care That Supports You Through Treatment",
  description: "Premium recovery and wellness products for women navigating cancer treatment and post-surgical recovery. Designed with warmth, dignity, and care.",
  alternates: {
    canonical: 'https://www.nuvanaah.com'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nuvanaah.com',
    title: "Nuvanaah — Care That Supports You Through Treatment",
    description: "Premium recovery and wellness products for women navigating cancer treatment and post-surgical recovery. Designed with warmth, dignity, and care.",
    siteName: 'Nuvanaah',
    images: [{ url: 'https://www.nuvanaah.com/images/about/hero-embrace.png', width: 1200, height: 630, alt: 'Nuvanaah — Cancer Recovery Products' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nuvanaah — Care That Supports You Through Treatment",
    description: "Premium recovery and wellness products for women navigating cancer treatment.",
  },
}

const faqItems = [
  {
    q: 'How do I choose the right bra size after surgery?',
    a: 'We recommend measuring 6–8 weeks post-surgery. Our care team can guide you through a virtual fitting — WhatsApp us for personalized sizing help.',
  },
  {
    q: 'How do I care for my medical wig?',
    a: 'Wash gently with sulfate-free shampoo every 7–10 wears. Store on a wig stand when not in use. Detailed care instructions are included with every wig purchase.',
  },
]

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nuvanaah",
    "url": "https://www.nuvanaah.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9076041779",
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
      <HomePageClient faqItems={faqItems} />
    </>
  )
}
