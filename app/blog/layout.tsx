import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancer Care Blog India | Recovery Tips, Product Guides | Nuvanaah',
  description: 'Expert articles on mastectomy recovery, chemotherapy care, product guides, and wellness tips for cancer patients in India. Free educational resources from Nuvanaah.',
  keywords: ['cancer care blog', 'mastectomy recovery', 'chemotherapy tips', 'oncology resources India'],
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
