# Wig Products Restructuring Guide

## Overview
The wig products have been consolidated from **15 individual products** into **2 variable products** with length options. This provides a cleaner shopping experience where customers select their preferred length from a dropdown, and the price updates accordingly.

## Product Structure

### 1. Human Hair Medical Wig (ID: 8)
**Slug:** `medical-wig`  
**Type:** Variable Product  
**Base Price:** ₹9,899 (14" length)

**Available Lengths:**
- **14 inch** - ₹9,899 (Shoulder-length)
- **18 inch** - ₹12,649 (Mid-length)
- **22 inch** - ₹15,949 (Long)

**Images Used:**
- Default display: `/images/products/medical-wig-14/` folder
- When 14" selected: `/images/products/medical-wig-14/` folder
- When 18" selected: `/images/products/medical-wig-18/` folder
- When 22" selected: `/images/products/medical-wig-22/` folder

**Features:**
- 100% human hair
- Medical-grade breathable cap
- Natural-looking hairline
- Adjustable straps

---

### 2. Premium Human Hair Wig (ID: 11)
**Slug:** `premium-wig`  
**Type:** Variable Product  
**Base Price:** ₹17,599 (14" length)

**Available Lengths:**
- **14 inch** - ₹17,599 (Shoulder-length)
- **16 inch** - ₹19,799 (Medium-length)
- **18 inch** - ₹21,999 (Mid-back)
- **20 inch** - ₹24,199 (Long)
- **22 inch** - ₹26,399 (Extra-long)
- **24 inch** - ₹29,149 (Ultra-long)

**Images Used:**
- Default display: `/images/products/premium-wig-14/` folder
- When 14" selected: `/images/products/premium-wig-14/` folder
- When 16" selected: `/images/products/premium-wig-16/` folder
- When 18" selected: `/images/products/premium-wig-18/` folder
- When 20" selected: `/images/products/premium-wig-20/` folder
- When 22" selected: `/images/products/premium-wig-22/` folder
- When 24" selected: `/images/products/premium-wig-24/` folder

**Features:**
- 100% human hair
- Premium high-density construction
- Enhanced volume and fullness
- Hand-tied cap
- Superior quality and natural movement

---

## Implementation Details

### Data Structure
```typescript
{
  id: '8',
  name: 'Human Hair Medical Wig',
  slug: 'medical-wig',
  type: 'variable',
  price: '9899', // Base price (14" length)
  variations: [
    {
      id: '8-14',
      length: '14 inch',
      price: '9899',
      description: 'Shoulder-length style (14 inches)',
      images: [...], // Specific images for this length
      stock_status: 'instock'
    },
    // ... more variations
  ]
}
```

### Frontend Implementation Requirements

#### Product Card Display
- Show the product name without length (e.g., "Human Hair Medical Wig")
- Display starting price: "From ₹9,899"
- Show badge: "Multiple Lengths Available"

#### Product Detail Page
1. **Length Selector**
   ```html
   <select name="length" onChange={handleLengthChange}>
     <option value="14">14 inch - ₹9,899</option>
     <option value="18">18 inch - ₹12,649</option>
     <option value="22">22 inch - ₹15,949</option>
   </select>
   ```

2. **Dynamic Price Update**
   - Price updates when length selection changes
   - Display selected variation price prominently

3. **Dynamic Image Gallery**
   - Images update based on selected length
   - Show images from corresponding variation's image array

4. **Add to Cart**
   - Store selected variation details (variation ID, length, price)
   - Cart item should show: "Human Hair Medical Wig - 18 inch"

### Helper Functions

```typescript
// Get product with variations
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

// Get specific variation
export function getProductVariation(productId: string, variationId: string) {
  const product = getProductById(productId)
  if (!product || !product.variations) return null
  return product.variations.find(v => v.id === variationId)
}

// Get price range for variable product
export function getPriceRange(product: Product): string {
  if (product.type !== 'variable' || !product.variations) {
    return `₹${product.price}`
  }
  
  const prices = product.variations.map(v => parseFloat(v.price))
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  
  if (minPrice === maxPrice) {
    return `₹${minPrice.toLocaleString('en-IN')}`
  }
  
  return `₹${minPrice.toLocaleString('en-IN')} - ₹${maxPrice.toLocaleString('en-IN')}`
}
```

---

## Benefits

1. **Cleaner Product Catalog**: 13 products instead of 19
2. **Better UX**: Single product page with length selector instead of browsing multiple similar products
3. **Easier Management**: Update one product instead of multiple
4. **Clearer Differentiation**: Medical vs Premium is now the main choice, length is secondary
5. **Better SEO**: Consolidated product pages with more reviews/ratings
6. **Simplified Inventory**: Track variations under one parent product

---

## Migration Notes

### Old Product IDs (Now Removed)
- Products 9, 10 (Medical Wigs 18", 22") → Merged into Product 8 as variations
- Products 12, 13, 14, 15, 16 (Premium Wigs 16", 18", 20", 22", 24") → Merged into Product 11 as variations

### URL Redirects Needed
Set up redirects for old product URLs:
- `/products/medical-wig-14-inch` → `/products/medical-wig`
- `/products/medical-wig-18-inch` → `/products/medical-wig`
- `/products/medical-wig-22-inch` → `/products/medical-wig`
- `/products/premium-wig-14-inch` → `/products/premium-wig`
- `/products/premium-wig-16-inch` → `/products/premium-wig`
- `/products/premium-wig-18-inch` → `/products/premium-wig`
- `/products/premium-wig-20-inch` → `/products/premium-wig`
- `/products/premium-wig-22-inch` → `/products/premium-wig`
- `/products/premium-wig-24-inch` → `/products/premium-wig`

---

## Updated Product Count

**Total Products: 13** (down from 19)
- Post-Surgery Essentials: 4 products
- Chemotherapy Support: 3 products  
- Hair Loss Solutions: 4 products (2 wigs + 2 scarves)
- Lymphedema Management: 1 product

**Featured Products: 6**
- Mastectomy Prosthesis with Cover
- Mastectomy Bra - Front Opening
- Respiratory Mask
- Human Hair Medical Wig (variable)
- Premium Human Hair Wig (variable)
- Head Scarf with Hair Lace
