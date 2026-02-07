# 🎨 Nuvanaah Architecture - Visual Guide

**Last Updated:** February 2, 2026

---

## 🏗️ Your Complete Setup (After Launch)

```
┌─────────────────────────────────────────────────────────────────┐
│                         CUSTOMER VIEW                            │
│                                                                  │
│   They only see and interact with:                              │
│   ┌──────────────────────────────────────────────────────┐    │
│   │                                                        │    │
│   │        🌐 www.nuvanaah.com                            │    │
│   │                                                        │    │
│   │   [Beautiful Next.js Website]                         │    │
│   │   - Homepage with hero image                          │    │
│   │   - Product catalog (fetches from WooCommerce)        │    │
│   │   - Shopping cart                                     │    │
│   │   - Checkout                                          │    │
│   │   - Blog                                              │    │
│   │   - Account dashboard                                 │    │
│   │                                                        │    │
│   │   Hosted on: ☁️ Vercel (FREE)                         │    │
│   │   Code at: 💻 d:\nuvaanah                             │    │
│   │                                                        │    │
│   └──────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

                              ↕️ (API Requests)
                    Fetches products, creates orders

┌─────────────────────────────────────────────────────────────────┐
│                          ADMIN VIEW                              │
│                                                                  │
│   Only YOU can access (password protected):                     │
│   ┌──────────────────────────────────────────────────────┐    │
│   │                                                        │    │
│   │        🔒 shop.nuvanaah.com/wp-admin                  │    │
│   │                                                        │    │
│   │   [WooCommerce Admin Dashboard]                       │    │
│   │   - Add/edit products                                 │    │
│   │   - Manage inventory                                  │    │
│   │   - View orders                                       │    │
│   │   - Update prices                                     │    │
│   │   - Upload product images                             │    │
│   │   - Provides REST API                                 │    │
│   │                                                        │    │
│   │   Hosted on: 🏢 Hostinger (₹149/month)               │    │
│   │   Uses: WordPress + WooCommerce                       │    │
│   │                                                        │    │
│   └──────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 How They Work Together

### Step 1: You Add Product
```
YOU
 ↓
Login to shop.nuvanaah.com/wp-admin
 ↓
Products → Add New
 ↓
"Mastectomy Bra - ₹2,800"
 ↓
Publish
 ↓
Product stored in WooCommerce database
```

### Step 2: Customer Sees Product
```
CUSTOMER
 ↓
Visits www.nuvanaah.com/products
 ↓
Next.js calls getProducts()
 ↓
API request to shop.nuvanaah.com/wp-json/wc/v3/products
 ↓
WooCommerce returns product data (JSON)
 ↓
Next.js displays in beautiful UI
 ↓
Customer sees: "Mastectomy Bra - ₹2,800" with photo
```

### Step 3: Customer Orders
```
CUSTOMER
 ↓
Adds to cart on www.nuvanaah.com
 ↓
Proceeds to checkout
 ↓
Enters address, payment
 ↓
Next.js creates order via API
 ↓
shop.nuvanaah.com/wp-json/wc/v3/orders
 ↓
WooCommerce stores order
 ↓
YOU see order in WooCommerce admin
 ↓
You fulfill order and ship
```

---

## 🎯 Key Concept: Headless Commerce

```
┌─────────────────────────┐
│   TRADITIONAL SETUP     │
│   (What you DON'T have) │
├─────────────────────────┤
│                         │
│   WordPress/WooCommerce │
│   ┌───────────────┐    │
│   │  Frontend     │    │ ← Customer sees default WooCommerce theme
│   │  (ugly theme) │    │
│   ├───────────────┤    │
│   │  Backend      │    │ ← Products stored here
│   │  (database)   │    │
│   └───────────────┘    │
│                         │
│   All on one server     │
│                         │
└─────────────────────────┘


┌─────────────────────────┐
│   YOUR SETUP            │
│   (Headless)            │
├─────────────────────────┤
│                         │
│ Next.js (Frontend)      │
│ www.nuvanaah.com        │
│ ┌───────────────┐      │
│ │  Beautiful    │      │ ← Customer sees YOUR design
│ │  custom UI    │      │
│ └───────┬───────┘      │
│         │ API          │
│         ↓              │
│ WooCommerce (Backend)  │
│ shop.nuvanaah.com      │
│ ┌───────────────┐      │
│ │  Products     │      │ ← Just data storage
│ │  Orders       │      │
│ │  REST API     │      │
│ └───────────────┘      │
│                         │
│   Separate servers      │
│                         │
└─────────────────────────┘
```

**Benefits:**
- ✅ Keep your beautiful Next.js design
- ✅ Use WooCommerce just for product management
- ✅ Best of both worlds
- ✅ Faster, more flexible

---

## 📊 Data Flow Example

### Example: Customer views "Mastectomy Bra"

```
1. Browser Request
   GET www.nuvanaah.com/products/mastectomy-bra
   
2. Next.js Server (Vercel)
   → Calls getProductById(123)
   → File: d:\nuvaanah\lib\woocommerce.ts
   
3. HTTP Request
   GET shop.nuvanaah.com/wp-json/wc/v3/products/123
   Authorization: Basic [your-api-key]
   
4. WooCommerce Response (JSON)
   {
     "id": 123,
     "name": "Mastectomy Bra - Comfort Plus",
     "price": "2800",
     "images": ["https://shop.nuvanaah.com/wp-content/..."],
     "stock_quantity": 50,
     "categories": [{"name": "Mastectomy"}]
   }
   
5. Next.js Processing
   → Formats data to match your Product interface
   → Generates HTML with Tailwind styling
   
6. Browser Displays
   [Beautiful product page with sage/gold colors]
   "Mastectomy Bra - Comfort Plus"
   ₹2,800
   [Add to Cart button]
```

**Customer sees:** Beautiful Nuvanaah design  
**Customer doesn't see:** WordPress, WooCommerce  
**You manage:** WooCommerce admin panel

---

## 🛠️ Two Separate Websites, One Experience

### Website #1: www.nuvanaah.com (Customer-facing)

**Technology:** Next.js 14 + React + TypeScript  
**Hosting:** Vercel (free)  
**Purpose:** Customer shopping experience  
**Code location:** d:\nuvaanah  
**You edit:** VS Code on your computer  

**Pages:**
- Homepage (`/`)
- Products (`/products`)
- Product detail (`/products/[id]`)
- Cart (`/cart`)
- Checkout (`/checkout`)
- Blog (`/blog`)
- Account (`/account`)
- All 39 pages you built

**Styling:** Your beautiful sage/gold/cream design

---

### Website #2: shop.nuvanaah.com (Admin-only)

**Technology:** WordPress + WooCommerce (PHP)  
**Hosting:** Hostinger (₹149/month)  
**Purpose:** Product & order management  
**Code location:** Hostinger server  
**You edit:** WordPress admin panel in browser  

**Pages (only you see):**
- Login (`/wp-admin`)
- Products (`/wp-admin/edit.php?post_type=product`)
- Orders (`/wp-admin/edit.php?post_type=shop_order`)
- Settings (`/wp-admin/admin.php?page=wc-settings`)

**Styling:** Default WordPress (doesn't matter, customers don't see it)

---

## 💾 Where Everything Lives

```
┌───────────────────────────────────────────────────────────┐
│  YOUR COMPUTER (d:\nuvaanah)                              │
├───────────────────────────────────────────────────────────┤
│                                                            │
│  📁 app/                                                  │
│    ├── page.tsx               ← Homepage                 │
│    ├── products/page.tsx      ← Product listing          │
│    └── cart/page.tsx          ← Shopping cart            │
│                                                            │
│  📁 components/                                           │
│    ├── layout/Header.tsx      ← Navigation               │
│    ├── products/ProductCard   ← Product display          │
│    └── cart/CartItem          ← Cart items               │
│                                                            │
│  📁 lib/                                                  │
│    ├── woocommerce.ts         ← API calls to WooCommerce │
│    ├── cart-context.tsx       ← Cart state               │
│    └── types.ts               ← TypeScript types         │
│                                                            │
│  📄 .env.local                                            │
│    ← API keys for shop.nuvanaah.com                      │
│                                                            │
└───────────────────────────────────────────────────────────┘
                          ↓ (git push)
┌───────────────────────────────────────────────────────────┐
│  VERCEL (www.nuvanaah.com)                                │
├───────────────────────────────────────────────────────────┤
│                                                            │
│  Automatically deploys your Next.js site                  │
│  Free hosting                                             │
│  Auto SSL (HTTPS)                                         │
│  Global CDN                                               │
│                                                            │
└───────────────────────────────────────────────────────────┘


┌───────────────────────────────────────────────────────────┐
│  HOSTINGER (shop.nuvanaah.com)                            │
├───────────────────────────────────────────────────────────┤
│                                                            │
│  📁 /public_html/                                         │
│    ├── wp-admin/              ← WordPress admin           │
│    ├── wp-content/                                        │
│    │   ├── plugins/woocommerce/  ← WooCommerce           │
│    │   └── uploads/              ← Product images        │
│    └── wp-json/wc/v3/          ← REST API endpoint       │
│                                                            │
│  💾 MySQL Database                                        │
│    ├── wp_posts               ← Products stored here     │
│    ├── wp_woocommerce_order   ← Orders stored here       │
│    └── wp_postmeta            ← Product details          │
│                                                            │
└───────────────────────────────────────────────────────────┘
```

---

## 🔐 Security Model

```
www.nuvanaah.com
├── Public ✅
├── Customer can browse freely
├── Add to cart (client-side, localStorage)
├── Checkout requires login (Supabase auth)
└── Order submission uses API key (server-side only)

shop.nuvanaah.com
├── Private 🔒
├── Password protected
├── Only accessible from your IP (optional)
├── Hidden from Google (robots.txt)
├── Admin login required
└── API requires Consumer Key + Secret
```

**Customer can NEVER:**
- Access shop.nuvanaah.com/wp-admin
- See your WooCommerce dashboard
- Edit products
- View all orders

**Customer CAN:**
- Browse www.nuvanaah.com
- See products (fetched via API)
- Add to cart
- Checkout
- View THEIR orders only

---

## 💡 Real-World Analogy

**Your Nuvanaah setup is like a restaurant:**

```
🏪 www.nuvanaah.com (Dining Room)
   ↑
   What customers see:
   - Beautiful interior design
   - Menu (product catalog)
   - Tables (shopping cart)
   - Cashier (checkout)
   
   = Your Next.js frontend

🔒 shop.nuvanaah.com (Kitchen/Inventory)
   ↑
   Where staff works:
   - Ingredient storage (products)
   - Recipe book (product details)
   - Order management
   - Stock tracking
   
   = WooCommerce backend

📡 REST API (Waiter)
   ↑
   Communication:
   - Takes orders from dining room
   - Gets food from kitchen
   - Serves customers
   
   = Your lib/woocommerce.ts
```

**Customer experience:**
1. Walks into dining room (www.nuvanaah.com)
2. Looks at menu (products)
3. Orders food (add to cart)
4. Waiter takes order (API)
5. Kitchen prepares (WooCommerce processes)
6. Food served (order confirmation)

**Customer NEVER sees the kitchen!**

---

## ✅ Quick Checklist

**To understand your setup:**

- [ ] I understand www.nuvanaah.com is my Next.js site (frontend)
- [ ] I understand shop.nuvanaah.com is WooCommerce (backend)
- [ ] I understand customers only see www.nuvanaah.com
- [ ] I understand I manage products at shop.nuvanaah.com/wp-admin
- [ ] I understand the two sites communicate via REST API
- [ ] I understand I need separate hosting for WooCommerce
- [ ] I understand Vercel hosts my Next.js site (free)
- [ ] I understand Hostinger hosts my WooCommerce (₹149/month)
- [ ] I understand this is called "headless commerce"
- [ ] I'm ready to setup WooCommerce!

---

## 📞 Still Confused?

**Think of it this way:**

Your situation RIGHT NOW:
```
✅ Built beautiful Next.js website (www.nuvanaah.com)
❌ Products are hardcoded (not in database)
❌ No way to manage products easily
```

What you NEED:
```
✅ Keep beautiful Next.js website (www.nuvanaah.com)
✅ Add product database (WooCommerce at shop.nuvanaah.com)
✅ Connect them with API (code already written!)
```

**You're NOT:**
- ❌ Moving your site to WordPress
- ❌ Rebuilding in WordPress
- ❌ Losing your Next.js code

**You ARE:**
- ✅ Adding a backend for product storage
- ✅ Using WooCommerce as API-only
- ✅ Keeping your beautiful frontend

---

**Next step:** Read [WOOCOMMERCE_FOR_NEXTJS_SITES.md](WOOCOMMERCE_FOR_NEXTJS_SITES.md) for setup instructions!
