import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Silicone Breast Form India | Prosthesis | ₹8999 | Nuvanaah',
  description: 'Premium silicone breast prosthesis for mastectomy patients. Natural weight, temperature adaptive, medical-grade silicone. Doctor recommended. Free shipping across India.',
  keywords: ['silicone breast form', 'breast prosthesis India', 'mastectomy prosthesis', 'breast form', 'silicone prosthesis'],
}

const product: ProductData = {
  id: 'silicone-breast-form',
  name: 'Nuvanaah Silicone Breast Prosthesis',
  tagline: 'natural comfort, restored confidence',
  price: 8999,
  comparePrice: 11999,
  description: 'Premium medical-grade silicone breast form designed for natural look and feel. Temperature adaptive technology ensures comfort throughout the day. Lightweight yet natural weight distribution.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: [
    { name: 'Light', value: '#F5DCC8' },
    { name: 'Medium', value: '#E8C9A8' },
    { name: 'Tan', value: '#D4A574' },
  ],
  stock: 12,
  rating: 4.9,
  reviewCount: 89,
  category: 'Mastectomy Products',
  features: [
    { title: 'Medical-grade silicone', desc: 'Safe, hypoallergenic material' },
    { title: 'Natural weight distribution', desc: 'Balanced for posture support' },
    { title: 'Temperature adaptive', desc: 'Warms to body temperature' },
    { title: 'Realistic movement', desc: 'Natural jiggle and drape' },
    { title: 'Durable construction', desc: 'Long-lasting with proper care' },
    { title: 'Easy to clean', desc: 'Wash with mild soap and water' },
  ],
  specifications: [
    { label: 'Material', value: 'Medical-grade Silicone' },
    { label: 'Weight', value: 'Matches natural breast weight' },
    { label: 'Sizes', value: 'S, M, L, XL' },
    { label: 'Colors', value: 'Light, Medium, Tan' },
    { label: 'Care', value: 'Hand wash, air dry' },
    { label: 'Warranty', value: '6 months' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Post-mastectomy patients',
    'Breast cancer survivors',
    'Daily wear',
    'Special occasions',
    'Swimming (with swim form)',
  ],
}

export default function SiliconeBreastFormPage() {
  return <ProductDetailClient product={product} />
}
