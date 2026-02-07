// Type definitions for Nuvanaah

export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: 'mastectomy' | 'chemotherapy' | 'wigs' | 'lymphedema'
  sizes: string[]
  sku: string
  inStock?: boolean
  rating?: number
  reviewCount?: number
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
