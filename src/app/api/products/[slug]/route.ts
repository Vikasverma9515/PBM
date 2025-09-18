// // app/api/products/[slug]/route.ts
// import { NextResponse } from 'next/server'
// import { createClient } from '@/lib/supabase/server'

// export async function GET(
//   request: Request,
//   { params }: { params: { slug: string } }
// ) {
//   try {
//     // createClient is async in our setup; await to get the client
//     const supabase = await createClient()
    
//     const { data: product, error } = await supabase
//       .from('products')
//       .select('*')
//       .eq('slug', params.slug)
//       .eq('active', true)
//       .single()

//     if (error) {
//       if ((error as any).code === 'PGRST116') {
//         return NextResponse.json({ error: 'Product not found' }, { status: 404 })
//       }
//       console.error('Database error:', error)
//       return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
//     }

//     return NextResponse.json(product)
//   } catch (error) {
//     console.error('API error:', error)
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
//   }
// }



// app/api/products/[slug]/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params // Await the params Promise
    
    // createClient is async in our setup; await to get the client
    const supabase = await createClient()
    
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug) // Use awaited slug
      .eq('active', true)
      .single()

    if (error) {
      if ((error as any).code === 'PGRST116') {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })
      }
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}