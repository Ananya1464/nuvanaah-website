// Type definitions for Nuvanaah

export interface ProductVariation {
  id: string
  length: string
  price: string
  regular_price: string
  description: string
  images: { id: number; src: string; alt: string }[]
  stock_status: 'instock' | 'outofstock'
}

export interface Product {
  id: string | number
  name: string
  technical?: string
  subtitle?: string
  slug?: string
  description: string
  short_description?: string
  price: number | string
  priceFrom?: boolean           // if true, display as "From ₹X"
  regular_price?: string
  image?: string
  images?: { id: number; src: string; alt: string }[]
  categories?: { id: number; name: string; slug: string }[]
  categoryNav: string
  category?: 'mastectomy' | 'chemotherapy' | 'wigs' | 'lymphedema'
  sizes?: string[]
  sku?: string
  stock_status?: 'instock' | 'outofstock'
  on_sale?: boolean
  featured?: boolean
  inStock?: boolean
  rating?: number
  reviewCount?: number
  tags?: string[]               // for filtering — e.g. ['after-surgery', 'recovery']
  technicalNames?: string[]     // clinical/technical search terms — e.g. ['breast prosthesis', 'mastectomy bra']
  crossSells?: string[]         // slugs of cross-sell products
  recoveryStage?: string[]      // e.g. ['stage-1', 'stage-2']
  shopByNeed?: string[]         // e.g. ['after-surgery', 'hair-loss']
  variantLabel?: string         // e.g. "Colour" or "Print"
  variantOptions?: string[]     // e.g. ['Aparajita', 'Ebony', 'Dusty Miller']
  variantLabel2?: string        // Secondary variant, e.g. "Size"
  variantOptions2?: string[]    // e.g. ['32', '34', '36']
  keyFeatures?: string[]        // bullet-list features (also used for product-content.json)
  whatsIncluded?: (string | { item: string; detail: string })[]      // what's in the box
  // New fields from DOCX
  seoTitle?: string
  metaDescription?: string
  ogTitle?: string
  ogDescription?: string
  fullStory?: string
  benefitsList?: {title: string, desc: string}[]
  materialsText?: string
  variantsText?: string[]
  howToUse?: string[]
  careText?: string[]
  careDonts?: string[]
  perfectFor?: {title: string, desc: string}[]
  gentleNote?: string
  faqs?: {q: string, a: string}[]
  whenToUse?: { heading: string, body: string }[]
  whenToUseNote?: string
  // New configuration fields for product page specs
  isGiftPopular?: boolean
  tagline?: string
  comingSoon?: boolean
  dimensions?: string
  whatsappCTA?: boolean
  priceOnRequest?: boolean     // if true, show "Price on request" instead of price
  priceNote?: string           // e.g. "(for a pair)"
  showSizeGuide?: boolean      // if true, show size guide link near variant selector
  // For variable products (like wigs with different lengths)
  variations?: ProductVariation[]
  type?: 'simple' | 'variable'
}

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  size: string
  image: string
}

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  createdAt: Date
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: Address
  paymentMethod: 'razorpay' | 'cod'
  createdAt: Date
}

export interface Address {
  fullName: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  pincode: string
  type: 'home' | 'office' | 'hospital'
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  verified: boolean
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  category: string
  featuredImage?: string
  author: string
  publishedAt: Date
  updatedAt: Date
}
