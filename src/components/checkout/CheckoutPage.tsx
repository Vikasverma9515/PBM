// // components/Checkout/CheckoutPage.tsx
// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';
// import { useCart } from '@/context/CartContext';

// const CheckoutPage: React.FC = () => {
//     const { state, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
//     const [formData, setFormData] = useState({
//         email: '',
//         firstName: '',
//         lastName: '',
//         address: '',
//         city: '',
//         state: '',
//         zipCode: '',
//         phone: '',
//         cardNumber: '',
//         expiryDate: '',
//         cvv: '',
//         nameOnCard: ''
//     });

//     const subtotal = getTotalPrice();
//     const shipping = subtotal > 100 ? 0 : 25; // Free shipping over $100
//     const tax = subtotal * 0.13; // 13% tax
//     const total = subtotal + shipping + tax;

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData(prev => ({
//             ...prev,
//             [e.target.name]: e.target.value
//         }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle order submission
//         alert('Order placed successfully!');
//         clearCart();
//         // Redirect to success page
//     };

//     if (state.items.length === 0) {
//         return (
//             <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//                 <div className="text-center">
//                     <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
//                     <Link 
//                         href="/"
//                         className="bg-[#EA1934] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
//                     >
//                         Continue Shopping
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 {/* Header */}
//                 <div className="mb-8">
//                     <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
//                         <ArrowLeft className="w-4 h-4 mr-2" />
//                         Back to shop
//                     </Link>
//                     <h1 className="text-3xl font-bold text-black">Checkout</h1>
//                 </div>

//                 <div className="grid lg:grid-cols-2 gap-12">
//                     {/* Left Column - Forms */}
//                     <div className="space-y-8">
//                         {/* Contact Information */}
//                         <div className="bg-white rounded-2xl p-8 shadow-sm">
//                             <h2 className="text-xl font-bold mb-6">Contact Information</h2>
//                             <div className="space-y-4">
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Email address"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Shipping Address */}
//                         <div className="bg-white rounded-2xl p-8 shadow-sm">
//                             <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
//                             <div className="space-y-4">
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <input
//                                         type="text"
//                                         name="firstName"
//                                         placeholder="First name"
//                                         value={formData.firstName}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                         required
//                                     />
//                                     <input
//                                         type="text"
//                                         name="lastName"
//                                         placeholder="Last name"
//                                         value={formData.lastName}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                         required
//                                     />
//                                 </div>
//                                 <input
//                                     type="text"
//                                     name="address"
//                                     placeholder="Address"
//                                     value={formData.address}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                     required
//                                 />
//                                 <div className="grid grid-cols-3 gap-4">
//                                     <input
//                                         type="text"
//                                         name="city"
//                                         placeholder="City"
//                                         value={formData.city}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                         required
//                                     />
//                                     <input
//                                         type="text"
//                                         name="state"
//                                         placeholder="State"
//                                         value={formData.state}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                         required
//                                     />
//                                     <input
//                                         type="text"
//                                         name="zipCode"
//                                         placeholder="ZIP code"
//                                         value={formData.zipCode}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                         required
//                                     />
//                                 </div>
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     placeholder="Phone number"
//                                     value={formData.phone}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         {/* Payment Information */}
//                         <div className="bg-white rounded-2xl p-8 shadow-sm">
//                             <h2 className="text-xl font-bold mb-6 flex items-center">
//                                 <CreditCard className="w-5 h-5 mr-2" />
//                                 Payment Information
//                             </h2>
//                             <div className="space-y-4">
//                                 <input
//                                     type="text"
//                                     name="cardNumber"
//                                     placeholder="Card number"
//                                     value={formData.cardNumber}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                     required
//                                 />
//                                 <input
//                                     type="text"
//                                     name="nameOnCard"
//                                     placeholder="Name on card"
//                                     value={formData.nameOnCard}
//                                     onChange={handleInputChange}
//                                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                     required
//                                 />
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <input
//                                         type="text"
//                                         name="expiryDate"
//                                         placeholder="MM/YY"
//                                         value={formData.expiryDate}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                         required
//                                     />
//                                     <input
//                                         type="text"
//                                         name="cvv"
//                                         placeholder="CVV"
//                                         value={formData.cvv}
//                                         onChange={handleInputChange}
//                                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934]"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Order Summary */}
//                     <div className="lg:sticky lg:top-8 h-fit">
//                         <div className="bg-white rounded-2xl p-8 shadow-sm">
//                             <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            
//                             {/* Cart Items */}
//                             <div className="space-y-4 mb-6">
//                                 {state.items.map((item) => (
//                                     <div key={item.slug} className="flex items-center space-x-4">
//                                         <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
//                                             <Image
//                                                 src={item.image}
//                                                 alt={item.name}
//                                                 fill
//                                                 className="object-cover"
//                                             />
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="font-semibold text-sm">{item.name}</h3>
//                                             <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
//                                         </div>
//                                         <div className="text-right">
//                                             <p className="font-semibold">
//                                                 ${(item.price * item.quantity).toLocaleString()}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Order Totals */}
//                             <div className="border-t pt-4 space-y-2">
//                                 <div className="flex justify-between">
//                                     <span>Subtotal:</span>
//                                     <span>${subtotal.toLocaleString()}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span>Shipping:</span>
//                                     <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span>Tax:</span>
//                                     <span>${tax.toFixed(2)}</span>
//                                 </div>
//                                 <div className="border-t pt-2 flex justify-between text-lg font-bold">
//                                     <span>Total:</span>
//                                     <span>${total.toFixed(2)}</span>
//                                 </div>
//                             </div>

//                             {/* Place Order Button */}
//                             <button
//                                 onClick={handleSubmit}
//                                                                 className="w-full bg-[#EA1934] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors mt-6"
//                             >
//                                 Place Order - ${total.toFixed(2)}
//                             </button>

//                             {/* Security Features */}
//                             <div className="mt-6 space-y-3">
//                                 <div className="flex items-center text-sm text-gray-600">
//                                     <Shield className="w-4 h-4 mr-2 text-green-600" />
//                                     <span>Secure checkout with SSL encryption</span>
//                                 </div>
//                                 <div className="flex items-center text-sm text-gray-600">
//                                     <Truck className="w-4 h-4 mr-2 text-blue-600" />
//                                     <span>Free shipping on orders over $100</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CheckoutPage;


// components/checkout/CheckoutPage.tsx
'use client';
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutPage: React.FC = () => {
    const { state, clearCart } = useCart();
    const { data: session } = useSession();
    const router = useRouter();
    
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: session?.user?.email || '',
        phone: '',
        company: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'US'
    });

    const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 100 ? 0 : 25;
    const tax = subtotal * 0.13;
    const total = subtotal + shipping + tax;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // const handleCheckout = async () => {
    //     if (!session) {
    //         router.push('/signin?callbackUrl=/checkout');
    //         return;
    //     }

    //     setLoading(true);

    //     try {
    //         const response = await fetch('/api/checkout', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 items: state.items.map(item => ({
    //                     id: item.id,
    //                     name: item.name,
    //                     price: item.price,
    //                     quantity: item.quantity,
    //                     image: item.image,
    //                 })),
    //                 shippingAddress: formData,
    //                 billingAddress: formData, // Using same address for billing
    //             }),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Checkout failed');
    //         }

    //         const { sessionId } = await response.json();
    //         const stripe = await stripePromise;

    //         if (!stripe) {
    //             throw new Error('Stripe failed to initialize');
    //         }

    //         const { error } = await stripe.redirectToCheckout({
    //             sessionId,
    //         });

    //         if (error) {
    //             console.error('Stripe error:', error);
    //             throw error;
    //         }

    //     } catch (error) {
    //         console.error('Checkout error:', error);
    //         alert('Checkout failed. Please try again.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    // Update the handleCheckout function in CheckoutPage.tsx
const handleCheckout = async () => {
    if (!session) {
        router.push('/signin?callbackUrl=/checkout');
        return;
    }

    setLoading(true);

    try {
        console.log('Starting checkout with data:', {
            items: state.items,
            shippingAddress: formData,
            session: session.user
        });

        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: state.items.map(item => ({
                    id: item.slug, // Make sure this is the slug, not UUID
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    image: item.image,
                })),
                shippingAddress: formData,
                billingAddress: formData,
                customerEmail: session.user.email, // Add customer email
            }),
        });

        const responseText = await response.text();
        console.log('Raw response:', responseText);

        if (!response.ok) {
            console.error('Server error:', response.status, responseText);
            throw new Error(`Server error: ${response.status} - ${responseText}`);
        }

        const result = JSON.parse(responseText);
        console.log('Parsed response:', result);

        if (!result.sessionId) {
            throw new Error('No session ID received from server');
        }

        const stripe = await stripePromise;

        if (!stripe) {
            throw new Error('Stripe failed to initialize');
        }

        console.log('Redirecting to Stripe checkout...');

        const { error } = await stripe.redirectToCheckout({
            sessionId: result.sessionId,
        });

        if (error) {
            console.error('Stripe error:', error);
            throw error;
        }

    } catch (error: any) {
        console.error('Checkout error:', error);
        alert(`Checkout failed: ${error.message}`);
    } finally {
        setLoading(false);
    }
};

    // Redirect to sign in if not authenticated
    if (!session) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Please sign in to checkout</h1>
                    <Link 
                        href="/signin?callbackUrl=/checkout"
                        className="bg-[#EA1934] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        );
    }

    // Empty cart state
    if (state.items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                    <Link 
                        href="/"
                        className="bg-[#EA1934] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to shop
                    </Link>
                    <h1 className="text-3xl font-bold text-black">Checkout</h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left Column - Shipping Form */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-2 focus:ring-[#EA1934]"
                                    required
                                />
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-2 focus:ring-[#EA1934]"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-2 focus:ring-[#EA1934]"
                                        required
                                    />
                                </div>
                                
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company (optional)"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-2 focus:ring-[#EA1934]"
                                />

                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-2 focus:ring-[#EA1934]"
                                    required
                                />

                                <div className="grid grid-cols-3 gap-4">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-2 focus:ring-[#EA1934]"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-2 focus:ring-[#EA1934]"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="zipCode"
                                        placeholder="ZIP code"
                                        value={formData.zipCode}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-2 focus:ring-[#EA1934]"
                                        required
                                    />
                                </div>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-2 focus:ring-[#EA1934]"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:sticky lg:top-8 h-fit">
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            
                            {/* Cart Items */}
                            <div className="space-y-4 mb-6">
                                {state.items.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4">
                                        <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-sm">{item.name}</h3>
                                            <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">
                                                ${(item.price * item.quantity).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Totals */}
                            <div className="border-t pt-4 space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal:</span>
                                    <span>${subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping:</span>
                                    <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax:</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t pt-2 flex justify-between text-lg font-bold">
                                    <span>Total:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button
                                onClick={handleCheckout}
                                disabled={loading || !formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.state || !formData.zipCode}
                                className="w-full bg-[#EA1934] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Processing...' : `Complete Order - $${total.toFixed(2)}`}
                            </button>

                            {/* Security Features */}
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center text-sm text-gray-600">
                                    <Shield className="w-4 h-4 mr-2 text-green-600" />
                                    <span>Secure checkout with SSL encryption</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Truck className="w-4 h-4 mr-2 text-blue-600" />
                                    <span>Free shipping on orders over $100</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <CreditCard className="w-4 h-4 mr-2 text-purple-600" />
                                    <span>Powered by Stripe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;