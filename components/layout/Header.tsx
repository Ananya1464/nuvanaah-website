'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, ChevronDown, Menu, X, Heart } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  
  // Use real cart data
  const { items } = useCart()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
  
  // Use real wishlist data
  const { items: wishlistItems } = useWishlist()
  const wishlistCount = wishlistItems.length

  const categories = [
    { name: 'Mastectomy', href: '/products/category/mastectomy' },
    { name: 'Chemotherapy', href: '/products/category/chemotherapy' },
    { name: 'Wigs & Headwear', href: '/products/category/wigs' },
    { name: 'Lymphedema Care', href: '/products/category/lymphedema' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo href="/" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/products" className="hover:text-amber-600 transition">
            Shop
          </Link>
          <div className="relative">
            <button 
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-1 hover:text-amber-600 transition"
              aria-expanded={categoriesOpen}
              aria-haspopup="true"
            >
              Categories <ChevronDown className="w-4 h-4" />
            </button>
            {categoriesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48 border border-gray-100">
                <div className="py-2">
                  {categories.map(cat => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={() => setCategoriesOpen(false)}
                      className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-amber-600 transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-amber-600 transition">
            Blog
          </Link>
          <Link href="/consultations" className="hover:text-amber-600 transition">
            Free Consultation
          </Link>
        </nav>

        {/* Icons & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button 
            className="hover:text-amber-600 transition"
            aria-label="Search products"
          >
            <Search className="w-5 h-5" />
          </button>
          
          {/* Wishlist with count */}
          <Link href="/wishlist" className="relative hover:text-amber-600 transition" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {wishlistCount}
              </span>
            )}
          </Link>
          
          {/* Cart with dynamic count */}
          <Link href="/cart" className="relative hover:text-amber-600 transition" aria-label="Shopping cart">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {cartCount}
              </span>
            )}
          </Link>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white p-4">
          <nav className="space-y-2">
            <Link 
              href="/products" 
              className="block py-2 hover:text-amber-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <div className="py-2 font-medium text-gray-500 text-sm">Categories</div>
            {categories.map(cat => (
              <Link
                key={cat.name}
                href={cat.href}
                className="block py-2 pl-4 text-sm text-gray-600 hover:text-amber-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <Link 
              href="/about" 
              className="block py-2 hover:text-amber-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="block py-2 hover:text-amber-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/consultations" 
              className="block py-2 hover:text-amber-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
