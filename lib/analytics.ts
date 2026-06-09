/// <reference types="node" />
// GA4 + Meta Pixel analytics
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID and NEXT_PUBLIC_META_PIXEL_ID in .env.local

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined' || !GA_ID || !window.gtag) return
  window.gtag(...args)
}

function fbq(...args: unknown[]) {
  if (typeof window === 'undefined' || !PIXEL_ID || !window.fbq) return
  window.fbq(...args)
}

// ─── Page view ───────────────────────────────────────────────────────────────

export function trackPageView(path: string) {
  gtag('config', GA_ID, { page_path: path })
  fbq('track', 'PageView')
}

// ─── Product events ──────────────────────────────────────────────────────────

export function trackViewItem(item: {
  id: string
  name: string
  category: string
  price: number
}) {
  gtag('event', 'view_item', {
    currency: 'INR',
    value: item.price,
    items: [{
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
    }],
  })
  fbq('track', 'ViewContent', {
    content_ids: [item.id],
    content_name: item.name,
    content_category: item.category,
    content_type: 'product',
    value: item.price,
    currency: 'INR',
  })
}

export function trackAddToCart(item: {
  id: string
  name: string
  category: string
  price: number
  quantity: number
}) {
  gtag('event', 'add_to_cart', {
    currency: 'INR',
    value: item.price * item.quantity,
    items: [{
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      quantity: item.quantity,
    }],
  })
  fbq('track', 'AddToCart', {
    content_ids: [item.id],
    content_name: item.name,
    content_type: 'product',
    value: item.price * item.quantity,
    currency: 'INR',
  })
}

// ─── Checkout funnel ─────────────────────────────────────────────────────────

export function trackBeginCheckout(
  cartTotal: number,
  cartItems: Array<{ id: string; name: string; price: number; quantity: number }>,
) {
  gtag('event', 'begin_checkout', {
    currency: 'INR',
    value: cartTotal,
    items: cartItems.map(i => ({
      item_id: i.id,
      item_name: i.name,
      price: i.price,
      quantity: i.quantity,
    })),
  })
  fbq('track', 'InitiateCheckout', {
    value: cartTotal,
    currency: 'INR',
    num_items: cartItems.reduce((s, i) => s + i.quantity, 0),
  })
}

export function trackPurchase(
  transactionId: string,
  total: number,
  cartItems: Array<{ id: string; name: string; price: number; quantity: number }>,
) {
  gtag('event', 'purchase', {
    transaction_id: transactionId,
    currency: 'INR',
    value: total,
    items: cartItems.map(i => ({
      item_id: i.id,
      item_name: i.name,
      price: i.price,
      quantity: i.quantity,
    })),
  })
  fbq('track', 'Purchase', {
    value: total,
    currency: 'INR',
    content_ids: cartItems.map(i => i.id),
    content_type: 'product',
  })
}

// ─── Engagement ──────────────────────────────────────────────────────────────

export function trackSearch(query: string) {
  gtag('event', 'search', { search_term: query })
  fbq('track', 'Search', { search_string: query })
}

export function trackLead() {
  gtag('event', 'generate_lead')
  fbq('track', 'Lead')
}

export function trackContact() {
  gtag('event', 'contact')
  fbq('track', 'Contact')
}
