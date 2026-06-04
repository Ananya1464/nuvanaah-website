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

const bestSellers = [
  {
    id: 'willow-support',
    category: 'Recovery & Body Support',
    name: 'Willow Support™',
    price: 3000,
    priceDisplay: '₹ 3,000',
    rating: 4.9,
    reviews: 312,
    image: '/images/catalog/WillowSupport/1.jpeg',
    alt: 'Willow Support™ — front-open pocket bra',
  },
  {
    id: 'bloomcrown',
    category: 'Hair & Confidence',
    name: 'BloomCrown™',
    price: 12000,
    priceDisplay: 'From ₹ 12,000',
    rating: 4.9,
    reviews: 187,
    image: '/images/catalog/BloomCrown/1.jpeg',
    alt: 'BloomCrown™ — real hair wig collection',
  },
  {
    id: 'petalwrap',
    category: 'Everyday Wellness',
    name: 'PetalWrap™',
    price: 1500,
    priceDisplay: '₹ 1,500',
    rating: 4.8,
    reviews: 243,
    image: '/images/catalog/petal leaf/1.PNG',
    alt: 'PetalWrap™ — bamboo comfort towel',
  },
  {
    id: 'browbloom',
    category: 'Hair & Confidence',
    name: 'BrowBloom™',
    price: 1400,
    priceDisplay: '₹ 1,400',
    rating: 4.9,
    reviews: 156,
    image: '/images/catalog/Brow Bloom/1.jpeg',
    alt: 'BrowBloom™ — ready-to-wear eyebrows',
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

export const faqItems = [
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

export default function HomePageClient() {
  const [activeSlide, setActiveSlide] = useState(0)
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length)
    }, 7000)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-[#fdf9f3] text-[#1c1c18]">

      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="relative flex flex-col lg:block lg:h-[100vh] lg:min-h-[600px] lg:max-h-[900px] w-full bg-[#1c1c18]">
        
        {/* Image Container */}
        <div className="relative h-[55vh] min-h-[400px] w-full lg:absolute lg:inset-0 lg:h-full">
          <Image
            src="/images/hero-homepage-v3.png"
            alt="Serene, dignified young Indian woman with a soft half-smile in a beautifully designed warm home, conveying gentle rebuilding"
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover object-center lg:object-[75%_center]"
          />
          {/* Desktop gradient - only visible on lg screens */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-2/3" />
        </div>

        {/* Text Container */}
        <div className="relative z-10 flex h-full items-center bg-[#1c1c18] px-4 py-16 sm:px-6 lg:bg-transparent lg:px-8 lg:py-0">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-2xl">

              <h1 className="mb-5 text-[44px] font-bold leading-[1.08] tracking-[-0.02em] text-white md:text-[56px] lg:text-[64px]">
                You are more than your diagnosis. Feel like <span className="italic text-[#feb2b9]">yourself</span> again.
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
                  className="group flex items-center gap-2 rounded-full px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10 lg:hover:bg-black/20"
                >
                  Our Story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: SHOP BY NEED ═══ */}
      <section className="bg-white py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#884d53]">Find your way</p>
            <h2 className="text-[28px] font-bold text-[#1c1c18] md:text-[34px]">What brings you here today?</h2>
            <p className="mt-3 text-[#524344] max-w-lg mx-auto">Every journey is different. Start with what you are experiencing right now.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
            {[
              {
                id: 'after-surgery',
                label: 'After Surgery',
                sub: 'Comfort and support for your recovery journey',
                href: '/shop-by-need/after-surgery',
                emoji: '🌿',
                bg: 'from-[#f2e8e0] to-[#ede0d4]',
                accent: '#884d53',
              },
              {
                id: 'hair-loss',
                label: 'Managing Hair Loss',
                sub: 'Feel like yourself during treatment',
                href: '/shop-by-need/hair-loss',
                emoji: '🌸',
                bg: 'from-[#e8edf2] to-[#d9e4ed]',
                accent: '#4a6fa5',
              },
              {
                id: 'lymphedema',
                label: 'Lymphedema Support',
                sub: 'Fast relief for arm swelling and heaviness',
                href: '/products/flowsleeve',
                emoji: '💚',
                bg: 'from-[#e0ede5] to-[#d4e8db]',
                accent: '#446651',
              },
              {
                id: 'daily-comfort',
                label: 'Daily Comfort',
                sub: 'Gentle products for sensitive skin',
                href: '/shop-by-need/daily-comfort',
                emoji: '✨',
                bg: 'from-[#f0ecdf] to-[#e8e2cf]',
                accent: '#7a6a38',
              },
            ].map(tile => (
              <Link
                key={tile.id}
                href={tile.href}
                className={`group flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${tile.bg} p-5 min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <span className="text-3xl select-none leading-none">{tile.emoji}</span>
                <div className="mt-3">
                  <p className="font-bold text-[#1c1c18] text-[15px] leading-snug mb-1">{tile.label}</p>
                  <p className="text-[12px] text-[#524344] leading-snug">{tile.sub}</p>
                  <span
                    className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors"
                    style={{ color: tile.accent }}
                  >
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2B: TRUST STRIP ═══ */}
      <section className="bg-[#faf7f2] border-t border-b border-[#2c1f1a]/[0.05] py-10 px-4 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { title: 'Thoughtfully Curated', subtitle: 'Designed for comfort, healing, and dignity', Icon: ShieldCheck },
            { title: 'Discreet Packaging', subtitle: 'Your privacy always comes first', Icon: Package },
            { title: 'Compassionate Guidance', subtitle: 'Support from trained care advisors', Icon: Headset },
            { title: 'Gentle on Sensitive Bodies', subtitle: 'Soft materials chosen with care', Icon: Heart },
          ].map(({ title, subtitle, Icon }) => (
            <div key={title} className="group flex flex-col items-center text-center fade-in-up">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#884d53] transition-transform group-hover:scale-110 shadow-sm">
                <Icon strokeWidth={1.5} className="h-6 w-6" />
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
                  sizes="(max-width: 768px) 100vw, 50vw"
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

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 fade-in-up">
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
                        sizes="(max-width: 768px) 50vw, 33vw"
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

                  <div className="mb-1 flex items-center gap-2">
                    <span className="rounded-full bg-primary-fixed px-2 py-0.5 text-[10px] font-bold text-primary-700">BEST SELLER</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">{product.category}</span>
                  </div>
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
      <section className="bg-[#1c1c18] py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#884d53]">Your path</p>
            <h2 className="text-[28px] font-bold text-white md:text-[34px]">Every stage has the right support.</h2>
          </div>

          {/* Mobile: vertical stack / Desktop: horizontal row */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="absolute left-0 right-0 top-[28px] hidden h-px bg-white/10 md:block" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
              {journeySteps.map(({ step, title, description }, i) => (
                <div key={step} className="relative flex gap-5 rounded-2xl border border-white/8 bg-white/5 p-6 md:flex-col md:gap-4">
                  {/* Step number */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#884d53] text-[13px] font-bold text-white md:h-11 md:w-11">
                    {step}
                  </div>
                  {/* Vertical connector — mobile only */}
                  {i < journeySteps.length - 1 && (
                    <div className="absolute left-[38px] top-[64px] bottom-[-16px] w-px bg-white/10 md:hidden" />
                  )}
                  <div>
                    <h3 className="mb-1 text-[15px] font-semibold text-white">{title}</h3>
                    <p className="text-[13px] leading-relaxed text-white/55">{description}</p>
                  </div>
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

      {/* ═══ SECTION 9: REFINED SUPPORT ═══ */}
      <section className="relative overflow-hidden bg-[#2c1f1a]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative min-h-[400px] md:min-h-[560px]">
            <Image
              src="/images/support-consultation.png"
              alt="Two women in a warm consultation setting"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2c1f1a]/40 hidden md:block" />
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-24">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#884d53]/20 px-4 py-1.5">
              <Headset className="h-4 w-4 text-[#ffdadb]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ffdadb]">Personal Care Support</span>
            </div>

            <h2 className="mb-5 text-[32px] font-bold leading-tight text-[#f0eae2] md:text-[40px]">
              You don&apos;t have to figure this out alone.
            </h2>

            <p className="mb-4 max-w-md text-[17px] leading-7 text-[#f0eae2]/75">
              Schedule a free 15-minute consultation with our certified care experts. 
              From sizing to product recommendations, we&apos;re here to guide you — with warmth, privacy, and genuine understanding.
            </p>

            <p className="mb-10 text-sm italic text-[#ffdadb]/60">
              No commitment. No pressure. Just care.
            </p>

            {/* Support Features */}
            <div className="mb-10 grid grid-cols-2 gap-6">
              {[
                { label: 'Video Call', desc: 'Face-to-face guidance' },
                { label: 'WhatsApp', desc: 'Chat at your pace' },
                { label: 'Private & Discreet', desc: 'Your story stays yours' },
                { label: 'Expert Advisors', desc: 'Trained care specialists' },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="text-sm font-semibold text-[#ffdadb]">{item.label}</div>
                  <div className="text-xs text-[#f0eae2]/50">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
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
                className="rounded-full border border-[#f0eae2]/30 px-8 py-4 font-semibold text-[#f0eae2] transition-all hover:border-[#f0eae2]/60 hover:bg-[#f0eae2]/5 active:scale-95"
              >
                Browse Collections
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
