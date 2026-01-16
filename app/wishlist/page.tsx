'use client'

import Link from 'next/link'
import { Heart, ShoppingBag, Trash2, ArrowRight, ShoppingCart, Check } from 'lucide-react'
import { useWishlist } from '@/lib/wishlist-context'
import { useCart } from '@/lib/cart-context'
import { useState } from 'react'

export default function WishlistPage() {
    const { items: wishlistItems, removeItem, clearWishlist, itemCount } = useWishlist()
    const { addItem: addToCart } = useCart()
    const [addedToCart, setAddedToCart] = useState<string | null>(null)

    const handleAddToCart = (item: typeof wishlistItems[0]) => {
        addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
        })
        setAddedToCart(item.id)
        setTimeout(() => setAddedToCart(null), 2000)
    }

    return (
        <div className="min-h-screen bg-cream-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-8 h-8 text-teal-600" />
                    </div>
                    <h1 className="text-3xl font-medium text-gray-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        Your Wishlist
                    </h1>
                    <p className="text-gray-600">
                        {itemCount > 0
                            ? `You have ${itemCount} item${itemCount > 1 ? 's' : ''} saved`
                            : 'Your wishlist is empty'}
                    </p>
                </div>

                {wishlistItems.length > 0 ? (
                    <>
                        {/* Wishlist Items */}
                        <div className="space-y-4 mb-8">
                            {wishlistItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl shadow-soft p-4 sm:p-6 flex flex-col sm:flex-row gap-4"
                                >
                                    {/* Product Image */}
                                    <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-teal-50 to-cream-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <ShoppingBag className="w-12 h-12 text-teal-300" />
                                    </div>

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                            <div>
                                                <span className="text-xs text-teal-600 font-semibold uppercase tracking-wider">
                                                    {item.category}
                                                </span>
                                                <h3 className="text-lg font-bold text-gray-900 mt-1">
                                                    <Link href={`/products/${item.id}`} className="hover:text-teal-600 transition-colors">
                                                        {item.name}
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-500 italic">{item.tagline}</p>
                                            </div>
                                            <p className="text-xl font-bold text-gray-900 flex-shrink-0">
                                                ₹{item.price.toLocaleString()}
                                            </p>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-wrap items-center gap-3 mt-4">
                                            <button
                                                onClick={() => handleAddToCart(item)}
                                                className={`text-sm py-2 px-4 rounded-xl font-semibold flex items-center gap-2 transition-all ${addedToCart === item.id
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-teal-600 text-white hover:bg-teal-700'
                                                    }`}
                                            >
                                                {addedToCart === item.id ? (
                                                    <>
                                                        <Check className="w-4 h-4" />
                                                        Added!
                                                    </>
                                                ) : (
                                                    <>
                                                        <ShoppingCart className="w-4 h-4" />
                                                        Add to Cart
                                                    </>
                                                )}
                                            </button>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors text-sm"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                                Remove
                                            </button>
                                        </div>

                                        {/* Stock Status */}
                                        <p className="text-sm text-green-600 mt-3">✓ In Stock</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-gray-200 pt-6">
                            <button
                                onClick={clearWishlist}
                                className="text-gray-500 hover:text-red-500 transition-colors text-sm"
                            >
                                Clear Wishlist
                            </button>
                            <Link href="/products" className="btn-secondary">
                                Continue Shopping
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </>
                ) : (
                    /* Empty State */
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="w-12 h-12 text-gray-300" />
                        </div>
                        <h2 className="text-2xl font-medium text-gray-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                            No items saved yet
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-md mx-auto">
                            Start browsing our products and click the heart icon to save items you love.
                        </p>
                        <Link href="/products" className="btn-primary">
                            Browse Products
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
