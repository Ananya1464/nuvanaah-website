'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, ChevronDown, Menu, X, Heart } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { useCart } from '@/lib/cart-context'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Get cart count from context
  const { itemCount } = useCart()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const categories = [
    { name: 'Post-Surgery Essentials', href: '/products?category=mastectomy', description: 'Bras, prosthetics & more' },
    { name: 'Chemo Comfort Wear', href: '/products?category=chemotherapy', description: 'Port shirts, caps & comfort' },
    { name: 'Wig Care & Accessories', href: '/products?category=wigs', description: 'Premium hair solutions' },
    { name: 'Compression & Recovery', href: '/products?category=lymphedema', description: 'Compression & support' },
  ]

  const navLinks = [
    { name: 'Shop', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-white ${scrolled
          ? 'shadow-soft py-3'
          : 'py-4'
          }`}
      >
        {/* Main Header - Single unified header */}
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Logo href="/" className="flex-shrink-0" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                onBlur={() => setTimeout(() => setCategoriesOpen(false), 200)}
                className="flex items-center gap-1 text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {categoriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-card border border-gray-100 py-2 animate-slide-down">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="block px-4 py-3 hover:bg-teal-50 transition-colors"
                    >
                      <p className="font-medium text-gray-900">{cat.name}</p>
                      <p className="text-sm text-gray-500">{cat.description}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Section - Icons */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              className="btn-icon hidden sm:flex"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className="btn-icon hidden sm:flex" aria-label="Wishlist">
              <Heart className="w-5 h-5 text-gray-600" />
            </Link>

            {/* Cart - Now dynamic! */}
            <Link href="/cart" className="btn-icon relative" aria-label="Shopping Cart">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden btn-icon"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl animate-slide-down overflow-y-auto">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Logo href="/" variant="text-only" />
              <button
                onClick={() => setMenuOpen(false)}
                className="btn-icon"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="input pl-12"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="px-4 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-lg font-medium text-gray-800 hover:text-teal-600 border-b border-gray-100 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Categories Accordion */}
              <div className="py-4 border-b border-gray-100">
                <button
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                >
                  Categories
                  <ChevronDown className={`w-5 h-5 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                {categoriesOpen && (
                  <div className="mt-3 pl-4 space-y-3">
                    {categories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="block py-4 text-lg font-medium text-gray-800 hover:text-teal-600 border-b border-gray-100 transition-colors"
              >
                Wishlist
              </Link>
            </nav>

            {/* Contact Section */}
            <div className="p-4 mt-auto bg-cream-100">
              <p className="text-sm text-gray-600 mb-3">Need help choosing?</p>
              <a
                href="tel:+919819461612"
                className="btn-primary w-full justify-center mb-2"
              >
                Call: +91-9819461612
              </a>
              <a
                href="https://wa.me/919819461612"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
