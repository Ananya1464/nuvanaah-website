import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Chemo Port Shirt India | Dual Zipper | ₹1999 | Nuvanaah',
  description: 'Easy-access chemotherapy port shirt with dual zipper design. Bamboo fabric, discreet port access for chemo patients. Doctor recommended. Free shipping.',
  keywords: ['chemo port shirt', 'chemotherapy shirt', 'port access shirt', 'chemo clothing India', 'cancer treatment shirt'],
}

const product: ProductData = {
  id: 'chemo-port-shirt',
  name: 'ChemoPort Access Shirt',
  tagline: 'easy port access for chemo',
  price: 1999,
  comparePrice: 2499,
  description: 'Specially designed shirt with discreet dual zipper access for chemotherapy ports. Made from ultra-soft bamboo fabric that\'s gentle on sensitive skin during treatment.',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Navy', value: '#1E3A5F' },
    { name: 'Grey', value: '#6B7280' },
  ],
  stock: 20,
  rating: 4.7,
  reviewCount: 156,
  category: 'Chemotherapy Accessories',
  features: [
    { title: 'Dual zipper access', desc: 'Quick, easy port access on both sides' },
    { title: 'Bamboo fabric', desc: 'Ultra-soft, hypoallergenic material' },
    { title: 'Discreet design', desc: 'Looks like regular casual shirt' },
    { title: 'Temperature regulating', desc: 'Keeps you comfortable during treatment' },
    { title: 'Easy care', desc: 'Machine washable, quick dry' },
    { title: 'Stylish look', desc: 'Feel confident during appointments' },
  ],
  specifications: [
    { label: 'Material', value: '70% Bamboo, 30% Cotton' },
    { label: 'Sizes', value: 'S, M, L, XL, XXL' },
    { label: 'Colors', value: 'White, Navy, Grey' },
    { label: 'Zipper Type', value: 'Hidden dual side zippers' },
    { label: 'Care', value: 'Machine wash cold' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Chemotherapy patients',
    'Port users',
    'PICC line users',
    'Dialysis patients',
    'Regular check-ups',
  ],
}

export default function ChemoPortShirtPage() {
  return <ProductDetailClient product={product} />
}
