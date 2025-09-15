import React from 'react';

const EnhancingBrainHealthSection: React.FC = () => {
    return (
        <div className="w-full">
            {/* First Section - Enhancing Brain Health */}
            {/* width: 1440px, height: 414px, gap: 80px, with section padding */}
            <div className="w-full h-[414px] bg-white">
                <div className="max-w-[1440px] mx-auto px-8 py-16 h-full">
                    <div className="grid lg:grid-cols-2 gap-20 items-center h-full">
                        
                        {/* Left Column - Main Heading */}
                        <div className="flex items-center pl-15">
                            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                                Enhancing Brain Health with<br />
                                Photobiomodulation
                            </h3>
                        </div>

                        {/* Right Column - Description Text */}
                        <div className="flex items-center">
                            <div className="space-y-6">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    We are dedicated to improving cognitive abilities and supporting overall health with innovative Vielight photobiomodulation devices at PBMDistributors.
                                </p>
                                
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    We aspire to create a future where innovative technology significantly boosts mental health for all. Our commitment to innovation, integrity, and customer satisfaction motivates us to provide outstanding products and support to our community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section - Published Research */}
            {/* width: 1440px, height: 465px, background: #FFF2F4, left: 2px */}
            <div className="w-full h-[465px] bg-[#FFF2F4] ml-[2px]">
                <div className="max-w-[1440px] mx-auto px-8 py-16 h-full">
                    <div className="flex flex-col justify-center h-full space-y-12">
                        
                        {/* Section Title */}
                        <div className="text-center">
                            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-12">
                                Published research with Vielight Technology
                            </h2>
                        </div>

                        {/* Research Tags Grid */}
                        <div className="space-y-6">
                            {/* First Row */}
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Alzheimer's (Dementia)
                                </span>
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Immunity
                                </span>
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Parkinson's
                                </span>
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Autism
                                </span>
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Long Covid
                                </span>
                            </div>

                            {/* Second Row */}
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Neuromodulation
                                </span>
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Upper respiratory viral recovery
                                </span>
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Traumatic brain injury
                                </span>
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    PTSD
                                </span>
                            </div>

                            {/* Third Row */}
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Cognitive creativity
                                </span>
                                <span className="px-6 py-3 border-2 border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition-colors">
                                    Cellular enhancement
                                </span>
                                
                                {/* View All Research Button */}
                                <button className="px-8 py-3 bg-[#EA1934] text-white rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center space-x-2">
                                    <span>View all research</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnhancingBrainHealthSection;