// // lib/supabase/admin.ts
// import { createClient } from '@supabase/supabase-js'

// export const supabaseAdmin = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// )


// lib/supabase/admin.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _supabaseAdmin: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  if (!_supabaseAdmin) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error(`Missing Supabase environment variables`)
    }

    _supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  }

  return _supabaseAdmin
}

// Backward compatibility - but this will only work at runtime, not build time
export const supabaseAdmin = {
  get from() { return getSupabaseAdmin().from },
  get auth() { return getSupabaseAdmin().auth },
  get storage() { return getSupabaseAdmin().storage },
  get realtime() { return getSupabaseAdmin().realtime },
  get functions() { return getSupabaseAdmin().functions },
  get rest() {
    const supabase = getSupabaseAdmin();
    if (supabase instanceof SupabaseClient) {
      return supabase['rest'];
    }
    return null;
  }
}