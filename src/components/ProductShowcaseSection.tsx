import React from 'react';
import Image from 'next/image';

const ProductShowcaseSection: React.FC = () => {
    return (
        <div className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-8">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                        Product Showcase
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Discover the future of brain health and wellness.
                    </p>
                </div>

                {/* Product Images Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    
                    {/* Product Image 1 */}
                    <div className="group cursor-pointer">
                        <div className="relative w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
                            <Image
                                src="/product-showcase-1.png"
                                alt="Person using brain health device at home"
                                fill
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Product Image 2 */}
                    <div className="group cursor-pointer">
                        <div className="relative w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
                            <Image
                                src="/product-showcase-2.png"
                                alt="Woman using Vielight brain device while relaxing"
                                fill
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Product Image 3 */}
                    <div className="group cursor-pointer">
                        <div className="relative w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
                            <Image
                                src="/product-showcase-3.png"
                                alt="Professional using brain health device while working"
                                fill
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcaseSection;