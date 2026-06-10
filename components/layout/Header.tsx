'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Search, Menu, X, Heart, ChevronDown } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { useCart } from '@/lib/cart-context'
import SearchOverlay from '@/components/search/SearchOverlay'

// ─── SHOP MEGA-MENU DATA ─────────────────────────────────────────────────────
const shopCategories = [
  {
    name: 'Recovery & Body Support',
    slug: 'recovery-body-support',
    description: 'For surgery, healing, and physical comfort',
    products: [
      { name: 'Comfort Shape™',  slug: 'comfort-shape',  technical: 'Breast Form' },
      { name: 'Willow Support™', slug: 'willow-support', technical: 'Mastectomy Bra' },
      { name: 'Vine Support™',   slug: 'vine-support',   technical: 'Lumpectomy Breast Form' },
      { name: 'Nature Nest™',    slug: 'nature-nest',    technical: 'Underarm Pillow' },
      { name: 'FlowSleeve™',     slug: 'flowsleeve',     technical: 'Lymphedema Sleeve' },
      { name: 'Nest Carry™',     slug: 'nest-carry',     technical: 'Recovery Kit' },
    ],
  },
  {
    name: 'Hair & Confidence',
    slug: 'hair-confidence',
    description: 'For coverage, confidence, and feeling like yourself',
    products: [
      { name: 'AirBloom™',    slug: 'airbloom',    technical: 'Chemo Headscarf' },
      { name: 'Willow Wrap™', slug: 'willow-wrap', technical: 'Alopecia Head Wrap' },
      { name: 'BrowBloom™',   slug: 'browbloom',   technical: 'Eyebrow Prosthesis' },
      { name: 'BloomCrown™',  slug: 'bloomcrown',  technical: 'Cranial Prosthesis' },
    ],
  },
  {
    name: 'Everyday Wellness',
    slug: 'everyday-wellness',
    description: 'For daily comfort and personal care',
    products: [
      { name: 'PetalWrap™',  slug: 'petalwrap',  technical: 'Bamboo Bath Towel' },
      { name: 'DewLeaf™',    slug: 'dewleaf',    technical: 'Recovery Face Towel' },
      { name: 'BloomTips™',  slug: 'bloomtips',  technical: 'Press-On Nails' },
    ],
  },
]

export default function Header() {
  const [menuOpen, setMenuOpen]                 = useState(false)
  const [shopOpen, setShopOpen]                 = useState(false)
  const [mobileShopOpen, setMobileShopOpen]     = useState(false)
  const [announcementDismissed, setAnnouncementDismissed] = useState(true)
  const [isSearchOpen, setIsSearchOpen]         = useState(false)

  const shopRef    = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const dismissed = localStorage.getItem('nuv_bar_dismissed')
    setAnnouncementDismissed(dismissed === 'true')
  }, [])

  // Close mega-menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
        setMobileShopOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const dismissAnnouncement = () => {
    setAnnouncementDismissed(true)
    localStorage.setItem('nuv_bar_dismissed', 'true')
  }

  const openShop  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setShopOpen(true) }
  const closeShop = () => { closeTimer.current = setTimeout(() => setShopOpen(false), 180) }

  const { items } = useCart()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 border-b border-[#2c1f1a]/[0.06] bg-[#faf7f2]/95 shadow-[0_4px_18px_rgba(44,31,26,0.04)] backdrop-blur-md">

      {/* ── ANNOUNCEMENT BAR ── */}
      {!announcementDismissed && (
        <div className="relative flex h-8 w-full items-center justify-center bg-[#884d53] px-12 text-[12px] font-medium tracking-wide text-white">
          <span className="hidden md:inline">Free shipping in India &nbsp;·&nbsp; COD available &nbsp;·&nbsp; Discreet packaging</span>
          <span className="inline md:hidden">Free shipping in India &nbsp;·&nbsp; COD available</span>
          <button
            onClick={dismissAnnouncement}
            className="absolute right-4 flex h-5 w-5 items-center justify-center text-white/70 transition hover:text-white"
            aria-label="Dismiss announcement"
          >✕</button>
        </div>
      )}

      {/* ── MAIN NAV ROW ── */}
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 lg:px-8">

        <Logo href="/" />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">

          {/* SHOP — mega-menu trigger */}
          <div
            onMouseEnter={openShop}
            onMouseLeave={closeShop}
          >
            <button
              className="flex items-center gap-1 font-medium text-[#2c1f1a]/85 transition hover:text-[#884d53]"
              aria-expanded={shopOpen}
              aria-haspopup="true"
              onClick={() => setShopOpen(!shopOpen)}
            >
              Shop
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${shopOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* MEGA-MENU DROPDOWN */}
            <AnimatePresence>
            {shopOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="fixed left-0 top-[76px] w-[100vw] border-y border-[#1c1c18]/[0.08] bg-[#faf7f2] py-[32px] shadow-sm"
                onMouseEnter={openShop}
                onMouseLeave={closeShop}
              >
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                  <div className="grid grid-cols-3 gap-0">
                    {shopCategories.map((cat, i) => (
                      <div
                        key={cat.slug}
                        className={`${i < shopCategories.length - 1 ? 'border-r border-[#1c1c18]/[0.08] pr-12 mr-0' : ''} ${i > 0 ? 'pl-12' : ''}`}
                      >
                        {/* Category Header */}
                        <Link
                          href={`/collections/${cat.slug}`}
                          className="group mb-[12px] block"
                          onClick={() => setShopOpen(false)}
                        >
                          <h3 className="text-[11px] uppercase tracking-widest text-[#7a6f6a] group-hover:text-[#884d53] transition-colors">
                            {cat.name}
                          </h3>
                        </Link>

                        {/* Product Links */}
                        <ul className="flex flex-col">
                          {cat.products.map(p => (
                            <li key={p.slug}>
                              <Link
                                href={`/products/${p.slug}`}
                                className="block text-[14px] text-[#1c1c18] leading-[2] hover:text-[#884d53] transition-colors"
                                onClick={() => setShopOpen(false)}
                              >
                                {p.name}
                                <span className="text-[#ded0bf] mx-1">|</span>
                                <span className="text-[12px] text-[#7a6f6a]">{p.technical}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </div>

          <Link href="/about"        className="font-medium text-[#2c1f1a]/85 transition hover:text-[#884d53]">Our Story</Link>
          <Link href="/contact"      className="font-medium text-[#2c1f1a]/85 transition hover:text-[#884d53]">Contact</Link>
        </nav>

        {/* DESKTOP ICONS */}
        <div className="flex items-center gap-4 lg:gap-5">
          <button onClick={() => setIsSearchOpen(true)} className="text-[#2c1f1a]/85 transition hover:text-[#884d53]" aria-label="Search products">
            <Search className="h-5 w-5" />
          </button>

          <Link
            href="/wishlist"
            className="text-[#1c1c18] transition hover:text-[#884d53]"
            aria-label="Wishlist"
          >
            <Heart size={20} strokeWidth={1.5} />
          </Link>


          {/* Desktop cart — pill with label */}
          <Link
            href="/cart"
            className="hidden md:inline-flex h-[40px] items-center gap-2 rounded-full border border-[#2c1f1a]/20 px-4 text-[14px] font-medium text-[#1c1c18] transition hover:bg-[#faf7f2]"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="whitespace-nowrap">Cart ({cartCount})</span>
          </Link>
          {/* Mobile cart — icon with badge */}
          <Link
            href="/cart"
            className="relative md:hidden text-[#1c1c18] transition hover:text-[#884d53]"
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#884d53] text-[10px] font-bold text-white leading-none">
                {cartCount}
              </span>
            )}
          </Link>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="border-t border-[#2c1f1a]/[0.06] bg-[#faf7f2] overflow-hidden md:hidden"
        >
        <div className="px-4 pb-6 overflow-y-auto max-h-[calc(100vh-76px)]">
          <nav className="space-y-1 pt-3">

            {/* Shop accordion */}
            <div>
              <button
                className="flex w-full items-center justify-between py-3 font-semibold text-[#1c1c18]"
                onClick={() => setMobileShopOpen(!mobileShopOpen)}
              >
                <span>Shop</span>
                <ChevronDown className={`h-5 w-5 text-[#847374] transition-transform ${mobileShopOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileShopOpen && (
                <div className="mb-3 space-y-5 pl-3 border-l-2 border-[#884d53]/20 ml-1">
                  {shopCategories.map(cat => (
                    <div key={cat.slug}>
                      <Link
                        href={`/collections/${cat.slug}`}
                        className="block py-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#884d53]"
                        onClick={() => setMenuOpen(false)}
                      >
                        {cat.name}
                      </Link>
                      {cat.products.map(p => (
                        <Link
                          key={p.slug}
                          href={`/products/${p.slug}`}
                          className="block py-2.5 text-[14px] text-[#2c1f1a]/80 hover:text-[#884d53] transition-colors pl-2"
                          onClick={() => setMenuOpen(false)}
                        >
                          {p.name}
                          <span className="text-[#ded0bf] mx-1">|</span>
                          <span className="text-[12px] text-[#7a6f6a]">{p.technical}</span>
                        </Link>
                      ))}
                    </div>
                  ))}

                  <Link
                    href="/products"
                    className="block py-1.5 text-[14px] font-semibold text-[#884d53] pl-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Shop All Products →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about"   className="block py-3 font-medium text-[#2c1f1a]/80 border-t border-[#2c1f1a]/[0.06]" onClick={() => setMenuOpen(false)}>Our Story</Link>
            <Link href="/contact" className="block py-3 font-medium text-[#2c1f1a]/80 border-t border-[#2c1f1a]/[0.06]" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
        </motion.div>
      )}
      </AnimatePresence>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
