// lib/supabase/public.ts
// Cookie-less Supabase client for build-time/static usage
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let _supabasePublic: SupabaseClient | null = null

export function getSupabasePublic(): SupabaseClient {
  if (!_supabasePublic) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!url || !anonKey) {
      throw new Error(
        'Supabase environment variables are missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
      )
    }

    _supabasePublic = createClient(url, anonKey, {
      auth: {
        // No session persistence/cookies at build time
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  }

  return _supabasePublic
}