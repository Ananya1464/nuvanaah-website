'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { X, Search } from 'lucide-react'
import { getPublicProducts } from '@/lib/products-data'

export default function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      // Small timeout ensures the input is rendered and focusable
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
      setDebouncedQuery('')
    }
  }, [isOpen])

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Debounce query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim())
    }, 200)
    return () => clearTimeout(timer)
  }, [query])

  if (!isOpen) return null

  const products = getPublicProducts()
  
  let results: typeof products = []
  if (debouncedQuery.length >= 2) {
    const lowerQuery = debouncedQuery.toLowerCase()
    results = products.filter(p => {
      const matchName = p.name.toLowerCase().includes(lowerQuery)
      const matchCategory = p.categories?.[0]?.name.toLowerCase().includes(lowerQuery)
      return matchName || matchCategory
    })
  }

  return (
    <div 
      className="fixed top-[76px] left-0 w-[100vw] z-40 bg-[#faf7f2] animate-in fade-in duration-150 ease-out"
      style={{ boxShadow: '0 8px 24px rgba(28,28,24,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 lg:right-8 top-8 text-[#7a6f6a] hover:text-[#1c1c18] transition-colors"
          aria-label="Close search"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative flex items-center border-b border-[#1c1c18]/15 pb-3 pr-10">
          <Search className="w-[18px] h-[18px] text-[#7a6f6a] mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[18px] text-[#1c1c18] placeholder-[#7a6f6a] focus:outline-none"
          />
        </div>

        {debouncedQuery.length >= 2 && (
          <div className="mt-4 max-h-[60vh] overflow-y-auto">
            {results.length > 0 ? (
              <ul className="flex flex-col">
                {results.map((product) => {
                  let specialNote = null;
                  if (product.id === 'dewleaf') {
                    specialNote = <span className="ml-3 text-[11px] bg-[#f5f0e8] text-[#7a6f6a] px-2.5 py-0.5 rounded-full whitespace-nowrap">Price on request</span>;
                  } else if (product.id === 'bloomcrown') {
                    specialNote = <span className="ml-3 text-[11px] bg-[#f5f0e8] text-[#446651] px-2.5 py-0.5 rounded-full whitespace-nowrap">Consultation required</span>;
                  }
                  
                  return (
                    <li key={product.id}>
                      <Link
                        href={`/products/${product.slug}`}
                        onClick={onClose}
                        className="group flex items-center justify-between w-full py-3 px-3 -mx-3 hover:bg-[#f5f0e8] transition-colors rounded-md"
                      >
                        <div className="flex items-center">
                          <span className="text-[15px] text-[#1c1c18] font-medium group-hover:text-[#884d53] transition-colors">
                            {product.name}
                          </span>
                          {specialNote}
                        </div>
                        <span className="text-[12px] text-[#7a6f6a] uppercase tracking-wide">
                          {product.categoryNav}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="text-[#7a6f6a] text-[15px] py-4 px-3">
                No products found for &apos;{debouncedQuery}&apos;
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
