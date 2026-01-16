import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Post Surgery Bra India | Recovery | ₹2799 | Nuvanaah',
  description: 'Comfortable post-surgery recovery bra. Front closure, adjustable compression, soft fabric. Doctor recommended. Free shipping.',
  keywords: ['post surgery bra', 'recovery bra', 'surgical bra', 'compression bra', 'mastectomy recovery bra'],
}

const product: ProductData = {
  id: 'post-surgery-bra',
  name: 'Post-Surgery Recovery Bra',
  tagline: 'comfort during healing',
  price: 2799,
  comparePrice: 3499,
  description: 'Specially designed recovery bra with front closure and adjustable compression for post-surgical comfort. Ideal for the first weeks after surgery.',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Nude', value: '#E8D5C4' },
  ],
  stock: 16,
  rating: 4.7,
  reviewCount: 83,
  category: 'Mastectomy Products',
  features: [
    { title: 'Front closure', desc: 'Easy dressing without arm strain' },
    { title: 'Adjustable compression', desc: 'Customize support level' },
    { title: 'Wide comfort straps', desc: 'No shoulder digging' },
    { title: 'Soft cotton lining', desc: 'Gentle on healing skin' },
    { title: 'Wire-free design', desc: 'No pressure on incisions' },
    { title: 'Moisture-wicking', desc: 'Keeps skin dry' },
  ],
  specifications: [
    { label: 'Material', value: '90% Cotton, 10% Spandex' },
    { label: 'Closure', value: 'Front zip + hook & eye' },
    { label: 'Sizes', value: 'S, M, L, XL, XXL' },
    { label: 'Colors', value: 'White, Nude' },
    { label: 'Compression', value: 'Light to moderate (adjustable)' },
    { label: 'Care', value: 'Hand wash recommended' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Post-mastectomy recovery',
    'Breast reduction recovery',
    'Breast augmentation recovery',
    'Lumpectomy recovery',
    'First 4-6 weeks post-surgery',
  ],
}

export default function PostSurgeryBraPage() {
  return <ProductDetailClient product={product} />
}
