// app/api/orders/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = await createClient()
    
    const { data: orders, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          product:products (name, images)
        ),
        shipping_address:addresses (*)
      `)
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
    }

    return NextResponse.json(orders || [])
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


// // app/api/orders/route.ts
// import { NextResponse } from 'next/server'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/lib/auth'
// import { supabaseAdmin } from '@/lib/supabase/admin' // Use admin client instead

// export async function GET() {
//   try {
//     const session = await getServerSession(authOptions)
    
//     console.log('Session in orders API:', session) // Debug log
    
//     if (!session?.user?.id) {
//       console.log('No session or user ID found')
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
//     }

//     const supabase = supabaseAdmin // Use admin client to bypass RLS
    
//     console.log('Fetching orders for user:', session.user.id)
    
//     const { data: orders, error } = await supabase
//       .from('orders')
//       .select(`
//         *,
//         order_items (
//           id,
//           product_name,
//           product_image,
//           quantity,
//           price,
//           total
//         )
//       `)
//       .eq('user_id', session.user.id)
//       .order('created_at', { ascending: false })

//     if (error) {
//       console.error('Database error:', error)
//       return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
//     }

//     console.log('Found orders:', orders?.length || 0)
//     return NextResponse.json(orders || [])
    
//   } catch (error) {
//     console.error('API error:', error)
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
//   }
// }