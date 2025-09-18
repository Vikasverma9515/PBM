// src/app/admin/products/page.tsx
import { requireAdmin } from '@/lib/auth-guard'
import { supabaseAdmin } from '@/lib/supabase/admin'
import Link from 'next/link'

export default async function AdminProductsPage() {
  await requireAdmin()

  const { data: products = [] } = await supabaseAdmin
    .from('products')
    .select('id, name, slug, price, stock, active, created_at')
    .order('created_at', { ascending: false })

  const totalProducts = products.length
  const activeCount = products.filter((p: any) => p.active).length
  const inactiveCount = totalProducts - activeCount
  const totalStock = products.reduce((sum: number, p: any) => sum + (p.stock || 0), 0)

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">Manage your catalog, availability, and pricing.</p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center rounded-md bg-[#EA1934] px-4 py-2 text-white hover:bg-red-600 transition-colors text-sm font-medium"
        >
          + Add Product
        </Link>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="rounded-lg border p-4 bg-white">
          <div className="text-sm text-gray-500">Total Products</div>
          <div className="mt-1 text-2xl font-bold">{totalProducts}</div>
        </div>
        <div className="rounded-lg border p-4 bg-white">
          <div className="text-sm text-gray-500">Active</div>
          <div className="mt-1 text-2xl font-bold text-green-600">{activeCount}</div>
        </div>
        <div className="rounded-lg border p-4 bg-white">
          <div className="text-sm text-gray-500">Inactive</div>
          <div className="mt-1 text-2xl font-bold text-yellow-600">{inactiveCount}</div>
        </div>
        <div className="rounded-lg border p-4 bg-white">
          <div className="text-sm text-gray-500">Total Stock</div>
          <div className="mt-1 text-2xl font-bold">{totalStock}</div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {products.map((product: any) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.slug}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${(product.price ?? 0).toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock ?? 0}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {product.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-600">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}