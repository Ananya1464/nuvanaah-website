'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ProductFilterProps {
  onCategoryChange?: (category: string) => void
  onPriceChange?: (min: number, max: number) => void
}

export default function ProductFilter({
  onCategoryChange,
  onPriceChange,
}: ProductFilterProps) {
  const [expandedFilters, setExpandedFilters] = useState<string[]>([
    'category',
  ])

  const toggleFilter = (filterName: string) => {
    setExpandedFilters((prev) =>
      prev.includes(filterName)
        ? prev.filter((f) => f !== filterName)
        : [...prev, filterName]
    )
  }

  const categories = [
    'Post-Surgery Essentials',
    'Chemo Comfort Wear',
    'Wig Care & Accessories',
    'Compression & Recovery',
  ]

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="border-b border-gray-200 pb-6">
        <button
          onClick={() => toggleFilter('category')}
          className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-amber-600 transition"
        >
          Category
          <ChevronDown
            className={`w-5 h-5 transition-transform ${expandedFilters.includes('category') ? 'rotate-180' : ''
              }`}
          />
        </button>

        {expandedFilters.includes('category') && (
          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                  onChange={(e) => {
                    if (e.target.checked && onCategoryChange) {
                      onCategoryChange(category)
                    }
                  }}
                />
                <span className="text-gray-600 hover:text-gray-800">
                  {category}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="border-b border-gray-200 pb-6">
        <button
          onClick={() => toggleFilter('price')}
          className="w-full flex items-center justify-between font-semibold text-gray-800 hover:text-amber-600 transition"
        >
          Price
          <ChevronDown
            className={`w-5 h-5 transition-transform ${expandedFilters.includes('price') ? 'rotate-180' : ''
              }`}
          />
        </button>

        {expandedFilters.includes('price') && (
          <div className="mt-4 space-y-3">
            {[
              { label: 'Under ₹500', min: 0, max: 500 },
              { label: '₹500 - ₹1000', min: 500, max: 1000 },
              { label: '₹1000 - ₹2000', min: 1000, max: 2000 },
              { label: 'Over ₹2000', min: 2000, max: Infinity },
            ].map((range) => (
              <label
                key={range.label}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                  onChange={(e) => {
                    if (e.target.checked && onPriceChange) {
                      onPriceChange(range.min, range.max)
                    }
                  }}
                />
                <span className="text-gray-600 hover:text-gray-800">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* In Stock Filter */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
            defaultChecked
          />
          <span className="text-gray-600 hover:text-gray-800">
            In Stock Only
          </span>
        </label>
      </div>
    </div>
  )
}
