import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Checkout — Nuvanaah',
  description: 'Complete your order securely. Safe online payment available.',
  robots: 'noindex',
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
