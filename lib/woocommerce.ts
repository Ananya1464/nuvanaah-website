import { Product } from '@/lib/types'

const API_BASE = process.env.NEXT_PUBLIC_WOOCOMMERCE_API_URL
const CONSUMER_KEY = process.env.WOOCOMMERCE_CONSUMER_KEY
const CONSUMER_SECRET = process.env.WOOCOMMERCE_CONSUMER_SECRET

/**
 * WooCommerce API Service
 * Handles all product-related API calls
 */

export async function getProducts(
  page = 1,
  perPage = 12,
  category?: string
): Promise<Product[]> {
  try {
    let url = `${API_BASE}/wp-json/wc/v3/products?page=${page}&per_page=${perPage}`
    
    if (category) {
      url += `&category=${category}`
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${CONSUMER_KEY}:${CONSUMER_SECRET}`
        ).toString('base64')}`,
      },
    })

    if (!response.ok) throw new Error(`WooCommerce API error: ${response.status}`)

    const products = await response.json()
    return products.map(formatWooCommerceProduct)
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw error
  }
}

export async function getProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(
      `${API_BASE}/wp-json/wc/v3/products/${id}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${CONSUMER_KEY}:${CONSUMER_SECRET}`
          ).toString('base64')}`,
        },
      }
    )

    if (!response.ok) throw new Error(`Product not found: ${response.status}`)

    const product = await response.json()
    return formatWooCommerceProduct(product)
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error)
    throw error
  }
}

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const response = await fetch(
      `${API_BASE}/wp-json/wc/v3/products?search=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${CONSUMER_KEY}:${CONSUMER_SECRET}`
          ).toString('base64')}`,
        },
      }
    )

    if (!response.ok) throw new Error(`Search failed: ${response.status}`)

    const products = await response.json()
    return products.map(formatWooCommerceProduct)
  } catch (error) {
    console.error('Search failed:', error)
    throw error
  }
}

/**
 * Format WooCommerce product response to our Product interface
 */
function formatWooCommerceProduct(wcProduct: any): Product {
  return {
    id: wcProduct.id,
    name: wcProduct.name,
    description: wcProduct.description,
    price: parseFloat(wcProduct.price),
    image: wcProduct.images?.[0]?.src || '/images/placeholder.jpg',
    category: wcProduct.categories?.[0]?.name || 'General',
    rating: wcProduct.average_rating ? parseFloat(wcProduct.average_rating) : 0,
    reviewCount: wcProduct.review_count || 0,
    inStock: wcProduct.stock_status === 'instock',
  }
}
