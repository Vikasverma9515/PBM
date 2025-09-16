// import React from 'react';
// import Image from 'next/image';
// import { ShoppingCart, User } from 'lucide-react';

// const HeroSection: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 relative overflow-hidden">
//       {/* Navigation Header */}
//       <nav className="flex items-center justify-between px-8 py-6 relative z-20 bg-white/95 backdrop-blur-sm">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Image 
//             src="/logo.png" 
//             alt="PBM Distributors" 
//             width={120} 
//             height={60}
//             className="h-12 w-auto"
//           />
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center space-x-8">
//           <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
//           <a href="#shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</a>
//           <a href="#videos" className="text-gray-700 hover:text-gray-900 font-medium">Videos</a>
//           <a href="#research" className="text-gray-700 hover:text-gray-900 font-medium">Research</a>
//           <a href="#faqs" className="text-gray-700 hover:text-gray-900 font-medium">FAQs</a>
//           <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
//         </div>

//         {/* Cart and Login Buttons */}
//         <div className="flex items-center space-x-4">
//           <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
//             <ShoppingCart className="w-4 h-4" />
//             <span className="text-sm font-medium">Cart</span>
//           </button>
//           <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
//             <User className="w-4 h-4" />
//             <span className="text-sm font-medium">Login</span>
//           </button>
//         </div>
//       </nav>

//       {/* Main Hero Section with Split Layout */}
//       <div className="relative min-h-[calc(100vh-88px)]">
//         {/* Left Side - Content Area */}
//         <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full flex items-center z-10 px-8">
//           <div className="max-w-xl space-y-8">
//             {/* New Badge */}
//             <div className="inline-flex items-center space-x-2 px-4 py-2 border-2 border-red-500 rounded-full w-fit">
//               <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">New!</span>
//               <span className="text-red-500 font-medium">Photobiomodulation at your doorstep</span>
//               <span className="text-red-500">→</span>
//             </div>

//             {/* Main Headline */}
//             <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 leading-tight">
//               Unlock Your<br />
//               Brain's Potential<br />
//               with Light
//             </h1>

//             {/* Description */}
//             <p className="text-gray-700 text-lg leading-relaxed">
//               Discover the future of brain health with our cutting-edge photobiomodulation devices. The Vielight Neuro headsets boost cognitive function and promote your well-being, leading to a sharper mind.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex items-center space-x-4">
//               <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
//                 Shop our products
//               </button>
//               <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
//                 Learn More
//               </button>
//             </div>

//             {/* Trustpilot Rating */}
//             <div className="flex items-center space-x-3">
//               <span className="text-green-700 font-semibold">Excellent</span>
//               <div className="flex space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 fill-green-500" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//               <span className="text-gray-600">4.8/5 Rating | 100,000+ devices sold worldwide</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Image Area */}
//         <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full">
//           <Image 
//             src="/hero-image.png"
//             alt="Man using Vielight Neuro device"
//             fill
//             className="object-cover object-left"
//             priority
//           />
//         </div>
//       </div>

//       {/* Bottom Cards Section - Overlapping */}
//       <div className="relative z-20 -mt-32 px-8 pb-12">
//         <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
//           {/* Healthcare Professionals Card */}
//           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
//             <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
//               <Image 
//                 src="/healthcare-icon.png" 
//                 alt="Healthcare icon" 
//                 width={32} 
//                 height={32}
//               />
//             </div>
//             <h3 className="text-xl font-bold text-red-500 mb-3">Healthcare Professionals</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Treats pain/inflammation, cellular health/function, stress/anxiety.
//             </p>
//           </div>

//           {/* Athletes Card */}
//           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
//             <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
//               <Image 
//                 src="/athletes-icon.png" 
//                 alt="Athletes icon" 
//                 width={32} 
//                 height={32}
//               />
//             </div>
//             <h3 className="text-xl font-bold text-red-500 mb-3">Athletes</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Used by athletes to improve performance & reduce recovery time.
//             </p>
//           </div>

//           {/* Everyday Consumers Card */}
//           <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
//             <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
//               <Image 
//                 src="/consumers-icon.png" 
//                 alt="Consumers icon" 
//                 width={32} 
//                 height={32}
//               />
//             </div>
//             <h3 className="text-xl font-bold text-red-500 mb-3">Everyday Consumers</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Can improve energy, reduce stress, and improve sleep.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from 'react';
import Image from 'next/image';
import { ShoppingCart, User } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Full Screen Background Image */}
            {/* <div className="absolute inset-0 z-0"> */}
            {/* <Image 
          src="/hero-image.png"
          alt="Man using Vielight Neuro device"
            layout="fill"
          objectFit="cover"
          className="object-cover object-left"
          priority
        /> */}
            <div
                className="absolute"
                style={{
                    right: '0px',
                    left: '300px',      // Exact pixel positioning
                    top: '0px',       // Exact pixel positioning  
                    width: '90%',      // Exact percentage
                    height: 'calc(110vh - 10px)' // Custom height calculation
                }}
            >
                <Image
                    src="/hero-image.png"
                    alt="Man using Vielight Neuro device"
                    fill
                    className="object-cover"
                    style={{
                        objectPosition: '20% center' // Custom object position (20% from left, centered vertically)
                    }}
                    priority
                />
            </div>
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-white/10"></div>
            {/* </div> */}

            {/* All content positioned absolutely over the background */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Navigation Header */}
                <nav className="flex items-center justify-between px-30 py-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/logo1.png"
                            alt="PBM Distributors"
                            width={120}
                            height={60}
                            className="h-15 w-auto"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-10">
                        <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
                        <a href="#shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</a>
                        <a href="#videos" className="text-gray-700 hover:text-gray-900 font-medium">Videos</a>
                        <a href="#research" className="text-gray-700 hover:text-gray-900 font-medium">Research</a>
                        <a href="#faqs" className="text-gray-700 hover:text-gray-900 font-medium">FAQs</a>
                        <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
                    </div>

                    {/* Cart and Login Buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors bg-white/80 backdrop-blur-sm">
                            <ShoppingCart className="w-4 h-4" />
                            <span className="text-sm font-medium">Cart</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                            <User className="w-4 h-4" />
                            <span className="text-sm font-medium">Login</span>
                        </button>
                    </div>
                </nav>

                {/* Main Hero Content - Positioned on the left side */}
                <div className="flex-1 flex items-center px-30 py-12">
                    <div className="max-w-2xl space-y-2">
                        {/* New Badge */}
                        <div className="inline-flex items-center space-x-2 px-2 py-2 border-2 border-red-500 rounded-full w-fit bg-white/90 backdrop-blur-sm">
                            <span className="border-2 text-red-500 px-2 py-1 rounded-4xl text-xs font-semibold">New!</span>
                            <span className="text-red-500 font-medium">Photobiomodulation at your doorstep</span>
                            <span className="text-red-500">→</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl lg:text-6xl font-bold text-red-500 leading-tight">
                            Unlock Your<br />
                            Brain's Potential<br />
                            with Light
                        </h1>

                        {/* Description */}
                        <p className="text-gray-700 text-lg max-w-lg leading-relaxed  backdrop-blur-sm pb-4 rounded-lg">
                            Discover the future of brain health with our cutting-edge photobiomodulation devices. The Vielight Neuro headsets boost cognitive function and promote your well-being, leading to a sharper mind.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex items-center space-x-4">
                            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                                Shop our products
                            </button>
                            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors bg-white/90 backdrop-blur-sm">
                                Learn More
                            </button>
                        </div>

                        {/* Trustpilot Rating */}
                        <div className="flex items-center space-x-3 backdrop-blur-sm p-3 rounded-lg w-fit">
                            <span className="text-gray-900 font-semibold">Excellent</span>
                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 fill-green-500" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-900">4.8/5 Rating | 100,000+ devices sold worldwide</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Cards Section - Overlapping at the bottom */}
                <div className="px-8 pb-12 relative z-20">
                    <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {/* Healthcare Professionals Card */}
                        <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
                            {/* <div className="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
                                <Image
                                    src="/healthcare-icon.png"
                                    alt="Healthcare icon"
                                
                                    width={40}
                                    height={40}
                                />
                            </div> */}
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                                <div
                                    className="w-15 h-15 bg-[#f07384]"
                                    style={{
                                        WebkitMask: "url(/healthcare-icon.png) no-repeat center / contain",
                                        mask: "url(/healthcare-icon.png) no-repeat center / contain",
                                    }}
                                    role="img"
                                    aria-label="Healthcare icon"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-red-500 mb-3">Healthcare Professionals</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Treats pain/inflammation, cellular health/function, stress/anxiety.
                            </p>
                        </div>

                        {/* Athletes Card */}
                        <div className="bg-[#FFF2F4]  backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
                            {/* <div className="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
                                <Image
                                    src="/athletes-icon.png"
                                    alt="Athletes icon"
                                   width={40}
                                    height={40}
                                />
                            </div> */}
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                                <div
                                    className="w-15 h-15 bg-[#f07384]"
                                    style={{
                                        WebkitMask: "url(/athletes-icon.png) no-repeat center / contain",
                                        mask: "url(/athletes-icon.png) no-repeat center / contain",
                                    }}
                                    role="img"
                                    aria-label="Healthcare icon"
                                />
                            </div>


                            <h3 className="text-xl font-bold text-red-500 mb-3">Athletes</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Used by athletes to improve performance & reduce recovery time.
                            </p>
                        </div>

                        {/* Everyday Consumers Card */}
                        <div className="bg-[#FFF2F4]  backdrop-blur-sm rounded-2xl p-10 text-center shadow-lg">
                            {/* <div className="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
                                <Image
                                    src="/consumers-icon.png"
                                    alt="Consumers icon"
                                    width={40}
                                    height={40}
                                />
                            </div> */}
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                                <div
                                    className="w-15 h-15 bg-[#f07384]"
                                    style={{
                                        WebkitMask: "url(/consumers-icon.png) no-repeat center / contain",
                                        mask: "url(/consumers-icon.png) no-repeat center / contain",
                                    }}
                                    role="img"
                                    aria-label="Healthcare icon"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-red-500 mb-3">Everyday Consumers</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Can improve energy, reduce stress, and improve stress, and improve sleep.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;