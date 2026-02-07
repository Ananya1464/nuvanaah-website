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
  // POST-SURGERY ESSENTIALS
  'mastectomy-prosthesis-cover': {
    hero: '/images/products/mastectomy-prosthesis/hero.jpg',
    detail: '/images/products/mastectomy-prosthesis/detail.jpg',
    lifestyle: '/images/products/mastectomy-prosthesis/lifestyle.jpg',
    usage: '/images/products/mastectomy-prosthesis/usage.jpg',
  },
  
  'mastectomy-bra-front-opening': {
    hero: '/images/products/mastectomy-bra-front/hero.jpg',
    detail: '/images/products/mastectomy-bra-front/detail.jpg',
    lifestyle: '/images/products/mastectomy-bra-front/lifestyle.jpg',
    usage: '/images/products/mastectomy-bra-front/usage.jpg',
  },
  
  'arm-rest-pillow-cover': {
    hero: '/images/products/arm-rest-pillow/hero.jpg',
    detail: '/images/products/arm-rest-pillow/detail.jpg',
    lifestyle: '/images/products/arm-rest-pillow/lifestyle.jpg',
    usage: '/images/products/arm-rest-pillow/usage.jpg',
  },
  
  'special-fabric-towel': {
    hero: '/images/products/special-fabric-towel/hero.jpg',
    detail: '/images/products/special-fabric-towel/detail.jpg',
    lifestyle: '/images/products/special-fabric-towel/lifestyle.jpg',
    usage: '/images/products/special-fabric-towel/usage.jpg',
  },

  // CHEMOTHERAPY SUPPORT
  'respiratory-mask': {
    hero: '/images/products/respiratory-mask/hero.jpg',
    detail: '/images/products/respiratory-mask/detail.jpg',
    lifestyle: '/images/products/respiratory-mask/lifestyle.jpg',
    usage: '/images/products/respiratory-mask/usage.jpg',
  },
  
  'sling-bag-medical': {
    hero: '/images/products/sling-bag/hero.jpg',
    detail: '/images/products/sling-bag/detail.jpg',
    lifestyle: '/images/products/sling-bag/lifestyle.jpg',
    usage: '/images/products/sling-bag/usage.jpg',
  },
  
  'soft-cotton-napkin': {
    hero: '/images/products/cotton-napkin/hero.jpg',
    detail: '/images/products/cotton-napkin/detail.jpg',
    lifestyle: '/images/products/cotton-napkin/lifestyle.jpg',
    usage: '/images/products/cotton-napkin/usage.jpg',
  },

  // MEDICAL WIGS
  'medical-wig-14-inch': {
    hero: '/images/products/medical-wig-14/hero.jpg',
    detail: '/images/products/medical-wig-14/detail.jpg',
    lifestyle: '/images/products/medical-wig-14/lifestyle.jpg',
    color: '/images/products/medical-wig-14/color.jpg',
  },
  
  'medical-wig-18-inch': {
    hero: '/images/products/medical-wig-18/hero.jpg',
    detail: '/images/products/medical-wig-18/detail.jpg',
    lifestyle: '/images/products/medical-wig-18/lifestyle.jpg',
    color: '/images/products/medical-wig-18/color.jpg',
  },
  
  'medical-wig-22-inch': {
    hero: '/images/products/medical-wig-22/hero.jpg',
    detail: '/images/products/medical-wig-22/detail.jpg',
    lifestyle: '/images/products/medical-wig-22/lifestyle.jpg',
    color: '/images/products/medical-wig-22/color.jpg',
  },

  // PREMIUM WIGS
  'premium-wig-14-inch': {
    hero: '/images/products/premium-wig-14/hero.jpg',
    detail: '/images/products/premium-wig-14/detail.jpg',
    lifestyle: '/images/products/premium-wig-14/lifestyle.jpg',
    color: '/images/products/premium-wig-14/color.jpg',
  },
  
  'premium-wig-16-inch': {
    hero: '/images/products/premium-wig-16/hero.jpg',
    detail: '/images/products/premium-wig-16/detail.jpg',
    lifestyle: '/images/products/premium-wig-16/lifestyle.jpg',
    color: '/images/products/premium-wig-16/color.jpg',
  },
  
  'premium-wig-18-inch': {
    hero: '/images/products/premium-wig-18/hero.jpg',
    detail: '/images/products/premium-wig-18/detail.jpg',
    lifestyle: '/images/products/premium-wig-18/lifestyle.jpg',
    color: '/images/products/premium-wig-18/color.jpg',
  },
  
  'premium-wig-20-inch': {
    hero: '/images/products/premium-wig-20/hero.jpg',
    detail: '/images/products/premium-wig-20/detail.jpg',
    lifestyle: '/images/products/premium-wig-20/lifestyle.jpg',
    color: '/images/products/premium-wig-20/color.jpg',
  },
  
  'premium-wig-22-inch': {
    hero: '/images/products/premium-wig-22/hero.jpg',
    detail: '/images/products/premium-wig-22/detail.jpg',
    lifestyle: '/images/products/premium-wig-22/lifestyle.jpg',
    color: '/images/products/premium-wig-22/color.jpg',
  },
  
  'premium-wig-24-inch': {
    hero: '/images/products/premium-wig-24/hero.jpg',
    detail: '/images/products/premium-wig-24/detail.jpg',
    lifestyle: '/images/products/premium-wig-24/lifestyle.jpg',
    color: '/images/products/premium-wig-24/color.jpg',
  },

  // HEAD ACCESSORIES
  'head-scarf-hair-lace': {
    hero: '/images/products/scarf-hair-lace/hero.jpg',
    detail: '/images/products/scarf-hair-lace/detail.jpg',
    lifestyle: '/images/products/scarf-hair-lace/lifestyle.jpg',
    usage: '/images/products/scarf-hair-lace/usage.jpg',
  },
  
  'printed-head-scarf': {
    hero: '/images/products/printed-scarf/hero.jpg',
    detail: '/images/products/printed-scarf/detail.jpg',
    lifestyle: '/images/products/printed-scarf/lifestyle.jpg',
    usage: '/images/products/printed-scarf/usage.jpg',
  },

  // LYMPHEDEMA MANAGEMENT
  'lymphoedema-sleeves': {
    hero: '/images/products/lymphoedema-sleeves/hero.jpg',
    detail: '/images/products/lymphoedema-sleeves/detail.jpg',
    lifestyle: '/images/products/lymphoedema-sleeves/lifestyle.jpg',
    usage: '/images/products/lymphoedema-sleeves/usage.jpg',
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
