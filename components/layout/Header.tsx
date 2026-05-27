'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, X, Heart } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [announcementDismissed, setAnnouncementDismissed] = useState(true)

  useEffect(() => {
    const dismissed = localStorage.getItem('nuv_bar_dismissed')
    setAnnouncementDismissed(dismissed === 'true')
  }, [])

  const dismissAnnouncement = () => {
    setAnnouncementDismissed(true)
    localStorage.setItem('nuv_bar_dismissed', 'true')
  }

  // Use real cart data
  const { items } = useCart()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  // Use real wishlist data
  const { items: wishlistItems } = useWishlist()
  const wishlistCount = wishlistItems.length

  return (
    <header className="sticky top-0 z-50 border-b border-[#2c1f1a]/[0.06] bg-[#faf7f2]/90 shadow-[0_4px_18px_rgba(44,31,26,0.04)] backdrop-blur-md">
      {!announcementDismissed && (
        <div className="relative flex h-8 w-full items-center justify-center bg-primary-600 px-12 text-[12px] font-medium tracking-wide text-white">
          <span className="hidden md:inline">Free shipping on orders above ₹999 &nbsp;·&nbsp; COD available</span>
          <span className="inline md:hidden">Free shipping ₹999+ &nbsp;·&nbsp; COD available</span>
          <button
            onClick={dismissAnnouncement}
            className="absolute right-4 flex h-5 w-5 items-center justify-center text-white/70 transition hover:text-white"
            aria-label="Dismiss announcement"
          >
            ✕
          </button>
        </div>
      )}
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo href="/" />

        <nav className="hidden md:flex gap-6">
          <Link href="/products/category/post-surgery" className="font-medium text-text-secondary transition hover:text-primary-600">
            Post-Surgery
          </Link>
          <Link href="/products/category/wigs-hair" className="font-medium text-text-secondary transition hover:text-primary-600">
            Wigs & Hair
          </Link>
          <Link href="/products/category/lymphedema" className="font-medium text-text-secondary transition hover:text-primary-600">
            Lymphedema
          </Link>
          <Link href="/products/category/chemo-essentials" className="font-medium text-text-secondary transition hover:text-primary-600">
            Chemo Essentials
          </Link>
          <Link href="/products/category/sensitive-skin" className="font-medium text-text-secondary transition hover:text-primary-600">
            Sensitive Skin
          </Link>

        </nav>

        <div className="flex items-center gap-4 lg:gap-5">
          <button className="text-[#2c1f1a]/85 transition hover:text-[#884d53]" aria-label="Search products">
            <Search className="h-5 w-5" />
          </button>

          <Link href="/wishlist" className="relative text-[#2c1f1a]/85 transition hover:text-[#884d53]" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 ? (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#7B9E87] px-1 text-[10px] font-medium text-white">
                {wishlistCount}
              </span>
            ) : null}
          </Link>

          <Link
            href="/cart"
            className="inline-flex h-[40px] items-center gap-2 rounded-full border border-border px-4 text-[14px] font-medium text-text-primary transition hover:bg-surface-low"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="whitespace-nowrap">Cart ({cartCount})</span>
          </Link>


          
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

      {menuOpen && (
        <div className="border-t border-[#2c1f1a]/[0.06] bg-[#faf7f2] px-4 py-4 md:hidden">
          <nav className="space-y-1">
            <Link href="/products/category/post-surgery" className="block py-2 font-medium text-[#2c1f1a]/80 transition hover:text-[#884d53]" onClick={() => setMenuOpen(false)}>
              Post-Surgery
            </Link>
            <Link href="/products/category/wigs-hair" className="block py-2 font-medium text-[#2c1f1a]/80 transition hover:text-[#884d53]" onClick={() => setMenuOpen(false)}>
              Wigs & Hair
            </Link>
            <Link href="/products/category/lymphedema" className="block py-2 font-medium text-[#2c1f1a]/80 transition hover:text-[#884d53]" onClick={() => setMenuOpen(false)}>
              Lymphedema
            </Link>
            <Link href="/products/category/chemo-essentials" className="block py-2 font-medium text-[#2c1f1a]/80 transition hover:text-[#884d53]" onClick={() => setMenuOpen(false)}>
              Chemo Essentials
            </Link>
            <Link href="/products/category/sensitive-skin" className="block py-2 font-medium text-[#2c1f1a]/80 transition hover:text-[#884d53]" onClick={() => setMenuOpen(false)}>
              Sensitive Skin
            </Link>

          </nav>
        </div>
      )}
    </header>
  )
}
