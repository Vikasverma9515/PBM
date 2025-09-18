// src/app/admin/page.tsx
import { requireAdmin } from '@/lib/auth-guard'
import { supabaseAdmin } from '@/lib/supabase/admin'
import Link from 'next/link'

export default async function AdminHome() {
  await requireAdmin()

  // Load key metrics
  const [ordersCountRes, paidOrdersRes, pendingShipRes, productsCountRes, activeProductsRes, stockRes] = await Promise.all([
    supabaseAdmin.from('orders').select('id', { count: 'exact', head: true }),
    supabaseAdmin.from('orders').select('total').eq('payment_status', 'PAID'),
    supabaseAdmin.from('orders').select('id', { count: 'exact', head: true }).eq('status', 'CONFIRMED'),
    supabaseAdmin.from('products').select('id', { count: 'exact', head: true }),
    supabaseAdmin.from('products').select('id', { count: 'exact', head: true }).eq('active', true),
    supabaseAdmin.from('products').select('stock')
  ])

  const totalOrders = ordersCountRes.count || 0
  const totalRevenue = (paidOrdersRes.data || []).reduce((sum, r: any) => sum + (Number(r.total) || 0), 0)
  const pendingShip = pendingShipRes.count || 0
  const totalProducts = productsCountRes.count || 0
  const activeProducts = activeProductsRes.count || 0
  const totalStock = (stockRes.data || []).reduce((sum, r: any) => sum + (Number(r.stock) || 0), 0)

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of orders, products, and operations.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/orders" className="inline-flex items-center rounded-md border px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm font-medium">View Orders</Link>
          <Link href="/admin/products" className="inline-flex items-center rounded-md bg-[#EA1934] px-4 py-2 text-white hover:bg-red-600 text-sm font-medium">Manage Products</Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="rounded-lg border p-5 bg-white">
          <div className="text-sm text-gray-500">Total Orders</div>
          <div className="mt-1 text-3xl font-bold">{totalOrders}</div>
        </div>
        <div className="rounded-lg border p-5 bg-white">
          <div className="text-sm text-gray-500">Revenue (Paid)</div>
          <div className="mt-1 text-3xl font-bold">${totalRevenue.toFixed(2)}</div>
        </div>
        <div className="rounded-lg border p-5 bg-white">
          <div className="text-sm text-gray-500">Pending Shipment</div>
          <div className="mt-1 text-3xl font-bold text-yellow-600">{pendingShip}</div>
        </div>
        <div className="rounded-lg border p-5 bg-white">
          <div className="text-sm text-gray-500">Inventory (Units)</div>
          <div className="mt-1 text-3xl font-bold">{totalStock}</div>
        </div>
      </div>

      {/* Quick Management Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="rounded-lg border bg-white p-6">
          <h2 className="text-lg font-semibold mb-2">Orders</h2>
          <p className="text-sm text-gray-600 mb-4">Track payments and fulfillment.</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>- Paid orders move to <strong>CONFIRMED</strong> automatically via Stripe webhook.</li>
            <li>- Update status to <strong>SHIPPED</strong> and <strong>DELIVERED</strong> (coming next).</li>
          </ul>
          <Link href="/admin/orders" className="inline-flex items-center rounded-md border px-3 py-2 text-gray-700 hover:bg-gray-50 text-sm">Open Orders</Link>
        </section>

        <section className="rounded-lg border bg-white p-6">
          <h2 className="text-lg font-semibold mb-2">Products</h2>
          <p className="text-sm text-gray-600 mb-4">Manage catalog, pricing, and availability.</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>- {activeProducts} active of {totalProducts} total products.</li>
            <li>- {totalStock} units in stock.</li>
          </ul>
          <Link href="/admin/products" className="inline-flex items-center rounded-md bg-[#EA1934] px-3 py-2 text-white hover:bg-red-600 text-sm">Manage Products</Link>
        </section>

        <section className="rounded-lg border bg-white p-6">
          <h2 className="text-lg font-semibold mb-2">Operations</h2>
          <p className="text-sm text-gray-600 mb-4">Shipping, payments, and analytics.</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>- Shipping queue: {pendingShip} to ship.</li>
            <li>- Payments via Stripe (webhooks enabled).</li>
          </ul>
          <div className="flex gap-3">
            <Link href="/admin/orders" className="inline-flex items-center rounded-md border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Shipping</Link>
            <Link href="/admin/orders" className="inline-flex items-center rounded-md border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Payments</Link>
          </div>
        </section>
      </div>
    </main>
  )
}