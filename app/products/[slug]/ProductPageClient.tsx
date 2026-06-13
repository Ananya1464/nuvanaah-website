'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShoppingCart, Heart,
  ChevronDown, ChevronLeft, ChevronRight, Check, X, Maximize2
} from 'lucide-react'
import type { Product } from '@/lib/types'
import { getRelatedProducts } from '@/lib/products-data'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'
import { trackViewItem, trackAddToCart } from '@/lib/analytics'

// --- HELPERS ---

const formatParagraphs = (text: string | undefined, className = 'mb-4 last:mb-0') => {
  if (!text) return null
  return text.split('\n\n').filter(p => p.trim()).map((para, idx) => (
    <p key={idx} className={className}>{para.trim()}</p>
  ))
}

const getSwatchBgColor = (colorName: string): string => {
  const n = colorName.toLowerCase()
  if (n.includes('aparajita')) return '#4c6ef5'
  if (n.includes('ebony')) return '#1c1c18'
  if (n.includes('dusty miller')) return '#a2b4a5'
  if (n.includes('camellia')) return '#d6336c'
  if (n.includes('magnolia')) return '#fbcfe8'
  if (n.includes('jade vine')) return '#8ae3c7'
  if (n.includes('coffee bean')) return '#4a3728'
  if (n.includes('bamboo woods')) return '#d2b48c'
  return '#ded0bf'
}

// ₹ ₹ ₹ SUB-COMPONENTS ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ 

function ColorSwatch({ name, selected }: { name: string; selected: boolean }) {
  return (
    <div
      className={`w-8 h-8 rounded-full border-2 transition-all ${selected ? 'ring-2 ring-[#884d53] ring-offset-2 border-white' : 'border-[rgba(28,28,24,0.2)]'}`}
      style={{ backgroundColor: getSwatchBgColor(name) }}
      title={name}
    />
  )
}

function AccordionSection({
  id,
  title,
  isOpen,
  onToggle,
  children,
}: {
  id: string
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="py-5 border-b border-[rgba(28,28,24,0.1)] last:border-b-0">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group py-1"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-[#1c1c18] group-hover:text-[#884d53] transition-colors tracking-tight">
          {title}
        </h2>
        <ChevronDown
          className={`w-5 h-5 text-[#884d53] flex-shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 mt-5' : 'opacity-0'}`}
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden min-h-0">
          {children}
        </div>
      </div>
    </div>
  )
}

// ₹ ₹ ₹ MAIN PAGE ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ 

type ProductPageClientProps = {
  product: Product
  prevProduct?: { slug: string; name: string; image?: string } | null
  nextProduct?: { slug: string; name: string; image?: string } | null
}

export default function ProductPageClient({ product, prevProduct, nextProduct }: ProductPageClientProps) {

  const initialImages = product.images?.map(img => img.src).filter((src): src is string => !!src) || []
  const [productImages, setProductImages] = useState<string[]>(initialImages)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const { addItem } = useCart()
  const { isInWishlist, toggleItem } = useWishlist()

  const isComplimentaryGift = product.isComplimentaryGift === true || product.tags?.includes('gift') === true

  // Variant states
  const [selectedColour, setSelectedColour] = useState(product.variantOptions?.[0] || '')
  const [selectedPrint, setSelectedPrint] = useState(product.variantOptions?.[0] || '')
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedVersion, setSelectedVersion] = useState('Indian')
  const [selectedShade, setSelectedShade] = useState(product.variantOptions?.[0] || 'Coffee Bean')
  const [selectedStyle, setSelectedStyle] = useState(product.variantOptions?.[0] || 'Long Balayage')
  const [selectedSide, setSelectedSide] = useState<'Left' | 'Right' | ''>('')

  // BloomCrown measurement inputs
  const [headCircumference, setHeadCircumference] = useState('')
  const [frontToNape, setFrontToNape] = useState('')
  const [earToEar, setEarToEar] = useState('')

  useEffect(() => {
    setProductImages(initialImages)
    setSelectedImage(0)
    setIsAutoPlaying(true)

    if (product.variantOptions && product.variantOptions.length > 0) {
      if (product.variantLabel === 'Colour') setSelectedColour(product.variantOptions[0])
      else if (product.variantLabel === 'Print') setSelectedPrint(product.variantOptions[0])
      else if (product.variantLabel === 'Shade') setSelectedShade(product.variantOptions[0])
      else if (product.variantLabel === 'Version') setSelectedVersion('Indian')
      else if (product.variantLabel === 'Style') setSelectedStyle(product.variantOptions[0])
    }

    trackViewItem({
      id: String(product.id),
      name: product.name,
      category: product.categories?.[0]?.name ?? 'Wellness',
      price: Number(product.price),
    })
  }, [product])

  // Content accordion states
  const [isStoryOpen, setIsStoryOpen] = useState(true)
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false)
  const [isIncludedOpen, setIsIncludedOpen] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
  const [isCareOpen, setIsCareOpen] = useState(false)
  const [isFaqsOpen, setIsFaqsOpen] = useState(false)

  // Inner accordion states
  const [isStoryExpanded, setIsStoryExpanded] = useState(false)
  const [isMaterialsExpanded, setIsMaterialsExpanded] = useState(false)
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState(-1)
  const [showAllFAQs, setShowAllFAQs] = useState(false)
  const [showAllCare, setShowAllCare] = useState(false)
  const [showAllDonts, setShowAllDonts] = useState(false)

  // Auto-play gallery
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    if (!isAutoPlaying || productImages.length <= 1) return
    intervalRef.current = setInterval(() => {
      setSelectedImage(prev => (prev + 1) % productImages.length)
    }, 4000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isAutoPlaying, productImages.length])

  // Lightbox keyboard + scroll lock
  useEffect(() => {
    if (!isLightboxOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false)
      else if (e.key === 'ArrowRight' && productImages.length > 1)
        setSelectedImage(prev => (prev + 1) % productImages.length)
      else if (e.key === 'ArrowLeft' && productImages.length > 1)
        setSelectedImage(prev => (prev - 1 + productImages.length) % productImages.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isLightboxOpen, productImages])

  const goToImage = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false)
    setSelectedImage(prev =>
      direction === 'next'
        ? (prev + 1) % productImages.length
        : (prev - 1 + productImages.length) % productImages.length
    )
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  // ₹ ₹ ₹ VARIANT SELECTOR ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ 
  const renderVariantSelector = () => {
    if (!product) return null
    if (!product.variantLabel || !product.variantOptions || product.variantOptions.length === 0) return null

    const pillButton = (label: string, isSelected: boolean, onClick: () => void) => (
      <button
        key={label}
        type="button"
        role="radio"
        aria-checked={isSelected}
        onClick={onClick}
        className={`px-5 py-2 rounded-full border text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#884d53] focus:ring-offset-1 ${
          isSelected
            ? 'bg-[#884d53]/5 border-[#884d53] text-[#884d53]'
            : 'bg-white border-[rgba(28,28,24,0.2)] text-[#1c1c18] hover:border-[#884d53]/50'
        }`}
      >
        {label}
      </button>
    )



    // Willow Support: Colour swatches + Size + Size guide
    if (product.id === 'willow-support') {
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a]">Colour</p>
            <div role="radiogroup" aria-label="Colour" className="flex gap-3">
              {['Aparajita', 'Ebony', 'Dusty Miller'].map(col => (
                <button key={col} type="button" role="radio" aria-checked={selectedColour === col}
                  aria-label={col} onClick={() => setSelectedColour(col)} className="focus:outline-none focus:ring-2 focus:ring-[#884d53] focus:ring-offset-1 rounded-full">
                  <ColorSwatch name={col} selected={selectedColour === col} />
                </button>
              ))}
            </div>
            {selectedColour && <p className="text-[11px] text-[#7a6f6a] font-medium">{selectedColour}</p>}
          </div>
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a]">Size</p>
            <div role="radiogroup" aria-label="Size" className="flex flex-wrap gap-2">
            {['32', '34', '36', '38', '40', '42', '44'].map(sz => (
                <button key={sz} type="button" role="radio" aria-checked={selectedSize === sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`w-10 h-10 rounded-full border text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#884d53] ${
                    selectedSize === sz ? 'bg-[#884d53] text-white border-[#884d53]' : 'bg-white border-[rgba(28,28,24,0.2)] text-[#1c1c18] hover:border-[#884d53]/50'
                  }`}>{sz}</button>
              ))}
            </div>
          </div>
          {/* Size Guide */}
          <div className="bg-[#faf7f2] rounded-xl p-4 border border-[#ded0bf]/60">
            <p className="text-[11px] font-bold text-[#884d53] uppercase tracking-wider mb-3">Find Your Size</p>
            <div className="space-y-1 mb-3">
              <p className="text-[11px] font-semibold text-[#1c1c18]">Underbust (Band Size)</p>
              <p className="text-[10px] text-[#7a6f6a] leading-relaxed">Measure around your ribcage directly under the bust. Keep the tape snug but not tight. Your measurement in inches is your size.</p>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[10px]">
              {[['32"','Size 32'],['34"','Size 34'],['36"','Size 36'],['38"','Size 38'],['40"','Size 40'],['42"','Size 42'],['44"','Size 44']].map(([meas, size]) => (
                <div key={size} className="flex justify-between bg-white rounded-lg px-2.5 py-1 border border-[#ded0bf]/40">
                  <span className="text-[#524344]">{meas}</span>
                  <span className="font-semibold text-[#1c1c18]">{size}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#7a6f6a] mt-2">Not sure? <a href="https://wa.me/919076041779" target="_blank" rel="noopener noreferrer" className="text-[#884d53] font-semibold hover:underline">Chat with us →</a></p>
          </div>
        </div>
      )
    }

    // FlowSleeve: Indian / Imported version
    if (product.id === 'flowsleeve') {
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a]">Version</p>
            <div role="radiogroup" aria-label="Version" className="flex gap-2 flex-wrap">
              {[['Indian', '₹ 1,575'], ['Imported', '₹ 2,840']].map(([ver, price]) => (
                <button key={ver} type="button" role="radio" aria-checked={selectedVersion === ver}
                  onClick={() => setSelectedVersion(ver)}
                  className={`px-5 py-2.5 rounded-full border text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#884d53] ${
                    selectedVersion === ver
                      ? 'bg-[#884d53]/5 border-[#884d53] text-[#884d53]'
                      : 'bg-white border-[rgba(28,28,24,0.2)] text-[#1c1c18] hover:border-[#884d53]/50'
                  }`}>{ver} · {price}</button>
              ))}
            </div>
            <p className="text-[11px] text-[#7a6f6a] leading-relaxed">Both versions include the shoulder holding belt and provide the same gentle compression.</p>
          </div>
        </div>
      )
    }

    // BloomForm: Left / Right side selector + size guide
    if (product.id === 'bloomform') {
      return (
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a]">Choose Your Side</p>
            <div role="radiogroup" aria-label="Side" className="flex gap-3">
              {(['Left', 'Right'] as const).map(side => (
                <button
                  key={side}
                  type="button"
                  role="radio"
                  aria-checked={selectedSide === side}
                  onClick={() => setSelectedSide(side)}
                  className={`px-8 py-2.5 rounded-full border text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#884d53] focus:ring-offset-1 ${
                    selectedSide === side
                      ? 'bg-[#884d53]/5 border-[#884d53] text-[#884d53]'
                      : 'bg-white border-[rgba(28,28,24,0.2)] text-[#1c1c18] hover:border-[#884d53]/50'
                  }`}
                >
                  {side}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-[#7a6f6a] leading-relaxed">
              Left and Right are sold separately. Each form is shaped specifically for its side and they are not interchangeable.
            </p>
            {!selectedSide && (
              <p className="text-[11px] text-[#884d53] font-semibold pt-1">Please select Left or Right before adding to cart.</p>
            )}
          </div>

          {/* Find Your Size */}
          <div className="bg-[#faf7f2] rounded-xl p-4 border border-[#ded0bf]/60">
            <p className="text-[11px] font-bold text-[#884d53] uppercase tracking-wider mb-3">Find Your Size — Just 2 Measurements</p>
            <div className="space-y-2 mb-4">
              <div>
                <p className="text-[11px] font-semibold text-[#1c1c18]">① Underbust (Band Size)</p>
                <p className="text-[10px] text-[#7a6f6a] leading-relaxed">Measure around your ribcage directly under the bust. Keep the tape snug but not tight.</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#1c1c18]">② Full Chest (Bust Size)</p>
                <p className="text-[10px] text-[#7a6f6a] leading-relaxed">Measure around the fullest part of your chest. Wear a non-padded bra while measuring.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-[#ded0bf]/60">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="bg-[#884d53]/8">
                    <th className="py-1.5 px-2 text-left font-bold text-[#7a6f6a] uppercase tracking-wider">Band</th>
                    <th className="py-1.5 px-2 text-left font-bold text-[#7a6f6a] uppercase tracking-wider">Chest</th>
                    <th className="py-1.5 px-2 text-left font-bold text-[#884d53] uppercase tracking-wider">Your Size</th>
                  </tr>
                </thead>
                <tbody>
                  {[['32"','36"','32/36'],['34"','38"','34/38'],['36"','40"','36/40'],['38"','42"','38/42'],['40"','44"','40/44'],['42"','46"','42/46'],['44"','48"','44/48']].map(([band, chest, size], i) => (
                    <tr key={size} className={i % 2 === 0 ? 'bg-white' : 'bg-[#faf7f2]'}>
                      <td className="py-1.5 px-2 text-[#524344]">{band}</td>
                      <td className="py-1.5 px-2 text-[#524344]">{chest}</td>
                      <td className="py-1.5 px-2 font-semibold text-[#1c1c18]">{size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-[#7a6f6a] mt-2 italic">If you are between sizes, choose the larger size for comfort.</p>
          </div>
        </div>
      )
    }

    // BrowBloom: Shade with description
    if (product.id === 'browbloom') {
      const shadeDescriptions: Record<string, string> = {
        'Coffee Bean': 'Warm dark brown — suits medium to deeper South Asian skin tones.',
        'Bamboo Woods': 'Soft cool brown — suits lighter to medium South Asian skin tones.',
      }
      return (
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a]">Shade</p>
          <div role="radiogroup" aria-label="Shade" className="flex gap-2 flex-wrap">
            {['Coffee Bean', 'Bamboo Woods'].map(shade => (
              <button key={shade} type="button" role="radio" aria-checked={selectedShade === shade}
                onClick={() => setSelectedShade(shade)}
                className={`px-5 py-2 rounded-full border text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#884d53] ${
                  selectedShade === shade
                    ? 'bg-[#884d53]/5 border-[#884d53] text-[#884d53]'
                    : 'bg-white border-[rgba(28,28,24,0.2)] text-[#1c1c18] hover:border-[#884d53]/50'
                }`}>{shade}</button>
            ))}
          </div>
          {selectedShade && (
            <p className="text-[11px] text-[#7a6f6a]">{shadeDescriptions[selectedShade]}</p>
          )}
        </div>
      )
    }

    // Nature Nest / Willow Wrap: Print pills
    if (product.variantLabel === 'Print') {
      return (
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a]">Print</p>
          <div role="radiogroup" aria-label="Print" className="flex gap-2 flex-wrap">
            {product.variantOptions.map(print => (
              <button key={print} type="button" role="radio" aria-checked={selectedPrint === print}
                onClick={() => setSelectedPrint(print)}
                className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#884d53] ${
                  selectedPrint === print
                    ? 'bg-[#884d53]/5 border-[#884d53] text-[#884d53]'
                    : 'bg-white border-[rgba(28,28,24,0.2)] text-[#1c1c18] hover:border-[#884d53]/50'
                }`}>{print}</button>
            ))}
          </div>
        </div>
      )
    }

    // PetalWrap / DewLeaf / AirBloom: Colour swatches
    if (product.variantLabel === 'Colour') {
      return (
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a]">Colour</p>
          <div role="radiogroup" aria-label="Colour" className="flex gap-3">
            {product.variantOptions.map(col => (
              <button key={col} type="button" role="radio" aria-checked={selectedColour === col}
                aria-label={col} onClick={() => setSelectedColour(col)}
                className="focus:outline-none focus:ring-2 focus:ring-[#884d53] focus:ring-offset-1 rounded-full">
                <ColorSwatch name={col} selected={selectedColour === col} />
              </button>
            ))}
          </div>
          {selectedColour && <p className="text-[11px] text-[#7a6f6a] font-medium">{selectedColour}</p>}
        </div>
      )
    }

    // BloomCrown: Style + measurements
    if (product.id === 'bloomcrown') {
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a]">Style</p>
            <div role="radiogroup" aria-label="Style" className="flex gap-2 flex-wrap">
              {product.variantOptions.map(style => (
                <button key={style} type="button" role="radio" aria-checked={selectedStyle === style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-5 py-2 rounded-full border text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#884d53] ${
                    selectedStyle === style
                      ? 'bg-[#884d53]/5 border-[#884d53] text-[#884d53]'
                      : 'bg-white border-[rgba(28,28,24,0.2)] text-[#1c1c18] hover:border-[#884d53]/50'
                  }`}>{style}</button>
              ))}
            </div>
          </div>
          <div className="bg-[#884d53]/5 rounded-xl p-4 border border-[#884d53]/10 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-bold text-[#884d53] uppercase tracking-wider">Custom Cap Sizing (inches)</p>
              <a href="/faq#sizing-guide" className="text-[10px] text-[#884d53] font-semibold hover:underline">View sizing guide</a>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Circumference', val: headCircumference, set: setHeadCircumference, ph: 'e.g. 21.5' },
                { label: 'Front to Nape', val: frontToNape, set: setFrontToNape, ph: 'e.g. 14.0' },
                { label: 'Ear to Ear', val: earToEar, set: setEarToEar, ph: 'e.g. 12.5' },
              ].map(({ label, val, set, ph }) => (
                <div key={label}>
                  <label className="block text-[10px] font-semibold text-[#7a6f6a] mb-1">{label}</label>
                  <input type="text" placeholder={ph} value={val} onChange={e => set(e.target.value)}
                    className="w-full text-center text-xs py-2 border border-[rgba(28,28,24,0.15)] rounded-lg focus:outline-none focus:border-[#884d53] bg-white text-[#1c1c18]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    // Fallback
    return (
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a]">{product.variantLabel}</p>
        <div role="radiogroup" className="flex flex-wrap gap-2">
          {product.variantOptions.map(opt => pillButton(opt, false, () => {}))}
        </div>
      </div>
    )
  }

  const wishlisted = isInWishlist(String(product.id))
  const relatedProducts = getRelatedProducts(product)

  let currentPrice = product.price
  if (product.id === 'flowsleeve') {
    currentPrice = selectedVersion === 'Imported' ? 2840 : 1575
  }

  const handleAddToCart = () => {
    let itemName = product.name;
    let itemId = String(product.id);
    
    if (product.id === 'bloomform') {
      if (!selectedSide) return;
      itemName = `${product.name} (${selectedSide})`;
      itemId = `${product.id}-${selectedSide.toLowerCase()}`;
    } else if (product.variantLabel === 'Colour' && selectedColour) {
      itemName = `${product.name} (${selectedColour})`;
      itemId = `${product.id}-${selectedColour.replace(/\s+/g, '-').toLowerCase()}`;
    } else if (product.variantLabel === 'Print' && selectedPrint) {
      itemName = `${product.name} (${selectedPrint})`;
      itemId = `${product.id}-${selectedPrint.replace(/\s+/g, '-').toLowerCase()}`;
    }

    addItem({ id: itemId, name: itemName, price: Number(currentPrice), image: productImages[0] })
    trackAddToCart({
      id: itemId,
      name: itemName,
      category: product.categories?.[0]?.name ?? 'Wellness',
      price: Number(currentPrice),
      quantity: 1,
    })
  }

  const priceDisplay = isComplimentaryGift
    ? 'Complimentary Gift'
    : product.priceOnRequest
      ? 'Price on request'
      : `${product.priceFrom ? 'From ' : ''}₹ ${Number(currentPrice).toLocaleString('en-IN')}`

  const stockStatus = product.stock_status

  // ₹ ₹ ₹ RENDER ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ ₹ 
  return (
    <div className="min-h-screen bg-[#faf7f2] pb-24 lg:pb-0">

      {/* Prev / Next navigator */}
      {(prevProduct || nextProduct) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
          <div className="flex items-center justify-between gap-4">
            {/* Prev */}
            {prevProduct ? (
              <Link
                href={`/products/${prevProduct.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-[rgba(28,28,24,0.08)] bg-white px-3 py-2.5 transition-all hover:border-[#884d53]/30 hover:shadow-sm flex-1 min-w-0"
              >
                <ChevronLeft className="w-4 h-4 shrink-0 text-[#884d53] transition-transform group-hover:-translate-x-0.5" />
                {prevProduct.image && (
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-[#f5f0e8]">
                    <Image src={prevProduct.image} alt="" fill sizes="36px" className="object-cover" />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-[#7a6f6a]">Previous</p>
                  <p className="truncate text-[12px] font-semibold text-[#1c1c18] group-hover:text-[#884d53] transition-colors">{prevProduct.name}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            {/* Next */}
            {nextProduct ? (
              <Link
                href={`/products/${nextProduct.slug}`}
                className="group flex items-center justify-end gap-3 rounded-xl border border-[rgba(28,28,24,0.08)] bg-white px-3 py-2.5 transition-all hover:border-[#884d53]/30 hover:shadow-sm flex-1 min-w-0 text-right"
              >
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-[#7a6f6a]">Next</p>
                  <p className="truncate text-[12px] font-semibold text-[#1c1c18] group-hover:text-[#884d53] transition-colors">{nextProduct.name}</p>
                </div>
                {nextProduct.image && (
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-[#f5f0e8]">
                    <Image src={nextProduct.image} alt="" fill sizes="36px" className="object-cover" />
                  </div>
                )}
                <ChevronRight className="w-4 h-4 shrink-0 text-[#884d53] transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      )}

      {/* ₹ ₹ ₹ HERO ₹ ₹ ₹ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* ₹ ₹ Zone 1: Gallery ₹ ₹ */}
          <div className="space-y-3">
            {/* Main image */}
            <div
              className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white border border-[rgba(28,28,24,0.08)] cursor-zoom-in group shadow-sm"
              onClick={() => setIsLightboxOpen(true)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {productImages.length > 0 ? (
                <>
                  {/* Product image */}
                  <Image
                    src={productImages[selectedImage]}
                    alt={`${product.name} — View ${selectedImage + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.02]"
                    priority={true}
                  />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[#7a6f6a] text-sm">No image</div>
              )}

              {/* Fullscreen hint */}
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-[#7a6f6a]" />
              </div>

              {productImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); goToImage('prev') }}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:scale-105 transition-all text-[#1c1c18]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); goToImage('next') }}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:scale-105 transition-all text-[#1c1c18]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {productImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => { setSelectedImage(idx); setIsAutoPlaying(false) }}
                    aria-label={`View image ${idx + 1}`}
                    aria-current={selectedImage === idx ? 'true' : undefined}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 bg-white transition-all ${
                      selectedImage === idx ? 'border-[#884d53]' : 'border-transparent hover:border-[#884d53]/30'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} — Thumbnail ${idx + 1}`} fill sizes="64px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
            {product.id === 'bloomform' && (
              <p className="text-[12px] text-[#7a6f6a] text-center mt-2 italic">
                Left and Right forms shown for reference. Your order includes one form — as selected.
              </p>
            )}
          </div>

          {/* ₹ ₹ Zone 2: Purchase Block ₹ ₹ */}
          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">

            {/* Category + name */}
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#884d53]">
                {product.categories?.[0]?.name || 'Product'}
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-[#1c1c18] leading-tight tracking-tight">{product.name}</h1>
              {product.subtitle && <p className="text-sm text-[#7a6f6a] font-medium">{product.subtitle}</p>}
              {product.tagline && product.id !== 'dewleaf' && (
                <p className="text-xs italic text-[#7a6f6a]">{product.tagline}</p>
              )}
              {product.technicalNames && product.technicalNames.length > 0 && (
                <p className="text-[11px] text-[#7a6f6a]">
                  Also known as:{' '}
                  {product.technicalNames.map((name, i) => (
                    <span key={name}>
                      {i > 0 && <span className="mx-1 text-[#ded0bf]">|</span>}
                      <span className="font-medium">{name}</span>
                    </span>
                  ))}
                </p>
              )}
            </div>

            {/* Price + badges */}
            <div className="flex items-center gap-3 flex-wrap pb-5 border-b border-[rgba(28,28,24,0.1)]">
              <span className={`text-2xl font-semibold ${product.priceOnRequest || isComplimentaryGift ? 'text-[#7a6f6a] text-lg' : 'text-[#1c1c18]'}`}>
                {priceDisplay}
              </span>
              {product.priceNote && (
                <span className="text-sm font-medium text-[#7a6f6a] self-end pb-[3px] -ml-2">
                  {product.priceNote}
                </span>
              )}
              {(product.isGiftPopular || isComplimentaryGift) && (
                <span className="bg-[#884d53]/8 text-[#884d53] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {isComplimentaryGift ? 'Complimentary Gift' : 'Popular Gift'}
                </span>
              )}
            </div>

            {/* Variant selector */}
            {renderVariantSelector()}

            {/* CTA row */}
            {product.priceOnRequest ? (
              <div className="space-y-3 pt-1">
                <a
                  href="https://wa.me/919076041779"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#884d53] hover:bg-[#6e3d42] text-white py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all text-sm shadow-sm"
                >
                  Register Your Interest →
                </a>
                <p className="text-center text-[11px] text-[#7a6f6a]">We will notify you when DewLeaf is available to order.</p>
              </div>
            ) : product.comingSoon ? (
              <button disabled className="w-full bg-[rgba(28,28,24,0.3)] text-white py-3.5 rounded-full font-semibold text-sm cursor-not-allowed">
                Coming Soon
              </button>
            ) : (product.id === 'bloomcrown') ? (
              <div className="space-y-2 pt-1">
                <Link
                  href="/consultations"
                  className="w-full bg-[#884d53] hover:bg-[#6e3d42] text-white py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all text-sm shadow-sm text-center"
                >
                  Book Consultation
                </Link>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full text-center text-xs font-semibold text-[#884d53] hover:underline py-2"
                >
                  Already know your style? Add to Bag →
                </button>
              </div>
            ) : (
              <div className="space-y-3 pt-1">
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to bag`}
                    onClick={() => { if (stockStatus === 'instock') handleAddToCart() }}
                    className="flex-1 bg-[#884d53] hover:bg-[#6e3d42] text-white py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all text-sm shadow-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Bag
                  </button>
                  <button
                    type="button"
                    aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
                    onClick={() => toggleItem({ id: String(product.id), name: product.name, price: Number(currentPrice), tagline: product.subtitle || '', category: product.categories?.[0]?.name || '' })}
                    className={`w-12 h-12 flex items-center justify-center border rounded-full transition-all flex-shrink-0 ${
                      wishlisted ? 'border-[#884d53] bg-[#884d53]/5' : 'border-[rgba(28,28,24,0.2)] bg-white hover:border-[#884d53]/50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wishlisted ? 'fill-[#884d53] text-[#884d53]' : 'text-[#7a6f6a]'}`} />
                  </button>
                </div>
                {product.whatsappCTA && product.id === 'willow-support' && (
                  <a
                    href="https://wa.me/919076041779"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#884d53] font-semibold hover:underline flex justify-center"
                  >
                    Not sure of your size? Chat with us on WhatsApp →
                  </a>
                )}
              </div>
            )}

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 pt-1 border-t border-[rgba(28,28,24,0.08)] mt-2">
              {['Free shipping in India', 'Quality Assured', '24×7 support'].map(chip => (
                <span key={chip} className="bg-[rgba(28,28,24,0.04)] text-[#7a6f6a] text-[11px] font-medium px-3 py-1.5 rounded-full">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ₹ ₹ ₹ CONTENT ACCORDIONS ₹ ₹ ₹ */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 mt-4">
        <div className="border-t border-[rgba(28,28,24,0.1)]">

          {/* Zone 3 ₹ Story & Details */}
          <AccordionSection id="story" title="Story & Details" isOpen={isStoryOpen} onToggle={() => setIsStoryOpen(v => !v)}>
            <div className="space-y-4">
              <div className="text-sm sm:text-base leading-relaxed text-[#1c1c18] space-y-3">
                {formatParagraphs(product.description)}
              </div>

              {product.fullStory && (
                <div className="pt-4 border-t border-[rgba(28,28,24,0.08)]">
                  <button
                    type="button"
                    onClick={() => setIsStoryExpanded(v => !v)}
                    className="text-[#884d53] hover:text-[#6e3d42] font-semibold text-sm flex items-center gap-1 transition-colors"
                  >
                    {isStoryExpanded ? 'Read less' : 'Read the full story'}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isStoryExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-500 ease-in-out ${isStoryExpanded ? 'opacity-100 mt-4' : 'opacity-0'}`} style={{ gridTemplateRows: isStoryExpanded ? '1fr' : '0fr' }}>
                    <div className="overflow-hidden min-h-0">
                      <div className="text-[#7a6f6a] leading-relaxed text-sm space-y-3">
                        {product.fullStory.split('\n\n').filter(p => p.trim()).map((para, idx) => {
                          // Detect brand narrative blocks (starts with letter name or contains em-dash or quotes)
                          const isNarrative = para.startsWith('"') || /^[A-Z][a-z]+:/.test(para)
                          return isNarrative ? (
                            <p key={idx} className="border-l-2 border-[#884d53] pl-4 italic text-[#7a6f6a]">{para.trim()}</p>
                          ) : (
                            <p key={idx}>{para.trim()}</p>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AccordionSection>

          {/* When to Use section */}
          {product.whenToUse && product.whenToUse.length > 0 && (
            <div className="py-8 border-b border-[rgba(28,28,24,0.1)]">
              <h2 className="text-lg sm:text-xl font-semibold text-[#1c1c18] mb-6 tracking-tight">When to Use {product.name}</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {product.whenToUse.map((card, i) => (
                  <div key={i} className="bg-[#f5f0e8] rounded-xl p-5 flex-1">
                    <h3 className="text-[14px] font-medium text-[#1c1c18] mb-2">{card.heading}</h3>
                    <p className="text-[13px] text-[#7a6f6a] leading-[1.7]">{card.body}</p>
                  </div>
                ))}
              </div>
              {product.whenToUseNote && (
                <div className="mt-3 border border-[rgba(28,28,24,0.15)] rounded-lg px-4 py-3 text-[12px] text-[#7a6f6a]">
                  {product.whenToUseNote}
                </div>
              )}
            </div>
          )}
          {product.id === 'bloomform' && (
            <p className="text-[12px] text-[#7a6f6a] text-center mt-2 italic">
              Both sides shown for reference. Your order includes one form — Left or Right as selected.
            </p>
          )}

          {/* Zone 4 ₹ Key Benefits */}
          {product.benefitsList && product.benefitsList.length > 0 && (
            <AccordionSection id="benefits" title="Key Benefits" isOpen={isBenefitsOpen} onToggle={() => setIsBenefitsOpen(v => !v)}>
              <div className="divide-y divide-[rgba(28,28,24,0.06)]">
                {product.benefitsList.map((ben, i) => (
                  <div key={i} className="py-3 first:pt-0">
                    <button
                      type="button"
                      aria-expanded={expandedBenefit === i}
                      aria-controls={`benefit-panel-${i}`}
                      onClick={() => setExpandedBenefit(expandedBenefit === i ? null : i)}
                      className="w-full flex items-center gap-3 text-left group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#884d53]/8 flex items-center justify-center font-semibold text-[#884d53] text-xs flex-shrink-0 group-hover:bg-[#884d53]/15 transition-colors">
                        {i + 1}
                      </div>
                      <span className="text-sm font-semibold text-[#1c1c18] group-hover:text-[#884d53] transition-colors flex-1 text-left pr-2">
                        {ben.title}
                      </span>
                      <span className="text-[#884d53] font-semibold text-base flex-shrink-0">{expandedBenefit === i ? '-' : '+'}</span>
                    </button>
                    <div
                      id={`benefit-panel-${i}`}
                      className={`grid transition-all duration-200 ease-in-out ${expandedBenefit === i ? 'opacity-100 mt-2' : 'opacity-0'}`}
                      style={{ gridTemplateRows: expandedBenefit === i ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden min-h-0">
                        <p className="pl-10 text-xs text-[#7a6f6a] leading-relaxed">{ben.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionSection>
          )}

          {/* Zone 5 ₹ What's Included */}
          {product.whatsIncluded && product.whatsIncluded.length > 0 && (
            <AccordionSection id="included" title="What's Included" isOpen={isIncludedOpen} onToggle={() => setIsIncludedOpen(v => !v)}>
              {/* Nest Carry & BloomTips get detailed item cards */}
              {(product.id === 'nest-carry' || product.id === 'bloomtips') ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.whatsIncluded.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[rgba(28,28,24,0.08)]">
                      <div className="w-7 h-7 rounded-lg bg-[#884d53] text-white flex items-center justify-center flex-shrink-0 font-bold text-xs">{i + 1}</div>
                      <span className="text-xs font-medium text-[#1c1c18]">{typeof item === 'object' ? item.item : item}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <dl className="space-y-0">
                  {product.whatsIncluded.map((item, i) => {
                    const isObj = typeof item === 'object' && item !== null;
                    return (
                      <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[rgba(28,28,24,0.06)] last:border-b-0">
                        <Check className="w-[14px] h-[14px] text-[#446651] flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <dt className="text-sm font-medium text-[#1c1c18]">{isObj ? item.item : item}</dt>
                          {isObj && item.detail && <dd className="text-xs text-[#7a6f6a] mt-0.5">{item.detail}</dd>}
                        </div>
                      </div>
                    )
                  })}
                </dl>
              )}
            </AccordionSection>
          )}

          {/* Zone 6 ₹ Features & Materials */}
          {product.keyFeatures && product.keyFeatures.length > 0 && (
            <AccordionSection id="features" title="Features & Materials" isOpen={isFeaturesOpen} onToggle={() => setIsFeaturesOpen(v => !v)}>
              <div className="space-y-5">
                {/* Key features checklist */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {product.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-[14px] h-[14px] text-[#446651] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#1c1c18]">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Materials */}
                {product.materialsText && (
                  <div className="pt-4 border-t border-[rgba(28,28,24,0.08)]">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[#7a6f6a] mb-2">Materials</p>
                    <p className="text-xs text-[#7a6f6a] leading-relaxed">
                      {product.materialsText.split('\n\n')[0]}
                    </p>
                    {product.materialsText.split('\n\n').length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setIsMaterialsExpanded(v => !v)}
                          className="text-[#884d53] font-semibold text-xs mt-2 hover:underline flex items-center gap-1"
                        >
                          {isMaterialsExpanded ? 'Show less' : 'See full construction details →'}
                        </button>
                        <div className={`grid transition-all duration-300 ${isMaterialsExpanded ? 'opacity-100 mt-2' : 'opacity-0'}`} style={{ gridTemplateRows: isMaterialsExpanded ? '1fr' : '0fr' }}>
                          <div className="overflow-hidden min-h-0">
                            <div className="text-xs text-[#7a6f6a] leading-relaxed space-y-2">
                              {product.materialsText.split('\n\n').slice(1).map((p, i) => (
                                <p key={i}>{p.trim()}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </AccordionSection>
          )}

          {/* Zone 7 ₹ Care & Instructions */}
          <AccordionSection id="care" title="Care & Instructions" isOpen={isCareOpen} onToggle={() => setIsCareOpen(v => !v)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Do */}
              <div className="bg-[#446651]/6 rounded-xl p-5 border border-[#446651]/12">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#446651] mb-3">Care Instructions</p>
                <ul className="space-y-2">
                  {(product.careText || [])
                    .filter(c => !c.toLowerCase().startsWith('do not'))
                    .slice(0, showAllCare ? undefined : 4)
                    .map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[#1c1c18]">
                        <span className="text-[#446651] font-black leading-none mt-0.5 text-lg flex-shrink-0">✓</span>
                        <span className="text-xs leading-relaxed">{c}</span>
                      </li>
                    ))}
                </ul>
                {(product.careText || []).filter(c => !c.toLowerCase().startsWith('do not')).length > 4 && (
                  <button type="button" onClick={() => setShowAllCare(v => !v)}
                    className="text-[11px] text-[#446651] font-semibold mt-2 hover:underline">
                    {showAllCare ? 'Show less' : 'Show more'}
                  </button>
                )}

                {/* Product-specific how-to sections */}
                {product.id === 'willow-wrap' && (
                  <div className="mt-4 pt-3 border-t border-[#446651]/15">
                    <p className="font-bold text-[#446651] text-[10px] uppercase tracking-wider mb-2">Tying Styles</p>
                    <ol className="space-y-1.5 text-xs text-[#7a6f6a] list-decimal pl-4">
                      <li><strong>Classic Wrap:</strong> Place center on forehead, cross ends at back, wrap around crown twice and tuck.</li>
                      <li><strong>Side Knot:</strong> Tie ends into a secure side knot, looping into a soft decorative bow.</li>
                      <li><strong>Relaxed Turban:</strong> Twist remaining fabric at the crown before securing.</li>
                    </ol>
                  </div>
                )}
                {product.id === 'browbloom' && (
                  <div className="mt-4 pt-3 border-t border-[#446651]/15">
                    <p className="font-bold text-[#446651] text-[10px] uppercase tracking-wider mb-2">How to Apply</p>
                    <ol className="space-y-1.5 text-xs text-[#7a6f6a] list-decimal pl-4">
                      <li>Ensure skin is clean, dry, and free of oils or skincare.</li>
                      <li>Peel brow gently from backing with tweezers.</li>
                      <li>Align with brow bone, press firmly from center outward, hold 10 seconds.</li>
                    </ol>
                  </div>
                )}
                {product.id === 'bloomtips' && (
                  <div className="mt-4 pt-3 border-t border-[#446651]/15">
                    <p className="font-bold text-[#446651] text-[10px] uppercase tracking-wider mb-2">How to Apply</p>
                    <ol className="space-y-1.5 text-xs text-[#7a6f6a] list-decimal pl-4">
                      <li>Prep natural nails: push back cuticles and cleanse with prep wipe.</li>
                      <li>Select the correct nail size for each finger.</li>
                      <li>Apply adhesive, align at 45- , press down firmly for 15 seconds.</li>
                    </ol>
                  </div>
                )}
              </div>

              {/* Don't */}
              {product.careDonts && product.careDonts.length > 0 && (
                <div className="bg-[#884d53]/6 rounded-xl p-5 border border-[#884d53]/12">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#884d53] mb-3">What Not to Do</p>
                  <ul className="space-y-2">
                    {product.careDonts.slice(0, showAllDonts ? undefined : 4).map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[#1c1c18]">
                        <X className="w-5 h-5 text-[#884d53] flex-shrink-0 mt-0 stroke-[2.5]" />
                        <span className="text-xs leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                  {product.careDonts.length > 4 && (
                    <button type="button" onClick={() => setShowAllDonts(v => !v)}
                      className="text-[11px] text-[#884d53] font-semibold mt-2 hover:underline">
                      {showAllDonts ? 'Show less' : 'Show more'}
                    </button>
                  )}
                </div>
              )}
            </div>
          </AccordionSection>

          {/* Zone 8 ₹ FAQs */}
          {product.faqs && product.faqs.length > 0 && (
            <AccordionSection id="faqs" title="Frequently Asked Questions" isOpen={isFaqsOpen} onToggle={() => setIsFaqsOpen(v => !v)}>
              <div className="space-y-0 divide-y divide-[rgba(28,28,24,0.06)]">
                {product.faqs.slice(0, showAllFAQs ? product.faqs.length : 5).map((faq, i) => (
                  <div key={i}>
                    <button
                      type="button"
                      id={`faq-btn-${i}`}
                      aria-expanded={expandedFAQ === i}
                      aria-controls={`faq-answer-${i}`}
                      onClick={() => setExpandedFAQ(expandedFAQ === i ? -1 : i)}
                      className="w-full flex items-center justify-between text-left py-3.5 hover:text-[#884d53] transition-colors group"
                    >
                      <span className="font-semibold text-[#1c1c18] group-hover:text-[#884d53] text-sm pr-4 transition-colors">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#884d53] flex-shrink-0 transition-transform duration-200 ${expandedFAQ === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      aria-hidden={expandedFAQ !== i}
                      hidden={expandedFAQ !== i}
                      className="grid transition-all duration-300 ease-in-out"
                    >
                      <div className="overflow-hidden min-h-0">
                        <p className="pb-4 text-xs sm:text-sm text-[#7a6f6a] leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {product.faqs.length > 5 && (
                <div className="mt-3 text-center">
                  <button type="button" onClick={() => setShowAllFAQs(v => !v)}
                    className="text-[#884d53] font-semibold text-xs hover:underline">
                    {showAllFAQs ? 'Show fewer questions' : `Show all ${product.faqs.length} questions`}
                  </button>
                </div>
              )}
            </AccordionSection>
          )}
        </div>

        {/* Zone 9 ₹ Gentle Note */}
        {product.gentleNote && (
          <div className="mt-10">
            <div
              className="bg-[#884d53]/5 pl-5 pr-6 py-6"
              style={{ borderLeft: '3px solid #884d53', borderRadius: '0 12px 12px 0' }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#884d53] mb-3">A gentle note</p>
              <div className="text-sm leading-[1.8] text-[#524344] font-serif italic space-y-3">
                {formatParagraphs(product.gentleNote)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Zone 10 ₹ Complete Your Care */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-[rgba(28,28,24,0.1)] bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-[#1c1c18] mb-8 text-center tracking-tight">Complete your care</h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {relatedProducts.slice(0, 2).map(p => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group border border-[rgba(28,28,24,0.1)] rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square relative bg-[#faf7f2]">
                    {p.images?.[0]?.src ? (
                      <Image
                        src={p.images[0].src}
                        alt={`${p.name} — ${p.subtitle || 'Related product'}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[#7a6f6a] text-xs">No image</div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-[#1c1c18] mb-0.5">{p.name}</h3>
                    {p.subtitle && <p className="text-[11px] text-[#7a6f6a] mb-2">{p.subtitle}</p>}
                    <p className="text-sm font-semibold text-[#884d53]">
                      {p.isComplimentaryGift || p.tags?.includes('gift')
                        ? 'Complimentary Gift'
                        : p.priceOnRequest
                          ? 'Price on request'
                          : `${p.priceFrom ? 'From ' : ''}₹${Number(p.price).toLocaleString('en-IN')}`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Add to Bag ₹ only visible on mobile (lg:hidden) */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden bg-white border-t border-[rgba(28,28,24,0.12)] pl-4 pr-[76px] py-3" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
        <div className="flex items-center gap-3 max-w-lg mx-auto h-11">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[#1c1c18] truncate">{product.name}</p>
            <p className="text-sm font-semibold text-[#884d53]">{priceDisplay}</p>
          </div>
          {product.priceOnRequest ? (
            <a
              href="https://wa.me/919076041779"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#884d53] text-white px-5 py-2.5 rounded-full font-semibold text-xs whitespace-nowrap hover:bg-[#6e3d42] transition-all shrink-0"
            >
              Register Interest
            </a>
          ) : product.comingSoon ? (
            <button disabled className="bg-[rgba(28,28,24,0.3)] text-white px-5 py-2.5 rounded-full font-semibold text-xs cursor-not-allowed shrink-0">
              Coming Soon
            </button>
          ) : product.id === 'bloomcrown' ? (
            <Link href="/consultations"
              className="bg-[#884d53] text-white px-5 py-2.5 rounded-full font-semibold text-xs whitespace-nowrap hover:bg-[#6e3d42] transition-all text-center shrink-0">
              Consultation
            </Link>
          ) : (
            <button
              type="button"
              aria-label={`Add ${product.name} to bag`}
              onClick={() => { if (stockStatus === 'instock') handleAddToCart() }}
              className="bg-[#1c1c18] text-white px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap hover:bg-[#333] transition-all shrink-0"
            >
              Add to Bag
            </button>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && productImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close image viewer"
            className="absolute top-4 right-4 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative w-[90vw] h-[80vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <Image
              src={productImages[selectedImage]}
              alt={`${product.name} — full view`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {productImages.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev - 1 + productImages.length) % productImages.length) }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={e => { e.stopPropagation(); setSelectedImage(prev => (prev + 1) % productImages.length) }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/40 text-white px-3 py-1 rounded-full text-xs font-medium">
            {selectedImage + 1} / {productImages.length}
          </div>
        </div>
      )}
    </div>
  )
}
