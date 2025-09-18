"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, ArrowLeft, Check, Minus, Plus } from "lucide-react"

export default function CartPage() {
  const { state, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart()
  const items = state.items
  const [checkingOut, setCheckingOut] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    setCheckingOut(true)
    setError(null)
    try {
      // Build payload for API (omit local id to avoid DB uuid constraint)
      const payload = {
        items: items.map((item) => ({
          // do NOT send id; server will store product_id null if missing
          slug: item.slug,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),
      }

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (res.status === 401) {
        window.location.href = "/signin?callbackUrl=/cart"
        return
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Checkout failed")
      }

      const { sessionId } = await res.json()

      const pk = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      if (!pk) {
        throw new Error("Stripe key not configured")
      }

      const stripe = await loadStripe(pk)
      if (!stripe) throw new Error("Failed to load Stripe")

      const { error } = await stripe.redirectToCheckout({ sessionId })
      if (error) throw error
    } catch (e: any) {
      console.error("Checkout error:", e)
      setError(e?.message || "Checkout failed")
      setCheckingOut(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <Link href="/marketplace" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4 mr-1" /> Continue shopping
        </Link>
        <div className="text-center py-24">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Browse the marketplace and add items to your cart.</p>
          <Button asChild className="bg-black text-white">
            <Link href="/marketplace">Go to Marketplace</Link>
          </Button>
        </div>
      </div>
    )
  }

  const subtotal = getTotalPrice()

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
      <Link href="/marketplace" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-1" /> Continue shopping
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-6">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="border-gray-200">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="relative w-24 h-16 bg-gray-100 rounded overflow-hidden">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  ) : null}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <button
                      aria-label="Decrease quantity"
                      className="p-1 rounded border hover:bg-gray-50"
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span>Qty: {item.quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      className="p-1 rounded border hover:bg-gray-50"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                  <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4 mr-1" /> Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between">
            <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>

        <div>
          <Card className="border-gray-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500">Taxes and shipping are calculated at checkout.</p>
              {error ? (
                <div className="text-sm text-red-600">{error}</div>
              ) : null}
              <Button className="w-full bg-black text-white" onClick={handleCheckout} disabled={checkingOut}>
                {checkingOut ? "Processing..." : "Proceed to Checkout"}
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Check className="w-4 h-4" /> Secure checkout
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}