// SendGrid Email Service
// Handles transactional emails for orders, consultations, and notifications

interface EmailParams {
  to: string
  subject: string
  html: string
  from?: string
  replyTo?: string
}

interface EmailResult {
  success: boolean
  messageId?: string
  error?: string
}

const DEFAULT_FROM = 'hello@nuvanaah.com'
const TEMPLATE_IDS = {
  ORDER_CONFIRMATION: 'd-order-confirmation-template-id',
  SHIPPING_UPDATE: 'd-shipping-update-template-id',
  CONSULTATION_CONFIRMATION: 'd-consultation-confirmation-template-id',
  CONSULTATION_REMINDER: 'd-consultation-reminder-template-id',
  WELCOME: 'd-welcome-email-template-id',
  NEWSLETTER_WELCOME: 'd-newsletter-welcome-template-id',
  RETURN_INITIATED: 'd-return-initiated-template-id',
  REFUND_ISSUED: 'd-refund-issued-template-id',
  PASSWORD_RESET: 'd-password-reset-template-id',
  ACCOUNT_VERIFICATION: 'd-account-verification-template-id',
}

/**
 * Send email using SendGrid
 * In production, uses SendGrid's Mail Send API
 */
async function sendEmail(params: EmailParams): Promise<EmailResult> {
  try {
    // In production, this would use:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: params.to,
    //   from: params.from || DEFAULT_FROM,
    //   subject: params.subject,
    //   html: params.html,
    //   replyTo: params.replyTo,
    // });

    console.log(`[SENDGRID] Email sent to: ${params.to}`)
    console.log(`Subject: ${params.subject}`)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 100))

    return {
      success: true,
      messageId: `msg_${Date.now()}`,
    }
  } catch (error) {
    console.error('SendGrid email send failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Send order confirmation email
 */
export async function sendOrderConfirmationEmail(
  email: string,
  orderData: {
    orderId: string
    amount: number
    items: Array<{ name: string; quantity: number; price: number }>
    estimatedDelivery: string
    trackingUrl: string
  }
): Promise<EmailResult> {
  const itemsList = orderData.items
    .map((item) => `<li>${item.name} × ${item.quantity} - ₹${item.price}</li>`)
    .join('')

  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; max-width: 600px; margin: 0 auto;">
        <img src="https://nuvanaah.com/logo.svg" alt="Nuvanaah" style="height: 40px; margin-bottom: 20px;">
        
        <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Order Confirmed!</h1>
        <p style="color: #666; margin-bottom: 20px;">Thank you for your order. We've received your purchase and are preparing it for shipment.</p>
        
        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p style="margin: 0; color: #666;"><strong>Order Number:</strong> #${orderData.orderId}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Total Amount:</strong> ₹${orderData.amount}</p>
        </div>
        
        <h3 style="color: #333; margin-bottom: 10px;">Order Items</h3>
        <ul style="color: #666; margin-bottom: 20px;">
          ${itemsList}
        </ul>
        
        <p style="color: #666; margin-bottom: 20px;">
          <strong>Estimated Delivery:</strong> ${orderData.estimatedDelivery}
        </p>
        
        <a href="${orderData.trackingUrl}" style="display: inline-block; background-color: #d4a574; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-bottom: 20px; font-weight: bold;">
          Track Your Order
        </a>
        
        <p style="color: #666; font-size: 14px; margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
          <strong>We Ship Discreetly</strong><br>
          Your package comes in plain, unmarked packaging to protect your privacy.
        </p>
        
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          Questions? Contact us at hello@nuvanaah.com or visit our FAQ page.
        </p>
      </div>
    </div>
  `

  return sendEmail({
    to: email,
    subject: `Order Confirmation - Nuvanaah #${orderData.orderId}`,
    html,
  })
}

/**
 * Send shipping update email
 */
export async function sendShippingUpdateEmail(
  email: string,
  shippingData: {
    orderId: string
    trackingNumber: string
    carrier: string
    estimatedDelivery: string
    trackingUrl: string
  }
): Promise<EmailResult> {
  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; max-width: 600px; margin: 0 auto;">
        <img src="https://nuvanaah.com/logo.svg" alt="Nuvanaah" style="height: 40px; margin-bottom: 20px;">
        
        <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Order Shipped! 📦</h1>
        <p style="color: #666; margin-bottom: 20px;">Your order is on its way! Track your package in real-time.</p>
        
        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p style="margin: 0; color: #666;"><strong>Order Number:</strong> #${shippingData.orderId}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Tracking Number:</strong> ${shippingData.trackingNumber}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Carrier:</strong> ${shippingData.carrier}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Estimated Delivery:</strong> ${shippingData.estimatedDelivery}</p>
        </div>
        
        <a href="${shippingData.trackingUrl}" style="display: inline-block; background-color: #d4a574; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-bottom: 20px; font-weight: bold;">
          Track Shipment
        </a>
        
        <p style="color: #666; font-size: 14px; margin-top: 20px;">
          <strong>Discreet Packaging:</strong> Your package is shipped in plain packaging with no visible branding.
        </p>
      </div>
    </div>
  `

  return sendEmail({
    to: email,
    subject: `Your Order is Shipped - Nuvanaah #${shippingData.orderId}`,
    html,
  })
}

/**
 * Send consultation confirmation email
 */
export async function sendConsultationConfirmationEmail(
  email: string,
  consultationData: {
    consultationId: string
    type: string
    dateTime: string
    specialistName: string
    joinUrl?: string
    phoneNumber?: string
  }
): Promise<EmailResult> {
  const joinMethod = consultationData.joinUrl
    ? `<a href="${consultationData.joinUrl}" style="display: inline-block; background-color: #d4a574; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">Join Consultation</a>`
    : `<p style="color: #666;">We'll call you on the number registered with your account.</p>`

  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; max-width: 600px; margin: 0 auto;">
        <img src="https://nuvanaah.com/logo.svg" alt="Nuvanaah" style="height: 40px; margin-bottom: 20px;">
        
        <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Consultation Confirmed!</h1>
        <p style="color: #666; margin-bottom: 20px;">We're excited to connect with you. Here are your consultation details:</p>
        
        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p style="margin: 0; color: #666;"><strong>Consultation Type:</strong> ${consultationData.type}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Specialist:</strong> ${consultationData.specialistName}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Date & Time:</strong> ${consultationData.dateTime}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Duration:</strong> 30 minutes</p>
        </div>
        
        ${joinMethod}
        
        <p style="color: #666; font-size: 14px; margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
          <strong>What to Expect:</strong><br>
          • Personalized guidance on products and care<br>
          • Q&A session<br>
          • Exclusive recommendations
        </p>
      </div>
    </div>
  `

  return sendEmail({
    to: email,
    subject: `Consultation Confirmed - Nuvanaah #${consultationData.consultationId}`,
    html,
  })
}

/**
 * Send consultation reminder email
 */
export async function sendConsultationReminderEmail(
  email: string,
  consultationData: {
    consultationId: string
    type: string
    dateTime: string
    specialistName: string
    joinUrl?: string
  }
): Promise<EmailResult> {
  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; max-width: 600px; margin: 0 auto;">
        <img src="https://nuvanaah.com/logo.svg" alt="Nuvanaah" style="height: 40px; margin-bottom: 20px;">
        
        <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Consultation Reminder 🔔</h1>
        <p style="color: #666; margin-bottom: 20px;">Your ${consultationData.type} consultation with ${consultationData.specialistName} is coming up!</p>
        
        <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #ffc107;">
          <p style="margin: 0; color: #856404; font-weight: bold;">Date & Time: ${consultationData.dateTime}</p>
        </div>
        
        ${consultationData.joinUrl ? `<a href="${consultationData.joinUrl}" style="display: inline-block; background-color: #d4a574; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">Join Consultation</a>` : '<p style="color: #666;">We\'ll connect with you shortly via your registered phone number.</p>'}
        
        <p style="color: #666; font-size: 14px; margin-top: 20px;">
          Need to reschedule? Reply to this email or visit your account on Nuvanaah.
        </p>
      </div>
    </div>
  `

  return sendEmail({
    to: email,
    subject: `Reminder: Your Consultation is Today - Nuvanaah`,
    html,
  })
}

/**
 * Send newsletter welcome email
 */
export async function sendNewsletterWelcomeEmail(
  email: string
): Promise<EmailResult> {
  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; max-width: 600px; margin: 0 auto;">
        <img src="https://nuvanaah.com/logo.svg" alt="Nuvanaah" style="height: 40px; margin-bottom: 20px;">
        
        <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Welcome to Nuvanaah Newsletter! 💌</h1>
        <p style="color: #666; margin-bottom: 20px;">Thank you for subscribing. You'll now receive wellness tips, product guides, and exclusive offers.</p>
        
        <div style="background-color: #d4a574; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
          <h2 style="margin: 0 0 10px 0;">Special Welcome Gift</h2>
          <p style="margin: 0;">Use code <strong>WELCOME20</strong> for 20% off your first order!</p>
        </div>
        
        <h3 style="color: #333; margin-bottom: 10px;">What to Expect:</h3>
        <ul style="color: #666;">
          <li>Weekly wellness tips and product guides</li>
          <li>New product launches and updates</li>
          <li>Exclusive subscriber discounts</li>
          <li>Expert advice and Q&As</li>
        </ul>
        
        <p style="color: #666; font-size: 14px; margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
          You can unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  `

  return sendEmail({
    to: email,
    subject: 'Welcome to Nuvanaah Newsletter - 20% Off Your First Order!',
    html,
  })
}

/**
 * Send password reset email
 */
export async function sendPasswordResetEmail(
  email: string,
  resetLink: string
): Promise<EmailResult> {
  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; max-width: 600px; margin: 0 auto;">
        <img src="https://nuvanaah.com/logo.svg" alt="Nuvanaah" style="height: 40px; margin-bottom: 20px;">
        
        <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Reset Your Password</h1>
        <p style="color: #666; margin-bottom: 20px;">We received a request to reset your password. Click the button below to create a new password.</p>
        
        <a href="${resetLink}" style="display: inline-block; background-color: #d4a574; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-bottom: 20px; font-weight: bold;">
          Reset Password
        </a>
        
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          This link will expire in 24 hours. If you didn't request this, you can ignore this email.
        </p>
      </div>
    </div>
  `

  return sendEmail({
    to: email,
    subject: 'Reset Your Nuvanaah Password',
    html,
  })
}

/**
 * Send return initiated email
 */
export async function sendReturnInitiatedEmail(
  email: string,
  returnData: {
    orderId: string
    pickupDate: string
    refundAmount: number
  }
): Promise<EmailResult> {
  const html = `
    <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
      <div style="background-color: white; border-radius: 8px; padding: 30px; max-width: 600px; margin: 0 auto;">
        <img src="https://nuvanaah.com/logo.svg" alt="Nuvanaah" style="height: 40px; margin-bottom: 20px;">
        
        <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">Return Initiated ✓</h1>
        <p style="color: #666; margin-bottom: 20px;">We've initiated your return request. Here are the details:</p>
        
        <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <p style="margin: 0; color: #666;"><strong>Order Number:</strong> #${returnData.orderId}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Pickup Date:</strong> ${returnData.pickupDate}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Refund Amount:</strong> ₹${returnData.refundAmount}</p>
        </div>
        
        <p style="color: #666; margin-bottom: 10px;">
          <strong>What happens next:</strong>
        </p>
        <ol style="color: #666;">
          <li>Package will be picked up on ${returnData.pickupDate}</li>
          <li>Once received and verified, refund will be processed</li>
          <li>Refund will be credited within 5 business days</li>
        </ol>
      </div>
    </div>
  `

  return sendEmail({
    to: email,
    subject: `Return Initiated - Nuvanaah #${returnData.orderId}`,
    html,
  })
}
