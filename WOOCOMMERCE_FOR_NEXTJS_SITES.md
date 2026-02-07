# 🛒 WooCommerce Setup for Nuvanaah (Next.js Website)

**Your Situation:**
- ✅ Main website: **www.nuvanaah.com** (Next.js) - already built at `d:\nuvaanah`
- ❌ Product storage: Need a place to manage products, inventory, orders
- 💡 Solution: WooCommerce as a **headless backend** (API only)

---

## 🤔 Understanding the Setup

### What You Have Now:
```
www.nuvanaah.com → Next.js website (beautiful frontend)
                    Products are hardcoded in code
                    No real product database
```

### What You'll Have After Setup:
```
www.nuvanaah.com       → Next.js website (Vercel)
                          Customers shop here
                          Fetches products via API
                          
shop.nuvanaah.com      → WooCommerce (Hostinger)
                          YOU manage products here
                          Admin panel only
                          Customers NEVER see this
                          Provides REST API
```

**Think of it like:**
- **Next.js (www)** = Your beautiful storefront (what customers see)
- **WooCommerce (shop)** = Your warehouse/inventory system (backend only)

---

## 📋 Step-by-Step Setup for Nuvanaah

### Step 1: Get WooCommerce Hosting (Separate from Your Next.js Site)

**Why separate hosting?**
- Your Next.js site is on Vercel (perfect, keep it there!)
- WooCommerce needs WordPress + PHP (Vercel doesn't support this)
- So you need a separate hosting JUST for WooCommerce backend

**Option 1: Hostinger (Recommended - ₹149/month)**

1. **Go to:** https://www.hostinger.in/wordpress-hosting
2. **Choose plan:** "Business WordPress" (₹149/month)
   - Includes WordPress + WooCommerce
   - Free SSL certificate
   - 100GB storage (plenty for products)
   
3. **During signup:**
   - **Domain option:** Choose "I'll use my existing domain"
   - **Enter:** `shop.nuvanaah.com` (subdomain)
   - **Don't** use `www.nuvanaah.com` (that's for your Next.js site!)

4. **Complete payment:** ₹1,788 for first year

5. **Setup WordPress:**
   - Hostinger will auto-install WordPress
   - Choose: "Install WooCommerce" during setup
   - Admin username: (choose something secure)
   - Admin password: (save this!)

**Option 2: Bluehost (₹199/month)**
- Go to: https://www.bluehost.com/wordpress/woocommerce-hosting
- Same process as Hostinger
- Slightly more expensive but good support

**Option 3: SiteGround (₹299/month)**
- Go to: https://www.siteground.com/wordpress-hosting.htm
- Best performance, higher price
- Excellent if you expect high traffic

---

### Step 2: Configure Your Domain (DNS Settings)

After buying hosting, you need to point `shop.nuvanaah.com` to it.

**If your domain is on GoDaddy:**

1. **Login to GoDaddy**
2. **Go to:** My Products → Domains → nuvanaah.com → DNS
3. **Add a CNAME record:**
   ```
   Type: CNAME
   Name: shop
   Value: [your-hostinger-server].hostinger.com
   TTL: 1 Hour
   ```
   (Hostinger will email you the exact server name)

4. **Save and wait:** DNS takes 1-24 hours to propagate

**If your domain is on Namecheap:**

1. **Login to Namecheap**
2. **Go to:** Domain List → Manage → Advanced DNS
3. **Add CNAME Record:**
   ```
   Type: CNAME Record
   Host: shop
   Value: [your-hostinger-server]
   TTL: Automatic
   ```

---

### Step 3: Access Your WooCommerce Admin

**After DNS propagates (wait 2-24 hours):**

1. **Visit:** `https://shop.nuvanaah.com/wp-admin`
2. **Login** with credentials you created
3. **You'll see:** WordPress dashboard

**Important:** This page is ONLY for you. Customers will never see it.

---

### Step 4: Secure shop.nuvanaah.com (Make it Private)

Since this is admin-only, let's hide it from public:

**Method 1: Password Protect (Simple)**

1. **In WordPress:** Plugins → Add New → Search "Password Protected"
2. **Install:** "Password Protected" plugin
3. **Activate** it
4. **Settings → Password Protected:**
   - Enable password protection: ✅
   - New Password: (choose one)
   - Allow IP Addresses: (add your home/office IP)
   - Save

**Now:** Anyone visiting `shop.nuvanaah.com` needs password

**Method 2: Robots.txt (Prevent Google Indexing)**

1. **In WordPress:** Settings → Reading
2. **Check:** "Discourage search engines from indexing this site" ✅
3. **Save**

---

### Step 5: Setup WooCommerce

**In WooCommerce admin (shop.nuvanaah.com/wp-admin):**

1. **Go to:** WooCommerce → Setup Wizard
2. **Store Details:**
   - Store Name: "Nuvanaah (Admin Panel)"
   - Address: Your business address
   - Currency: ₹ Indian Rupee (INR)
   - Click "Continue"

3. **Industry:** Health & Beauty
4. **Product Types:** Physical products
5. **Business Details:**
   - Products: 1-10 (for now)
   - Currently selling: No
   
6. **Theme:** Skip (you're not using WooCommerce frontend)
7. **Skip remaining steps** (payments, shipping - we'll configure later)

---

### Step 6: Add Your First Product

**Test with one product first:**

1. **Go to:** Products → Add New
2. **Product name:** Mastectomy Bra - Comfort Plus
3. **Description:**
   ```
   Premium post-mastectomy bra designed for ultimate comfort and support.
   
   Features:
   - Soft cotton fabric
   - Pockets for prosthesis
   - Wide straps for support
   - Available in beige, white, black
   ```

4. **Product Data:**
   - Regular price: 2800
   - Sale price: (leave blank for now)
   - SKU: NUV-MAS-001
   - Stock: 50

5. **Categories:** Create new → "Mastectomy"

6. **Sizes:** 
   - Attributes → Add New → "Size"
   - Values: S | M | L | XL
   - Used for variations: ✅

7. **Product Image:** 
   - Upload a product photo
   - (Or use placeholder for now)

8. **Click "Publish"**

**Your first product is now in WooCommerce!**

---

### Step 7: Generate API Keys

**This is how your Next.js site will talk to WooCommerce:**

1. **In WooCommerce:** Settings → Advanced → REST API
2. **Click:** "Add Key"
3. **Fill in:**
   - Description: "Nuvanaah Main Website (www.nuvanaah.com)"
   - User: Your admin user
   - Permissions: **Read/Write**
4. **Click:** "Generate API Key"

5. **SAVE THESE IMMEDIATELY:**
   ```
   Consumer Key: ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   Consumer Secret: cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
   **You can't see these again!** Copy them now.

---

### Step 8: Connect to Your Next.js Website

**On your computer (d:\nuvaanah):**

1. **Create/Edit:** `.env.local`
   ```env
   # WooCommerce Backend (shop.nuvanaah.com)
   NEXT_PUBLIC_WOOCOMMERCE_API_URL=https://shop.nuvanaah.com/wp-json/wc/v3
   WOOCOMMERCE_CONSUMER_KEY=ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   WOOCOMMERCE_CONSUMER_SECRET=cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

2. **Test the connection:**
   ```bash
   npm run dev
   ```

3. **Visit:** http://localhost:3000/products

4. **You should see:** Your "Mastectomy Bra" product!

---

### Step 9: Verify It's Working

**Check these:**

✅ Can you access `shop.nuvanaah.com/wp-admin`?  
✅ Can you see your product in WooCommerce?  
✅ Does `www.nuvanaah.com/products` show the product?  
✅ Can you add it to cart?  

**If YES to all:** You're connected! 🎉

---

## 🔧 How the Integration Works

### Your Current Code (Already Setup!)

**File:** `d:\nuvaanah\lib\woocommerce.ts`

```typescript
// This file already exists in your project
// It fetches products from shop.nuvanaah.com

import { Product } from '@/lib/types'

const WC_API_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_API_URL
const WC_KEY = process.env.WOOCOMMERCE_CONSUMER_KEY
const WC_SECRET = process.env.WOOCOMMERCE_CONSUMER_SECRET

export async function getProducts() {
  const auth = Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString('base64')
  
  const res = await fetch(`${WC_API_URL}/products`, {
    headers: {
      'Authorization': `Basic ${auth}`
    }
  })
  
  const data = await res.json()
  return data.map(formatWooCommerceProduct)
}
```

**What happens:**
1. Customer visits `www.nuvanaah.com/products`
2. Next.js calls `getProducts()`
3. Function fetches from `shop.nuvanaah.com/wp-json/wc/v3/products`
4. Returns product data
5. Your beautiful Next.js UI displays it

**Customer never knows WooCommerce exists!**

---

## 📊 Data Flow Diagram

```
Customer Browser
       ↓
www.nuvanaah.com (Next.js on Vercel)
       ↓
  [API Request]
       ↓
shop.nuvanaah.com/wp-json/wc/v3 (WooCommerce REST API)
       ↓
  [Returns JSON]
       ↓
www.nuvanaah.com (displays products)
       ↓
Customer sees beautiful product page
```

**Customer only interacts with:** www.nuvanaah.com  
**You manage products at:** shop.nuvanaah.com/wp-admin

---

## 💰 Actual Costs for Your Setup

```
WooCommerce Hosting (Hostinger)     ₹149/month
Domain (nuvanaah.com)                ₹67/month (₹800/year)
Next.js Hosting (Vercel)             ₹0 (free)
─────────────────────────────────────────────────
TOTAL MONTHLY:                       ₹216
```

**First year:**
- Hostinger: ₹1,788 (first year promo)
- Domain: ₹800
- **Total: ₹2,588 for year 1**

---

## ❓ Common Questions

**Q: Do I need to move my Next.js site to WordPress?**  
**A:** NO! Your Next.js site stays exactly as it is. WooCommerce is separate.

**Q: Will customers see WordPress/WooCommerce?**  
**A:** NO! Customers only see your beautiful Next.js site at www.nuvanaah.com

**Q: Why can't I use WooCommerce on Vercel?**  
**A:** Vercel doesn't support PHP/WordPress. WooCommerce needs WordPress, so it needs separate hosting.

**Q: Is this "headless WooCommerce"?**  
**A:** Yes! Headless = Backend only, your Next.js site is the frontend.

**Q: Can I use Shopify instead?**  
**A:** Yes, but:
  - Shopify: $29/month (~₹2,400/month) 
  - WooCommerce: ₹149/month
  - For India, WooCommerce is more cost-effective

**Q: Where do I manage products?**  
**A:** At `shop.nuvanaah.com/wp-admin` → Products → Add/Edit

**Q: Where do I see orders?**  
**A:** At `shop.nuvanaah.com/wp-admin` → WooCommerce → Orders

**Q: Do I need to design shop.nuvanaah.com?**  
**A:** NO! It's admin only. Your Next.js design is what customers see.

---

## 🎯 Quick Setup Checklist

- [ ] Buy Hostinger WordPress hosting (₹149/month)
- [ ] Choose subdomain: shop.nuvanaah.com
- [ ] Install WordPress + WooCommerce
- [ ] Update DNS (CNAME record: shop → hostinger server)
- [ ] Wait for DNS propagation (2-24 hours)
- [ ] Login to shop.nuvanaah.com/wp-admin
- [ ] Complete WooCommerce setup wizard
- [ ] Add one test product
- [ ] Generate REST API keys
- [ ] Add keys to .env.local in d:\nuvaanah
- [ ] Test: npm run dev → visit localhost:3000/products
- [ ] Verify product shows up
- [ ] Password protect shop.nuvanaah.com
- [ ] Add remaining 11 products

---

## 🚀 Next Steps After WooCommerce Setup

Once products are working:

1. **Add all 12 products** to WooCommerce
2. **Upload product photos**
3. **Setup categories** (Mastectomy, Chemo, Lymphedema, Wigs)
4. **Configure shipping** (WooCommerce → Settings → Shipping)
5. **Setup taxes** (if applicable)
6. **Connect Razorpay** for payments
7. **Test complete checkout flow**

---

## 💡 Pro Tips for Nuvanaah

**1. Use Product Variations:**
```
Product: Silicone Breast Prosthesis
└─ Variation 1: Teardrop - S - ₹4,500
└─ Variation 2: Teardrop - M - ₹4,500
└─ Variation 3: Round - S - ₹4,200
└─ Variation 4: Round - M - ₹4,200
```

**2. Use SKU Convention:**
```
NUV-MAS-001 → Nuvanaah - Mastectomy - Product 1
NUV-CHE-001 → Nuvanaah - Chemotherapy - Product 1
NUV-LYM-001 → Nuvanaah - Lymphedema - Product 1
```

**3. Enable Low Stock Alerts:**
- WooCommerce → Settings → Products → Inventory
- Low stock threshold: 5
- Out of stock threshold: 0
- Get email when stock is low ✅

**4. Regular Backups:**
- Your Hostinger plan includes automatic backups
- Download backup monthly to your computer
- Keep product data safe!

---

## 🆘 Troubleshooting

**Problem:** Can't access shop.nuvanaah.com  
**Solution:** DNS not propagated yet. Wait 24 hours, then try again.

**Problem:** Products not showing on www.nuvanaah.com  
**Solution:** Check .env.local has correct API keys. Restart dev server.

**Problem:** "Unauthorized" error  
**Solution:** API keys wrong. Regenerate in WooCommerce → Settings → REST API

**Problem:** Products show but images broken  
**Solution:** Use full image URLs in WooCommerce, not relative paths

**Problem:** Can't add products in WooCommerce  
**Solution:** Check hosting disk space. Increase PHP memory limit.

---

## 📞 Need Help?

**Ask me:**
- "Show me how to add a product with variations"
- "How do I setup shipping zones in WooCommerce"
- "Help me troubleshoot API connection"
- "How do I bulk import products"

**Your setup:**
- Main site: www.nuvanaah.com (Next.js on Vercel) ✅
- Backend: shop.nuvanaah.com (WooCommerce on Hostinger) ⏳
- Integration: REST API (code already written) ✅

---

**You're almost there! Just need to setup that WooCommerce backend.** 🚀

**Next:** Buy Hostinger hosting and follow steps 1-8 above.
