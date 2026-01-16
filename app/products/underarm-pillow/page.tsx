import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Underarm Pillow India | Surgery Recovery | ₹899 | Nuvanaah',
  description: 'Soft underarm pillow for post-mastectomy comfort. Reduces arm pressure, aids healing. Doctor recommended. Free shipping.',
  keywords: ['underarm pillow', 'mastectomy pillow', 'axillary pillow', 'surgery recovery pillow', 'arm support pillow'],
}

const product: ProductData = {
  id: 'underarm-pillow',
  name: 'Post-Surgery Underarm Pillow',
  tagline: 'comfort for healing',
  price: 899,
  comparePrice: 1199,
  description: 'Specially shaped pillow that provides gentle support under the arm after mastectomy or lymph node surgery. Reduces pressure and aids in comfortable healing.',
  stock: 28,
  rating: 4.6,
  reviewCount: 49,
  category: 'Mastectomy Products',
  features: [
    { title: 'Ergonomic shape', desc: 'Contoured for underarm comfort' },
    { title: 'Soft fill', desc: 'Gentle, cushioned support' },
    { title: 'Removable cover', desc: 'Easy to wash' },
    { title: 'Lightweight', desc: 'Easy to carry around' },
    { title: 'Versatile use', desc: 'Use sitting, lying, or in car' },
    { title: 'Helpful for driving', desc: 'Cushions seatbelt pressure' },
  ],
  specifications: [
    { label: 'Material', value: 'Cotton cover, polyester fill' },
    { label: 'Dimensions', value: '8" x 6" x 3"' },
    { label: 'Cover', value: 'Removable, machine washable' },
    { label: 'Fill', value: 'Hypoallergenic polyester' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Post-mastectomy recovery',
    'Lymph node surgery',
    'Axillary surgery',
    'Arm comfort during healing',
    'Car travel after surgery',
  ],
}

export default function UnderarmPillowPage() {
  return <ProductDetailClient product={product} />
}
