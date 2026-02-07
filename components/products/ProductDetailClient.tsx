'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
    Heart, Truck, Phone, Check, ShoppingBag,
    Plus, Minus, ShoppingCart, Zap, Star, Share2, MessageCircle,
    Package, RotateCcw, Clock, ChevronRight
} from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useWishlist } from '@/lib/wishlist-context'
import { getProductImages } from '@/lib/product-images'
import ProductImageGallery from './ProductImageGallery'

// Product type definition
export interface ProductData {
    id: string
    name: string
    tagline: string
    price: number
    comparePrice?: number
    description: string
    sizes?: string[]
    colors?: { name: string; value: string }[]
    stock: number
    rating: number
    reviewCount: number
    features: { title: string; desc: string }[]
    specifications: { label: string; value: string }[]
    perfectFor?: string[]
    category: string
}

interface ProductDetailClientProps {
    product: ProductData
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
    const router = useRouter()
    const { addItem } = useCart()
    const { isInWishlist, toggleItem } = useWishlist()

    // Get product images from mapping
    const productImages = getProductImages(product.id)

    const [selectedSize, setSelectedSize] = useState<string>(product.sizes?.[0] || '')
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null)
    const [quantity, setQuantity] = useState(1)
    const [isAddingToCart, setIsAddingToCart] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const [showSizeError, setShowSizeError] = useState(false)

    const isWishlisted = isInWishlist(product.id)

    const handleWishlistToggle = () => {
        toggleItem({
            id: product.id,
            name: product.name,
            tagline: product.tagline,
            price: product.price,
            category: product.category,
        })
    }

    const handleAddToCart = async () => {
        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
            setShowSizeError(true)
            return
        }

        setIsAddingToCart(true)

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800))

        // Build item name with variants
        let itemName = product.name
        const variants = []
        if (selectedSize) variants.push(selectedSize)
        if (selectedColor) variants.push(selectedColor.name)
        if (variants.length > 0) {
            itemName += ` (${variants.join(', ')})`
        }

        // Add to cart
        for (let i = 0; i < quantity; i++) {
            addItem({
                id: `${product.id}-${selectedSize || 'default'}-${selectedColor?.name || 'default'}`,
                name: itemName,
                price: product.price,
            })
        }

        setIsAddingToCart(false)
        setAddedToCart(true)

        // Reset success state after 3 seconds
        setTimeout(() => setAddedToCart(false), 3000)
    }

    const handleBuyNow = async () => {
        if (product.sizes && product.sizes.length > 0 && !selectedSize) {
            setShowSizeError(true)
            return
        }

        // Build item name with variants
        let itemName = product.name
        const variants = []
        if (selectedSize) variants.push(selectedSize)
        if (selectedColor) variants.push(selectedColor.name)
        if (variants.length > 0) {
            itemName += ` (${variants.join(', ')})`
        }

        // Add to cart first
        for (let i = 0; i < quantity; i++) {
            addItem({
                id: `${product.id}-${selectedSize || 'default'}-${selectedColor?.name || 'default'}`,
                name: itemName,
                price: product.price,
            })
        }

        // Go to checkout
        router.push('/checkout')
    }

    const savings = product.comparePrice ? product.comparePrice - product.price : 0
    const savingsPercent = product.comparePrice ? Math.round((savings / product.comparePrice) * 100) : 0

    return (
        <div className="min-h-screen bg-cream-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/products" className="hover:text-teal-600 transition-colors">Products</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900 font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Main Product Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left: Product Image */}
                    <div className="relative">
                        <ProductImageGallery 
                            images={productImages} 
                            productName={product.name}
                        />
                        
                        {/* Floating Badges */}
                        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                            {savings > 0 && (
                                <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                                    Save {savingsPercent}%
                                </span>
                            )}
                            <span className="bg-gold-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                                Bestseller
                            </span>
                        </div>

                        {/* Wishlist Button */}
                        <button
                            onClick={handleWishlistToggle}
                            className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all z-10 shadow-lg ${isWishlisted
                                ? 'bg-red-100 text-red-500'
                                : 'bg-white text-gray-400 hover:text-red-500'
                                }`}
                        >
                            <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                        </button>

                        {/* Share Button */}
                        <button className="absolute bottom-24 right-6 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-teal-600 transition-colors z-10">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Right: Product Info */}
                    <div className="lg:pt-4">
                        {/* Category Badge */}
                        <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            {product.category}
                        </span>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(product.rating)
                                            ? 'text-gold-400 fill-gold-400'
                                            : 'text-gray-200'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-600 font-medium">{product.rating}</span>
                            <span className="text-gray-400">•</span>
                            <a href="#reviews" className="text-teal-600 hover:underline">
                                {product.reviewCount} Reviews
                            </a>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                            {product.name}
                        </h1>
                        <p className="text-lg text-gray-500 italic mb-6">{product.tagline}</p>

                        {/* Price */}
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-4xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                            {product.comparePrice && (
                                <>
                                    <span className="text-xl text-gray-400 line-through">₹{product.comparePrice.toLocaleString()}</span>
                                    <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                                        Save ₹{savings.toLocaleString()}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Stock Status */}
                        <div className="flex items-center gap-2 mb-6">
                            {product.stock > 0 ? (
                                <>
                                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-green-600 font-medium">
                                        In Stock
                                        {product.stock <= 5 && ` – Only ${product.stock} left!`}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                                    <span className="text-red-600 font-medium">Out of Stock</span>
                                </>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Color Selection */}
                        {product.colors && product.colors.length > 0 && (
                            <div className="mb-6">
                                <label className="block text-sm font-semibold text-gray-900 mb-3">
                                    Color: <span className="font-normal text-gray-600">{selectedColor?.name}</span>
                                </label>
                                <div className="flex gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor?.name === color.name
                                                ? 'border-teal-500 ring-2 ring-teal-200'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                            style={{ backgroundColor: color.value }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Size Selection */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <label className="text-sm font-semibold text-gray-900">
                                        Select Size <span className="text-red-500">*</span>
                                    </label>
                                    <button className="text-sm text-teal-600 hover:underline">Size Guide</button>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => {
                                                setSelectedSize(size)
                                                setShowSizeError(false)
                                            }}
                                            className={`w-14 h-14 rounded-xl border-2 font-semibold transition-all ${selectedSize === size
                                                ? 'border-teal-500 bg-teal-50 text-teal-700'
                                                : 'border-gray-200 hover:border-gray-300 text-gray-700'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                                {showSizeError && (
                                    <p className="text-red-500 text-sm mt-2">Please select a size</p>
                                )}
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
                            <div className="inline-flex items-center border-2 border-gray-200 rounded-xl">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    disabled={quantity <= 1}
                                    className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-l-xl"
                                >
                                    <Minus className="w-5 h-5" />
                                </button>
                                <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                    disabled={quantity >= product.stock}
                                    className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-r-xl"
                                >
                                    <Plus className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="space-y-3 mb-8">
                            {/* Add to Cart */}
                            <button
                                onClick={handleAddToCart}
                                disabled={isAddingToCart || product.stock === 0}
                                className={`w-full py-4 px-8 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all ${addedToCart
                                    ? 'bg-green-500 text-white'
                                    : 'bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50'
                                    } disabled:opacity-60 disabled:cursor-not-allowed`}
                            >
                                {isAddingToCart ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
                                        Adding...
                                    </>
                                ) : addedToCart ? (
                                    <>
                                        <Check className="w-6 h-6" />
                                        Added to Cart!
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart className="w-6 h-6" />
                                        Add to Cart
                                    </>
                                )}
                            </button>

                            {/* Buy Now */}
                            <button
                                onClick={handleBuyNow}
                                disabled={product.stock === 0}
                                className="w-full btn-gold py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <Zap className="w-5 h-5" />
                                Buy Now
                            </button>
                        </div>

                        {/* OR Divider */}
                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-cream-50 px-4 text-gray-500">or order via</span>
                            </div>
                        </div>

                        {/* WhatsApp / Call */}
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            <a
                                href={`https://wa.me/919819461612?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-50 text-green-700 font-medium hover:bg-green-100 transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </a>
                            <a
                                href="tel:+919819461612"
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-50 text-teal-700 font-medium hover:bg-teal-100 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                Call Us
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                    <Truck className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">Free Shipping</p>
                                    <p className="text-xs text-gray-500">Pan India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <Package className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">COD Available</p>
                                    <p className="text-xs text-gray-500">Pay on delivery</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                                    <RotateCcw className="w-5 h-5 text-amber-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">Easy Returns</p>
                                    <p className="text-xs text-gray-500">7-day exchange</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">Fast Delivery</p>
                                    <p className="text-xs text-gray-500">3-5 business days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="mt-16 lg:mt-24">
                    <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                        Key Features
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                                    <Check className="w-5 h-5 text-teal-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                <p className="text-gray-500 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Specifications */}
                <div className="mt-16 bg-white rounded-3xl p-8 lg:p-10 border border-gray-100">
                    <h2 className="text-2xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        Specifications
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {product.specifications.map((spec, index) => (
                            <div key={index} className="flex justify-between py-3 border-b border-gray-100">
                                <span className="text-gray-500">{spec.label}</span>
                                <span className="font-medium text-gray-900">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Perfect For */}
                {product.perfectFor && product.perfectFor.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                            Perfect For
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {product.perfectFor.map((item, index) => (
                                <span key={index} className="bg-teal-50 text-teal-700 px-4 py-2 rounded-xl text-sm font-medium">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Need Help CTA */}
                <div className="mt-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-10 lg:p-12 text-center text-white">
                    <h2 className="text-2xl lg:text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                        Need Help Choosing?
                    </h2>
                    <p className="text-teal-100 mb-8 max-w-xl mx-auto">
                        Our care specialists are here to guide you. Get personalized advice for free.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+919819461612"
                            className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold hover:bg-cream-50 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                            +91-9819461612
                        </a>
                        <a
                            href="https://wa.me/919819461612"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-900 transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
