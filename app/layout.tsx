import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/lib/cart-context'
import { WishlistProvider } from '@/lib/wishlist-context'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nuvanaah.com'),
  title: 'Cancer Accessories India | Mastectomy Bras, Chemo Shirts | Nuvanaah',
  description:
    'Premium cancer care accessories for patients in India. Mastectomy bras, breast prosthesis, chemo port shirts, lymphedema sleeves. Doctor endorsed. 45+ years trusted. Free shipping. COD available.',
  keywords: [
    'cancer accessories India',
    'mastectomy products India',
    'chemotherapy accessories',
    'oncology care products',
    'post surgery care',
    'mastectomy',
    'cancer care',
    'chemotherapy',
    'breast prosthesis',
    'lymphedema',
    'post-surgery',
    'breast cancer',
  ],
  authors: [{ name: 'Nuvanaah Team' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://nuvanaah.com',
    title: 'Cancer Accessories India | Mastectomy Bras, Chemo Shirts | Nuvanaah',
    description:
      'Premium cancer care accessories for patients in India. Mastectomy bras, breast prosthesis, chemo port shirts. Doctor endorsed. Free shipping. COD available.',
    siteName: 'Nuvanaah',
    images: [
      {
        url: 'https://nuvanaah.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nuvanaah - Cancer Care Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancer Accessories India | Mastectomy Bras | Nuvanaah',
    description: 'Premium cancer care accessories. Doctor endorsed. 45+ years trusted. Free shipping India.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#5B9FA3" />
      </head>
      <body className="flex flex-col min-h-screen bg-cream-50 text-gray-800">
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}
