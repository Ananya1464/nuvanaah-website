# 🌐 Nuvanaah Domain Setup Guide

**Your Domain:** www.nuvanaah.com  
**Current Status:** Assumed registered (if not, see below)

---

## 🎯 Recommended Domain Structure

For your Nuvanaah project, here's the best setup:

```
www.nuvanaah.com        → Main website (Next.js on Vercel)
                          Customer-facing e-commerce site
                          
shop.nuvanaah.com       → WooCommerce backend (Hostinger)
                          Admin panel only - not public
                          Products API endpoint
                          
care.nuvanaah.com       → Customer support portal (future)
                          Help desk, ticket system
                          
blog.nuvanaah.com       → Blog (optional - if you want separate)
                          Currently blog is at www.nuvanaah.com/blog
```

---

## 📋 Step 1: Domain Registration (If Not Done)

### If You Haven't Registered nuvanaah.com Yet:

**Option A: GoDaddy (Popular in India)**
1. Go to: https://www.godaddy.com/en-in
2. Search: "nuvanaah.com"
3. Price: ₹799/year for .com
4. **Add Privacy Protection:** ₹299/year (hides your personal info)
5. Total: ~₹1,100/year

**Option B: Namecheap (Cheaper)**
1. Go to: https://www.namecheap.com
2. Search: "nuvanaah.com"
3. Price: ₹650/year for .com
4. **Free Privacy Protection included**

**Option C: Hostinger (If buying WooCommerce hosting)**
1. Get free domain with hosting plan
2. When you buy Business WordPress plan (₹149/month)
3. Domain included first year

---

## 📋 Step 2: DNS Configuration

### For Nuvanaah's Recommended Setup:

After registering domain, configure DNS records:

```
# Main Website (Vercel)
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto

Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)
TTL: Auto

# WooCommerce Backend (Hostinger)
Type: CNAME
Name: shop
Value: [your-hostinger-server].hostinger.com
TTL: Auto

# Email (if using custom email)
Type: MX
Name: @
Priority: 10
Value: [your-email-server]
TTL: Auto
```

---

## 📋 Step 3: Nuvanaah-Specific Setup

### 3.1: Main Website (www.nuvanaah.com)

**Deploy to Vercel:**

1. **Connect GitHub to Vercel**
   ```bash
   # In your terminal:
   cd d:\nuvaanah
   git init
   git add .
   git commit -m "Initial commit - Nuvanaah website"
   
   # Create GitHub repo (on github.com)
   # Then push:
   git remote add origin https://github.com/yourusername/nuvanaah.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to: https://vercel.com
   - Click "Import Project"
   - Connect GitHub
   - Select "nuvanaah" repository
   - Click "Deploy"
   - Wait 2-3 minutes

3. **Add Custom Domain**
   - In Vercel dashboard → Your project → Settings → Domains
   - Add: `www.nuvanaah.com`
   - Add: `nuvanaah.com` (will redirect to www)
   - Vercel will provide DNS records
   - Add these to your domain registrar

4. **Add Environment Variables**
   - Vercel dashboard → Your project → Settings → Environment Variables
   - Add all from `.env.local`:
     ```
     NEXT_PUBLIC_WOOCOMMERCE_API_URL
     WOOCOMMERCE_CONSUMER_KEY
     WOOCOMMERCE_CONSUMER_SECRET
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     NEXT_PUBLIC_RAZORPAY_KEY_ID
     RAZORPAY_KEY_SECRET
     SENDGRID_API_KEY
     etc.
     ```

### 3.2: WooCommerce Backend (shop.nuvanaah.com)

**Setup on Hostinger:**

1. **After buying Hostinger plan:**
   - In Hostinger panel → Websites
   - Click "Add Website"
   - Choose: "WordPress + WooCommerce"
   - Domain: shop.nuvanaah.com
   - Install WordPress
   - **Important:** Set this to **PRIVATE** (not indexed by Google)

2. **Secure shop.nuvanaah.com:**
   ```
   # Add to WordPress .htaccess:
   # Only allow API access, block web access
   
   <Files "wp-login.php">
     # Only allow your IP (get from whatismyip.com)
     Order Deny,Allow
     Deny from all
     Allow from YOUR.IP.ADDRESS.HERE
   </Files>
   ```

3. **Add SSL Certificate:**
   - Hostinger auto-installs free SSL (Let's Encrypt)
   - Verify: https://shop.nuvanaah.com shows padlock

4. **WooCommerce API Setup:**
   - WooCommerce → Settings → Advanced → REST API
   - Add Key:
     - Description: "Nuvanaah Main Website"
     - User: Your admin account
     - Permissions: Read/Write
   - Copy Consumer Key & Secret
   - Add to Vercel environment variables

---

## 📋 Step 4: Email Setup

### Recommended: Google Workspace for Nuvanaah

**Why?** Professional emails, reliability, customer trust

**Setup:**
1. Go to: https://workspace.google.com
2. Plan: Business Starter (₹125/user/month)
3. Users you need:
   - care@nuvanaah.com (customer support - main)
   - shipping@nuvanaah.com (order updates)
   - info@nuvanaah.com (general inquiries)
   - support@nuvanaah.com (technical support)

4. **Add MX Records** (Google provides these):
   ```
   Priority 1: ASPMX.L.GOOGLE.COM
   Priority 5: ALT1.ASPMX.L.GOOGLE.COM
   Priority 5: ALT2.ASPMX.L.GOOGLE.COM
   Priority 10: ALT3.ASPMX.L.GOOGLE.COM
   Priority 10: ALT4.ASPMX.L.GOOGLE.COM
   ```

**Alternative: Zoho Mail (Cheaper)**
- Free for 5 users
- care@nuvanaah.com
- Same reliability, less features

---

## 📋 Step 5: Nuvanaah Subdomains (Optional)

### Future Expansion:

```
# Customer Portal
my.nuvanaah.com         → User dashboard, order tracking

# Blog (if separate)
blog.nuvanaah.com       → WordPress blog (optional)

# Support
help.nuvanaah.com       → Knowledge base, FAQs

# Wholesale
wholesale.nuvanaah.com  → B2B portal for hospitals

# Careers
careers.nuvanaah.com    → Job listings (future)
```

**How to add:**
1. In DNS, add CNAME record for each
2. Point to appropriate server
3. Setup SSL for each subdomain

---

## 🔒 Security Setup for Nuvanaah

### SSL Certificates (HTTPS)

**Main Site (Vercel):**
- Auto-configured ✅
- Free SSL included
- Auto-renewal

**WooCommerce (Hostinger):**
- Enable in Hostinger panel
- Free Let's Encrypt SSL
- Auto-renewal

### Force HTTPS:

**In Vercel (next.config.js):**
```js
// Already in your config
async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
      destination: 'https://www.nuvanaah.com/:path*',
      permanent: true,
    },
  ]
}
```

---

## 📊 Nuvanaah Domain Checklist

### Before Launch:
- [ ] Domain nuvanaah.com registered
- [ ] DNS pointing to Vercel (www.nuvanaah.com)
- [ ] DNS pointing to Hostinger (shop.nuvanaah.com)
- [ ] SSL active on www.nuvanaah.com ✅
- [ ] SSL active on shop.nuvanaah.com
- [ ] Email care@nuvanaah.com working
- [ ] Email shipping@nuvanaah.com working
- [ ] All subdomains have SSL
- [ ] Privacy protection enabled on domain

### Test URLs:
- [ ] https://www.nuvanaah.com loads
- [ ] https://nuvanaah.com redirects to www
- [ ] https://www.nuvanaah.com/products loads
- [ ] https://www.nuvanaah.com/cart works
- [ ] https://shop.nuvanaah.com/wp-admin loads (admin only)
- [ ] Email test: Send to care@nuvanaah.com, verify receipt

---

## 💰 Nuvanaah Domain Costs

### Year 1:
```
Domain registration       ₹799/year (GoDaddy) or ₹650/year (Namecheap)
Privacy protection        ₹0 (if Namecheap) or ₹299/year (GoDaddy)
Google Workspace          ₹125/month × 2 users = ₹3,000/year
SSL certificates          ₹0 (free with Vercel + Hostinger)
────────────────────────────────────────────────────────────
TOTAL YEAR 1:            ₹3,650 - ₹4,100
```

### Ongoing (Yearly):
```
Domain renewal           ₹799-999/year
Google Workspace         ₹3,000/year (2 users)
────────────────────────────────────────────────────────────
TOTAL YEARLY:           ₹3,800 - ₹4,000
```

---

## 🎯 Quick Setup Summary for Nuvanaah

**If you're starting fresh, do this order:**

### Day 1: Domain
1. Register nuvanaah.com (Namecheap recommended)
2. Enable privacy protection
3. Keep login details safe

### Day 2: Hosting
1. Buy Hostinger Business WordPress (₹149/month)
2. Install WooCommerce on shop.nuvanaah.com
3. Get SSL certificate

### Day 3: Deploy
1. Push code to GitHub
2. Deploy to Vercel
3. Connect www.nuvanaah.com to Vercel

### Day 4: Email
1. Setup Google Workspace or Zoho
2. Create care@nuvanaah.com
3. Create shipping@nuvanaah.com
4. Add MX records to DNS

### Day 5: Test
1. Visit https://www.nuvanaah.com
2. Test all pages
3. Send test email
4. Verify WooCommerce API connection

---

## ❓ Nuvanaah-Specific FAQs

**Q: Should I use .com or .in for Nuvanaah?**
A: Use .com - more trusted globally, even though you're India-focused. .in is ₹200 cheaper but .com builds more credibility.

**Q: Do I need www.nuvanaah.com AND nuvanaah.com?**
A: Yes, register both, redirect nuvanaah.com → www.nuvanaah.com

**Q: Can customers access shop.nuvanaah.com?**
A: No, that's admin only. Customers only see www.nuvanaah.com

**Q: What email should customers use?**
A: Primary: care@nuvanaah.com
   Orders: shipping@nuvanaah.com
   General: info@nuvanaah.com

**Q: When should I setup wholesale.nuvanaah.com?**
A: After launch, when you start hospital partnerships (Phase 4)

**Q: Do I need blog.nuvanaah.com?**
A: No, keep blog at www.nuvanaah.com/blog (better for SEO)

---

## 🔗 Important Links for Nuvanaah

**Domain Registrars:**
- Namecheap: https://www.namecheap.com
- GoDaddy: https://www.godaddy.com/en-in

**Hosting:**
- Vercel: https://vercel.com
- Hostinger: https://www.hostinger.in

**Email:**
- Google Workspace: https://workspace.google.com
- Zoho Mail: https://www.zoho.com/mail/

**Tools:**
- DNS Checker: https://dnschecker.org
- SSL Checker: https://www.sslshopper.com/ssl-checker.html
- Email Tester: https://mxtoolbox.com

---

## 🎊 Current Status

Based on your project:

```
✅ Domain needed: www.nuvanaah.com
⏳ Registration status: [Update this after registering]
⏳ DNS configured: [Pending]
⏳ Vercel deployment: [Pending]
⏳ WooCommerce setup: [Pending]
⏳ Email setup: [Pending]
```

---

**Next Step:** If domain isn't registered yet, do that first (takes 5 minutes).

**Then:** Continue with QUICK_START_GUIDE.md
