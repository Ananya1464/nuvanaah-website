# Environment Variables Documentation for Nuvanaah

## Required Variables (Must be set before deployment)

### WooCommerce API
**Purpose:** Product management, order creation, inventory sync

- `NEXT_PUBLIC_WOOCOMMERCE_API_URL`: Your WooCommerce REST API endpoint
  - Format: `https://your-site.com/wp-json/wc/v3`
  - Where to get: WooCommerce Admin → Settings → Advanced → REST API
  - Public: ✅ Yes (prefix: NEXT_PUBLIC_)

- `WOOCOMMERCE_CONSUMER_KEY`: API consumer key for authentication
  - Format: `ck_test_xxxxx` (test) or `ck_live_xxxxx` (production)
  - Where to get: WooCommerce Admin → Settings → Advanced → REST API
  - Public: ❌ No (server-side only)

- `WOOCOMMERCE_CONSUMER_SECRET`: API consumer secret for authentication
  - Format: `cs_test_xxxxx` (test) or `cs_live_xxxxx` (production)
  - Where to get: WooCommerce Admin → Settings → Advanced → REST API
  - Public: ❌ No (server-side only)

### Supabase (Auth, Database, Storage)
**Purpose:** User authentication, database, real-time subscriptions

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
  - Format: `https://your-project.supabase.co`
  - Where to get: Supabase Dashboard → Settings → API
  - Public: ✅ Yes (prefix: NEXT_PUBLIC_)

- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key for client-side access
  - Format: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
  - Where to get: Supabase Dashboard → Settings → API
  - Public: ✅ Yes (limited permissions, prefix: NEXT_PUBLIC_)

### Razorpay (Payment Processing)
**Purpose:** Online payment processing (cards, UPI, netbanking)

- `NEXT_PUBLIC_RAZORPAY_KEY_ID`: Your Razorpay API key
  - Format: `rzp_live_xxxxx` (production) or `rzp_test_xxxxx` (test)
  - Where to get: Razorpay Dashboard → Settings → API Keys
  - Public: ✅ Yes (safe to expose, prefix: NEXT_PUBLIC_)

- `RAZORPAY_KEY_SECRET`: Your Razorpay secret key (for server-side verification)
  - Format: Long secret string
  - Where to get: Razorpay Dashboard → Settings → API Keys
  - Public: ❌ No (server-side only, NEVER expose)

### SendGrid (Email Service)
**Purpose:** Transactional emails (confirmations, updates, newsletters)

- `SENDGRID_API_KEY`: SendGrid API key for sending emails
  - Format: `SG.xxxxx...` (40+ characters)
  - Where to get: SendGrid Dashboard → Settings → API Keys
  - Public: ❌ No (server-side only)

### Shiprocket (Shipping & Logistics)
**Purpose:** Auto-generate shipping labels, track orders, manage inventory

- `SHIPROCKET_API_KEY`: Shiprocket API key for shipping integration
  - Format: Long alphanumeric string
  - Where to get: Shiprocket Dashboard → Settings → API
  - Public: ❌ No (server-side only)

---

## Optional Variables (Nice to have, but not critical)

### SMS Notifications
- `SMS_PROVIDER`: Choose 'twilio' or 'msg91'
- `TWILIO_ACCOUNT_SID`: Twilio account ID (if using Twilio)
- `TWILIO_AUTH_TOKEN`: Twilio auth token (if using Twilio)
- `MSG91_AUTH_KEY`: MSG91 API key (if using MSG91)

### Analytics & Monitoring
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics 4 tracking ID
- `SENTRY_DSN`: Sentry error tracking URL

### Application
- `NODE_ENV`: Set to 'development', 'staging', or 'production'

### Backups (Enterprise)
- `BACKUP_BUCKET_NAME`: Cloud storage bucket for backups
- `BACKUP_REGION`: AWS region for backup storage

---

## Security Best Practices

### ✅ DO:
- Use `NEXT_PUBLIC_` prefix only for values that are safe to expose
- Keep server-side secrets in `.env.local` (never in `.env`)
- Rotate API keys regularly
- Use test keys (ck_test_, rzp_test_) in development
- Use strong, unique secrets in production
- Store `.env.local` in `.gitignore`

### ❌ DON'T:
- Commit `.env.local` to git
- Expose secret keys in client-side code
- Share API keys via email or Slack
- Use the same credentials across environments
- Log sensitive data in console

---

## Setup Instructions

### Step 1: Copy Template
```bash
cp .env.example .env.local
```

### Step 2: Fill in Values
Edit `.env.local` and add your actual API keys from each service

### Step 3: Verify
The app validates required environment variables on startup. If critical vars are missing, you'll see warnings in the console.

### Step 4: Test
```bash
npm run dev
# Check terminal for validation messages
```

---

## Services Setup Guide

### WooCommerce
1. Go to WooCommerce Admin → Settings → Advanced → REST API
2. Click "Create an application"
3. Enter application name: "Nuvanaah Next.js"
4. Copy the Consumer Key and Secret
5. Paste into `.env.local`

### Supabase
1. Create account at https://supabase.com
2. Create new project
3. Go to Settings → API
4. Copy `Project URL` and `anon public key`
5. Paste into `.env.local`

### Razorpay
1. Sign up at https://razorpay.com
2. Go to Settings → API Keys
3. Toggle between Test and Live keys
4. Copy Key ID and Key Secret
5. Paste into `.env.local`

### SendGrid
1. Sign up at https://sendgrid.com
2. Go to Settings → API Keys
3. Create new API key (don't use Full Access)
4. Copy the key
5. Paste into `.env.local`

### Shiprocket
1. Sign up at https://shiprocket.in
2. Go to Settings → API
3. Copy your API key
4. Paste into `.env.local`

---

## Troubleshooting

**Q: "Missing environment variables: NEXT_PUBLIC_SUPABASE_URL"**
- A: Fill in `.env.local` with your Supabase URL and restart dev server

**Q: "Razorpay payment not working"**
- A: Check if using correct key (test vs live). Test keys have `_test_` in them.

**Q: "Emails not sending"**
- A: Verify SendGrid API key is correct and not expired. Check spam folder.

**Q: "WooCommerce products not loading"**
- A: Check if API URL is correct (ends with `/wp-json/wc/v3`). Verify Consumer Key/Secret.

---

## Environment Variables by Feature

### Authentication & User Management
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

### Product Management
- NEXT_PUBLIC_WOOCOMMERCE_API_URL
- WOOCOMMERCE_CONSUMER_KEY
- WOOCOMMERCE_CONSUMER_SECRET

### Payments
- NEXT_PUBLIC_RAZORPAY_KEY_ID
- RAZORPAY_KEY_SECRET

### Email & Notifications
- SENDGRID_API_KEY
- SMS_PROVIDER (optional)
- TWILIO_ACCOUNT_SID (optional)
- TWILIO_AUTH_TOKEN (optional)

### Shipping
- SHIPROCKET_API_KEY

---

**Last Updated:** January 9, 2026  
**Status:** Complete  
**Next Step:** Implement root layout with Header and Footer (Task 1.3)
