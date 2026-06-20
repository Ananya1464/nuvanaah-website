import json
import os

with open('d:/nuvaanah/lib/product-content.json', encoding='utf-8') as f:
    content = json.load(f)

# Fix DewLeaf price
if content['dewleaf']['price'] == 0:
    content['dewleaf']['price'] = 1500

folders_map = {
    'comfort-shape':    'bloomform',
    'willow-support':   'WillowSupport',
    'nature-nest':      'NatureNest',
    'airbloom':         'AirBloom',
    'willow-wrap':      'Willow Wrap',
    'flowsleeve':       'FlowSleeve',
    'nest-carry':       'NestCarry',
    'petalwrap':        'petal leaf',
    'dewleaf':          'DewLeaf',
    'browbloom':        'Brow Bloom',
    'bloomtips':        'BloomTips',
    'bloomcrown':       'BloomCrown',
}

base_data = {
    'comfort-shape': {
        'name': 'BloomForm | Breast Form',
        'subtitle': 'Plant-Fiber Breast Form',
        'categories': ['CAT_RECOVERY'],
        'tags': ['after-surgery', 'prosthetic', 'recovery', 'body-support'],
        'shopByNeed': ['after-surgery'],
        'recoveryStage': ['stage-2', 'stage-4'],
        'crossSells': ['willow-support', 'nature-nest', 'nest-carry'],
        'variantLabel': 'Side',
        'variantOptions': ['Left (L)', 'Right (R)'],
        'tagline': 'Straight where it meets the body. Curved where it creates shape.'
    },
    'willow-support': {
        'name': 'Willow Support | Mastectomy Bra',
        'subtitle': 'Post-Surgery Comfort Bra  |  Set of 2',
        'categories': ['CAT_RECOVERY'],
        'tags': ['after-surgery', 'bra', 'drain-management', 'recovery'],
        'shopByNeed': ['after-surgery'],
        'recoveryStage': ['stage-1', 'stage-2', 'stage-3', 'stage-4'],
        'crossSells': ['comfort-shape', 'nature-nest', 'nest-carry'],
        'variantLabel': 'Colour',
        'variantOptions': ['Aparajita', 'Ebony', 'Dusty Miller'],
        'whatsappCTA': False
    },
    'nature-nest': {
        'name': 'Nature Nest | Underarm Pillow',
        'subtitle': 'Underarm Rest Pillow',
        'categories': ['CAT_RECOVERY'],
        'tags': ['after-surgery', 'pillow', 'arm-support', 'recovery'],
        'shopByNeed': ['after-surgery'],
        'recoveryStage': ['stage-1', 'stage-2'],
        'crossSells': ['willow-support', 'nest-carry', 'willow-carry'],
        'variantLabel': 'Print',
        'variantOptions': ['Wildflower Garden', 'Willow Print', 'Aparajita Petals']
    },
    'airbloom': {
        'name': 'AirBloom | Chemo Headscarf',
        'subtitle': 'Hair Scarf System',
        'categories': ['CAT_HAIR'],
        'tags': ['hair-loss', 'scarf', 'hair-system', 'confidence'],
        'shopByNeed': ['hair-loss'],
        'recoveryStage': ['stage-3', 'stage-4'],
        'crossSells': ['browbloom', 'willow-wrap', 'bloomcrown'],
        'variantLabel': 'Colour',
        'variantOptions': ['Dusty Miller', 'Coffee Bean', 'Magnolia', 'Ebony']
    },
    'willow-wrap': {
        'name': 'Willow Wrap | Chemo Headscarf',
        'subtitle': 'Soft Head Scarf Collection',
        'categories': ['CAT_HAIR'],
        'tags': ['hair-loss', 'scarf', 'head-cover', 'confidence'],
        'shopByNeed': ['hair-loss'],
        'recoveryStage': ['stage-3', 'stage-4'],
        'crossSells': ['airbloom', 'browbloom', 'bloomcrown'],
        'variantLabel': 'Print',
        'variantOptions': ['Wildflower Garden', 'Willow Print', 'Aparajita Petals']
    },
    'flowsleeve': {
        'name': 'FlowSleeve | Lymphedema Sleeve',
        'subtitle': 'Lymphedema Compression Sleeve with Holding Belt',
        'categories': ['CAT_RECOVERY'],
        'tags': ['lymphedema', 'arm-sleeve', 'compression', 'recovery'],
        'shopByNeed': ['lymphedema'],
        'recoveryStage': ['stage-2', 'stage-3', 'stage-4'],
        'crossSells': ['willow-support', 'nest-carry', 'nature-nest'],
        'variantLabel': 'Version',
        'variantOptions': ['Indian', 'Imported']
    },
    'nest-carry': {
        'name': 'Nest Carry | Post-Surgery Kit',
        'subtitle': 'Recovery Support Kit',
        'categories': ['CAT_RECOVERY'],
        'tags': ['after-surgery', 'kit', 'recovery', 'gift'],
        'shopByNeed': ['after-surgery'],
        'recoveryStage': ['stage-1', 'stage-2', 'stage-3'],
        'crossSells': ['flowsleeve', 'nature-nest', 'willow-support'],
        'isGiftPopular': True
    },
    'petalwrap': {
        'name': 'PetalWrap | Bamboo Bath Towel',
        'subtitle': 'Comfort Towel Collection',
        'categories': ['CAT_WELLNESS'],
        'tags': ['daily', 'towel', 'bamboo', 'wellness'],
        'shopByNeed': ['daily-comfort'],
        'recoveryStage': ['stage-2', 'stage-3', 'stage-4'],
        'crossSells': ['dewleaf', 'nature-nest', 'nest-carry'],
        'variantLabel': 'Colour',
        'variantOptions': ['Camellia', 'Aparajita', 'Magnolia', 'Jade Vine'],
        'dimensions': '58+ inches × 27–28 inches'
    },
    'dewleaf': {
        'name': 'DewLeaf | Bamboo Face Towel',
        'subtitle': 'Recovery Towel Collection',
        'categories': ['CAT_WELLNESS'],
        'tags': ['daily', 'towel', 'bamboo', 'wellness', 'travel'],
        'shopByNeed': ['daily-comfort'],
        'recoveryStage': ['stage-1', 'stage-2', 'stage-3', 'stage-4'],
        'crossSells': ['petalwrap', 'nature-nest', 'nest-carry'],
        'variantLabel': 'Colour',
        'variantOptions': ['Camellia', 'Aparajita', 'Magnolia', 'Jade Vine'],
        'dimensions': '24 inches × 12 inches',
        'comingSoon': True
    },
    'browbloom': {
        'name': 'BrowBloom | Eyebrow Prosthesis',
        'subtitle': 'Ready-to-Wear Eyebrows',
        'categories': ['CAT_HAIR'],
        'tags': ['hair-loss', 'eyebrows', 'confidence', 'beauty'],
        'shopByNeed': ['hair-loss'],
        'recoveryStage': ['stage-3', 'stage-4'],
        'crossSells': ['airbloom', 'bloomcrown', 'willow-wrap'],
        'variantLabel': 'Shade',
        'variantOptions': ['Coffee Bean', 'Bamboo Woods']
    },
    'bloomtips': {
        'name': 'BloomTips | Press-On Nails',
        'subtitle': 'Comfort Nail Collection',
        'categories': ['CAT_WELLNESS'],
        'tags': ['daily', 'nails', 'confidence', 'beauty', 'wellness'],
        'shopByNeed': ['daily-comfort'],
        'recoveryStage': ['stage-3', 'stage-4'],
        'crossSells': ['browbloom', 'petalwrap', 'dewleaf'],
        'isGiftPopular': True,
        'tagline': 'Little details. Beautiful confidence.'
    },
    'bloomcrown': {
        'name': 'BloomCrown | Medical Wig',
        'subtitle': 'Comfort Wig Collection',
        'categories': ['CAT_HAIR'],
        'priceFrom': True,
        'tags': ['hair-loss', 'wig', 'real-hair', 'confidence'],
        'shopByNeed': ['hair-loss'],
        'recoveryStage': ['stage-3', 'stage-4'],
        'crossSells': ['airbloom', 'willow-wrap', 'browbloom'],
        'variantLabel': 'Style',
        'variantOptions': ['Long Balayage'],
        'tagline': 'Designed to help you feel like yourself, every day.'
    }
}

ts_output = """/**
 * NUVANAAH PRODUCT CATALOG — IMAGE-FIRST REBUILD
 * Source of truth: DOCX parsed content and /images folder.
 */

import { Product } from './types'
import parsedContent from './product-content.json'

// ─── CATEGORY MAPPINGS ──────────────────────────────────────────────────────
export const categoryMappings: { [key: string]: string } = {
  'recovery-body-support': 'Recovery & Body Support',
  'hair-confidence':       'Hair & Confidence',
  'everyday-wellness':     'Everyday Wellness',
}

export const categoryDisplayNames: { [key: string]: string } = {
  'recovery-body-support': 'Recovery & Body Support',
  'hair-confidence':       'Hair & Confidence',
  'everyday-wellness':     'Everyday Wellness',
}

export const categoryDescriptions: { [key: string]: string } = {
  'recovery-body-support': 'Products designed to support physical comfort during and after surgery — from prosthetics and bras to pillows and recovery kits.',
  'hair-confidence':       'Products for head coverage, facial appearance, and the confidence that comes from feeling like yourself during treatment-related hair loss.',
  'everyday-wellness':     'Products for daily care, personal hygiene, and the small beauty details that contribute to feeling like yourself during recovery and beyond.',
}

// ─── CATEGORY OBJECTS ───────────────────────────────────────────────────────
const CAT_RECOVERY = { id: 1, name: 'Recovery & Body Support', slug: 'recovery-body-support' }
const CAT_HAIR     = { id: 2, name: 'Hair & Confidence',       slug: 'hair-confidence' }
const CAT_WELLNESS = { id: 3, name: 'Everyday Wellness',       slug: 'everyday-wellness' }

// ─── PRODUCT CATALOG ────────────────────────────────────────────────────────
export const products: Product[] = [
"""

for slug, base in base_data.items():
    doc = content[slug]
    folder = folders_map[slug]
    img_dir = os.path.join('d:/nuvaanah/public/images/catalog', folder)
    images_list = []
    
    if os.path.exists(img_dir):
        files = [f for f in os.listdir(img_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
        files.sort()
        for idx, f in enumerate(files):
            images_list.append(f"{{ id: {idx+1}, src: '/images/catalog/{folder}/{f}', alt: '{base['name']} — view {idx+1}' }}")
            
    images_str = "[\n      " + ",\n      ".join(images_list) + "\n    ]"
    
    # Extract short description from overview
    short_desc = doc['overview'].split('\\n')[0][:250] + '...' if doc['overview'] else ''
    
    # Format the typescript object
    ts_output += f"""
  // ── {base['name'].upper()} ────────────────────────────────────────────────────────
  {{
    id: '{slug}',
    slug: '{slug}',
    name: '{base['name']}',
    subtitle: '{base['subtitle']}',
    price: {doc['price']},
    priceFrom: {'true' if base.get('priceFrom') else 'false'},
    categories: [{', '.join(base['categories'])}],
    short_description: `{short_desc.replace('`', '')}`,
    description: parsedContent['{slug}'].overview,
    fullStory: parsedContent['{slug}'].story,
    images: {images_str},
    stock_status: 'instock',
    featured: True,
    inStock: True,
    tags: {json.dumps(base.get('tags', []))},
    shopByNeed: {json.dumps(base.get('shopByNeed', []))},
    recoveryStage: {json.dumps(base.get('recoveryStage', []))},
    crossSells: {json.dumps(base.get('crossSells', []))},
    variantLabel: '{base.get('variantLabel', '')}',
    variantOptions: {json.dumps(base.get('variantOptions', []))},
    keyFeatures: parsedContent['{slug}'].features.map((f: any) => f.title),
    whatsIncluded: parsedContent['{slug}'].whatsIncluded,
    seoTitle: parsedContent['{slug}'].seo.title,
    metaDescription: parsedContent['{slug}'].seo.metaDescription,
    ogTitle: parsedContent['{slug}'].seo.ogTitle,
    ogDescription: parsedContent['{slug}'].seo.ogDescription,
    benefitsList: parsedContent['{slug}'].benefits,
    materialsText: parsedContent['{slug}'].materials,
    variantsText: parsedContent['{slug}'].variants,
    howToUse: parsedContent['{slug}'].howToUse,
    careText: parsedContent['{slug}'].care,
    careDonts: parsedContent['{slug}'].careDonts,
    perfectFor: parsedContent['{slug}'].perfectFor,
    gentleNote: parsedContent['{slug}'].gentleNote,
    faqs: parsedContent['{slug}'].faqs,
    isGiftPopular: {'true' if base.get('isGiftPopular') else 'false'},
    tagline: {json.dumps(base.get('tagline', ''))},
    comingSoon: {'true' if base.get('comingSoon') else 'false'},
    dimensions: {json.dumps(base.get('dimensions', ''))},
    whatsappCTA: {'true' if base.get('whatsappCTA') else 'false'},
  }},
"""

ts_output += """
]

// ─── HELPER FUNCTIONS ────────────────────────────────────────────────────────

export function getProductById(id: string): Product | undefined {
  return products.find(p => String(p.id) === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categories?.some(c => c.slug === categorySlug))
}

export function getProductsByNeed(need: string): Product[] {
  return products.filter(p => p.shopByNeed?.includes(need))
}

export function getAllCategories() {
  const categoriesMap = new Map()
  products.forEach(product => {
    product.categories?.forEach(category => {
      if (!categoriesMap.has(category.slug)) {
        categoriesMap.set(category.slug, { ...category, count: 1 })
      } else {
        categoriesMap.get(category.slug).count += 1
      }
    })
  })
  return Array.from(categoriesMap.values())
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured).slice(0, 4)
}

export function getRelatedProducts(product: Product): Product[] {
  if (product.crossSells && product.crossSells.length > 0) {
    const related = product.crossSells
      .map(slug => getProductBySlug(slug))
      .filter((p): p is Product => !!p)
    return related.slice(0, 3)
  }
  const categoryId = product.categories?.[0]?.id
  if (!categoryId) return products.slice(0, 3)
  return products
    .filter(p => p.id !== product.id && p.categories?.some(c => c.id === categoryId))
    .slice(0, 3)
}

export function isVariableProduct(product: Product): boolean {
  return product.type === 'variable' && !!product.variations && product.variations.length > 0
}
"""

# Replace python true/false
ts_output = ts_output.replace(': True,', ': true,').replace(': False,', ': false,')

with open('d:/nuvaanah/lib/products-data.ts', 'w', encoding='utf-8') as f:
    f.write(ts_output)
