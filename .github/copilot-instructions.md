# Nuvanaah AI Coding Agent Instructions

## Project Overview
**Nuvanaah** is a premium Next.js 14 e-commerce platform for cancer care products (mastectomy bras, chemotherapy accessories, wigs, lymphedema solutions). The brand emphasizes dignity, warmth, and trust with a luxury aesthetic.

**Tech Stack:** Next.js 14 App Router • TypeScript • Tailwind CSS • Framer Motion • WooCommerce API • Supabase • Razorpay

## Architecture Patterns

### App Router Structure
- All pages use Next.js 14 App Router (`app/` directory)
- Client components are explicitly marked with `'use client'` directive
- Layouts use nested structure: `app/layout.tsx` (root) → `app/[section]/layout.tsx` (section-specific)
- Server components are default; use client components ONLY for interactivity (forms, animations, cart, wishlist)

### State Management & Context
**Critical:** Two global context providers wrap the entire app in [app/layout.tsx](app/layout.tsx):
- `CartProvider` from [lib/cart-context.tsx](lib/cart-context.tsx) - localStorage-persisted cart state
- `WishlistProvider` from [lib/wishlist-context.tsx](lib/wishlist-context.tsx) - wishlist management

**Usage pattern:**
```tsx
'use client'
import { useCart } from '@/lib/cart-context'

const { items, addItem, removeItem, total } = useCart()
```

### Component Organization
```
components/
  ├── homepage/     - Homepage-specific sections (Hero, TrustBadges, Categories)
  ├── layout/       - Header & Footer (used across all pages)
  ├── products/     - ProductCard, ProductFilter, Reviews
  ├── cart/         - CartItemComponent
  └── ui/           - Reusable primitives (Logo)
```

**Convention:** Homepage sections are self-contained components imported into [app/page.tsx](app/page.tsx).

### Type System
All TypeScript interfaces are centralized in [lib/types.ts](lib/types.ts):
- `Product` - WooCommerce product structure
- `CartItem` - Cart state item
- `Order`, `User`, `Address` - E-commerce entities
- `BlogPost`, `Testimonial` - Content types

**Never duplicate type definitions.** Import from `@/lib/types`.

### Service Layer Pattern
All external integrations are isolated in [lib/](lib/) services:
- [lib/woocommerce.ts](lib/woocommerce.ts) - Product API calls with authentication
- [lib/auth.ts](lib/auth.ts) - Supabase authentication
- [lib/email.ts](lib/email.ts) - SendGrid transactional emails
- [lib/shiprocket.ts](lib/shiprocket.ts) - Shipping integration
- [lib/analytics.ts](lib/analytics.ts) - Event tracking (GA4, Sentry)

**Pattern:** Functions use async/await, include error handling, and return typed results.

## Design System & Styling

### Tailwind Configuration
Custom color palette in [tailwind.config.ts](tailwind.config.ts):
- **Teal/Sage** (`sage-*`, `teal-*`) - Primary brand colors, calming trust
- **Gold** (`gold-*`) - Luxury accents, premium feel
- **Cream** (`cream-*`) - Warm backgrounds
- **Amber** (`amber-*`) - CTAs and action elements

See [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) for complete usage guidelines.

### CSS Architecture
[app/globals.css](app/globals.css) defines:
- CSS custom properties (`--color-teal-*`, `--color-gold-*`)
- Luxury design utilities (`.text-gradient-gold`, `.shadow-luxury`, `.bg-luxury`)
- Button classes (`.btn-primary`, `.btn-secondary`)
- Animation classes (`.animate-float`, `.animate-fade-in`)

**Convention:** Use Tailwind utilities first; custom CSS classes for complex gradients/effects only.

### Utility Function
```tsx
import { cn } from '@/lib/utils'
// Merges Tailwind classes intelligently
<div className={cn("base-class", conditional && "added-class")} />
```

## Development Workflows

### Running the Project
```bash
npm run dev    # Development server (localhost:3000)
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint validation
```

### Environment Variables
Required variables documented in [docs/ENV_VARIABLES.md](docs/ENV_VARIABLES.md):
- `NEXT_PUBLIC_WOOCOMMERCE_API_URL` - Product API endpoint
- `NEXT_PUBLIC_SUPABASE_URL` - Auth & database
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` - Payment gateway
- Server-side secrets: `WOOCOMMERCE_CONSUMER_SECRET`, `RAZORPAY_KEY_SECRET`, `SENDGRID_API_KEY`

**Never commit secrets.** Use `.env.local` (gitignored).

### Path Aliases
TypeScript configured with `@/*` alias in [tsconfig.json](tsconfig.json):
```tsx
import { Product } from '@/lib/types'
import Hero from '@/components/homepage/Hero'
```

## Critical Conventions

### Client vs Server Components
**Default to server components.** Only use `'use client'` when needed:
- ✅ Animations (Framer Motion), interactive forms, cart/wishlist operations
- ❌ Static content, SEO metadata, data fetching

**All pages** (`app/*/page.tsx`) currently use `'use client'` for interactivity. Refactor static sections to server components when possible.

### Image Handling
```tsx
import Image from 'next/image'
// Remote images allowed from images.unsplash.com (see next.config.js)
<Image src="..." alt="..." fill className="object-cover" />
```

### Metadata for SEO
Root layout defines comprehensive SEO in [app/layout.tsx](app/layout.tsx):
- OpenGraph tags, Twitter cards, keywords
- Use [lib/seo.ts](lib/seo.ts) helpers: `getProductSchema()`, `getBlogPostSchema()`, `generateMetaTags()`

### WooCommerce Integration
**Authentication:** Basic Auth with base64-encoded credentials
```tsx
import { getProducts, getProductById } from '@/lib/woocommerce'
// Fetches products with pagination & filtering
const products = await getProducts(page, perPage, category)
```

**Product formatting:** `formatWooCommerceProduct()` transforms WC API responses to `Product` interface.

### Error Handling Pattern
```tsx
try {
  const result = await apiCall()
  return result
} catch (error) {
  console.error('Descriptive context:', error)
  throw error // Let caller handle or provide fallback
}
```

## Accessibility & UX

### Forms
- Always include `aria-label` or visible labels
- Validate inputs client-side before submission
- Show loading states during async operations
- Provide clear error messages

### Navigation
- Header in [components/layout/Header.tsx](components/layout/Header.tsx)
- Footer in [components/layout/Footer.tsx](components/layout/Footer.tsx) (different from [components/homepage/Footer.tsx](components/homepage/Footer.tsx))
- Cart icon shows item count badge

### Responsive Design
- Mobile-first approach (default classes for mobile, `sm:`, `md:`, `lg:` for larger screens)
- Test all breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop)

## Testing Strategy
See [lib/testing.ts](lib/testing.ts) for:
- E2E test suites (checkout flow, product search, auth)
- Performance targets (LCP < 2.5s, FID < 100ms)
- Accessibility checklist (WCAG 2.1 AA)
- Browser test matrix

## Key Files Reference
- [DEVELOPMENT_ROADMAP.md](DEVELOPMENT_ROADMAP.md) - 6-week phase plan with completion status
- [README.md](README.md) - Quick start guide
- [docs/SETUP.md](docs/SETUP.md) - Setup verification checklist
- [docs/DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) - Production deployment steps

## Common Tasks

### Adding a New Page
1. Create `app/[route]/page.tsx` (use `'use client'` if interactive)
2. Add metadata export for SEO
3. Import/create components in [components/](components/)
4. Update sitemap in [lib/sitemap.ts](lib/sitemap.ts) if needed

### Adding a New Product Category
1. Update `Product` interface in [lib/types.ts](lib/types.ts) if needed
2. Add category filtering in [lib/woocommerce.ts](lib/woocommerce.ts)
3. Create category page in [app/products/category/[category]/page.tsx](app/products/category/[category]/page.tsx)

### Styling a Component
1. Check [app/globals.css](app/globals.css) for existing utility classes (`.btn-primary`, `.text-gradient-gold`)
2. Use Tailwind utilities with [tailwind.config.ts](tailwind.config.ts) custom colors
3. Use `cn()` from [lib/utils.ts](lib/utils.ts) for conditional classes

### Analytics Integration
```tsx
import { trackEvent, trackPageView } from '@/lib/analytics'
trackEvent({ name: 'add_to_cart', category: 'ecommerce', value: price })
```

## Brand Voice
When generating content or copy:
- **Tone:** Dignified, warm, trustworthy (not clinical or overly medical)
- **Language:** Empathetic, gentle, inclusive (use "you" not "patients")
- **Avoid:** Medical jargon, fear-based language, pity
- **Emphasize:** Confidence, dignity, quality, expert support
