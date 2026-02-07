import { supabase } from './auth'

/**
 * Test Supabase connection
 * Run this to verify your Supabase setup is working
 */
export async function testSupabaseConnection() {
  try {
    console.log('🔍 Testing Supabase connection...')
    
    // Test 1: Check if client is initialized
    if (!supabase) {
      throw new Error('Supabase client not initialized')
    }
    console.log('✅ Supabase client initialized')

    // Test 2: Test database connection
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1)

    if (error && error.code !== 'PGRST116') { // PGRST116 = table doesn't exist yet
      throw new Error(`Database connection failed: ${error.message}`)
    }
    console.log('✅ Database connection successful')

    // Test 3: Test auth functionality
    const { data: { session } } = await supabase.auth.getSession()
    console.log('✅ Auth module working')
    console.log(`   Current session: ${session ? 'Active' : 'None'}`)

    console.log('\n🎉 All tests passed! Supabase is ready to use.')
    console.log('\n📋 Next steps:')
    console.log('1. Go to https://ivakqegcocrljhkrettx.supabase.co')
    console.log('2. Click "SQL Editor" in left sidebar')
    console.log('3. Create a new query')
    console.log('4. Copy and paste contents from lib/supabase-setup.sql')
    console.log('5. Click "Run" to create all tables')
    console.log('6. Test signup/login on your website')

    return { success: true, error: null }
  } catch (error: any) {
    console.error('❌ Supabase test failed:', error.message)
    return { success: false, error: error.message }
  }
}

/**
 * Test user signup flow
 */
export async function testSignup(email: string, password: string, name: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
      },
    })

    if (error) {
      console.error('❌ Signup failed:', error.message)
      return { success: false, error: error.message }
    }

    console.log('✅ Signup successful!')
    console.log('   User ID:', data.user?.id)
    console.log('   Email:', data.user?.email)
    console.log('   ⚠️  Check your email for verification link')

    return { success: true, user: data.user }
  } catch (error: any) {
    console.error('❌ Test error:', error.message)
    return { success: false, error: error.message }
  }
}

/**
 * Test user login flow
 */
export async function testLogin(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('❌ Login failed:', error.message)
      return { success: false, error: error.message }
    }

    console.log('✅ Login successful!')
    console.log('   User ID:', data.user?.id)
    console.log('   Email:', data.user?.email)
    console.log('   Session expires:', new Date(data.session?.expires_at! * 1000))

    return { success: true, user: data.user, session: data.session }
  } catch (error: any) {
    console.error('❌ Test error:', error.message)
    return { success: false, error: error.message }
  }
}

// Run basic connection test if this file is executed directly
if (require.main === module) {
  testSupabaseConnection()
}
