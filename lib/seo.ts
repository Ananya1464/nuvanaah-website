// SEO & Structured Data Configuration
// Provides schema markup and SEO helpers for all pages

export interface SchemaMarkup {
  '@context': string
  '@type': string
  [key: string]: any
}

/**
 * Organization Schema (for homepage)
 */
export function getOrganizationSchema(): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nuvanaah',
    url: 'https://nuvanaah.com',
    logo: 'https://nuvanaah.com/logo.svg',
    description:
      'Premium cancer care products and consultations. Mastectomy bras, wigs, chemotherapy accessories, and more.',
    sameAs: [
      'https://www.instagram.com/nuvanaah',
      'https://www.facebook.com/nuvanaah',
      'https://www.linkedin.com/company/nuvanaah',
    ],
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-9819461612',
      email: 'hello@nuvanaah.com',
      areaServed: 'IN',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India',
    },
  }
}

/**
 * Product Schema (for product detail pages)
 */
export function getProductSchema(product: {
  id: string
  name: string
  description: string
  price: number
  currency: string
  image: string
  rating: number
  reviewCount: number
  inStock: boolean
  category: string
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Nuvanaah',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: `https://nuvanaah.com/products/${product.id}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    category: product.category,
  }
}

/**
 * Blog Post Schema (for blog articles)
 */
export function getBlogPostSchema(post: {
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  publishDate: string
  modifiedDate: string
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nuvanaah',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nuvanaah.com/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nuvanaah.com/blog/${post.slug}`,
    },
  }
}

/**
 * Local Business Schema (for city pages)
 */
export function getLocalBusinessSchema(city: {
  name: string
  state: string
  consultant?: string
  phone: string
  email: string
}): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Nuvanaah - ${city.name}`,
    description: `Premium cancer care products and consultations in ${city.name}, ${city.state}`,
    url: `https://nuvanaah.com/cities/${city.name.toLowerCase()}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: city.phone,
      email: city.email,
    },
    areaServed: `${city.name}, ${city.state}`,
  }
}

/**
 * FAQ Schema (for FAQ pages)
 */
export function getFAQSchema(faqs: Array<{ q: string; a: string }>): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

/**
 * Breadcrumb Schema (for all pages)
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate SEO meta tags
 */
export function generateMetaTags(params: {
  title: string
  description: string
  canonical?: string
  image?: string
  twitterHandle?: string
  articlePublishDate?: string
  articleModifiedDate?: string
  articleAuthor?: string
}): Record<string, string> {
  return {
    // Standard Meta Tags
    'og:title': params.title,
    'og:description': params.description,
    'og:type': params.articlePublishDate ? 'article' : 'website',
    'og:url': params.canonical || 'https://nuvanaah.com',
    'og:site_name': 'Nuvanaah',

    // Open Graph Image
    'og:image': params.image || 'https://nuvanaah.com/og-image.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',

    // Twitter Card
    'twitter:card': 'summary_large_image',
    'twitter:title': params.title,
    'twitter:description': params.description,
    'twitter:image': params.image || 'https://nuvanaah.com/og-image.jpg',
    ...(params.twitterHandle && {
      'twitter:creator': params.twitterHandle,
    }),

    // Article Metadata
    ...(params.articlePublishDate && {
      'article:published_time': params.articlePublishDate,
    }),
    ...(params.articleModifiedDate && {
      'article:modified_time': params.articleModifiedDate,
    }),
    ...(params.articleAuthor && {
      'article:author': params.articleAuthor,
    }),
  }
}

/**
 * SEO Best Practices
 */
export const SEOBestPractices = {
  // Meta Title Best Practices
  titleLength: '50-60 characters',
  titlePattern: 'Primary Keyword | Brand Name',

  // Meta Description Best Practices
  descriptionLength: '150-160 characters',
  descriptionPattern: 'Action word + Primary keyword + Benefit + Brand',

  // URL Structure Best Practices
  urlPattern: 'lowercase-hyphenated-descriptive-keywords',
  urlMaxLength: 75,

  // Heading Hierarchy
  headingRules: [
    'One H1 per page (page title)',
    'H2s for main sections',
    'H3s for subsections',
    'Proper nesting (no skipping levels)',
  ],

  // Image Best Practices
  imageRules: [
    'Descriptive alt text (125 chars max)',
    'Responsive sizes (use Next.js Image)',
    'Optimize file size (<100KB for web)',
    'Use WebP format with fallback',
  ],

  // Content Best Practices
  contentRules: [
    'Minimum 300 words per page',
    'Target keyword in first 100 words',
    'Natural keyword density (1-2%)',
    'Internal links to related content',
    'External links to authoritative sources',
  ],

  // Mobile Best Practices
  mobileRules: [
    'Mobile-first responsive design',
    'Touch-friendly buttons (44px+)',
    'Readable font sizes (16px+ body)',
    'No interstitials blocking content',
  ],

  // Core Web Vitals Targets
  webVitals: {
    LCP: '< 2.5 seconds',
    FID: '< 100 milliseconds',
    CLS: '< 0.1',
  },
}
