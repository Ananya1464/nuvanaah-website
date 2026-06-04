import { Metadata } from 'next'
import HomePageClient from './HomePageClient'

export const metadata: Metadata = {
  title: "Nuvanaah — Care That Supports You Through Treatment",
  description: "Premium recovery and wellness products for women navigating breast cancer treatment and post-surgical recovery. Designed with warmth, dignity, and care.",
  alternates: {
    canonical: 'https://www.nuvanaah.com'
  }
}

const faqItems = [
  {
    q: 'How do I choose the right bra size after surgery?',
    a: 'We recommend measuring 6–8 weeks post-surgery. Our care team can guide you through a virtual fitting — book a free consultation for personalized sizing help.',
  },
  {
    q: 'Is the packaging really discreet?',
    a: 'Absolutely. All orders ship in plain, unbranded boxes with no product descriptions visible on the outside. Your privacy is our priority.',
  },
  {
    q: 'How do I care for my medical wig?',
    a: 'Wash gently with sulfate-free shampoo every 7–10 wears. Store on a wig stand when not in use. Detailed care instructions are included with every wig purchase.',
  },
  {
    q: 'Do you offer home consultations?',
    a: 'Yes — we offer both virtual and in-person consultations across major Indian cities. Book through our consultations page or WhatsApp us directly.',
  },
  {
    q: 'What is your return policy?',
    a: '30-day hassle-free returns on unworn items in original packaging. Wigs and intimate wear can be exchanged for sizing. No questions asked.',
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
      <HomePageClient faqItems={faqItems} />
    </>
  )
}
