import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Dewdrop Breast Prosthesis India | Partial Form | ₹6999 | Nuvanaah',
  description: 'Dewdrop-shaped partial breast prosthesis for lumpectomy patients. Medical-grade silicone, natural feel. Doctor recommended. Free shipping.',
  keywords: ['partial breast form', 'lumpectomy prosthesis', 'dewdrop prosthesis', 'breast equalizer', 'partial mastectomy form'],
}

const product: ProductData = {
  id: 'dewdrop-prosthetic',
  name: 'Dewdrop Partial Breast Form',
  tagline: 'natural shape restoration',
  price: 6999,
  comparePrice: 8999,
  description: 'Teardrop-shaped partial breast prosthesis designed for lumpectomy patients. Fills in the area removed during surgery for a natural, balanced appearance.',
  sizes: ['S', 'M', 'L'],
  colors: [
    { name: 'Light', value: '#F5DCC8' },
    { name: 'Medium', value: '#E8C9A8' },
  ],
  stock: 10,
  rating: 4.8,
  reviewCount: 42,
  category: 'Mastectomy Products',
  features: [
    { title: 'Teardrop shape', desc: 'Designed for partial reconstruction' },
    { title: 'Medical-grade silicone', desc: 'Safe, realistic feel' },
    { title: 'Featherlight', desc: 'Comfortable all-day wear' },
    { title: 'Natural movement', desc: 'Moves with your body' },
    { title: 'Self-adhesive option', desc: 'Can be worn without bra' },
    { title: 'Temperature adaptive', desc: 'Warms to body temperature' },
  ],
  specifications: [
    { label: 'Material', value: 'Medical-grade Silicone' },
    { label: 'Shape', value: 'Teardrop/Dewdrop' },
    { label: 'Sizes', value: 'S, M, L' },
    { label: 'Weight', value: 'Ultra-light' },
    { label: 'Care', value: 'Wash with mild soap' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Lumpectomy patients',
    'Partial mastectomy',
    'Breast asymmetry',
    'Shape restoration',
    'Daily wear',
  ],
}

export default function DewdropProstheticPage() {
  return <ProductDetailClient product={product} />
}
