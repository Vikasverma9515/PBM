// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight, Star } from 'lucide-react';
// import Header from './header';

// const HeroSection: React.FC = () => {
//     return (
//         <div className="min-h-screen relative overflow-hidden">
//             {/* Background Image - FIXED to scale with content */}
//             <div className="absolute inset-0 z-0">
//                 {/* Desktop Background - UPDATED to scale proportionally */}
//                 <div className="hidden lg:block">
//                     <div className="w-full h-full max-w-[1600px] mx-auto relative">
//                         {/* Image positioned relative to the same container as content */}
//                         <div 
//                             className="absolute top-0 bottom-0"
//                             style={{
//                                 left: 'clamp(300px, 25vw, 500px)', // Scales with viewport
//                                 right: '0',
//                                 width: 'clamp(60%, 75vw, 90%)' // Responsive width
//                             }}
//                         >
//                             <Image
//                                 src="/hero-image.png"
//                                 alt="Man using Vielight Neuro device"
//                                 fill
//                                 className="object-cover"
//                                 style={{
//                                     objectPosition: '20% center'
//                                 }}
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Tablet Background - UPDATED to scale proportionally */}
//                 <div className="hidden md:block lg:hidden">
//                     <div className="w-full h-full max-w-[1200px] mx-auto relative">
//                         <div 
//                             className="absolute top-0 bottom-0"
//                             style={{
//                                 left: 'clamp(200px, 20vw, 350px)',
//                                 right: '0',
//                                 width: 'clamp(65%, 80vw, 85%)'
//                             }}
//                         >
//                             <Image
//                                 src="/hero-image.png"
//                                 alt="Man using Vielight Neuro device"
//                                 fill
//                                 className="object-cover"
//                                 style={{
//                                     objectPosition: '25% center'
//                                 }}
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Background - Unchanged */}
//                 <div className="block md:hidden">
//                     <Image
//                         src="/hero-image.png"
//                         alt="Man using Vielight Neuro device"
//                         fill
//                         className="object-cover"
//                         style={{
//                             objectPosition: '70% center'
//                         }}
//                         priority
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent"></div>
//                 </div>
//             </div>

//             <div className="absolute inset-0 bg-white/10 hidden lg:block"></div>

//             {/* Content - Uses same container constraints as background */}
//             <div className="relative z-10 min-h-screen flex flex-col">
//                 <Header />

//                 {/* Main Hero Content - UPDATED to match background scaling */}
//                 <div className="flex-1 flex items-center">
//                     <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 lg:py-12">
//                         <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl space-y-4 lg:space-y-6">
//                             {/* New Badge */}
//                             <div className="inline-flex items-center space-x-2 px-3 py-2 border-2 border-[#EA1934] rounded-full w-fit bg-white/90 backdrop-blur-sm">
//                                 <span className="border-2 text-[#EA1934] px-2 py-1 rounded-full text-xs font-semibold hidden sm:inline">New!</span>
//                                 <span className="bg-[#EA1934] text-white px-2 py-1 rounded-full text-xs font-semibold sm:hidden">New!</span>
//                                 <span className="text-[#EA1934] font-medium text-sm lg:text-base xl:text-lg">
//                                     <span className="hidden sm:inline">Photobiomodulation at your doorstep</span>
//                                     <span className="sm:hidden">PBM at your doorstep</span>
//                                 </span>
//                                 <span className="text-[#EA1934]">→</span>
//                             </div>

//                             {/* Main Headline - Responsive sizing with clamp */}
//                             <h1 className="font-bold text-[#EA1934] leading-tight" 
//                                 style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }}>
//                                 Unlock Your<br />
//                                 Brain's Potential<br />
//                                 with Light
//                             </h1>

//                             {/* Description - Responsive sizing */}
//                             <div className="lg:contents">
//                                 <p className="text-gray-700 leading-relaxed lg:backdrop-blur-sm lg:pb-4 lg:rounded-lg backdrop-blur-sm p-4 rounded-lg lg:bg-transparent lg:p-0"
//                                    style={{ 
//                                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
//                                        maxWidth: 'clamp(20rem, 50vw, 40rem)'
//                                    }}>
//                                     Discover the future of brain health with our cutting-edge photobiomodulation devices. The Vielight Neuro headsets boost cognitive function and promote your well-being, leading to a sharper mind.
//                                 </p>
//                             </div>

//                             {/* CTA Buttons - Responsive sizing */}
//                             <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 xl:space-x-6 pt-4">
//                                 <Link
//                                     href="/shop"
//                                     className="bg-black text-white px-6 lg:px-8 xl:px-10 py-3 xl:py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center"
//                                     style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
//                                 >
//                                     Shop our products
//                                 </Link>
//                                 <Link
//                                     href="/about"
//                                     className="border border-gray-300 text-gray-700 px-6 lg:px-8 xl:px-10 py-3 xl:py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors bg-white/90 backdrop-blur-sm text-center"
//                                     style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
//                                 >
//                                     Learn More
//                                 </Link>
//                             </div>

//                             {/* Trustpilot Rating - Responsive sizing */}
//                             <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:backdrop-blur-sm lg:p-3 lg:rounded-lg lg:w-fit p-4 rounded-lg lg:bg-transparent">
//                                 <div className="flex items-center space-x-2">
//                                     <span className="text-gray-900 font-semibold" 
//                                           style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}>
//                                         Excellent
//                                     </span>
//                                     <div className="flex space-x-1">
//                                         {[...Array(5)].map((_, i) => (
//                                             <svg key={i} className="fill-green-500" 
//                                                  style={{ width: 'clamp(1rem, 2vw, 1.5rem)', height: 'clamp(1rem, 2vw, 1.5rem)' }}
//                                                  viewBox="0 0 20 20">
//                                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                             </svg>
//                                         ))}
//                                     </div>
//                                 </div>
//                                 <span className="text-gray-900" 
//                                       style={{ fontSize: 'clamp(0.75rem, 1.25vw, 1.125rem)' }}>
//                                     <span className="block sm:inline">4.8/5 Rating</span>
//                                     <span className="hidden sm:inline"> | </span>
//                                     <span className="block sm:inline">100,000+ devices sold worldwide</span>
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Cards Section - UPDATED with consistent scaling */}
//                 <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pb-8 lg:pb-12 relative z-20">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 max-w-[1600px] mx-auto">
//                         {/* Healthcare Professionals Card */}
//                         <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl text-center shadow-lg"
//                              style={{ padding: 'clamp(1rem, 3vw, 2.5rem)' }}>
//                             <div className="mx-auto mb-4 rounded-full flex items-center justify-center"
//                                  style={{ 
//                                      width: 'clamp(3.5rem, 8vw, 5rem)', 
//                                      height: 'clamp(3.5rem, 8vw, 5rem)' 
//                                  }}>
//                                 <div
//                                     className="bg-[#f07384]"
//                                     style={{
//                                         width: 'clamp(2.5rem, 6vw, 4rem)',
//                                         height: 'clamp(2.5rem, 6vw, 4rem)',
//                                         WebkitMask: "url(/healthcare-icon.png) no-repeat center / contain",
//                                         mask: "url(/healthcare-icon.png) no-repeat center / contain",
//                                     }}
//                                     role="img"
//                                     aria-label="Healthcare icon"
//                                 />
//                             </div>
//                             <h3 className="font-bold text-[#EA1934] mb-3" 
//                                 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
//                                 Healthcare Professionals
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed" 
//                                style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.125rem)' }}>
//                                 Treats pain/inflammation, cellular health/function, stress/anxiety.
//                             </p>
//                         </div>

//                         {/* Athletes Card */}
//                         <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl text-center shadow-lg"
//                              style={{ padding: 'clamp(1rem, 3vw, 2.5rem)' }}>
//                             <div className="mx-auto mb-4 rounded-full flex items-center justify-center"
//                                  style={{ 
//                                      width: 'clamp(3.5rem, 8vw, 5rem)', 
//                                      height: 'clamp(3.5rem, 8vw, 5rem)' 
//                                  }}>
//                                 <div
//                                     className="bg-[#f07384]"
//                                     style={{
//                                         width: 'clamp(2.5rem, 6vw, 4rem)',
//                                         height: 'clamp(2.5rem, 6vw, 4rem)',
//                                         WebkitMask: "url(/athletes-icon.png) no-repeat center / contain",
//                                         mask: "url(/athletes-icon.png) no-repeat center / contain",
//                                     }}
//                                     role="img"
//                                     aria-label="Athletes icon"
//                                 />
//                             </div>
//                             <h3 className="font-bold text-[#EA1934] mb-3" 
//                                 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
//                                 Athletes
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed" 
//                                style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.125rem)' }}>
//                                 Used by athletes to improve performance & reduce recovery time.
//                             </p>
//                         </div>

//                         {/* Everyday Consumers Card */}
//                         <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl text-center shadow-lg sm:col-span-2 md:col-span-1"
//                              style={{ padding: 'clamp(1rem, 3vw, 2.5rem)' }}>
//                             <div className="mx-auto mb-4 rounded-full flex items-center justify-center"
//                                  style={{ 
//                                      width: 'clamp(3.5rem, 8vw, 5rem)', 
//                                      height: 'clamp(3.5rem, 8vw, 5rem)' 
//                                  }}>
//                                 <div
//                                     className="bg-[#f07384]"
//                                     style={{
//                                         width: 'clamp(2.5rem, 6vw, 4rem)',
//                                         height: 'clamp(2.5rem, 6vw, 4rem)',
//                                         WebkitMask: "url(/consumers-icon.png) no-repeat center / contain",
//                                         mask: "url(/consumers-icon.png) no-repeat center / contain",
//                                     }}
//                                     role="img"
//                                     aria-label="Consumers icon"
//                                 />
//                             </div>
//                             <h3 className="font-bold text-[#EA1934] mb-3" 
//                                 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
//                                 Everyday Consumers
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed" 
//                                style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.125rem)' }}>
//                                 Can improve energy, reduce stress, and improve sleep.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;



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
                            right: 0,
                            left: 'clamp(180px, 18vw, 320px)',
                            top: 0,
                            bottom: 0
                        }}
                    >
                        <Image
                            src="/hero-image.png"
                            alt="Man using Vielight Neuro device"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 70vw, 100vw"
                            style={{
                                objectPosition: '20% center'
                            }}
                            priority
                        />
                    </div>
                </div>

                {/* Tablet Background */}
                <div className="hidden md:block lg:hidden">
                    <div
                        className="absolute"
                        style={{
                            right: 0,
                            left: 'clamp(120px, 22vw, 240px)',
                            top: 0,
                            bottom: 0
                        }}
                    >
                        <Image
                            src="/hero-image.png"
                            alt="Man using Vielight Neuro device"
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 80vw, 100vw"
                            style={{
                                objectPosition: '25% center'
                            }}
                            priority
                        />
                    </div>
                </div>

                {/* Mobile Background */}
                <div className="block md:hidden">
                    <Image
                        src="/hero-image.png"
                        alt="Man using Vielight Neuro device"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        style={{
                            objectPosition: '70% center'
                        }}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent"></div>
                </div>
            </div>

            <div className="absolute inset-0 bg-white/10 hidden lg:block"></div>

            {/* Content - UPDATED for better responsiveness */}
            <div className="relative z-10 min-h-screen flex flex-col">
                <Header />

                {/* Main Hero Content - UPDATED with better container and centering */}
                <div className="flex-1 flex items-center">
                    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-8 lg:py-12">
                        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl space-y-2 lg:space-y-2">
                            {/* New Badge */}
                            <div className="inline-flex items-center space-x-2 px-2 py-2 border-2 border-[#EA1934] rounded-full w-fit bg-white/90 backdrop-blur-sm">
                                <span className="border-2 text-[#EA1934] px-2 py-1 rounded-4xl text-xs font-semibold hidden sm:inline">New!</span>
                                <span className="bg-[#EA1934] text-white px-2 py-1 rounded-full text-xs font-semibold sm:hidden">New!</span>
                                <span className="text-[#EA1934] font-medium text-sm lg:text-base xl:text-lg">
                                    <span className="hidden sm:inline">Photobiomodulation at your doorstep</span>
                                    <span className="sm:hidden">PBM at your doorstep</span>
                                </span>
                                <span className="text-[#EA1934]">→</span>
                            </div>

                            {/* Main Headline - UPDATED with better responsive sizing */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-[#EA1934] leading-tight xl:leading-[0.9]">
                                Unlock Your<br />
                                Brain's Potential<br />
                                with Light
                            </h1>

                            {/* Description - UPDATED with better sizing */}
                            <div className="lg:contents">
                                <p className="text-gray-700 text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-lg xl:max-w-2xl leading-relaxed xl:leading-loose lg:backdrop-blur-sm lg:pb-4 lg:rounded-lg backdrop-blur-sm p-4 rounded-lg lg:bg-transparent lg:p-0">
                                    Discover the future of brain health with our cutting-edge photobiomodulation devices. The Vielight Neuro headsets boost cognitive function and promote your well-being, leading to a sharper mind.
                                </p>
                            </div>

                            {/* CTA Buttons - UPDATED with better sizing */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 xl:space-x-6 pt-2">
                                <Link
                                    href="/shop"
                                    className="bg-black text-white px-6 lg:px-8 xl:px-10 py-3 xl:py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center text-base xl:text-lg"
                                >
                                    Shop our products
                                </Link>
                                <Link
                                    href="/about"
                                    className="border border-gray-300 text-gray-700 px-6 lg:px-8 xl:px-10 py-3 xl:py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors bg-white/90 backdrop-blur-sm text-center text-base xl:text-lg"
                                >
                                    Learn More
                                </Link>
                            </div>

                            {/* Trustpilot Rating - UPDATED with better sizing */}
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:backdrop-blur-sm lg:p-3 lg:rounded-lg lg:w-fit p-4 rounded-lg lg:bg-transparent">
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-900 font-semibold text-base xl:text-lg">Excellent</span>
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 xl:w-6 xl:h-6 fill-green-500" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <span className="text-gray-900 text-sm lg:text-base xl:text-lg">
                                    <span className="block sm:inline">4.8/5 Rating</span>
                                    <span className="hidden sm:inline"> | </span>
                                    <span className="block sm:inline">100,000+ devices sold worldwide</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Cards Section - UPDATED for better responsiveness */}
                <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pb-8 lg:pb-12 relative z-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 max-w-[1600px] mx-auto">
                        {/* Healthcare Professionals Card */}
                        <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 text-center shadow-lg">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
                                <div
                                    className="w-10 h-10 lg:w-15 lg:h-15 xl:w-16 xl:h-16 bg-[#f07384]"
                                    style={{
                                        WebkitMask: "url(/healthcare-icon.png) no-repeat center / contain",
                                        mask: "url(/healthcare-icon.png) no-repeat center / contain",
                                    }}
                                    role="img"
                                    aria-label="Healthcare icon"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-[#EA1934] mb-3">Healthcare Professionals</h3>
                            <p className="text-gray-600 text-sm lg:text-base xl:text-lg leading-relaxed">
                                Treats pain/inflammation, cellular health/function, stress/anxiety.
                            </p>
                        </div>

                        {/* Athletes Card */}
                        <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 text-center shadow-lg">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
                                <div
                                    className="w-10 h-10 lg:w-15 lg:h-15 xl:w-16 xl:h-16 bg-[#f07384]"
                                    style={{
                                        WebkitMask: "url(/athletes-icon.png) no-repeat center / contain",
                                        mask: "url(/athletes-icon.png) no-repeat center / contain",
                                    }}
                                    role="img"
                                    aria-label="Athletes icon"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-[#EA1934] mb-3">Athletes</h3>
                            <p className="text-gray-600 text-sm lg:text-base xl:text-lg leading-relaxed">
                                Used by athletes to improve performance & reduce recovery time.
                            </p>
                        </div>

                        {/* Everyday Consumers Card */}
                        <div className="bg-[#FFF2F4] backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 text-center shadow-lg sm:col-span-2 md:col-span-1">
                            <div className="w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto mb-4 rounded-full flex items-center justify-center">
                                <div
                                    className="w-10 h-10 lg:w-15 lg:h-15 xl:w-16 xl:h-16 bg-[#f07384]"
                                    style={{
                                        WebkitMask: "url(/consumers-icon.png) no-repeat center / contain",
                                        mask: "url(/consumers-icon.png) no-repeat center / contain",
                                    }}
                                    role="img"
                                    aria-label="Consumers icon"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-[#EA1934] mb-3">Everyday Consumers</h3>
                            <p className="text-gray-600 text-sm lg:text-base xl:text-lg leading-relaxed">
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