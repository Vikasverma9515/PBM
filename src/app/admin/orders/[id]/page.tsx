// src/app/admin/orders/[id]/page.tsx
import { requireAdmin } from '@/lib/auth-guard'
import { supabaseAdmin } from '@/lib/supabase/admin'
import Link from 'next/link'

export default async function AdminOrderDetail({ params }: { params: { id: string } }) {
  await requireAdmin()

  const orderId = params.id

  const { data: order, error } = await supabaseAdmin
    .from('orders')
    .select(`
      *,
      order_items (*),
      shipping_address:addresses (*),
    `)
    .eq('id', orderId)
    .single()

  if (error || !order) {
    return (
      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Order not found</h1>
        <Link href="/admin/orders" className="text-blue-600">Back to orders</Link>
      </main>
    )
  }

  return (
    <main className="max-w-5xl mx-auto p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Order {order.order_number}</h1>
        <Link href="/admin/orders" className="text-blue-600">Back to orders</Link>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <section className="border rounded-lg p-4 bg-white">
            <h2 className="font-semibold mb-2">Payment & Status</h2>
            <div className="text-sm text-gray-700 space-y-1">
              <div><strong>Payment Status:</strong> {order.payment_status}</div>
              <div><strong>Order Status:</strong> {order.status}</div>
              <div><strong>Total:</strong> ${(order.total || 0).toFixed(2)}</div>
              <div><strong>Subtotal:</strong> ${(order.subtotal || 0).toFixed(2)}</div>
              <div><strong>Shipping:</strong> ${(order.shipping || 0).toFixed(2)}</div>
              <div><strong>Tax:</strong> ${(order.tax || 0).toFixed(2)}</div>
              <div><strong>Stripe Session:</strong> {order.stripe_session_id || '-'}</div>
              <div><strong>Stripe Payment:</strong> {order.stripe_payment_id || '-'}</div>
              <div><strong>Created:</strong> {new Date(order.created_at).toLocaleString()}</div>
            </div>
          </section>

          <section className="border rounded-lg p-4 bg-white">
            <h2 className="font-semibold mb-2">Items</h2>
            <div className="space-y-2 text-sm">
              {order.order_items?.map((it: any) => (
                <div key={it.id} className="flex justify-between">
                  <span>{it.product_name} × {it.quantity}</span>
                  <span>${(it.total || 0).toFixed(2)}</span>
                </div>
              ))}
              {!order.order_items?.length && (
                <div className="text-gray-500">No items.</div>
              )}
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <section className="border rounded-lg p-4 bg-white">
            <h2 className="font-semibold mb-2">Customer</h2>
            <div className="text-sm text-gray-700 space-y-1">
              <div><strong>Email:</strong> {order.email || '-'}</div>
              <div><strong>Phone:</strong> {order.phone || '-'}</div>
              <div><strong>User ID:</strong> {order.user_id || '-'}</div>
            </div>
          </section>

          <section className="border rounded-lg p-4 bg-white">
            <h2 className="font-semibold mb-2">Shipping Address</h2>
            {order.shipping_address ? (
              <div className="text-sm text-gray-700">
                <div>{order.shipping_address.first_name} {order.shipping_address.last_name}</div>
                <div>{order.shipping_address.address1}</div>
                <div>{order.shipping_address.city}, {order.shipping_address.state} {order.shipping_address.zip_code}</div>
                <div>{order.shipping_address.country}</div>
                <div>{order.shipping_address.phone}</div>
              </div>
            ) : (
              <div className="text-sm text-gray-500">No shipping address.</div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}