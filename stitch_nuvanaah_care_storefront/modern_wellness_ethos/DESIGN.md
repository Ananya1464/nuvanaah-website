---
name: Modern Wellness Ethos
colors:
  surface: '#fdf9f3'
  surface-dim: '#dddad4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ed'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#524344'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0ea'
  outline: '#847374'
  outline-variant: '#d7c2c2'
  surface-tint: '#884d53'
  primary: '#884d53'
  on-primary: '#ffffff'
  primary-container: '#c9848a'
  on-primary-container: '#501f26'
  inverse-primary: '#feb2b9'
  secondary: '#446651'
  on-secondary: '#ffffff'
  secondary-container: '#c3e9cf'
  on-secondary-container: '#496a55'
  tertiary: '#6c5b54'
  on-tertiary: '#ffffff'
  tertiary-container: '#a7928b'
  on-tertiary-container: '#3a2c26'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#feb2b9'
  on-primary-fixed: '#370c13'
  on-primary-fixed-variant: '#6d363c'
  secondary-fixed: '#c6ebd1'
  secondary-fixed-dim: '#abcfb6'
  on-secondary-fixed: '#002111'
  on-secondary-fixed-variant: '#2d4d3a'
  tertiary-fixed: '#f6ded5'
  tertiary-fixed-dim: '#d9c2ba'
  on-tertiary-fixed: '#251914'
  on-tertiary-fixed-variant: '#53433d'
  background: '#fdf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e6e2dc'
typography:
  display:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h2:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: '1.4'
  h3:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.5'
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style
The design system is rooted in a "Modern Wellness" aesthetic—a sophisticated blend of high-end retail minimalism and clinical empathy. It prioritizes emotional safety for women navigating sensitive health journeys, ensuring the interface feels like a supportive sanctuary rather than a cold medical catalog. 

The style utilizes heavy whitespace, a soft and warm tonal palette, and editorial-inspired layouts to mirror the premium experience of brands like Aesop and Apple. Every interaction is designed to be low-stress, utilizing "Human-Centric Minimalism" to guide users through complex recovery needs with clarity and grace.

## Colors
This design system uses a sophisticated "Functional Pastel" palette. While the **Primary Rose** drives conversion and highlights vital pricing information, the various **Surface Washes** serve as emotional wayfinding.

Each recovery category is color-coded to provide a subtle psychological anchor:
- **Rose Wash:** Post-surgery and mastectomy care.
- **Sage Wash:** Wigs, headwear, and hair regrowth.
- **Lavender Wash:** Prosthesis and sizing.
- **Amber/Peach Washes:** Nutritional support and sensitive skin care.

The background is a warm cream (#FAF6F0) rather than a pure white to reduce eye strain and feel more organic and "skin-like."

## Typography
The system relies exclusively on **Inter** to maintain a clean, systematic, and highly readable environment. By varying weights and using a tight letter-spacing for large displays, the design system achieves an editorial feel without the need for a secondary serif font.

- **Headings:** Use the Dark Text (#2C1F1A) to provide grounding and authority.
- **Body:** Set with generous line heights (1.6) to ensure high legibility for users who may be experiencing fatigue or cognitive load.
- **Labels:** Small caps are reserved for utility navigation and tags to differentiate them from prose.

## Layout & Spacing
The design system employs a **Fixed Grid** approach for desktop (12 columns, 1200px max-width) to maintain a sense of curated order. For mobile, it shifts to a fluid 4-column layout.

Spacing is generous, favoring "breathes" over density. The 8px base grid ensures vertical rhythm. Margin and padding should lean toward the larger end of the scale (md/lg) to create the "Premium D2C" look, ensuring that no element feels cramped or urgent.

## Elevation & Depth
Depth in this design system is created through **Tonal Layering** and **Ambient Shadows**. Instead of aggressive 3D effects, we use soft, diffused shadows that feel like natural light hitting paper.

- **Card Elevation:** Used for product tiles. A very subtle shadow (0 2px 12px rgba(0,0,0,0.06)) defines the object without lifting it too far from the cream background.
- **Floating Elevation:** Reserved for critical "Support" or "Cart" buttons (0 16px 48px rgba(0,0,0,0.12)).
- **Inset Depth:** Form fields and search bars should use a 1px border in Muted Text (#9A9A9A) rather than shadows, maintaining a flat, modern aesthetic.

## Shapes
The shape language is organic and soft. High corner radii eliminate visual tension, reinforcing the "emotionally safe" brand pillar.

- **Standard Containers:** Use the `lg` (16px) radius for most cards and content blocks.
- **Featured Sections:** Use the `xl` (20px) radius for hero banners or large category containers.
- **Interactive Elements:** Buttons and tags utilize the `pill` (100px) shape to feel tactile and approachable.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary Rose background, White text. High-contrast and clear.
- **Secondary:** Pill-shaped, Secondary Sage outline (1.5px) or Sage Surface background with Sage text.
- **Ghost:** No background, Dark Text, typically used for "Cancel" or "Learn More."

### Input Fields
Soft rectangles with 12px radius. Use a subtle cream fill (#F0EAE2) when inactive, transitioning to a Sage border when focused. Error states use a muted red, never a harsh neon.

### Cards
Cards are the primary vehicle for commerce. They feature 16px corner radii, the "Card Shadow," and a pure white surface. Product images should be shot against the specific **Surface Washes** defined in the color section to denote their category instantly.

### Chips & Tags
Used for product attributes (e.g., "Cotton Lined," "Seamless"). Always pill-shaped, using 12px Inter SemiBold, with backgrounds matching the category's Surface Wash.

### Iconography
Icons must be minimal line art with a consistent 1.5px stroke width. Geometry should be slightly rounded, never sharp, and colored in Secondary Sage to maintain a connection to the natural world.