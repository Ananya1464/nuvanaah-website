import type { Metadata } from 'next'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cancer Care Blog India | Recovery Tips, Product Guides | Nuvanaah',
  description: 'Expert articles on mastectomy recovery, chemotherapy care, product guides, and wellness tips for cancer patients in India. Free educational resources from Nuvanaah.',
  alternates: {
    canonical: 'https://www.nuvanaah.com/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nuvanaah.com/blog',
    title: 'Cancer Care Blog India | Recovery Tips, Product Guides | Nuvanaah',
    description: 'Expert articles on mastectomy recovery, chemotherapy care, product guides, and wellness tips for cancer patients in India.',
    siteName: 'Nuvanaah',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="bg-amber-50 border-b border-amber-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>For informational purposes only.</strong> This content is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your doctor or oncologist before making health-related decisions.
          </p>
        </div>
      </div>
      {children}
    </>
  )
}
