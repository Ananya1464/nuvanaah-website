'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Plus, Minus } from 'lucide-react'
import { CartItem } from '@/lib/types'

interface CartItemComponentProps {
  item: CartItem
  onQuantityChange: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}

export default function CartItemComponent({
  item,
  onQuantityChange,
  onRemove,
}: CartItemComponentProps) {
  return (
    <div className="flex gap-4 py-6 border-b border-gray-200">
      {/* Product Image */}
      <Link
        href={`/products/${item.id}`}
        className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0"
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <Link
          href={`/products/${item.id}`}
          className="block font-semibold text-gray-800 hover:text-amber-600 truncate"
        >
          {item.name}
        </Link>
        <p className="text-sm text-gray-600">Size: {item.size}</p>
        <p className="text-sm font-semibold text-gray-800 mt-1">
          ₹{item.price.toLocaleString('en-IN')}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
          className="p-1 border border-gray-300 rounded hover:border-amber-600 transition"
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        <span className="w-6 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
          className="p-1 border border-gray-300 rounded hover:border-amber-600 transition"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Subtotal */}
      <div className="w-24 text-right">
        <p className="font-semibold text-gray-800">
          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded transition"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  )
}
