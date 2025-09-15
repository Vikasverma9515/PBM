import React from 'react';
import Image from 'next/image';

const VielightBenefitsSection: React.FC = () => {
    return (
        <div className="relative min-h-[650px] overflow-hidden">
            
            {/* Background Image Layer */}
            {/* width: 1694px, height: 557px, top: 35px */}
            <div className="absolute w-[1694px] h-[557px] top-[100px] left-0 z-0">
                <Image
                    src="/vielight-benefits-background.jpg"
                    alt="Vielight benefits background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Red overlay for the background effect */}
                <div className="absolute inset-0 bg-red-600/80"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[592px]">
                    
                    {/* Left Side - Player Image */}
                    {/* width: 909px, height: 592px, left: 71px */}
                    <div className="relative">
                        <div 
                            className="w-[909px] h-[592px] -ml-[50px] relative z-20"
                        >
                            <Image
                                src="/hockey-player-vielight.png"
                                alt="Hockey player wearing Vielight device"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side - Written Content */}
                    {/* width: 616px, height: 403px, left: 744px, gap: 32px */}
                    <div className="w-[616px] h-[403px] space-y-8 relative z-20">
                        
                        {/* Main Title */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                            Vielight benefits
                        </h2>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 gap-6">
                            
                            {/* First Row - 2 columns */}
                            <div className="grid grid-cols-2 gap-8">
                                {/* Improved Focus */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-lg font-medium">Improved Focus</span>
                                </div>

                                {/* Better Memory */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-lg font-medium">Better Memory</span>
                                </div>
                            </div>

                            {/* Second Row - 2 columns */}
                            <div className="grid grid-cols-2 gap-8">
                                {/* Mental Clarity */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-lg font-medium">Mental Clarity</span>
                                </div>

                                {/* Better Sleep */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-lg font-medium">Better Sleep</span>
                                </div>
                            </div>

                            {/* Third Row - 2 columns */}
                            <div className="grid grid-cols-2 gap-8">
                                {/* Improved Immunity */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-lg font-medium">Improved Immunity</span>
                                </div>

                                {/* Mood Enhancements */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 015 0H17M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-lg font-medium">Mood Enhancements</span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Text */}
                        <div className="mt-8">
                            <p className="text-white text-lg leading-relaxed">
                                Watch what <span className="font-bold">Tim Thomas</span> NHL 4 x All Star, Stanley Cup Champion has to say on Vielight and Cognition
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center space-x-4 mt-8">
                            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                See Video
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VielightBenefitsSection;