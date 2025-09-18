// src/app/admin/orders/page.tsx
import Link from 'next/link'
import { requireAdmin } from '@/lib/auth-guard'
import { supabaseAdmin } from '@/lib/supabase/admin'

export default async function AdminOrders() {
  await requireAdmin()

  // Basic pagination inputs (can be extended with search/filter params)
  const pageSize = 20

  const { data: orders, count } = await supabaseAdmin
    .from('orders')
    .select('id, order_number, email, total, payment_status, status, created_at, carrier, tracking_number, shipped_at, delivered_at', { count: 'exact' })
    .order('created_at', { ascending: false })

  const badge = (label: string, type: 'success' | 'warn' | 'info' | 'error') => (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
      type === 'success' ? 'bg-green-100 text-green-800' :
      type === 'warn' ? 'bg-yellow-100 text-yellow-800' :
      type === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
    }`}>{label}</span>
  )

  async function ActionButtons({ id, status }: { id: string, status: string }) {
    async function updateStatus(next: 'CONFIRMED' | 'SHIPPED' | 'DELIVERED') {
      'use server'
      await fetch(`/api/admin/orders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: next })
      })
    }
    return (
      <div className="flex gap-2">
        {status === 'PENDING' && (
          <form action={async () => updateStatus('CONFIRMED')}><button className="px-2 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700">Confirm</button></form>
        )}
        {status === 'CONFIRMED' && (
          <form action={async () => updateStatus('SHIPPED')}><button className="px-2 py-1 text-xs rounded bg-emerald-600 text-white hover:bg-emerald-700">Mark Shipped</button></form>
        )}
        {status === 'SHIPPED' && (
          <form action={async () => updateStatus('DELIVERED')}><button className="px-2 py-1 text-xs rounded bg-gray-800 text-white hover:bg-black">Mark Delivered</button></form>
        )}
      </div>
    )
  }

  async function TrackingForm({ id, carrier, tracking }: { id: string, carrier?: string, tracking?: string }) {
    async function save(formData: FormData) {
      'use server'
      await fetch(`/api/admin/orders/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          carrier: formData.get('carrier'),
          tracking_number: formData.get('tracking_number')
        })
      })
    }
    return (
      <form action={save} className="flex items-center gap-2">
        <input name="carrier" defaultValue={carrier || ''} placeholder="Carrier" className="px-2 py-1 text-xs border rounded" />
        <input name="tracking_number" defaultValue={tracking || ''} placeholder="Tracking #" className="px-2 py-1 text-xs border rounded" />
        <button className="px-2 py-1 text-xs rounded border hover:bg-gray-50">Save</button>
      </form>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-gray-600 text-sm">Manage payments and fulfillment.</p>
        </div>
        <div className="text-sm text-gray-500">{count || 0} total</div>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tracking</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {orders?.map((o: any) => (
                <tr key={o.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-mono font-semibold">{o.order_number}</div>
                    <div className="text-xs text-gray-500">{new Date(o.created_at).toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{o.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">${(o.total || 0).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {badge(o.payment_status === 'PAID' ? 'PAID' : o.payment_status, o.payment_status === 'PAID' ? 'success' : 'warn')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {badge(o.status, o.status === 'DELIVERED' ? 'success' : o.status === 'SHIPPED' ? 'info' : 'warn')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    <div className="space-y-1">
                      {o.carrier && o.tracking_number ? (
                        <div className="text-gray-700">{o.carrier} • {o.tracking_number}</div>
                      ) : (
                        <div className="text-gray-400">No tracking</div>
                      )}
                      <TrackingForm id={o.id} carrier={o.carrier} tracking={o.tracking_number} />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex flex-col gap-2">
                      <ActionButtons id={o.id} status={o.status} />
                      <div className="flex gap-2">
                        <form action={async () => {
                          'use server'
                          await fetch(`/api/admin/orders/${o.id}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'refund' }) })
                        }}>
                          <button className="px-2 py-1 text-xs rounded border text-red-600 hover:bg-red-50">Refund</button>
                        </form>
                        <form action={async () => {
                          'use server'
                          await fetch(`/api/admin/orders/${o.id}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'capture' }) })
                        }}>
                          <button className="px-2 py-1 text-xs rounded border text-blue-600 hover:bg-blue-50">Capture</button>
                        </form>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
