// SMS Notification Service
// Integrates with Twilio or MSG91 for SMS delivery
// Supports order confirmations, shipping updates, and consultation reminders

interface SendSmsParams {
  phone: string
  message: string
  type: 'order' | 'shipping' | 'consultation' | 'general'
}

interface SmsResult {
  success: boolean
  messageId?: string
  error?: string
}

/**
 * Send SMS notification
 * In production, integrates with Twilio or MSG91
 * Currently logs to console for testing
 */
export async function sendSms({
  phone,
  message,
  type,
}: SendSmsParams): Promise<SmsResult> {
  try {
    // In production, this would use:
    // - Twilio: client.messages.create({ to: phone, from: TWILIO_PHONE, body: message })
    // - MSG91: axios.post(`https://api.msg91.com/apiv5/flow/`, { route, recipients: [{mobiles: phone}], template_id })

    console.log(`[SMS-${type.toUpperCase()}] To: ${phone}`)
    console.log(`Message: ${message}`)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 100))

    return {
      success: true,
      messageId: `sms_${Date.now()}`,
    }
  } catch (error) {
    console.error('SMS sending failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Send order confirmation SMS
 * Sent immediately after order is placed
 */
export async function sendOrderConfirmationSms(
  phone: string,
  orderData: {
    orderId: string
    amount: number
    estimatedDelivery: string
  }
): Promise<SmsResult> {
  const message = `Nuvanaah: Your order #${orderData.orderId} confirmed! Amount: ₹${orderData.amount}. Estimated delivery: ${orderData.estimatedDelivery}. Track: https://nuvanaah.com/orders/${orderData.orderId}`

  return sendSms({
    phone,
    message,
    type: 'order',
  })
}

/**
 * Send shipping update SMS
 * Sent when order is dispatched
 */
export async function sendShippingUpdateSms(
  phone: string,
  shippingData: {
    orderId: string
    trackingNumber: string
    carrier: string
    estimatedDelivery: string
  }
): Promise<SmsResult> {
  const message = `Nuvanaah: Your order #${shippingData.orderId} shipped! Tracking: ${shippingData.trackingNumber} (${shippingData.carrier}). Estimated delivery: ${shippingData.estimatedDelivery}. https://nuvanaah.com/track`

  return sendSms({
    phone,
    message,
    type: 'shipping',
  })
}

/**
 * Send consultation reminder SMS
 * Sent 24 hours before scheduled consultation
 */
export async function sendConsultationReminderSms(
  phone: string,
  consultationData: {
    consultationId: string
    type: string
    dateTime: string
    specialistName: string
  }
): Promise<SmsResult> {
  const message = `Nuvanaah: Reminder - Your ${consultationData.type} consultation with ${consultationData.specialistName} is scheduled for ${consultationData.dateTime}. Reply to confirm or call us to reschedule.`

  return sendSms({
    phone,
    message,
    type: 'consultation',
  })
}

/**
 * Send delivery confirmation SMS
 * Sent when package is delivered
 */
export async function sendDeliveryConfirmationSms(
  phone: string,
  orderData: {
    orderId: string
    carrier: string
  }
): Promise<SmsResult> {
  const message = `Nuvanaah: Your order #${orderData.orderId} has been delivered! Thank you for choosing Nuvanaah. For support, visit https://nuvanaah.com/faq or call us.`

  return sendSms({
    phone,
    message,
    type: 'general',
  })
}

/**
 * Send return confirmation SMS
 * Sent when return is initiated
 */
export async function sendReturnInitiatedSms(
  phone: string,
  returnData: {
    orderId: string
    pickupDate: string
  }
): Promise<SmsResult> {
  const message = `Nuvanaah: Return initiated for order #${returnData.orderId}. Pickup scheduled for ${returnData.pickupDate}. We'll refund your amount within 5 business days of receiving the package.`

  return sendSms({
    phone,
    message,
    type: 'general',
  })
}

/**
 * Send generic SMS notification
 * Used for custom messages and announcements
 */
export async function sendGenericSms(
  phone: string,
  message: string
): Promise<SmsResult> {
  return sendSms({
    phone,
    message,
    type: 'general',
  })
}
