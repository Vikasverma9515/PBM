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

        // TODO: Send confirmation email
        console.log('Order confirmed:', session.metadata?.orderId)
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