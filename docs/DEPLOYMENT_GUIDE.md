# Deployment Guide & Production Checklist

Complete guide for deploying Nuvanaah to production with comprehensive testing, monitoring, and rollback procedures.

## 1. Pre-Deployment Requirements

### Code Quality
- [ ] All unit tests passing
- [ ] All integration tests passing
- [ ] All E2E tests passing
- [ ] Code review completed and approved
- [ ] No console errors or warnings in production build
- [ ] TypeScript strict mode: no errors
- [ ] Linting passes (ESLint)

### Performance
- [ ] Lighthouse score 90+ (desktop)
- [ ] Lighthouse score 85+ (mobile)
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Build bundle < 200KB (gzipped)

### Testing
- [ ] Unit tests coverage > 80%
- [ ] Integration tests for all APIs
- [ ] E2E tests for critical journeys (5 scenarios)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing (iOS, Android)
- [ ] Accessibility audit WCAG 2.1 AA passed

### Security
- [ ] All dependencies up-to-date (npm audit)
- [ ] No vulnerabilities found
- [ ] Security headers configured
- [ ] HTTPS enabled
- [ ] API keys not in source code
- [ ] Environment variables configured securely
- [ ] CSRF tokens enabled
- [ ] Rate limiting enabled
- [ ] Input validation on all endpoints
- [ ] SQL injection prevention verified

---

## 2. Staging Deployment (Pre-Production)

### Deploy to Vercel Staging

**Step 1: Create Staging Environment**
```bash
# Install Vercel CLI
npm install -g vercel

# Connect to project
vercel link

# Deploy to staging
vercel --prod --name=nuvanaah-staging-preview
```

**Step 2: Configure Environment Variables**
```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Add staging-specific values:
NEXT_PUBLIC_API_URL=https://api-staging.nuvanaah.com
NEXT_PUBLIC_SUPABASE_URL=https://staging-xxxxx.supabase.co
DATABASE_URL=postgresql://user:pass@staging-db.xxx
RAZORPAY_KEY_ID=rzp_test_xxx (TEST MODE)
SENDGRID_API_KEY=SG.xxxx_staging
SENTRY_DSN=https://xxxxx@staging.sentry.io
```

**Step 3: Deploy**
```bash
# Deploy to Vercel
vercel deploy

# Promote to production (after verification)
vercel promote <deployment-url>
```

### Staging QA Checklist

**Functionality Testing**
- [ ] Homepage loads and renders correctly
- [ ] Product catalog displays all products
- [ ] Product filtering works
- [ ] Search functionality works
- [ ] Shopping cart add/remove items
- [ ] Cart updates correctly
- [ ] Checkout form displays
- [ ] Address validation works
- [ ] Payment gateway loads (test mode)
- [ ] Order confirmation page shows
- [ ] Order confirmation email sent
- [ ] User login/signup works
- [ ] User dashboard displays orders
- [ ] Blog page and articles load
- [ ] Consultation booking form works
- [ ] City pages load
- [ ] FAQ search and accordion work
- [ ] Partner registration form works

**Email & Notifications**
- [ ] Order confirmation email received
- [ ] Password reset email works
- [ ] Newsletter signup email received
- [ ] SMS notifications sent (test mode)
- [ ] Consultation reminder notification sent

**Analytics & Monitoring**
- [ ] Google Analytics events tracked
- [ ] Sentry error tracking working
- [ ] Performance monitoring active
- [ ] No errors in browser console
- [ ] No errors in server logs

**Database & API**
- [ ] Database migrations successful
- [ ] API endpoints responding
- [ ] WooCommerce sync working
- [ ] Supabase tables created
- [ ] Authentication working

**Performance**
- [ ] Lighthouse score 90+
- [ ] Page load time < 3s
- [ ] Images optimized
- [ ] No layout shift issues
- [ ] Animations smooth

---

## 3. Production Deployment

### Step 1: Final Pre-Launch Checklist

**Code & Assets**
- [ ] All code changes merged to main branch
- [ ] No debug code or console logs
- [ ] No TODO comments left
- [ ] All imports cleaned up
- [ ] No unused dependencies
- [ ] Build successful (npm run build)
- [ ] Production build tested locally

**Configuration**
- [ ] Production environment variables set
- [ ] Database backups configured
- [ ] CDN configured (if applicable)
- [ ] Email service credentials verified
- [ ] Payment gateway production keys set
- [ ] API keys rotated and secured
- [ ] SSL/TLS certificate valid
- [ ] DNS records updated

**Data**
- [ ] Database migrations tested in staging
- [ ] Data backup created
- [ ] Database rollback plan ready
- [ ] Initial product data loaded
- [ ] Admin users created
- [ ] Test orders created and verified

**Monitoring & Alerts**
- [ ] Sentry project created
- [ ] Error alerts configured
- [ ] Performance monitoring enabled
- [ ] Uptime monitoring enabled
- [ ] Log aggregation configured
- [ ] Alerting channels configured (email, Slack)
- [ ] On-call schedule established

### Step 2: Deploy to Production

**Vercel Production Deployment**

```bash
# Option 1: Via Git push to main (if auto-deploy configured)
git push origin main

# Option 2: Manual deployment
vercel deploy --prod

# Option 3: Via Vercel dashboard
# 1. Go to Vercel Dashboard
# 2. Select Nuvanaah project
# 3. Click "Deploy"
# 4. Monitor deployment progress
```

**Deployment Rollback Plan**
```bash
# If issues occur, rollback to previous version
vercel rollback

# Or redeploy previous commit
vercel deploy --prod [previous-commit-sha]
```

### Step 3: Post-Deployment Verification

**Immediate Checks (First 30 Minutes)**
- [ ] Website loads and homepage displays
- [ ] No JavaScript errors in console
- [ ] No server errors in logs
- [ ] Performance metrics within targets
- [ ] Sentry not showing critical errors
- [ ] Database connections working
- [ ] API endpoints responding
- [ ] Email service working
- [ ] Payment gateway responding

**Quick Smoke Tests (First Hour)**
1. Homepage → Product Page
   - [ ] Images load
   - [ ] Navigation works
   - [ ] Page responsive on mobile

2. Product → Add to Cart
   - [ ] Cart updates
   - [ ] Cart count updates

3. Cart → Checkout
   - [ ] Form displays
   - [ ] Address validation works
   - [ ] Payment gateway loads

4. Complete Purchase (Test Transaction)
   - [ ] Order created
   - [ ] Confirmation email sent
   - [ ] Database updated
   - [ ] Order appears in dashboard

5. User Registration
   - [ ] Signup form works
   - [ ] Verification email sent
   - [ ] Login works
   - [ ] Dashboard accessible

6. Other Features
   - [ ] Blog page loads
   - [ ] FAQ search works
   - [ ] Consultation booking works
   - [ ] Newsletter signup works

### Step 4: Monitoring (First 24 Hours)

**Real-time Monitoring**
```
Every 30 minutes (first 6 hours):
- [ ] Check Sentry for new errors
- [ ] Check analytics for traffic
- [ ] Verify no spike in 500 errors
- [ ] Check payment processing (no failures)
- [ ] Monitor database performance

Every 1 hour (next 18 hours):
- [ ] Verify uptime (100%)
- [ ] Check error rate < 0.1%
- [ ] Check user transactions successful
- [ ] Check email delivery
- [ ] Review logs for warnings
```

**Key Metrics to Monitor**
```
Sentry Dashboard:
- Error rate should be < 0.1%
- No critical errors
- Response time < 500ms

Analytics Dashboard:
- Traffic normal for time of day
- Bounce rate not elevated
- User flow completing
- No blocked content

Server Metrics:
- CPU usage < 80%
- Memory usage < 80%
- Database queries < 500ms
- Error logs minimal
```

---

## 4. Production Environment Setup

### Required Environment Variables

```bash
# Application
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://www.nuvanaah.com

# API
NEXT_PUBLIC_API_URL=https://api.nuvanaah.com
NEXT_PUBLIC_API_KEY=xxx_prod_xxx

# Database
DATABASE_URL=postgresql://user:secure_pass@prod-db.xxx
REDIS_URL=redis://user:pass@prod-redis.xxx

# Authentication
NEXTAUTH_SECRET=xxx_long_random_string_xxx
NEXTAUTH_URL=https://www.nuvanaah.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://prod-xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxx_prod_xxx

# Payment
RAZORPAY_KEY_ID=rzp_live_xxxxx
RAZORPAY_KEY_SECRET=xxx_prod_secret_xxx
RAZORPAY_WEBHOOK_SECRET=xxx_webhook_secret_xxx

# Email
SENDGRID_API_KEY=SG.xxx_prod_xxx
SENDGRID_FROM_EMAIL=hello@nuvanaah.com
SENDGRID_TEMPLATE_WELCOME=d_xxx
SENDGRID_TEMPLATE_RESET=d_xxx

# SMS
MSG91_AUTH_KEY=xxx_prod_xxx
TWILIO_ACCOUNT_SID=AC_xxx
TWILIO_AUTH_TOKEN=xxx

# Shipping
SHIPROCKET_EMAIL=admin@nuvanaah.com
SHIPROCKET_PASSWORD=xxx_prod_xxx
SHIPROCKET_API_TOKEN=xxx_prod_xxx

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SENTRY_DSN=https://xxxxx@sentry.io/123456
SENTRY_AUTH_TOKEN=sntrys_xxx

# Security
AWS_ACCESS_KEY_ID=AKIA_xxx
AWS_SECRET_ACCESS_KEY=xxx
AWS_REGION=ap-south-1
ENCRYPTION_KEY=xxx_32_byte_key_xxx

# Admin
ADMIN_EMAIL=admin@nuvanaah.com
ADMIN_PASSWORD_RESET_URL=https://www.nuvanaah.com/auth/reset
```

### Security Checklist

**HTTP Headers**
```
Set in Vercel or Next.js middleware:
- Strict-Transport-Security: max-age=31536000
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=()
```

**CORS Configuration**
```
Allowed Origins:
- https://www.nuvanaah.com
- https://nuvanaah.com
(No localhost or staging URLs)

Allowed Methods: GET, POST, PUT, DELETE, OPTIONS
Allowed Headers: Content-Type, Authorization
```

**Rate Limiting**
```
API Routes:
- Login/Register: 5 attempts per 15 minutes per IP
- Checkout: 10 attempts per hour per user
- Search: 30 requests per minute per IP
- API endpoints: 100 requests per minute per user
```

**Data Protection**
```
- All passwords hashed with bcrypt
- Sensitive data encrypted at rest
- HTTPS enforced everywhere
- SQL injection prevention via ORM
- XSS prevention via sanitization
- CSRF tokens on all forms
- Input validation on all endpoints
```

### Database Backups

```bash
# Daily automated backups (configure with hosting provider)
Vercel PostgreSQL:
- Automatic daily backups
- 30-day retention
- One-click restore

Manual Backup:
pg_dump -h prod-db.xxx -U user -d nuvanaah > backup_2024_01_15.sql

Restore:
psql -h prod-db.xxx -U user -d nuvanaah < backup_2024_01_15.sql
```

---

## 5. E2E Testing Setup (Playwright)

### Installation

```bash
npm install --save-dev @playwright/test
npx playwright install

# Create tests directory
mkdir tests
```

### Test Configuration (tests/playwright.config.ts)

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.E2E_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### Critical E2E Test Scenarios

**Test 1: Homepage → Product → Cart → Checkout (COD)**

```typescript
// tests/checkout-cod.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Checkout Flow - Cash on Delivery', () => {
  test('should complete purchase with COD', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');
    expect(await page.title()).toContain('Nuvanaah');
    
    // Navigate to products
    await page.click('text=Shop Now');
    await page.waitForURL('/products');
    
    // Filter by category
    await page.click('[data-testid="filter-mastectomy"]');
    await page.waitForSelector('[data-testid="product-card"]');
    
    // Click first product
    const productCard = page.locator('[data-testid="product-card"]').first();
    await productCard.click();
    await page.waitForURL(/\/products\/.+/);
    
    // Verify product details
    expect(page.locator('h1')).toContainText('Product Name');
    expect(page.locator('[data-testid="price"]')).toBeVisible();
    
    // Add to cart
    await page.selectOption('[data-testid="size-select"]', 'XL');
    await page.fill('[data-testid="quantity"]', '1');
    await page.click('[data-testid="add-to-cart"]');
    
    // Verify cart updated
    expect(page.locator('[data-testid="cart-count"]')).toContainText('1');
    
    // Navigate to checkout
    await page.click('[data-testid="view-cart"]');
    await page.waitForURL('/cart');
    
    expect(page.locator('[data-testid="cart-item"]')).toHaveCount(1);
    
    // Proceed to checkout
    await page.click('[data-testid="checkout-btn"]');
    await page.waitForURL('/checkout');
    
    // Step 1: Login/Register
    await page.fill('[data-testid="email"]', 'test@example.com');
    await page.fill('[data-testid="password"]', 'TestPassword123!');
    await page.click('[data-testid="signup-btn"]');
    
    // Step 2: Shipping Address
    await page.fill('[data-testid="full-name"]', 'Test User');
    await page.fill('[data-testid="address"]', '123 Test St');
    await page.fill('[data-testid="city"]', 'Mumbai');
    await page.fill('[data-testid="state"]', 'MH');
    await page.fill('[data-testid="pincode"]', '400001');
    await page.fill('[data-testid="phone"]', '9876543210');
    await page.click('[data-testid="next-step"]');
    
    // Step 3: Payment Method
    await page.click('[data-testid="payment-cod"]');
    await page.click('[data-testid="place-order"]');
    
    // Verify order confirmation
    await page.waitForURL('/order-confirmation');
    expect(page.locator('[data-testid="confirmation-message"]')).toContainText('Order Placed Successfully');
    
    // Verify order number
    const orderNumber = await page.locator('[data-testid="order-number"]').textContent();
    expect(orderNumber).toMatch(/^ORD-\d{10}$/);
  });
});
```

**Test 2: User Authentication**

```typescript
// tests/authentication.spec.ts
test('should signup, login, and access dashboard', async ({ page }) => {
  // Signup
  await page.goto('/checkout');
  await page.click('text=Sign Up');
  
  await page.fill('[data-testid="name"]', 'New User');
  await page.fill('[data-testid="email"]', `user${Date.now()}@example.com`);
  await page.fill('[data-testid="password"]', 'SecurePass123!');
  await page.click('[data-testid="create-account"]');
  
  expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  
  // Logout
  await page.click('[data-testid="user-menu"]');
  await page.click('text=Logout');
  
  // Login
  await page.click('[data-testid="login-link"]');
  await page.fill('[data-testid="email"]', `user${Date.now()}@example.com`);
  await page.fill('[data-testid="password"]', 'SecurePass123!');
  await page.click('[data-testid="login-btn"]');
  
  // Verify dashboard
  await page.waitForURL('/account');
  expect(page.locator('text=My Orders')).toBeVisible();
});
```

**Test 3: Blog & Newsletter**

```typescript
// tests/blog-newsletter.spec.ts
test('should read blog and subscribe newsletter', async ({ page }) => {
  // Navigate to blog
  await page.goto('/blog');
  expect(page.locator('[data-testid="blog-post"]')).toHaveCount(6);
  
  // Filter by category
  await page.click('[data-testid="filter-recovery"]');
  const filteredPosts = page.locator('[data-testid="blog-post"]');
  expect(filteredPosts).toBeDefined();
  
  // Read blog post
  await filteredPosts.first().click();
  await page.waitForURL(/\/blog\/.+/);
  
  expect(page.locator('h1')).toBeVisible();
  expect(page.locator('[data-testid="author"]')).toBeVisible();
  
  // Subscribe to newsletter
  await page.scroll('bottom');
  await page.fill('[data-testid="newsletter-email"]', 'test@example.com');
  await page.click('[data-testid="subscribe-btn"]');
  
  expect(page.locator('[data-testid="success-message"]')).toContainText('Subscribed');
});
```

**Test 4: Consultation Booking**

```typescript
// tests/consultation-booking.spec.ts
test('should book consultation successfully', async ({ page }) => {
  await page.goto('/consultations');
  
  // Step 1: Select type
  await page.click('[data-testid="consultation-type-gynec"]');
  await page.click('[data-testid="next"]');
  
  // Step 2: Select date/time
  await page.click('[data-testid="date-picker"]');
  await page.click('[data-testid="date-2024-02-15"]');
  await page.click('[data-testid="time-10am"]');
  await page.click('[data-testid="next"]');
  
  // Step 3: Personal details
  await page.fill('[data-testid="name"]', 'Test User');
  await page.fill('[data-testid="email"]', 'test@example.com');
  await page.fill('[data-testid="phone"]', '9876543210');
  await page.click('[data-testid="confirm"]');
  
  // Verify confirmation
  await page.waitForURL('/consultation-confirmation');
  expect(page.locator('[data-testid="booking-id"]')).toBeVisible();
});
```

### Run Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/checkout-cod.spec.ts

# Run in headed mode (see browser)
npx playwright test --headed

# Run with trace
npx playwright test --trace on

# Generate HTML report
npx playwright show-report

# CI/CD command
npm run test:e2e
```

### Add to package.json

```json
{
  "scripts": {
    "test:e2e": "playwright test",
    "test:e2e:headed": "playwright test --headed",
    "test:e2e:report": "playwright show-report",
    "test:e2e:debug": "playwright test --debug"
  }
}
```

---

## 6. Production Monitoring

### Sentry Error Tracking

**Configuration (lib/sentry.ts already created)**
- Monitor errors in production
- Track error frequency and severity
- Get notified of critical issues

**Alerts:**
```
- New error type → Email
- Error spike (>100/hour) → Email + Slack
- Critical error → Email + Slack + Phone
```

### Google Analytics

**Track Key Metrics:**
- User engagement (pages/session, avg session duration)
- Conversion funnel (view product → checkout → purchase)
- Revenue metrics (transactions, order value)
- Bounce rate by page
- User source (organic, paid, referral)

**Goals:**
- Signup: 500+ per month
- Purchase: 100+ per month
- Newsletter: 1000+ subscribers
- Consultation: 50+ per month

### Uptime Monitoring

Use service like UptimeRobot:
```
Monitor: https://www.nuvanaah.com
Check interval: Every 5 minutes
Alert: Down detected
Backup notifications: Email, SMS, Slack
Target: 99.9% uptime
```

### Performance Monitoring

**Vercel Analytics:**
- Core Web Vitals
- Page load performance
- Build performance
- Edge region latency

**Target Metrics:**
- LCP < 2.5s (75th percentile)
- FID < 100ms (75th percentile)
- CLS < 0.1 (75th percentile)

---

## 7. Disaster Recovery & Rollback

### Rollback Plan

**If Critical Issue Detected:**

```bash
# Option 1: Rollback to previous Vercel deployment
vercel rollback

# Option 2: Manually redeploy previous commit
git revert HEAD
git push origin main

# Option 3: Restore database from backup
# Contact hosting provider or run:
pg_restore -h prod-db.xxx -U user -d nuvanaah backup_file.sql
```

**Communication:**
1. Notify team immediately
2. Post status on status page
3. Email users if severe
4. Document incident and cause

### Data Recovery

**Database Backup Schedule:**
- Hourly: Last 24 hours
- Daily: Last 30 days
- Weekly: Last 3 months
- Monthly: Last 1 year

**Backup Verification:**
- [ ] Test restore weekly
- [ ] Verify backup integrity
- [ ] Document restore procedure

---

## 8. Post-Deployment (Week 1)

### Daily Checks
- [ ] Error rate normal
- [ ] No critical errors in Sentry
- [ ] Uptime 100%
- [ ] Payment processing normal
- [ ] User feedback reviewed

### Weekly Review
- [ ] Analytics reviewed
- [ ] Performance metrics on target
- [ ] User feedback addressed
- [ ] Any issues documented
- [ ] Team retrospective

### Success Criteria
- ✅ Zero critical errors
- ✅ 99.9%+ uptime
- ✅ Performance targets met
- ✅ User feedback positive
- ✅ All features working
