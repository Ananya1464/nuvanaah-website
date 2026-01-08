import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nuvanaah - Your Crown of Confidence',
  description: 'Premium medical-grade wigs and hair care solutions for cancer patients. Experience confidence with our 45+ years of expertise.',
  keywords: 'medical wigs, cancer wigs, hair loss solutions, premium wigs',
  authors: [{ name: 'Nuvanaah' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nuvanaah.com',
    title: 'Nuvanaah - Your Crown of Confidence',
    description: 'Premium medical-grade wigs and hair care solutions',
    images: [
      {
        url: '/images/logo.png',
        width: 400,
        height: 400,
        alt: 'Nuvanaah Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-cream-50">
        {children}
      </body>
    </html>
  )
}
