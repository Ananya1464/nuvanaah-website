/**
 * NUVANAAH PRODUCT CATALOG
 * All prices include 10% markup from wholesale cost
 * Last updated: February 7, 2026
 */

import { Product } from './types'

export const products: Product[] = [
  // POST-SURGERY ESSENTIALS
  { id: '1', name: 'Mastectomy Prosthesis with Cover', slug: 'mastectomy-prosthesis-cover', price: '1099', regular_price: '1099', description: 'Medical-grade silicone prosthesis with breathable cover.', short_description: 'Medical-grade silicone prosthesis', categories: [{ id: 1, name: 'Post-Surgery Essentials', slug: 'post-surgery-essentials' }], images: [{ id: 1, src: '/images/products/mastectomy-prosthesis/hero.jpg', alt: 'Mastectomy Prosthesis' }, { id: 2, src: '/images/products/mastectomy-prosthesis/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/mastectomy-prosthesis/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/mastectomy-prosthesis/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false, featured: true },
  { id: '2', name: 'Mastectomy Bra - Front Opening', slug: 'mastectomy-bra-front-opening', price: '879', regular_price: '879', description: 'Front-zip bra with prosthesis pockets.', short_description: 'Front-zip bra with pockets', categories: [{ id: 1, name: 'Post-Surgery Essentials', slug: 'post-surgery-essentials' }], images: [{ id: 1, src: '/images/products/mastectomy-bra-front/hero.jpg', alt: 'Mastectomy Bra' }, { id: 2, src: '/images/products/mastectomy-bra-front/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/mastectomy-bra-front/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/mastectomy-bra-front/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false, featured: true },
  { id: '3', name: 'Arm Rest Pillow with Cover', slug: 'arm-rest-pillow-cover', price: '659', regular_price: '659', description: 'Memory foam pillow for arm elevation.', short_description: 'Supportive arm pillow', categories: [{ id: 1, name: 'Post-Surgery Essentials', slug: 'post-surgery-essentials' }], images: [{ id: 1, src: '/images/products/arm-rest-pillow/hero.jpg', alt: 'Arm Pillow' }, { id: 2, src: '/images/products/arm-rest-pillow/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/arm-rest-pillow/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/arm-rest-pillow/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false },
  { id: '4', name: 'Special Fabric Towel', slug: 'special-fabric-towel', price: '879', regular_price: '879', description: 'Ultra-soft bamboo towel for sensitive skin.', short_description: 'Gentle bamboo towel', categories: [{ id: 1, name: 'Post-Surgery Essentials', slug: 'post-surgery-essentials' }], images: [{ id: 1, src: '/images/products/special-fabric-towel/hero.jpg', alt: 'Towel' }, { id: 2, src: '/images/products/special-fabric-towel/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/special-fabric-towel/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/special-fabric-towel/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false },
  // CHEMOTHERAPY SUPPORT
  { id: '5', name: 'Respiratory Mask', slug: 'respiratory-mask', price: '329', regular_price: '329', description: 'Medical-grade 3-layer mask for protection.', short_description: 'Protective 3-layer mask', categories: [{ id: 2, name: 'Chemotherapy Support', slug: 'chemotherapy-support' }], images: [{ id: 1, src: '/images/products/respiratory-mask/hero.jpg', alt: 'Mask' }, { id: 2, src: '/images/products/respiratory-mask/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/respiratory-mask/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/respiratory-mask/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false, featured: true },
  { id: '6', name: 'Sling Bag for Medical Supplies', slug: 'sling-bag-medical', price: '549', regular_price: '549', description: 'Compact bag for medications and essentials.', short_description: 'Organized medical bag', categories: [{ id: 2, name: 'Chemotherapy Support', slug: 'chemotherapy-support' }], images: [{ id: 1, src: '/images/products/sling-bag/hero.jpg', alt: 'Sling Bag' }, { id: 2, src: '/images/products/sling-bag/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/sling-bag/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/sling-bag/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false },
  { id: '7', name: 'Soft Cotton Napkin', slug: 'soft-cotton-napkin', price: '329', regular_price: '329', description: 'Organic cotton napkin, pack of 3.', short_description: 'Gentle napkin (pack of 3)', categories: [{ id: 2, name: 'Chemotherapy Support', slug: 'chemotherapy-support' }], images: [{ id: 1, src: '/images/products/cotton-napkin/hero.jpg', alt: 'Napkin' }, { id: 2, src: '/images/products/cotton-napkin/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/cotton-napkin/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/cotton-napkin/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false },
  // MEDICAL WIGS
  { id: '8', name: 'Human Hair Medical Wig - 14 inch', slug: 'medical-wig-14-inch', price: '9899', regular_price: '9899', description: '100% human hair wig, shoulder-length (14").', short_description: '14" medical-grade wig', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/medical-wig-14/hero.jpg', alt: 'Medical Wig 14"' }, { id: 2, src: '/images/products/medical-wig-14/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/medical-wig-14/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/medical-wig-14/color.jpg', alt: 'Colors' }], stock_status: 'instock', on_sale: false, featured: true },
  { id: '9', name: 'Human Hair Medical Wig - 18 inch', slug: 'medical-wig-18-inch', price: '12649', regular_price: '12649', description: '100% human hair wig, mid-length (18").', short_description: '18" medical-grade wig', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/medical-wig-18/hero.jpg', alt: 'Medical Wig 18"' }, { id: 2, src: '/images/products/medical-wig-18/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/medical-wig-18/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/medical-wig-18/color.jpg', alt: 'Colors' }], stock_status: 'instock', on_sale: false, featured: true },
  { id: '10', name: 'Human Hair Medical Wig - 22 inch', slug: 'medical-wig-22-inch', price: '15949', regular_price: '15949', description: '100% human hair wig, long (22").', short_description: '22" medical-grade wig', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/medical-wig-22/hero.jpg', alt: 'Medical Wig 22"' }, { id: 2, src: '/images/products/medical-wig-22/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/medical-wig-22/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/medical-wig-22/color.jpg', alt: 'Colors' }], stock_status: 'instock', on_sale: false },
  // PREMIUM WIGS
  { id: '11', name: 'Premium Human Hair Wig - 14 inch', slug: 'premium-wig-14-inch', price: '17599', regular_price: '17599', description: 'Premium wig with higher density (14").', short_description: '14" premium wig', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/premium-wig-14/hero.jpg', alt: 'Premium Wig 14"' }, { id: 2, src: '/images/products/premium-wig-14/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/premium-wig-14/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/premium-wig-14/color.jpg', alt: 'Colors' }], stock_status: 'instock', on_sale: false, featured: true },
  { id: '12', name: 'Premium Human Hair Wig - 16 inch', slug: 'premium-wig-16-inch', price: '19799', regular_price: '19799', description: 'Premium wig, medium length (16").', short_description: '16" premium wig', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/premium-wig-16/hero.jpg', alt: 'Premium Wig 16"' }, { id: 2, src: '/images/products/premium-wig-16/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/premium-wig-16/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/premium-wig-16/color.jpg', alt: 'Colors' }], stock_status: 'instock', on_sale: false },
  { id: '13', name: 'Premium Human Hair Wig - 18 inch', slug: 'premium-wig-18-inch', price: '21999', regular_price: '21999', description: 'Premium wig with highest density (18").', short_description: '18" premium wig', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/premium-wig-18/hero.jpg', alt: 'Premium Wig 18"' }, { id: 2, src: '/images/products/premium-wig-18/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/premium-wig-18/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/premium-wig-18/color.jpg', alt: 'Colors' }], stock_status: 'instock', on_sale: false, featured: true },
  { id: '14', name: 'Premium Human Hair Wig - 20 inch', slug: 'premium-wig-20-inch', price: '24199', regular_price: '24199', description: 'Premium wig, long style (20").', short_description: '20" premium wig', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/premium-wig-20/hero.jpg', alt: 'Premium Wig 20"' }, { id: 2, src: '/images/products/premium-wig-20/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/premium-wig-20/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/premium-wig-20/color.jpg', alt: 'Colors' }], stock_status: 'instock', on_sale: false },
  { id: '15', name: 'Premium Human Hair Wig - 22 inch', slug: 'premium-wig-22-inch', price: '26399', regular_price: '26399', description: 'Premium wig, extra-long (22").', short_description: '22" premium wig', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/premium-wig-22/hero.jpg', alt: 'Premium Wig 22"' }, { id: 2, src: '/images/products/premium-wig-22/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/premium-wig-22/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/premium-wig-22/color.jpg', alt: 'Colors' }], stock_status: 'instock', on_sale: false },
  { id: '16', name: 'Premium Human Hair Wig - 24 inch', slug: 'premium-wig-24-inch', price: '29149', regular_price: '29149', description: 'Premium wig, ultra-long (24").', short_description: '24" premium wig', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/premium-wig-24/hero.jpg', alt: 'Premium Wig 24"' }, { id: 2, src: '/images/products/premium-wig-24/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/premium-wig-24/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/premium-wig-24/color.jpg', alt: 'Colors' }], stock_status: 'instock', on_sale: false, featured: true },
  // HEAD ACCESSORIES
  { id: '17', name: 'Head Scarf with Hair Lace', slug: 'head-scarf-hair-lace', price: '4124', regular_price: '4124', description: 'Elegant scarf with natural hair lace front.', short_description: 'Scarf with hair front', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/scarf-hair-lace/hero.jpg', alt: 'Head Scarf' }, { id: 2, src: '/images/products/scarf-hair-lace/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/scarf-hair-lace/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/scarf-hair-lace/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false, featured: true },
  { id: '18', name: 'Printed Head Scarf', slug: 'printed-head-scarf', price: '879', regular_price: '879', description: 'Soft cotton scarf with elegant print.', short_description: 'Stylish printed scarf', categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }], images: [{ id: 1, src: '/images/products/printed-scarf/hero.jpg', alt: 'Printed Scarf' }, { id: 2, src: '/images/products/printed-scarf/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/printed-scarf/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/printed-scarf/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false },
  // LYMPHEDEMA MANAGEMENT
  { id: '19', name: 'Lymphoedema Compression Sleeves', slug: 'lymphoedema-sleeves', price: '2749', regular_price: '2749', description: 'Medical-grade compression sleeve.', short_description: 'Medical compression sleeve', categories: [{ id: 4, name: 'Lymphedema Management', slug: 'lymphedema-management' }], images: [{ id: 1, src: '/images/products/lymphoedema-sleeves/hero.jpg', alt: 'Compression Sleeve' }, { id: 2, src: '/images/products/lymphoedema-sleeves/detail.jpg', alt: 'Detail' }, { id: 3, src: '/images/products/lymphoedema-sleeves/lifestyle.jpg', alt: 'Lifestyle' }, { id: 4, src: '/images/products/lymphoedema-sleeves/usage.jpg', alt: 'Usage' }], stock_status: 'instock', on_sale: false, featured: true },
]

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) =>
    product.categories.some((cat) => cat.slug === categorySlug)
  )
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getAllCategories() {
  const categoriesMap = new Map()
  products.forEach((product) => {
    product.categories.forEach((category) => {
      if (!categoriesMap.has(category.slug)) {
        categoriesMap.set(category.slug, {
          ...category,
          count: products.filter(p => 
            p.categories.some(c => c.slug === category.slug)
          ).length
        })
      }
    })
  })
  return Array.from(categoriesMap.values())
}

export function getAllProducts(): Product[] {
  return products
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.short_description.toLowerCase().includes(lowercaseQuery)
  )
}
