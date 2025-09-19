// lib/stripe.ts
import Stripe from 'stripe'

let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    const apiKey = process.env.STRIPE_SECRET_KEY
    if (!apiKey) {
      throw new Error('STRIPE_SECRET_KEY is not set')
    }
    _stripe = new Stripe(apiKey)
  }
  return _stripe
}

// Backward-compatible lazy export to avoid build-time initialization
export const stripe = {
  get checkout() { return getStripe().checkout },
  get paymentIntents() { return getStripe().paymentIntents },
  get refunds() { return getStripe().refunds },
  get webhooks() { return getStripe().webhooks },
} as const