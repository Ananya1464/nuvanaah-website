'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  Star, ShoppingCart, Heart, Share2, Truck, RotateCcw, Shield,
  ChevronDown, Zap, Leaf, Check, AlertCircle
} from 'lucide-react'

// Mock product data (will come from WooCommerce in production)
const mockProduct = {
  id: 1,
  name: 'Post-Mastectomy Support Bra',
  price: 1499,
  originalPrice: 1799,
  rating: 4.8,
  reviewCount: 156,
  inStock: true,
  image: 'https://images.unsplash.com/photo-1541099810657-8d76c3c324a3?w=800&h=800&fit=crop',
  images: [
    'https://images.unsplash.com/photo-1541099810657-8d76c3c324a3?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1506629082632-11c94d3a5db9?w=800&h=800&fit=crop',
  ],
  category: 'Mastectomy',
  description: 'Rediscover comfort with our post-mastectomy bra, engineered for healing. Designed specifically for the recovery journey after surgery, this bra provides gentle support without compromising comfort. Made with soft, breathable materials that work with your sensitive skin—not against it.',
  keyHighlights: [
    { icon: 'leaf', text: 'Gentle on sensitive skin' },
    { icon: 'zap', text: 'Secure yet comfortable support' },
    { icon: 'check', text: 'Seamless recovery design' },
  ],
  trustBadges: [
    'Doctor Recommended',
    'Skin-Friendly Materials',
    'Discreet Packaging',
  ],
  details: {
    material: '85% Cotton, 15% Spandex',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: 'Nude',
    care: 'Hand wash in warm water. Do not bleach. Air dry.',
  },
  materialsWhyItWorks: {
    materials: [
      {
        name: '85% Cotton',
        benefit: 'Breathable and soft for post-surgery skin',
        details: 'Cotton fiber allows airflow, reducing heat and build-up during recovery. Gentle on sensitive areas, as recommended for healing skin.',
      },
      {
        name: '15% Spandex',
        benefit: 'Gentle stretch without pressure',
        details: 'Provides support throughout chemotherapy or radiation without compromising comfort. Flat-lock seams minimize friction on scars—doctor-recommended for recovery phases.',
      },
    ],
    reassurance: 'Every material is chosen for comfort during recovery. Skin-friendly, hypoallergenic, and tested for sensitive skin.',
  },
  benefits: [
    'Wire-free design for comfort',
    'Soft, breathable fabric',
    'Gentle on sensitive skin',
    'Hidden seams to minimize friction',
    'Adjustable straps for custom fit',
    'Machine washable and durable',
    'Perfect for day and night wear',
  ],
  features: [
    'Seamless construction for ultimate comfort',
    'Adjustable straps for personalized fit',
    'Wider band to distribute weight evenly',
    'Pocket-friendly design (optional prosthesis)',
    'Quick-dry technology',
    'Ultra-soft tag-free labels',
  ],
  careInstructions: [
    'Hand wash gently in lukewarm water',
    'Use mild, fragrance-free soap',
    'Rinse thoroughly until water runs clear',
    'Gently squeeze out excess water',
    'Air dry flat or hang to dry',
    'Avoid direct sunlight and heat sources',
    'Do not bleach or use fabric softener',
  ],
  relatedProducts: [
    {
      id: 2,
      name: 'Silicone Breast Prosthesis',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Chemo Port Shirt',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1506629082632-11c94d3a5db9?w=400&h=400&fit=crop',
    },
  ],
  faqs: [
    {
      question: 'Can I wear this immediately after surgery?',
      answer: 'We recommend waiting until your surgeon gives clearance, typically 2-4 weeks post-op. Start with our soft post-op bra first, then transition to this support bra as directed by your healthcare provider.',
      category: 'Recovery',
    },
    {
      question: 'Is this bra suitable for prosthetic wear?',
      answer: 'Yes! Our pocket-friendly design accommodates both light and heavier prosthetics. The wider band distributes weight evenly, reducing shoulder strain.',
      category: 'Product Use',
    },
    {
      question: 'How long will the bra last?',
      answer: 'With proper care (hand washing and air drying), our bras typically last 1-2 years with daily wear. The quality materials maintain elasticity and comfort throughout use.',
      category: 'Care & Maintenance',
    },
    {
      question: 'Is this safe if I have radiation therapy?',
      answer: 'Yes, our materials are skin-safe and won\'t interfere with treatment. The breathable cotton blend reduces irritation during and after radiation. Always consult your oncologist for specific guidance.',
      category: 'Medical Conditions',
    },
    {
      question: 'What if the bra doesn\'t fit after a month?',
      answer: 'Bodies change during recovery. We offer free exchanges for 30 days if your size changes. Contact our support team—we\'re here to ensure your comfort journey.',
      category: 'Returns & Exchanges',
    },
  ],
}

export default function ProductDetailPage() {
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)
  const [activeTab, setActiveTab] = useState('description')
  const [expandedFAQ, setExpandedFAQ] = useState(0)

  const discountPercent = Math.round(
    ((mockProduct.originalPrice - mockProduct.price) / mockProduct.originalPrice) * 100
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-600">
        <a href="/" className="hover:text-amber-600">Home</a>
        <span className="mx-2">/</span>
        <a href="/products" className="hover:text-amber-600">Products</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{mockProduct.name}</span>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={mockProduct.images[selectedImage]}
                alt={mockProduct.name}
                fill
                className="object-cover"
              />
              {discountPercent > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {discountPercent}% OFF
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-2">
              {mockProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === idx
                      ? 'border-amber-600'
                      : 'border-gray-200 hover:border-amber-200'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${mockProduct.name} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category & Title */}
            <div>
              <p className="text-sm text-amber-600 font-semibold uppercase tracking-wide mb-2">
                {mockProduct.category}
              </p>
              <h1 className="text-4xl font-bold text-gray-900">
                {mockProduct.name}
              </h1>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mockProduct.keyHighlights.map((highlight, idx) => {
                const iconMap: Record<string, React.ReactNode> = {
                  leaf: <Leaf className="w-5 h-5" />,
                  zap: <Zap className="w-5 h-5" />,
                  check: <Check className="w-5 h-5" />,
                }
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                    <span className="text-amber-600 flex-shrink-0">
                      {iconMap[highlight.icon]}
                    </span>
                    <span className="text-sm text-gray-700 font-medium">{highlight.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 py-4 border-y border-gray-200">
              {mockProduct.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-green-600" />
                  {badge}
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(mockProduct.rating)
                        ? 'fill-amber-500 text-amber-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">{mockProduct.rating} out of 5</span>
              <span className="text-gray-500">({mockProduct.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{mockProduct.price.toLocaleString('en-IN')}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ₹{mockProduct.originalPrice.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Inclusive of all taxes
              </p>
            </div>

            {/* Size Selector */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                Select Size
              </label>
              <div className="grid grid-cols-4 gap-2">
                {mockProduct.details.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 rounded-lg border-2 font-semibold transition ${
                      selectedSize === size
                        ? 'border-amber-600 bg-amber-50 text-amber-900'
                        : 'border-gray-200 hover:border-amber-200 text-gray-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:border-amber-600 transition text-gray-600"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:border-amber-600 transition text-gray-600"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                disabled={!selectedSize || !mockProduct.inStock}
                className="flex-1 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className="w-14 border-2 border-gray-300 rounded-lg hover:border-amber-600 transition flex items-center justify-center"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`}
                />
              </button>
              <button className="w-14 border-2 border-gray-300 rounded-lg hover:border-amber-600 transition flex items-center justify-center">
                <Share2 className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Info Box */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex gap-3">
                <Truck className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-800">Free Shipping</p>
                  <p className="text-xs text-gray-600">Pan India delivery</p>
                </div>
              </div>
              <div className="flex gap-3">
                <RotateCcw className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-800">Easy Returns</p>
                  <p className="text-xs text-gray-600">30-day returns</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-800">Secure</p>
                  <p className="text-xs text-gray-600">Safe checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          {/* Tabs */}
          <div className="flex flex-wrap gap-1 border-b border-gray-200 mb-8">
            {[
              { id: 'description', label: 'Description' },
              { id: 'features', label: 'Features & Benefits' },
              { id: 'materials', label: 'Materials & Why It Works' },
              { id: 'care', label: 'How to Use & Care' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'faqs', label: 'FAQs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-semibold text-sm border-b-2 transition ${
                  activeTab === tab.id
                    ? 'border-amber-600 text-amber-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    About This Product
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {mockProduct.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Designed with your recovery journey in mind, this bra combines medical knowledge with comfort engineering. Every seam, every fabric choice, and every feature has been thoughtfully created to support your healing and rebuild your confidence.
                  </p>
                </div>
                <div className="bg-sage-50 rounded-lg p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Designed in consultation with medical professionals',
                      'Tested on sensitive and post-treatment skin',
                      'Made with hypoallergenic, premium materials',
                      'Backed by a 30-day comfort guarantee',
                      'Discreet packaging for your privacy',
                    ].map((reason, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Key Benefits
                  </h2>
                  <ul className="space-y-4">
                    {mockProduct.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-4">
                        <Check className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Smart Features
                  </h2>
                  <ul className="space-y-4">
                    {mockProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-4">
                        <Zap className="w-6 h-6 text-amber-600 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Materials Tab */}
            {activeTab === 'materials' && (
              <>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Materials & Why It Works
                  </h2>
                  <div className="space-y-6">
                    {mockProduct.materialsWhyItWorks.materials.map((material, idx) => (
                      <div key={idx} className="border-l-4 border-amber-600 pl-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {material.name}
                        </h3>
                        <p className="text-amber-700 font-medium text-sm mb-2">
                          {material.benefit}
                        </p>
                        <p className="text-gray-700">
                          {material.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-green-600" />
                    Why This Matters
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {mockProduct.materialsWhyItWorks.reassurance}
                  </p>
                  <div className="bg-white rounded p-4 border border-green-200">
                    <p className="text-sm text-gray-600">
                      ✓ Hypoallergenic & dermatologist tested
                      <br />✓ No harsh chemicals or dyes
                      <br />✓ Sustainable & ethically sourced
                      <br />✓ Certified for sensitive skin
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Care Tab */}
            {activeTab === 'care' && (
              <>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    How to Use
                  </h2>
                  <ol className="space-y-4">
                    {[
                      'Put on the bra by fastening the back closure',
                      'Adjust straps for a comfortable, snug fit',
                      'Ensure the band sits parallel to the ground',
                      'If using a prosthetic, gently place it in the pocket',
                      'Wear throughout the day for everyday comfort',
                    ].map((step, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600 text-white font-semibold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700 text-lg pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Care Instructions
                  </h2>
                  <ul className="space-y-3">
                    {mockProduct.careInstructions.map((instruction, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        {instruction}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Customer Reviews ({mockProduct.reviewCount})
                </h2>
                {/* Placeholder for reviews component */}
                <div className="grid gap-6">
                  {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-500 text-amber-500"
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-gray-900">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700 mb-2">This bra has been a game-changer in my recovery. The comfort level is amazing, and the material feels so soft on my sensitive skin. Highly recommend!</p>
                      <p className="text-sm text-gray-500">Reviewed by Sarah K. • 2 weeks ago</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs Tab */}
            {activeTab === 'faqs' && (
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {mockProduct.faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === idx ? -1 : idx)}
                        className="w-full p-4 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between text-left"
                      >
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-600 transition ${
                            expandedFAQ === idx ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFAQ === idx && (
                        <div className="p-4 bg-white border-t border-gray-200">
                          <p className="text-gray-700 mb-2">{faq.answer}</p>
                          <span className="inline-block text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Pairs Well With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockProduct.relatedProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-amber-600 mb-4">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-semibold transition">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-12 border-t border-gray-200 bg-sage-50 rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Unsure Which Product Is Right for You?
            </h2>
            <p className="text-gray-700 mb-6">
              Our expert team is here to help. Book a free virtual consultation to discuss your needs and find the perfect fit for your recovery journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Add to Cart
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold transition">
                Free Virtual Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
