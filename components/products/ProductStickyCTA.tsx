'use client'



interface ProductStickyCTAProps {
  price: string
  onAddToCart: () => void
  disabled?: boolean
}

export function ProductStickyCTA({ price, onAddToCart, disabled = false }: ProductStickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full bg-white px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        
        {/* Price Area */}
        <div className="flex flex-col">
          <span className="text-[11px] font-medium uppercase tracking-wider text-text-secondary">
            Total
          </span>
          <span className="text-lg font-bold text-primary-800">
            {price === 'TBD' ? '—' : `₹${price}`}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={onAddToCart}
          disabled={disabled}
          className="flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-primary px-6 font-semibold text-white transition-all hover:bg-primary-hover disabled:opacity-50"
        >
          {price === 'TBD' ? 'Contact Us' : 'Add to Bag'}
        </button>

      </div>
    </div>
  )
}
