import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Lymphedema Sleeve India | Compression | ₹1799 | Nuvanaah',
  description: 'Medical-grade compression arm sleeve for lymphedema care. Graduated compression, moisture-wicking, UV protection. Doctor recommended. Free shipping.',
  keywords: ['lymphedema sleeve', 'compression sleeve', 'arm lymphedema', 'breast cancer lymphedema', 'compression garment India'],
}

const product: ProductData = {
  id: 'lymphedema-sleeve',
  name: 'Lymphedema Compression Arm Sleeve',
  tagline: 'reduces arm swelling',
  price: 1799,
  comparePrice: 2299,
  description: 'Medical-grade graduated compression sleeve for managing lymphedema. Provides consistent pressure to reduce swelling and improve circulation in the affected arm.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: [
    { name: 'Beige', value: '#E8D5C4' },
    { name: 'Black', value: '#1F2937' },
  ],
  stock: 18,
  rating: 4.7,
  reviewCount: 64,
  category: 'Lymphedema Care',
  features: [
    { title: 'Graduated compression', desc: '20-30 mmHg medical grade' },
    { title: 'Moisture-wicking', desc: 'Keeps skin dry and comfortable' },
    { title: 'UV protection', desc: 'UPF 50+ sun protection' },
    { title: 'Seamless design', desc: 'No irritating seams' },
    { title: 'Easy to put on', desc: 'Silicone grip band' },
    { title: 'Durable fabric', desc: 'Maintains compression over time' },
  ],
  specifications: [
    { label: 'Material', value: 'Nylon/Spandex blend' },
    { label: 'Compression Level', value: '20-30 mmHg' },
    { label: 'Sizes', value: 'S, M, L, XL' },
    { label: 'Colors', value: 'Beige, Black' },
    { label: 'UPF Rating', value: '50+' },
    { label: 'Care', value: 'Hand wash, lay flat to dry' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Lymphedema patients',
    'Post-mastectomy lymphedema',
    'Arm swelling management',
    'Daily wear',
    'Travel (flight compression)',
  ],
}

export default function LymphedemaSleevePage() {
  return <ProductDetailClient product={product} />
}
