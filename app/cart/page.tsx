'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Shield, Truck, CreditCard, Phone } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export default function CartPage() {
  const { items, itemCount, total, removeItem, updateQuantity, clearCart } = useCart()
  const [isUpdating, setIsUpdating] = useState<string | null>(null)

  const handleQuantityChange = async (id: string, newQuantity: number) => {
    setIsUpdating(id)
    updateQuantity(id, newQuantity)
    setTimeout(() => setIsUpdating(null), 300)
  }

  // Calculate shipping (free above ₹1500)
  const shipping = total >= 1500 ? 0 : 99
  const grandTotal = total + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100">
            <ShoppingBag className="h-12 w-12 text-tertiary-300" />
          </div>
          <h1 className="mb-4 text-3xl font-semibold text-tertiary-700" style={{ fontFamily: 'var(--font-heading)' }}>
            Your Cart is Empty
          </h1>
          <p className="mx-auto mb-8 max-w-md text-tertiary-500">
            Looks like you haven't added anything to your cart yet. Explore our collection of premium cancer care products.
          </p>
          <Link href="/products" className="btn-primary inline-flex">
            Continue Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-semibold text-tertiary-700" style={{ fontFamily: 'var(--font-heading)' }}>
              Shopping Cart
            </h1>
            <p className="mt-1 text-tertiary-400">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-tertiary-400 underline transition-colors hover:text-red-500"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_16px_40px_rgba(44,31,26,0.06)] transition-all ${isUpdating === item.id ? 'opacity-70' : ''
                  }`}
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary-50 to-neutral-100">
                    <ShoppingBag className="h-10 w-10 text-secondary-400" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="mb-1 font-semibold text-tertiary-700">
                          <Link href={`/products/${item.id}`} className="transition-colors hover:text-primary-600">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-tertiary-400">SKU: {item.id.toUpperCase()}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="h-fit text-tertiary-300 transition-colors hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Price & Quantity Row */}
                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 transition-colors hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 transition-colors hover:bg-neutral-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-xl font-bold text-tertiary-700">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-tertiary-400">₹{item.price.toLocaleString()} each</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-[28px] border border-neutral-200 bg-white p-8 shadow-[0_16px_40px_rgba(44,31,26,0.06)]">
              <h2 className="mb-6 text-xl font-semibold text-tertiary-700">Order Summary</h2>

              {/* Summary Items */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-tertiary-500">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-tertiary-500">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="font-medium text-secondary-600">FREE</span>
                  ) : (
                    <span>₹{shipping}</span>
                  )}
                </div>
                {total < 1500 && (
                  <div className="rounded-xl border border-primary-100 bg-primary-50 p-3 text-sm text-primary-700">
                    Add ₹{(1500 - total).toLocaleString()} more for free shipping!
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

              {/* Total */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-semibold text-tertiary-700">Total</span>
                <span className="text-2xl font-bold text-tertiary-700">₹{grandTotal.toLocaleString()}</span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" className="btn-primary mb-4 w-full justify-center py-5 text-lg">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Continue Shopping */}
              <Link
                href="/products"
                className="block text-center font-medium text-secondary-600 transition-colors hover:text-primary-600"
              >
                Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-8 border-t border-neutral-200 pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm text-tertiary-500">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-secondary-500" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-secondary-500" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-secondary-500" />
                    <span>COD Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-secondary-500" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
