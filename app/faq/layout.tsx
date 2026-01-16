import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Cancer Care Products India | Nuvanaah Support',
  description: 'Frequently asked questions about cancer care products, mastectomy bras, chemotherapy accessories. Free consultations available. Shipping, returns, sizing help. India-wide support.',
  keywords: ['cancer care FAQ', 'mastectomy bra questions', 'chemotherapy products help', 'Nuvanaah support India'],
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
