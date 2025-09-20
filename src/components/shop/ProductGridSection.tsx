// // Update your ProductGridSection component
// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { getProducts } from '@/utils/products';
// import { useCart } from '@/context/CartContext';

// const ProductsSection: React.FC = () => {
//     const [showAll, setShowAll] = useState(false);
//     const { addItem } = useCart();
    
//     const allProducts = getProducts();
//     const visibleProducts = showAll ? allProducts : allProducts.slice(0, 3);

//     const handleAddToCart = (product: any) => {
//         addItem({
//             id: product.slug,
//             slug: product.slug,
//             name: product.name,
//             price: product.price,
//             image: product.images[0]
//         });
//     };

//     return (
//         <div className="py-16 bg-white">
//             {/* Products Section */}
//             <div className="max-w-7xl mx-auto px-8">
//                 {/* Header - same as before */}
//                 <div className="flex items-center justify-between mb-12">
//                     <div>
//                         <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
//                             See the Products
//                         </h2>
//                         <p className="text-gray-800 text-lg">
//                             Explore our advanced brain health devices today!
//                         </p>
//                     </div>
//                     {!showAll && allProducts.length > 3 && (
//                         <button 
//                             onClick={() => setShowAll(true)}
//                             className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors"
//                         >
//                             View all
//                         </button>
//                     )}
//                     {showAll && (
//                         <button 
//                             onClick={() => setShowAll(false)}
//                             className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors"
//                         >
//                                                         Show less
//                         </button>
//                     )}
//                 </div>

//                 {/* Product Grid - Dynamic layout based on number of products */}
//                 <div className={`grid gap-16 max-w-[1205px] mx-auto ${
//                     visibleProducts.length === 3 
//                         ? 'grid-cols-3' 
//                         : visibleProducts.length === 4 
//                         ? 'grid-cols-2' 
//                         : 'grid-cols-3'
//                 }`}>
//                     {visibleProducts.map((p) => (
//                         <div 
//                             key={p.slug} 
//                             className={`flex flex-col gap-4 ${
//                                 visibleProducts.length === 3 
//                                     ? 'w-[370px] h-[584px]' 
//                                     : 'w-[578px] h-[712px]'
//                             }`}
//                         >
//                             <Link 
//                                 href={`/product/${p.slug}`} 
//                                 className={`relative bg-gray-200 border-gray-200 border-1 rounded-2xl overflow-hidden group ${
//                                     visibleProducts.length === 3 
//                                         ? 'w-[370px] h-[456px]' 
//                                         : 'w-[578px] h-[712px]'
//                                 }`}
//                             >
//                                 <Image
//                                     src={p.images[0]}
//                                     alt={p.name}
//                                     fill
//                                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                                 />
//                             </Link>

//                             <div className="flex-1 flex flex-col justify-between">
//                                 <div className="flex items-start justify-between mb-4">
//                                     <div>
//                                         <h3 className="text-xl text-black mb-1">{p.name}</h3>
//                                         <p className="text-gray-800 text-sm">{p.category}</p>
//                                     </div>
//                                     <span className="text-2xl text-black">${p.price.toLocaleString()}</span>
//                                 </div>

//                                 <div className="flex gap-3">
//                                     <Link 
//                                         href={`/product/${p.slug}`} 
//                                         className="flex-1 text-center border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
//                                     >
//                                         View details
//                                     </Link>
//                                     <button 
//                                         onClick={() => handleAddToCart(p)}
//                                         className="px-5 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
//                                     >
//                                         Add to cart
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Show transition message when expanding */}
//                 {showAll && allProducts.length > 3 && (
//                     <div className="text-center mt-8">
//                         <p className="text-gray-600">
//                             Showing all {allProducts.length} products
//                         </p>
//                     </div>
//                 )}
//             </div>

//             {/* Red Features Bar - same as before */}
//             <div className="bg-[#EA1934] mt-20">
//                 <div className="max-w-7xl mx-auto px-8 py-16">
//                     <div className="grid md:grid-cols-3 gap-12 text-white">
//                         {/* Feature 1 */}
//                         <div className="flex items-start space-x-4">
//                             <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl leading-tight">
//                                     Medical grade<br />
//                                     technology
//                                 </h3>
//                             </div>
//                         </div>

//                         {/* Feature 2 */}
//                         <div className="flex items-start space-x-4">
//                             <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl leading-tight">
//                                     Used by everyday people,<br />
//                                     practitioners and athletes
//                                 </h3>
//                             </div>
//                         </div>

//                         {/* Feature 3 */}
//                         <div className="flex items-start space-x-4">
//                             <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                 </svg>
//                             </div>
//                             <div>
//                                 <h3 className="text-xl leading-tight">
//                                     2-year warranty &<br />
//                                     6-month return policy
//                                 </h3>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductsSection;
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/utils/products';
import { useCart } from '@/context/CartContext';

const ProductsSection: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const { addItem } = useCart();
    
    const allProducts = getProducts();
    const visibleProducts = showAll ? allProducts : allProducts.slice(0, 3);

    const handleAddToCart = (product: any) => {
        addItem({
            id: product.slug,
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.images[0]
        });
    };

    return (
        <div className="py-12 lg:py-0 lg:pt-20 bg-white">
            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header - Responsive */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 lg:mb-12">
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-2 lg:mb-4">
                            See the Products
                        </h2>
                        <p className="text-gray-800 text-base lg:text-lg">
                            Explore our advanced brain health devices today!
                        </p>
                    </div>
                    
                    {/* View Toggle Buttons */}
                    <div className="flex justify-center sm:justify-end">
                        {!showAll && allProducts.length > 3 && (
                            <button 
                                onClick={() => setShowAll(true)}
                                className="border border-gray-300 text-gray-700 px-4 lg:px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm lg:text-base"
                            >
                                View all
                            </button>
                        )}
                        {showAll && (
                            <button 
                                onClick={() => setShowAll(false)}
                                className="border border-gray-300 text-gray-700 px-4 lg:px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm lg:text-base"
                            >
                                Show less
                            </button>
                        )}
                    </div>
                </div>

                {/* Product Grid - Desktop unchanged, mobile/tablet responsive */}
                <div className="w-full">
                    
                    {/* Desktop Grid - UNCHANGED */}
                    <div className={`hidden lg:grid gap-16 max-w-[1205px] mx-auto ${
                        visibleProducts.length === 3 
                            ? 'grid-cols-3' 
                            : visibleProducts.length === 4 
                            ? 'grid-cols-2' 
                            : 'grid-cols-3'
                    }`}>
                        {visibleProducts.map((p) => (
                            <div 
                                key={p.slug} 
                                className={`flex flex-col gap-4 ${
                                    visibleProducts.length === 3 
                                        ? 'w-[370px] h-[584px]' 
                                        : 'w-[578px] h-[712px]'
                                }`}
                            >
                                <Link 
                                    href={`/product/${p.slug}`} 
                                    className={`relative bg-gray-200 border-gray-200 border-1 rounded-2xl overflow-hidden group ${
                                        visibleProducts.length === 3 
                                            ? 'w-[370px] h-[456px]' 
                                            : 'w-[578px] h-[712px]'
                                    }`}
                                >
                                    <Image
                                        src={p.images[0]}
                                        alt={p.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl text-black mb-1">{p.name}</h3>
                                            <p className="text-gray-800 text-sm">{p.category}</p>
                                        </div>
                                        <span className="text-2xl text-black">${p.price.toLocaleString()}</span>
                                    </div>

                                    <div className="flex gap-3">
                                        <Link 
                                            href={`/product/${p.slug}`} 
                                            className="flex-1 text-center border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                                        >
                                            View details
                                        </Link>
                                        <button 
                                            onClick={() => handleAddToCart(p)}
                                            className="px-5 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile/Tablet Grid - NEW Responsive Layout */}
                    <div className="block lg:hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            {visibleProducts.map((p) => (
                                <div 
                                    key={p.slug} 
                                    className="flex flex-col gap-4 w-full max-w-md mx-auto sm:max-w-none"
                                >
                                    <Link 
                                        href={`/product/${p.slug}`} 
                                        className="relative bg-gray-200 border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden group w-full aspect-[4/5] sm:aspect-[3/4]"
                                    >
                                        <Image
                                            src={p.images[0]}
                                            alt={p.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </Link>

                                    <div className="flex-1 flex flex-col justify-between space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0">
                                            <div>
                                                <h3 className="text-lg sm:text-xl text-black mb-1 font-semibold">{p.name}</h3>
                                                <p className="text-gray-800 text-sm">{p.category}</p>
                                            </div>
                                            <span className="text-xl sm:text-2xl text-black font-bold">
                                                ${p.price.toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link 
                                                href={`/product/${p.slug}`} 
                                                className="flex-1 text-center border border-gray-300 text-gray-700 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
                                            >
                                                View details
                                            </Link>
                                            <button 
                                                onClick={() => handleAddToCart(p)}
                                                className="sm:flex-shrink-0 px-4 sm:px-5 py-2.5 sm:py-3 border border-gray-300 text-gray-700 rounded-lg sm:rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Show transition message when expanding */}
                {showAll && allProducts.length > 3 && (
                    <div className="text-center mt-6 lg:mt-8">
                        <p className="text-gray-600 text-sm lg:text-base">
                            Showing all {allProducts.length} products
                        </p>
                    </div>
                )}
            </div>

            {/* Red Features Bar - Responsive */}
            <div className="bg-[#EA1934] mt-12 lg:mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-white">
                        {/* Feature 1 */}
                        <div className="flex items-start space-x-3 sm:space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl leading-tight font-semibold">
                                    Medical grade<br />
                                    technology
                                </h3>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start space-x-3 sm:space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl leading-tight font-semibold">
                                    Used by everyday people,<br />
                                    practitioners and athletes
                                </h3>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start space-x-3 sm:space-x-4 sm:col-span-2 md:col-span-1">
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl leading-tight font-semibold">
                                    2-year warranty &<br />
                                    6-month return policy
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;