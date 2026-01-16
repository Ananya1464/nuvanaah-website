import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Wig Grip Band India | Medical | ₹599 | Nuvanaah',
  description: 'Medical wig grip band prevents wig slipping during chemo. Non-slip silicone, velvet soft, adjustable fit. Doctor recommended. Free shipping.',
  keywords: ['wig grip band', 'wig grip', 'chemo wig band', 'wig holder', 'hair loss accessories'],
}

const product: ProductData = {
  id: 'wig-grip-band',
  name: 'Medical Wig Grip Band',
  tagline: 'secure wig hold',
  price: 599,
  comparePrice: 799,
  description: 'Non-slip wig grip band with velvet-soft interior that keeps your wig secure all day. Designed specifically for sensitive scalps during chemotherapy.',
  sizes: ['S', 'M', 'L'],
  colors: [
    { name: 'Black', value: '#1F2937' },
    { name: 'Nude', value: '#E8D5C4' },
    { name: 'Brown', value: '#8B6F47' },
  ],
  stock: 40,
  rating: 4.4,
  reviewCount: 113,
  category: 'Wigs & Headwear',
  features: [
    { title: 'Non-slip silicone', desc: 'Prevents wig movement' },
    { title: 'Velvet soft interior', desc: 'Gentle on sensitive scalps' },
    { title: 'Adjustable fit', desc: 'One size fits most' },
    { title: 'Breathable', desc: 'Allows air circulation' },
    { title: 'Lightweight', desc: 'Comfortable all-day wear' },
    { title: 'Easy to wash', desc: 'Hand wash, air dry' },
  ],
  specifications: [
    { label: 'Material', value: 'Velvet with silicone grip' },
    { label: 'Sizes', value: 'S (21"), M (22"), L (23")' },
    { label: 'Colors', value: 'Black, Nude, Brown' },
    { label: 'Care', value: 'Hand wash with mild soap' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Chemotherapy patients',
    'Alopecia patients',
    'Wig wearers',
    'Active lifestyles',
    'All-day wear',
  ],
}

export default function WigGripBandPage() {
  return <ProductDetailClient product={product} />
}
