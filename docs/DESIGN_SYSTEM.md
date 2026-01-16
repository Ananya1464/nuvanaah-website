# Nuvanaah Design System

Comprehensive design system documentation for the Nuvanaah cancer care e-commerce platform. This guide covers color palette, typography, spacing, components, and accessibility guidelines.

## 1. Color Palette

### Primary: Gold/Amber (Action & Signals)
Used for CTAs, highlights, and important interactions.

```tailwind
- amber-50:  #fffbeb  (Lightest background)
- amber-100: #fef3c7  (Subtle hover)
- amber-200: #fde68a  (Light accents)
- amber-400: #fbbf24  (Primary CTA)
- amber-500: #f59e0b  (Primary default)
- amber-600: #d97706  (Hover state)
- amber-700: #b45309  (Active/pressed)
```

**Usage:**
- Primary buttons and CTAs
- Links and interactive elements
- Success states and checkmarks
- Highlighted text and badges
- Never use for primary text

### Secondary: Sage/Teal (Calm & Trust)
Used for secondary actions, information, and calm elements.

```tailwind
- sage-50:   #f2f5f4  (Very light background)
- sage-100:  #d9e4e0  (Light background)
- sage-500:  #6b9e94  (Subtle emphasis)
- sage-600:  #557d75  (Medium emphasis)
- sage-700:  #3d5550  (Strong emphasis)
```

**Usage:**
- Secondary buttons
- Info boxes and callouts
- Consultants/expert profiles
- Data visualizations
- Form backgrounds

### Neutral: Gray Scale (Text & Structure)
Used for text, borders, and layout structure.

```tailwind
- gray-50:   #f9fafb  (Very light background)
- gray-100:  #f3f4f6  (Light background/cards)
- gray-200:  #e5e7eb  (Borders)
- gray-300:  #d1d5db  (Light borders)
- gray-400:  #9ca3af  (Placeholder text)
- gray-500:  #6b7280  (Secondary text)
- gray-600:  #4b5563  (Default text)
- gray-700:  #374151  (Strong text)
- gray-800:  #1f2937  (Headings)
- gray-900:  #111827  (Darkest text)
```

**Usage:**
- Body text: gray-600
- Headings: gray-800 or gray-900
- Borders: gray-200 or gray-300
- Backgrounds: gray-50 or gray-100
- Disabled states: gray-400

### Status Colors
```tailwind
- green-500:  #10b981  (Success)
- red-500:    #ef4444  (Error/Danger)
- blue-500:   #3b82f6  (Info)
- yellow-500: #eab308  (Warning)
```

### Semantic Combinations

**Success:**
- Background: green-50
- Text: green-700
- Border: green-200

**Error:**
- Background: red-50
- Text: red-700
- Border: red-200

**Info:**
- Background: blue-50
- Text: blue-700
- Border: blue-200

**Warning:**
- Background: yellow-50
- Text: yellow-700
- Border: yellow-200

## 2. Typography

### Font Family
```css
Primary: Inter (system fallback: -apple-system, BlinkMacSystemFont, "Segoe UI")
Fallback: ui-sans-serif, system-ui, sans-serif
```

### Type Scale (with clamp for responsiveness)

**H1 - Page Title**
```
Font: 32-48px (clamp(2rem, 5vw, 3rem))
Weight: 700 (Bold)
Line Height: 1.2
Letter Spacing: -0.5px
Usage: Page main heading
```

**H2 - Section Title**
```
Font: 24-32px (clamp(1.5rem, 4vw, 2rem))
Weight: 600 (Semibold)
Line Height: 1.3
Letter Spacing: -0.25px
Usage: Major sections
```

**H3 - Subsection Title**
```
Font: 18-24px (clamp(1.125rem, 3vw, 1.5rem))
Weight: 600 (Semibold)
Line Height: 1.4
Usage: Subsections, cards
```

**Body - Default Text**
```
Font: 14-16px (1rem on desktop)
Weight: 400 (Regular)
Line Height: 1.5 (line-height: 1.5)
Letter Spacing: 0
Usage: Paragraph text, descriptions
```

**Body Small - Secondary Text**
```
Font: 12-14px (0.875rem)
Weight: 400 (Regular)
Line Height: 1.5
Usage: Metadata, timestamps, captions
```

**Button Text**
```
Font: 14-16px
Weight: 600 (Semibold)
Text Transform: None
Letter Spacing: 0
```

**Form Labels**
```
Font: 14px (0.875rem)
Weight: 500 (Medium)
Letter Spacing: 0
Color: gray-700
```

## 3. Spacing System

Based on 4px base unit (Tailwind default):

```
4px  = 1 unit   (p-1)
8px  = 2 units  (p-2)
12px = 3 units  (p-3)
16px = 4 units  (p-4)
20px = 5 units  (p-5)
24px = 6 units  (p-6)
32px = 8 units  (p-8)
40px = 10 units (p-10)
48px = 12 units (p-12)
64px = 16 units (p-16)
```

### Spacing Patterns

**Section Padding:**
- Mobile: 16px (p-4)
- Tablet: 24px (p-6)
- Desktop: 32px (p-8)

**Element Gaps:**
- Tight: 8px (gap-2)
- Normal: 16px (gap-4)
- Loose: 24px (gap-6)

**Component Spacing:**
- Button padding: 8px 16px (py-2 px-4)
- Card padding: 16px (p-4)
- Form input padding: 8px 12px (py-2 px-3)

## 4. Components

### Button

**Primary Button (Gold CTA)**
```
Background: bg-amber-500
Hover: bg-amber-600
Active: bg-amber-700
Disabled: bg-gray-300
Text: text-white, font-semibold
Padding: py-2 px-4 (or py-3 px-6 for larger)
Border Radius: rounded-lg
Transition: transition-colors duration-200
```

Example:
```tsx
<button className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 disabled:bg-gray-300 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
  Primary Action
</button>
```

**Secondary Button (Sage)**
```
Background: bg-sage-50
Border: border-2 border-sage-500
Text: text-sage-700
Hover: bg-sage-100
```

**Outline Button**
```
Background: transparent
Border: border-2 border-gray-300
Text: text-gray-700
Hover: bg-gray-50
```

**Disabled Button**
```
Background: bg-gray-300
Text: text-gray-500
Cursor: cursor-not-allowed
Opacity: opacity-60
```

### Cards

**Default Card**
```
Background: bg-white
Border: border border-gray-200
Border Radius: rounded-lg
Padding: p-4 (md: p-6)
Box Shadow: shadow-sm
Hover: shadow-md
```

**Feature Card**
```
Extends default card
Icon: h-8 w-8 text-amber-500 top
Title: h-3 font-semibold text-gray-800
Description: text-gray-600
```

### Forms

**Input Field**
```
Background: bg-gray-50
Border: border border-gray-300
Padding: py-2 px-3
Border Radius: rounded-md
Focus: ring-2 ring-amber-400 border-amber-500
```

**Label**
```
Font Size: 0.875rem
Font Weight: 500
Color: text-gray-700
Margin Bottom: mb-2
```

**Error State**
```
Border: border-red-500
Ring: ring-red-100
Icon: Check mark or X
Message: text-sm text-red-600
```

**Success State**
```
Border: border-green-500
Icon: Checkmark
Message: text-sm text-green-600
```

### Modals

**Modal Overlay**
```
Background: bg-black/50
Position: fixed inset-0
Animation: fade in 200ms
```

**Modal Container**
```
Background: bg-white
Border Radius: rounded-lg
Max Width: max-w-md (md: max-w-lg)
Padding: p-6
Position: centered
Animation: scale up 200ms
```

### Navigation

**Header Navigation**
```
Background: bg-white
Border: border-b border-gray-200
Height: 64px (h-16)
Padding: px-4 (md: px-8)
Sticky: sticky top-0
Z-index: z-40
```

**Mobile Menu**
```
Background: bg-white
Full screen: fixed inset-0 top-16
Z-index: z-30
Animation: slide in from left 200ms
Overlay: block with touch
```

### Badge

**Standard Badge**
```
Padding: px-2 py-1
Border Radius: rounded-full
Font Size: text-xs
Font Weight: 600
White Space: whitespace-nowrap
```

**Gold Badge**
```
Background: bg-amber-100
Text: text-amber-700
```

**Success Badge**
```
Background: bg-green-100
Text: text-green-700
```

## 5. Responsive Design

### Breakpoints (Tailwind)
```
sm:  640px  (small devices, portrait phones)
md:  768px  (tablets, landscape phones)
lg:  1024px (small laptops)
xl:  1280px (desktops)
2xl: 1536px (large desktops)
```

### Mobile-First Approach

**Grid Layouts:**
- Mobile: 1 column (w-full)
- Tablet (md:): 2 columns (md:grid-cols-2)
- Desktop (lg:): 3+ columns (lg:grid-cols-3, lg:grid-cols-4)

**Padding:**
- Mobile: p-4 (16px)
- Tablet (md:): p-6 (24px)
- Desktop (lg:): p-8 (32px)

**Font Size:**
- Headings: clamp(2rem, 5vw, 3rem)
- Body: clamp(0.875rem, 2vw, 1rem)

### Common Patterns

**Product Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {/* Cards */}
</div>
```

**Hero Section:**
```tsx
<section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
  {/* Content */}
</section>
```

**Sidebar Layout:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
  <main className="lg:col-span-3">{/* Main */}</main>
  <aside className="lg:col-span-1">{/* Sidebar */}</aside>
</div>
```

## 6. Accessibility

### Heading Hierarchy
- **One H1 per page** (page title)
- **H2 for major sections**
- **H3 for subsections**
- No skipped levels (H1 → H3 not allowed)

### Color Contrast
- **Body text on background**: Minimum 4.5:1 ratio
- **Large text (18pt+)**: Minimum 3:1 ratio
- Use [axe DevTools](https://www.deque.com/axe/devtools/) to verify

### Alt Text
- **All images**: Descriptive alt text (max 125 characters)
- **Decorative images**: alt="" (empty)
- **Complex images**: Separate long description

### Interactive Elements
- **Minimum touch target**: 44×44px (buttons, links)
- **Visible focus indicator**: ring-2 ring-amber-400
- **Clear button text**: No "Click Here"

### Forms
- **Labels**: All inputs have associated `<label>` tags
- **Error messages**: Linked to inputs with aria-describedby
- **Instructions**: Clear and before input field
- **Required indicator**: Mark with asterisk or aria-required

### Keyboard Navigation
- **Tab order**: Logical, left-to-right, top-to-bottom
- **Skip links**: Skip to main content
- **Modals**: Trap focus within modal

### ARIA Labels
- **Custom components**: role attribute
- **Icon buttons**: aria-label
- **Form groups**: fieldset and legend
- **Lists**: Use semantic HTML (ul, ol, dl)

## 7. Interactions & Animations

### Transitions
```
Duration: 200ms (standard)
Duration: 300ms (complex)
Timing: ease-in-out
```

**Button Hover:**
```
Duration: 200ms
Effect: Color change
```

**Card Hover:**
```
Duration: 300ms
Effects:
  - Shadow increase (shadow-sm → shadow-md)
  - Slight scale (scale-100 → scale-101)
```

**Modal Appearance:**
```
Overlay fade: 200ms
Modal scale: 200ms (scale-95 → scale-100)
```

### Subtle Effects
- Avoid jarring movements
- Keep animations under 400ms
- Use motion-safe media query for prefers-reduced-motion

## 8. Icons

**Library**: lucide-react

**Standard Sizes:**
- 16px (h-4 w-4) - Inline, form inputs
- 20px (h-5 w-5) - Default, navigation
- 24px (h-6 w-6) - Headers, prominent
- 32px (h-8 w-8) - Large feature icons

**Color:**
- Primary icons: text-amber-500
- Secondary icons: text-sage-600
- Neutral icons: text-gray-600
- Disabled icons: text-gray-400

## 9. Code Examples

### Button Group
```tsx
<div className="flex gap-4">
  <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg">
    Primary
  </button>
  <button className="border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50">
    Secondary
  </button>
</div>
```

### Product Card
```tsx
<article className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
  <img src="" alt="Product" className="w-full h-48 object-cover rounded-md mb-4" />
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Name</h3>
  <p className="text-gray-600 text-sm mb-4">Description</p>
  <div className="flex justify-between items-center">
    <span className="text-xl font-bold text-amber-600">₹999</span>
    <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg">
      Add to Cart
    </button>
  </div>
</article>
```

### Form Field
```tsx
<div>
  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-400 focus:border-amber-500"
    placeholder="you@example.com"
    aria-describedby="email-error"
  />
  <p id="email-error" className="text-sm text-red-600 mt-1 hidden">
    Please enter a valid email
  </p>
</div>
```

## 10. Best Practices

1. **Color**: Always use gold (amber) for primary CTAs, never teal
2. **Spacing**: Use consistent spacing (multiples of 4px)
3. **Contrast**: Verify 4.5:1 contrast ratio for text
4. **Responsive**: Design mobile-first, then enhance for larger screens
5. **Accessibility**: Include ARIA labels and semantic HTML
6. **Performance**: Use Next.js Image for images, optimize animations
7. **Consistency**: Use the component patterns throughout
8. **Testing**: Test on real devices and with screen readers
