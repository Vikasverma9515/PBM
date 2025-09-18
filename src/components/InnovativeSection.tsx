// import React from 'react';
// import Image from 'next/image';

// const InnovativeSection: React.FC = () => {
//     return (
//         <div className="relative min-h-screen bg-gray-100 overflow-hidden">
//             {/* Background Image - Full width extending beyond container */}
//             <div className="absolute inset-0 w-[1448px] h-[814px] -left-1">
//                 <Image
//                     src="/brain-technology-image.png"
//                     alt="Revolutionizing Brain Health Technology"
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//             </div>

//             {/* Content Container */}
//             <div className="relative z-10 pt-0 min-h-screen flex items-center">
//                 {/* Text Content with exact positioning */}
//                 {/* <div
//                     className="w-[600px] h-[492px] flex flex-col justify-center space-y-8"
//                     style={{
//                         marginLeft: '725px',
//                         marginTop: '165px'
//                     }}
//                 > */}
//                 <div
//                     className="w-[600px] h-[492px] flex flex-col justify-center space-y-8"
//                     style={{ marginLeft: '760px', marginTop: '10px' }}
//                 >


//                     {/* Small Label */}
//                     <div>
//                         <span className="text-gray-700 text-sm font-medium tracking-wide">Innovative Solution</span>
//                     </div>

//                     {/* Main Headline */}
//                     <h2 className="text-5xl font-bold text-black leading-[1.1]">
//                         Revolutionizing Brain<br />
//                         Health with Technology
//                     </h2>

//                     {/* Description */}
//                     <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
//                         At PBMDistributors, we focus on re-selling Vielight products, which are designed to improve cognitive function and promote overall wellness through innovative technology.
//                     </p>

//                     {/* Two Column Features */}
//                     <div className="grid grid-cols-2 gap-12">
//                         {/* Research Papers Published */}
//                         <div className="space-y-3">
//                             <h3 className="text-lg font-bold text-black">Research Papers Published</h3>
//                             <p className="text-gray-600 text-sm leading-relaxed">
//                                 Harnessing light therapy for improved brain health and cognitive performance.
//                             </p>
//                         </div>

//                         {/* Our Commitment */}
//                         <div className="space-y-3">
//                             <h3 className="text-lg font-bold text-black">Our Commitment</h3>
//                             <p className="text-gray-600 text-sm leading-relaxed">
//                                 Delivering innovative solutions for brain wellness and customer satisfaction.
//                             </p>
//                         </div>
//                     </div>

//                     {/* CTA Buttons */}
//                     <div className="flex items-center space-x-4 pt-6">
//                         <button className="bg-[#EA1934] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center space-x-2">
//                             <span>Shop Now</span>
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                         </button>

//                         <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
//                             Learn More
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InnovativeSection;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const InnovativeSection: React.FC = () => {
    return (
        <div className="relative min-h-screen  overflow-hidden">
            {/* Background Image - Desktop unchanged */}
            <div className="absolute inset-0 z-0">
                {/* Desktop Background - UNCHANGED */}
                <div className="hidden lg:block absolute -ml-[20px] inset-0 w-[1600px] h-[814px] -left-1">
                    <Image
                        src="/brain-technology-image.png"
                        alt="Revolutionizing Brain Health Technology"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Mobile/Tablet Background - NEW */}
                <div className="block lg:hidden absolute inset-0">
                    <Image
                        src="/brain-technology-image.png"
                        alt="Revolutionizing Brain Health Technology"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '30% center' }}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 pt-0 min-h-screen flex items-center px-4 sm:px-6 lg:px-0">
                {/* Text Content - Desktop positioning preserved */}
                <div className="w-full max-w-2xl space-y-6 lg:space-y-8 lg:ml-[760px] lg:mt-[10px] lg:w-[600px] lg:h-[492px] lg:flex lg:flex-col lg:justify-center">
                    
                    {/* Small Label */}
                    <div>
                        <span className="text-gray-700 text-sm font-medium tracking-wide">Innovative Solution</span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight lg:leading-[1.1]">
                        <span className="block">Revolutionizing Brain</span>
                        <span className="block">Health with Technology</span>
                    </h2>

                    {/* Description */}
                    <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl lg:bg-transparent lg:p-0">
                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-lg">
                            At PBMDistributors, we focus on re-selling Vielight products, which are designed to improve cognitive function and promote overall wellness through innovative technology.
                        </p>
                    </div>

                    {/* Two Column Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 bg-white/95 backdrop-blur-sm p-4 rounded-xl lg:bg-transparent lg:p-0">
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
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4 lg:pt-6">
                        <Link
                            href="/shop"
                            className="bg-[#EA1934] text-white px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
                        >
                            <span>Shop Now</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>

                        <Link
                            href="/about"
                            className="border border-gray-300 text-gray-700 px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors text-center"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovativeSection;