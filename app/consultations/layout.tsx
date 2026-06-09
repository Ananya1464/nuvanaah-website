import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Consultations | Nuvanaah',
  description: 'Book a free, private consultation with our care specialists to find the perfect products for your recovery journey.',
  alternates: {
    canonical: 'https://www.nuvanaah.com/consultations',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nuvanaah.com/consultations',
    title: 'Free Consultations | Nuvanaah',
    description: 'Book a free, private consultation with our care specialists to find the perfect products for your recovery journey.',
    siteName: 'Nuvanaah',
    images: [{ url: 'https://www.nuvanaah.com/images/support-consultation.png', width: 1200, height: 630, alt: 'Nuvanaah Care Consultation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Consultations | Nuvanaah',
    description: 'Book a free, private consultation with our care specialists.',
  },
}

export default function ConsultationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
