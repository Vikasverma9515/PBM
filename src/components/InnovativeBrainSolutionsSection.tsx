// import React from 'react';
// import Image from 'next/image';

// const InnovativeBrainSolutionsSection: React.FC = () => {
//     return (
//         <div className="relative overflow-hidden bg-white">
//             {/* Background Image Section */}
//             <div className="relative">
//                 {/* Desktop Background - FIXED for responsive behavior */}
//                 <div className="hidden lg:block h-[652px] overflow-hidden">
//                     <div className="relative w-full h-full">
//                         <Image
//                             src="/brain-device-woman.png"
//                             alt="Woman with brain device"
//                             fill
//                             className="object-cover"
//                             style={{ 
//                                 objectPosition: '20% center',
//                                 transform: 'scale(1.2)'
//                             }}
//                             priority
//                         />
//                     </div>
//                 </div>

//                 {/* Mobile/Tablet Background - UNCHANGED */}
//                 <div className="block lg:hidden relative">
//                     <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full overflow-hidden">
//                         <Image
//                             src="/brain-device-woman.png"
//                             alt="Woman with brain device"
//                             fill
//                             className="object-cover"
//                             style={{ 
//                                 objectPosition: '50% 20%'
//                             }}
//                             priority
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Content Section - FIXED for better alignment */}
//             <div className="bg-[#EA1934] w-full relative">
//                 <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
//                     <div className="max-w-[1600px] mx-auto">
//                         <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
                            
//                             {/* Left Column - Heading */}
//                             <div className="text-center lg:text-left">
//                                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-white leading-tight lg:leading-[0.9] xl:leading-[0.85]">
//                                     <span className="block">Innovative Brain</span>
//                                     <span className="block">Solutions</span>
//                                 </h2>
//                             </div>

//                             {/* Right Column - Description */}
//                             <div className="text-center lg:text-left">
//                                 <p className="text-white text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl 3xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-loose max-w-2xl mx-auto lg:mx-0">
//                                     At PBMDistributors, we are dedicated to enhancing brain health through cutting-edge photobiomodulation technology. Flagship products include the Vielight Neuro Alpha and Gamma, designed to support cognitive function and overall wellness.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InnovativeBrainSolutionsSection;

import React from 'react';
import Image from 'next/image';

const InnovativeBrainSolutionsSection: React.FC = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            {/* Background Image Section */}
            <div className="relative">
                {/* Desktop Background - FIXED for centered positioning */}
                <div className="hidden lg:block h-[652px] overflow-hidden">
                    <div className="relative w-full h-full">
                        <Image
                            src="/brain-device-woman.png"
                            alt="Woman with brain device"
                            fill
                            className="object-cover"
                            style={{ 
                                objectPosition: 'center center',
                                transform: 'scale(1.1)'
                            }}
                            priority
                        />
                    </div>
                </div>

                {/* Mobile/Tablet Background - UPDATED for better centering */}
                <div className="block lg:hidden relative">
                    <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full overflow-hidden">
                        <Image
                            src="/brain-device-woman.png"
                            alt="Woman with brain device"
                            fill
                            className="object-cover"
                            style={{ 
                                objectPosition: 'center center'
                            }}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Content Section - UNCHANGED */}
            <div className="bg-[#EA1934] w-full relative">
                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
                            
                            {/* Left Column - Heading */}
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold text-white leading-tight lg:leading-[0.9] xl:leading-[0.85]">
                                    <span className="block">Innovative Brain</span>
                                    <span className="block">Solutions</span>
                                </h2>
                            </div>

                            {/* Right Column - Description */}
                            <div className="text-center lg:text-left">
                                <p className="text-white text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-xl 3xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-loose max-w-2xl mx-auto lg:mx-0">
                                    At PBMDistributors, we are dedicated to enhancing brain health through cutting-edge photobiomodulation technology. Flagship products include the Vielight Neuro Alpha and Gamma, designed to support cognitive function and overall wellness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovativeBrainSolutionsSection;