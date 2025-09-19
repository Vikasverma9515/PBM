// app/api/admin/products/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase/admin'

async function requireAdmin() {
  const session = await getServerSession(authOptions)
  if (!session?.user || session.user.role !== 'ADMIN') return null
  return session
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await context.params
  const body = await request.json()
  const { error } = await supabaseAdmin.from('products').update({
    slug: body.slug,
    name: body.name,
    short_description: body.short_description,
    description: body.description,
    images: body.images,
    price: body.price,
    active: body.active,
    category: body.category,
    features: body.features,
    specifications: body.specifications,
    benefits: body.benefits,
    whats_in_box: body.whats_in_box,
    user_guides: body.user_guides,
    videos: body.videos,
    combined_products: body.combined_products,
    stock: body.stock,
  }).eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

export async function DELETE(_request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const session = await requireAdmin()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await context.params
  const { error } = await supabaseAdmin.from('products').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}