import { Metadata } from 'next'
import ProductDetailClient, { ProductData } from '@/components/products/ProductDetailClient'

export const metadata: Metadata = {
  title: 'Drainage Bag Holder India | Post Surgery | ₹1299 | Nuvanaah',
  description: 'Hands-free drainage bag holder for post-surgery recovery. 4 secure pockets, adjustable strap, machine washable. Doctor recommended. Free shipping.',
  keywords: ['drainage bag holder', 'post surgery bag holder', 'mastectomy drain holder', 'surgical drain pouch', 'drain management'],
}

const product: ProductData = {
  id: 'drainage-bag-holder',
  name: 'Post-Surgery Drainage Bag Holder',
  tagline: 'hands-free drain management',
  price: 1299,
  comparePrice: 1699,
  description: 'Comfortable, hands-free solution for managing surgical drains during recovery. Features 4 secure pockets with clear windows for easy monitoring.',
  sizes: ['One Size'],
  stock: 25,
  rating: 4.6,
  reviewCount: 78,
  category: 'Mastectomy Products',
  features: [
    { title: '4 secure pockets', desc: 'Hold multiple drains securely' },
    { title: 'Clear viewing windows', desc: 'Monitor drain output easily' },
    { title: 'Adjustable strap', desc: 'Fits all body sizes comfortably' },
    { title: 'Soft cotton lining', desc: 'Gentle against sensitive skin' },
    { title: 'Machine washable', desc: 'Easy to clean and maintain' },
    { title: 'Discreet design', desc: 'Wear under clothing' },
  ],
  specifications: [
    { label: 'Material', value: '100% Cotton with elastic' },
    { label: 'Pockets', value: '4 drain pockets' },
    { label: 'Strap Length', value: 'Adjustable 24-48 inches' },
    { label: 'Care', value: 'Machine wash cold' },
    { label: 'Made in', value: 'India' },
  ],
  perfectFor: [
    'Post-mastectomy patients',
    'Surgical drain users',
    'Recovery period',
    'Home use',
    'Hospital stays',
  ],
}

export default function DrainageBagHolderPage() {
  return <ProductDetailClient product={product} />
}
