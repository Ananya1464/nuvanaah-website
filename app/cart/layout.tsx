import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Bag — Nuvanaah',
  description: 'Review the items in your bag and proceed to checkout.',
  robots: 'noindex',
}

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
