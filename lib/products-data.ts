/**
 * NUVANAAH PRODUCT CATALOG
 * Updated: February 9, 2026
 * 12 Products Total: 10 Simple + 2 Variable (Wigs)
 */

import { Product } from './types'

// TODO: Replace with real DB query before production launch
// Slugs here must match /products/category/[category] routes exactly
export const categoryMappings: { [key: string]: string } = {
  'post-surgery': 'Post-Surgery',
  'chemo-essentials': 'Chemo Essentials',
  'wigs-hair': 'Wigs & Hair',
  'lymphedema': 'Lymphedema',
  'sensitive-skin': 'Sensitive Skin',
}

export const categoryDisplayNames: { [key: string]: string } = {
  'post-surgery': 'Post-Surgery Care',
  'chemo-essentials': 'Chemo Essentials',
  'wigs-hair': 'Wigs & Hair',
  'lymphedema': 'Lymphedema Care',
  'sensitive-skin': 'Sensitive Skin',
}

export const products: Product[] = [
  // CHEMOTHERAPY SUPPORT PRODUCTS
  {
    id: '1',
    name: 'Sling Bag for Medical Supplies',
    slug: 'sling-bag-medical',
    price: '500',
    regular_price: '500',
    description: 'Compact and organized bag for carrying medications, medical supplies, and personal essentials during chemotherapy sessions. Features multiple compartments and adjustable strap.',
    short_description: 'Organized medical supply bag',
    categories: [{ id: 2, name: 'Chemo Essentials', slug: 'chemo-essentials' }],
    images: [
      { id: 1, src: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800', alt: 'Medical Sling Bag' },
      { id: 2, src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800', alt: 'Bag Interior' },
      { id: 3, src: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=800', alt: 'Lifestyle' },
      { id: 4, src: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800', alt: 'Usage' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true
  },

  // POST-SURGERY ESSENTIALS
  {
    id: '2',
    name: 'Arm Rest Pillow with Cover',
    slug: 'arm-rest-pillow-cover',
    price: '600',
    regular_price: '600',
    description: 'Memory foam pillow designed for post-mastectomy arm elevation and comfort. Helps reduce lymphedema risk and provides gentle support. Includes washable cover.',
    short_description: 'Supportive arm rest pillow',
    categories: [{ id: 1, name: 'Post-Surgery Care', slug: 'post-surgery' }],
    images: [
      { id: 1, src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800', alt: 'Arm Rest Pillow' },
      { id: 2, src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800', alt: 'Detail View' },
      { id: 3, src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800', alt: 'Usage' },
      { id: 4, src: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800', alt: 'Lifestyle' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true
  },

  {
    id: '3',
    name: 'Mastectomy Prosthesis with Cover',
    slug: 'mastectomy-prosthesis-cover',
    price: '1000',
    regular_price: '1000',
    description: 'Medical-grade silicone breast prosthesis with breathable fabric cover. Natural shape and feel, lightweight design for all-day comfort. Available in multiple sizes.',
    short_description: 'Medical-grade silicone prosthesis',
    categories: [{ id: 1, name: 'Post-Surgery Care', slug: 'post-surgery' }],
    images: [
      { id: 1, src: '/images/products/mastectomy-prosthesis/1.png', alt: 'Mastectomy Prosthesis' },
      { id: 2, src: '/images/products/mastectomy-prosthesis/2.png', alt: 'Product Detail' },
      { id: 3, src: '/images/products/mastectomy-prosthesis/4.png', alt: 'With Cover' },
      { id: 4, src: '/images/products/mastectomy-prosthesis/5.png', alt: 'Size Options' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true
  },

  {
    id: '4',
    name: 'Mastectomy Bra - Front Opening',
    slug: 'mastectomy-bra-front-opening',
    price: '800',
    regular_price: '800',
    description: 'Comfortable front-zip mastectomy bra with built-in prosthesis pockets. Soft fabric, adjustable straps, and easy front closure for post-surgery convenience.',
    short_description: 'Front-zip bra with pockets',
    categories: [{ id: 1, name: 'Post-Surgery Care', slug: 'post-surgery' }],
    images: [
      { id: 1, src: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800', alt: 'Mastectomy Bra' },
      { id: 2, src: 'https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=800', alt: 'Front Opening' },
      { id: 3, src: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800', alt: 'Detail View' },
      { id: 4, src: 'https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=800', alt: 'Lifestyle' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true
  },

  // CHEMOTHERAPY SUPPORT
  {
    id: '5',
    name: 'Respiratory Mask',
    slug: 'respiratory-mask',
    price: '300',
    regular_price: '300',
    description: 'Medical-grade 3-layer protective mask for chemotherapy patients. Soft inner layer, efficient filtration, adjustable ear loops for comfortable extended wear.',
    short_description: 'Protective 3-layer mask',
    categories: [{ id: 2, name: 'Chemo Essentials', slug: 'chemo-essentials' }],
    images: [
      { id: 1, src: '/images/products/respiratory-mask/Firefly_Gemini Flash_5. Respiratory Maskhero.jpgWhite 614816 hIy.png', alt: 'Respiratory Mask' },
      { id: 2, src: '/images/products/respiratory-mask/Firefly_Gemini Flash_detail.jpgClose-up of mask\'s 3-l 614816 J2q.png', alt: 'Mask Layers Detail' },
      { id: 3, src: '/images/products/respiratory-mask/Firefly_Gemini Flash_detail.jpgClose-up of mask\'s 3-l 790799 9X2.png', alt: '3-Layer Protection' },
      { id: 4, src: '/images/products/respiratory-mask/Firefly_Gemini Flash_usage.jpgSide profile showing pr 583708 bi3.png', alt: 'Side Profile Usage' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true
  },

  // HAIR LOSS SOLUTIONS
  {
    id: '6',
    name: 'Head Scarf with Hair Lace',
    slug: 'head-scarf-hair-lace',
    price: '3750',
    regular_price: '3750',
    description: 'Elegant head scarf with natural-looking hair lace front. Pre-styled hair attached for a natural appearance. Soft, breathable fabric with secure fit.',
    short_description: 'Scarf with hair lace front',
    categories: [{ id: 3, name: 'Wigs & Hair', slug: 'wigs-hair' }],
    images: [
      { id: 1, src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800', alt: 'Head Scarf with Hair' },
      { id: 2, src: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=800', alt: 'Hair Lace Detail' },
      { id: 3, src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800', alt: 'Lifestyle' },
      { id: 4, src: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=800', alt: 'Styling Options' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true
  },

  {
    id: '7',
    name: 'Printed Head Scarf',
    slug: 'printed-head-scarf',
    price: '800',
    regular_price: '800',
    description: 'Soft cotton head scarf with elegant print designs. Comfortable for sensitive scalp, easy to tie, available in multiple patterns and colors.',
    short_description: 'Stylish printed scarf',
    categories: [{ id: 3, name: 'Wigs & Hair', slug: 'wigs-hair' }],
    images: [
      { id: 1, src: '/images/products/printed-scarf/chemo-headwear.jpg', alt: 'Printed Scarf' },
      { id: 2, src: 'https://images.unsplash.com/photo-1590393876836-a3468e06f90b?w=800', alt: 'Pattern Detail' },
      { id: 3, src: 'https://images.unsplash.com/photo-1590393876836-a3468e06f90b?w=800', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/printed-scarf/chemo-headwear.jpg', alt: 'Multiple Styles' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: false
  },

  // LYMPHEDEMA MANAGEMENT
  {
    id: '8',
    name: 'Lymphoedema Compression Sleeves',
    slug: 'lymphoedema-sleeves',
    price: '2500',
    regular_price: '2500',
    description: 'Medical-grade compression sleeve for lymphedema management. Graduated compression, breathable fabric, comfortable for all-day wear. Helps reduce swelling.',
    short_description: 'Medical compression sleeve',
    categories: [{ id: 4, name: 'Lymphedema Care', slug: 'lymphedema' }],
    images: [
      { id: 1, src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', alt: 'Compression Sleeve' },
      { id: 2, src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800', alt: 'Detail View' },
      { id: 3, src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800', alt: 'On Arm' },
      { id: 4, src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800', alt: 'Size Guide' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true
  },

  // CHEMOTHERAPY SUPPORT
  {
    id: '9',
    name: 'Special Fabric Towel',
    slug: 'special-fabric-towel',
    price: '800',
    regular_price: '800',
    description: 'Ultra-soft bamboo towel specially designed for sensitive skin during chemotherapy. Hypoallergenic, highly absorbent, and gentle on delicate skin.',
    short_description: 'Gentle bamboo towel',
    categories: [{ id: 5, name: 'Sensitive Skin', slug: 'sensitive-skin' }],
    images: [
      { id: 1, src: '/images/products/special-fabric-towel/bamboo-towels.png', alt: 'Bamboo Towel' },
      { id: 2, src: 'https://images.unsplash.com/photo-1582735689249-0c9f08c96d81?w=800', alt: 'Fabric Detail' },
      { id: 3, src: 'https://images.unsplash.com/photo-1582735689249-0c9f08c96d81?w=800', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/special-fabric-towel/bamboo-towels.png', alt: 'Size Options' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: false
  },

  {
    id: '10',
    name: 'Soft Cotton Napkin',
    slug: 'soft-cotton-napkin',
    price: '300',
    regular_price: '300',
    description: 'Organic cotton napkins, pack of 3. Extra soft for sensitive skin, highly absorbent, reusable and eco-friendly. Perfect for chemotherapy patients.',
    short_description: 'Gentle napkin (pack of 3)',
    categories: [{ id: 5, name: 'Sensitive Skin', slug: 'sensitive-skin' }],
    images: [
      { id: 1, src: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800', alt: 'Cotton Napkin' },
      { id: 2, src: 'https://images.unsplash.com/photo-1582735689249-0c9f08c96d81?w=800', alt: 'Fabric Texture' },
      { id: 3, src: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800', alt: 'Pack of 3' },
      { id: 4, src: 'https://images.unsplash.com/photo-1582735689249-0c9f08c96d81?w=800', alt: 'Detail' }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: false
  },

  // MEDICAL WIG - Variable Product
  {
    id: '11',
    name: 'Human Hair Medical Wig',
    slug: 'medical-wig',
    type: 'variable',
    price: '9899',
    regular_price: '9899',
    description: '100% human hair wig, medical-grade quality. Available in multiple lengths. Perfect for hair loss during chemotherapy treatment. Natural look with comfortable cap construction, adjustable straps, and breathable design.',
    short_description: 'Medical-grade human hair wig',
    categories: [{ id: 3, name: 'Wigs & Hair', slug: 'wigs-hair' }],
    images: [
      { id: 1, src: '/images/products/medical-wig/wig5.png', alt: 'Medical Wig' },
      { id: 2, src: '/images/products/medical-wig/_DSC6694.jpg', alt: 'Detail View' },
      { id: 3, src: '/images/products/medical-wig/_DSC6695.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/medical-wig/_DSC6709.jpg', alt: 'Color Options' },
      { id: 5, src: '/images/products/medical-wig/guide.png', alt: 'Size Guide' }
    ],
    variations: [
      {
        id: '11-1',
        length: '14"',
        price: '9899',
        regular_price: '9899',
        description: 'Shoulder-length medical wig (14 inches)',
        images: [
          { id: 1, src: '/images/products/medical-wig/wig5.png', alt: 'Medical Wig 14"' },
          { id: 2, src: '/images/products/medical-wig/_DSC6694.jpg', alt: 'Detail View' },
          { id: 3, src: '/images/products/medical-wig/_DSC6695.jpg', alt: 'Lifestyle' },
          { id: 4, src: '/images/products/medical-wig/_DSC6709.jpg', alt: 'Color Options' },
          { id: 5, src: '/images/products/medical-wig/guide.png', alt: 'Size Guide' }
        ],
        stock_status: 'instock'
      },
      {
        id: '11-2',
        length: '18"',
        price: '12649',
        regular_price: '12649',
        description: 'Mid-length medical wig (18 inches)',
        images: [
          { id: 1, src: '/images/products/medical-wig/wig5.png', alt: 'Medical Wig 18"' },
          { id: 2, src: '/images/products/medical-wig/_DSC6694.jpg', alt: 'Detail View' },
          { id: 3, src: '/images/products/medical-wig/_DSC6695.jpg', alt: 'Lifestyle' },
          { id: 4, src: '/images/products/medical-wig/_DSC6709.jpg', alt: 'Color Options' },
          { id: 5, src: '/images/products/medical-wig/guide.png', alt: 'Size Guide' }
        ],
        stock_status: 'instock'
      },
      {
        id: '11-3',
        length: '22"',
        price: '15949',
        regular_price: '15949',
        description: 'Long medical wig (22 inches)',
        images: [
          { id: 1, src: '/images/products/medical-wig/wig5.png', alt: 'Medical Wig 22"' },
          { id: 2, src: '/images/products/medical-wig/_DSC6694.jpg', alt: 'Detail View' },
          { id: 3, src: '/images/products/medical-wig/_DSC6695.jpg', alt: 'Lifestyle' },
          { id: 4, src: '/images/products/medical-wig/_DSC6709.jpg', alt: 'Color Options' },
          { id: 5, src: '/images/products/medical-wig/guide.png', alt: 'Size Guide' }
        ],
        stock_status: 'instock'
      }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true
  },

  // PREMIUM WIG - Variable Product
  {
    id: '12',
    name: 'Premium Human Hair Wig',
    slug: 'premium-wig',
    type: 'variable',
    price: '17599',
    regular_price: '17599',
    description: 'Premium quality 100% human hair wig with higher density and superior craftsmanship. Multiple length options available. Features natural hairline, breathable cap, adjustable straps for perfect fit, and ultra-soft texture.',
    short_description: 'Premium human hair wig',
    categories: [{ id: 3, name: 'Wigs & Hair', slug: 'wigs-hair' }],
    images: [
      { id: 1, src: '/images/products/premium-wig/hero.png', alt: 'Premium Wig' },
      { id: 2, src: '/images/products/premium-wig/_DSC6694.jpg', alt: 'Detail View' },
      { id: 3, src: '/images/products/premium-wig/_DSC6695.jpg', alt: 'Lifestyle View' },
      { id: 4, src: '/images/products/premium-wig/_DSC6709.jpg', alt: 'Color Detail' },
      { id: 5, src: '/images/products/premium-wig/wig3.png', alt: 'Style View 1' },
      { id: 6, src: '/images/products/premium-wig/wig4.png', alt: 'Style View 2' },
      { id: 7, src: '/images/products/premium-wig/wig5.png', alt: 'Style View 3' },
      { id: 8, src: '/images/products/premium-wig/guide.png', alt: 'Size Guide' }
    ],
    variations: [
      {
        id: '12-1',
        length: '14"',
        price: '17599',
        regular_price: '17599',
        description: 'Premium wig with higher density (14 inches)',
        images: [
          { id: 1, src: '/images/products/premium-wig/hero.png', alt: 'Premium Wig 14"' },
          { id: 2, src: '/images/products/premium-wig/_DSC6694.jpg', alt: 'Detail View' },
          { id: 3, src: '/images/products/premium-wig/_DSC6695.jpg', alt: 'Lifestyle' },
          { id: 4, src: '/images/products/premium-wig/_DSC6709.jpg', alt: 'Color Detail' },
          { id: 5, src: '/images/products/premium-wig/wig3.png', alt: 'Style 1' },
          { id: 6, src: '/images/products/premium-wig/wig4.png', alt: 'Style 2' },
          { id: 7, src: '/images/products/premium-wig/wig5.png', alt: 'Style 3' },
          { id: 8, src: '/images/products/premium-wig/guide.png', alt: 'Size Guide' }
        ],
        stock_status: 'instock'
      },
      {
        id: '12-2',
        length: '16"',
        price: '19799',
        regular_price: '19799',
        description: 'Premium wig, medium length (16 inches)',
        images: [
          { id: 1, src: '/images/products/premium-wig/hero.png', alt: 'Premium Wig 16"' },
          { id: 2, src: '/images/products/premium-wig/_DSC6694.jpg', alt: 'Detail View' },
          { id: 3, src: '/images/products/premium-wig/_DSC6695.jpg', alt: 'Lifestyle' },
          { id: 4, src: '/images/products/premium-wig/_DSC6709.jpg', alt: 'Color Detail' },
          { id: 5, src: '/images/products/premium-wig/wig3.png', alt: 'Style 1' },
          { id: 6, src: '/images/products/premium-wig/wig4.png', alt: 'Style 2' },
          { id: 7, src: '/images/products/premium-wig/wig5.png', alt: 'Style 3' },
          { id: 8, src: '/images/products/premium-wig/guide.png', alt: 'Size Guide' }
        ],
        stock_status: 'instock'
      },
      {
        id: '12-3',
        length: '18"',
        price: '21999',
        regular_price: '21999',
        description: 'Premium wig with highest density (18 inches)',
        images: [
          { id: 1, src: '/images/products/premium-wig/hero.png', alt: 'Premium Wig 18"' },
          { id: 2, src: '/images/products/premium-wig/_DSC6694.jpg', alt: 'Detail View' },
          { id: 3, src: '/images/products/premium-wig/_DSC6695.jpg', alt: 'Lifestyle' },
          { id: 4, src: '/images/products/premium-wig/_DSC6709.jpg', alt: 'Color Detail' },
          { id: 5, src: '/images/products/premium-wig/wig3.png', alt: 'Style 1' },
          { id: 6, src: '/images/products/premium-wig/wig4.png', alt: 'Style 2' },
          { id: 7, src: '/images/products/premium-wig/wig5.png', alt: 'Style 3' },
          { id: 8, src: '/images/products/premium-wig/guide.png', alt: 'Size Guide' }
        ],
        stock_status: 'instock'
      },
      {
        id: '12-4',
        length: '20"',
        price: '24199',
        regular_price: '24199',
        description: 'Premium wig, long style (20 inches)',
        images: [
          { id: 1, src: '/images/products/premium-wig/hero.png', alt: 'Premium Wig 20"' },
          { id: 2, src: '/images/products/premium-wig/_DSC6694.jpg', alt: 'Detail View' },
          { id: 3, src: '/images/products/premium-wig/_DSC6695.jpg', alt: 'Lifestyle' },
          { id: 4, src: '/images/products/premium-wig/_DSC6709.jpg', alt: 'Color Detail' },
          { id: 5, src: '/images/products/premium-wig/wig3.png', alt: 'Style 1' },
          { id: 6, src: '/images/products/premium-wig/wig4.png', alt: 'Style 2' },
          { id: 7, src: '/images/products/premium-wig/wig5.png', alt: 'Style 3' },
          { id: 8, src: '/images/products/premium-wig/guide.png', alt: 'Size Guide' }
        ],
        stock_status: 'instock'
      },
      {
        id: '12-5',
        length: '22"',
        price: '26399',
        regular_price: '26399',
        description: 'Premium wig, extra-long (22 inches)',
        images: [
          { id: 1, src: '/images/products/premium-wig/hero.png', alt: 'Premium Wig 22"' },
          { id: 2, src: '/images/products/premium-wig/_DSC6694.jpg', alt: 'Detail View' },
          { id: 3, src: '/images/products/premium-wig/_DSC6695.jpg', alt: 'Lifestyle' },
          { id: 4, src: '/images/products/premium-wig/_DSC6709.jpg', alt: 'Color Detail' },
          { id: 5, src: '/images/products/premium-wig/wig3.png', alt: 'Style 1' },
          { id: 6, src: '/images/products/premium-wig/wig4.png', alt: 'Style 2' },
          { id: 7, src: '/images/products/premium-wig/wig5.png', alt: 'Style 3' },
          { id: 8, src: '/images/products/premium-wig/guide.png', alt: 'Size Guide' }
        ],
        stock_status: 'instock'
      },
      {
        id: '12-6',
        length: '24"',
        price: '29149',
        regular_price: '29149',
        description: 'Premium wig, ultra-long (24 inches)',
        images: [
          { id: 1, src: '/images/products/premium-wig/hero.png', alt: 'Premium Wig 24"' },
          { id: 2, src: '/images/products/premium-wig/_DSC6694.jpg', alt: 'Detail View' },
          { id: 3, src: '/images/products/premium-wig/_DSC6695.jpg', alt: 'Lifestyle' },
          { id: 4, src: '/images/products/premium-wig/_DSC6709.jpg', alt: 'Color Detail' },
          { id: 5, src: '/images/products/premium-wig/wig3.png', alt: 'Style 1' },
          { id: 6, src: '/images/products/premium-wig/wig4.png', alt: 'Style 2' },
          { id: 7, src: '/images/products/premium-wig/wig5.png', alt: 'Style 3' },
          { id: 8, src: '/images/products/premium-wig/guide.png', alt: 'Size Guide' }
        ],
        stock_status: 'instock'
      }
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true
  }
]

// Helper Functions
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) =>
    product.categories?.some((cat) => cat.slug === categorySlug)
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

export function getProductVariation(productId: string, variationId: string) {
  const product = getProductById(productId)
  if (product && product.variations) {
    return product.variations.find(v => v.id === variationId)
  }
  return undefined
}

export function getPriceRange(product: Product): { min: number; max: number } | null {
  if (!product.variations || product.variations.length === 0) {
    return null
  }
  
  const prices = product.variations.map(v => Number(v.price))
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  }
}

export function isVariableProduct(product: Product): boolean {
  return product.type === 'variable' && !!product.variations && product.variations.length > 0
}

export function getAllCategories() {
  const categoriesMap = new Map()
  products.forEach((product) => {
    product.categories?.forEach((category) => {
      if (!categoriesMap.has(category.slug)) {
        categoriesMap.set(category.slug, {
          ...category,
          count: products.filter(p => 
            p.categories?.some(c => c.slug === category.slug)
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
      (product.short_description && product.short_description.toLowerCase().includes(lowercaseQuery))
  )
}
