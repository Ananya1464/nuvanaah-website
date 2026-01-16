// Analytics and Tracking Service
// Integrates Google Analytics 4, Sentry error tracking, and custom event logging

interface AnalyticsEvent {
  name: string
  category?: string
  value?: number
  label?: string
  userId?: string
  metadata?: Record<string, any>
}

interface PageViewData {
  path: string
  title: string
  referrer?: string
  userId?: string
}

interface PurchaseData {
  transactionId: string
  value: number
  currency: string
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
    category: string
  }>
  tax?: number
  shipping?: number
  coupon?: string
}

/**
 * Initialize analytics
 * In production, initializes Google Analytics 4
 */
export function initializeAnalytics(measurementId: string): void {
  console.log('[ANALYTICS] Initializing with measurement ID:', measurementId)

  // In production:
  // import { getAnalytics } from "firebase/analytics";
  // const analytics = getAnalytics(app);
  // window.dataLayer = window.dataLayer || [];
  // gtag('config', measurementId);
}

/**
 * Track page view
 */
export function trackPageView(data: PageViewData): void {
  console.log('[ANALYTICS] Page view:', data.path)

  // In production:
  // gtag('event', 'page_view', {
  //   page_path: data.path,
  //   page_title: data.title,
  //   page_referrer: data.referrer,
  // });
}

/**
 * Track custom event
 */
export function trackEvent(event: AnalyticsEvent): void {
  console.log('[ANALYTICS] Event:', event.name, event)

  // In production:
  // gtag('event', event.name, {
  //   event_category: event.category,
  //   event_label: event.label,
  //   value: event.value,
  //   user_id: event.userId,
  //   ...event.metadata,
  // });
}

/**
 * Track purchase event
 * Important ecommerce event for conversion tracking
 */
export function trackPurchase(purchase: PurchaseData): void {
  console.log('[ANALYTICS] Purchase event:', purchase.transactionId)

  const items = purchase.items.map((item) => ({
    item_id: item.id,
    item_name: item.name,
    item_category: item.category,
    price: item.price,
    quantity: item.quantity,
  }))

  trackEvent({
    name: 'purchase',
    category: 'ecommerce',
    value: purchase.value,
    metadata: {
      transaction_id: purchase.transactionId,
      currency: purchase.currency,
      value: purchase.value,
      tax: purchase.tax,
      shipping: purchase.shipping,
      coupon: purchase.coupon,
      items,
    },
  })

  // In production:
  // gtag('event', 'purchase', {
  //   transaction_id: purchase.transactionId,
  //   value: purchase.value,
  //   currency: purchase.currency,
  //   tax: purchase.tax,
  //   shipping: purchase.shipping,
  //   coupon: purchase.coupon,
  //   items: items,
  // });
}

/**
 * Track add to cart event
 */
export function trackAddToCart(itemData: {
  itemId: string
  itemName: string
  price: number
  quantity: number
  category: string
}): void {
  trackEvent({
    name: 'add_to_cart',
    category: 'ecommerce',
    value: itemData.price * itemData.quantity,
    label: itemData.itemName,
    metadata: {
      item_id: itemData.itemId,
      item_name: itemData.itemName,
      price: itemData.price,
      quantity: itemData.quantity,
      category: itemData.category,
    },
  })
}

/**
 * Track remove from cart event
 */
export function trackRemoveFromCart(itemData: {
  itemId: string
  itemName: string
  price: number
  quantity: number
}): void {
  trackEvent({
    name: 'remove_from_cart',
    category: 'ecommerce',
    value: itemData.price * itemData.quantity,
    label: itemData.itemName,
  })
}

/**
 * Track view item event
 */
export function trackViewItem(itemData: {
  itemId: string
  itemName: string
  category: string
  price: number
}): void {
  trackEvent({
    name: 'view_item',
    category: 'ecommerce',
    label: itemData.itemName,
    metadata: {
      item_id: itemData.itemId,
      item_name: itemData.itemName,
      item_category: itemData.category,
      price: itemData.price,
    },
  })
}

/**
 * Track search event
 */
export function trackSearch(query: string, resultCount: number): void {
  trackEvent({
    name: 'search',
    category: 'engagement',
    label: query,
    value: resultCount,
  })
}

/**
 * Track consultation booking event
 */
export function trackConsultationBooked(data: {
  consultationType: string
  city: string
  specialistName: string
}): void {
  trackEvent({
    name: 'consultation_booked',
    category: 'engagement',
    label: data.consultationType,
    metadata: {
      consultation_type: data.consultationType,
      city: data.city,
      specialist: data.specialistName,
    },
  })
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup(email: string): void {
  trackEvent({
    name: 'newsletter_signup',
    category: 'engagement',
    label: 'Newsletter',
  })
}

/**
 * Track video view
 */
export function trackVideoView(videoId: string, videoTitle: string): void {
  trackEvent({
    name: 'video_view',
    category: 'engagement',
    label: videoTitle,
    metadata: {
      video_id: videoId,
    },
  })
}

/**
 * Track error for Sentry
 */
export function trackError(
  error: Error,
  context?: Record<string, any>
): void {
  console.error('[SENTRY] Error tracked:', error)

  // In production:
  // import * as Sentry from "@sentry/nextjs";
  // Sentry.captureException(error, { extra: context });
}

/**
 * Track page load performance
 */
export function trackPerformance(): void {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Track Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('[PERFORMANCE]', entry.name, entry.value)

        trackEvent({
          name: 'web_vitals',
          category: 'performance',
          value: Math.round(entry.value as number),
          label: entry.name,
        })
      }
    })

    // Observe all performance entries
    observer.observe({ entryTypes: ['measure', 'navigation'] })
  }
}

/**
 * Track user engagement time
 */
export function trackEngagementTime(
  pagePath: string,
  timeOnPageSeconds: number
): void {
  trackEvent({
    name: 'engagement_time',
    category: 'engagement',
    value: timeOnPageSeconds,
    label: pagePath,
  })
}

/**
 * Set user properties for Analytics
 */
export function setUserProperties(userId: string, properties: Record<string, any>): void {
  console.log('[ANALYTICS] Setting user properties for:', userId)

  // In production:
  // gtag('config', {
  //   'user_id': userId,
  //   'custom_map': {
  //     'dimension1': 'customer_status',
  //     'dimension2': 'account_age',
  //   }
  // });
  // gtag('event', 'screen_view', {
  //   'firebase_screen': properties.screen_name,
  // });
}

/**
 * Track conversion event
 */
export function trackConversion(conversionName: string, value?: number): void {
  trackEvent({
    name: 'conversion',
    category: 'conversions',
    label: conversionName,
    value: value,
  })
}

/**
 * Initialize Sentry error tracking
 */
export function initializeSentry(dsn: string): void {
  console.log('[SENTRY] Initializing error tracking')

  // In production:
  // import * as Sentry from "@sentry/nextjs";
  // Sentry.init({
  //   dsn: dsn,
  //   environment: process.env.NODE_ENV,
  //   tracesSampleRate: 1.0,
  // });
}

/**
 * Track custom metric
 */
export function trackMetric(
  metricName: string,
  value: number,
  unit?: string
): void {
  console.log(`[METRICS] ${metricName}: ${value}${unit ? ' ' + unit : ''}`)

  trackEvent({
    name: 'custom_metric',
    category: 'metrics',
    value: value,
    label: metricName,
  })
}
