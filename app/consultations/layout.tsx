import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wig & Scarf Consultation | Nuvanaah',
  description: 'Book a private wig or scarf consultation with our care advisors — available online via WhatsApp for customers across India.',
  alternates: {
    canonical: 'https://www.nuvanaah.com/consultations',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nuvanaah.com/consultations',
    title: 'Wig & Scarf Consultation | Nuvanaah',
    description: 'Book a private wig or scarf consultation with our care advisors — available online via WhatsApp for customers across India.',
    siteName: 'Nuvanaah',
    images: [{ url: 'https://www.nuvanaah.com/images/support-consultation.png', width: 1200, height: 630, alt: 'Nuvanaah Care Consultation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wig & Scarf Consultation | Nuvanaah',
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
