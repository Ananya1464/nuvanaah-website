/**
 * NUVANAAH PRODUCT CATALOG — SPEC REBUILD
 * All content fields use spec-curated copy (not DOCX-parsed values).
 * product-content.json is retained as source backup only.
 */

import { Product } from './types'

// ─── CATEGORY MAPPINGS ──────────────────────────────────────────────────────
export const categoryMappings: { [key: string]: string } = {
  'recovery-body-support': 'Recovery & Body Support',
  'hair-confidence':       'Hair & Confidence',
  'everyday-wellness':     'Everyday Wellness',
  'mastectomy-care':       'Mastectomy Care',
  'lumpectomy-care':       'Lumpectomy Care',
}

export const categoryDisplayNames: { [key: string]: string } = {
  'recovery-body-support': 'Recovery & Body Support',
  'hair-confidence':       'Hair & Confidence',
  'everyday-wellness':     'Everyday Wellness',
  'mastectomy-care':       'Mastectomy Care',
  'lumpectomy-care':       'Lumpectomy Care',
}

export const categoryDescriptions: { [key: string]: string } = {
  'recovery-body-support': 'Products designed to support physical comfort during and after surgery — from prosthetics and bras to pillows and recovery kits.',
  'hair-confidence':       'Products for head coverage, facial appearance, and the confidence that comes from feeling like yourself during treatment-related hair loss.',
  'everyday-wellness':     'Products for daily care, personal hygiene, and the small beauty details that contribute to feeling like yourself during recovery and beyond.',
  'mastectomy-care':       'Products for women who have had a mastectomy — breast forms, pocket bras, post-surgery support, drain management, and lymphedema care.',
  'lumpectomy-care':       'Products for women who have had a lumpectomy — soft recovery bras, light breast forms for symmetry, underarm pillows, and compression for lymphedema management.',
}

// ─── CATEGORY OBJECTS ───────────────────────────────────────────────────────
const CAT_RECOVERY   = { id: 1, name: 'Recovery & Body Support', slug: 'recovery-body-support' }
const CAT_HAIR       = { id: 2, name: 'Hair & Confidence',       slug: 'hair-confidence' }
const CAT_WELLNESS   = { id: 3, name: 'Everyday Wellness',       slug: 'everyday-wellness' }
const CAT_MASTECTOMY = { id: 4, name: 'Mastectomy Care',         slug: 'mastectomy-care' }
const CAT_LUMPECTOMY = { id: 5, name: 'Lumpectomy Care',         slug: 'lumpectomy-care' }

// ─── PRODUCT CATALOG ────────────────────────────────────────────────────────
export const products: Product[] = [

  // ── P01 COMFORT SHAPE™ ───────────────────────────────────────────────────
  {
    id: 'comfort-shape',
    slug: 'comfort-shape',
    name: 'Comfort Shape™',
    subtitle: 'Plant-Fiber Breast Form',
    tagline: 'Thoughtfully Shaped. Naturally Comfortable.',
    price: 2500,
    priceFrom: false,
    categories: [CAT_RECOVERY, CAT_MASTECTOMY, CAT_LUMPECTOMY],
    categoryNav: 'Recovery & Body Support',
    description: 'A lightweight plant-fiber breast form thoughtfully designed to support comfort, balance and confidence after breast surgery. Sold individually — choose Left or Right. Made with plant-fiber filling and a breathable plant-fiber outer fabric, Comfort Shape feels soft against the body while helping reduce heat build-up during daily wear.',
    fullStory: 'Comfort Shape is built on a simple insight: shape does not require weight. Most breast forms achieve their silhouette through density — heavy materials that hold their form by mass alone. Comfort Shape achieves the same result through geometry. The flat inner surface sits stable against the chest wall. The curved outer face creates a soft, rounded silhouette beneath clothing. Between them: plant fiber, air, and 10–20 grams.\n\nThe result is a form that disappears during wear. No pull on the bra. No heat building against the skin. No awareness of it by mid-afternoon. You put it on, and you stop thinking about it. That is not a small thing. That is what comfort actually means.',
    images: [
      { id: 1, src: '/images/catalog/bloomform/1.jpeg', alt: 'Comfort Shape™ — view 1' },
      { id: 2, src: '/images/catalog/bloomform/2.jpeg', alt: 'Comfort Shape™ — view 2' },
      { id: 3, src: '/images/catalog/bloomform/3.jpeg', alt: 'Comfort Shape™ — view 3' },
      { id: 4, src: '/images/catalog/bloomform/4.jpeg', alt: 'Comfort Shape™ — view 4' },
      { id: 5, src: '/images/catalog/bloomform/5.jpeg', alt: 'Comfort Shape™ — view 5' },
    ],
    stock_status: 'instock',
    featured: true,
    inStock: true,
    tags: ['after-surgery', 'prosthetic', 'recovery', 'body-support'],
    shopByNeed: ['after-surgery'],
    recoveryStage: ['stage-2', 'stage-4'],
    variantLabel: 'Side',
    variantOptions: ['Left', 'Right'],
    crossSells: ['willow-support', 'nature-nest'],
    whatsIncluded: [
      { item: "1 × Comfort Shape breast form", detail: "In your selected side — Left or Right" },
      { item: "2 removable washable covers", detail: "Included with every order" },
    ],
    whenToUse: [
      {
        heading: "After Lumpectomy",
        body: "If only a lump has been removed and the natural breast shape remains largely intact, a suitable bra may be all that is required. Comfort Shape may be considered if additional balance or shape is desired."
      },
      {
        heading: "After Mastectomy",
        body: "If the breast has been removed through mastectomy, Comfort Shape may be used to help restore balance and create a natural appearance under clothing."
      }
    ],
    whenToUseNote: "Comfort Shape should only be used after the surgical area has healed completely. Please consult your care team if you are unsure.",
    benefitsList: [
      { title: 'You stop noticing you are wearing it', desc: 'At 10–20 grams, there is no pull, no shift, no heat. Women describe it the same way: they forget it is there.' },
      { title: 'Natural shape without the weight', desc: 'Geometry, not density, creates the silhouette. The flat inner and curved outer work together. The appearance is natural. The weight is a fraction of silicone alternatives.' },
      { title: 'Stays cool all day', desc: 'Plant-fiber filling allows air movement. No heat retention. Particularly meaningful in India\'s climate and for skin that is still healing.' },
      { title: 'Left and right specific design', desc: 'L and R versions are shaped to their respective side. A generic form placed on either side will not sit correctly. These do.' },
      { title: 'Designed to work with Willow Support', desc: 'Sized and shaped to fit the discreet corner pocket of the Willow Support bra. Purchased together, they work as a system.' },
    ],
    keyFeatures: [
      'Sold individually — choose Left or Right',
      'Plant-fiber filling — breathable and cool',
      'Plant-fiber outer fabric — soft against skin',
      'Lightweight — approximately 10 to 20 grams',
      'Left and Right specific shape — not interchangeable',
      'Natural contoured shape',
      'Includes 2 removable washable covers',
      'Easy pocket system — open, insert, close',
      'Everyday wear friendly',
    ],
    materialsText: 'Plant-fiber filling inside a soft, breathable plant-fiber outer fabric. Two layers that work together to keep the form cool, clean, and comfortable throughout the day. The cover is removable and hand-washable — two covers are included per form. Do not wash the form itself — only the cover.',
    careText: [
      'Hand wash cover in cool water',
      'Air dry flat',
      'Keep away from direct heat',
    ],
    careDonts: [
      'Do not machine wash the form',
      'Do not tumble dry',
      'Do not iron',
    ],

    gentleNote: 'There is no rule about when you should start wearing a breast form — or whether you should wear one at all. Some women wear one every day. Others occasionally. Others choose not to. All of these are valid, and none require justification.\n\nComfort Shape is here if and when you want it. Whenever you are ready. At whatever pace feels right.',
    seoTitle: 'Comfort Shape Plant-Fiber Breast Form – Lightweight & Soft',
    metaDescription: 'Lightweight 10–20 gm plant-fiber breast form. Breathable, cool, and shaped for a natural silhouette. Available in Left and Right.',
    ogTitle: 'Comfort Shape™ — Plant-Fiber Breast Form | Nuvanaah',
    ogDescription: 'A plant-fiber breast form weighing 10–20 grams. Flat where it meets the body. Curved where it creates shape. Lighter, cooler, and more comfortable than silicone alternatives.',
    faqs: [
      { q: 'Do I need to buy Left and Right separately?', a: 'Yes — Comfort Shape is sold as a single form, Left or Right. Each is shaped to the specific anatomy of that side. The chest contours differ subtly in curve, angle, and position, so the correct side-specific form is always important for a natural fit.' },
      { q: 'How does plant fiber compare to silicone?', a: 'Comfort Shape weighs 10–20 grams versus several hundred grams for silicone forms. Plant fiber is breathable and cool where silicone traps heat. The appearance result is similar; the wearing experience is significantly different.' },
      { q: 'Will it work with my current bra?', a: 'Comfort Shape is designed to fit inside the prosthetic pocket of a pocket bra — specifically the Willow Support bra. It may also work in other pocket bras depending on pocket size.' },
      { q: 'How do I wash the cover?', a: 'Remove the fabric cover and hand wash it in cool water with a mild detergent. Air dry flat. Do not machine wash. The form itself does not require washing — only the cover does.' },
    ],

    isGiftPopular: false,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: false,
    showSizeGuide: false,
  },

  // ── P02 WILLOW SUPPORT™ ──────────────────────────────────────────────────
  {
    id: 'willow-support',
    slug: 'willow-support',
    name: 'Willow Support™',
    subtitle: 'Post-Surgery Comfort Bra',
    tagline: '',
    price: 3000,
    priceFrom: false,
    categories: [CAT_RECOVERY, CAT_MASTECTOMY, CAT_LUMPECTOMY],
    categoryNav: 'Recovery & Body Support',
    description: 'A post-surgery mastectomy bra made from ultra-soft plant-fiber fabric, designed to make getting dressed feel ordinary again. Front-hook closure. Discreet prosthetic pocket. Suitable after lumpectomy and mastectomy.',
    fullStory: 'After breast surgery, the things that used to be automatic require thought. Getting dressed is one of them. Willow Support was designed so that at least the bra is not an obstacle. The front-hook closure means you do not need help putting it on. The soft inner comfort panel means the hooks never touch the skin. The adjustable straps fit a body that is still changing week by week.\n\nThe discreet corner side pocket — approximately three inches wide, invisible from outside — exists for women using a prosthetic. It is not visible. It is not complicated to use. It is simply there, when needed.',
    images: [
      { id: 1, src: '/images/catalog/WillowSupport/1.jpeg', alt: 'Willow Support™ — view 1' },
      { id: 2, src: '/images/catalog/WillowSupport/2.jpeg', alt: 'Willow Support™ — view 2' },
      { id: 3, src: '/images/catalog/WillowSupport/3.jpeg', alt: 'Willow Support™ — view 3' },
      { id: 4, src: '/images/catalog/WillowSupport/4.jpeg', alt: 'Willow Support™ — view 4' },
      { id: 5, src: '/images/catalog/WillowSupport/5.jpeg', alt: 'Willow Support™ — view 5' },
    ],
    stock_status: 'instock',
    featured: true,
    inStock: true,
    tags: ['after-surgery', 'bra', 'drain-management', 'recovery'],
    shopByNeed: ['after-surgery'],
    recoveryStage: ['stage-1', 'stage-2', 'stage-3', 'stage-4'],
    crossSells: ['comfort-shape', 'nature-nest'],
    variantLabel: 'Colour',
    variantOptions: ['Aparajita', 'Ebony', 'Dusty Miller'],
    benefitsList: [
      { title: 'Dressing independently, every morning', desc: 'The front-hook closure gives that independence back. No help needed. No reaching behind. You stand in front of the mirror and dress yourself.' },
      { title: 'Comfortable from morning through evening', desc: 'Plant-fiber fabric stays soft and breathable all day. Synthetic fabrics stiffen and stick after a few hours. This does not.' },
      { title: 'Gentle on skin that is still healing', desc: 'Every seam, every panel, every closure position was placed to minimise contact with healing skin. The soft center panel ensures the hooks never touch the chest directly.' },
      { title: 'Prosthetic pocket that actually works', desc: 'The corner side opening is clean, discreet, and wide enough to insert a prosthetic without removing the bra. Designed around the Comfort Shape but compatible with alternatives.' },
    ],
    keyFeatures: [
      'Front-hook closure',
      'Soft inner center comfort panel',
      'Discreet ~3-inch corner side prosthetic opening',
      'Adjustable straps',
      'Plant-fiber fabric — breathable all day',
    ],
    materialsText: 'Ultra-soft plant-fiber fabric throughout — breathable, temperature-regulating, and gentle against healing skin. Softer than cotton. Stays that way through repeated washing.\n\nThe front hook closure is constructed with a soft backing panel so the hardware never makes direct skin contact. Straps are fully adjustable with standard sliding hardware that does not abrade sensitive shoulder areas.',
    careText: [
      'Hand wash in cool water with mild detergent',
      'Lay flat or hang to dry',
      'Wash regularly for hygiene',
    ],
    careDonts: [
      'Do not machine wash',
      'Do not tumble dry',
      'Do not bleach',
      'Do not iron the closure directly',
    ],
    whatsIncluded: [
      '1 × Willow Support bra (in selected colour)',
      'Care guide',
    ],
    gentleNote: 'Recovery changes the relationship you have with your body. The things that were automatic — getting dressed, choosing what to wear — suddenly require thought and care. That is not a failure. That is what recovery looks like.\n\nWillow Support was designed so that at least one of those things does not require extra thought. Put it on. Wear it. Take it off. The goal is for it to become something you stop noticing, because it is doing its job quietly and well.\n\nBe gentle with yourself. You are doing something hard.',
    seoTitle: 'Willow Support Post-Surgery Comfort Bra',
    metaDescription: 'Soft plant-fiber post-surgery bra with front-hook closure and discreet prosthetic pocket in three colours.',
    ogTitle: 'Willow Support™ — Post-Surgery Comfort Bra | Nuvanaah',
    ogDescription: 'A post-surgery bra made from ultra-soft plant-fiber fabric. Front-hook closure. Discreet prosthetic pocket.',
    faqs: [
      { q: 'How do I choose my size?', a: 'Measure your underbust circumference in centimetres. S: 68–78cm, M: 78–88cm, L: 88–98cm, XL: 98–108cm. If between sizes, size up. The adjustable straps allow further customisation.' },
      { q: 'Is the prosthetic pocket compatible with other brands?', a: 'The pocket is designed around the Comfort Shape breast form but is compatible with most lightweight prosthetics up to approximately 3 inches wide. Heavier silicone forms may not stay positioned securely.' },
      { q: 'Can I wear it immediately after surgery?', a: 'Please follow your surgical team\'s guidance on when to begin wearing a bra after surgery. Many women begin wearing Willow Support as soon as their team approves a soft bra.' },
      { q: 'How long does the fabric stay soft?', a: 'Plant-fiber fabric maintains its softness through repeated gentle washing. Hand wash in cool water and lay flat or hang to dry — do not machine wash or tumble dry, which would reduce softness over time.' },
      { q: 'Is the prosthetic pocket visible from outside?', a: 'No. The pocket opening is at the corner side seam and is not visible through clothing. There is no external pocket panel or additional fabric on the outside of the bra.' },
    ],
    isGiftPopular: false,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: true,
    showSizeGuide: true,
  },

  // ── P03 NATURE NEST™ ─────────────────────────────────────────────────────
  {
    id: 'nature-nest',
    slug: 'nature-nest',
    name: 'Nature Nest™',
    subtitle: 'Underarm Rest Pillow',
    tagline: '',
    price: 1500,
    priceFrom: false,
    categories: [CAT_RECOVERY, CAT_MASTECTOMY, CAT_LUMPECTOMY],
    categoryNav: 'Recovery & Body Support',
    description: 'A soft underarm pillow shaped specifically for the arm and side of the body during rest after breast surgery. Plant-fiber filled, cool against skin, with a removable washable cover in three printed designs.',
    fullStory: 'A nest is one of nature\'s most intentional structures. Not built for beauty — though it often has it. Built for one purpose: to hold something that needs protecting, with exactly the right amount of support.\n\nAfter breast surgery, the arm on the affected side needs a specific position during rest — not too close to the body, not too far, supported but not pressed. A rolled towel is too firm. A standard pillow is too large and soft. Neither is shaped for the job. Nature Nest is shaped for the job.',
    images: [
      { id: 1, src: '/images/catalog/NatureNest/1.jpeg', alt: 'Nature Nest™ — view 1' },
      { id: 2, src: '/images/catalog/NatureNest/2.jpeg', alt: 'Nature Nest™ — view 2' },
      { id: 3, src: '/images/catalog/NatureNest/3.PNG', alt: 'Nature Nest™ — view 3' },
    ],
    stock_status: 'instock',
    featured: true,
    inStock: true,
    tags: ['after-surgery', 'pillow', 'arm-support', 'recovery'],
    shopByNeed: ['after-surgery'],
    recoveryStage: ['stage-1', 'stage-2'],
    crossSells: ['willow-support', 'nest-carry'],
    variantLabel: 'Print',
    variantOptions: ['Wildflower Garden', 'Willow Print', 'Aparajita Petals'],
    benefitsList: [
      { title: 'Reduces pressure during rest', desc: 'Sits between arm and body, lifting the arm slightly away from sensitive underarm tissue. A small physical change that produces a meaningful improvement in comfort.' },
      { title: 'Arm stays where it should without effort', desc: 'The muscles holding the arm in position can relax. The pillow does that work. Rest that follows is genuinely better.' },
      { title: 'Stays cool against sensitive skin', desc: 'Plant-fiber filling does not trap heat. The pillow stays near room temperature during extended rest, which matters when underarm skin is already warm or inflamed.' },
      { title: 'Easy to keep hygienic', desc: 'Remove the cover. Wash at 30°C. Replace. The filling never needs washing. The process takes minutes.' },
      { title: 'A comforting presence in the space', desc: 'The printed covers — Wildflower Garden, Willow Print, Aparajita Petals — are not clinical. They are beautiful. Recovery deserves objects that feel personal.' },
    ],
    keyFeatures: [
      'Shaped specifically for underarm support',
      'Plant-fiber filling — lightweight and cool',
      'Removable, washable printed cover',
      'Three print options',
      'Lightweight — carry between rooms or to appointments',
      'Useful beyond the recovery period',
    ],
    materialsText: 'Lightweight plant-fiber filling inside a soft cotton-blend printed cover. The two-layer construction keeps filling clean even when the cover is washed.\n\nThe cover attaches securely around the form and is removed easily for washing. The plant-fiber filling does not require washing and maintains its shape and loft through regular use.',
    careText: [
      'Hand wash cover in cool water with mild detergent',
      'Lay flat or hang to dry',
      'Store in a breathable location',
    ],
    careDonts: [
      'Do not machine wash the cover',
      'Do not wash the pillow filling',
      'Do not tumble dry',
      'Do not bleach or iron the cover',
      'Do not compress under heavy items',
    ],
    whatsIncluded: [
      'Nature Nest underarm rest pillow with plant-fiber filling',
      'Removable printed cover (in selected print), fitted on arrival',
      'Printed care instructions card',
    ],
    gentleNote: 'Recovery takes time. More time, often, than people expect. Finding comfort during this period — physical comfort, the small, daily kind — matters more than it might seem.\n\nSmall comforts are not small things during recovery. They are part of what makes it possible to rest well, which is part of what makes healing possible.\n\nRest when you can. Let Nature Nest be one less thing to manage.',
    seoTitle: 'Nature Nest Underarm Rest Pillow – Post-Surgery Comfort',
    metaDescription: 'Soft underarm rest pillow for post-surgery recovery. Plant-fiber filled, removable washable cover, three printed designs.',
    ogTitle: 'Nature Nest™ — Underarm Rest Pillow | Nuvanaah',
    ogDescription: 'A soft underarm pillow shaped for post-surgery rest. Plant-fiber filled, cool against skin, with a removable washable cover in three printed designs.',
    faqs: [
      { q: 'Which side does the pillow go under?', a: 'Place Nature Nest under the arm on your affected side. The pillow lifts the arm slightly away from the body, reducing pressure on the underarm area during rest.' },
      { q: 'Can I use it in bed?', a: 'Yes. Nature Nest is useful during rest in any position — in bed, on a sofa, or in a chair. The lightweight construction means you can carry it between rooms easily.' },
      { q: 'How do I wash the cover?', a: 'Remove the cover by unwrapping or unzipping it from the form. Hand wash in cool water with a mild detergent. Lay flat or hang to dry. Do not machine wash or tumble dry. The filling itself does not need washing.' },
      { q: 'Is it useful after the immediate recovery period?', a: 'Many women continue using Nature Nest well beyond their initial recovery. It is also useful during lymphedema management, during radiotherapy, and as a general arm support during rest.' },
    ],
    isGiftPopular: true,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: false,
    showSizeGuide: false,
  },

  // ── P04 AIRBLOOM™ ────────────────────────────────────────────────────────
  {
    id: 'airbloom',
    slug: 'airbloom',
    name: 'AirBloom™',
    subtitle: 'Hair Scarf System',
    tagline: 'The comfort of a scarf. The beauty of natural hair.',
    price: 5000,
    priceFrom: false,
    categories: [CAT_HAIR],
    categoryNav: 'Hair & Confidence',
    description: 'Real human hair integrated into a breathable scarf design. Natural-looking coverage from every angle — front, sides, and back. Lightweight enough to wear from morning to evening without thinking about it.',
    fullStory: 'Air: breathability — the quality most head coverings do not offer. The plant-fiber scalp fabric in AirBloom promotes airflow, keeping the scalp light and comfortable rather than warm and restricted.\n\nBloom: to come into your own. Hair is part of how many women express who they are. When hair loss takes that away, even temporarily, it takes something of the sense of self with it. AirBloom, with its real human hair, is designed to give something of that back.\n\n"AirBloom. The comfort of a scarf. The beauty of natural hair."',
    images: [
      { id: 1, src: '/images/catalog/AirBloom/1.jpeg', alt: 'AirBloom™ — view 1' },
      { id: 2, src: '/images/catalog/AirBloom/2.jpeg', alt: 'AirBloom™ — view 2' },
      { id: 3, src: '/images/catalog/AirBloom/3.jpeg', alt: 'AirBloom™ — view 3' },
      { id: 4, src: '/images/catalog/AirBloom/4.jpeg', alt: 'AirBloom™ — view 4' },
    ],
    stock_status: 'instock',
    featured: true,
    inStock: true,
    tags: ['hair-loss', 'scarf', 'hair-system', 'confidence'],
    shopByNeed: ['hair-loss'],
    recoveryStage: ['stage-3', 'stage-4'],
    crossSells: ['browbloom', 'willow-wrap'],
    variantLabel: 'Colour',
    variantOptions: ['Dusty Miller', 'Coffee Bean', 'Magnolia', 'Ebony'],
    benefitsList: [
      { title: 'Natural hair appearance you can trust', desc: 'Real human hair, not synthetic. The movement and authenticity of real hair cannot be replicated by fabric alone. That is what allows you to feel like yourself, not someone wearing a covering.' },
      { title: 'Breathability that makes a real difference', desc: 'Plant-fiber scalp fabric promotes airflow throughout the day. The scalp stays cooler. Consistent daily wear becomes possible rather than something to endure.' },
      { title: 'Coverage from every angle', desc: 'Front, sides, and back. You move through your day without managing your appearance in your mind.' },
      { title: 'The elegance of a scarf, the beauty of hair', desc: 'No wig and no plain scarf achieves this combination alone. AirBloom gives you both.' },
      { title: 'Soft and comfortable on sensitive scalps', desc: 'Gentle materials throughout. Lightweight construction. Morning through evening without fatigue.' },
      { title: 'Effortless to wear', desc: 'No specialist tools. No assistance. On in the morning, out of your mind for the rest of the day.' },
    ],
    keyFeatures: [
      'Real human hair integration',
      'Breathable plant-fiber scalp fabric',
      'Natural front hairline effect',
      'Full coverage — front, sides, back',
      'Lightweight for extended daily wear',
      'Soft on sensitive scalp areas',
    ],
    materialsText: 'Real human hair over a specially selected plant-fiber scalp fabric that promotes airflow and maintains a light, comfortable feel against even sensitive scalps.\n\nThe hair is sourced and finished to move and behave naturally. The scarf fabric is lightweight and breathable — not a synthetic material that traps heat or irritates sensitive scalp skin.',
    careText: [
      'Follow included care guide for hair',
      'Hand wash fabric section in cool water',
      'Air dry',
      'Store in the dust bag provided',
    ],
    careDonts: [
      'Do not machine wash',
      'Do not tumble dry',
      'Do not use high heat',
    ],
    whatsIncluded: [
      'AirBloom hair scarf system (in selected colour)',
      'Storage dust bag',
    ],
    gentleNote: 'Hair loss changes things. The way you look in the mirror changes. The way you feel walking into a room changes. This is not vanity. Hair is part of identity. Its absence deserves to be acknowledged, not minimised.\n\nAirBloom is not a solution to hair loss. It is a way of living with it more comfortably, on your own terms.\n\nYou are more than your hair. And you are allowed to care about it anyway.',
    seoTitle: 'AirBloom Hair Scarf System – Real Hair & Breathable',
    metaDescription: 'AirBloom combines real human hair with breathable plant-fiber scalp fabric in an elegant scarf design. Natural look and all-day comfort.',
    ogTitle: 'AirBloom™ — Hair Scarf System | Nuvanaah',
    ogDescription: 'Real human hair integrated into a breathable scarf design. Natural-looking coverage from every angle. Lightweight enough to wear from morning to evening.',
    faqs: [
      { q: 'Is the hair real or synthetic?', a: 'AirBloom uses real human hair. This gives a natural movement and appearance that synthetic alternatives cannot replicate.' },
      { q: 'How do I style the hair?', a: 'The included care and styling guide covers all styling options. Use low-heat tools only. High heat will damage human hair just as it damages your own.' },
      { q: 'Can I wear it every day?', a: 'Yes. AirBloom is designed for daily wear. The breathable scalp fabric makes extended daily wear possible and comfortable.' },
      { q: 'How do I wash it?', a: 'Hand wash the fabric section in cool water. The hair should be cared for as directed in the included guide — typically a gentle shampoo and conditioner, with air drying.' },
      { q: 'Do I need help putting it on?', a: 'No. AirBloom is designed for independent application — on in the morning as part of your routine, without specialist tools or assistance.' },
    ],
    isGiftPopular: false,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: false,
    showSizeGuide: false,
  },

  // ── P05 WILLOW WRAP™ ─────────────────────────────────────────────────────
  {
    id: 'willow-wrap',
    slug: 'willow-wrap',
    name: 'Willow Wrap™',
    subtitle: 'Soft Head Scarf Collection',
    tagline: '',
    price: 1500,
    priceFrom: false,
    categories: [CAT_HAIR],
    categoryNav: 'Hair & Confidence',
    description: 'A bamboo plant-fiber head scarf — softer and more breathable than cotton, gentle directly against a bare scalp. Three printed designs. Lightweight enough to carry everywhere.',
    fullStory: 'Willow is the tree that yields rather than breaks — bending with what comes, returning when it passes. A Willow Wrap does the same. It is for the days when you choose the Wildflower Garden print because it makes you feel something. And for the days when you reach for Aparajita Petals because it goes with everything and you have more important things to think about.\n\nBamboo plant fiber is softer than cotton, naturally breathable, and lighter at the same weight. These are not incidental qualities. Against a bare scalp — sensitive, exposed — they are the qualities that determine whether something can be worn every day or only occasionally.',
    images: [
      { id: 1, src: '/images/catalog/Willow Wrap/1.PNG', alt: 'Willow Wrap™ — view 1' },
      { id: 2, src: '/images/catalog/Willow Wrap/2.PNG', alt: 'Willow Wrap™ — view 2' },
      { id: 3, src: '/images/catalog/Willow Wrap/3.PNG', alt: 'Willow Wrap™ — view 3' },
      { id: 4, src: '/images/catalog/Willow Wrap/4.PNG', alt: 'Willow Wrap™ — view 4' },
    ],
    stock_status: 'instock',
    featured: true,
    inStock: true,
    tags: ['hair-loss', 'scarf', 'head-covering', 'confidence'],
    shopByNeed: ['hair-loss'],
    recoveryStage: ['stage-3', 'stage-4'],
    crossSells: ['airbloom', 'browbloom'],
    variantLabel: 'Print',
    variantOptions: ['Wildflower Garden', 'Willow Print', 'Aparajita Petals'],
    benefitsList: [
      { title: 'Soft enough to wear directly against a bare scalp', desc: 'Bamboo fiber surface is smooth and genuinely soft without the friction coarser fabrics cause. Maintained through repeated washing.' },
      { title: 'Breathable in warm weather', desc: 'Air circulates through the fabric. Heat does not build between scarf and scalp. Designed for India\'s climate.' },
      { title: 'Three prints worth choosing between', desc: 'Wildflower Garden (colourful florals on sage), Willow Print (watercolour blue and yellow leaves), Aparajita Petals (navy and pink dots on white). Not generic options. Named, considered, personal.' },
      { title: 'Lightweight — goes everywhere', desc: 'Folds to almost nothing. Fits any bag. Goes to appointments, to rest, to the days when you want coverage without planning.' },
      { title: 'Multiple ways to wear it', desc: 'Classic tied wrap, front knot, loose drape. The fabric settles naturally without pins or clips.' },
    ],
    keyFeatures: [
      'Bamboo plant-fiber fabric — softer than cotton',
      'Gentle directly against bare scalp',
      'Three printed designs',
      'Lightweight and compact',
      'Breathable — suited to India\'s climate',
      'Colourfast through regular washing',
    ],
    materialsText: '100% bamboo plant-fiber fabric. Lighter and softer than cotton equivalents, with a smooth surface texture that stays gentle through repeated washing.\n\nBamboo fiber has a natural temperature-regulating quality that makes it more comfortable against a bare scalp in warm weather than synthetic or even cotton alternatives. The prints are colour-locked to resist fading through regular gentle washing.',
    careText: [
      'Hand wash in cool water with mild detergent',
      'Lay flat or hang to dry',
      'Dry away from direct sunlight to preserve print',
    ],
    careDonts: [
      'Do not machine wash',
      'Do not tumble dry',
      'Do not iron on high heat directly on print',
      'Do not bleach',
    ],
    whatsIncluded: [
      'Willow Wrap head scarf (in selected print)',
      'Care and styling guide',
    ],
    gentleNote: 'There are days when getting dressed is a meaningful act of intention. And days when it simply needs to be done quickly, comfortably, and without fuss.\n\nYou do not have to feel beautiful every day. You do not have to perform wellness or recovery for anyone. But if a soft scarf in a print you love makes a single day a little more comfortable, a little more like yours — then it has done exactly what it was made to do.\n\nAll of those days are valid.',
    seoTitle: 'Willow Wrap Soft Head Scarf – Bamboo Plant Fiber',
    metaDescription: 'Soft bamboo plant-fiber head scarf in three beautiful prints. Lightweight, breathable, and gentle for everyday wear and recovery.',
    ogTitle: 'Willow Wrap™ — Soft Head Scarf | Nuvanaah',
    ogDescription: 'A bamboo plant-fiber head scarf — softer and more breathable than cotton, gentle directly against a bare scalp. Three printed designs.',
    faqs: [
      { q: 'Is it soft enough for a bare scalp?', a: 'Yes. Bamboo plant fiber has a naturally smooth surface that is softer than cotton at the point of contact. It does not have the roughness or friction that coarser fabrics can cause against sensitive scalp skin.' },
      { q: 'How do I tie it?', a: 'The included styling guide shows several tying methods including a classic wrap, a front knot, and a loose drape. The fabric holds its position naturally without requiring pins or clips.' },
      { q: 'Will the print fade with washing?', a: 'The prints are colour-locked to resist fading through regular gentle washing. Dry away from direct sunlight to preserve print colours over time.' },
      { q: 'Can I wear it to sleep?', a: 'Many women do sleep in a light head covering during recovery. Willow Wrap is soft and lightweight enough for overnight wear, though a very light bonnet may be more comfortable for some.' },
    ],
    isGiftPopular: false,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: false,
    showSizeGuide: false,
  },

  // ── P06 FLOWSLEEVE™ ──────────────────────────────────────────────────────
  {
    id: 'flowsleeve',
    slug: 'flowsleeve',
    name: 'FlowSleeve™',
    subtitle: 'Compression Sleeve with Holding Belt',
    tagline: '',
    price: 1575,
    priceFrom: false,
    categories: [CAT_RECOVERY, CAT_MASTECTOMY, CAT_LUMPECTOMY],
    categoryNav: 'Recovery & Body Support',
    description: 'A lymphedema compression sleeve with an adjustable shoulder holding belt that keeps it in place throughout the day — without constant readjustment. Soft, breathable, and designed for the full working day.',
    fullStory: 'Most compression sleeves rely on the sleeve\'s own elasticity to stay on the arm. This works at rest. It does not work during a normal day. The sleeve slides. You readjust. It slides again.\n\nFlowSleeve\'s adjustable shoulder holding belt attaches at the top of the sleeve and passes over the shoulder. The sleeve stays where it belongs — during movement, during work, during all the activities that make up a day. That is not a secondary feature. It is the reason FlowSleeve exists.',
    images: [
      { id: 1, src: '/images/catalog/FlowSleeve/1.jpeg', alt: 'FlowSleeve™ — view 1' },
    ],
    stock_status: 'instock',
    featured: true,
    inStock: true,
    tags: ['after-surgery', 'lymphedema', 'compression', 'recovery'],
    shopByNeed: ['after-surgery'],
    recoveryStage: ['stage-2', 'stage-3', 'stage-4'],
    crossSells: ['nature-nest', 'nest-carry'],
    variantLabel: 'Version',
    variantOptions: ['Indian (₹ 1,575)', 'Imported (₹ 2,840)'],
    benefitsList: [
      { title: 'A sleeve that stays where it should', desc: 'The shoulder holding belt is the feature most appreciated by daily wearers. No sliding. No constant readjustment. The sleeve is there, doing its work, without demanding your attention.' },
      { title: 'Consistent gentle compression', desc: 'Calibrated for everyday comfort and extended wear. Not for acute clinical intervention — for the full working day, every day.' },
      { title: 'Soft against skin that may be sensitive', desc: 'The fabric presses against the arm for eight or more hours. It needs to be genuinely gentle, not just functional. It is.' },
      { title: 'Breathable construction', desc: 'Air circulates. Heat does not build. Particularly meaningful in India\'s warm climate for a garment worn all day.' },
      { title: 'Freedom of movement', desc: 'Moves with the arm through the full range of daily activity — reaching, lifting, carrying, typing. Wearing it does not change what you can do.' },
      { title: 'Two options to choose from', desc: 'Indian (₹ 1,575) and Imported (₹ 2,840). Both include the holding belt. Choose based on your needs and preference.' },
    ],
    keyFeatures: [
      'Adjustable shoulder holding belt — prevents slipping',
      'Gentle consistent compression for daily wear',
      'Soft skin-contact fabric',
      'Breathable construction',
      'Full freedom of movement',
      'Available in Indian and Imported versions',
    ],
    materialsText: 'Compression fabric selected for both performance and skin comfort — soft at the contact surface, breathable throughout, and maintained through regular washing.\n\nThe shoulder holding belt is adjustable and padded at the shoulder contact point. It is designed to sit invisibly under most clothing without creating a visible line.',
    careText: [
      'Hand wash in cool water',
      'Air dry flat',
      'Follow compression garment care guidelines',
    ],
    careDonts: [
      'Do not machine wash',
      'Do not tumble dry',
      'Do not bleach',
      'Do not iron',
      'Do not use fabric softener (reduces compression performance)',
    ],
    whatsIncluded: [
      'FlowSleeve compression sleeve with adjustable shoulder holding belt',
      'Care guide',
    ],
    gentleNote: 'Managing lymphedema is not something anyone chooses. It is a consequence of treatment for something else — one of the harder aspects of recovery to accept.\n\nFlowSleeve is designed to do one thing well: to stay where it belongs, feel gentle against your skin, and support your arm through your day without demanding your constant attention. To be part of your routine without dominating it.\n\nBecause healing deserves comfort. Because support should feel gentle.',
    seoTitle: 'FlowSleeve Lymphedema Compression Sleeve with Holding Belt',
    metaDescription: 'Gentle compression sleeve with adjustable shoulder holding belt. Stays in place all day. Soft, breathable fabric for everyday wear.',
    ogTitle: 'FlowSleeve™ — Compression Sleeve with Holding Belt | Nuvanaah',
    ogDescription: 'A lymphedema compression sleeve with an adjustable shoulder holding belt that keeps it in place throughout the day. Soft, breathable, and designed for extended daily wear.',
    faqs: [
      { q: 'What is the difference between Indian and Imported?', a: 'Both versions include the shoulder holding belt and provide the same gentle compression level. The Imported version uses a different fabric construction which some wearers prefer for texture. Both are suitable for everyday wear.' },
      { q: 'Should I consult my doctor before using a compression sleeve?', a: 'Yes. We recommend consulting your lymphedema specialist or healthcare team before starting compression therapy to ensure the compression level is appropriate for your specific situation.' },
      { q: 'How tight should the sleeve feel?', a: 'The sleeve should feel snug but not painful. If you experience numbness, tingling, or increased swelling, remove the sleeve and consult your healthcare team.' },
      { q: 'Can I wear it all day?', a: 'FlowSleeve is designed for all-day wear. The holding belt keeps it in position and the breathable fabric makes extended wear comfortable. Remove before sleeping unless directed otherwise by your healthcare team.' },
      { q: 'How often should I wash it?', a: 'Hand wash daily or every other day. Regular washing removes skin oils and perspiration that can degrade compression performance over time.' },
    ],
    isGiftPopular: false,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: false,
    showSizeGuide: false,
  },

  // ── P07 NEST CARRY™ ──────────────────────────────────────────────────────
  {
    id: 'nest-carry',
    slug: 'nest-carry',
    name: 'Nest Carry™',
    subtitle: 'Recovery Support Kit',
    tagline: '',
    price: 1500,
    priceFrom: false,
    categories: [CAT_RECOVERY, CAT_MASTECTOMY],
    categoryNav: 'Recovery & Body Support',
    description: 'A Recovery Support Kit created to help women keep important recovery essentials organized, accessible, and close at hand during everyday life. Provides greater convenience, reduced stress, and the confidence of having what you need within easy reach.',
    fullStory: 'Recovery often comes with many small practical needs. NestCarry helps keep important items organized and within reach, allowing you to focus more on your wellbeing and less on managing supplies.\n\nNestCarry was created to help women keep important recovery essentials organized, accessible, and close at hand during everyday life. The emotional benefit is not the bag itself — it is greater convenience, greater organization, reduced stress, and the confidence of having important items within easy reach as you move through recovery.',
    images: [
      { id: 1, src: '/images/catalog/NestCarry/1.PNG', alt: 'Nest Carry™ — view 1' },
      { id: 2, src: '/images/catalog/NestCarry/2.PNG', alt: 'Nest Carry™ — view 2' },
      { id: 3, src: '/images/catalog/NestCarry/3.PNG', alt: 'Nest Carry™ — view 3' },
    ],
    stock_status: 'instock',
    featured: true,
    inStock: true,
    tags: ['after-surgery', 'recovery-kit', 'gift', 'practical'],
    shopByNeed: ['after-surgery'],
    recoveryStage: ['stage-1', 'stage-2'],
    crossSells: ['willow-carry', 'nature-nest'],
    variantLabel: '',
    variantOptions: [],
    benefitsList: [
      { title: 'Confidence and reduced stress', desc: 'Enjoy greater convenience and organization with a Recovery Support Kit that keeps important items within easy reach, reducing the cognitive load of recovery.' },
      { title: 'Gentle daily movement support', desc: 'The smiley therapy ball supports hand and arm mobility after surgery. Soft enough for sensitive hands. Use it anywhere — watching television, in waiting rooms, during rest.' },
      { title: 'One place for appointments and observations', desc: 'Appointment dates, medication details, questions for the healthcare team, personal notes. The recovery diary is the single location for all of it.' },
      { title: 'Convenient and practical organization', desc: 'The included 100 mL collection jar provides a convenient and portable container that can be used when temporary fluid collection, storage, measurement, or transport is required as part of a personal recovery routine. The 50 mL jar is also included.' },
      { title: 'A thoughtful gift at an accessible price', desc: 'Complete, considered, and practically useful. One of the most appreciated gifts for a woman in recovery.' },
    ],
    keyFeatures: [
      'Recovery sling bag — hands-free carry',
      'Smiley therapy ball — soft, portable, gentle on hands',
      '50 mL collection jar',
      '100 mL collection jar with measurement markings',
      'Recovery diary',
      'Pen',
    ],
    materialsText: 'Sling bag in durable soft fabric. Therapy ball in soft, squeezable material. Jars in clean, food-safe plastic. Diary with smooth-finish pages.\n\nAll components are chosen for practical daily use during recovery — durable enough to last the recovery period, considered enough to feel like something chosen rather than something clinical.',
    careText: [
      'Recovery Support Sling Bag: Hand wash or gentle machine wash; Mild detergent; Air dry',
      'Collection Jar: Wash thoroughly after use; Dry completely before storage',
      'Therapy Ball: Wipe clean with mild soap and water',
      'Recovery Diary: Store in a dry place',
    ],
    careDonts: [],
    whatsIncluded: [
      'Recovery sling bag',
      'Smiley therapy ball',
      '50 mL collection jar',
      '100 mL collection jar with measurement markings',
      'Recovery diary',
      'Pen',
    ],
    gentleNote: 'Recovery has a way of generating an endless list of things to manage at the moment when the energy to manage them is lowest.\n\nThe therapy ball is in there for the days when gentle movement is the most useful thing you can do. The diary is in there for the days when writing something down is the only way to keep hold of it.\n\nYou are managing something hard. Let Nest Carry manage a small part of it for you.',
    seoTitle: 'Nest Carry Recovery Support Kit – Complete Essentials',
    metaDescription: 'Recovery support kit with sling bag, therapy ball, collection jars, recovery diary, and pen. Everything in one place.',
    ogTitle: 'Nest Carry™ — Recovery Support Kit | Nuvanaah',
    ogDescription: 'One bag. Everything in it. A recovery kit with a sling bag, therapy ball, collection jars, recovery diary, and pen.',
    faqs: [
      { q: 'Is this suitable as a gift?', a: 'Yes. Nest Carry is one of our most appreciated gifts for women in recovery. It is practical, considered, and complete — everything arrives together in the bag, ready to use.' },
      { q: 'What is the smiley therapy ball for?', a: 'The therapy ball supports gentle hand and arm mobility after surgery. Squeezing it gently encourages circulation and maintains grip strength. It is soft enough for hands that are sensitive during recovery.' },
      { q: 'What are the collection jars for?', a: 'Recovery often comes with many small practical needs. The included 100 mL collection jar provides a convenient and portable container that can be used when temporary fluid collection, storage, measurement, or transport is required as part of a personal recovery routine. The 50 mL jar is also included for smaller needs.' },
      { q: 'Can I add more items to the bag?', a: 'Yes. The sling bag has space for personal items beyond what is included in the kit — medication, phone, keys, appointment cards.' },
    ],
    isGiftPopular: true,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: false,
    showSizeGuide: false,
  },

  // ── P08 PETALWRAP™ ───────────────────────────────────────────────────────
  {
    id: 'petalwrap',
    slug: 'petalwrap',
    name: 'PetalWrap™',
    subtitle: 'Bamboo Comfort Towel',
    tagline: '',
    price: 1500,
    priceFrom: false,
    categories: [CAT_WELLNESS],
    categoryNav: 'Everyday Wellness',
    description: 'A full-size bamboo comfort towel in a herringbone weave with tassel-finished ends. 58+ inches × 27–28 inches. Softer and more absorbent than standard cotton. Available in four named colours.',
    fullStory: 'A petal is the part of the flower that is both beautiful and fleeting — present precisely when it is needed, soft to the touch, designed only for that moment of contact.\n\nRecovery changes the texture of daily life. The things that were automatic — showering, drying off — require more care and attention. PetalWrap cannot make recovery faster. What it can do is make the few minutes after a shower feel soft, comfortable, and a little more like ordinary self-care.\n\nA towel that feels good against your skin. A colour you chose because you liked it. A tassel-finished end that is simply beautiful for no other reason.',
    images: [
      { id: 1, src: '/images/catalog/petal leaf/1.PNG', alt: 'PetalWrap™ — view 1' },
      { id: 2, src: '/images/catalog/petal leaf/2.PNG', alt: 'PetalWrap™ — view 2' },
      { id: 3, src: '/images/catalog/petal leaf/3.jpeg', alt: 'PetalWrap™ — view 3' },
      { id: 4, src: '/images/catalog/petal leaf/4.jpeg', alt: 'PetalWrap™ — view 4' },
    ],
    stock_status: 'instock',
    featured: false,
    inStock: true,
    tags: ['daily', 'towel', 'wellness', 'self-care'],
    shopByNeed: ['daily-comfort'],
    recoveryStage: ['stage-2', 'stage-3', 'stage-4'],
    crossSells: ['dewleaf', 'nature-nest'],
    variantLabel: 'Colour',
    variantOptions: ['Camellia', 'Aparajita', 'Magnolia', 'Jade Vine'],
    benefitsList: [
      { title: 'Softness that is felt immediately', desc: 'Bamboo fiber is smoother and gentler than cotton at the point of contact. For skin that may be sensitive in specific areas, this is a meaningful practical benefit.' },
      { title: 'Generous size that covers fully', desc: '58+ inches long means the towel wraps completely without adjustment or repositioning. Less arm movement. Less contact with sensitive areas. Simpler daily routine.' },
      { title: 'Absorbency that performs', desc: 'The herringbone weave draws moisture away from the skin effectively. Dries faster after use than denser alternatives, reducing bacteria buildup.' },
      { title: 'Four colours worth choosing', desc: 'Camellia, Aparajita, Magnolia, Jade Vine. Named, distinct, personal. Not a range of neutral towel tones designed to offend no one.' },
      { title: 'Beautiful enough to stay', desc: 'The herringbone weave and hand-knotted tassels make PetalWrap a considered object. Designed for regular use long after recovery is complete.' },
    ],
    keyFeatures: [
      'Bamboo plant-fiber fabric',
      '58+ inches × 27–28 inches',
      'Woven herringbone pattern',
      'Hand-knotted tassel-finished ends',
      'Four named colours',
      'Soft on post-surgical skin',
    ],
    materialsText: 'Bamboo plant-fiber fabric in a woven herringbone structure — softer than cotton, naturally absorbent, and more breathable. Tassels are hand-knotted in matching thread.\n\nThe herringbone weave increases surface area relative to a flat weave, which improves moisture absorption without adding bulk. Bamboo fiber naturally inhibits odour-causing bacteria, meaning the towel stays fresher between washes.',
    careText: [
      'Hand wash in cool water with mild detergent',
      'Hang to dry or lay flat',
      'Wash before first use',
    ],
    careDonts: [
      'Do not machine wash',
      'Do not tumble dry',
      'Do not bleach',
      'Do not iron tassels',
      'Do not wash with rough fabrics that may catch the weave',
    ],
    whatsIncluded: [
      'PetalWrap comfort towel (in selected colour)',
      'Care guide',
    ],
    gentleNote: 'Recovery is lived in the small things. A towel that feels good against your skin. A colour you chose because you liked it. A tassel end that is simply beautiful, for no reason other than that it is.\n\nSmall things. But they are what the days are made of.',
    seoTitle: 'PetalWrap Bamboo Comfort Towel – Soft & Breathable',
    metaDescription: 'Premium bamboo comfort towel, 58+ inches long with tassel ends and herringbone weave. Soft, absorbent, four beautiful colours.',
    ogTitle: 'PetalWrap™ — Bamboo Comfort Towel | Nuvanaah',
    ogDescription: 'A full-size bamboo comfort towel in a herringbone weave with tassel-finished ends. Softer and more absorbent than standard cotton. Four named colours.',
    faqs: [
      { q: 'How does bamboo compare to cotton?', a: 'Bamboo fiber is softer at the point of contact, more naturally absorbent, and faster drying than equivalent cotton. It also naturally inhibits odour-causing bacteria. These are inherent properties of the fiber, not finishes or treatments that wash out.' },
      { q: 'Can I use it right away?', a: 'Wash before first use to remove any manufacturing residue and to activate the absorbency of the bamboo fiber. After the first wash, it is ready to use.' },
      { q: 'What do the colour names mean?', a: 'Camellia is a warm dusty rose. Aparajita is a deep royal blue. Magnolia is a soft blush pink. Jade Vine is a soft teal. All colours are named for flowers and plants — part of the Nuvanaah brand language.' },
    ],
    isGiftPopular: false,
    comingSoon: false,
    dimensions: '58+ inches × 27–28 inches',
    whatsappCTA: false,
    showSizeGuide: false,
  },

  // ── P09 DEWLEAF™ ─────────────────────────────────────────────────────────
  {
    id: 'dewleaf',
    slug: 'dewleaf',
    name: 'DewLeaf™',
    subtitle: 'Recovery Towel',
    tagline: 'Fresh comfort with every use.',
    price: 0,
    priceFrom: false,
    priceOnRequest: false,
    isComplimentaryGift: true,
    categories: [CAT_WELLNESS],
    categoryNav: 'Everyday Wellness',
    description: 'A compact 12×24 inch recovery towel — soft, quick-drying, and designed for the small, daily moments of personal care that add up during recovery. Four colours. Clean hemmed edges.',
    fullStory: 'Dew is small. Present early. Gone quickly. Doing its quiet work before the day begins.\n\nPersonal care during recovery is a daily series of small moments. Washing your face. Drying your hands. Managing the routine around sensitive areas that need to stay clean. These are not extraordinary moments. They are ordinary ones, repeated many times each day. DewLeaf is made for those moments — not the big ones. The small, repetitive, quiet ones.\n\n"Fresh comfort with every use."',
    images: [
      { id: 1, src: '/images/catalog/DewLeaf/1.jpeg', alt: 'DewLeaf™ — view 1' },
      { id: 2, src: '/images/catalog/DewLeaf/2.jpeg', alt: 'DewLeaf™ — view 2' },
    ],
    stock_status: 'instock',
    featured: false,
    inStock: true,
    tags: ['daily', 'towel', 'wellness', 'self-care', 'gift'],
    shopByNeed: ['daily-comfort'],
    recoveryStage: ['stage-2', 'stage-3', 'stage-4'],
    crossSells: ['petalwrap', 'nest-carry'],
    variantLabel: 'Colour',
    variantOptions: ['Camellia', 'Aparajita', 'Magnolia', 'Jade Vine'],
    benefitsList: [
      { title: 'The right size for daily personal care', desc: '12×24 inches: large enough for face and hands, compact enough to keep by the sink, fold into a bag, or carry to appointments.' },
      { title: 'Soft and quick-drying', desc: 'Bamboo fiber dries faster than cotton and stays softer through repeated daily use. Always ready. Never stiff.' },
      { title: 'Gentle against sensitive skin', desc: 'Smooth surface. No rough texture against areas that may be reactive or tender during recovery.' },
      { title: 'Four colours that feel like a choice', desc: 'Camellia, Aparajita, Magnolia, Jade Vine. The same palette as PetalWrap. One for every day of the week, or one that is simply yours.' },
      { title: 'Travel-friendly', desc: 'Folds to almost nothing. Goes everywhere recovery goes.' },
    ],
    keyFeatures: [
      '24 inches × 12 inches',
      'Bamboo plant-fiber fabric',
      'Clean hemmed edges (no tassels)',
      'Four named colours — matches PetalWrap palette',
      'Quick-drying',
      'Compact and travel-friendly',
    ],
    materialsText: 'Bamboo plant-fiber fabric with clean hemmed edges — soft, quick-drying, and gentle through daily use.\n\nThe same bamboo fiber quality as PetalWrap, in a compact format designed for face and hand care. Naturally soft, naturally absorbent, and faster drying than cotton equivalents.',
    careText: [
      'Hand wash in cool water with mild detergent',
      'Hang to dry',
      'Wash before first use',
    ],
    careDonts: [
      'Do not machine wash',
      'Do not bleach',
      'Do not iron on high heat',
      'Dry away from direct sunlight',
    ],
    whatsIncluded: [
      'DewLeaf recovery towel (in selected colour)',
      'Care guide',
    ],
    gentleNote: 'Personal care during recovery is a daily series of small moments. A towel that feels soft each time. That is clean and dry and ready. That is a colour you chose because it felt like you. That is exactly what was needed and nothing more complicated than that.\n\nFresh comfort with every use.',
    seoTitle: 'DewLeaf Recovery Towel – Soft, Quick Dry, 4 Colours',
    metaDescription: 'Compact 12×24 inch recovery towel. Soft, absorbent, and quick-drying. Four colours. Ideal for daily use and travel.',
    ogTitle: 'DewLeaf™ — Recovery Towel | Nuvanaah',
    ogDescription: 'A compact 12×24 inch recovery towel — soft, quick-drying, and designed for the small daily moments of personal care that add up during recovery.',
    faqs: [
      { q: 'How does DewLeaf differ from PetalWrap?', a: 'DewLeaf is 12×24 inches — a compact face and hand towel. PetalWrap is 58+ inches — a full bath towel. They use the same bamboo fiber and the same four colours. Many women use both together.' },
      { q: 'Is the price confirmed?', a: 'DewLeaf pricing is currently being confirmed. Register your interest and we will notify you when it is available to order.' },
    ],
    isGiftPopular: false,
    comingSoon: false,
    dimensions: '24 inches × 12 inches',
    whatsappCTA: true,
    showSizeGuide: false,
  },

  // ── P10 BROWBLOOM™ ───────────────────────────────────────────────────────
  {
    id: 'browbloom',
    slug: 'browbloom',
    name: 'BrowBloom™',
    subtitle: 'Ready-to-Wear Eyebrows',
    tagline: '',
    price: 1400,
    priceFrom: false,
    categories: [CAT_WELLNESS],
    categoryNav: 'Everyday Wellness',
    description: 'Ready-to-wear eyebrows in two shades designed for Indian skin tones. Each brow attaches using a dedicated skin-safe adhesive tape — no drawing, no pencil, no guesswork. Natural shape, lightweight, and reusable. Confidence that begins at the mirror, before the day does.',
    fullStory: 'Eyebrow loss changes the face in ways that are immediately visible and deeply felt. The brows frame the eyes and carry expression. When they are absent, the face can look and feel different in ways that are difficult to explain to others but that are apparent to the woman experiencing it.\n\nBrowBloom is shaped and coloured to look like real brows — not drawn-on, not obvious. The design avoids the stark quality of pencilled replacements. It settles into a natural position and reads as your own from a conversational distance.\n\nCoffee Bean: warm dark brown, calibrated for medium to deeper South Asian skin tones.\nBamboo Woods: soft cool brown, calibrated for lighter to medium South Asian skin tones.',
    images: [
      { id: 1, src: '/images/catalog/Brow Bloom/1.jpeg', alt: 'BrowBloom™ — view 1' },
      { id: 2, src: '/images/catalog/Brow Bloom/2.jpeg', alt: 'BrowBloom™ — view 2' },
    ],
    stock_status: 'instock',
    featured: false,
    inStock: true,
    tags: ['hair-loss', 'eyebrows', 'confidence', 'beauty'],
    shopByNeed: ['hair-loss', 'daily-comfort'],
    recoveryStage: ['stage-3', 'stage-4'],
    crossSells: ['airbloom', 'bloomcrown'],
    variantLabel: 'Shade',
    variantOptions: ['Coffee Bean', 'Bamboo Woods'],
    benefitsList: [
      { title: 'Restoring facial balance and recognition', desc: 'The brows frame the eyes. When they return, the face in the mirror looks familiar again. That is the most fundamental benefit BrowBloom is built to deliver.' },
      { title: 'Natural appearance, not a drawn-on look', desc: 'Shaped to complement the natural brow bone structure. Soft and realistic at conversational distance. Not the stark quality of pencilled alternatives.' },
      { title: 'Two shades designed for Indian skin tones', desc: 'Coffee Bean and Bamboo Woods were chosen for the warm and medium complexions common across South Asian skin. Not an afterthought. The starting point.' },
      { title: 'Lightweight and gentle', desc: 'The skin above the eye may be sensitive during treatment. BrowBloom is lightweight at contact, gentle to remove, and does not require harsh adhesives.' },
      { title: 'Reusable with proper care', desc: 'Each pair is designed for multiple uses. Apply, wear, remove correctly — the brows last. Economical and practical.' },
      { title: 'Simple, independent application', desc: 'No specialist tools, no assistance. A few minutes as part of an ordinary morning routine.' },
    ],
    keyFeatures: [
      'Two shades: Coffee Bean and Bamboo Woods',
      'Designed for Indian skin tones',
      'Natural shape — not drawn-on',
      'Attaches with skin-safe adhesive tape — included',
      'Lightweight and gentle against skin',
      'Reusable',
      'Includes additional spare tapes',
      'Includes application and care guide',
    ],
    materialsText: 'Lightweight, skin-safe construction designed for gentle daily wear and easy removal.\n\nEach brow attaches using a dedicated skin-safe adhesive tape included in the kit. The tape is formulated for sensitive skin — it holds securely through the day but lifts cleanly without leaving residue. Removal is by gentle soaking with warm water before lifting from the edges, not pulling — designed to protect skin that may already be reactive during treatment.',
    careText: [
      'Apply only to clean, dry skin',
      'Remove gently after wear — soak the edge with warm water before lifting',
      'Store eyebrows flat when not in use',
      'Keep away from direct heat and moisture when stored',
      'Lift gently from edges — avoid pulling or stretching the brow shape',
    ],
    careDonts: [
      'Do not share between users',
    ],
    whatsIncluded: [
      '1 pair BrowBloom ready-to-wear eyebrows (in selected shade)',
      'Skin-safe adhesive tapes',
      'Additional spare tapes',
      'Application and care guide',
    ],
    gentleNote: 'Eyebrow loss is one of the most quietly significant changes that treatment can bring. It is a loss that is difficult to explain to people who have not experienced it, but that is felt immediately and continuously.\n\nBrowBloom is not a solution to that loss. It is a way of meeting it practically and gently. Of making the morning routine a little shorter, a little easier, a little more like the one you remember.\n\nYou do not have to use it every day. But it is here, when you want it.',
    seoTitle: 'BrowBloom Ready-to-Wear Eyebrows – 2 Natural Shades',
    metaDescription: 'Natural-looking ready-to-wear eyebrows for everyday confidence. Two shades designed for Indian skin tones. Reusable with care.',
    ogTitle: 'BrowBloom™ — Ready-to-Wear Eyebrows | Nuvanaah',
    ogDescription: 'Ready-to-wear eyebrows in two shades designed for Indian skin tones. Natural shape, lightweight, and reusable.',
    faqs: [
      { q: 'Which shade should I choose?', a: 'Coffee Bean is a warm dark brown — well-suited to medium to deeper South Asian skin tones. Bamboo Woods is a soft cool brown — well-suited to lighter to medium South Asian skin tones. If you are between the two, Coffee Bean is the more versatile choice for most Indian complexions.' },
      { q: 'How long does each pair last?', a: 'With correct application and removal, each pair is designed for multiple uses. The included care guide covers how to remove, clean, and store the brows for maximum reuse.' },
      { q: 'How do I remove them?', a: 'Soak the brow edge gently with warm water or a soft damp cloth before lifting from the edges. Do not pull or peel directly — soaking first protects the brow shape and the skin.' },
      { q: 'Will they look natural?', a: 'BrowBloom is shaped to follow the natural brow bone and positioned at a natural height. The shade is designed to blend with Indian skin tones rather than sit on top of them. From a conversational distance, they read as your own.' },
    ],
    isGiftPopular: false,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: false,
    showSizeGuide: false,
  },

  // ── P11 BLOOMTIPS™ ───────────────────────────────────────────────────────
  {
    id: 'bloomtips',
    slug: 'bloomtips',
    name: 'BloomTips™',
    subtitle: 'Comfort Nail Collection',
    tagline: 'Little details. Beautiful confidence.',
    price: 1200,
    priceFrom: false,
    categories: [CAT_WELLNESS],
    categoryNav: 'Everyday Wellness',
    description: 'A complete press-on nail kit — 24 nails, adhesive, file, cuticle stick, prep wipe, and reusable storage pouch. Natural-looking finish at home, in under ten minutes, no salon required.',
    fullStory: 'Treatment does many things to the body. The nails are one of the smaller ones — thinning, brittleness, discolouration, sensitivity. But they are noticed. Every time you look at your hands, which is many times a day.\n\nBloomTips is not here to solve the effects of treatment. It is here to address one small part of them. To give you a way to look at your hands and see something chosen and deliberate.\n\n"Little details. Beautiful confidence."',
    images: [
      { id: 1, src: '/images/catalog/BloomTips/1.jpeg', alt: 'BloomTips™ — view 1' },
      { id: 2, src: '/images/catalog/BloomTips/2.jpeg', alt: 'BloomTips™ — view 2' },
    ],
    stock_status: 'instock',
    featured: true,
    inStock: true,
    tags: ['daily', 'nails', 'confidence', 'beauty', 'wellness'],
    shopByNeed: ['daily-comfort'],
    recoveryStage: ['stage-3', 'stage-4'],
    crossSells: ['browbloom', 'bloomcrown'],
    variantLabel: '',
    variantOptions: [],
    benefitsList: [
      { title: 'Polished nails without salon dependency', desc: 'During treatment, salon visits are not always possible or advisable. BloomTips is a complete, self-administered solution. At home. On your schedule. In private.' },
      { title: 'A confidence detail that is yours to control', desc: 'Much of recovery involves surrendering control to treatment schedules. Personal grooming is one of the few areas where control can be retained. BloomTips exists in that space.' },
      { title: 'Minutes, not hours', desc: 'A full set takes five to ten minutes. No appointment. No travel. No drying time. On a day when energy is limited, that efficiency matters.' },
      { title: 'Everything included — nothing to source separately', desc: 'Adhesive, file, cuticle stick, prep wipe, storage pouch. The kit is complete from the moment it arrives.' },
      { title: 'Gentle on nails affected by treatment', desc: 'Application and removal are designed to avoid further stressing thin or sensitive nails. No filing down the natural nail. No harsh chemicals.' },
      { title: 'Reusable with proper care', desc: 'Remove by soaking in warm water, lifting gently from the edges. Stored in the included pouch, nails can be reapplied on future occasions.' },
    ],
    keyFeatures: [
      '24 press-on nails in multiple sizes',
      'Includes nail adhesive, file, cuticle stick, prep wipe',
      'Reusable storage pouch',
      'Natural-looking finish',
      'No UV lamp or specialist equipment',
      'Reusable with correct care',
    ],
    materialsText: 'Lightweight press-on nails in a natural finish designed for a realistic, polished appearance without bulk or weight.\n\nThe adhesive included is formulated to bond well while remaining gentle enough for nails that may be thin or sensitive. Removal is by soaking, not force — protecting the natural nail beneath.',
    careText: [
      'Clean nails before application with included prep wipe',
      'Remove by soaking in warm water',
      'Store in included pouch',
    ],
    careDonts: [
      'Do not force remove — soak first',
      'Do not use acetone on sensitive nails',
      'Do not file natural nail before applying',
    ],
    whatsIncluded: [
      '24 press-on nails (multiple sizes)',
      'Nail adhesive',
      'Nail file',
      'Cuticle stick',
      'Nail prep wipe',
      'Reusable storage pouch',
    ],
    gentleNote: 'Treatment does many things to the body. The nails are one of the smaller ones. But you notice them every time you look at your hands, which is many times a day.\n\nLittle details. Beautiful confidence. One fingertip at a time.',
    seoTitle: 'BloomTips Press-On Nails 24pc – Complete Nail Kit',
    metaDescription: 'Complete 24-piece press-on nail kit with adhesive, file, cuticle stick, and storage pouch. Natural-looking finish at home, no salon needed.',
    ogTitle: 'BloomTips™ — Comfort Nail Collection | Nuvanaah',
    ogDescription: 'A complete press-on nail kit — 24 nails, adhesive, file, cuticle stick, prep wipe, and reusable storage pouch. Natural-looking finish in under ten minutes.',
    faqs: [
      { q: 'Do I need any special tools?', a: 'No. Everything you need is included in the kit. No UV lamp, no specialist equipment. Just the items in the box and your own hands.' },
      { q: 'How do I apply them?', a: 'Clean your nails with the prep wipe. Select the correct size for each finger. Apply adhesive to the nail, align the press-on at a slight angle, and press down firmly for 15 seconds. The full process takes five to ten minutes.' },
      { q: 'How do I remove them?', a: 'Soak your nails in warm water for 10–15 minutes until the adhesive softens. Gently lift from the edges — do not pull or force. Soaking protects both the press-on nail (for reuse) and your natural nail.' },
      { q: 'Are they safe during treatment?', a: 'BloomTips is designed to be gentle on nails affected by treatment. However, if your oncology team has specific guidance about nail care during treatment, please follow that guidance first.' },
    ],
    isGiftPopular: true,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: false,
    showSizeGuide: false,
  },

  // ── P12 BLOOMCROWN™ ──────────────────────────────────────────────────────
  {
    id: 'bloomcrown',
    slug: 'bloomcrown',
    name: 'BloomCrown™',
    subtitle: 'Comfort Wig Collection',
    tagline: 'Designed to help you feel like yourself, every day.',
    price: 12000,
    priceFrom: true,
    categories: [CAT_HAIR],
    categoryNav: 'Hair & Confidence',
    description: 'A comfort wig collection designed for natural appearance, lightweight fit, and confident everyday wear. Starting from ₹ 12,000. Wig consultations available in Vashi and Thane.',
    fullStory: 'Hair loss during treatment is one of the most visible and widely discussed changes it brings. It is also one of the most personal.\n\nThe decision about whether to wear a wig, which one, when, and in which contexts is deeply individual. Some women wear one every day from the first days of hair loss. Others prefer scarves. Others choose different options in different situations.\n\nBloomCrown exists for the days when you want the fullest, most natural-looking option available. Not a requirement. Not the right choice for every day. But for the days when it is your choice — when you want to look in the mirror and feel like yourself from the top of your head down — BloomCrown is designed to make that possible.\n\n"Designed to help you feel like yourself, every day."',
    images: [
      { id: 1, src: '/images/catalog/BloomCrown/1.jpeg', alt: 'BloomCrown™ — view 1' },
      { id: 2, src: '/images/catalog/BloomCrown/2.jpeg', alt: 'BloomCrown™ — view 2' },
    ],
    stock_status: 'instock',
    featured: true,
    inStock: true,
    tags: ['hair-loss', 'wig', 'real-hair', 'confidence'],
    shopByNeed: ['hair-loss'],
    recoveryStage: ['stage-3', 'stage-4'],
    crossSells: ['browbloom', 'airbloom'],
    variantLabel: 'Style',
    variantOptions: ['Long Balayage'],
    benefitsList: [
      { title: 'Feeling like yourself in the mirror', desc: 'Looking in the mirror during hair loss and recognising yourself — that is the central purpose of BloomCrown. The natural appearance creates a reflection that feels familiar.' },
      { title: 'A natural appearance that moves correctly', desc: 'The hair moves as real hair moves. It falls naturally. It responds to the environment the way your own hair would. That naturalness is what allows it to stop being something you manage and become something you simply wear.' },
      { title: 'Lightweight comfort for extended wear', desc: 'Heavier wigs become fatiguing. BloomCrown is constructed for all-day wear — lightweight enough that you stop noticing it is there.' },
      { title: 'Breathable construction', desc: 'The cap is constructed for airflow. Extended daily wear is possible and comfortable.' },
      { title: 'Wig consultations available', desc: 'In-person wig consultations are available in Vashi and Thane for customers who would like guidance on options, sizing, and styles before choosing.' },
    ],
    keyFeatures: [
      'Natural-looking construction',
      'Lightweight for all-day wear',
      'Breathable cap design',
      'Adjustable fit',
      'Wig consultations available in Vashi and Thane',
      'From ₹ 12,000',
    ],
    materialsText: 'Designed for natural appearance, lightweight fit, and extended daily wear.\n\nThe cap is adjustable and breathable. The hair is finished to move and behave as naturally as possible. Wig consultations are available in Vashi and Thane if you would like guidance before choosing.',
    careText: [
      'Follow included care guide for washing and styling',
      'Store in the included dust bag when not in use',
      'Brush gently with a wide-tooth comb from ends upward',
    ],
    careDonts: [
      'Do not use high heat tools without heat protection',
      'Do not machine wash',
      'Do not sleep in the wig without securing it',
    ],
    whatsIncluded: [
      'BloomCrown wig (in selected style)',
      'Storage dust bag',
      'Care and styling guide',
    ],
    gentleNote: 'Hair loss during treatment is one of the most visible changes it brings. The decision about how to respond to it — wig, scarf, nothing at all — is entirely yours. There is no right answer. There is only what feels right for you, on each day.\n\nBloomCrown is here for the days when a wig is what you want. A free consultation is available if you would like guidance before choosing.',
    seoTitle: 'BloomCrown Comfort Wig Collection – Natural Look',
    metaDescription: 'Premium comfort wig collection with natural look, lightweight fit, and confident everyday wear. Free WhatsApp consultation recommended before purchase.',
    ogTitle: 'BloomCrown™ — Comfort Wig Collection | Nuvanaah',
    ogDescription: 'A premium comfort wig collection designed for natural appearance, lightweight fit, and confident daily wear. From ₹ 12,000. Free consultation recommended.',
    faqs: [
      { q: 'Can I get a wig consultation before ordering?', a: 'Yes. In-person wig consultations are available in Vashi and Thane. We can help you understand available styles, sizing, and options. Reach out on WhatsApp to arrange.' },
      { q: 'Can I order without a consultation?', a: 'Yes. If you are confident in your choice, you can add directly to bag. Reach out to us if you have any questions before ordering.' },
      { q: 'What does "From ₹ 12,000" mean?', a: 'Different styles within the BloomCrown collection are priced from ₹ 12,000 upward depending on the style and construction. Contact us for details on specific styles.' },
      { q: 'How long does it take to receive after ordering?', a: 'Standard delivery typically takes up to 7 business days. For specific styles, please contact us to confirm lead time before ordering.' },
    ],
    isGiftPopular: false,
    comingSoon: false,
    dimensions: '',
    whatsappCTA: true,
    showSizeGuide: false,
  },

]

// ─── HELPER FUNCTIONS ────────────────────────────────────────────────────────

export function getProductById(id: string): Product | undefined {
  return products.find(p => String(p.id) === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function isGiftProduct(product: Product): boolean {
  return product.isComplimentaryGift === true || product.tags?.includes('gift') === true
}

export function isPublicProduct(product: Product): boolean {
  if ((product as Product & { published?: boolean }).published === false) return false

  const price = Number(product.price)
  if (Number.isFinite(price) && price > 0) return true

  return isGiftProduct(product)
}

export function getPublicProducts(): Product[] {
  return products.filter(isPublicProduct)
}

export function getPublicProductBySlug(slug: string): Product | undefined {
  return getPublicProducts().find(p => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return getPublicProducts().filter(p => p.categories?.some(c => c.slug === categorySlug))
}

export function getProductsByNeed(need: string): Product[] {
  return getPublicProducts().filter(p => p.shopByNeed?.includes(need))
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
  return getPublicProducts().filter(p => p.featured).slice(0, 4)
}

export function getRelatedProducts(product: Product): Product[] {
  const publicProducts = getPublicProducts()

  if (product.crossSells && product.crossSells.length > 0) {
    const related = product.crossSells
      .map(slug => getProductBySlug(slug))
      .filter((p): p is Product => !!p && isPublicProduct(p))
    return related.slice(0, 3)
  }
  const categoryId = product.categories?.[0]?.id
  if (!categoryId) return publicProducts.slice(0, 3)
  return publicProducts
    .filter(p => p.id !== product.id && p.categories?.some(c => c.id === categoryId))
    .slice(0, 3)
}

export function isVariableProduct(product: Product): boolean {
  return product.type === 'variable' && !!product.variations && product.variations.length > 0
}
