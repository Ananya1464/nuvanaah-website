# About Page Efficiency Slideshow - Image Requirements

## Overview
The About page hero section now features a 5-slide auto-rotating carousel (5 seconds each) showcasing Nuvanaah's efficiency, expertise, and care quality.

**Current State:** Using emoji placeholders. Replace with professional images when ready.

---

## Slide 1: Expert Consultation Process

**Placeholder:** 👥 Professional Consultation  
**Title:** Expert Consultation Process  
**Description:** Our oncology specialists guide you through product selection with personalized care

### Image Specifications
- **Dimensions:** 16:9 aspect ratio (1920x1080px recommended)
- **File Format:** JPG or WebP
- **Max Size:** 150KB (optimized for web)
- **File Name:** `about-consultation.jpg`

### AI Image Generation Prompt
```
Professional healthcare consultation scene, oncology specialist in white coat consulting 
with patient in comfortable private consultation room, warm lighting, medical certificates 
on wall, compassionate care, professional photography, soft focus background, teal and 
cream color palette, 16:9 aspect ratio, Indian context, dignity and trust
```

### Photography Guidelines
- **Setting:** Private consultation room with medical certificates
- **People:** Oncology specialist (white coat) + patient (comfortable clothing)
- **Mood:** Compassionate, professional, warm
- **Lighting:** Soft natural light from window + warm interior lighting
- **Colors:** Teal accents (cushions, branding), cream/white walls
- **Avoid:** Clinical coldness, sad expressions, hospital beds

---

## Slide 2: Medical-Grade Quality Testing

**Placeholder:** 🔬 Quality Assurance  
**Title:** Medical-Grade Quality Testing  
**Description:** 100% products undergo rigorous clinical testing for sensitive post-surgery skin

### Image Specifications
- **Dimensions:** 16:9 aspect ratio (1920x1080px)
- **File Format:** JPG or WebP
- **Max Size:** 150KB
- **File Name:** `about-quality-testing.jpg`

### AI Image Generation Prompt
```
Medical laboratory quality testing setup, scientist in lab coat examining breast prosthesis 
with precision instruments, clinical testing environment, medical-grade materials on sterile 
surface, professional lab lighting, quality control charts visible in background, high-tech 
medical facility, clean aesthetic, teal and white color scheme, 16:9 aspect ratio, 
professional product photography
```

### Photography Guidelines
- **Setting:** Clean laboratory with testing equipment
- **Subject:** Quality control specialist examining products
- **Props:** Precision instruments, quality charts, medical-grade materials
- **Mood:** Scientific precision, trust, excellence
- **Lighting:** Bright clinical lighting, no harsh shadows
- **Colors:** White lab coats, stainless steel equipment, teal brand accents
- **Avoid:** Messy lab, unclear focus, intimidating equipment

---

## Slide 3: Fast & Discreet Delivery

**Placeholder:** 📦 Swift Delivery  
**Title:** Fast & Discreet Delivery  
**Description:** Express shipping across India with privacy-focused packaging in 24-48 hours

### Image Specifications
- **Dimensions:** 16:9 aspect ratio (1920x1080px)
- **File Format:** JPG or WebP
- **Max Size:** 150KB
- **File Name:** `about-delivery.jpg`

### AI Image Generation Prompt
```
Professional delivery service scene, unmarked discreet packaging box wrapped in elegant 
cream paper with subtle Nuvanaah seal, courier person in professional uniform handing 
package to satisfied customer at doorstep, clean Indian home entrance, warm natural 
lighting, trust and efficiency, no visible product names on package, privacy-focused, 
16:9 aspect ratio, professional commercial photography
```

### Photography Guidelines
- **Setting:** Modern Indian home entrance/doorway
- **People:** Professional courier + satisfied customer
- **Package:** Elegant cream/white box with minimal branding
- **Mood:** Trust, discretion, efficiency, satisfaction
- **Lighting:** Natural daylight, bright and cheerful
- **Colors:** Cream packaging, teal logo, neutral home interior
- **Avoid:** Generic courier uniforms, cheap packaging, urban clutter

---

## Slide 4: Post-Purchase Care Support

**Placeholder:** 💬 24/7 Support  
**Title:** Post-Purchase Care Support  
**Description:** Dedicated support team available via WhatsApp, phone, and video calls for product guidance

### Image Specifications
- **Dimensions:** 16:9 aspect ratio (1920x1080px)
- **File Format:** JPG or WebP
- **Max Size:** 150KB
- **File Name:** `about-customer-support.jpg`

### AI Image Generation Prompt
```
Customer care representative on video call consultation, warm smile, headset, modern 
home office setup with plants, laptop screen showing video call interface with product 
guidance to customer, compassionate care, professional yet approachable atmosphere, 
soft natural lighting from window, teal brand colors visible in background decor, 
16:9 aspect ratio, trust and support theme, Indian female representative in professional 
casual attire
```

### Photography Guidelines
- **Setting:** Modern home office/care center desk
- **Person:** Friendly female support representative with headset
- **Screen:** Video call interface (blurred customer for privacy)
- **Mood:** Approachable, caring, professional, helpful
- **Lighting:** Soft natural light + desk lamp
- **Colors:** Teal accessories (notepad, plant pot), warm wood desk
- **Avoid:** Corporate coldness, cluttered background, poor video quality

---

## Slide 5: Hospital Partnerships

**Placeholder:** 🏥 Medical Network  
**Title:** Hospital Partnerships  
**Description:** Trusted by 15+ leading oncology centers across India for patient recommendations

### Image Specifications
- **Dimensions:** 16:9 aspect ratio (1920x1080px)
- **File Format:** JPG or WebP
- **Max Size:** 150KB
- **File Name:** `about-hospital-partnerships.jpg`

### AI Image Generation Prompt
```
Modern Indian hospital oncology department, doctors and nurses in professional attire 
discussing patient care with Nuvanaah product catalog on consultation table, certificates 
of partnership visible on wall, collaborative healthcare setting, bright clean hospital 
interior with natural light, medical professionalism, team collaboration, teal and white 
hospital aesthetics, 16:9 aspect ratio, trust and medical excellence
```

### Photography Guidelines
- **Setting:** Clean modern hospital consultation room
- **People:** 2-3 medical professionals (mixed gender) reviewing materials
- **Props:** Nuvanaah catalog, partnership certificates on wall
- **Mood:** Professional collaboration, trust, medical excellence
- **Lighting:** Bright hospital lighting, natural window light
- **Colors:** White walls, teal accents, medical blue scrubs
- **Avoid:** Overcrowded room, outdated facilities, patient beds visible

---

## Technical Implementation

### File Storage Location
```
d:\nuvaanah\public\images\about\
```

### File Naming Convention
- `about-consultation.jpg` (Slide 1)
- `about-quality-testing.jpg` (Slide 2)
- `about-delivery.jpg` (Slide 3)
- `about-customer-support.jpg` (Slide 4)
- `about-hospital-partnerships.jpg` (Slide 5)

### Image Optimization
- Use WebP format for modern browsers (fallback to JPG)
- Compress to 80% quality
- Optimize with TinyPNG or similar tools
- Target file size: <150KB per image

---

## Code Integration (When Images Ready)

Replace the placeholder emoji section in `app/about/page.tsx` with:

```tsx
{/* Replace this placeholder div */}
<div className="text-8xl mb-6">{slides[currentSlide].placeholder}</div>

{/* With this image */}
<Image
  src={`/images/about/${slides[currentSlide].imageFile}`}
  alt={slides[currentSlide].title}
  fill
  className="object-cover"
  priority={currentSlide === 0}
/>
```

And add image file references to slides array:
```tsx
{
  title: 'Expert Consultation Process',
  description: '...',
  imageFile: 'about-consultation.jpg',
  imagePrompt: '...'
}
```

---

## Alternative: Stock Photo Sources

If AI generation is not available, use these stock photo sites:

1. **Unsplash** - Free high-quality images
   - Search: "medical consultation", "laboratory testing", "delivery service"
   
2. **Pexels** - Free stock photos
   - Search: "healthcare professional", "customer support", "hospital team"

3. **Freepik** - Free with attribution
   - Search: "oncology consultation", "medical quality control"

---

## Brand Consistency Guidelines

### Color Palette (must be present)
- **Primary:** Teal (#2C7A7B)
- **Secondary:** Cream (#FAF8F5), Sage (#D4E4D8)
- **Accents:** Gold (#D4AF37) sparingly

### Mood & Tone
- Professional yet warm
- Dignified and compassionate
- Trust-inspiring
- Never clinical or cold
- Avoid medical fear-based imagery

### People Representation
- Diverse age groups
- Indian context preferred
- Professional attire (white coats, business casual)
- Warm, genuine smiles
- No sad/distressed expressions

---

## Current Implementation Status

✅ Slideshow structure created with 5 slides  
✅ Auto-advance every 5 seconds  
✅ Manual navigation via dot indicators  
✅ Smooth transitions (slide in/out)  
✅ Emoji placeholders in place  
⏳ Professional images needed  
⏳ Image prompts documented (this file)  

**Next Steps:**
1. Generate or source 5 professional images using prompts above
2. Optimize images (<150KB each)
3. Save to `public/images/about/` folder
4. Update component to use actual images instead of placeholders
5. Test slideshow with real images
6. Remove yellow info card showing prompts (development aid only)
