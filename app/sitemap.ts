import { MetadataRoute } from 'next'
import { getPublicProducts } from '@/lib/products-data'

const BASE = 'https://www.nuvanaah.com'

const BLOG_SLUGS = [
  'mastectomy-recovery-timeline',
  'choosing-prosthesis',
  'managing-chemo-side-effects',
  'hair-loss-solutions',
  'lymphedema-management',
]

const CITY_SLUGS = ['delhi', 'mumbai', 'bangalore', 'chennai', 'pune', 'kolkata']
const CITY_CATEGORIES = ['mastectomy', 'chemotherapy', 'wigs', 'lymphedema']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/products`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/collections/recovery-body-support`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/collections/hair-confidence`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/collections/everyday-wellness`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${BASE}/legal/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE}/legal/shipping`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ]

  const productPages: MetadataRoute.Sitemap = getPublicProducts().map(p => ({
    url: `${BASE}/products/${p.slug || p.id}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map(slug => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const cityPages: MetadataRoute.Sitemap = CITY_SLUGS.map(city => ({
    url: `${BASE}/cities/${city}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const cityCategoryPages: MetadataRoute.Sitemap = CITY_CATEGORIES.flatMap(cat =>
    CITY_SLUGS.map(city => ({
      url: `${BASE}/products/${cat}/${city}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [
    ...staticPages,
    ...productPages,
    ...blogPages,
    ...cityPages,
    ...cityCategoryPages,
  ]
}
