import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import Header from './header';

const HeroSection: React.FC = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image - Desktop stays exactly the same */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Background - UNCHANGED */}
                <div className="hidden lg:block">
                    <div
                        className="absolute"
                        style={{
                            right: '0px',
                            left: '300px',      // Exact pixel positioning - UNCHANGED
                            top: '0px',         // Exact pixel positioning - UNCHANGED  
                            width: '90%',       // Exact percentage - UNCHANGED
                            height: 'calc(110vh - 10px)' // Custom height calculation - UNCHANGED
                        }}
                    >
                        <Image
                            src="/hero-image.png"
                            alt="Man using Vielight Neuro device"
                            fill
                            className="object-cover"
                            style={{
                                objectPosition: '20% center' // Custom object position - UNCHANGED
                            }}
                            priority
                        />
                    </div>
                </div>

                {/* Tablet Background - NEW */}
                <div className="hidden md:block lg:hidden">
                    <div
                        className="absolute"
                        style={{
                            right: '0px',
                            left: '200px',
                            top: '0px',
                            width: '85%',
                            height: '100vh'
                        }}
                    >
                        <Image
                            src="/hero-image.png"
                            alt="Man using Vielight Neuro device"
                            fill
                            className="object-cover"
                            style={{
                                objectPosition: '25% center'
                            }}
                            priority
                        />
                    </div>
                </div>

                {/* Mobile Background - NEW */}
                <div className="block md:hidden">
                    <Image
                        src="/hero-image.png"
                        alt="Man using Vielight Neuro device"
                        fill
                        className="object-cover"
                        style={{
                            objectPosition: '70% center'
                        }}
                        priority
                    />
                    {/* Mobile Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent"></div>
                </div>
            </div>

            {/* Optional overlay - Desktop unchanged */}
            <div className="absolute inset-0 bg-white/10 hidden lg:block"></div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Navigation Header */}
                <Header />

                {/* Main Hero Content - Desktop layout preserved */}
                <div className="flex-1 flex items-center lg:px-30 px-6 md:px-12 py-8 lg:py-12">
                    <div className="max-w-2xl space-y-2 lg:space-y-2">
                        {/* New Badge - Desktop unchanged */}
                        <div className="inline-flex items-center space-x-2 px-2 py-2 border-2 border-red-500 rounded-full w-fit bg-white/90 backdrop-blur-sm">
                            <span className="border-2 text-red-500 px-2 py-1 rounded-4xl text-xs font-semibold hidden sm:inline">New!</span>
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold sm:hidden">New!</span>
                            <span className="text-red-500 font-medium text-sm lg:text-base">
                                <span className="hidden sm:inline">Photobiomodulation at your doorstep</span>
                                <span className="sm:hidden">PBM at your doorstep</span>
                            </span>
                            <span className="text-red-500">→</span>
                        </div>

                        {/* Main Headline - Responsive text sizes */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 leading-tight">
                            Unlock Your<br />
                            Brain's Potential<br />
                            with Light
                        </h1>

                        {/* Description - Mobile gets background for readability */}
                        <div className="lg:contents">
                            <p className="text-gray-700 text-base lg:text-lg max-w-lg leading-relaxed lg:backdrop-blur-sm lg:pb-4 lg:rounded-lg  backdrop-blur-sm p-4 rounded-lg lg:bg-transparent lg:p-0">
                                Discover the future of brain health with our cutting-edge photobiomodulation devices. The Vielight Neuro headsets boost cognitive function and promote your well-being, leading to a sharper mind.
                            </p>
                        </div>

                        {/* CTA Buttons - Stack on mobile */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                            <Link
                                href="/shop"
                                className="bg-black text-white px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center"
                            >
                                Shop our products
                            </Link>
                            <Link
                                href="/about"
                                className="border border-gray-300 text-gray-700 px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors bg-white/90 backdrop-blur-sm text-center"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Trustpilot Rating - Mobile gets background */}
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:backdrop-blur-sm lg:p-3 lg:rounded-lg lg:w-fit   p-4 rounded-lg lg:bg-transparent">
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-900 font-semibold">Excellent</span>
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-green-500" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <span className="text-gray-900 text-sm lg:text-base">
                                <span className="block sm:inline">4.8/5 Rating</span>
                                <span className="hidden sm:inline"> | </span>
                                <span className="block sm:inline">100,000+ devices sold worldwide</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Cards Section - Desktop layout preserved */}
                <div className="px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12 relative z-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
                        {/* Healthcare Professionals Card */}
                        <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center shadow-lg">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                                <div
                                    className="w-10 h-10 lg:w-15 lg:h-15 bg-[#f07384]"
                                    style={{
                                        WebkitMask: "url(/healthcare-icon.png) no-repeat center / contain",
                                        mask: "url(/healthcare-icon.png) no-repeat center / contain",
                                    }}
                                    role="img"
                                    aria-label="Healthcare icon"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl font-bold text-red-500 mb-3">Healthcare Professionals</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Treats pain/inflammation, cellular health/function, stress/anxiety.
                            </p>
                        </div>

                        {/* Athletes Card */}
                        <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center shadow-lg">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                                <div
                                    className="w-10 h-10 lg:w-15 lg:h-15 bg-[#f07384]"
                                    style={{
                                        WebkitMask: "url(/athletes-icon.png) no-repeat center / contain",
                                        mask: "url(/athletes-icon.png) no-repeat center / contain",
                                    }}
                                    role="img"
                                    aria-label="Athletes icon"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl font-bold text-red-500 mb-3">Athletes</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Used by athletes to improve performance & reduce recovery time.
                            </p>
                        </div>

                        {/* Everyday Consumers Card */}
                        <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center shadow-lg sm:col-span-2 md:col-span-1">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
                                <div
                                    className="w-10 h-10 lg:w-15 lg:h-15 bg-[#f07384]"
                                    style={{
                                        WebkitMask: "url(/consumers-icon.png) no-repeat center / contain",
                                        mask: "url(/consumers-icon.png) no-repeat center / contain",
                                    }}
                                    role="img"
                                    aria-label="Consumers icon"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl font-bold text-red-500 mb-3">Everyday Consumers</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Can improve energy, reduce stress, and improve sleep.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
// import React from 'react';
// import Image from 'next/image';
// import { ShoppingCart, User } from 'lucide-react';
// import Header from './header';

// const HeroSection: React.FC = () => {
//     return (
//         <div className="min-h-screen relative overflow-hidden">
//             {/* Full Screen Background Image */}
//             {/* <div className="absolute inset-0 z-0"> */}
//             {/* <Image 
//           src="/hero-image.png"
//           alt="Man using Vielight Neuro device"
//             layout="fill"
//           objectFit="cover"
//           className="object-cover object-left"
//           priority
//         /> */}
//             <div
//                 className="absolute"
//                 style={{
//                     right: '0px',
//                     left: '300px',      // Exact pixel positioning
//                     top: '0px',       // Exact pixel positioning  
//                     width: '90%',      // Exact percentage
//                     height: 'calc(110vh - 10px)' // Custom height calculation
//                 }}
//             >
//                 <Image
//                     src="/hero-image.png"
//                     alt="Man using Vielight Neuro device"
//                     fill
//                     className="object-cover"
//                     style={{
//                         objectPosition: '20% center' // Custom object position (20% from left, centered vertically)
//                     }}
//                     priority
//                 />
//             </div>
//             {/* Optional overlay for better text readability */}
//             <div className="absolute inset-0 bg-white/10"></div>
//             {/* </div> */}

//             {/* All content positioned absolutely over the background */}
//             <div className="relative z-10 min-h-screen flex flex-col">
//                 {/* Navigation Header */}
//                 <Header />

//                 {/* Main Hero Content - Positioned on the left side */}
//                 <div className="flex-1 flex items-center px-30 py-12">
//                     <div className="max-w-2xl space-y-2">
//                         {/* New Badge */}
//                         <div className="inline-flex items-center space-x-2 px-2 py-2 border-2 border-red-500 rounded-full w-fit bg-white/90 backdrop-blur-sm">
//                             <span className="border-2 text-red-500 px-2 py-1 rounded-4xl text-xs font-semibold">New!</span>
//                             <span className="text-red-500 font-medium">Photobiomodulation at your doorstep</span>
//                             <span className="text-red-500">→</span>
//                         </div>

//                         {/* Main Headline */}
//                         <h1 className="text-5xl lg:text-6xl font-bold text-red-500 leading-tight">
//                             Unlock Your<br />
//                             Brain's Potential<br />
//                             with Light
//                         </h1>

//                         {/* Description */}
//                         <p className="text-gray-700 text-lg max-w-lg leading-relaxed  backdrop-blur-sm pb-4 rounded-lg">
//                             Discover the future of brain health with our cutting-edge photobiomodulation devices. The Vielight Neuro headsets boost cognitive function and promote your well-being, leading to a sharper mind.
//                         </p>

//                         {/* CTA Buttons */}
//                         <div className="flex items-center space-x-4">
//                             <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
//                                 Shop our products
//                             </button>
//                             <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors bg-white/90 backdrop-blur-sm">
//                                 Learn More
//                             </button>
//                         </div>

//                         {/* Trustpilot Rating */}
//                         <div className="flex items-center space-x-3 backdrop-blur-sm p-3 rounded-lg w-fit">
//                             <span className="text-gray-900 font-semibold">Excellent</span>
//                             <div className="flex space-x-1">
//                                 {[...Array(5)].map((_, i) => (
//                                     <svg key={i} className="w-5 h-5 fill-green-500" viewBox="0 0 20 20">
//                                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                     </svg>
//                                 ))}
//                             </div>
//                             <span className="text-gray-900">4.8/5 Rating | 100,000+ devices sold worldwide</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Cards Section - Overlapping at the bottom */}
//                 <div className="px-8 pb-12 relative z-20">
//                     <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
//                         {/* Healthcare Professionals Card */}
//                         <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
//                             {/* <div className="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
//                                 <Image
//                                     src="/healthcare-icon.png"
//                                     alt="Healthcare icon"
                                
//                                     width={40}
//                                     height={40}
//                                 />
//                             </div> */}
//                             <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
//                                 <div
//                                     className="w-15 h-15 bg-[#f07384]"
//                                     style={{
//                                         WebkitMask: "url(/healthcare-icon.png) no-repeat center / contain",
//                                         mask: "url(/healthcare-icon.png) no-repeat center / contain",
//                                     }}
//                                     role="img"
//                                     aria-label="Healthcare icon"
//                                 />
//                             </div>

//                             <h3 className="text-xl font-bold text-red-500 mb-3">Healthcare Professionals</h3>
//                             <p className="text-gray-600 text-sm leading-relaxed">
//                                 Treats pain/inflammation, cellular health/function, stress/anxiety.
//                             </p>
//                         </div>

//                         {/* Athletes Card */}
//                         <div className="bg-[#FFF2F4]  backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
//                             {/* <div className="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
//                                 <Image
//                                     src="/athletes-icon.png"
//                                     alt="Athletes icon"
//                                    width={40}
//                                     height={40}
//                                 />
//                             </div> */}
//                             <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
//                                 <div
//                                     className="w-15 h-15 bg-[#f07384]"
//                                     style={{
//                                         WebkitMask: "url(/athletes-icon.png) no-repeat center / contain",
//                                         mask: "url(/athletes-icon.png) no-repeat center / contain",
//                                     }}
//                                     role="img"
//                                     aria-label="Healthcare icon"
//                                 />
//                             </div>


//                             <h3 className="text-xl font-bold text-red-500 mb-3">Athletes</h3>
//                             <p className="text-gray-600 text-sm leading-relaxed">
//                                 Used by athletes to improve performance & reduce recovery time.
//                             </p>
//                         </div>

//                         {/* Everyday Consumers Card */}
//                         <div className="bg-[#FFF2F4]  backdrop-blur-sm rounded-2xl p-10 text-center shadow-lg">
//                             {/* <div className="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
//                                 <Image
//                                     src="/consumers-icon.png"
//                                     alt="Consumers icon"
//                                     width={40}
//                                     height={40}
//                                 />
//                             </div> */}
//                             <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center">
//                                 <div
//                                     className="w-15 h-15 bg-[#f07384]"
//                                     style={{
//                                         WebkitMask: "url(/consumers-icon.png) no-repeat center / contain",
//                                         mask: "url(/consumers-icon.png) no-repeat center / contain",
//                                     }}
//                                     role="img"
//                                     aria-label="Healthcare icon"
//                                 />
//                             </div>
//                             <h3 className="text-xl font-bold text-red-500 mb-3">Everyday Consumers</h3>
//                             <p className="text-gray-600 text-sm leading-relaxed">
//                                 Can improve energy, reduce stress, and improve stress, and improve sleep.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;