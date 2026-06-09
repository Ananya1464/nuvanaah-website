import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gift Ideas for Her Recovery Journey | Nuvanaah',
  description: 'Curated gift bundles designed for comfort, dignity, and healing during and after recovery. Show you care with Nuvanaah.',
  alternates: {
    canonical: 'https://www.nuvanaah.com/gifts',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.nuvanaah.com/gifts',
    title: 'Gift Ideas for Her Recovery Journey | Nuvanaah',
    description: 'Curated gift bundles designed for comfort, dignity, and healing during and after recovery. Show you care with Nuvanaah.',
    siteName: 'Nuvanaah',
    images: [{ url: 'https://www.nuvanaah.com/images/about/hero-embrace.png', width: 1200, height: 630, alt: 'Nuvanaah Gift Ideas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gift Ideas for Her Recovery Journey | Nuvanaah',
    description: 'Curated gift bundles for comfort, dignity, and healing during recovery.',
  },
}

export default function GiftsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
