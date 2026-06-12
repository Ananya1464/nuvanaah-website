import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Cancer Care Products India | Nuvanaah',
  description: 'Frequently asked questions about cancer care products, mastectomy bras, chemotherapy accessories. Shipping, returns, sizing help. Worldwide support.',
  keywords: ['cancer care FAQ', 'mastectomy bra questions', 'chemotherapy products help', 'Nuvanaah support India'],
  alternates: {
    canonical: 'https://www.nuvanaah.com/faq',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nuvanaah.com/faq',
    title: 'FAQ — Cancer Care Products India | Nuvanaah',
    description: 'Frequently asked questions about cancer care products, mastectomy bras, chemotherapy accessories. Shipping, returns, sizing help.',
    siteName: 'Nuvanaah',
    images: [{ url: 'https://www.nuvanaah.com/images/about/hero-embrace.png', width: 1200, height: 630, alt: 'Nuvanaah FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Cancer Care Products | Nuvanaah',
    description: 'Answers about mastectomy bras, chemo accessories, sizing, shipping, and returns.',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
