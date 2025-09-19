// app/api/webhooks/stripe/route.ts
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase/admin'
import type Stripe from 'stripe'

export async function POST(request: Request) {
  const body = await request.text()
  // const signature = headers().get('stripe-signature')!
const headersPromise = headers()
const headersObject = await headersPromise

const signature = headersObject.get('stripe-signature')!
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        // Update order status to paid
        const { error: orderError } = await supabaseAdmin
          .from('orders')
          .update({
            payment_status: 'PAID',
            status: 'CONFIRMED',
            stripe_payment_id: session.payment_intent as string,
          })
          .eq('id', session.metadata?.orderId)

        if (orderError) {
          console.error('Failed to update order:', orderError)
          return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
        }

        // Load order details for email
        const { data: order, error: fetchError } = await supabaseAdmin
          .from('orders')
          .select(`
            *,
            order_items (*),
            addresses:addresses!shipping_address_id (*)
          `)
          .eq('id', session.metadata?.orderId)
          .single()

        if (fetchError || !order) {
          console.error('Failed to fetch order for email:', fetchError)
          break
        }

        // Send supplier notification via Resend
        try {
          const { Resend } = await import('resend')
          const resend = new Resend(process.env.RESEND_API_KEY)

          const itemsHtml = (order.order_items || [])
            .map((it: any) => `<tr><td>${it.product_name}</td><td>${it.quantity}</td><td>$${Number(it.price).toFixed(2)}</td><td>$${Number(it.total).toFixed(2)}</td></tr>`)
            .join('')

          const addr = order.addresses
          const addressHtml = addr ? `
            <p>
              ${addr.first_name || ''} ${addr.last_name || ''}<br/>
              ${addr.address1 || ''}<br/>
              ${addr.city || ''}, ${addr.state || ''} ${addr.zip_code || ''}<br/>
              ${addr.country || ''}<br/>
              ${addr.phone || ''}
            </p>
          ` : '<p>No shipping address on file.</p>'

          const html = `
            <div>
              <h2>New Order Confirmed: ${order.order_number}</h2>
              <p><strong>Email:</strong> ${order.email || '-'}</p>
              <p><strong>Phone:</strong> ${order.phone || '-'}</p>
              <h3>Items</h3>
              <table border="1" cellpadding="6" cellspacing="0">
                <thead><tr><th>Product</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
                <tbody>${itemsHtml}</tbody>
              </table>
              <h3>Totals</h3>
              <p>Subtotal: $${Number(order.subtotal || 0).toFixed(2)}<br/>
                 Shipping: $${Number(order.shipping || 0).toFixed(2)}<br/>
                 Tax: $${Number(order.tax || 0).toFixed(2)}<br/>
                 <strong>Grand Total: $${Number(order.total || 0).toFixed(2)}</strong></p>
              <h3>Shipping Address</h3>
              ${addressHtml}
            </div>
          `

          await resend.emails.send({
            from: 'orders@pmb.onresend.com',
            to: ['pmbdistributors@gmail.com'],
            subject: `New order ${order.order_number}`,
            html,
          })
        } catch (emailError) {
          console.error('Resend email error:', emailError)
        }

        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        
        // Update order status to failed
        const { error: orderError } = await supabaseAdmin
          .from('orders')
          .update({
            payment_status: 'FAILED',
            status: 'CANCELLED',
          })
          .eq('stripe_payment_id', paymentIntent.id)

        if (orderError) {
          console.error('Failed to update failed order:', orderError)
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}