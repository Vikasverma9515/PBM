// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { SupabaseClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json()

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabase: SupabaseClient = await createClient();
    
    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        message,
        status: 'NEW'
      })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 })
    }

    // TODO: Send notification email to admin
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}