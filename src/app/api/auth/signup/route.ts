// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    // Create Supabase auth user (idempotent: ignore existing user)
    const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { name },
    })

    // If user exists already, fetch it to proceed
    let userId = authUser?.user?.id as string | undefined
    if (authError && (authError as any).message?.toLowerCase().includes('user already registered')) {
      const { data: existing, error: fetchErr } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1, email }) as any
      if (!fetchErr && existing?.users?.length) {
        userId = existing.users[0].id
      }
    }

    if (!userId) {
      return NextResponse.json({ error: authError?.message || 'Failed to create user' }, { status: 400 })
    }

    // Upsert profile row for resilience (conflict on id)
    const { error: profileError } = await supabaseAdmin
      .from('users')
      .upsert({ id: userId, email, name }, { onConflict: 'id' })

    if (profileError) {
      console.error('Profile upsert error:', profileError)
      return NextResponse.json({ error: 'Failed to create user profile' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Signup error:', e)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}