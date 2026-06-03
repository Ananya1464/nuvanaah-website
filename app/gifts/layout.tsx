import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gift Ideas for Her Journey | Nuvanaah',
  description: 'Curated gift bundles designed for comfort, dignity, and healing during and after recovery. Show you care with Nuvanaah.',
  alternates: {
    canonical: '/gifts',
  }
}

export default function GiftsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
