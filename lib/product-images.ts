/**
 * NUVANAAH PRODUCT IMAGE MAPPING
 * Maps product slugs to their image paths
 * Updated: February 7, 2026
 */

export interface ProductImageSet {
  hero: string
  detail?: string
  lifestyle?: string
  usage?: string
  color?: string
  additional?: string[]
}

/**
 * Product slug to image paths mapping (19 products)
 */
export const productImageMap: Record<string, ProductImageSet> = {
  // POST-SURGERY ESSENTIALS (Using placeholders for now)
  'mastectomy-prosthesis-cover': {
    hero: 'https://images.unsplash.com/photo-1584512814423-69f8b3e1d919?w=800&h=800&fit=crop',
    detail: 'https://images.unsplash.com/photo-1584512814423-69f8b3e1d919?w=800&h=800&fit=crop',
    lifestyle: 'https://images.unsplash.com/photo-1584512814423-69f8b3e1d919?w=800&h=800&fit=crop',
    usage: 'https://images.unsplash.com/photo-1584512814423-69f8b3e1d919?w=800&h=800&fit=crop',
  },
  
  'mastectomy-bra-front-opening': {
    hero: '/images/products/mastectomy-bra/hero.png',
    detail: '/images/products/mastectomy-bra/detail.png',
    lifestyle: '/images/products/mastectomy-bra/lifestyle.png',
    usage: '/images/products/mastectomy-bra/usage.png',
  },
  
  'arm-rest-pillow-cover': {
    hero: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=800&fit=crop',
    detail: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=800&fit=crop',
    lifestyle: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=800&fit=crop',
    usage: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=800&fit=crop',
  },
  
  'special-fabric-towel': {
    hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=800&fit=crop',
    detail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=800&fit=crop',
    lifestyle: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=800&fit=crop',
    usage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=800&fit=crop',
  },

  // CHEMOTHERAPY SUPPORT (Using placeholders)
  'respiratory-mask': {
    hero: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&h=800&fit=crop',
    detail: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&h=800&fit=crop',
    lifestyle: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&h=800&fit=crop',
    usage: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&h=800&fit=crop',
  },
  
  'sling-bag-medical': {
    hero: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    detail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    lifestyle: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
    usage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop',
  },
  
  'soft-cotton-napkin': {
    hero: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&h=800&fit=crop',
    detail: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&h=800&fit=crop',
    lifestyle: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&h=800&fit=crop',
    usage: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&h=800&fit=crop',
  },

  // MEDICAL WIGS - Consolidated variable product
  'medical-wig': {
    hero: '/images/products/medical-wig/wig5.png',
    detail: '/images/products/medical-wig/_DSC6694.jpg',
    lifestyle: '/images/products/medical-wig/_DSC6695.jpg',
    color: '/images/products/medical-wig/_DSC6709.jpg',
  },
  
  // MEDICAL WIGS - Individual length variations (for backward compatibility)
  'medical-wig-14-inch': {
    hero: '/images/products/medical-wig/wig5.png',
    detail: '/images/products/medical-wig/_DSC6694.jpg',
    lifestyle: '/images/products/medical-wig/_DSC6695.jpg',
    color: '/images/products/medical-wig/_DSC6709.jpg',
  },
  
  'medical-wig-18-inch': {
    hero: '/images/products/medical-wig/wig5.png',
    detail: '/images/products/medical-wig/_DSC6694.jpg',
    lifestyle: '/images/products/medical-wig/_DSC6695.jpg',
    color: '/images/products/medical-wig/_DSC6709.jpg',
  },
  
  'medical-wig-22-inch': {
    hero: '/images/products/medical-wig/wig5.png',
    detail: '/images/products/medical-wig/_DSC6694.jpg',
    lifestyle: '/images/products/medical-wig/_DSC6695.jpg',
    color: '/images/products/medical-wig/_DSC6709.jpg',
  },

  // PREMIUM WIGS - Consolidated variable product
  'premium-wig': {
    hero: '/images/products/premium-wig/hero.png',
    detail: '/images/products/premium-wig/_DSC6694.jpg',
    lifestyle: '/images/products/premium-wig/_DSC6695.jpg',
    color: '/images/products/premium-wig/wig3.png',
  },
  
  // PREMIUM WIGS - Individual length variations (for backward compatibility)
  'premium-wig-14-inch': {
    hero: '/images/products/premium-wig/hero.png',
    detail: '/images/products/premium-wig/_DSC6694.jpg',
    lifestyle: '/images/products/premium-wig/_DSC6695.jpg',
    color: '/images/products/premium-wig/wig3.png',
  },
  
  'premium-wig-16-inch': {
    hero: '/images/products/premium-wig/hero.png',
    detail: '/images/products/premium-wig/_DSC6694.jpg',
    lifestyle: '/images/products/premium-wig/_DSC6695.jpg',
    color: '/images/products/premium-wig/wig4.png',
  },
  
  'premium-wig-18-inch': {
    hero: '/images/products/premium-wig/hero.png',
    detail: '/images/products/premium-wig/_DSC6694.jpg',
    lifestyle: '/images/products/premium-wig/_DSC6695.jpg',
    color: '/images/products/premium-wig/wig5.png',
  },
  
  'premium-wig-20-inch': {
    hero: '/images/products/premium-wig/hero.png',
    detail: '/images/products/premium-wig/_DSC6694.jpg',
    lifestyle: '/images/products/premium-wig/_DSC6695.jpg',
    color: '/images/products/premium-wig/wig3.png',
  },
  
  'premium-wig-22-inch': {
    hero: '/images/products/premium-wig/hero.png',
    detail: '/images/products/premium-wig/_DSC6694.jpg',
    lifestyle: '/images/products/premium-wig/_DSC6695.jpg',
    color: '/images/products/premium-wig/wig4.png',
  },
  
  'premium-wig-24-inch': {
    hero: '/images/products/premium-wig/hero.png',
    detail: '/images/products/premium-wig/_DSC6694.jpg',
    lifestyle: '/images/products/premium-wig/_DSC6695.jpg',
    color: '/images/products/premium-wig/wig5.png',
  },

  // HEAD ACCESSORIES (Scarf with hair lace - no images yet, using fallback)
  'head-scarf-hair-lace': {
    hero: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=800&fit=crop',
    detail: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=800&fit=crop',
    lifestyle: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=800&fit=crop',
    usage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=800&fit=crop',
  },
  
  'printed-head-scarf': {
    hero: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=800&fit=crop',
    detail: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=800&fit=crop',
    lifestyle: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=800&fit=crop',
    usage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=800&fit=crop',
  },

  // LYMPHEDEMA MANAGEMENT (Using placeholder)
  'lymphoedema-sleeves': {
    hero: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop',
    detail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop',
    lifestyle: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop',
    usage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop',
  },
}

/**
 * Gets all images for a product as an array
 */
export function getProductImages(productSlug: string): string[] {
  const imageSet = productImageMap[productSlug]
  
  if (!imageSet) {
    return ['https://images.unsplash.com/photo-1584512814423-69f8b3e1d919?w=800&h=800&fit=crop']
  }
  
  const images: string[] = [imageSet.hero]
  
  if (imageSet.detail) images.push(imageSet.detail)
  if (imageSet.lifestyle) images.push(imageSet.lifestyle)
  if (imageSet.usage) images.push(imageSet.usage)
  if (imageSet.color) images.push(imageSet.color)
  if (imageSet.additional) images.push(...imageSet.additional)
  
  return images
}

/**
 * Gets the hero/main image for a product
 */
export function getProductHeroImage(productSlug: string): string {
  const imageSet = productImageMap[productSlug]
  
  if (!imageSet) {
    return 'https://images.unsplash.com/photo-1584512814423-69f8b3e1d919?w=800&h=800&fit=crop'
  }
  
  return imageSet.hero
}

/**
 * Category image mapping (updated for new categories)
 */
export const categoryImageMap: Record<string, string> = {
  'post-surgery-essentials': '/images/categories/post-surgery.jpg',
  'chemotherapy-support': '/images/categories/chemotherapy.png',
  'hair-loss-solutions': '/images/categories/wigs.png',
  'lymphedema-management': '/images/categories/lymphedema.jpg',
}

/**
 * Gets the hero image for a category
 */
export function getCategoryImage(category: string): string {
  return categoryImageMap[category] || '/images/categories/default.jpg'
}
