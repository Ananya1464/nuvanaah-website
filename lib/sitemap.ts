// Sitemap generation for SEO
// Generates XML sitemaps for different content types

export interface SitemapEntry {
  url: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

/**
 * Generate Main Sitemap XML
 * Index of all other sitemaps
 */
export function generateMainSitemap(): string {
  const sitemaps = [
    'https://nuvanaah.com/sitemap-pages.xml',
    'https://nuvanaah.com/sitemap-products.xml',
    'https://nuvanaah.com/sitemap-blog.xml',
    'https://nuvanaah.com/sitemap-cities.xml',
  ]

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  sitemaps.forEach((sitemap) => {
    xml += `  <sitemap>\n`
    xml += `    <loc>${sitemap}</loc>\n`
    xml += `  </sitemap>\n`
  })

  xml += '</sitemapindex>'
  return xml
}

/**
 * Generate Pages Sitemap
 * Homepage, about, FAQ, etc.
 */
export function generatePagesSitemap(): string {
  const pages: SitemapEntry[] = [
    {
      url: 'https://nuvanaah.com/',
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://nuvanaah.com/products',
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://nuvanaah.com/cart',
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://nuvanaah.com/checkout',
      changefreq: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://nuvanaah.com/account',
      changefreq: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://nuvanaah.com/blog',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://nuvanaah.com/consultations',
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://nuvanaah.com/partners',
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://nuvanaah.com/faq',
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://nuvanaah.com/about',
      changefreq: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://nuvanaah.com/contact',
      changefreq: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://nuvanaah.com/privacy',
      changefreq: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://nuvanaah.com/terms',
      changefreq: 'yearly',
      priority: 0.5,
    },
  ]

  return generateSitemapXML(pages)
}

/**
 * Generate Products Sitemap
 * All product pages
 */
export function generateProductsSitemap(products: Array<{
  id: string
  name: string
  updatedAt?: string
}>): string {
  const entries: SitemapEntry[] = products.map((product) => ({
    url: `https://nuvanaah.com/products/${product.id}`,
    lastmod: product.updatedAt,
    changefreq: 'weekly',
    priority: 0.8,
  }))

  return generateSitemapXML(entries)
}

/**
 * Generate Blog Sitemap
 * All blog posts
 */
export function generateBlogSitemap(posts: Array<{
  slug: string
  publishDate: string
  modifiedDate?: string
}>): string {
  const entries: SitemapEntry[] = posts.map((post) => ({
    url: `https://nuvanaah.com/blog/${post.slug}`,
    lastmod: post.modifiedDate || post.publishDate,
    changefreq: 'never',
    priority: 0.7,
  }))

  return generateSitemapXML(entries)
}

/**
 * Generate Cities Sitemap
 * All city pages
 */
export function generateCitiesSitemap(): string {
  const categories = ['mastectomy', 'chemotherapy', 'wigs', 'lymphedema']
  const cities = ['delhi', 'mumbai', 'bangalore', 'chennai', 'pune', 'kolkata']

  const entries: SitemapEntry[] = []

  // Category-city combinations
  categories.forEach((category) => {
    cities.forEach((city) => {
      entries.push({
        url: `https://nuvanaah.com/products/${category}/${city}`,
        changefreq: 'monthly',
        priority: 0.7,
      })
    })
  })

  // City consultant pages
  cities.forEach((city) => {
    entries.push({
      url: `https://nuvanaah.com/cities/${city}`,
      changefreq: 'weekly',
      priority: 0.6,
    })
  })

  return generateSitemapXML(entries)
}

/**
 * Generate XML from sitemap entries
 */
function generateSitemapXML(entries: SitemapEntry[]): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  entries.forEach((entry) => {
    xml += '  <url>\n'
    xml += `    <loc>${entry.url}</loc>\n`

    if (entry.lastmod) {
      xml += `    <lastmod>${entry.lastmod}</lastmod>\n`
    }

    if (entry.changefreq) {
      xml += `    <changefreq>${entry.changefreq}</changefreq>\n`
    }

    if (entry.priority) {
      xml += `    <priority>${entry.priority}</priority>\n`
    }

    xml += '  </url>\n'
  })

  xml += '</urlset>'
  return xml
}

/**
 * Sitemap API route for Next.js
 * Place in app/sitemap.ts or similar
 */
export async function GET(request: Request) {
  const path = new URL(request.url).pathname

  let sitemapXml = ''

  if (path === '/sitemap.xml') {
    sitemapXml = generateMainSitemap()
  } else if (path === '/sitemap-pages.xml') {
    sitemapXml = generatePagesSitemap()
  } else if (path === '/sitemap-products.xml') {
    // In production, fetch actual products from database
    const mockProducts = [
      { id: '1', name: 'Mastectomy Bra' },
      { id: '2', name: 'Chemo Cap' },
    ]
    sitemapXml = generateProductsSitemap(mockProducts)
  } else if (path === '/sitemap-blog.xml') {
    // In production, fetch actual posts from database
    const mockPosts = [
      { slug: 'post-1', publishDate: '2024-01-01' },
      { slug: 'post-2', publishDate: '2024-01-02' },
    ]
    sitemapXml = generateBlogSitemap(mockPosts)
  } else if (path === '/sitemap-cities.xml') {
    sitemapXml = generateCitiesSitemap()
  }

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
