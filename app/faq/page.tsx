'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Phone, MessageCircle, Mail, Heart, ShoppingBag, HelpCircle, Users } from 'lucide-react'
import Link from 'next/link'

// SEO Note: For metadata, create a separate layout.tsx in app/faq/ directory
// or use next/head for dynamic meta tags

const situationCards = [
  {
    icon: Heart,
    title: "I'm preparing for surgery",
    description: "Learn about post-surgery products and what to expect",
    category: 'Products',
  },
  {
    icon: ShoppingBag,
    title: "I need help with sizing",
    description: "Find the right fit for your needs",
    category: 'Products',
  },
  {
    icon: HelpCircle,
    title: "I have questions about my order",
    description: "Track orders, returns, exchanges, and delivery",
    category: 'Shipping & Returns',
  },
  {
    icon: Users,
    title: "I'd like personal guidance",
    description: "Talk to our care team about your specific needs",
    category: 'Consultations',
  },
]

const faqCategories = ['All', 'General', 'Products', 'Shipping & Returns', 'Payments & Orders', 'Consultations', 'Account']

const faqData: Record<string, Array<{ q: string; a: string }>> = {
  General: [
    {
      q: 'What is Nuvanaah?',
      a: 'Nuvanaah is a premium e-commerce platform dedicated to cancer care products. We provide mastectomy bras, chemotherapy accessories, wigs, lymphedema solutions, and more—all chosen with empathy and care.',
    },
    {
      q: 'Who is Nuvanaah for?',
      a: 'Nuvanaah is designed for cancer patients, survivors, and those undergoing cancer treatment. We also serve hospitals, healthcare providers, and wellness professionals.',
    },
    {
      q: 'Is Nuvanaah affiliated with any hospitals?',
      a: 'Yes! We partner with 50+ leading hospitals across India including Tata Memorial, Apollo Hospital, HCG Cancer Center, and AIIMS. Our hospital partnership program offers bulk pricing and specialized support.',
    },
    {
      q: 'How is Nuvanaah different from other e-commerce sites?',
      a: 'We specialize exclusively in cancer care products with expert curation, empathetic messaging, and dedicated support. Our mission is to provide dignified, premium products chosen with care.',
    },
    {
      q: 'Do you have physical stores?',
      a: 'Currently, we operate online. However, we offer free consultations with local specialists in major cities (Delhi, Mumbai, Bangalore, Chennai, Pune, Kolkata).',
    },
  ],
  Products: [
    {
      q: 'How can I find the right size for a mastectomy bra?',
      a: 'We provide detailed size guides on each product page. You can also book a free consultation with our specialists to get personalized recommendations. We offer easy exchanges if the size doesn\'t fit perfectly.',
    },
    {
      q: 'What materials are used in your wigs?',
      a: 'Our wigs are made from premium synthetic or human hair. Each product page details the material, care instructions, and styling tips. We recommend trying our virtual try-on tool.',
    },
    {
      q: 'Are the products suitable for sensitive skin?',
      a: 'Yes! We carefully select products made from hypoallergenic, soft materials. Always check the product description for material details. Contact our team if you have specific skin concerns.',
    },
    {
      q: 'Can I see the products before buying?',
      a: 'We offer detailed product images, videos, and testimonials from real users. Many products also come with a 7-day "try at home" guarantee—if you\'re not satisfied, return for a full refund.',
    },
    {
      q: 'Do you offer customization?',
      a: 'Yes! We offer custom sizing for bras and white-label packaging for hospitals. Contact our team for bulk orders or special requests.',
    },
    {
      q: 'How often do you restock products?',
      a: 'Most products are in stock year-round. For out-of-stock items, we offer pre-order with priority shipping. You\'ll be notified when items are back in stock.',
    },
  ],
  'Shipping & Returns': [
    {
      q: 'What are the shipping charges?',
      a: 'Shipping is free on orders over ₹500. For orders below ₹500, shipping costs ₹100. Express 24-hour delivery is available for ₹300 extra.',
    },
    {
      q: 'How long does delivery take?',
      a: 'Standard delivery: 3-5 business days. Express delivery: 24 hours (available in major cities). Orders are dispatched within 24 hours of purchase.',
    },
    {
      q: 'Do you ship internationally?',
      a: 'Currently, we ship only within India. International shipping will be available soon. Sign up for our newsletter to be notified.',
    },
    {
      q: 'How discreet is the packaging?',
      a: 'All products ship in plain, unmarked packaging with no visible branding. We understand privacy is important and take extra care to protect your confidentiality.',
    },
    {
      q: 'What is your return policy?',
      a: 'We offer 30-day easy returns. If you\'re not completely satisfied, return the product in unused condition with original packaging for a full refund. No questions asked.',
    },
    {
      q: 'How do I return a product?',
      a: 'Visit your account page and click "Return" on the order. Print the return label, pack the product, and drop it at any nearby pickup point. Refund will be credited within 5 business days.',
    },
    {
      q: 'Can I exchange a product?',
      a: 'Yes! You can exchange for a different size, color, or product. Use the "Exchange" option on your order page and arrange pickup. Shipping is free.',
    },
  ],
  Consultations: [
    {
      q: 'Are consultations free?',
      a: 'Yes! Initial consultations with our specialists are completely free. Follow-up sessions are ₹500 per session. Product-specific consultations are always free.',
    },
    {
      q: 'How do I book a consultation?',
      a: 'Visit /consultations and select your preferred type (call, video, or message), date, and time. You can also browse our city pages to find local specialists.',
    },
    {
      q: 'Who are your consultants?',
      a: 'Our consultants include certified nurses, patient care specialists, and wellness coaches trained in cancer care support. All are experienced in helping patients navigate their journey.',
    },
    {
      q: 'Can I get personalized product recommendations?',
      a: 'Absolutely! Book a consultation to discuss your specific needs. Our specialists will recommend products based on your situation, preferences, and budget.',
    },
    {
      q: 'What if I have questions after my consultation?',
      a: 'You can email or call our team anytime. We also offer follow-up support via WhatsApp for quick questions.',
    },
    {
      q: 'Do consultations provide medical advice?',
      a: 'Our consultants provide product guidance and wellness support, not medical advice. For medical concerns, please consult your healthcare provider. We work alongside your medical team.',
    },
  ],
  'Payments & Orders': [
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit/debit cards, UPI, net banking, digital wallets, and cash on delivery. Razorpay powers our secure payment gateway.',
    },
    {
      q: 'Is my payment information safe?',
      a: 'Yes! We use 256-bit SSL encryption and PCI DSS compliance. Your payment information is never stored on our servers.',
    },
    {
      q: 'Can I use multiple payment methods?',
      a: 'Currently, you select one payment method per order. If you need to split payment, contact our support team.',
    },
    {
      q: 'Do you offer installment plans?',
      a: 'For orders over ₹5,000, we offer 0% EMI options via participating credit cards. Check the payment page for available options.',
    },
    {
      q: 'How can I track my order?',
      a: 'You\'ll receive a tracking link via email and SMS immediately after your order is dispatched. Track your package in real-time via your account page.',
    },
    {
      q: 'What if my order is delayed?',
      a: 'Contact our support team immediately. If delayed beyond promised date, we\'ll offer a full refund or ₹200 account credit as apology.',
    },
  ],
  Account: [
    {
      q: 'How do I create an account?',
      a: 'Click "Sign Up" and enter your email, password, and name. You can also sign up with Google or Apple for faster registration.',
    },
    {
      q: 'Do I need an account to purchase?',
      a: 'You can check out as a guest, but creating an account helps you track orders, save addresses, manage returns, and access exclusive offers.',
    },
    {
      q: 'How do I reset my password?',
      a: 'Click "Forgot Password" on the login page. Enter your email, and we\'ll send a reset link within minutes.',
    },
    {
      q: 'Can I have multiple addresses?',
      a: 'Yes! Save multiple delivery addresses in your account. Choose your preferred address during checkout.',
    },
    {
      q: 'How can I update my profile?',
      a: 'Go to Account Settings and update your name, email, phone, and password anytime.',
    },
    {
      q: 'How is my data protected?',
      a: 'We comply with India\'s data protection laws and use industry-standard security. Your data is never shared with third parties without your consent.',
    },
  ],
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set())

  // Get FAQs based on category
  const getFilteredFaqs = () => {
    let faqs: Array<{ q: string; a: string }> = []

    if (selectedCategory === 'All') {
      Object.values(faqData).forEach((cat) => {
        faqs = faqs.concat(cat)
      })
    } else {
      faqs = faqData[selectedCategory] || []
    }

    return faqs
  }

  const filteredFaqs = getFilteredFaqs()

  const toggleExpand = (index: number) => {
    const newSet = new Set(expandedIndices)
    if (newSet.has(index)) {
      newSet.delete(index)
    } else {
      newSet.add(index)
    }
    setExpandedIndices(newSet)
  }

  const handleSituationClick = (category: string) => {
    setSelectedCategory(category)
    setExpandedIndices(new Set())
    // Scroll to FAQ section
    document.getElementById('faq-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 md:py-20 pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            How can we <span className="font-semibold text-teal-600">help you today</span>?
          </h1>
          <p className="text-lg text-gray-600">
            You don't need to know the right questions. Browse by situation, or scroll down to explore all topics.
          </p>
        </div>
      </div>

      {/* Situation Cards */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {situationCards.map((card, idx) => (
            <button
              key={idx}
              onClick={() => handleSituationClick(card.category)}
              className="bg-white border border-gray-200 rounded-xl p-6 text-left hover:border-teal-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                  <card.icon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-1">{card.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div id="faq-list" className="max-w-4xl mx-auto px-4 py-8 scroll-mt-24">
        <p className="text-sm text-gray-400 mb-3">Or browse by topic</p>
        <div className="flex flex-wrap gap-2">
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setExpandedIndices(new Set())
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedCategory === category
                ? 'bg-teal-100 text-teal-700 border border-teal-200'
                : 'bg-gray-50 text-gray-500 border border-gray-100 hover:bg-gray-100 hover:text-gray-600'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base font-medium text-gray-900 text-left">{faq.q}</span>
                  {expandedIndices.has(idx) ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                {expandedIndices.has(idx) && (
                  <div className="border-t border-gray-100 bg-gray-50 p-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">
              No questions found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Still Need Help - Support Panel */}
      <div className="bg-gray-50 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Still need help?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              If you can't find your answer here, reach out to us. We're here to listen and support you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919819461612"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-full font-medium hover:bg-green-100 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="tel:+919819461612"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-50 text-teal-700 rounded-full font-medium hover:bg-teal-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a
                href="mailto:care@nuvanaah.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-50 text-amber-700 rounded-full font-medium hover:bg-amber-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Talk to a Specialist CTA */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Need personalized guidance?</h2>
          <p className="text-gray-600 mb-6">
            Our care specialists can help you find what's right for your situation.
          </p>
          <Link
            href="/consultations"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Talk to a Care Specialist
          </Link>
        </div>
      </div>
    </div>
  )
}
