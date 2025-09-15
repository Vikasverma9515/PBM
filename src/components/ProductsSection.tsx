// import React from 'react';
// import Image from 'next/image';

// const ProductsSection: React.FC = () => {
//   return (
//     <div className="py-16 bg-white">
//       {/* Products Section */}
//       <div className="max-w-7xl mx-auto px-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-12">
//           <div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
//               See the Products
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Explore our advanced brain health devices today!
//             </p>
//           </div>
//           <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
//             View all
//           </button>
//         </div>

//         {/* Product Grid with exact Figma dimensions */}
//         {/* Container: width: 1205px, height: 584px, gap: 64px */}
//         <div className="grid grid-cols-3 gap-16 max-w-[1205px] mx-auto">
//           {/* Product 1 - Neuro Gamma 4 */}
//           {/* Card: width: 369.67px, height: 584px, gap: 16px */}
//           <div className="flex flex-col w-[370px] h-[584px] gap-4">
//             {/* Image Container: width: 370px, height: 456px, border-radius: medium */}
//             <div className="w-[370px] h-[456px] bg-gray-200 rounded-2xl p-6 flex items-center justify-center overflow-hidden">
//               <Image
//                 src="/neuro-gamma-4.png"
//                 alt="Neuro Gamma 4"
//                 width={340}
//                 height={420}
//                 className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
//               />
//             </div>
            
//             {/* Product Info - Remaining height after image and gap */}
//             <div className="flex-1 flex flex-col justify-between">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-black mb-1">Neuro Gamma 4</h3>
//                   <p className="text-gray-500 text-sm">Gamma</p>
//                 </div>
//                 <span className="text-2xl font-bold text-black">$1,799</span>
//               </div>
              
//               <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
//                 Add to cart
//               </button>
//             </div>
//           </div>

//           {/* Product 2 - Vielight Alpha 4 */}
//           <div className="flex flex-col w-[370px] h-[584px] gap-4">
//             <div className="w-[370px] h-[456px] bg-gray-200 rounded-2xl p-6 flex items-center justify-center overflow-hidden">
//               <Image
//                 src="/vielight-alpha-4.png"
//                 alt="Vielight Alpha 4"
//                 width={340}
//                 height={420}
//                 className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
//               />
//             </div>
            
//             <div className="flex-1 flex flex-col justify-between">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-black mb-1">Vielight Alpha 4</h3>
//                   <p className="text-gray-500 text-sm">Alpha</p>
//                 </div>
//                 <span className="text-2xl font-bold text-black">$1,799</span>
//               </div>
              
//               <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
//                 Add to cart
//               </button>
//             </div>
//           </div>

//           {/* Product 3 - Neuro Duo 4 */}
//           <div className="flex flex-col w-[370px] h-[584px] gap-4">
//             <div className="w-[370px] h-[456px] bg-gray-200 rounded-2xl p-6 flex items-center justify-center overflow-hidden">
//               <Image
//                 src="/neuro-duo-4.png"
//                 alt="Neuro Duo 4"
//                 width={340}
//                 height={420}
//                 className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
//               />
//             </div>
            
//             <div className="flex-1 flex flex-col justify-between">
//               <div className="flex items-start justify-between mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold text-black mb-1">Neuro Duo 4</h3>
//                   <p className="text-gray-500 text-sm">Gamma and Alpha</p>
//                 </div>
//                 <span className="text-2xl font-bold text-black">$2,399</span>
//               </div>
              
//               <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Red Features Bar */}
//       <div className="bg-[#EF4444] mt-20">
//         <div className="max-w-7xl mx-auto px-8 py-16">
//           <div className="grid md:grid-cols-3 gap-12 text-white">
//             {/* Feature 1 */}
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold leading-tight">
//                   Medical grade<br />
//                   technology
//                 </h3>
//               </div>
//             </div>

//             {/* Feature 2 */}
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold leading-tight">
//                   Used by everyday people,<br />
//                   practitioners and athletes
//                 </h3>
//               </div>
//             </div>

//             {/* Feature 3 */}
//             <div className="flex items-start space-x-4">
//               <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold leading-tight">
//                   2-year warranty &<br />
//                   6-month return policy
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsSection;
import React from 'react';
import Image from 'next/image';

const ProductsSection: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              See the Products
            </h2>
            <p className="text-gray-800 text-lg">
              Explore our advanced brain health devices today!
            </p>
          </div>
          <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full font-medium hover:bg-gray-50 transition-colors">
            View all
          </button>
        </div>

        {/* Product Grid with exact Figma dimensions */}
        <div className="grid grid-cols-3 gap-16 max-w-[1205px] mx-auto">
          {/* Product 1 - Neuro Gamma 4 */}
          <div className="flex flex-col w-[370px] h-[584px] gap-4">
            {/* Image Container - Full dimensions with image filling completely */}
            <div className="relative w-[370px] h-[456px] bg-gray-200 border-gray-200 border-1 rounded-2xl overflow-hidden group">
              <Image
                src="/neuro-gamma-4.png"
                alt="Neuro Gamma 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl  text-black mb-1">Neuro Gamma 4</h3>
                  <p className="text-gray-800 text-sm">Gamma</p>
                </div>
                <span className="text-2xl text-black">$1,799</span>
              </div>
              
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Add to cart
              </button>
            </div>
          </div>

          {/* Product 2 - Vielight Alpha 4 */}
          <div className="flex flex-col w-[370px] h-[584px] gap-4">
            <div className="relative w-[370px] h-[456px] bg-gray-200 border-gray-200 border-1  rounded-2xl overflow-hidden group">
              <Image
                src="/vielight-alpha-4.png"
                alt="Vielight Alpha 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl  text-black mb-1">Vielight Alpha 4</h3>
                  <p className="text-gray-800 text-sm">Alpha</p>
                </div>
                <span className="text-2xl  text-black">$1,799</span>
              </div>
              
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Add to cart
              </button>
            </div>
          </div>

          {/* Product 3 - Neuro Duo 4 */}
          <div className="flex flex-col w-[370px] h-[584px] gap-4">
            <div className="relative w-[370px] h-[456px] bg-gray-200 border-gray-200 border-1 rounded-2xl overflow-hidden group">
              <Image
                src="/neuro-duo-4.png"
                alt="Neuro Duo 4"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl  text-black mb-1">Neuro Duo 4</h3>
                  <p className="text-gray-800 text-sm">Gamma and Alpha</p>
                </div>
                <span className="text-2xl  text-black">$2,399</span>
              </div>
              
              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Red Features Bar */}
      <div className="bg-[#EA1934] mt-20">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 text-white">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl  leading-tight">
                  Medical grade<br />
                  technology
                </h3>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl leading-tight">
                  Used by everyday people,<br />
                  practitioners and athletes
                </h3>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl  leading-tight">
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