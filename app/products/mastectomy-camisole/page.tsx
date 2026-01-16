import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Mastectomy Camisole India | Drain Pockets | ₹2499 | Nuvanaah',
  description: 'Post-mastectomy camisole with built-in drain pockets and prosthesis support. Cotton fabric, comfortable fit. Doctor recommended. Free shipping.',
  keywords: ['mastectomy camisole', 'post surgery camisole', 'drain pocket camisole', 'mastectomy top', 'recovery wear'],
}

const product: ProductData = {
  id: 'mastectomy-camisole',
  name: 'Post-Mastectomy Camisole',
  tagline: 'all-in-one recovery wear',
  price: 2499,
  comparePrice: 3199,
  description: 'All-in-one post-surgery camisole featuring built-in drain pockets and prosthesis support. Made from 100% cotton for maximum comfort during recovery.',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Nude', value: '#E8D5C4' },
  ],
  stock: 14,
  rating: 4.8,
  reviewCount: 67,
  category: 'Mastectomy Products',
  features: [
    { title: 'Built-in drain pockets', desc: 'Securely holds surgical drains' },
    { title: 'Prosthesis support', desc: 'Internal pockets for breast forms' },
    { title: '100% Cotton fabric', desc: 'Breathable and gentle' },
    { title: 'Front closure', desc: 'Easy dressing without arm strain' },
    { title: 'Wide straps', desc: 'Comfortable, no digging' },
    { title: 'Adjustable fit', desc: 'Hook adjusters for custom fit' },
  ],
  specifications: [
    { label: 'Material', value: '100% Cotton' },
    { label: 'Drain Pockets', value: '4 removable pockets' },
    { label: 'Sizes', value: 'S, M, L, XL, XXL' },
    { label: 'Colors', value: 'White, Nude' },
    { label: 'Closure', value: 'Front hook & eye' },
    { label: 'Care', value: 'Machine wash gentle' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Post-mastectomy recovery',
    'Lumpectomy patients',
    'Surgical drain users',
    'Hospital stays',
    'Home recovery',
  ],
}

export default function MastectomyCamisolePage() {
  return <ProductDetailClient product={product} />
}
