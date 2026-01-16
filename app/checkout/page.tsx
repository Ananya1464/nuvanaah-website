'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Check, ChevronLeft, ShoppingBag, MapPin, CreditCard,
  ClipboardCheck, Truck, Shield, Phone, ArrowRight,
  Banknote, Building2, Smartphone
} from 'lucide-react'
import { useCart } from '@/lib/cart-context'

// Indian states for dropdown
const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu & Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh'
]

interface ShippingData {
  fullName: string
  phone: string
  email: string
  address1: string
  address2: string
  city: string
  state: string
  pincode: string
  addressType: 'home' | 'office' | 'hospital'
  saveAddress: boolean
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form data
  const [shippingData, setShippingData] = useState<ShippingData>({
    fullName: '',
    phone: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    addressType: 'home',
    saveAddress: true,
  })

  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod')
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Calculate totals
  const shipping = total >= 1500 ? 0 : 99
  const grandTotal = total + shipping

  const steps = [
    { id: 1, name: 'Shipping', icon: MapPin },
    { id: 2, name: 'Payment', icon: CreditCard },
    { id: 3, name: 'Review', icon: ClipboardCheck },
  ]

  // Validation
  const validateShipping = () => {
    const newErrors: Record<string, string> = {}

    if (!shippingData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!shippingData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(shippingData.phone)) newErrors.phone = 'Enter valid 10-digit mobile number'
    if (!shippingData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(shippingData.email)) newErrors.email = 'Enter valid email address'
    if (!shippingData.address1.trim()) newErrors.address1 = 'Address is required'
    if (!shippingData.city.trim()) newErrors.city = 'City is required'
    if (!shippingData.state) newErrors.state = 'State is required'
    if (!shippingData.pincode.trim()) newErrors.pincode = 'PIN code is required'
    else if (!/^\d{6}$/.test(shippingData.pincode)) newErrors.pincode = 'Enter valid 6-digit PIN code'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (currentStep === 1 && !validateShipping()) return
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handlePlaceOrder = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Clear cart and redirect to confirmation
    clearCart()
    router.push('/checkout/confirmation')
  }

  // Redirect if cart is empty
  if (items.length === 0 && currentStep !== 3) {
    return (
      <div className="min-h-screen bg-cream-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-12 h-12 text-gray-300" />
          </div>
          <h1 className="text-3xl font-medium text-gray-900 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Add some products before checking out.</p>
          <Link href="/products" className="btn-primary inline-flex">
            Browse Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Cart */}
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Cart
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-medium text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
            Checkout
          </h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                {/* Step Circle */}
                <button
                  onClick={() => currentStep > step.id && setCurrentStep(step.id)}
                  disabled={currentStep < step.id}
                  className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${currentStep === step.id
                    ? 'bg-teal-500 text-white shadow-button'
                    : currentStep > step.id
                      ? 'bg-teal-100 text-teal-600 cursor-pointer hover:bg-teal-200'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </button>

                {/* Step Label */}
                <span className={`ml-3 font-medium ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                  {step.name}
                </span>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className={`w-16 lg:w-24 h-1 mx-4 rounded-full ${currentStep > step.id ? 'bg-teal-500' : 'bg-gray-200'
                    }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping */}
            {currentStep === 1 && (
              <div className="bg-white rounded-3xl shadow-card p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-500" />
                  Shipping Information
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="label">Full Name *</label>
                    <input
                      type="text"
                      value={shippingData.fullName}
                      onChange={(e) => setShippingData({ ...shippingData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className={`input ${errors.fullName ? 'input-error' : ''}`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="label">Phone Number *</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">+91</span>
                      <input
                        type="tel"
                        value={shippingData.phone}
                        onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        placeholder="9876543210"
                        className={`input pl-12 ${errors.phone ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="label">Email Address *</label>
                    <input
                      type="email"
                      value={shippingData.email}
                      onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                      placeholder="your@email.com"
                      className={`input ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Address 1 */}
                  <div className="sm:col-span-2">
                    <label className="label">Address Line 1 *</label>
                    <input
                      type="text"
                      value={shippingData.address1}
                      onChange={(e) => setShippingData({ ...shippingData, address1: e.target.value })}
                      placeholder="House/Flat No., Building Name, Street"
                      className={`input ${errors.address1 ? 'input-error' : ''}`}
                    />
                    {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
                  </div>

                  {/* Address 2 */}
                  <div className="sm:col-span-2">
                    <label className="label">Address Line 2 (Optional)</label>
                    <input
                      type="text"
                      value={shippingData.address2}
                      onChange={(e) => setShippingData({ ...shippingData, address2: e.target.value })}
                      placeholder="Landmark, Area"
                      className="input"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="label">City *</label>
                    <input
                      type="text"
                      value={shippingData.city}
                      onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                      placeholder="Your city"
                      className={`input ${errors.city ? 'input-error' : ''}`}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>

                  {/* State */}
                  <div>
                    <label className="label">State *</label>
                    <select
                      value={shippingData.state}
                      onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                      className={`input ${errors.state ? 'input-error' : ''}`}
                    >
                      <option value="">Select State</option>
                      {indianStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>

                  {/* PIN Code */}
                  <div>
                    <label className="label">PIN Code *</label>
                    <input
                      type="text"
                      value={shippingData.pincode}
                      onChange={(e) => setShippingData({ ...shippingData, pincode: e.target.value.replace(/\D/g, '').slice(0, 6) })}
                      placeholder="400001"
                      className={`input ${errors.pincode ? 'input-error' : ''}`}
                    />
                    {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                  </div>

                  {/* Address Type */}
                  <div>
                    <label className="label">Address Type</label>
                    <div className="flex gap-3">
                      {(['home', 'office', 'hospital'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setShippingData({ ...shippingData, addressType: type })}
                          className={`px-4 py-2 rounded-xl border-2 capitalize transition-all ${shippingData.addressType === type
                            ? 'border-teal-500 bg-teal-50 text-teal-700 font-medium'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Save Address */}
                  <div className="sm:col-span-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={shippingData.saveAddress}
                        onChange={(e) => setShippingData({ ...shippingData, saveAddress: e.target.checked })}
                        className="w-5 h-5 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
                      />
                      <span className="text-gray-700">Save this address for future orders</span>
                    </label>
                  </div>
                </div>

                {/* Next Button */}
                <div className="mt-8 flex justify-end">
                  <button onClick={handleNextStep} className="btn-primary px-10">
                    Continue to Payment
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {currentStep === 2 && (
              <div className="bg-white rounded-3xl shadow-card p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-teal-500" />
                  Payment Method
                </h2>

                <div className="space-y-4">
                  {/* COD Option */}
                  <label
                    className={`flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod'
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="w-5 h-5 text-teal-500 focus:ring-teal-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Banknote className="w-6 h-6 text-green-600" />
                        <span className="font-semibold text-gray-900">Cash on Delivery (COD)</span>
                        <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1 ml-9">
                        Pay when your order arrives. No extra charges.
                      </p>
                    </div>
                  </label>

                  {/* Online Payment Option */}
                  <label
                    className={`flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${paymentMethod === 'online'
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      checked={paymentMethod === 'online'}
                      onChange={() => setPaymentMethod('online')}
                      className="w-5 h-5 text-teal-500 focus:ring-teal-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-6 h-6 text-blue-600" />
                        <span className="font-semibold text-gray-900">Pay Online</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1 ml-9">
                        UPI, Credit/Debit Card, Net Banking
                      </p>
                      <div className="flex gap-2 mt-3 ml-9">
                        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-xs text-gray-600">UPI</div>
                        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-xs text-gray-600">Cards</div>
                        <div className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-xs text-gray-600">Net Banking</div>
                      </div>
                    </div>
                  </label>
                </div>

                {/* COD Info */}
                {paymentMethod === 'cod' && (
                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> Please keep exact change ready. Our delivery partner may not have change for large denominations.
                    </p>
                  </div>
                )}

                {/* Buttons */}
                <div className="mt-8 flex justify-between">
                  <button onClick={handlePrevStep} className="btn-ghost">
                    <ChevronLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button onClick={handleNextStep} className="btn-primary px-10">
                    Review Order
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="space-y-6">
                {/* Order Items */}
                <div className="bg-white rounded-3xl shadow-card p-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                    <ShoppingBag className="w-5 h-5 text-teal-500" />
                    Order Items ({items.length})
                  </h2>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-cream-100 rounded-xl flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-teal-300" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-gray-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-3xl shadow-card p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-teal-500" />
                      Shipping Address
                    </h2>
                    <button onClick={() => setCurrentStep(1)} className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                      Edit
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-medium text-gray-900">{shippingData.fullName}</p>
                    <p className="text-gray-600">{shippingData.address1}</p>
                    {shippingData.address2 && <p className="text-gray-600">{shippingData.address2}</p>}
                    <p className="text-gray-600">{shippingData.city}, {shippingData.state} - {shippingData.pincode}</p>
                    <p className="text-gray-600 mt-2">Phone: +91 {shippingData.phone}</p>
                    <span className="inline-block mt-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full capitalize">
                      {shippingData.addressType}
                    </span>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-3xl shadow-card p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-teal-500" />
                      Payment Method
                    </h2>
                    <button onClick={() => setCurrentStep(2)} className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                      Change
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                    {paymentMethod === 'cod' ? (
                      <>
                        <Banknote className="w-6 h-6 text-green-600" />
                        <span className="font-medium text-gray-900">Cash on Delivery</span>
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-6 h-6 text-blue-600" />
                        <span className="font-medium text-gray-900">Pay Online (Razorpay)</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Place Order Button */}
                <div className="flex justify-between items-center">
                  <button onClick={handlePrevStep} className="btn-ghost">
                    <ChevronLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isSubmitting}
                    className="btn-gold px-12 py-5 text-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Place Order
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-card p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>

              {/* Items Preview */}
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 truncate flex-1 mr-2">{item.name} × {item.quantity}</span>
                    <span className="text-gray-900 font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-gray-200 my-4" />

              {/* Totals */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600 font-medium' : 'text-gray-900'}>
                    {shipping === 0 ? 'FREE' : `₹${shipping}`}
                  </span>
                </div>
              </div>

              <div className="h-px bg-gray-200 my-4" />

              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-xl font-bold text-gray-900">₹{grandTotal.toLocaleString()}</span>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-500" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-teal-500" />
                  <span>Free Shipping</span>
                </div>
              </div>

              {/* Help */}
              <div className="mt-4 text-center">
                <a href="tel:+919819461612" className="text-sm text-teal-600 hover:text-teal-700">
                  Need help? Call +91-9819461612
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
