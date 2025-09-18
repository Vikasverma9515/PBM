// // components/Cart/CartSidebar.tsx
// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
// import { useCart } from '@/context/CartContext';

// const CartSidebar: React.FC = () => {
//   const { state, removeItem, updateQuantity, closeCart, getTotalItems, getTotalPrice } = useCart();
//   const [isVisible, setIsVisible] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     if (state.isOpen) {
//       setIsVisible(true);
//       // Small delay to ensure the element is rendered before animating
//       setTimeout(() => setIsAnimating(true), 10);
//     } else {
//       setIsAnimating(false);
//       // Keep visible until animation completes
//       setTimeout(() => setIsVisible(false), 300);
//     }
//   }, [state.isOpen]);

//   const handleClose = () => {
//     setIsAnimating(false);
//     setTimeout(() => {
//       setIsVisible(false);
//       closeCart();
//     }, 300);
//   };

//   if (!isVisible) return null;

//   return (
//     <>
//       {/* Overlay - Fade in animation */}
//       <div 
//         className={`fixed inset-0 bg-black z-[9998] transition-opacity duration-300 ease-in-out ${
//           isAnimating ? 'opacity-50' : 'opacity-0'
//         }`}
//         onClick={handleClose}
//       />
      
//       {/* Cart Sidebar - Slide in from right */}
//       <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-[9999] flex flex-col transform transition-transform duration-300 ease-in-out ${
//         isAnimating ? 'translate-x-0' : 'translate-x-full'
//       }`}>
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b flex-shrink-0">
//           <div className={`flex items-center space-x-2 transition-opacity duration-500 delay-200 ${
//             isAnimating ? 'opacity-100' : 'opacity-0'
//           }`}>
//             <ShoppingBag className="w-5 h-5" />
//             <h2 className="text-lg font-semibold">Cart ({getTotalItems()})</h2>
//           </div>
//           <button 
//             onClick={handleClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Cart Items - Scrollable content with staggered animations */}
//         <div className="flex-1 overflow-y-auto p-6">
//           {state.items.length === 0 ? (
//             <div className={`text-center py-12 transition-all duration-500 delay-300 ${
//               isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//             }`}>
//               <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-4 " />
//               <p className="text-gray-500 mb-4">Your cart is empty</p>
//               <button 
//                 onClick={handleClose}
//                 className="text-[#EA1934] hover:underline transition-colors duration-200"
//               >
//                 Continue shopping
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {state.items.map((item, index) => (
//                 <div 
//                   key={item.id} 
//                   className={`flex items-center space-x-4 p-4 border rounded-lg transition-all duration-500 hover:shadow-md hover:border-gray-300 ${
//                     isAnimating 
//                       ? 'opacity-100 translate-x-0' 
//                       : 'opacity-0 translate-x-8'
//                   }`}
//                   style={{ 
//                     transitionDelay: `${200 + (index * 100)}ms`
//                   }}
//                 >
//                   <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 group">
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       fill
//                       className="object-cover transition-transform duration-200 group-hover:scale-105"
//                     />
//                   </div>
                  
//                   <div className="flex-1 min-w-0">
//                     <h3 className="font-semibold text-sm text-black truncate hover:text-[#EA1934] transition-colors duration-200">{item.name}</h3>
//                     <p className="text-gray-600 text-sm">${item.price.toLocaleString()}</p>
                    
//                     {/* Quantity Controls */}
//                     <div className="flex items-center space-x-2 mt-2">
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         className="p-1 hover:bg-gray-100 rounded transition-all duration-200 hover:scale-110 active:scale-95"
//                       >
//                         <Minus className="w-4 h-4" />
//                       </button>
//                       <span className="px-3 py-1 bg-gray-100 rounded text-sm font-medium transition-all duration-200">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="p-1 hover:bg-gray-100 rounded transition-all duration-200 hover:scale-110 active:scale-95"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="text-right flex-shrink-0">
//                     <p className="font-semibold text-black transition-colors duration-200">
//                       ${(item.price * item.quantity).toLocaleString()}
//                     </p>
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="text-red-500 hover:text-red-700 text-sm mt-1 transition-all duration-200 hover:scale-105 active:scale-95"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Footer - Fixed at bottom with slide up animation */}
//         {state.items.length > 0 && (
//           <div className={`border-t p-6 space-y-4 flex-shrink-0 bg-white transition-all duration-500 delay-400 ${
//             isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//           }`}>
//             <div className="flex justify-between items-center text-lg font-semibold">
//               <span>Total:</span>
//               <span className="text-[#EA1934]">${getTotalPrice().toLocaleString()}</span>
//             </div>
            
//             <div className="space-y-2">
//               <Link
//                 href="/cart"
//                 onClick={handleClose}
//                 className="w-full bg-[#EA1934] text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 text-center block transform hover:scale-105 active:scale-95 hover:shadow-lg"
//               >
//                 Checkout
//               </Link>
//               <button
//                 onClick={handleClose}
//                 className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 active:scale-95"
//               >
//                 Continue Shopping
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartSidebar;
// components/Cart/CartSidebar.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartSidebar: React.FC = () => {
  const { state, removeItem, updateQuantity, closeCart, getTotalItems, getTotalPrice } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (state.isOpen) {
      setIsVisible(true);
      // Small delay to ensure the element is rendered before animating
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Keep visible until animation completes
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [state.isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      closeCart();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay - Fade in animation */}
      <div 
        className={`fixed inset-0 bg-black z-[9998] transition-opacity duration-300 ease-in-out ${
          isAnimating ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Cart Sidebar - Slide in from right */}
      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-[9999] flex flex-col transform-gpu transition-transform duration-300 ease-in-out outline  outline-white ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ willChange: 'transform', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b flex-shrink-0">
          <div className={`flex items-center space-x-2 transition-opacity duration-500 delay-200 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}>
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Cart ({getTotalItems()})</h2>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items - Scrollable content with staggered animations */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className={`text-center py-12 transition-all duration-500 delay-300 ${
              isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button 
                onClick={handleClose}
                className="text-[#EA1934] hover:underline transition-colors duration-200"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item, index) => (
                <div 
                  key={`cart-item-${item.id}-${item.slug || item.name.replace(/\s+/g, '-').toLowerCase()}`}
                  className={`flex items-center space-x-4 p-4 border rounded-lg transition-all duration-500 hover:shadow-md hover:border-gray-300 ${
                    isAnimating 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ 
                    transitionDelay: `${200 + (index * 100)}ms`
                  }}
                >
                  <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 group">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-black truncate hover:text-[#EA1934] transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">${item.price.toLocaleString()}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded transition-all duration-200 hover:scale-110 active:scale-95"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 bg-gray-100 rounded text-sm font-medium transition-all duration-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded transition-all duration-200 hover:scale-110 active:scale-95"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right flex-shrink-0">
                    <p className="font-semibold text-black transition-colors duration-200">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm mt-1 transition-all duration-200 hover:scale-105 active:scale-95"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Fixed at bottom with slide up animation */}
        {state.items.length > 0 && (
          <div className={`border-t p-6 space-y-4 flex-shrink-0 bg-white transition-all duration-500 delay-400 ${
            isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span className="text-[#EA1934]">${getTotalPrice().toLocaleString()}</span>
            </div>
            
            <div className="space-y-2">
              <Link
                href="/checkout"
                onClick={handleClose}
                className="w-full bg-[#EA1934] text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 text-center block transform hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                Checkout
              </Link>
              <button
                onClick={handleClose}
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;