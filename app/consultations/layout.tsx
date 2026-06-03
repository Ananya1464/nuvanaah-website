import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Consultations | Nuvanaah',
  description: 'Book a free, private consultation with our care specialists to find the perfect products for your recovery journey.',
  alternates: {
    canonical: '/consultations',
  }
}

export default function ConsultationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
