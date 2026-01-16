import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Wishlist | Nuvanaah',
    description: 'View and manage your saved products. Add items to your wishlist and purchase them later.',
}

export default function WishlistLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
