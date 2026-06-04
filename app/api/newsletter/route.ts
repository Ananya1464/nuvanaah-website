import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // TODO: Connect to Mailchimp / ConvertKit before launch
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ success: false, error: 'Missing email' }, { status: 400 })
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 })
    }

    console.log(`[Newsletter] New signup received for email: ${email}`)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[Newsletter] Error processing signup:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
