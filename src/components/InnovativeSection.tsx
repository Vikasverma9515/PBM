import React from 'react';
import Image from 'next/image';

const InnovativeSection: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-gray-100 overflow-hidden">
            {/* Background Image - Full width extending beyond container */}
            <div className="absolute inset-0 w-[1448px] h-[814px] -left-1">
                <Image
                    src="/brain-technology-image.png"
                    alt="Revolutionizing Brain Health Technology"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 pt-0 min-h-screen flex items-center">
                {/* Text Content with exact positioning */}
                {/* <div
                    className="w-[600px] h-[492px] flex flex-col justify-center space-y-8"
                    style={{
                        marginLeft: '725px',
                        marginTop: '165px'
                    }}
                > */}
                <div
                    className="w-[600px] h-[492px] flex flex-col justify-center space-y-8"
                    style={{ marginLeft: '760px', marginTop: '10px' }}
                >


                    {/* Small Label */}
                    <div>
                        <span className="text-gray-700 text-sm font-medium tracking-wide">Innovative Solution</span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-5xl font-bold text-black leading-[1.1]">
                        Revolutionizing Brain<br />
                        Health with Technology
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                        At PBMDistributors, we focus on re-selling Vielight products, which are designed to improve cognitive function and promote overall wellness through innovative technology.
                    </p>

                    {/* Two Column Features */}
                    <div className="grid grid-cols-2 gap-12">
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
                    <div className="flex items-center space-x-4 pt-6">
                        <button className="bg-[#EA1934] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors flex items-center space-x-2">
                            <span>Shop Now</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnovativeSection;