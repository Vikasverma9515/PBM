// app/order/success/page.tsx
'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Header from '@/components/header';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';


type OrderDetails = {
  sessionId: string | null;
};

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { clearCart } = useCart();
  const [orderDetails, setOrderDetails] = useState(null);
  
  
  const sessionId = searchParams.get('session_id');

      useEffect(() => {
        if (sessionId) {
            // Clear the cart
            clearCart();
            
            // You can fetch order details here if needed
            // For now, we'll just show a success message
            // setOrderDetails({ sessionId });
            setOrderDetails(null);
        }
    }, [sessionId, clearCart]);

    if (!sessionId) {
        router.push('/');
        return null;
    }

    return (
        <main>
            <Header />
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-sm">
                    <div className="text-green-600 mb-6">
                        <CheckCircle className="w-20 h-20 mx-auto" />
                    </div>
                    
                    <h1 className="text-3xl font-bold text-black mb-4">
                        Order Confirmed!
                    </h1>
                    
                    <p className="text-gray-600 mb-6">
                        Thank you for your purchase. We've received your order and will send you a confirmation email shortly.
                    </p>
                    
                    <div className="space-y-3">
                        <Link
                            href="/orders"
                            className="block w-full bg-[#EA1934] text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                        >
                            View Order History
                        </Link>
                        
                        <Link
                            href="/"
                            className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function OrderSuccess() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}