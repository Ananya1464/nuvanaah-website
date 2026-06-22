"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Heart,
  Plus,
  ShieldCheck,
  Package,
  Headset,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible'
import StaggerChildren, { staggerItemVariants } from '@/components/animations/StaggerChildren'

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
      'Comfort wigs designed for a natural look and feel. Breathable, lightweight construction for sensitive scalps and confident daily wear.',
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

]

const bestSellers = [
  {
    id: 'willow-support',
    category: 'Recovery & Body Support',
    name: 'Willow Support | Mastectomy Bra',
    price: 3020,
    priceDisplay: '₹ 3,020 (for a pair)',
    image: '/images/catalog/WillowSupport/1.jpeg',
    alt: 'Willow Support — front-open pocket bra',
  },
  {
    id: 'bloomcrown',
    category: 'Hair & Confidence',
    name: 'BloomCrown | Medical Wig',
    price: 12101,
    priceDisplay: 'From ₹ 12,101',
    image: '/images/catalog/BloomCrown/1.jpeg',
    alt: 'BloomCrown — real hair wig collection',
  },
  {
    id: 'petalwrap',
    category: 'Everyday Wellness',
    name: 'PetalWrap | Bamboo Bath Towel',
    price: 1535,
    priceDisplay: '₹ 1,535',
    image: '/images/catalog/petal leaf/1.PNG',
    alt: 'PetalWrap — bamboo comfort towel',
  },
  {
    id: 'browbloom',
    category: 'Hair & Confidence',
    name: 'BrowBloom | Eyebrow Prosthesis',
    price: 1544,
    priceDisplay: '₹ 1,544',
    image: '/images/catalog/Brow Bloom/1.jpeg',
    alt: 'BrowBloom — ready-to-wear eyebrows',
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
    quote: "The Willow Support bra was exactly what I needed after my mastectomy. Soft, simple to put on, and gentle on sensitive skin.",
    name: 'Anjali K.',
    city: 'Mumbai',
  },
  {
    quote: "I was so nervous about choosing a wig, but the support team at Nuvanaah walked me through every step. I feel like myself again.",
    name: 'Rekha S.',
    city: 'Delhi',
  },
  {
    quote: "The care they put into every detail is truly heartwarming. I felt genuinely supported through every step of my recovery.",
    name: 'Priya M.',
    city: 'Bangalore',
  },
]

export type FaqItemType = {
  q: string
  a: string
}

/* ─────────────────────── COMPONENTS ─────────────────────── */


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
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-sm leading-relaxed text-[#524344]">{a}</p>
      </motion.div>
    </div>
  )
}

/* ─── Carousel slide animation variants ─── */
const slideVariants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

/* ─────────────────────── PAGE ─────────────────────── */

export default function HomePageClient({ faqItems }: { faqItems: FaqItemType[] }) {
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

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-5 text-[34px] sm:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[56px] lg:text-[64px]"
              >
                You are more than your diagnosis. Feel like <span className="italic text-[#feb2b9]">yourself</span> again.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-8 max-w-xl text-[17px] leading-7 text-white/85"
              >
                Recovery essentials designed with care, intention, and the comfort that makes ordinary days easier. Here for every stage of your journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-10 flex flex-wrap items-center gap-4"
              >
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
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: SHOP BY NEED ═══ */}
      <section className="bg-white py-16 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeInWhenVisible>
            <div className="mb-10 text-center">
              <p className="mb-2 text-[14px] font-bold uppercase tracking-[0.3em] text-[#884d53]">Find your way</p>
              <h2 className="text-[28px] font-bold text-[#1c1c18] md:text-[34px]">What brings you here today?</h2>
              <p className="mt-3 text-[#524344] max-w-lg mx-auto">Every journey is different. Start with what you are experiencing right now.</p>
            </div>
          </FadeInWhenVisible>

          <StaggerChildren className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
            {[
              {
                id: 'after-surgery',
                label: 'After Surgery',
                sub: 'Comfort and support for your recovery journey',
                href: '/shop-by-need/after-surgery',
                bg: 'from-[#f2e8e0] to-[#ede0d4]',
                accent: '#884d53',
              },
              {
                id: 'hair-loss',
                label: 'Managing Hair Loss',
                sub: 'Feel like yourself during treatment',
                href: '/shop-by-need/hair-loss',
                bg: 'from-[#e8edf2] to-[#d9e4ed]',
                accent: '#4a6fa5',
              },
              {
                id: 'lymphedema',
                label: 'Lymphedema Support',
                sub: 'Everyday support for arm swelling and heaviness',
                href: '/products/flowsleeve',
                bg: 'from-[#e0ede5] to-[#d4e8db]',
                accent: '#446651',
              },
              {
                id: 'daily-comfort',
                label: 'Daily Comfort',
                sub: 'Gentle products for sensitive skin',
                href: '/shop-by-need/daily-comfort',
                bg: 'from-[#f0ecdf] to-[#e8e2cf]',
                accent: '#7a6a38',
              },
            ].map(tile => (
              <motion.div key={tile.id} variants={staggerItemVariants} className="h-full">
                <Link
                  href={tile.href}
                  className={`group flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${tile.bg} p-5 h-full min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="mt-3">
                    <p className="font-bold text-[#1c1c18] text-[15px] leading-snug mb-1">{tile.label}</p>
                    <p className="text-[12px] text-[#524344] leading-snug">{tile.sub}</p>
                  </div>
                  <div>
                    <span
                      className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors"
                      style={{ color: tile.accent }}
                    >
                      Explore →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══ SECTION 2B: TRUST STRIP ═══ */}
      <section className="bg-[#faf7f2] border-t border-b border-[#2c1f1a]/[0.05] py-10 px-4 lg:px-8">
        <StaggerChildren className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4" staggerDelay={0.1}>
          {[
            { title: 'Thoughtfully Curated', subtitle: 'Designed for comfort, healing, and dignity', Icon: ShieldCheck },
            { title: 'Free Shipping Across India', subtitle: 'On all orders, no minimum required', Icon: Package },
            { title: 'Compassionate Guidance', subtitle: 'Personal support from our team', Icon: Headset },
            { title: 'Gentle on Sensitive Bodies', subtitle: 'Soft materials chosen with care', Icon: Heart },
          ].map(({ title, subtitle, Icon }) => (
            <motion.div key={title} variants={staggerItemVariants} className="group flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#884d53] transition-transform group-hover:scale-110 shadow-sm">
                <Icon strokeWidth={1.5} className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-semibold text-[#1c1c18]">{title}</h3>
              <p className="text-sm text-[#524344]">{subtitle}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </section>



      {/* ═══ SECTION 4: FEATURED CAROUSEL ═══ */}
      <section className="relative overflow-hidden bg-[#f7f3ed] py-16 group/carousel">
        {/* Navigation Arrows */}
        <button
          onClick={() => setActiveSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/80 text-[#1c1c18] shadow-md transition-all hover:bg-white hover:scale-105 active:scale-95 border border-black/5 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 duration-300 md:left-8"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % carouselSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/80 text-[#1c1c18] shadow-md transition-all hover:bg-white hover:scale-105 active:scale-95 border border-black/5 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 duration-300 md:right-8"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <div className="mx-auto flex max-w-7xl items-center px-4 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-6"
              >
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
              </motion.div>
            </AnimatePresence>
            <div className="hidden md:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${activeSlide}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={carouselSlides[activeSlide].image}
                      alt={carouselSlides[activeSlide].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
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
          <FadeInWhenVisible>
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-[30px] font-bold text-[#1c1c18]">Our Community Favorites</h2>
                <p className="text-[#524344]">The most loved items by our Nuvanaah sisters.</p>
              </div>
              <Link className="hidden border-b border-[#884d53] pb-1 font-semibold text-[#884d53] hover:opacity-70 sm:inline" href="/products">
                View all products
              </Link>
            </div>
          </FadeInWhenVisible>

          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {bestSellers.map((product) => {
              const wishlisted = isInWishlist(product.id)
              return (
                <motion.div key={product.id} variants={staggerItemVariants} className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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
                </motion.div>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ═══ SECTION 6: JOURNEY TIMELINE ═══ */}
      <section className="bg-[#1c1c18] py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeInWhenVisible>
            <div className="mb-14 text-center">
              <p className="mb-3 text-[14px] font-bold uppercase tracking-[0.3em] text-[#884d53]">Your path</p>
              <h2 className="text-[28px] font-bold text-white md:text-[34px]">Every stage has the right support.</h2>
            </div>
          </FadeInWhenVisible>

          {/* Mobile: vertical stack / Desktop: horizontal row */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="absolute left-0 right-0 top-[28px] hidden h-px bg-white/10 md:block" />

            <StaggerChildren className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6" staggerDelay={0.12}>
              {journeySteps.map(({ step, title, description }, i) => (
                <motion.div key={step} variants={staggerItemVariants} className="relative flex gap-5 rounded-2xl border border-white/8 bg-white/5 p-6 md:flex-col md:gap-4">
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
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>


      {/* ═══ SECTION 6B: NAMING PHILOSOPHY ═══ */}
      <section className="bg-[#faf7f2] py-16 px-4 lg:px-8 border-t border-[#ded0bf]/30">
        <div className="mx-auto max-w-3xl text-center">
          <FadeInWhenVisible>
            <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#884d53] mb-4">The Names Behind the Products</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c18] mb-6 leading-snug">
              Named after nature. Designed for you.
            </h2>
            <p className="text-[#524344] text-base sm:text-lg leading-relaxed mb-4">
              Every Nuvanaah product is named after something from the natural world — a willow that bends without breaking, a petal that is soft by design, a vine that finds its way through. The names are not decorative. They are a reminder of what recovery looks like: gradual, adaptive, and always moving toward something.
            </p>
            <p className="text-[#7a6f6a] text-sm leading-relaxed">
              Each product also carries the clinical name it is known by — so whether you search for a breast prosthesis, a mastectomy bra, a cranial prosthesis, or a lymphedema sleeve, you will always find what you are looking for.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ═══ SECTION 6C: COLOUR PALETTE STORY ═══ */}
      <section className="bg-white py-16 px-4 lg:px-8 border-t border-[#ded0bf]/30">
        <div className="mx-auto max-w-7xl">
          <FadeInWhenVisible>
            <div className="text-center mb-10">
              <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#884d53] mb-4">Our Colour Palette</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c18] mb-4 leading-snug">
                Every colour has a story.
              </h2>
              <p className="text-[#524344] text-base max-w-2xl mx-auto leading-relaxed">
                Nuvanaah colours are not chosen from a standard chart. Each one is named after something from the natural world — a flower, a tree, a harvest — and chosen because it carries something worth carrying into recovery.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden border border-[#ded0bf]/40 shadow-sm">
              <Image
                src="/images/color-palette.jpeg"
                alt="Nuvanaah colour palette — 10 nature-inspired colours named after plants and flowers"
                width={1200}
                height={500}
                className="w-full object-contain"
              />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-center">
              {[
                { name: 'Coffee Bean',   desc: 'Roasted coffee beans', image: '/images/color_options/coffee_bean.PNG' },
                { name: 'Aparajita',     desc: 'Butterfly Pea Flower', image: '/images/color_options/aparajita.PNG' },
                { name: 'Dusty Miller',  desc: 'Silvery Dusty Miller leaves', image: '/images/color_options/dusty_miller.PNG' },
                { name: 'Ebony',         desc: 'Dark Ebony tree', image: '/images/color_options/ebony.jpeg' },
                { name: 'Jade Vine',     desc: 'Rare Jade Vine flower', image: '/images/color_options/jade_wine.PNG' },
                { name: 'Magnolia',      desc: 'Soft Magnolia blooms', image: '/images/color_options/mangolia.PNG' },
                { name: 'Camellia',      desc: 'Camellia flowers', image: '/images/color_options/camellia.PNG' },
                { name: 'Bamboo Wood',   desc: 'Natural bamboo warmth', image: '/images/color_options/bamboo_wood.jpeg' },
              ].map(({ name, desc, image }) => (
                <div key={name} className="bg-[#faf7f2] rounded-xl px-4 py-5 border border-[#ded0bf]/40 flex flex-col items-center text-center">
                  {image ? (
                    <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden border border-[#ded0bf]/40 bg-white">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 mb-4 rounded-full border border-dashed border-[#ded0bf]/60 bg-white/50 flex items-center justify-center text-[10px] text-[#7a6f6a] italic">
                      Coming soon
                    </div>
                  )}
                  <p className="text-xs font-bold text-[#1c1c18] mb-1">{name}</p>
                  <p className="text-[11px] text-[#7a6f6a] leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ═══ SECTION 6D: ELEMENTS STORY ═══ */}
      <section className="bg-[#faf7f2] py-16 px-4 lg:px-8 border-t border-[#ded0bf]/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible>
              <div className="relative rounded-3xl overflow-hidden border border-[#ded0bf]/40 shadow-sm">
                <Image
                  src="/images/color-palette-elements.jpeg"
                  alt="Nuvanaah colour philosophy — inspired by Earth, Water, Fire, Air, and Space"
                  width={700}
                  height={560}
                  className="w-full object-cover"
                />
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <div className="space-y-6">
                <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#884d53]">Where the Colours Come From</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c18] leading-snug">
                  Rooted in the five elements.
                </h2>
                <p className="text-[#524344] text-base leading-relaxed">
                  The Nuvanaah colour palette draws from the five elements — Earth, Water, Fire, Air, and Space. Each element brings its own quality to the palette: the groundedness of soil and bamboo, the calm of water and dew, the warmth of amber and flame, the lightness of cotton and air, and the quiet depth of night.
                </p>
                <p className="text-[#524344] text-base leading-relaxed">
                  These are not decorative choices. The colours around you during recovery matter. Warmth over clinical white. Depth over neutral grey. Something chosen, not assigned.
                </p>
                <div className="grid grid-cols-5 gap-3 pt-4">
                  {[
                    { element: 'Earth',  quality: 'Grounded', bgClass: 'bg-[#5c6e58]' },
                    { element: 'Water',  quality: 'Calm',     bgClass: 'bg-[#5b8296]' },
                    { element: 'Fire',   quality: 'Warm',     bgClass: 'bg-[#c85a32]' },
                    { element: 'Air',    quality: 'Light',    bgClass: 'bg-[#e2e8e4] border border-black/10' },
                    { element: 'Space',  quality: 'Depth',    bgClass: 'bg-[#131b26]' },
                  ].map(({ element, quality, bgClass }) => (
                    <div key={element} className="flex flex-col items-center text-center group/elem">
                      <div className={`w-10 h-10 rounded-full ${bgClass} mb-2.5 transition-transform duration-300 group-hover/elem:scale-110 shadow-sm`} />
                      <p className="text-xs font-bold text-[#1c1c18]">{element}</p>
                      <p className="text-[10px] text-[#7a6f6a]">{quality}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: TESTIMONIALS ═══ */}
      <section className="bg-[#e6e2dc] py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeInWhenVisible>
            <h2 className="mb-12 text-center text-[30px] font-bold text-[#1c1c18]">Words from Our Customers</h2>
          </FadeInWhenVisible>
          <StaggerChildren className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3" staggerDelay={0.12}>
            {testimonials.map(({ quote, name, city }) => (
              <motion.div key={name} variants={staggerItemVariants} className="rounded-2xl bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="mb-6 text-base italic leading-relaxed text-[#524344]">&ldquo;{quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-[#1c1c18]">{name}</div>
                  <div className="text-sm text-[#524344]">{city}</div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
          <p className="mt-4 text-center text-[12px] text-[#7a6f6a]">Names changed to protect customer privacy.</p>

        </div>
      </section>

      {/* ═══ SECTION 8: FAQ ACCORDION ═══ */}
      <section className="py-20 px-4 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <FadeInWhenVisible>
            <h2 className="mb-10 text-center text-[30px] font-bold text-[#1c1c18]">Common Questions</h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.15}>
            <div>
              {faqItems.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>


    </main>
  )
}
