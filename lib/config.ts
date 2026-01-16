// API Configuration
export const API_CONFIG = {
  WOOCOMMERCE_API_URL: process.env.NEXT_PUBLIC_WOOCOMMERCE_API_URL || '',
  WOOCOMMERCE_CONSUMER_KEY: process.env.WOOCOMMERCE_CONSUMER_KEY || '',
  WOOCOMMERCE_CONSUMER_SECRET: process.env.WOOCOMMERCE_CONSUMER_SECRET || '',
  
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  
  RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || '',
  
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || '',
  
  SHIPROCKET_API_KEY: process.env.SHIPROCKET_API_KEY || '',
}

// Environment variables validation
export function validateEnv() {
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  ]
  
  const missing = required.filter(key => !process.env[key])
  
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}`)
  }
}
