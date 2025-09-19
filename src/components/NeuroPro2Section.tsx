import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

const NeuroPro2Section: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white py-8 lg:py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Content and Hero Image Section */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-4">

                    {/* LEFT CONTENT SECTION */}
                    <div className="content-section space-y-4 lg:space-y-6 order-2 lg:order-1">
                        {/* Just Launched Badge */}
                        <div className="inline-flex items-center gap-2 lg:gap-3 px-1 py-1 pr-3 border border-red-500 rounded-2xl w-fit">
                            <span className="text-red-500 border border-red-500 px-2 lg:px-2.5 py-1 rounded-xl text-xs font-bold">New!</span>
                            <span className="text-red-500 text-sm font-medium">Just Launched</span>
                            <MoveRight className="text-red-500 w-4 h-4" />
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                            Introducing the<br />
                            Vielight Neuro Pro 2
                        </h2>

                        {/* Feature Tags */}
                        <div className="space-y-2">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Focus</span>
                                <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Stress</span>
                                <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Memory</span>
                                <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Sleep</span>
                                <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Mental clarity</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Creativity</span>
                                <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Brain energy</span>
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="space-y-4">
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Customize your brain's potential with the only guided brain photobiomodulation system that can target various brain networks.
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Follow 9 powerful preset protocols from the Neuro Pro App to maximize your mental wellness and performance, or create your own.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
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
                                className="border border-gray-600 text-gray-300 px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Features Box */}
                        <div className='pt-6 lg:pt-15'>
                            <div className="border border-gray-600 rounded-xl p-4">
                                <div className="space-y-4 lg:space-y-6">
                                    <div className="flex items-start space-x-3 lg:space-x-4">
                                        <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center mt-0.5">
                                            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                            Powerful Vie-LED modules spanning all important brain networks
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3 lg:space-x-4">
                                        <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center mt-0.5">
                                            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                            400 mW/cm2 irradiance, industry-leading for maximal penetration
                                        </p>
                                    </div>

                                    <div className="flex items-start space-x-3 lg:space-x-4">
                                        <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center mt-0.5">
                                            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                            Includes 9 powerful protocols with the Neuro Pro App
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT HERO IMAGE SECTION */}
                    <div className="hero-image-section flex flex-col items-center lg:items-end space-y-4 order-1 lg:order-2">
                        {/* Main Hero Image */}
                        <div className="w-full max-w-md sm:max-w-lg lg:w-[580px] lg:h-[595px] aspect-square lg:aspect-auto bg-gray-200 rounded-2xl lg:rounded-3xl overflow-hidden">
                            <Image
                                src="/neuro-pro-2-main.png"
                                alt="Vielight Neuro Pro 2"
                                width={605}
                                height={623}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>

                        {/* Small Images Grid - FIXED FOR MOBILE */}
                        <div className="grid grid-cols-4 gap-1 sm:gap-2 w-full max-w-md sm:max-w-lg lg:gap-2 lg:pr-10 lg:w-fit">
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} className="aspect-square w-full h-auto lg:w-[100px] lg:h-[129px] lg:aspect-auto bg-gray-200 rounded-lg overflow-hidden">
                                    <Image
                                        src={`/neuro-pro-2-angle${num}.png`}
                                        alt={`Neuro Pro 2 View ${num}`}
                                        width={139}
                                        height={129}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeuroPro2Section;
// // export default NeuroPro2Section;
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { MoveRight } from 'lucide-react';

// const NeuroPro2Section: React.FC = () => {
//     return (
//         <div className="min-h-screen bg-black text-white py-8 lg:py-14">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 {/* Main Content and Hero Image Section */}
//                 <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-4">

//                     {/* LEFT CONTENT SECTION */}
//                     <div className="content-section space-y-4 lg:space-y-6 order-2 lg:order-1">
//                         {/* Just Launched Badge */}
//                         <div className="inline-flex items-center gap-2 lg:gap-3 px-1 py-1 pr-3 border border-red-500 rounded-2xl w-fit">
//                             <span className="text-red-500 border border-red-500 px-2 lg:px-2.5 py-1 rounded-xl text-xs font-bold">New!</span>
//                             <span className="text-red-500 text-sm font-medium">Just Launched</span>
//                             <MoveRight className="text-red-500 w-4 h-4" />
//                         </div>

//                         {/* Main Heading */}
//                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
//                             Introducing the<br />
//                             Vielight Neuro Pro 2
//                         </h2>

//                         {/* Feature Tags */}
//                         <div className="space-y-2">
//                             <div className="flex flex-wrap gap-2">
//                                 <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Focus</span>
//                                 <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Stress</span>
//                                 <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Memory</span>
//                                 <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Sleep</span>
//                                 <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Mental clarity</span>
//                             </div>
//                             <div className="flex flex-wrap gap-2">
//                                 <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Creativity</span>
//                                 <span className="px-3 lg:px-4 py-2 border border-gray-600 rounded-full text-sm text-gray-300">Brain energy</span>
//                             </div>
//                         </div>

//                         {/* Description Text */}
//                         <div className="space-y-4">
//                             <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//                                 Customize your brain's potential with the only guided brain photobiomodulation system that can target various brain networks.
//                             </p>
//                             <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//                                 Follow 9 powerful preset protocols from the Neuro Pro App to maximize your mental wellness and performance, or create your own.
//                             </p>
//                         </div>

//                         {/* CTA Buttons */}
//                         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
//                             <Link
//                                 href="/shop"
//                                 className="bg-[#EA1934] text-white px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
//                             >
//                                 <span>Shop Now</span>
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </Link>
//                             <Link
//                                 href="/about"
//                                 className="border border-gray-600 text-gray-300 px-6 lg:px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center"
//                             >
//                                 Learn More
//                             </Link>
//                         </div>

//                         {/* Features Box */}
//                         <div className='pt-6 lg:pt-15'>
//                             <div className="border border-gray-600 rounded-xl p-4">
//                                 <div className="space-y-4 lg:space-y-6">
//                                     <div className="flex items-start space-x-3 lg:space-x-4">
//                                         <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center mt-0.5">
//                                             <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                                             </svg>
//                                         </div>
//                                         <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
//                                             Powerful Vie-LED modules spanning all important brain networks
//                                         </p>
//                                     </div>

//                                     <div className="flex items-start space-x-3 lg:space-x-4">
//                                         <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center mt-0.5">
//                                             <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                                             </svg>
//                                         </div>
//                                         <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
//                                             400 mW/cm2 irradiance, industry-leading for maximal penetration
//                                         </p>
//                                     </div>

//                                     <div className="flex items-start space-x-3 lg:space-x-4">
//                                         <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center mt-0.5">
//                                             <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                                             </svg>
//                                         </div>
//                                         <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
//                                             Includes 9 powerful protocols with the Neuro Pro App
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT HERO IMAGE SECTION - Desktop unchanged */}
//                     <div className="hero-image-section flex flex-col items-center lg:items-end space-y-4 order-1 lg:order-2">
//                         {/* Main Hero Image */}
//                         <div className="w-full max-w-md sm:max-w-lg lg:w-[580px] lg:h-[595px] aspect-square lg:aspect-auto bg-gray-200 rounded-2xl lg:rounded-3xl overflow-hidden">
//                             <Image
//                                 src="/neuro-pro-2-main.png"
//                                 alt="Vielight Neuro Pro 2"
//                                 width={605}
//                                 height={623}
//                                 className="w-full h-full object-cover"
//                                 priority
//                             />
//                         </div>

//                         {/* Small Images Grid */}
//                         <div className="grid grid-cols-4 lg:grid-cols-4 lg:pr-10  gap-1 sm:gap-2 w-full max-w-md sm:max-w-lg lg:w-fit">
//                             {[1, 2, 3, 4].map((num) => (
//                                 <div key={num} className="aspect-square w-[139px] h-[129px] lg:w-[100px] lg:h-[129px] lg:aspect-auto bg-gray-200 rounded-lg overflow-hidden">
//                                     <Image
//                                         src={`/neuro-pro-2-angle${num}.png`}
//                                         alt={`Neuro Pro 2 View ${num}`}
//                                         width={139}
//                                         height={129}
//                                         className="w-full h-full object-cover "
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NeuroPro2Section;