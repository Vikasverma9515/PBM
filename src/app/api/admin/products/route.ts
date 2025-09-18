// app/api/admin/products/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase/admin'

async function requireAdmin() {
  const session = await getServerSession(authOptions)
  if (!session?.user || session.user.role !== 'ADMIN') return null
  return session
}

export async function GET() {
  const session = await requireAdmin()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabaseAdmin.from('products').select('*').order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const session = await requireAdmin()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json()
  const { error, data } = await supabaseAdmin.from('products').insert({
    slug: body.slug,
    name: body.name,
    short_description: body.short_description || null,
    description: body.description || null,
    images: body.images || [],
    price: body.price,
    active: body.active ?? true,
    category: body.category || null,
    features: body.features || [],
    specifications: body.specifications || {},
    benefits: body.benefits || [],
    whats_in_box: body.whats_in_box || [],
    user_guides: body.user_guides || [],
    videos: body.videos || [],
    combined_products: body.combined_products || [],
    stock: body.stock ?? 0,
  }).select('*').single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}