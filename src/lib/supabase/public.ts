// lib/supabase/public.ts
// Cookie-less Supabase client for build-time/static usage
import { createClient } from '@supabase/supabase-js'

export const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      // No session persistence/cookies at build time
      persistSession: false,
      autoRefreshToken: false,
    },
  }
)