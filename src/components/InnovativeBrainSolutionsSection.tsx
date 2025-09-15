import React from 'react';
import Image from 'next/image';

const InnovativeBrainSolutionsSection: React.FC = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image - Positioned at top and rotated */}
            <div className="absolute top-0 left-0 w-full h-[652px] overflow-hidden">
                <div 
                    className="absolute w-[1669px] h-[652px] -left-[114px]"
                    // style={{ transform: 'rotate(180deg)' }}
                >
                    <Image
                        src="/brain-device-woman.png"
                        alt="Woman with brain device"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Push content down to appear below the image */}
            <div className="relative z-10 mt-[620px]">
                <div className="bg-[#EA1934] w-full">
                    <div className="max-w-7xl mx-auto px-8 py-16">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            
                            {/* Left Column - Heading */}
                            <div>
                                <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9]">
                                    Innovative Brain<br />
                                    Solutions
                                </h2>
                            </div>

                            {/* Right Column - Description */}
                            <div>
                                <p className="text-white text-lg lg:text-xl leading-relaxed">
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