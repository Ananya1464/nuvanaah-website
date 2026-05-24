"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Heart,
  Plus,
  Star,
  ShieldCheck,
  Package,
  RotateCcw,
  Headset,
  ChevronDown,
  MessageCircle,
} from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'

/* ─────────────────────── DATA ─────────────────────── */

const carouselSlides = [
  {
    title: 'Designed for your first days home.',
    description:
      'Our post-surgery recovery kits are curated with softest bamboo fabrics and front-closure designs to prioritize your comfort when you need it most.',
    button: 'Explore Recovery Kits',
    href: '/products/category/post-surgery',
    image: '/images/carousel/recovery-flatlay.png',
    alt: 'Post-surgery recovery items on warm linen',
  },
  {
    title: 'Look like yourself. Feel like yourself.',
    description:
      'Premium medical-grade wigs that move naturally. Rediscover your confidence with breathable, ultra-light construction designed for sensitive scalps.',
    button: 'View Hair Collection',
    href: '/products/category/wigs',
    image: '/images/carousel/wig-portrait.png',
    alt: 'Woman wearing natural-looking medical wig',
  },
  {
    title: 'Reclaim your comfort, every day.',
    description:
      "Effective lymphedema management doesn't have to be clinical. Discover compression sleeves that are breathable, stylish, and durable for daily wear.",
    button: 'Shop Compression',
    href: '/products/category/lymphedema',
    image: '/images/carousel/compression-sleeve.png',
    alt: 'Lymphedema compression sleeve close-up',
  },
  {
    title: "You don't have to figure this out alone.",
    description:
      'Book a private consultation with our care experts. From sizing to product recommendations, we\'re here to guide you through every choice.',
    button: 'Book Free Consult',
    href: '/consultations',
    image: '/images/about/support-consultation.png',
    alt: 'Supportive consultation between two women',
  },
]

const categories = [
  {
    title: 'Post-Surgery Care',
    description: 'Gentle support and soft fabrics for immediate recovery.',
    href: '/products/category/post-surgery',
    bg: '#F9EEF0',
    accent: '#884d53',
    icon: '🩺',
  },
  {
    title: 'Wigs & Hair',
    description: 'Natural-look medical wigs and soft breathable headwear.',
    href: '/products/category/wigs',
    bg: '#EBF2ED',
    accent: '#446651',
    icon: '✨',
  },
  {
    title: 'Lymphedema Care',
    description: 'Compression solutions designed for daily ease and comfort.',
    href: '/products/category/lymphedema',
    bg: '#F2EEFF',
    accent: '#6c5b54',
    icon: '💪',
  },
  {
    title: 'Chemo Essentials',
    description: 'Comfort kits for managing treatment side effects.',
    href: '/products/category/chemo-essentials',
    bg: '#FEF4E8',
    accent: '#884d53',
    icon: '🌿',
  },
  {
    title: 'Sensitive Skin',
    description: 'Dermatologist-tested skincare for fragile skin.',
    href: '/products/category/sensitive-skin',
    bg: '#FEF0E8',
    accent: '#884d53',
    icon: '🧴',
  },
]

const bestSellers = [
  {
    id: 'mastectomy-bra',
    category: 'Breast Care',
    name: 'Mastectomy Bra – Front Opening',
    price: 1299,
    priceDisplay: '₹1,299',
    rating: 4.9,
    reviews: 312,
    image: '/images/products/mastectomy-bra/hero.png',
    alt: 'Front-opening mastectomy bra in blush pink',
  },
  {
    id: 'medical-wig',
    category: 'Wigs & Hair',
    name: 'Human Hair Medical Wig 18"',
    price: 5499,
    priceDisplay: '₹5,499',
    rating: 4.8,
    reviews: 187,
    image: '/images/products/medical-wig/wig5.png',
    alt: 'Medical-grade human hair wig',
  },
  {
    id: 'lymphedema-sleeve',
    category: 'Lymphedema',
    name: 'Compression Sleeve – Breathable',
    price: 1199,
    priceDisplay: '₹1,199',
    rating: 4.7,
    reviews: 243,
    image: '/images/products/lymphedema-sleeve/hero.jpg',
    alt: 'Lymphedema compression sleeve',
  },
  {
    id: 'scarf-hair-lace',
    category: 'Headwear',
    name: 'Head Scarf with Hair Lace',
    price: 799,
    priceDisplay: '₹799',
    rating: 4.9,
    reviews: 156,
    image: '/images/products/printed-scarf/chemo-headwear.jpg',
    alt: 'Soft bamboo fabric head scarf',
  },
]

const journeySteps = [
  { step: '1', title: 'Diagnosis', description: 'Gathering strength and seeking the right information.' },
  { step: '2', title: 'Surgery & Recovery', description: 'Immediate postoperative care and gentle healing focus.' },
  { step: '3', title: 'Chemotherapy', description: 'Managing side effects with comfort and soft materials.' },
  { step: '4', title: 'Rebuilding Confidence', description: 'Embracing a new chapter with renewed dignity.' },
]

const testimonials = [
  {
    quote: "The SoftComfort bra was a lifesaver after my mastectomy. It's so rare to find something that is both medically functional and beautiful.",
    name: 'Anjali K.',
    city: 'Mumbai',
  },
  {
    quote: "I was so nervous about choosing a wig, but the support team at Nuvanaah walked me through every step. I feel like myself again.",
    name: 'Rekha S.',
    city: 'Delhi',
  },
  {
    quote: "Their discreet packaging meant so much to me. The care they put into even the smallest details is truly heartwarming.",
    name: 'Priya M.',
    city: 'Bangalore',
  },
]

const faqItems = [
  {
    q: 'How do I choose the right bra size after surgery?',
    a: 'We recommend measuring 6–8 weeks post-surgery. Our care team can guide you through a virtual fitting — book a free consultation for personalized sizing help.',
  },
  {
    q: 'Is the packaging really discreet?',
    a: 'Absolutely. All orders ship in plain, unbranded boxes with no product descriptions visible on the outside. Your privacy is our priority.',
  },
  {
    q: 'How do I care for my medical wig?',
    a: 'Wash gently with sulfate-free shampoo every 7–10 wears. Store on a wig stand when not in use. Detailed care instructions are included with every wig purchase.',
  },
  {
    q: 'Do you offer home consultations?',
    a: 'Yes — we offer both virtual and in-person consultations across major Indian cities. Book through our consultations page or WhatsApp us directly.',
  },
  {
    q: 'What is your return policy?',
    a: '30-day hassle-free returns on unworn items in original packaging. Wigs and intimate wear can be exchanged for sizing. No questions asked.',
  },
]

/* ─────────────────────── COMPONENTS ─────────────────────── */

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${i <= Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`}
          />
        ))}
      </div>
      <span className="text-[11px] text-[#524344]">
        {rating} ({reviews})
      </span>
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-black/10">
      <button
        className="flex w-full items-center justify-between py-5 text-left font-semibold text-[#1c1c18] transition-colors hover:text-[#884d53]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[#847374] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}
      >
        <p className="text-sm leading-relaxed text-[#524344]">{a}</p>
      </div>
    </div>
  )
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length)
    }, 7000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#fdf9f3] text-[#1c1c18]">

      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="relative h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
        <Image
          src="/images/hero-homepage.png"
          alt="Two Indian women in a warm, sunlit home setting — one gently supporting the other"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#c3e9cf] px-4 py-1.5 text-[#496a55]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Trusted by 10,000+ women</span>
              </div>

              <h1 className="mb-5 text-[44px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:text-[56px] lg:text-[64px]">
                You are more than your diagnosis. Shop with <span className="italic text-[#feb2b9]">dignity.</span>
              </h1>

              <p className="mb-8 max-w-xl text-[17px] leading-7 text-white/85">
                A sanctuary for recovery essentials designed with clinical precision and high-end retail elegance. We support your journey from treatment to renewal.
              </p>

              <div className="mb-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="rounded-full bg-[#884d53] px-8 py-4 font-semibold text-white shadow-[0_18px_48px_rgba(136,77,83,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Shop Collection
                </Link>
                <Link
                  href="/about"
                  className="group flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Our Story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex items-center gap-8 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-md sm:gap-10">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">10,000+</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/60">Women served</span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">200+</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/60">Products</span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">4.9★</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/60">Avg. rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: TRUST STRIP ═══ */}
      <section className="bg-white py-14 px-4 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { title: 'Certified Products', subtitle: 'Medical-grade materials', Icon: ShieldCheck },
            { title: 'Discreet Packaging', subtitle: 'Your privacy is priority', Icon: Package },
            { title: '30-Day Returns', subtitle: 'No questions asked', Icon: RotateCcw },
            { title: 'Expert Support', subtitle: 'Trained care advisors', Icon: Headset },
          ].map(({ title, subtitle, Icon }) => (
            <div key={title} className="group flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c3e9cf] text-[#496a55] transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-semibold text-[#1c1c18]">{title}</h3>
              <p className="text-sm text-[#524344]">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>



      {/* ═══ SECTION 4: FEATURED CAROUSEL ═══ */}
      <section className="relative overflow-hidden bg-[#f7f3ed] py-16">
        <div className="mx-auto flex max-w-7xl items-center px-4 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-[36px] font-bold leading-tight text-[#1c1c18] md:text-[40px]">
                {carouselSlides[activeSlide].title}
              </h2>
              <p className="max-w-md text-[17px] leading-7 text-[#524344]">
                {carouselSlides[activeSlide].description}
              </p>
              <Link
                href={carouselSlides[activeSlide].href}
                className="inline-flex items-center gap-2 rounded-full bg-[#884d53] px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {carouselSlides[activeSlide].button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={carouselSlides[activeSlide].image}
                  alt={carouselSlides[activeSlide].alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-8 bg-[#884d53]' : 'w-2.5 bg-[#884d53]/20 hover:bg-[#884d53]/40'}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* ═══ SECTION 5: BEST SELLERS ═══ */}
      <section className="bg-[#f7f3ed] py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-[30px] font-bold text-[#1c1c18]">Our Community Favorites</h2>
              <p className="text-[#524344]">The most loved items by our Nuvanaah sisters.</p>
            </div>
            <Link className="hidden border-b border-[#884d53] pb-1 font-semibold text-[#884d53] hover:opacity-70 sm:inline" href="/products">
              View all products
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => {
              const wishlisted = isInWishlist(product.id)
              return (
                <div key={product.id} className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-[#f7f3ed]">
                    <Link href={`/products/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <button
                      className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:scale-110 ${wishlisted ? 'text-[#884d53]' : 'text-[#524344]'}`}
                      aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                      onClick={() => wishlisted
                        ? removeFromWishlist(product.id)
                        : addToWishlist({ id: product.id, name: product.name, price: product.price, tagline: product.alt, category: product.category })
                      }
                    >
                      <Heart className={`h-4 w-4 ${wishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#446651]">{product.category}</div>
                  <Link href={`/products/${product.id}`} className="mb-1 text-base font-semibold text-[#1c1c18] hover:text-[#884d53] transition-colors">
                    {product.name}
                  </Link>
                  <StarRating rating={product.rating} reviews={product.reviews} />

                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="text-xl font-bold text-[#884d53]">{product.priceDisplay}</div>
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#884d53] text-white transition-all hover:scale-110 hover:shadow-md active:scale-95"
                      aria-label={`Add ${product.name} to cart`}
                      onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: JOURNEY TIMELINE ═══ */}
      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-[30px] font-bold text-[#1c1c18]">Your Journey to Renewal</h2>
          <div className="relative">
            <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 border-t-2 border-dotted border-[#abcfb6] md:block" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {journeySteps.map(({ step, title, description }) => (
                <div key={step} className="z-10 flex flex-col items-center bg-[#fdf9f3] p-4 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#884d53] text-lg font-bold text-white shadow-md">
                    {step}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                  <p className="text-sm text-[#524344]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: TESTIMONIALS ═══ */}
      <section className="bg-[#e6e2dc] py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-[30px] font-bold text-[#1c1c18]">Real Stories from Real Women</h2>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map(({ quote, name, city }) => (
              <div key={name} className="rounded-2xl bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="mb-6 text-base italic leading-relaxed text-[#524344]">&ldquo;{quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-[#1c1c18]">{name}</div>
                  <div className="text-sm text-[#524344]">{city}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8 rounded-full bg-white/40 px-6 py-4 backdrop-blur-sm">
            <div className="text-sm"><span className="font-bold text-[#1c1c18]">98%</span> <span className="text-[#524344]">Positive Feedback</span></div>
            <div className="text-sm"><span className="font-bold text-[#1c1c18]">50k+</span> <span className="text-[#524344]">Happy Customers</span></div>
            <div className="text-sm"><span className="font-bold text-[#1c1c18]">15+</span> <span className="text-[#524344]">Award Nominations</span></div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: FAQ ACCORDION ═══ */}
      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-10 text-center text-[30px] font-bold text-[#1c1c18]">Common Questions</h2>
          <div>
            {faqItems.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: CONSULTATION CTA ═══ */}
      <section className="bg-[#884d53] px-4 py-20 text-center text-white lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-[36px] font-bold leading-tight md:text-[40px]">Still unsure? We&apos;re here to help.</h2>
          <p className="mb-10 text-[17px] text-white/90">Schedule a free 15-minute consultation with our certified care experts.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919819461612"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
            <Link
              href="/products"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#884d53] transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
