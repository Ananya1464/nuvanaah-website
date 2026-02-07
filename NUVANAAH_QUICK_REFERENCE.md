# 📇 Nuvanaah Project - Quick Reference Card

**Project Name:** Nuvanaah - Cancer Care Accessories  
**Domain:** www.nuvanaah.com  
**Last Updated:** February 1, 2026

---

## 🌐 YOUR NUVANAAH DOMAINS

```
Main Website:       www.nuvanaah.com          (Vercel - Next.js)
                    → What CUSTOMERS see and shop on
                    → Your beautiful frontend
                    → Stays as Next.js (NOT WordPress!)

WooCommerce:        shop.nuvanaah.com         (Hostinger - WordPress/WooCommerce)
                    → Where YOU manage products (admin only)
                    → Backend/API only
                    → Customers NEVER see this

Project Location:   d:\nuvaanah               (Your PC - Next.js code)
GitHub Repo:        [To be created]
```

**Important:** Your Next.js site does NOT move to WordPress. WooCommerce is separate backend.

---

## 📧 YOUR NUVANAAH EMAILS

```
Customer Care:      care@nuvanaah.com         (Primary support)
Order Updates:      shipping@nuvanaah.com     (Shipping notifications)
General Inquiries:  info@nuvanaah.com         (General questions)
```

---

## 🔑 ENVIRONMENT VARIABLES (.env.local)

```env
# WooCommerce - Product Backend
NEXT_PUBLIC_WOOCOMMERCE_API_URL=https://shop.nuvanaah.com/wp-json/wc/v3
WOOCOMMERCE_CONSUMER_KEY=ck_[get from WooCommerce after setup]
WOOCOMMERCE_CONSUMER_SECRET=cs_[get from WooCommerce after setup]

# Supabase - User Accounts & Database
NEXT_PUBLIC_SUPABASE_URL=https://nuvanaah.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[get from Supabase after setup]

# Razorpay - Payment Gateway
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_[get from Razorpay]
RAZORPAY_KEY_SECRET=[get from Razorpay - keep secret!]

# SendGrid - Email Service
SENDGRID_API_KEY=SG.[get from SendGrid]
SENDGRID_FROM_EMAIL=care@nuvanaah.com
SENDGRID_FROM_NAME=Nuvanaah Care Team

# Shiprocket - Shipping Service
SHIPROCKET_API_KEY=[get from Shiprocket]
SHIPROCKET_EMAIL=shipping@nuvanaah.com
SHIPROCKET_PASSWORD=[your password]
```

---

## 🛍️ YOUR NUVANAAH PRODUCTS (Initial 12)

### Mastectomy Products (5)
1. **Mastectomy Bra** - ₹2,800
2. **Silicone Breast Prosthesis - Teardrop** - ₹4,500
3. **Silicone Breast Prosthesis - Round** - ₹4,200
4. **Post-Surgery Bra** - ₹1,800
5. **Mastectomy Camisole** - ₹2,200

### Chemotherapy Products (4)
6. **Chemo Port Shirt** - ₹1,500
7. **Chemo Port Pillow** - ₹800
8. **Wig Grip Band** - ₹600
9. **Drainage Bag Holder** - ₹500

### Lymphedema Products (2)
10. **Lymphedema Compression Sleeve** - ₹3,200
11. **Underarm Pillow** - ₹700

### Accessories (1)
12. **Breast Form Adhesive** - ₹900

**Total SKUs:** 12 products  
**Average Price:** ₹2,350  
**Price Range:** ₹500 - ₹4,500

---

## 🏙️ YOUR NUVANAAH CITIES

```
Primary Focus (Existing):
1. Mumbai
2. Delhi
3. Bangalore
4. Pune
5. Chennai
6. Kolkata

Future Expansion:
7. Hyderabad
8. Ahmedabad
9. Jaipur
10. Lucknow
```

---

## 📝 YOUR NUVANAAH BLOG POSTS (To Write)

1. **"Choosing the Right Breast Prosthesis After Mastectomy"**
   - 1,500-2,000 words
   - Keywords: breast prosthesis India, mastectomy prosthesis selection
   - URL: www.nuvanaah.com/blog/choosing-prosthesis

2. **"Managing Lymphedema After Cancer Treatment"**
   - 1,500-2,000 words
   - Keywords: lymphedema management India, compression sleeve
   - URL: www.nuvanaah.com/blog/lymphedema-management

3. **"Hair Loss Solutions During Chemotherapy"**
   - 1,800-2,000 words
   - Keywords: chemo hair loss, wig selection India
   - URL: www.nuvanaah.com/blog/hair-loss-solutions

4. **"Mastectomy Recovery Timeline: What to Expect"**
   - 2,000 words
   - Keywords: mastectomy recovery, post-surgery care
   - URL: www.nuvanaah.com/blog/mastectomy-recovery-timeline

5. **"Managing Chemotherapy Side Effects"**
   - 1,500 words
   - Keywords: chemo side effects, cancer care tips
   - URL: www.nuvanaah.com/blog/managing-chemo-side-effects

6. **"Mental Wellness During Cancer Treatment"**
   - 1,500 words
   - Keywords: cancer mental health, emotional support
   - URL: www.nuvanaah.com/blog/mental-wellness-cancer

---

## 📸 YOUR NUVANAAH IMAGE REQUIREMENTS

### Product Photos Needed: 60
```
Each product needs 5 photos:
├─ Main product shot (white background)
├─ Detail/close-up
├─ Lifestyle (person wearing - with modesty)
├─ Size comparison
└─ Packaging/box

12 products × 5 photos = 60 product photos
```

### Other Images: 51
```
├─ Homepage hero: 1
├─ Category images: 4
├─ Trust badge icons: 4
├─ Blog featured images: 6
├─ Lifestyle photos: 30
└─ Partner logos: 6
───────────────────────
TOTAL: 111 images needed
```

**Temporary Solution:** AI-generated (use prompts in audit)  
**Long-term:** Professional product photography

---

## 💰 YOUR NUVANAAH COSTS

### Monthly Operating Costs
```
WooCommerce Hosting (Hostinger)    ₹149/month
Domain (www.nuvanaah.com)          ₹67/month (₹800/year)
Google Workspace (2 emails)        ₹250/month
Vercel Hosting                     ₹0 (free)
Supabase Database                  ₹0 (free tier, 500MB)
SendGrid Emails                    ₹0 (free, 100/day)
Razorpay                           2% per transaction
Shiprocket                         ₹35/order average
────────────────────────────────────────────────
FIXED MONTHLY:                     ₹466
PER ORDER:                         ₹35-130
```

### One-Time Costs
```
Domain purchase                    ₹800 (already done?)
Product photography (DIY)          ₹0
Product photography (Pro)          ₹15,000-30,000
Logo design                        ₹0 (already have)
────────────────────────────────────────────────
TOTAL ONE-TIME:                    ₹800 - ₹30,800
```

---

## 🚀 YOUR NUVANAAH LAUNCH TIMELINE

### Week 1: Backend (THIS WEEK)
```
Monday:     Setup WooCommerce on shop.nuvanaah.com
Tuesday:    Add 5 products with details
Wednesday:  Generate API keys, test connection
Thursday:   Product photography (15 photos)
Friday:     Upload photos, verify on site
Weekend:    Test www.nuvanaah.com/products
```

### Week 2: Payments & Auth
```
Monday:     Setup Supabase (nuvanaah project)
Tuesday:    Create database tables
Wednesday:  Setup Razorpay test mode
Thursday:   Write blog post 1
Friday:     Write blog post 2
Weekend:    Integration testing
```

### Week 3: Content & Polish
```
Monday:     Complete blog posts 3-4
Tuesday:    Complete blog posts 5-6
Wednesday:  Fix all UI issues
Thursday:   Mobile testing
Friday:     Bug fixes
Weekend:    Final review
```

### Week 4: Soft Launch
```
Monday:     Deploy to Vercel (www.nuvanaah.com)
Tuesday:    Razorpay live mode
Wednesday:  Place 5 test orders
Thursday:   Friends & family testing (5 orders)
Friday:     Fix issues found
Weekend:    Monitor orders
```

### Week 5: Public Launch
```
Monday:     Setup Instagram @nuvanaahcancer
Tuesday:    Create 10 posts + 3 Reels
Wednesday:  Instagram Shop approval
Thursday:   Start posting (1/day)
Friday:     Launch announcement
Weekend:    Engage with followers
```

**LAUNCH DATE TARGET:** March 8, 2026 (5 weeks)

---

## 📱 YOUR NUVANAAH SOCIAL MEDIA

```
Instagram:  @nuvanaahcancer
            www.nuvanaah.com in bio
            
Facebook:   Nuvanaah Cancer Care
            Link to www.nuvanaah.com
            
WhatsApp:   +91-XXXXX-XXXXX (get WhatsApp Business)
            Link: wa.me/919XXXXXXXXX
            
LinkedIn:   Nuvanaah (for B2B/hospitals)
            Professional presence
```

---

## 🔧 YOUR NUVANAAH TECH STACK

```
Frontend:       Next.js 14 (d:\nuvaanah)
Styling:        Tailwind CSS (sage, gold, cream colors)
Deployment:     Vercel (www.nuvanaah.com)
Backend:        WooCommerce (shop.nuvanaah.com)
Database:       Supabase (nuvanaah.supabase.co)
Payments:       Razorpay (India-focused)
Email:          SendGrid (care@nuvanaah.com)
Shipping:       Shiprocket (India)
Analytics:      Google Analytics 4 + Sentry
```

---

## 📊 YOUR NUVANAAH PAGES (39 Total)

```
MAIN PAGES:
├─ www.nuvanaah.com                    (Homepage)
├─ www.nuvanaah.com/products           (Product catalog)
├─ www.nuvanaah.com/cart               (Shopping cart)
├─ www.nuvanaah.com/checkout           (Checkout)
├─ www.nuvanaah.com/account            (User dashboard)
├─ www.nuvanaah.com/blog               (Blog listing)
├─ www.nuvanaah.com/about              (About Nuvanaah)
├─ www.nuvanaah.com/contact            (Contact form)
├─ www.nuvanaah.com/faq                (Help center)
├─ www.nuvanaah.com/consultations      (Free consultation)
└─ www.nuvanaah.com/partners           (Hospital partnerships)

PRODUCT PAGES (12):
├─ www.nuvanaah.com/products/mastectomy-bra
├─ www.nuvanaah.com/products/silicone-breast-form
├─ www.nuvanaah.com/products/chemo-port-shirt
└─ ... (9 more)

BLOG POSTS (6):
├─ www.nuvanaah.com/blog/choosing-prosthesis
├─ www.nuvanaah.com/blog/lymphedema-management
└─ ... (4 more)

CITY PAGES (6):
├─ www.nuvanaah.com/cities/mumbai
├─ www.nuvanaah.com/cities/delhi
└─ ... (4 more)

LEGAL (4):
├─ www.nuvanaah.com/legal/privacy
├─ www.nuvanaah.com/legal/terms
├─ www.nuvanaah.com/legal/shipping
└─ www.nuvanaah.com/legal/returns
```

---

## ✅ YOUR NUVANAAH CHECKLIST

### Pre-Launch (Must Complete)
- [ ] Domain nuvanaah.com registered
- [ ] WooCommerce setup on shop.nuvanaah.com
- [ ] 12 products added with real data
- [ ] 60 product photos uploaded
- [ ] Supabase configured (nuvanaah project)
- [ ] Razorpay test mode working
- [ ] 6 blog posts written
- [ ] care@nuvanaah.com email active
- [ ] WhatsApp Business number setup
- [ ] Deploy to www.nuvanaah.com (Vercel)

### Launch Day
- [ ] All products visible on www.nuvanaah.com/products
- [ ] Test order placed successfully
- [ ] Payment confirmation email received
- [ ] Order appears in WooCommerce
- [ ] Razorpay live mode activated
- [ ] Instagram @nuvanaahcancer live
- [ ] WhatsApp auto-reply setup

### Post-Launch (Week 1)
- [ ] 10 real orders placed
- [ ] All orders fulfilled
- [ ] 5-star reviews collected
- [ ] Instagram: 100 followers
- [ ] Google Analytics tracking
- [ ] Customer support workflow tested

---

## 🎯 YOUR NUVANAAH BRAND VOICE

**Tone:** Dignified, warm, trustworthy (not clinical)  
**Language:** Empathetic, gentle, inclusive  
**Avoid:** Medical jargon, fear-based, pity  
**Emphasize:** Confidence, dignity, quality, expert support

**Example Headlines:**
✅ "Your Comfort, Our Priority"
✅ "Designed for Your Journey"
✅ "Regain Your Confidence"

❌ "For Cancer Patients" (too clinical)
❌ "Fighting Cancer" (too aggressive)
❌ "Survive with Dignity" (implies pity)

---

## 📞 QUICK HELP COMMANDS

**For Me (AI Assistant):**
```
"Help me setup shop.nuvanaah.com with WooCommerce"
"How do I deploy to www.nuvanaah.com on Vercel"
"Create product description for [product name]"
"Write Instagram caption for Nuvanaah [topic]"
"I'm stuck at [step] in [service] setup"
```

**For Testing:**
```bash
# Test locally
cd d:\nuvaanah
npm run dev
# Visit: http://localhost:3000

# Build for production
npm run build

# Check for errors
npm run lint
```

**For Deployment:**
```bash
# Deploy to www.nuvanaah.com
git add .
git commit -m "Update Nuvanaah [feature]"
git push
# Auto-deploys to Vercel
```

---

## 🎊 NUVANAAH PROJECT STATUS

```
OVERALL:              [████████████░░░░░░░░] 60%

Code Quality:         [████████████████████] 100% ✅
Design:               [████████████████████] 100% ✅
WooCommerce:          [░░░░░░░░░░░░░░░░░░░░]   0% ⏳
Supabase:             [░░░░░░░░░░░░░░░░░░░░]   0% ⏳
Razorpay:             [░░░░░░░░░░░░░░░░░░░░]   0% ⏳
Content:              [████░░░░░░░░░░░░░░░░]  20% 🟡
Images:               [░░░░░░░░░░░░░░░░░░░░]   0% ⏳
Domain Setup:         [░░░░░░░░░░░░░░░░░░░░]   0% ⏳

NEXT: Setup shop.nuvanaah.com (WooCommerce)
```

---

**Save this file!** Pin it for quick reference throughout your Nuvanaah development.

**Updated:** February 1, 2026  
**Next Update:** After WooCommerce setup
