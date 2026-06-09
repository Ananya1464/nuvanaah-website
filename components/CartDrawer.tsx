'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, ArrowRight, Check } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export default function CartDrawer() {
  const { lastAdded, clearLastAdded, items, itemCount, total } = useCart()
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isOpen = lastAdded !== null

  // Auto-dismiss after 5 s; reset timer each time a new item is added
  useEffect(() => {
    if (!isOpen) return
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(clearLastAdded, 5000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [lastAdded]) // eslint-disable-line react-hooks/exhaustive-deps

  const shipping = total >= 1500 ? 0 : 99

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-[2px]"
            onClick={clearLastAdded}
            aria-hidden="true"
          />

          {/* Panel — slides from right on md+, slides from bottom on mobile */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Item added to bag"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 z-[71] flex h-full w-full flex-col bg-[#faf7f2] shadow-2xl sm:max-w-[380px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#ded0bf]/40 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#446651]">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold text-[#1c1c18]">Added to Bag</span>
              </div>
              <button
                onClick={clearLastAdded}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#7a6f6a] transition-colors hover:bg-[#ded0bf]/40 hover:text-[#1c1c18]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Added item */}
            <div className="flex gap-4 px-5 py-5 border-b border-[#ded0bf]/40">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-white border border-[#ded0bf]/40">
                {lastAdded?.image ? (
                  <Image
                    src={lastAdded.image}
                    alt={lastAdded.name}
                    fill
                    sizes="80px"
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <ShoppingBag className="h-8 w-8 text-[#ded0bf]" />
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center min-w-0">
                <p className="text-sm font-semibold text-[#1c1c18] leading-snug line-clamp-2">{lastAdded?.name}</p>
                <p className="mt-1 text-base font-bold text-[#884d53]">
                  ₹ {Number(lastAdded?.price).toLocaleString('en-IN')}
                </p>
                {(lastAdded?.quantity ?? 0) > 1 && (
                  <p className="text-xs text-[#7a6f6a]">Qty: {lastAdded?.quantity}</p>
                )}
              </div>
            </div>

            {/* Cart summary */}
            <div className="px-5 py-4 space-y-2 border-b border-[#ded0bf]/40">
              <div className="flex items-center justify-between text-sm text-[#524344]">
                <span>{itemCount} {itemCount === 1 ? 'item' : 'items'} in bag</span>
                <span className="font-semibold text-[#1c1c18]">₹ {total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-[#524344]">
                <span>Shipping</span>
                {shipping === 0
                  ? <span className="font-semibold text-[#446651]">FREE</span>
                  : <span>₹ {shipping}</span>
                }
              </div>
              {total < 1500 && (
                <p className="text-xs text-[#884d53] font-medium">
                  Add ₹ {(1500 - total).toLocaleString('en-IN')} more for free shipping
                </p>
              )}
            </div>

            {/* Trust chips */}
            <div className="flex gap-2 px-5 py-3 border-b border-[#ded0bf]/40">
              {['Discreet packaging', 'COD available', 'Free returns'].map(chip => (
                <span key={chip} className="rounded-full border border-[#ded0bf]/60 bg-white px-2.5 py-1 text-[10px] font-medium text-[#7a6f6a] whitespace-nowrap">
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-auto px-5 py-5 space-y-3">
              <Link
                href="/checkout"
                onClick={clearLastAdded}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#884d53] py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#6e3d42]"
              >
                Checkout <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/cart"
                onClick={clearLastAdded}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(28,28,24,0.2)] bg-white py-3.5 text-sm font-semibold text-[#1c1c18] transition-all hover:border-[#884d53]/40"
              >
                View Bag ({itemCount})
              </Link>
            </div>

            {/* Auto-dismiss progress bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-[#884d53]/30"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
