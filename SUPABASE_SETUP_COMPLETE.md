# 🚀 Supabase Setup Complete!

**Date:** February 2, 2026  
**Project:** Nuvanaah E-commerce

---

## ✅ What's Been Configured

### 1. Environment Variables (.env.local)
```env
NEXT_PUBLIC_SUPABASE_URL=https://ivakqegcocrljhkrettx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJI... (your key)
```

### 2. Supabase Client Library
- ✅ Installed `@supabase/supabase-js`
- ✅ Client initialized in [lib/auth.ts](lib/auth.ts)

### 3. Authentication Functions Updated
- `signUp()` - Creates Supabase auth user + profile
- `login()` - Authenticates with email/password
- `logout()` - Ends session
- `getCurrentUser()` - Gets logged-in user
- `resetPassword()` - Sends password reset email
- `updatePassword()` - Changes user password

---

## 📋 Next Steps - Database Setup

### Step 1: Open Supabase Dashboard
1. Go to: **https://supabase.com/dashboard/project/ivakqegcocrljhkrettx**
2. Click **"SQL Editor"** in the left sidebar
3. Click **"New query"**

### Step 2: Run Database Schema
1. Open [lib/supabase-setup.sql](lib/supabase-setup.sql)
2. Copy **ALL** the SQL code (Ctrl+A, Ctrl+C)
3. Paste into Supabase SQL Editor
4. Click **"Run"** button (or press Ctrl+Enter)

**Expected result:**
```
Success. No rows returned
```

### Step 3: Verify Tables Created
1. Click **"Table Editor"** in left sidebar
2. You should see these tables:
   - ✅ `users` - Customer accounts
   - ✅ `addresses` - Shipping/billing addresses
   - ✅ `orders` - Order history
   - ✅ `order_items` - Items in each order
   - ✅ `consultations` - Virtual consultation bookings
   - ✅ `wishlist` - Saved products
   - ✅ `reviews` - Product reviews

---

## 🔐 Database Schema Overview

### Tables Created

**users** (extends Supabase auth)
- Customer account profiles
- Linked to Supabase auth.users

**addresses**
- Shipping and billing addresses
- Can mark default address
- Supports multiple addresses per user

**orders**
- Complete order information
- Auto-generated order numbers (NUV-20260202-1234)
- Tracks payment, shipping, delivery
- Stores address snapshots

**order_items**
- Individual items in each order
- Product details preserved for history

**consultations**
- Virtual consultation bookings
- Service types: prosthesis fitting, wig styling, lymphedema, general

**wishlist**
- Save favorite products
- One entry per user per product

**reviews**
- Product ratings and reviews
- Moderation workflow (pending → approved/rejected)
- Verified purchase flag

---

## 🎯 Quick Test

After running the SQL schema, test the connection:

```bash
npm run dev
```

Then in browser console:
```javascript
// Check if Supabase is working
const { data } = await fetch('/api/test-supabase')
console.log(data)
```

---

## 📖 Usage Examples

### Sign Up User
```typescript
import { signUp } from '@/lib/auth'

const { user, error } = await signUp(
  'customer@example.com',
  'SecurePassword123!',
  'John Doe'
)
```

### Login User
```typescript
import { login } from '@/lib/auth'

const { user, error } = await login(
  'customer@example.com',
  'SecurePassword123!'
)
```

### Get Current User
```typescript
import { getCurrentUser } from '@/lib/auth'

const user = await getCurrentUser()
if (user) {
  console.log(`Welcome, ${user.name}!`)
}
```

### Create Order
```typescript
import { supabase } from '@/lib/auth'

const { data: order } = await supabase
  .from('orders')
  .insert([{
    user_id: userId,
    customer_email: 'customer@example.com',
    customer_name: 'John Doe',
    customer_phone: '+919876543210',
    shipping_address_line1: '123 Main St',
    shipping_city: 'Mumbai',
    shipping_state: 'Maharashtra',
    shipping_postal_code: '400001',
    billing_address_line1: '123 Main St',
    billing_city: 'Mumbai',
    billing_state: 'Maharashtra',
    billing_postal_code: '400001',
    subtotal: 2800,
    tax: 504,
    shipping_cost: 100,
    total: 3404,
    payment_method: 'razorpay',
  }])
  .select()
  .single()
```

---

## 🔒 Security Features

- **Row Level Security (RLS)** enabled on all tables
- Users can only access their own data
- Admin email (`care@nuvanaah.com`) has special permissions
- All queries automatically filtered by user ID
- Secure authentication with JWT tokens

---

## ⚠️ Important: Run SQL Schema Now!

**Your Supabase is connected but tables don't exist yet.**

👉 Follow **Step 1-3** above to create database tables

---

**Files Created:**
- [lib/auth.ts](lib/auth.ts) - Updated with real Supabase integration
- [lib/supabase-setup.sql](lib/supabase-setup.sql) - Database schema (run this!)
- [lib/test-supabase.ts](lib/test-supabase.ts) - Connection testing utilities
- [.env.local](.env.local) - Environment variables with your API keys

**Next:** Run the SQL schema in Supabase dashboard!
