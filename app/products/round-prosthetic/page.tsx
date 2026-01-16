import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Round Breast Prosthesis India | Full Form | ₹7999 | Nuvanaah',
  description: 'Round full breast prosthesis for mastectomy patients. Medical-grade silicone, natural weight. Doctor recommended. Free shipping.',
  keywords: ['round breast form', 'full breast prosthesis', 'mastectomy prosthesis', 'silicone breast form', 'breast replacement'],
}

const product: ProductData = {
  id: 'round-prosthetic',
  name: 'Round Full Breast Prosthesis',
  tagline: 'complete natural restoration',
  price: 7999,
  comparePrice: 10999,
  description: 'Full round breast prosthesis for complete mastectomy restoration. Medical-grade silicone with natural weight distribution for balanced posture.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: [
    { name: 'Light', value: '#F5DCC8' },
    { name: 'Medium', value: '#E8C9A8' },
    { name: 'Tan', value: '#D4A574' },
  ],
  stock: 11,
  rating: 4.9,
  reviewCount: 76,
  category: 'Mastectomy Products',
  features: [
    { title: 'Full round shape', desc: 'Natural, symmetrical look' },
    { title: 'Balanced weight', desc: 'Prevents posture issues' },
    { title: 'Medical-grade silicone', desc: 'Hypoallergenic material' },
    { title: 'Realistic texture', desc: 'Looks and feels natural' },
    { title: 'Concave back', desc: 'Fits flat to chest wall' },
    { title: 'Durable construction', desc: 'Long-lasting with care' },
  ],
  specifications: [
    { label: 'Material', value: 'Medical-grade Silicone' },
    { label: 'Shape', value: 'Full Round' },
    { label: 'Sizes', value: 'S, M, L, XL' },
    { label: 'Weight', value: 'Natural breast weight' },
    { label: 'Colors', value: 'Light, Medium, Tan' },
    { label: 'Care', value: 'Wash with mild soap' },
    { label: 'Warranty', value: '6 months' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Full mastectomy patients',
    'Breast cancer survivors',
    'Daily wear',
    'Special occasions',
    'Active lifestyles',
  ],
}

export default function RoundProstheticPage() {
  return <ProductDetailClient product={product} />
}
