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
      <div className="min-h-screen bg-cream-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-12 h-12 text-gray-300" />
          </div>
          <h1 className="text-3xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
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
    <div className="min-h-screen bg-cream-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-medium text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
              Shopping Cart
            </h1>
            <p className="text-gray-500 mt-1">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors underline"
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
                className={`bg-white rounded-2xl p-6 shadow-soft transition-all ${isUpdating === item.id ? 'opacity-70' : ''
                  }`}
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="w-28 h-28 bg-gradient-to-br from-teal-50 to-cream-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-10 h-10 text-teal-300" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          <Link href={`/products/${item.id}`} className="hover:text-teal-600 transition-colors">
                            {item.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-500">SKU: {item.id.toUpperCase()}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors h-fit"
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
                          className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-500">₹{item.price.toLocaleString()} each</p>
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
            <div className="bg-white rounded-3xl shadow-card p-8 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

              {/* Summary Items */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">FREE</span>
                  ) : (
                    <span>₹{shipping}</span>
                  )}
                </div>
                {total < 1500 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-700">
                    Add ₹{(1500 - total).toLocaleString()} more for free shipping!
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

              {/* Total */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">₹{grandTotal.toLocaleString()}</span>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" className="btn-primary w-full justify-center text-lg py-5 mb-4">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Continue Shopping */}
              <Link
                href="/products"
                className="block text-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
              >
                Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-teal-500" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-teal-500" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-teal-500" />
                    <span>COD Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-500" />
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
