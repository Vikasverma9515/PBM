// src/app/orders/page.tsx
'use client'
import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Link from 'next/link'

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/orders')
        if (!res.ok) {
          setError('Please sign in to view your orders.')
          setOrders([])
          return
        }
        const data = await res.json()
        setOrders(data)
      } catch (e) {
        setError('Failed to load orders')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <main>
      <Header />
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        {loading && <div>Loading...</div>}
        {error && (
          <div className="bg-yellow-50 text-yellow-800 p-3 rounded mb-4">{error}</div>
        )}
        {!loading && orders?.length === 0 && (
          <div className="text-gray-600">
            No orders yet. <Link href="/shop" className="text-blue-600">Shop now</Link>
          </div>
        )}
        <div className="space-y-4">
          {orders?.map((o) => (
            <div key={o.id} className="p-4 border rounded-lg">
              <div className="flex justify-between">
                <div>
                  <div className="font-mono">{o.order_number}</div>
                  <div className="text-sm text-gray-600">{new Date(o.created_at).toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${(o.total || 0).toFixed(2)}</div>
                  <div className="text-sm">{o.payment_status} / {o.status}</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-700">
                {o.order_items?.map((it: any) => (
                  <div key={it.id} className="flex justify-between">
                    <span>{it.product_name} × {it.quantity}</span>
                    <span>${(it.total || 0).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


// // src/app/orders/page.tsx
// 'use client'
// import { useEffect, useState } from 'react'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'
// import Header from '@/components/header'
// import Link from 'next/link'

// export default function OrdersPage() {
//   const { data: session, status } = useSession()
//   const router = useRouter()
//   const [orders, setOrders] = useState<any[] | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')

//   useEffect(() => {
//     console.log('Session status:', status)
//     console.log('Session data:', session)
    
//     // Wait for session to load
//     if (status === 'loading') {
//       return
//     }
    
//     // Redirect if not authenticated
//     if (status === 'unauthenticated') {
//       router.push('/signin?callbackUrl=/orders')
//       return
//     }
    
//     async function loadOrders() {
//       try {
//         console.log('Making API request to /api/orders')
        
//         const res = await fetch('/api/orders', {
//           headers: {
//             'Cache-Control': 'no-cache',
//           },
//         })
        
//         console.log('API response status:', res.status)
        
//         if (!res.ok) {
//           if (res.status === 401) {
//             console.log('Unauthorized, redirecting to signin')
//             router.push('/signin?callbackUrl=/orders')
//             return
//           }
          
//           const errorText = await res.text()
//           console.error('API error response:', errorText)
//           throw new Error(`Failed to fetch orders: ${errorText}`)
//         }
        
//         const data = await res.json()
//         console.log('Orders data received:', data)
//         setOrders(data)
        
//       } catch (e: any) {
//         console.error('Load orders error:', e)
//         setError(e.message || 'Failed to load orders')
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (status === 'authenticated') {
//       loadOrders()
//     }
//   }, [session, status, router])

//   // Show loading while checking auth
//   if (status === 'loading') {
//     return (
//       <main>
//         <Header />
//         <div className="max-w-5xl mx-auto p-8">
//           <div className="text-center">Loading...</div>
//         </div>
//       </main>
//     )
//   }

//   // Show signin prompt if not authenticated
//   if (status === 'unauthenticated') {
//     return (
//       <main>
//         <Header />
//         <div className="max-w-5xl mx-auto p-8">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold mb-4">Please sign in to view your orders</h1>
//             <Link 
//               href="/signin?callbackUrl=/orders"
//               className="bg-[#EA1934] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
//             >
//               Sign In
//             </Link>
//           </div>
//         </div>
//       </main>
//     )
//   }

//   return (
//     <main>
//       <Header />
//       <div className="max-w-5xl mx-auto p-8">
//         <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        
//         {loading && <div>Loading orders...</div>}
        
//         {error && (
//           <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-4">
//             {error}
//           </div>
//         )}
        
//         {!loading && orders?.length === 0 && (
//           <div className="text-center py-12">
//             <h2 className="text-xl font-semibold mb-4">No orders yet</h2>
//             <p className="text-gray-600 mb-6">
//               When you place your first order, it will appear here.
//             </p>
//             <Link 
//               href="/shop" 
//               className="bg-[#EA1934] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
//             >
//               Start Shopping
//             </Link>
//           </div>
//         )}
        
//         <div className="space-y-4">
//           {orders?.map((order) => (
//             <div key={order.id} className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <div className="font-mono text-lg font-semibold">{order.order_number}</div>
//                   <div className="text-sm text-gray-600">
//                     {new Date(order.created_at).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric',
//                       hour: '2-digit',
//                       minute: '2-digit'
//                     })}
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="font-bold text-xl">${(order.total || 0).toFixed(2)}</div>
//                   <div className="text-sm">
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       order.payment_status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {order.payment_status}
//                     </span>
//                     {' / '}
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       order.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
//                     }`}>
//                       {order.status}
//                     </span>
//                   </div>
//                 </div>
//               </div>
              
//               {order.order_items && order.order_items.length > 0 && (
//                 <div className="border-t pt-4">
//                   <h3 className="font-semibold mb-2">Items:</h3>
//                   <div className="space-y-2">
//                     {order.order_items.map((item: any) => (
//                       <div key={item.id} className="flex justify-between items-center text-sm">
//                         <span className="text-gray-700">
//                           {item.product_name} × {item.quantity}
//                         </span>
//                         <span className="font-medium">${(item.total || 0).toFixed(2)}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
        
//         {/* Debug info (remove in production) */}
//         <div className="mt-8 p-4 bg-gray-100 rounded-lg text-xs">
//           <strong>Debug Info:</strong><br />
//           Session Status: {status}<br />
//           User ID: {session?.user?.id || 'None'}<br />
//           Orders Count: {orders?.length || 'Loading...'}
//         </div>
//       </div>
//     </main>
//   )
// }