import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InnovativeSection: React.FC = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image - Full page coverage */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Background - RESPONSIVE SCALING */}
                <div className="hidden lg:block absolute inset-0 w-full h-full">
                    <Image
                        src="/brain-technology-image.png"
                        alt="Revolutionizing Brain Health Technology"
                        fill
                        className="object-cover"
                        style={{ 
                            objectPosition: 'center center',
                            // This makes the image scale with zoom levels
                            transform: 'scale(1)',
                            transformOrigin: 'center center'
                        }}
                        priority
                    />
                </div>

                {/* Mobile/Tablet Background */}
                <div className="block lg:hidden absolute inset-0">
                    <Image
                        src="/brain-technology-image.png"
                        alt="Revolutionizing Brain Health Technology"
                        fill
                        className="object-cover"
                        style={{ 
                            objectPosition: '30% center',
                            transform: 'scale(1)',
                            transformOrigin: 'center center'
                        }}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
                </div>
            </div>

            {/* Content Container - UPDATED to shift text more to the left */}
            <div className="relative z-10 min-h-screen">
                <div className="min-h-screen flex items-center">
                    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                        {/* UPDATED: Changed from justify-end to justify-center lg:justify-end */}
                        <div className="flex justify-center lg:justify-center xl:justify-end">
                            <div className="w-full max-w-2xl lg:max-w-none lg:w-auto">
                                {/* Desktop Content - UPDATED with better positioning */}
                                <div className="hidden lg:block">
                                    <div 
                                        className="space-y-6 lg:space-y-8"
                                        style={{
                                            width: 'clamp(400px, 35vw, 600px)',
                                            maxWidth: '600px',
                                            // ADDED: Shift content more to the left
                                            marginRight: 'clamp(2rem, 12vw, 8rem)'
                                        }}
                                    >
                                        {/* Small Label */}
                                        <div>
                                            <span className="text-gray-700 text-sm font-medium tracking-wide">
                                                Innovative Solution
                                            </span>
                                        </div>

                                        {/* Main Headline */}
                                        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black leading-tight">
                                            <span className="block">Revolutionizing Brain</span>
                                            <span className="block">Health with Technology</span>
                                        </h2>

                                        {/* Description */}
                                        <div>
                                            <p className="text-gray-700 text-base xl:text-lg 2xl:text-xl leading-relaxed">
                                                At PBMDistributors, we focus on re-selling Vielight products, which are designed to improve cognitive function and promote overall wellness through innovative technology.
                                            </p>
                                        </div>

                                        {/* Two Column Features */}
                                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
                                            {/* Research Papers Published */}
                                            <div className="space-y-3">
                                                <h3 className="text-lg xl:text-xl font-bold text-black">
                                                    Research Papers Published
                                                </h3>
                                                <p className="text-gray-600 text-sm xl:text-base leading-relaxed">
                                                    Harnessing light therapy for improved brain health and cognitive performance.
                                                </p>
                                            </div>

                                            {/* Our Commitment */}
                                            <div className="space-y-3">
                                                <h3 className="text-lg xl:text-xl font-bold text-black">
                                                    Our Commitment
                                                </h3>
                                                <p className="text-gray-600 text-sm xl:text-base leading-relaxed">
                                                    Delivering innovative solutions for brain wellness and customer satisfaction.
                                                </p>
                                            </div>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex items-center gap-4 pt-4 lg:pt-6">
                                            <Link
                                                href="/shop"
                                                className="bg-[#EA1934] text-white px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center space-x-2 text-base xl:text-lg"
                                            >
                                                <span>Shop Now</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>

                                            <Link
                                                href="/about"
                                                className="border border-gray-300 text-gray-700 px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors text-base xl:text-lg"
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Content - UNCHANGED */}
                                <div className="block lg:hidden space-y-6">
                                    {/* Small Label */}
                                    <div>
                                        <span className="text-gray-700 text-sm font-medium tracking-wide">
                                            Innovative Solution
                                        </span>
                                    </div>

                                    {/* Main Headline */}
                                    <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
                                        <span className="block">Revolutionizing Brain</span>
                                        <span className="block">Health with Technology</span>
                                    </h2>

                                    {/* Description */}
                                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                                        <p className="text-gray-700 text-base leading-relaxed">
                                            At PBMDistributors, we focus on re-selling Vielight products, which are designed to improve cognitive function and promote overall wellness through innovative technology.
                                        </p>
                                    </div>

                                    {/* Two Column Features */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                                        {/* Research Papers Published */}
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-bold text-black">Research Papers Published</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Harnessing light therapy for improved brain health and cognitive performance.
                                            </p>
                                        </div>

                                        {/* Our Commitment */}
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-bold text-black">Our Commitment</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Delivering innovative solutions for brain wellness and customer satisfaction.
                                            </p>
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                                        <Link
                                            href="/shop"
                                            className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                                        >
                                            <span>Shop Now</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>

                                        <Link
                                            href="/about"
                                            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors text-center"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovativeSection;


// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const InnovativeSection: React.FC = () => {
//     return (
//         <div className="relative min-h-screen overflow-hidden">
//             {/* Background Image - Full page coverage */}
//             <div className="absolute inset-0 z-0">
//                 {/* Desktop Background - FULL COVERAGE */}
//                 <div className="hidden lg:block absolute inset-0 w-full h-full">
//                     <Image
//                         src="/brain-technology-image.png"
//                         alt="Revolutionizing Brain Health Technology"
//                         fill
//                         className="object-cover"
//                         // style={{ 
//                         //     objectPosition: 'center center',
//                         //     // transform: 'scale(1.1)'
//                         // }}
//                         priority
//                     />
//                 </div>

//                 {/* Mobile/Tablet Background */}
//                 <div className="block lg:hidden absolute inset-0">
//                     <Image
//                         src="/brain-technology-image.png"
//                         alt="Revolutionizing Brain Health Technology"
//                         fill
//                         className="object-cover"
//                         style={{ objectPosition: '30% center' }}
//                         priority
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
//                 </div>
//             </div>

//             {/* Content Container - UPDATED to shift text more to the left */}
//             <div className="relative z-10 min-h-screen">
//                 <div className="min-h-screen flex items-center">
//                     <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
//                         {/* UPDATED: Changed from justify-end to justify-center lg:justify-end */}
//                         <div className="flex justify-center lg:justify-center xl:justify-end">
//                             <div className="w-full max-w-2xl lg:max-w-none lg:w-auto">
//                                 {/* Desktop Content - UPDATED with better positioning */}
//                                 <div className="hidden lg:block">
//                                     <div 
//                                         className="space-y-6 lg:space-y-8"
//                                         style={{
//                                             width: 'clamp(400px, 35vw, 600px)',
//                                             maxWidth: '600px',
//                                             // ADDED: Shift content more to the left
//                                             marginRight: 'clamp(2rem, 12vw, 8rem)'
//                                         }}
//                                     >
//                                         {/* Small Label */}
//                                         <div>
//                                             <span className="text-gray-700 text-sm font-medium tracking-wide">
//                                                 Innovative Solution
//                                             </span>
//                                         </div>

//                                         {/* Main Headline */}
//                                         <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black leading-tight">
//                                             <span className="block">Revolutionizing Brain</span>
//                                             <span className="block">Health with Technology</span>
//                                         </h2>

//                                         {/* Description */}
//                                         <div>
//                                             <p className="text-gray-700 text-base xl:text-lg 2xl:text-xl leading-relaxed">
//                                                 At PBMDistributors, we focus on re-selling Vielight products, which are designed to improve cognitive function and promote overall wellness through innovative technology.
//                                             </p>
//                                         </div>

//                                         {/* Two Column Features */}
//                                         <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
//                                             {/* Research Papers Published */}
//                                             <div className="space-y-3">
//                                                 <h3 className="text-lg xl:text-xl font-bold text-black">
//                                                     Research Papers Published
//                                                 </h3>
//                                                 <p className="text-gray-600 text-sm xl:text-base leading-relaxed">
//                                                     Harnessing light therapy for improved brain health and cognitive performance.
//                                                 </p>
//                                             </div>

//                                             {/* Our Commitment */}
//                                             <div className="space-y-3">
//                                                 <h3 className="text-lg xl:text-xl font-bold text-black">
//                                                     Our Commitment
//                                                 </h3>
//                                                 <p className="text-gray-600 text-sm xl:text-base leading-relaxed">
//                                                     Delivering innovative solutions for brain wellness and customer satisfaction.
//                                                 </p>
//                                             </div>
//                                         </div>

//                                         {/* CTA Buttons */}
//                                         <div className="flex items-center gap-4 pt-4 lg:pt-6">
//                                             <Link
//                                                 href="/shop"
//                                                 className="bg-[#EA1934] text-white px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center space-x-2 text-base xl:text-lg"
//                                             >
//                                                 <span>Shop Now</span>
//                                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                                 </svg>
//                                             </Link>

//                                             <Link
//                                                 href="/about"
//                                                 className="border border-gray-300 text-gray-700 px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors text-base xl:text-lg"
//                                             >
//                                                 Learn More
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Mobile Content - UNCHANGED */}
//                                 <div className="block lg:hidden space-y-6">
//                                     {/* Small Label */}
//                                     <div>
//                                         <span className="text-gray-700 text-sm font-medium tracking-wide">
//                                             Innovative Solution
//                                         </span>
//                                     </div>

//                                     {/* Main Headline */}
//                                     <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
//                                         <span className="block">Revolutionizing Brain</span>
//                                         <span className="block">Health with Technology</span>
//                                     </h2>

//                                     {/* Description */}
//                                     <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl">
//                                         <p className="text-gray-700 text-base leading-relaxed">
//                                             At PBMDistributors, we focus on re-selling Vielight products, which are designed to improve cognitive function and promote overall wellness through innovative technology.
//                                         </p>
//                                     </div>

//                                     {/* Two Column Features */}
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
//                                         {/* Research Papers Published */}
//                                         <div className="space-y-3">
//                                             <h3 className="text-lg font-bold text-black">Research Papers Published</h3>
//                                             <p className="text-gray-600 text-sm leading-relaxed">
//                                                 Harnessing light therapy for improved brain health and cognitive performance.
//                                             </p>
//                                         </div>

//                                         {/* Our Commitment */}
//                                         <div className="space-y-3">
//                                             <h3 className="text-lg font-bold text-black">Our Commitment</h3>
//                                             <p className="text-gray-600 text-sm leading-relaxed">
//                                                 Delivering innovative solutions for brain wellness and customer satisfaction.
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* CTA Buttons */}
//                                     <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
//                                         <Link
//                                             href="/shop"
//                                             className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
//                                         >
//                                             <span>Shop Now</span>
//                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                             </svg>
//                                         </Link>

//                                         <Link
//                                             href="/about"
//                                             className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors text-center"
//                                         >
//                                             Learn More
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InnovativeSection;