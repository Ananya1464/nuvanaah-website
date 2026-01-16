import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Chemo Port Pillow India | Seatbelt Guard | ₹999 | Nuvanaah',
  description: 'Protective cushion for chemotherapy port. Prevents seatbelt pressure, ergonomic design, portable. Doctor recommended. Free shipping.',
  keywords: ['chemo port pillow', 'port protector', 'seatbelt guard', 'port cushion', 'chemo accessories'],
}

const product: ProductData = {
  id: 'chemo-port-pillow',
  name: 'ChemoPort Protection Pillow',
  tagline: 'protects port from seatbelt',
  price: 999,
  comparePrice: 1299,
  description: 'Specially designed cushion that protects your chemotherapy port from seatbelt pressure. Ergonomic shape ensures comfort during car rides and daily activities.',
  stock: 30,
  rating: 4.5,
  reviewCount: 92,
  category: 'Chemotherapy Accessories',
  features: [
    { title: 'Cushioned protection', desc: 'Soft padding shields your port' },
    { title: 'Ergonomic design', desc: 'Contoured to fit your body' },
    { title: 'Easy attachment', desc: 'Clips onto seatbelt' },
    { title: 'Portable', desc: 'Lightweight and travel-friendly' },
    { title: 'Machine washable', desc: 'Easy to clean cover' },
    { title: 'Universal fit', desc: 'Works with all seatbelts' },
  ],
  specifications: [
    { label: 'Material', value: 'Memory foam with cotton cover' },
    { label: 'Dimensions', value: '6" x 4" x 2"' },
    { label: 'Color', value: 'Black, Grey' },
    { label: 'Care', value: 'Remove cover, machine wash' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Chemotherapy patients',
    'Port users',
    'PICC line users',
    'Daily commuters',
    'Long car rides',
  ],
}

export default function ChemoPortPillowPage() {
  return <ProductDetailClient product={product} />
}
