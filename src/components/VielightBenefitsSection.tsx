import React from 'react';
import Image from 'next/image';

const VielightBenefitsSection: React.FC = () => {
    const backgroundSettings = {
        width: 'w-full',
        height: 'h-[calc(100%-50px)]',
        top: 'top-[120px] sm:top-[180px] lg:top-[220px]',
        left: 'left-0',
        zIndex: 'z-0',
        
        imageSrc: '/vielight-benefits-background.jpg',
        imageAlt: 'Vielight benefits background',
        objectPosition: 'center 340%',
        imageClassName: 'object-cover',
        
        overlayColor: 'bg-red-600/80',
        overlayPosition: 'absolute inset-0',
        overlayZIndex: '',
    };

    return (
        <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[650px] overflow-hidden bg-white">

            {/* Background Section - Desktop unchanged */}
            <div className={`absolute ${backgroundSettings.width} ${backgroundSettings.height} ${backgroundSettings.top} ${backgroundSettings.left} ${backgroundSettings.zIndex}`}>
                <Image
                    src={backgroundSettings.imageSrc}
                    alt={backgroundSettings.imageAlt}
                    fill
                    className={backgroundSettings.imageClassName}
                    style={{ objectPosition: backgroundSettings.objectPosition }}
                    priority
                />
                <div className={`${backgroundSettings.overlayPosition} ${backgroundSettings.overlayColor} ${backgroundSettings.overlayZIndex}`}></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1400px] lg:max-h-[760px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[592px]">

                    {/* Left Side - Player Image - Position unchanged */}
                    <div className="relative order-2 lg:order-1">
                        <div className="w-full max-w-lg mx-auto -ml-[10px] scale-125 lg:scale-100  lg:w-[909px] lg:h-[650px] lg:-ml-[70px] lg: mt-12 lg:max-w-none relative z-20 aspect-[4/5] lg:aspect-auto rounded-xl lg:rounded-2xl overflow-hidden lg:transform lg:translateY-[90px]">
                            <Image
                                src="/hockey-player-vielight.png"
                                alt="Hockey player wearing Vielight device"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side - Written Content with background fix */}
                    <div className="w-full lg:w-[616px] lg:h-[403px] lg:pt-15 space-y-6 lg:space-y-8 relative z-20 order-1 lg:order-2">
                        
                        {/* Content wrapper with red background for mobile/tablet visibility */}
                        <div className="bg-[#EA1934]/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 rounded-xl lg:rounded-none">
                            
                            {/* Main Title */}
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8">
                                Vielight benefits
                            </h2>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 gap-4 lg:gap-6">
                                {/* First Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                                    {/* Improved Focus */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-white text-base lg:text-lg font-medium">Improved Focus</span>
                                    </div>

                                    {/* Better Memory */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <span className="text-white text-base lg:text-lg font-medium">Better Memory</span>
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                                    {/* Mental Clarity */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-white text-base lg:text-lg font-medium">Mental Clarity</span>
                                    </div>

                                    {/* Better Sleep */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                        </div>
                                        <span className="text-white text-base lg:text-lg font-medium">Better Sleep</span>
                                    </div>
                                </div>

                                {/* Third Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                                    {/* Improved Immunity */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <span className="text-white text-base lg:text-lg font-medium">Improved Immunity</span>
                                    </div>

                                    {/* Mood Enhancements */}
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 115 0H17M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className="text-white text-base lg:text-lg font-medium">Mood Enhancements</span>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Text */}
                            <div className="mt-6 lg:mt-8">
                                <p className="text-white text-base lg:text-lg leading-relaxed">
                                    Watch what <span className="font-bold">Tim Thomas</span> NHL 4 x All Star, Stanley Cup Champion has to say on Vielight and Cognition
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 lg:mt-8">
                                <button className="bg-white text-red-600 px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                    See Video
                                </button>
                                <button className="border-2 border-white text-white px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VielightBenefitsSection;
// import React from 'react';
// import Image from 'next/image';

// const VielightBenefitsSection: React.FC = () => {
//     // 🎨 CUSTOMIZABLE BACKGROUND SETTINGS - Adjust these values easily
//     const backgroundSettings = {
//         // Container dimensions and positioning
//         width: 'w-full',                    // Options: 'w-full', 'w-[1200px]', 'w-screen'
//         height: 'h-[calc(100%-50px)]',    // Options: 'h-[500px]', 'h-[calc(100%-50px)]', 'h-full'
//         top: 'top-[220px]',                // Options: 'top-[100px]', 'top-[200px]', 'top-0'
//         left: 'left-0',                    // Options: 'left-0', 'left-[50px]', '-left-[25px]'
//         zIndex: 'z-0',                     // Options: 'z-0', 'z-10', 'z-[-1]'
        
//         // Image settings
//         imageSrc: '/vielight-benefits-background.jpg',
//         imageAlt: 'Vielight benefits background',
//         objectPosition: 'center 340%',      // Options: 'center 30%', 'center top', 'center bottom'
//         imageClassName: 'object-cover',    // Options: 'object-cover', 'object-contain', 'object-fill'
        
//         // Red overlay settings
//         overlayColor: 'bg-red-600/80',     // Options: 'bg-red-500/70', 'bg-red-700/90', 'bg-blue-600/80'
//         overlayPosition: 'absolute inset-0', // Options: 'absolute inset-0', 'absolute top-[50px] inset-x-0 bottom-0'
//         overlayZIndex: '',                 // Options: '', 'z-10', 'z-5'
//     };

//     return (
//         <div className="relative min-h-[650px] overflow-hidden bg-white">

//             {/* 🎯 FULLY CUSTOMIZABLE BACKGROUND SECTION */}
//             <div className={`absolute ${backgroundSettings.width} ${backgroundSettings.height} ${backgroundSettings.top} ${backgroundSettings.left} ${backgroundSettings.zIndex}`}>
//                 <Image
//                     src={backgroundSettings.imageSrc}
//                     alt={backgroundSettings.imageAlt}
//                     fill
//                     className={backgroundSettings.imageClassName}
//                     style={{ objectPosition: backgroundSettings.objectPosition }}
//                     priority
//                 />

//                 {/* Red overlay for the background effect */}
//                 <div className={`${backgroundSettings.overlayPosition} ${backgroundSettings.overlayColor} ${backgroundSettings.overlayZIndex}`}></div>
//             </div>

//             {/* Content Container */}
//             <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-16">
//                 <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[592px]">

//                     {/* Left Side - Player Image */}
//                     <div className="relative">
//                         <div
//                             className="w-[909px] h-[650px] -ml-[70px] relative z-20"
//                             style={{ transform: 'translateY(90px)' }}
//                         >
//                             <Image
//                                 src="/hockey-player-vielight.png"
//                                 alt="Hockey player wearing Vielight device"
//                                 fill
//                                 className="object-cover rounded-2xl"
//                                 priority
//                             />
//                         </div>
//                     </div>

//                     {/* Right Side - Written Content */}
//                     <div className="w-[616px] h-[403px] pt-35 space-y-8 relative z-20">
//                         {/* Main Title */}
//                         <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
//                             Vielight benefits
//                         </h2>

//                         {/* Benefits Grid */}
//                         <div className="grid grid-cols-1 gap-6">
//                             {/* First Row - 2 columns */}
//                             <div className="grid grid-cols-2 gap-8">
//                                 {/* Improved Focus */}
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
//                                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-white text-lg font-medium">Improved Focus</span>
//                                 </div>

//                                 {/* Better Memory */}
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
//                                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-white text-lg font-medium">Better Memory</span>
//                                 </div>
//                             </div>

//                             {/* Second Row - 2 columns */}
//                             <div className="grid grid-cols-2 gap-8">
//                                 {/* Mental Clarity */}
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
//                                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-white text-lg font-medium">Mental Clarity</span>
//                                 </div>

//                                 {/* Better Sleep */}
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
//                                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-white text-lg font-medium">Better Sleep</span>
//                                 </div>
//                             </div>

//                             {/* Third Row - 2 columns */}
//                             <div className="grid grid-cols-2 gap-8">
//                                 {/* Improved Immunity */}
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
//                                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-white text-lg font-medium">Improved Immunity</span>
//                                 </div>

//                                 {/* Mood Enhancements */}
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
//                                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 115 0H17M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                         </svg>
//                                     </div>
//                                     <span className="text-white text-lg font-medium">Mood Enhancements</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Testimonial Text */}
//                         <div className="mt-8">
//                             <p className="text-white text-lg leading-relaxed">
//                                 Watch what <span className="font-bold">Tim Thomas</span> NHL 4 x All Star, Stanley Cup Champion has to say on Vielight and Cognition
//                             </p>
//                         </div>

//                         {/* CTA Buttons */}
//                         <div className="flex items-center space-x-4 mt-8">
//                             <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//                                 See Video
//                             </button>
//                             <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
//                                 Learn More
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VielightBenefitsSection;