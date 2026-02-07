/**
 * Product Image Mapping
 * Maps product slugs to their local image paths
 */

export interface ProductImageSet {
  hero: string
  detail?: string
  lifestyle?: string
  usage?: string
  additional?: string[]
}

/**
 * Product slug to image paths mapping
 */
export const productImageMap: Record<string, ProductImageSet> = {
  // Mastectomy Products
  'mastectomy-bra': {
    hero: '/images/products/mastectomy-bra/hero.png',
    detail: '/images/products/mastectomy-bra/detail.png',
    lifestyle: '/images/products/mastectomy-bra/lifestyle.png',
    usage: '/images/products/mastectomy-bra/usage.png',
  },
  
  'silicone-breast-form': {
    hero: '/images/products/silicone-breast-form/diagram.png',
    detail: '/images/products/silicone-prosthesis/hero-teardrop.png',
    lifestyle: '/images/products/silicone-prosthesis/detail.png',
    usage: '/images/products/silicone-prosthesis/lifestyle.png',
  },
  
  'dewdrop-prosthetic': {
    hero: '/images/products/silicone-prosthesis/hero-teardrop.png',
    detail: '/images/products/silicone-prosthesis/detail.png',
    lifestyle: '/images/products/silicone-prosthesis/lifestyle.png',
  },
  
  'round-prosthetic': {
    hero: '/images/products/silicone-prosthesis/hero-round.png',
    detail: '/images/products/silicone-prosthesis/detail.png',
    lifestyle: '/images/products/silicone-prosthesis/lifestyle.png',
  },
  
  'post-surgery-bra': {
    hero: '/images/products/post-surgery-bra/hero.png',
    detail: '/images/products/post-surgery-bra/detail.png',
  },
  
  'mastectomy-camisole': {
    hero: '/images/products/mastectomy-camisole/hero.png',
    detail: '/images/products/mastectomy-camisole/detail.png',
    lifestyle: '/images/products/mastectomy-camisole/lifestyle.png',
    usage: '/images/products/mastectomy-camisole/usage.png',
  },
  
  'breast-form-adhesive': {
    hero: '/images/products/breast-form-adhesive/hero.png',
    detail: '/images/products/breast-form-adhesive/detail.png',
    lifestyle: '/images/products/breast-form-adhesive/lifestyle.png',
    usage: '/images/products/breast-form-adhesive/usage.png',
  },
  
  // Chemotherapy Products
  'chemo-port-shirt': {
    hero: '/images/products/chemo-port-shirt/hero.png',
    detail: '/images/products/chemo-port-shirt/detail.png',
    lifestyle: '/images/products/chemo-port-shirt/lifestyle.png',
    usage: '/images/products/chemo-port-shirt/usage.png',
  },
  
  'chemo-port-pillow': {
    hero: '/images/products/chemo-port-pillow.png',
    detail: '/images/products/chemo-port-pillow/demonstration.png',
    lifestyle: '/images/products/chemo-port-pillow/underarm-comfort.jpeg',
  },
  
  // Lymphedema Products
  'lymphedema-sleeve': {
    hero: '/images/products/lymphedema-sleeve/hero.jpg',
    detail: '/images/products/lymphedema-sleeve/compressionSleevesBelt.jpeg',
  },
  
  'drainage-bag-holder': {
    hero: '/images/products/drainage-bag-holder/hero.png',
    detail: '/images/products/drainage-bag-holder/detail.png',
    lifestyle: '/images/products/drainage-bag-holder/lifestyle.png',
  },
  
  'underarm-pillow': {
    hero: '/images/products/underarm-pillow/hero.jpg',
    detail: '/images/products/underarm-pillow/detail.png',
    usage: '/images/products/underarm-pillow/usage.png',
  },
  
  // Wig Products
  'wig-grip-band': {
    hero: '/images/products/wig-grip-band/hero.png',
    usage: '/images/products/wig-grip-band/usage.png',
  },
  
  'premium-wig': {
    hero: '/images/products/premium-wig/hero.png',
    lifestyle: '/images/products/premium-wig/lifestyle.png',
    additional: [
      '/images/products/premium-wig/wig2.png',
      '/images/products/premium-wig/wig3.png',
      '/images/products/premium-wig/wig4.png',
      '/images/products/premium-wig/wig5.png',
    ],
  },  
  // Cosmetic Recovery Products
  'eyebrow-enhancement-kit': {
    hero: '/images/products/eyebrow-kit/hero.png',
    detail: '/images/products/eyebrow-kit/application.png',
    lifestyle: '/images/products/eyebrow-kit/result.png',
    usage: '/images/products/eyebrow-kit/lifestyle.png',
  },
  
  'nail-strengthening-kit': {
    hero: '/images/products/nail-kit/hero.png',
    detail: '/images/products/nail-kit/application.png',
    lifestyle: '/images/products/nail-kit/result.png',
    usage: '/images/products/nail-kit/lifestyle.png',
  },
  
  'scalp-care-serum': {
    hero: '/images/products/scalp-serum/hero.png',
    detail: '/images/products/scalp-serum/application.png',
    lifestyle: '/images/products/scalp-serum/result.png',
    usage: '/images/products/scalp-serum/lifestyle.png',
  },
  
  'skin-repair-cream': {
    hero: '/images/products/skin-cream/hero.png',
    detail: '/images/products/skin-cream/application.png',
    lifestyle: '/images/products/skin-cream/result.png',
    usage: '/images/products/skin-cream/lifestyle.png',
  },}

/**
 * Gets all images for a product as an array
 */
export function getProductImages(productSlug: string): string[] {
  const imageSet = productImageMap[productSlug]
  
  if (!imageSet) {
    // Fallback to placeholder
    return [
      'https://images.unsplash.com/photo-1584512814423-69f8b3e1d919?w=800&h=800&fit=crop',
    ]
  }
  
  const images: string[] = [imageSet.hero]
  
  if (imageSet.detail) images.push(imageSet.detail)
  if (imageSet.lifestyle) images.push(imageSet.lifestyle)
  if (imageSet.usage) images.push(imageSet.usage)
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
 * Category image mapping
 */
export const categoryImageMap: Record<string, string> = {
  'mastectomy': '/images/categories/mastectomy.png',
  'chemotherapy': '/images/categories/chemotherapy.png',
  'lymphedema': '/images/categories/lymphedema.jpg',
  'wigs': '/images/categories/wigs.png',
  'premium-wigs': '/images/categories/premium-wigs.png',
  'cosmetic-recovery': '/images/categories/cosmetic-recovery.png',
}

/**
 * Gets the hero image for a category
 */
export function getCategoryImage(category: string): string {
  return categoryImageMap[category] || '/images/logo.jpeg'
}
