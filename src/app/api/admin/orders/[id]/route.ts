// // app/api/admin/orders/[id]/route.ts
// import { NextResponse } from 'next/server'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '@/lib/auth'
// import { supabaseAdmin } from '@/lib/supabase/admin'
// import { stripe } from '@/lib/stripe'

// // Ensure only ADMIN can mutate
// async function requireAdmin() {
//   const session = await getServerSession(authOptions)
//   if (!session?.user || session.user.role !== 'ADMIN') {
//     return null
//   }
//   return session
// }

// // Update order status and tracking
// export async function PATCH(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const session = await requireAdmin()
//   if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

//   try {
//     const { status, carrier, tracking_number } = await request.json()

//     const updates: any = {}
//     if (status) {
//       updates.status = status
//       if (status === 'SHIPPED') updates.shipped_at = new Date().toISOString()
//       if (status === 'DELIVERED') updates.delivered_at = new Date().toISOString()
//     }
//     if (carrier !== undefined) updates.carrier = carrier
//     if (tracking_number !== undefined) updates.tracking_number = tracking_number

//     const { error } = await supabaseAdmin
//       .from('orders')
//       .update(updates)
//       .eq('id', params.id)

//     if (error) {
//       console.error('Failed to update order:', error)
//       return NextResponse.json({ error: 'Update failed' }, { status: 500 })
//     }

//     return NextResponse.json({ ok: true })
//   } catch (e: any) {
//     return NextResponse.json({ error: e.message }, { status: 400 })
//   }
// }

// // Capture a payment (if manual capture is used)
// export async function POST(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const session = await requireAdmin()
//   if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

//   const { action, amount } = await request.json()

//   // Load order to get payment intent
//   const { data: order, error } = await supabaseAdmin
//     .from('orders')
//     .select('id, stripe_payment_id, payment_status')
//     .eq('id', params.id)
//     .single()

//   if (error || !order) {
//     return NextResponse.json({ error: 'Order not found' }, { status: 404 })
//   }

//   try {
//     if (action === 'refund') {
//       if (!order.stripe_payment_id) {
//         return NextResponse.json({ error: 'No payment to refund' }, { status: 400 })
//       }
//       await stripe.refunds.create({ payment_intent: order.stripe_payment_id, amount: amount ? Math.round(amount * 100) : undefined })
//       return NextResponse.json({ ok: true })
//     }

//     if (action === 'capture') {
//       if (!order.stripe_payment_id) {
//         return NextResponse.json({ error: 'No payment to capture' }, { status: 400 })
//       }
//       await stripe.paymentIntents.capture(order.stripe_payment_id)
//       return NextResponse.json({ ok: true })
//     }

//     return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
//   } catch (e: any) {
//     console.error('Stripe action failed:', e)
//     return NextResponse.json({ error: e.message }, { status: 500 })
//   }
// }



// app/api/admin/orders/[id]/route.ts
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { stripe } from '@/lib/stripe'

async function requireAdmin() {
  const session = await getServerSession(authOptions)
  if (!session?.user || session.user.role !== 'ADMIN') {
    return null
  }
  return session
}

// Update order status and tracking
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireAdmin()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const { id } = await params // Await the params Promise
    const { status, carrier, tracking_number } = await request.json()

    const updates: Record<string, any> = {}
    if (status) {
      updates.status = status
      if (status === 'SHIPPED') updates.shipped_at = new Date().toISOString()
      if (status === 'DELIVERED') updates.delivered_at = new Date().toISOString()
    }
    if (carrier !== undefined) updates.carrier = carrier
    if (tracking_number !== undefined) updates.tracking_number = tracking_number

    const { error } = await supabaseAdmin
      .from('orders')
      .update(updates)
      .eq('id', id) // Use awaited id

    if (error) {
      console.error('Failed to update order:', error)
      return NextResponse.json({ error: 'Update failed' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (e: unknown) {
    const error = e as Error
    return NextResponse.json({ error: error.message }, { status: 400 })
  }
}

// Capture a payment (if manual capture is used)
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await requireAdmin()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  try {
    const { id } = await params // Await the params Promise
    const { action, amount } = await request.json()

    // Load order to get payment intent
    const { data: order, error } = await supabaseAdmin
      .from('orders')
      .select('id, stripe_payment_id, payment_status')
      .eq('id', id) // Use awaited id
      .single()

    if (error || !order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    if (action === 'refund') {
      if (!order.stripe_payment_id) {
        return NextResponse.json({ error: 'No payment to refund' }, { status: 400 })
      }
      await stripe.refunds.create({ 
        payment_intent: order.stripe_payment_id, 
        amount: amount ? Math.round(amount * 100) : undefined 
      })
      return NextResponse.json({ ok: true })
    }

    if (action === 'capture') {
      if (!order.stripe_payment_id) {
        return NextResponse.json({ error: 'No payment to capture' }, { status: 400 })
      }
      await stripe.paymentIntents.capture(order.stripe_payment_id)
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
  } catch (e: unknown) {
    const error = e as Error
    console.error('Stripe action failed:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}