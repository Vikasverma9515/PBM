// // app/api/products/route.ts
// import { NextResponse } from 'next/server'
// import { createClient } from '@/lib/supabase/server'

// export async function GET() {
//   try {
//     const supabase = createClient()
    
//     const { data: products, error } = await supabase
//       .from('products')
//       .select('*')
//       .eq('active', true)
//       .order('created_at', { ascending: false })

//     if (error) {
//       console.error('Database error:', error)
//       return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
//     }

//     return NextResponse.json(products || [])
//   } catch (error) {
//     console.error('API error:', error)
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
//   }
// }


// app/api/products/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
    }

    return NextResponse.json(products || [])
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}