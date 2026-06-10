'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Phone, MessageCircle, Mail, Heart, ShoppingBag, Package, Scissors } from 'lucide-react'
import Link from 'next/link'

const situationCards = [
  {
    icon: Heart,
    title: "I'm preparing for surgery",
    description: "Learn about recovery products and what to expect",
    category: 'Products',
  },
  {
    icon: ShoppingBag,
    title: "I need help with sizing",
    description: "Find the right fit for your needs",
    category: 'Products',
  },
  {
    icon: Package,
    title: "I have a question about delivery",
    description: "Shipping, delivery timelines, and international orders",
    category: 'Shipping & Returns',
  },
  {
    icon: Scissors,
    title: "I'm interested in a wig consultation",
    description: "Wig guidance available in Vashi and Thane",
    category: 'Consultations',
  },
]

const faqCategories = ['All', 'General', 'Products', 'Shipping & Returns', 'Payments & Orders', 'Consultations', 'Account']

const faqData: Record<string, Array<{ q: string; a: string }>> = {
  General: [
    {
      q: 'What is Nuvanaah?',
      a: 'Nuvanaah is a thoughtfully curated platform offering products designed to support women through recovery and treatment. Every item is chosen with care and intention — not as a medical supply, but as a considered companion for daily life.',
    },
    {
      q: 'Who is Nuvanaah for?',
      a: 'Nuvanaah is designed for women navigating recovery after breast surgery, hair loss during treatment, or the everyday practical needs that come with feeling like themselves again.',
    },
    {
      q: 'How is Nuvanaah different from other e-commerce sites?',
      a: 'We specialise exclusively in products for women in recovery. Every item is chosen with care and intention. Our tone, our products, and our support all reflect one purpose: helping you feel like yourself again.',
    },
    {
      q: 'Do you have physical stores?',
      a: 'We currently operate online. In-person wig consultations are available in Vashi and Thane. Reach out to us on WhatsApp to arrange.',
    },
  ],
  Products: [
    {
      q: 'How can I find the right size for a bra or breast form?',
      a: 'Each product page includes a detailed size guide. You are also welcome to reach out to us on WhatsApp — we are happy to help you find the right fit.',
    },
    {
      q: 'What materials are used in your wigs?',
      a: 'Each product page details the material, construction, and care instructions. Reach out to us for guidance specific to your needs.',
    },
    {
      q: 'Can I see the products before buying?',
      a: 'We provide detailed product images and descriptions on each page. For wigs, a consultation in Vashi or Thane is available if you would like to see options in person before deciding.',
    },
  ],
  'Shipping & Returns': [
    {
      q: 'Do you offer free shipping?',
      a: 'Yes. We offer free shipping across India.',
    },
    {
      q: 'How long does delivery take?',
      a: 'Standard delivery typically takes up to 7 business days depending on location.',
    },
    {
      q: 'Do you offer urgent delivery?',
      a: 'For urgent delivery requests, please contact us directly before placing your order. We will do our best to assist based on availability and location.',
    },
    {
      q: 'Do you ship internationally?',
      a: 'Yes. International shipping is available. Additional shipping charges apply based on destination and package requirements. Please contact us before placing an international order.',
    },
  ],
  Consultations: [
    {
      q: 'What consultations do you offer?',
      a: 'Nuvanaah offers wig consultations only. Consultations are available for customers in Vashi and Thane, India.',
    },
    {
      q: 'How do I book a wig consultation?',
      a: 'Reach out to us on WhatsApp or call us to arrange a time. Consultations are available for customers in Vashi and Thane.',
    },
    {
      q: 'Can you help me choose the right wig?',
      a: 'Yes. During a consultation we will help you explore available wig options, discuss sizing, and find a style that feels right for you.',
    },
    {
      q: 'Are you available for general questions outside of consultations?',
      a: 'Absolutely. Our team is available 24×7 to assist with any product-related questions. Reach out to us on WhatsApp or by phone anytime.',
    },
  ],
  'Payments & Orders': [
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit and debit cards, UPI, net banking, and digital wallets. Our payment gateway is secure and encrypted.',
    },
    {
      q: 'Is my payment information safe?',
      a: 'Yes. We use industry-standard SSL encryption. Your payment information is never stored on our servers.',
    },
    {
      q: 'How can I track my order?',
      a: 'You will receive a tracking link via email and SMS after your order is dispatched. You can also reach out to us for an update at any time.',
    },
    {
      q: 'What if my order is delayed?',
      a: 'Please contact our team directly. We will look into it and keep you updated.',
    },
  ],
  Account: [
    {
      q: 'How do I create an account?',
      a: 'Click Sign Up and enter your email, password, and name. You can also sign up with Google for faster registration.',
    },
    {
      q: 'Do I need an account to purchase?',
      a: 'You can check out as a guest, but creating an account helps you track orders, save addresses, and access your order history.',
    },
    {
      q: 'How do I reset my password?',
      a: 'Click Forgot Password on the login page, enter your email, and we will send a reset link.',
    },
    {
      q: 'Can I have multiple addresses?',
      a: 'Yes. Save multiple delivery addresses in your account and choose your preferred one during checkout.',
    },
    {
      q: 'How is my data protected?',
      a: "We comply with India's data protection requirements and use industry-standard security. Your information is never shared with third parties without your consent.",
    },
  ],
}

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set())

  const getFilteredFaqs = () => {
    let faqs: Array<{ q: string; a: string }> = []
    if (selectedCategory === 'All') {
      Object.values(faqData).forEach((cat) => { faqs = faqs.concat(cat) })
    } else {
      faqs = faqData[selectedCategory] || []
    }
    return faqs
  }

  const filteredFaqs = getFilteredFaqs()

  const toggleExpand = (index: number) => {
    const newSet = new Set(expandedIndices)
    if (newSet.has(index)) { newSet.delete(index) } else { newSet.add(index) }
    setExpandedIndices(newSet)
  }

  const handleSituationClick = (category: string) => {
    setSelectedCategory(category)
    setExpandedIndices(new Set())
    document.getElementById('faq-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#faf7f2]">

      {/* Hero */}
      <div className="bg-[#1c1c18] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4 leading-snug">
            Questions, guidance, and support —<br className="hidden sm:block" /> whenever you need it.
          </h1>
          <p className="text-[#ded0bf] text-lg">
            Find answers about products, sizing, delivery, consultations, and everyday care.
          </p>
        </div>
      </div>

      {/* Situation Cards */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {situationCards.map((card, idx) => (
            <button
              key={idx}
              onClick={() => handleSituationClick(card.category)}
              className="bg-white border border-[#ded0bf] rounded-2xl p-6 text-left hover:border-[#884d53]/50 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#884d53]/8 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#884d53]/12 transition-colors">
                  <card.icon className="w-5 h-5 text-[#884d53]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1c1c18] mb-1">{card.title}</h3>
                  <p className="text-sm text-[#7a6f6a] line-clamp-1">{card.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Wig Sizing Guide */}
      <div id="sizing-guide" className="max-w-4xl mx-auto px-4 py-10 scroll-mt-24">
        <div className="bg-white border border-[#ded0bf] rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-[#1c1c18] mb-2">Wig Cap Sizing Guide</h2>
          <p className="text-sm text-[#7a6f6a] mb-8">
            Three measurements are all you need. Use a soft tape measure and take each measurement against your head, not over hair.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                label: 'Head Circumference',
                example: 'e.g. 21.5"',
                how: 'Wrap the tape measure around the fullest part of your head — starting at the centre of your forehead, going around above the ears, and meeting back at the start.',
              },
              {
                label: 'Front to Nape',
                example: 'e.g. 14.0"',
                how: 'Place the tape at the centre of your hairline (forehead) and run it straight back over the top of your head to the nape of your neck.',
              },
              {
                label: 'Ear to Ear',
                example: 'e.g. 12.5"',
                how: 'Run the tape from one ear, across the top of your head, to the other ear. Keep it flat against the scalp.',
              },
            ].map(({ label, example, how }) => (
              <div key={label} className="bg-[#faf7f2] rounded-xl p-5 border border-[#ded0bf]/60">
                <p className="text-xs font-bold uppercase tracking-wider text-[#884d53] mb-1">{label}</p>
                <p className="text-xs text-[#7a6f6a] mb-3">{example}</p>
                <p className="text-sm text-[#524344] leading-relaxed">{how}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#7a6f6a]">
            Not sure about your measurements? Reach out to us on WhatsApp — we are happy to help.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div id="faq-list" className="max-w-4xl mx-auto px-4 pb-6 scroll-mt-24">
        <p className="text-sm text-[#7a6f6a] mb-3">Browse by topic</p>
        <div className="flex flex-wrap gap-2">
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => { setSelectedCategory(category); setExpandedIndices(new Set()) }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#884d53]/10 text-[#884d53] border border-[#884d53]/25'
                  : 'bg-white text-[#524344] border border-[#ded0bf] hover:border-[#884d53]/30 hover:text-[#884d53]'
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
          <div className="space-y-2">
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#ded0bf] rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full flex items-center justify-between p-5 hover:bg-[#faf7f2] transition-colors"
                >
                  <span className="text-base font-medium text-[#1c1c18] text-left">{faq.q}</span>
                  {expandedIndices.has(idx)
                    ? <ChevronUp className="w-5 h-5 text-[#884d53] flex-shrink-0 ml-4" />
                    : <ChevronDown className="w-5 h-5 text-[#7a6f6a] flex-shrink-0 ml-4" />
                  }
                </button>
                {expandedIndices.has(idx) && (
                  <div className="border-t border-[#ded0bf]/60 bg-[#faf7f2] px-5 py-4 text-[#524344] leading-relaxed text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#7a6f6a]">No questions found in this category.</p>
          </div>
        )}
      </div>

      {/* Still Need Help */}
      <div className="bg-white border-t border-[#ded0bf]/40 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#faf7f2] rounded-2xl p-8 md:p-10 border border-[#ded0bf] text-center">
            <h2 className="text-xl font-semibold text-[#1c1c18] mb-3">
              Still need help?
            </h2>
            <p className="text-[#524344] mb-8 max-w-lg mx-auto">
              If you can't find your answer here, reach out to us. We're available 24×7 for any product-related questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919819461612"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1c1c18] text-white rounded-full font-medium hover:bg-[#333] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="tel:+919819461612"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#ded0bf] text-[#524344] rounded-full font-medium hover:border-[#884d53]/40 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a
                href="mailto:hello@nuvanaah.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#ded0bf] text-[#524344] rounded-full font-medium hover:border-[#884d53]/40 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wig Consultation CTA */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-[#1c1c18] mb-3">Looking for wig guidance?</h2>
          <p className="text-[#524344] mb-6">
            We offer wig consultation and fitting support for customers in Vashi and Thane.
          </p>
          <Link
            href="/consultations"
            className="inline-block bg-[#884d53] hover:bg-[#884d53]/90 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Book a Wig Consultation
          </Link>
        </div>
      </div>

    </div>
  )
}
