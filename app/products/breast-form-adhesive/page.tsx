import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Breast Form Adhesive India | Medical | ₹1299 | Nuvanaah',
  description: 'Medical-grade adhesive for breast prosthesis. Strong 12-16hr hold, water-resistant, easy removal. Doctor recommended. Free shipping.',
  keywords: ['breast form adhesive', 'prosthesis adhesive', 'breast form glue', 'silicone adhesive', 'mastectomy adhesive'],
}

const product: ProductData = {
  id: 'breast-form-adhesive',
  name: 'Breast Form Medical Adhesive',
  tagline: 'secure prosthesis hold',
  price: 1299,
  comparePrice: 1599,
  description: 'Medical-grade adhesive strips designed specifically for breast prosthesis. Provides secure all-day hold while remaining gentle on skin.',
  stock: 35,
  rating: 4.5,
  reviewCount: 56,
  category: 'Mastectomy Products',
  features: [
    { title: 'Strong 12-16hr hold', desc: 'Stays secure all day' },
    { title: 'Water-resistant', desc: 'Withstands sweat and moisture' },
    { title: 'Easy removal', desc: 'Peels off gently without residue' },
    { title: 'Hypoallergenic', desc: 'Safe for sensitive skin' },
    { title: 'Double-sided strips', desc: 'Pre-cut for convenience' },
    { title: 'Invisible under clothing', desc: 'Clear, thin design' },
  ],
  specifications: [
    { label: 'Type', value: 'Double-sided adhesive strips' },
    { label: 'Quantity', value: '30 strips per pack' },
    { label: 'Hold Duration', value: '12-16 hours' },
    { label: 'Water Resistant', value: 'Yes' },
    { label: 'Skin Safe', value: 'Hypoallergenic' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Silicone breast form users',
    'Active lifestyles',
    'Special occasions',
    'Swimming (with swim form)',
    'Daily secure wear',
  ],
}

export default function BreastFormAdhesivePage() {
  return <ProductDetailClient product={product} />
}
