'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogOut, MapPin, ShoppingBag, Heart } from 'lucide-react'

interface UserOrder {
  id: string
  date: string
  items: number
  total: number
  status: 'delivered' | 'shipped' | 'processing' | 'cancelled'
}

export default function AccountPage() {
  const [orders] = useState<UserOrder[]>([
    {
      id: 'ORD-001',
      date: 'January 5, 2026',
      items: 2,
      total: 7668,
      status: 'delivered',
    },
  ])

  const handleLogout = () => {
    // Handle logout
    window.location.href = '/'
  }

  const statusColors = {
    delivered: 'bg-green-100 text-green-700',
    shipped: 'bg-blue-100 text-blue-700',
    processing: 'bg-yellow-100 text-yellow-700',
    cancelled: 'bg-red-100 text-red-700',
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-light text-gray-800">My Account</h1>
            <p className="text-gray-600 mt-2">Welcome, Priya M.</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Account Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2 sticky top-20">
              <a
                href="#orders"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-amber-50 text-amber-700 font-semibold"
              >
                <ShoppingBag className="w-5 h-5" />
                Orders
              </a>
              <a
                href="#addresses"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
              >
                <MapPin className="w-5 h-5" />
                Addresses
              </a>
              <a
                href="#wishlist"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700 transition"
              >
                <Heart className="w-5 h-5" />
                Wishlist
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Orders Section */}
            <div id="orders" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Orders</h2>

              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-600 font-semibold">Order ID</p>
                          <p className="text-gray-800 font-medium">{order.id}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-semibold">Date</p>
                          <p className="text-gray-800">{order.date}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-semibold">Items</p>
                          <p className="text-gray-800">{order.items} items</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-semibold">Total</p>
                          <p className="text-gray-800 font-bold">
                            ₹{order.total.toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            statusColors[order.status]
                          }`}
                        >
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                        <a
                          href={`#order/${order.id}`}
                          className="text-amber-600 hover:text-amber-700 font-semibold text-sm"
                        >
                          View Details →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">You haven't placed any orders yet</p>
                  <Link
                    href="/products"
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Start Shopping
                  </Link>
                </div>
              )}
            </div>

            {/* Addresses Section */}
            <div id="addresses" className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Saved Addresses</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <p className="font-semibold text-gray-800">Home</p>
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-700 text-sm font-semibold">
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700">Priya M.</p>
                  <p className="text-gray-600 text-sm">
                    123 Marine Drive, Mumbai, Maharashtra 400001
                  </p>
                  <p className="text-gray-600 text-sm mt-2">+91 98765 43210</p>
                  <span className="inline-block mt-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Default Address
                  </span>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center">
                  <button className="text-center text-amber-600 hover:text-amber-700 font-semibold">
                    + Add New Address
                  </button>
                </div>
              </div>
            </div>

            {/* Wishlist Section */}
            <div id="wishlist">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Wishlist</h2>

              <div className="text-center py-12">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Your wishlist is empty</p>
                <Link
                  href="/products"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
