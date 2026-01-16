// Shiprocket Shipping Integration Service
// Manages shipment creation, tracking, and cancellation
// Integrates with Shiprocket REST API

import { Order, OrderItem } from '@/lib/types'

interface ShipmentData {
  orderId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  shippingAddress: {
    street: string
    city: string
    state: string
    pincode: string
  }
  items: OrderItem[]
  totalWeight: number // in kg
  totalValue: number // in rupees
}

interface CreateShipmentResponse {
  success: boolean
  shipmentId?: string
  trackingNumber?: string
  carrier?: string
  estimatedDelivery?: string
  error?: string
}

interface TrackingInfo {
  shipmentId: string
  trackingNumber: string
  carrier: string
  status: string
  lastUpdate: string
  estimatedDelivery?: string
  location?: string
}

/**
 * Create a shipment on Shiprocket
 * Called automatically when order is confirmed
 */
export async function createShipment(
  shipmentData: ShipmentData
): Promise<CreateShipmentResponse> {
  try {
    // In production, this would call Shiprocket API:
    // POST https://apiv2.shiprocket.in/v1/external/orders/create/adhoc
    // with Authorization: Bearer SHIPROCKET_TOKEN
    // Body includes order, customer, shipping, and package details

    console.log('[SHIPROCKET] Creating shipment for order:', shipmentData.orderId)

    // Simulate API response
    const mockShipmentId = `ship_${Date.now()}`
    const mockTrackingNumber = `SHIP${Date.now().toString().slice(-10)}`
    const carriers = ['Delhivery', 'FedEx', 'Blue Dart', 'DTDC']
    const randomCarrier = carriers[Math.floor(Math.random() * carriers.length)]

    // Calculate estimated delivery (3-5 business days)
    const estimatedDate = new Date()
    estimatedDate.setDate(estimatedDate.getDate() + Math.floor(Math.random() * 3) + 3)

    return {
      success: true,
      shipmentId: mockShipmentId,
      trackingNumber: mockTrackingNumber,
      carrier: randomCarrier,
      estimatedDelivery: estimatedDate.toISOString().split('T')[0],
    }
  } catch (error) {
    console.error('Shiprocket shipment creation failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Get tracking information for a shipment
 */
export async function getTrackingInfo(
  trackingNumber: string
): Promise<TrackingInfo | null> {
  try {
    // In production, would call:
    // GET https://apiv2.shiprocket.in/v1/external/orders/track/
    // params: tracking_number, channel_id

    console.log('[SHIPROCKET] Fetching tracking for:', trackingNumber)

    // Simulate tracking response
    const statuses = ['Booked', 'Picked', 'In Transit', 'Out for Delivery', 'Delivered']
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

    return {
      shipmentId: `ship_${Date.now()}`,
      trackingNumber,
      carrier: 'Delhivery',
      status: randomStatus,
      lastUpdate: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0],
      location: 'Delhi',
    }
  } catch (error) {
    console.error('Shiprocket tracking fetch failed:', error)
    return null
  }
}

/**
 * Cancel a shipment
 */
export async function cancelShipment(shipmentId: string): Promise<boolean> {
  try {
    // In production, would call:
    // POST https://apiv2.shiprocket.in/v1/external/orders/cancel/
    // params: shipment_id

    console.log('[SHIPROCKET] Canceling shipment:', shipmentId)

    // Simulate cancellation
    await new Promise((resolve) => setTimeout(resolve, 100))

    return true
  } catch (error) {
    console.error('Shiprocket cancellation failed:', error)
    return false
  }
}

/**
 * Validate address before creating shipment
 */
export async function validateAddress(
  street: string,
  city: string,
  state: string,
  pincode: string
): Promise<{ valid: boolean; message?: string }> {
  try {
    // In production, would validate through Shiprocket or India Post API
    // Check pincode validity, state-city mapping, etc.

    // Mock validation
    const pincodeRegex = /^\d{6}$/
    if (!pincodeRegex.test(pincode)) {
      return { valid: false, message: 'Invalid pincode format' }
    }

    if (!city.trim() || !state.trim()) {
      return { valid: false, message: 'City and state are required' }
    }

    return { valid: true }
  } catch (error) {
    console.error('Address validation failed:', error)
    return { valid: false, message: 'Address validation error' }
  }
}

/**
 * Calculate shipping cost
 */
export async function calculateShippingCost(params: {
  weight: number // in kg
  destinationPincode: string
  paymentMethod: string
}): Promise<{ cost: number; courier: string; deliveryDays: number } | null> {
  try {
    // In production, would call Shiprocket rates API
    // POST https://apiv2.shiprocket.in/v1/external/courier/assign/rules

    // Mock calculation
    let baseCost = 0
    if (params.weight <= 0.5) baseCost = 40
    else if (params.weight <= 1) baseCost = 60
    else if (params.weight <= 5) baseCost = 100
    else baseCost = 150

    // Free shipping for orders over ₹500 (handled at order level, but shipper charges apply)
    const courierCost = Math.max(0, baseCost)

    return {
      cost: courierCost,
      courier: 'Delhivery',
      deliveryDays: 3,
    }
  } catch (error) {
    console.error('Shipping cost calculation failed:', error)
    return null
  }
}

/**
 * Generate shipping label PDF
 * Called before pickup
 */
export async function generateShippingLabel(
  shipmentId: string
): Promise<{ success: boolean; labelUrl?: string; error?: string }> {
  try {
    // In production, would call:
    // GET https://apiv2.shiprocket.in/v1/external/shipments/{shipmentId}/label/

    console.log('[SHIPROCKET] Generating label for shipment:', shipmentId)

    return {
      success: true,
      labelUrl: `https://shiprocket.in/labels/${shipmentId}.pdf`,
    }
  } catch (error) {
    console.error('Label generation failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Get available couriers for a route
 */
export async function getAvailableCouriers(
  sourcePincode: string,
  destinationPincode: string,
  weight: number
): Promise<
  Array<{
    courierName: string
    courierCode: string
    estimatedDelivery: number
    cost: number
  }>
> {
  try {
    // In production, would call Shiprocket courier assignment API

    // Mock courier list
    return [
      {
        courierName: 'Delhivery',
        courierCode: 'DEL',
        estimatedDelivery: 3,
        cost: 100,
      },
      {
        courierName: 'FedEx',
        courierCode: 'FEDEX',
        estimatedDelivery: 2,
        cost: 150,
      },
      {
        courierName: 'Blue Dart',
        courierCode: 'BD',
        estimatedDelivery: 2,
        cost: 200,
      },
      {
        courierName: 'DTDC',
        courierCode: 'DTDC',
        estimatedDelivery: 4,
        cost: 80,
      },
    ]
  } catch (error) {
    console.error('Courier fetch failed:', error)
    return []
  }
}
