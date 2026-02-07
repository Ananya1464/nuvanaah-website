# Product Catalog Update - Implementation Guide
## All Changes with 10% Markup Applied

## ⚠️ CRITICAL: Products-data.ts is TOO LARGE

The new products-data.ts file is approximately **1,500 lines** with all 19 products fully detailed.

### **Solution Options:**

#### **Option 1: Simplified Product Structure** ✅ RECOMMENDED
Keep products-data.ts minimal with essential data, generate full descriptions dynamically or on individual product pages.

```typescript
// Simplified structure - 400 lines total
{
  id: '1',
  name: 'Mastectomy Prosthesis with Cover',
  slug: 'mastectomy-prosthesis-cover',
  price: '1099',
  category: 'Post-Surgery Essentials',
  featured: true,
  // Full descriptions loaded on product page
}
```

#### **Option 2: Split into Multiple Files**
- `lib/products/post-surgery.ts`
- `lib/products/chemotherapy.ts`
- `lib/products/wigs.ts`
- `lib/products/lymphedema.ts`
- `lib/products/index.ts` (combines all)

#### **Option 3: Use Database** (Future)
Move product data to Supabase for scalability

---

## 🎯 What I'll Implement Now (Simplified Approach)

### File 1: `lib/products-data.ts` (Simplified - 300 lines)
```typescript
import { Product } from './types'

export const products: Product[] = [
  // POST-SURGERY ESSENTIALS (4 products)
  {
    id: '1',
    name: 'Mastectomy Prosthesis with Cover',
    slug: 'mastectomy-prosthesis-cover',
    price: '1099',
    regular_price: '1099',
    description: 'Medical-grade silicone prosthesis with breathable cover. Lightweight design for post-mastectomy comfort.',
    short_description: 'Medical-grade silicone prosthesis',
    categories: [{ id: 1, name: 'Post-Surgery Essentials', slug: 'post-surgery-essentials' }],
    images: [
      { id: 1, src: '/images/products/mastectomy-prosthesis/hero.jpg', alt: 'Mastectomy Prosthesis' },
      { id: 2, src: '/images/products/mastectomy-prosthesis/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/mastectomy-prosthesis/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/mastectomy-prosthesis/usage.jpg', alt: 'Usage Guide' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },
  {
    id: '2',
    name: 'Mastectomy Bra - Front Opening',
    slug: 'mastectomy-bra-front-opening',
    price: '879',
    regular_price: '879',
    description: 'Front-zip bra with prosthesis pockets. Soft cotton for post-surgery comfort.',
    short_description: 'Front-zip bra with pockets',
    categories: [{ id: 1, name: 'Post-Surgery Essentials', slug: 'post-surgery-essentials' }],
    images: [
      { id: 1, src: '/images/products/mastectomy-bra-front/hero.jpg', alt: 'Mastectomy Bra' },
      { id: 2, src: '/images/products/mastectomy-bra-front/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/mastectomy-bra-front/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/mastectomy-bra-front/usage.jpg', alt: 'Usage' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },
  {
    id: '3',
    name: 'Arm Rest Pillow with Cover',
    slug: 'arm-rest-pillow-cover',
    price: '659',
    regular_price: '659',
    description: 'Memory foam pillow for arm elevation. Includes washable cover.',
    short_description: 'Supportive arm pillow',
    categories: [{ id: 1, name: 'Post-Surgery Essentials', slug: 'post-surgery-essentials' }],
    images: [
      { id: 1, src: '/images/products/arm-rest-pillow/hero.jpg', alt: 'Arm Pillow' },
      { id: 2, src: '/images/products/arm-rest-pillow/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/arm-rest-pillow/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/arm-rest-pillow/usage.jpg', alt: 'Usage' },
    ],
    stock_status: 'instock',
    on_sale: false,
  },
  {
    id: '4',
    name: 'Special Fabric Towel',
    slug: 'special-fabric-towel',
    price: '879',
    regular_price: '879',
    description: 'Ultra-soft bamboo towel for sensitive skin during treatment.',
    short_description: 'Gentle bamboo towel',
    categories: [{ id: 1, name: 'Post-Surgery Essentials', slug: 'post-surgery-essentials' }],
    images: [
      { id: 1, src: '/images/products/special-fabric-towel/hero.jpg', alt: 'Towel' },
      { id: 2, src: '/images/products/special-fabric-towel/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/special-fabric-towel/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/special-fabric-towel/usage.jpg', alt: 'Usage' },
    ],
    stock_status: 'instock',
    on_sale: false,
  },

  // CHEMOTHERAPY SUPPORT (3 products)
  {
    id: '5',
    name: 'Respiratory Mask',
    slug: 'respiratory-mask',
    price: '329',
    regular_price: '329',
    description: 'Medical-grade 3-layer mask for protection during chemotherapy.',
    short_description: 'Protective 3-layer mask',
    categories: [{ id: 2, name: 'Chemotherapy Support', slug: 'chemotherapy-support' }],
    images: [
      { id: 1, src: '/images/products/respiratory-mask/hero.jpg', alt: 'Mask' },
      { id: 2, src: '/images/products/respiratory-mask/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/respiratory-mask/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/respiratory-mask/usage.jpg', alt: 'Usage' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },
  {
    id: '6',
    name: 'Sling Bag for Medical Supplies',
    slug: 'sling-bag-medical',
    price: '549',
    regular_price: '549',
    description: 'Compact bag for medications and treatment essentials.',
    short_description: 'Organized medical bag',
    categories: [{ id: 2, name: 'Chemotherapy Support', slug: 'chemotherapy-support' }],
    images: [
      { id: 1, src: '/images/products/sling-bag/hero.jpg', alt: 'Sling Bag' },
      { id: 2, src: '/images/products/sling-bag/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/sling-bag/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/sling-bag/usage.jpg', alt: 'Usage' },
    ],
    stock_status: 'instock',
    on_sale: false,
  },
  {
    id: '7',
    name: 'Soft Cotton Napkin',
    slug: 'soft-cotton-napkin',
    price: '329',
    regular_price: '329',
    description: 'Organic cotton napkin, gentle on sensitive skin. Pack of 3.',
    short_description: 'Gentle napkin (pack of 3)',
    categories: [{ id: 2, name: 'Chemotherapy Support', slug: 'chemotherapy-support' }],
    images: [
      { id: 1, src: '/images/products/cotton-napkin/hero.jpg', alt: 'Napkin' },
      { id: 2, src: '/images/products/cotton-napkin/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/cotton-napkin/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/cotton-napkin/usage.jpg', alt: 'Usage' },
    ],
    stock_status: 'instock',
    on_sale: false,
  },

  // MEDICAL WIGS (3 lengths)
  {
    id: '8',
    name: 'Human Hair Medical Wig - 14 inch',
    slug: 'medical-wig-14-inch',
    price: '9899',
    regular_price: '9899',
    description: '100% human hair wig with breathable cap. Shoulder-length (14").',
    short_description: '14" medical-grade wig',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/medical-wig-14/hero.jpg', alt: 'Medical Wig 14"' },
      { id: 2, src: '/images/products/medical-wig-14/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/medical-wig-14/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/medical-wig-14/color.jpg', alt: 'Colors' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },
  {
    id: '9',
    name: 'Human Hair Medical Wig - 18 inch',
    slug: 'medical-wig-18-inch',
    price: '12649',
    regular_price: '12649',
    description: '100% human hair wig. Mid-length style (18").',
    short_description: '18" medical-grade wig',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/medical-wig-18/hero.jpg', alt: 'Medical Wig 18"' },
      { id: 2, src: '/images/products/medical-wig-18/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/medical-wig-18/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/medical-wig-18/color.jpg', alt: 'Colors' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },
  {
    id: '10',
    name: 'Human Hair Medical Wig - 22 inch',
    slug: 'medical-wig-22-inch',
    price: '15949',
    regular_price: '15949',
    description: '100% human hair wig. Long flowing style (22").',
    short_description: '22" medical-grade wig',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/medical-wig-22/hero.jpg', alt: 'Medical Wig 22"' },
      { id: 2, src: '/images/products/medical-wig-22/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/medical-wig-22/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/medical-wig-22/color.jpg', alt: 'Colors' },
    ],
    stock_status: 'instock',
    on_sale: false,
  },

  // PREMIUM WIGS (6 lengths)
  {
    id: '11',
    name: 'Premium Human Hair Wig - 14 inch',
    slug: 'premium-wig-14-inch',
    price: '17599',
    regular_price: '17599',
    description: 'Premium wig with higher density. Hand-tied lace front (14").',
    short_description: '14" premium wig',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/premium-wig-14/hero.jpg', alt: 'Premium Wig 14"' },
      { id: 2, src: '/images/products/premium-wig-14/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/premium-wig-14/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/premium-wig-14/color.jpg', alt: 'Colors' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },
  {
    id: '12',
    name: 'Premium Human Hair Wig - 16 inch',
    slug: 'premium-wig-16-inch',
    price: '19799',
    regular_price: '19799',
    description: 'Premium wig with enhanced density. Medium length (16").',
    short_description: '16" premium wig',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/premium-wig-16/hero.jpg', alt: 'Premium Wig 16"' },
      { id: 2, src: '/images/products/premium-wig-16/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/premium-wig-16/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/premium-wig-16/color.jpg', alt: 'Colors' },
    ],
    stock_status: 'instock',
    on_sale: false,
  },
  {
    id: '13',
    name: 'Premium Human Hair Wig - 18 inch',
    slug: 'premium-wig-18-inch',
    price: '21999',
    regular_price: '21999',
    description: 'Premium wig with highest density. Mid-back length (18").',
    short_description: '18" premium wig',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/premium-wig-18/hero.jpg', alt: 'Premium Wig 18"' },
      { id: 2, src: '/images/products/premium-wig-18/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/premium-wig-18/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/premium-wig-18/color.jpg', alt: 'Colors' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },
  {
    id: '14',
    name: 'Premium Human Hair Wig - 20 inch',
    slug: 'premium-wig-20-inch',
    price: '24199',
    regular_price: '24199',
    description: 'Premium wig with superior density. Long style (20").',
    short_description: '20" premium wig',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/premium-wig-20/hero.jpg', alt: 'Premium Wig 20"' },
      { id: 2, src: '/images/products/premium-wig-20/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/premium-wig-20/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/premium-wig-20/color.jpg', alt: 'Colors' },
    ],
    stock_status: 'instock',
    on_sale: false,
  },
  {
    id: '15',
    name: 'Premium Human Hair Wig - 22 inch',
    slug: 'premium-wig-22-inch',
    price: '26399',
    regular_price: '26399',
    description: 'Premium wig with maximum density. Extra-long (22").',
    short_description: '22" premium wig',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/premium-wig-22/hero.jpg', alt: 'Premium Wig 22"' },
      { id: 2, src: '/images/products/premium-wig-22/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/premium-wig-22/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/premium-wig-22/color.jpg', alt: 'Colors' },
    ],
    stock_status: 'instock',
    on_sale: false,
  },
  {
    id: '16',
    name: 'Premium Human Hair Wig - 24 inch',
    slug: 'premium-wig-24-inch',
    price: '29149',
    regular_price: '29149',
    description: 'Premium wig with ultra-density. Ultra-long style (24").',
    short_description: '24" premium wig',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/premium-wig-24/hero.jpg', alt: 'Premium Wig 24"' },
      { id: 2, src: '/images/products/premium-wig-24/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/premium-wig-24/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/premium-wig-24/color.jpg', alt: 'Colors' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },

  // HEAD ACCESSORIES (2 products)
  {
    id: '17',
    name: 'Head Scarf with Hair Lace',
    slug: 'head-scarf-hair-lace',
    price: '4124',
    regular_price: '4124',
    description: 'Elegant scarf with attached natural hair lace front.',
    short_description: 'Scarf with hair front',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/scarf-hair-lace/hero.jpg', alt: 'Head Scarf' },
      { id: 2, src: '/images/products/scarf-hair-lace/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/scarf-hair-lace/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/scarf-hair-lace/usage.jpg', alt: 'Usage' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },
  {
    id: '18',
    name: 'Printed Head Scarf',
    slug: 'printed-head-scarf',
    price: '879',
    regular_price: '879',
    description: 'Soft cotton scarf with elegant print. Multiple styling options.',
    short_description: 'Stylish printed scarf',
    categories: [{ id: 3, name: 'Hair Loss Solutions', slug: 'hair-loss-solutions' }],
    images: [
      { id: 1, src: '/images/products/printed-scarf/hero.jpg', alt: 'Printed Scarf' },
      { id: 2, src: '/images/products/printed-scarf/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/printed-scarf/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/printed-scarf/usage.jpg', alt: 'Usage' },
    ],
    stock_status: 'instock',
    on_sale: false,
  },

  // LYMPHEDEMA MANAGEMENT (1 product)
  {
    id: '19',
    name: 'Lymphoedema Compression Sleeves',
    slug: 'lymphoedema-sleeves',
    price: '2749',
    regular_price: '2749',
    description: 'Medical-grade graduated compression sleeve for lymphedema management.',
    short_description: 'Medical compression sleeve',
    categories: [{ id: 4, name: 'Lymphedema Management', slug: 'lymphedema-management' }],
    images: [
      { id: 1, src: '/images/products/lymphoedema-sleeves/hero.jpg', alt: 'Compression Sleeve' },
      { id: 2, src: '/images/products/lymphoedema-sleeves/detail.jpg', alt: 'Detail' },
      { id: 3, src: '/images/products/lymphoedema-sleeves/lifestyle.jpg', alt: 'Lifestyle' },
      { id: 4, src: '/images/products/lymphoedema-sleeves/usage.jpg', alt: 'Usage' },
    ],
    stock_status: 'instock',
    on_sale: false,
    featured: true,
  },
]

// Helper functions
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
```

---

## File 2: Hero.tsx Slideshow Update

```typescript
// In components/homepage/Hero.tsx
// Find the slides array and replace with:

const slides = [
  {
    icon: '🏠',
    title: 'Welcome to Nuvanaah',
    description: '45+ years of medical expertise in cancer care products',
    link: '/about',
    linkText: 'Learn Our Story',
  },
  {
    icon: '🎀',
    title: 'Post-Surgery Essentials',
    description: 'Mastectomy bras & prosthetics starting ₹659',
    link: '/products/category/post-surgery-essentials',
    linkText: 'Shop Recovery Products',
  },
  {
    icon: '💊',
    title: 'Chemotherapy Support',
    description: 'Protective masks & medical bags from ₹329',
    link: '/products/category/chemotherapy-support',
    linkText: 'View Treatment Essentials',
  },
  {
    icon: '💇‍♀️',
    title: 'Medical & Premium Wigs',
    description: 'Human hair wigs from ₹9,899 to ₹29,149',
    link: '/products/category/hair-loss-solutions',
    linkText: 'Explore Hair Solutions',
  },
  {
    icon: '🤲',
    title: 'Lymphedema Care',
    description: 'Medical compression sleeves at ₹2,749',
    link: '/products/category/lymphedema-management',
    linkText: 'Shop Compression Wear',
  },
]
```

---

## File 3: Categories.tsx Update

```typescript
// In components/homepage/Categories.tsx
// Replace categories array:

const categories = [
  {
    name: 'Post-Surgery Essentials',
    shortName: 'Post-Surgery',
    description: 'Mastectomy bras, prosthetics & recovery support',
    href: '/products/category/post-surgery-essentials',
    image: getCategoryImage('post-surgery-essentials'),
    priceRange: '₹659 - ₹1,099',
    productCount: 4,
  },
  {
    name: 'Chemotherapy Support',
    shortName: 'Chemo Care',
    description: 'Protective masks, bags & treatment essentials',
    href: '/products/category/chemotherapy-support',
    image: getCategoryImage('chemotherapy-support'),
    priceRange: '₹329 - ₹549',
    productCount: 3,
  },
  {
    name: 'Hair Loss Solutions',
    shortName: 'Wigs & Scarves',
    description: 'Medical & premium wigs, head scarves with lace',
    href: '/products/category/hair-loss-solutions',
    image: getCategoryImage('hair-loss-solutions'),
    priceRange: '₹879 - ₹29,149',
    productCount: 11,
  },
  {
    name: 'Lymphedema Management',
    shortName: 'Compression',
    description: 'Medical-grade compression sleeves',
    href: '/products/category/lymphedema-management',
    image: getCategoryImage('lymphedema-management'),
    priceRange: '₹2,749',
    productCount: 1,
  },
]
```

---

## ✅ Ready to Implement

Confirm and I'll apply all changes in one batch operation.
