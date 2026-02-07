import { createClient } from '@supabase/supabase-js'
import { User } from '@/lib/types'

/**
 * Supabase Authentication Service
 * Handles user signup, login, logout, and session management
 */

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Sign up a new user
 */
export async function signUp(email: string, password: string, name: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    })

    if (error) {
      return { user: null, error: error.message }
    }

    if (data.user) {
      // Create user profile in database
      const { error: profileError } = await supabase
        .from('users')
        .insert([
          {
            id: data.user.id,
            email: data.user.email,
            name,
            created_at: new Date().toISOString(),
          },
        ])

      if (profileError) {
        console.error('Profile creation error:', profileError)
      }

      const user: User = {
        id: data.user.id,
        email: data.user.email!,
        name,
        phone: '',
        createdAt: new Date(),
      }
      return { user, error: null }
    }

    return { user: null, error: 'Failed to create user' }
  } catch (error) {
    console.error('Sign up error:', error)
    return { user: null, error: 'Failed to sign up' }
  }
}

/**
 * Log in an existing user
 */
export async function login(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { user: null, error: error.message }
    }

    if (data.user) {
      // Fetch user profile
      const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single()

      const user: User = {
        id: data.user.id,
        email: data.user.email!,
        name: profile?.name || 'User',
        phone: profile?.phone || '',
        createdAt: new Date(data.user.created_at),
      }
      return { user, error: null }
    }

    return { user: null, error: 'Failed to login' }
  } catch (error) {
    console.error('Login error:', error)
    return { user: null, error: 'Invalid credentials' }
  }
}

/**
 * Log out the current user
 */
export async function logout() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      return { error: error.message }
    }
    return { error: null }
  } catch (error) {
    console.error('Logout error:', error)
    return { error: 'Failed to logout' }
  }
}

/**
 * Get the current authenticated user
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return null
    }

    // Fetch user profile
    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()

    return {
      id: user.id,
      email: user.email!,
      name: profile?.name || 'User',
      phone: profile?.phone || '',
      createdAt: new Date(user.created_at),
    }
  } catch (error) {
    console.error('Get current user error:', error)
    return null
  }
}

/**
 * Reset password for a user
 */
export async function resetPassword(email: string) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    
    if (error) {
      return { error: error.message }
    }
    return { error: null }
  } catch (error) {
    console.error('Reset password error:', error)
    return { error: 'Failed to reset password' }
  }
}

/**
 * Update user password
 */
export async function updatePassword(newPassword: string) {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    
    if (error) {
      return { error: error.message }
    }
    return { error: null }
  } catch (error) {
    console.error('Update password error:', error)
    return { error: 'Failed to update password' }
  }
}
