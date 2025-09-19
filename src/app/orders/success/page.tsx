// app/order/success/page.tsx
'use client'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Package, Truck } from 'lucide-react'

function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState<any>(null)
  const sessionId = searchParams?.get('session_id')

  useEffect(() => {
    if (sessionId) {
      // You could create an API route to get order details by session_id
      // For now, we'll just show a success message
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          
          <h1 className="text-3xl font-bold text-black mb-4">
            Order Confirmed!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. You'll receive an email confirmation shortly.
          </p>

          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600">Session ID:</p>
              <p className="font-mono text-sm">{sessionId}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <Package className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <h3 className="font-semibold">Processing</h3>
                <p className="text-sm text-gray-600">We'll prepare your order</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Truck className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <h3 className="font-semibold">Shipping</h3>
                <p className="text-sm text-gray-600">Free shipping on orders $100+</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/orders"
              className="w-full bg-[#EA1934] text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors block"
            >
              View Your Orders
            </Link>
            
            <Link
              href="/"
              className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  )
}