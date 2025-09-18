// import React from 'react';
// import Image from 'next/image';

// const InnovativeBrainSolutionsSection: React.FC = () => {
//     return (
//         <div className="relative min-h-screen overflow-hidden">
//             {/* Background Image - Positioned at top and rotated */}
//             <div className="absolute top-0 left-0 w-full h-[652px] overflow-hidden">
//                 <div 
//                     className="absolute w-[1669px] h-[652px] -left-[114px]"
//                     // style={{ transform: 'rotate(180deg)' }}
//                 >
//                     <Image
//                         src="/brain-device-woman.png"
//                         alt="Woman with brain device"
//                         fill
//                         className="object-cover"
//                         priority
//                     />
//                 </div>
//             </div>

//             {/* Push content down to appear below the image */}
//             <div className="relative z-10 mt-[620px]">
//                 <div className="bg-[#EA1934] w-full">
//                     <div className="max-w-7xl mx-auto px-8 py-16">
//                         <div className="grid lg:grid-cols-2 gap-20 items-center">
                            
//                             {/* Left Column - Heading */}
//                             <div>
//                                 <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9]">
//                                     Innovative Brain<br />
//                                     Solutions
//                                 </h2>
//                             </div>

//                             {/* Right Column - Description */}
//                             <div>
//                                 <p className="text-white text-lg lg:text-xl leading-relaxed">
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
                {/* Desktop Background - UNCHANGED */}
                <div className="hidden lg:block h-[652px] overflow-hidden">
                    <div className="absolute w-[1669px] h-[652px] -left-[114px]">
                        <Image
                            src="/brain-device-woman.png"
                            alt="Woman with brain device"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Mobile/Tablet Background - Compact and Responsive */}
                <div className="block lg:hidden relative">
                    <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full overflow-hidden">
                        <Image
                            src="/brain-device-woman.png"
                            alt="Woman with brain device"
                            fill
                            className="object-cover"
                            style={{ 
                                objectPosition: '50% 20%' // Better positioning for mobile
                            }}
                            priority
                        />
                        {/* Gradient overlay for better text readability on mobile */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-[#EA1934] w-full relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
                        
                        {/* Left Column - Heading */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight lg:leading-[0.9]">
                                <span className="block">Innovative Brain</span>
                                <span className="block">Solutions</span>
                            </h2>
                        </div>

                        {/* Right Column - Description */}
                        <div className="text-center lg:text-left">
                            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                At PBMDistributors, we are dedicated to enhancing brain health through cutting-edge photobiomodulation technology. Flagship products include the Vielight Neuro Alpha and Gamma, designed to support cognitive function and overall wellness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovativeBrainSolutionsSection;