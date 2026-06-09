import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order Confirmed — Nuvanaah',
  description: 'Your order has been placed. Thank you for shopping with Nuvanaah.',
  robots: 'noindex',
}

export default function ConfirmationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
