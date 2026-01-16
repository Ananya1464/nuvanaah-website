import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Mastectomy Bra India | Pockets | ₹2999 | Nuvanaah',
  description: 'Premium post-mastectomy bra with soft pockets for breast prosthesis. Body-safe fabric, adjustable straps, front closure comfort. Doctor recommended for cancer patients in India. Free shipping.',
  keywords: ['mastectomy bra India', 'post mastectomy bra', 'mastectomy bra with pockets', 'breast cancer bra', 'post surgery bra', 'prosthetic bra India'],
}

const product: ProductData = {
  id: 'mastectomy-bra',
  name: 'Comfort+ Post Mastectomy Bra',
  tagline: 'gentle support after surgery',
  price: 2999,
  comparePrice: 3999,
  description: 'Gentle support designed specifically for post-mastectomy recovery. Features hidden pockets for breast prosthesis, body-safe breathable fabric, and adjustable support straps for maximum comfort during healing.',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: [
    { name: 'Nude', value: '#E8D5C4' },
    { name: 'Beige', value: '#D4B896' },
  ],
  stock: 15,
  rating: 4.8,
  reviewCount: 127,
  category: 'Mastectomy Products',
  features: [
    { title: 'Hidden prosthetic pockets', desc: 'Discreet, secure pockets for breast forms' },
    { title: 'Body-safe fabric', desc: 'Breathable material for sensitive skin' },
    { title: 'Adjustable support straps', desc: 'Wide, cushioned straps for all-day comfort' },
    { title: 'Front closure design', desc: 'Easy on/off without raising arms' },
    { title: 'Skin-friendly seams', desc: 'Flat-lock seams prevent irritation' },
    { title: 'Medical-grade construction', desc: 'Doctor recommended for cancer patients' },
  ],
  specifications: [
    { label: 'Material', value: '85% Cotton, 15% Spandex' },
    { label: 'Sizes', value: 'S, M, L, XL, XXL' },
    { label: 'Colors', value: 'Nude, Beige' },
    { label: 'Care', value: 'Hand wash, air dry' },
    { label: 'Prosthesis Pocket', value: 'Yes' },
    { label: 'Wire-free', value: 'Yes' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Post-mastectomy patients',
    'Breast cancer survivors',
    'Lumpectomy recovery',
    'Radiation therapy patients',
    'Chemotherapy comfort',
    'Daily wear during treatment',
  ],
}

export default function MastectomyBraPage() {
  return <ProductDetailClient product={product} />
}
