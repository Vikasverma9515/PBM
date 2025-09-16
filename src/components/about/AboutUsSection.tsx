// import React from 'react';
// import Image from 'next/image';
// import { ShoppingCart, User } from 'lucide-react';

// const AboutUsSection: React.FC = () => {
//     return (
//         <div className="w-full relative">
//             {/* Top Section - About Us Header */}
//             <div className="relative w-full bg-gray-50" style={{ height: '400px' }}>
//                 <nav className="flex items-center justify-between px-30 py-6">
//                     {/* Logo */}
//                     <div className="flex items-center">
//                         <Image
//                             src="/logo1.png"
//                             alt="PBM Distributors"
//                             width={120}
//                             height={60}
//                             className="h-15 w-auto"
//                         />
//                     </div>

//                     {/* Navigation Links */}
//                     <div className="hidden md:flex items-center space-x-10">
//                         <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
//                         <a href="#shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</a>
//                         <a href="#videos" className="text-gray-700 hover:text-gray-900 font-medium">Videos</a>
//                         <a href="#research" className="text-gray-700 hover:text-gray-900 font-medium">Research</a>
//                         <a href="#faqs" className="text-gray-700 hover:text-gray-900 font-medium">FAQs</a>
//                         <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
//                     </div>

//                     {/* Cart and Login Buttons */}
//                     <div className="flex items-center space-x-4">
//                         <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors bg-white/80 backdrop-blur-sm">
//                             <ShoppingCart className="w-4 h-4" />
//                             <span className="text-sm font-medium">Cart</span>
//                         </button>
//                         <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
//                             <User className="w-4 h-4" />
//                             <span className="text-sm font-medium">Login</span>
//                         </button>
//                     </div>
//                 </nav>
                
//                 {/* About Us Content */}
//                 {/* width: 768px, height: 128px, max-width: 768px, top: 235px, left: 338px, gap: 12px */}
//                 <div 
//                     className="absolute w-[768px] h-[128px] max-w-[768px]"
//                     style={{ 
//                         top: '235px', 
//                         left: '338px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: '12px',
//                         textAlign: 'center'
//                     }}
//                 >
//                     <h1 className="text-6xl font-bold text-[#EA1934]">
//                         About Us
//                     </h1>
//                     <p className="text-gray-700 text-lg leading-relaxed pb-10">
//                         Canada's trusted partner for scientifically-proven photobiomodulation technology, serving health-conscious Canadians
//                     </p>
//                 </div>

//                 {/* Canadian Maple Leaf - Exact positioning from Figma */}
//                 <div 
//                     className="absolute"
//                     style={{
//                         top: '190px',
//                         right: '70px',
//                         width: '230px',
//                         height: '230px'
//                     }}
//                 >
//                     <Image
//                         src="/canadian-maple-leaf.png"
//                         alt="Canadian Maple Leaf"
//                         width={120}
//                         height={120}
//                         className="w-full h-full object-contain"
//                     />
//                 </div>
//             </div>

//             {/* Bottom Section - Our Story & Mission */}
//             {/* Our mission: width: 1440px, height: 571px, top: 418px */}
//             <div 
//                 className="w-full bg-[#EA1934] relative"
//                 style={{ height: '571px' }}
//             >
//                 {/* Our mission content: width: 1200px, height: 405px, max-width: 1280px, top: 501px, left: 120px, gap: 80px */}
//                 <div 
//                     className="absolute w-[1200px] h-[405px] max-w-[1280px]"
//                     style={{ 
//                         top: '83px', // 501px - 418px = 83px relative to container
//                         left: '120px'
//                     }}
//                 >
//                     <div 
//                         className="grid grid-cols-2 h-full items-center"
//                         style={{ gap: '80px' }}
//                     >
                        
//                         {/* Left Column - Our Story & Mission Title */}
//                         <div>
//                             <h2 className="text-6xl font-bold text-white leading-tight">
//                                 Our Story &<br />
//                                 Mission
//                             </h2>
//                         </div>

//                         {/* Right Column - Mission Content */}
//                         <div className="space-y-8">
//                             <p className="text-white text-lg leading-relaxed">
//                                 Founded in 2019 in Vancouver, BC, PBM Distributors emerged from a simple mission: to make scientifically-proven brain enhancement technology accessible to all Canadians.
//                             </p>
                            
//                             <p className="text-white text-lg leading-relaxed">
//                                 As the authorized Canadian distributor for Vielight's revolutionary photobiomodulation devices, we bridge the gap between cutting-edge neuroscience research and everyday wellness. Our founders recognized that while breakthrough brain health technology existed, Canadians needed local expertise, support, and guidance to unlock its full potential.
//                             </p>
                            
//                             <p className="text-white text-lg leading-relaxed">
//                                 Today, we're proud to have helped many Canadians enhance their cognitive performance, from busy professionals in Toronto to retired teachers in Halifax, from concussion recovery patients to biohacking enthusiasts.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutUsSection;


import React from 'react';
import Image from 'next/image';
import { ShoppingCart, User } from 'lucide-react';

const AboutUsSection: React.FC = () => {
    return (
        <div className="w-full relative">
            {/* Top Section - About Us Header */}
            <div className="relative w-full bg-gray-50" style={{ height: '400px' }}>
                <nav className="flex items-center justify-between px-30 py-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/logo1.png"
                            alt="PBM Distributors"
                            width={120}
                            height={60}
                            className="h-15 w-auto"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-10">
                        <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
                        <a href="#shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</a>
                        <a href="#videos" className="text-gray-700 hover:text-gray-900 font-medium">Videos</a>
                        <a href="#research" className="text-gray-700 hover:text-gray-900 font-medium">Research</a>
                        <a href="#faqs" className="text-gray-700 hover:text-gray-900 font-medium">FAQs</a>
                        <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
                    </div>

                    {/* Cart and Login Buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors bg-white/80 backdrop-blur-sm">
                            <ShoppingCart className="w-4 h-4" />
                            <span className="text-sm font-medium">Cart</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                            <User className="w-4 h-4" />
                            <span className="text-sm font-medium">Login</span>
                        </button>
                    </div>
                </nav>
                
                {/* About Us Content */}
                <div 
                    className="absolute w-[768px] h-[128px] max-w-[768px]"
                    style={{ 
                        top: '235px', 
                        left: '338px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        textAlign: 'center'
                    }}
                >
                    <h1 className="text-6xl font-bold text-[#EA1934]">
                        About Us
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed pb-10">
                        Canada's trusted partner for scientifically-proven photobiomodulation technology, serving health-conscious Canadians
                    </p>
                </div>

                {/* Canadian Maple Leaf - Exact positioning from Figma */}
                <div 
                    className="absolute"
                    style={{
                        top: '190px',
                        right: '70px',
                        width: '230px',
                        height: '230px'
                    }}
                >
                    <Image
                        src="/canadian-maple-leaf.png"
                        alt="Canadian Maple Leaf"
                        width={120}
                        height={120}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* Middle Section - Our Story & Mission */}
            <div 
                className="w-full bg-[#EA1934] relative"
                style={{ height: '571px' }}
            >
                <div 
                    className="absolute w-[1200px] h-[405px] max-w-[1280px]"
                    style={{ 
                        top: '83px',
                        left: '120px'
                    }}
                >
                    <div 
                        className="grid grid-cols-2 h-full items-center"
                        style={{ gap: '80px' }}
                    >
                        {/* Left Column - Our Story & Mission Title */}
                        <div>
                            <h2 className="text-6xl font-bold text-white leading-tight">
                                Our Story &<br />
                                Mission
                            </h2>
                        </div>

                        {/* Right Column - Mission Content */}
                        <div className="space-y-8">
                            <p className="text-white text-lg leading-relaxed">
                                Founded in 2019 in Vancouver, BC, PBM Distributors emerged from a simple mission: to make scientifically-proven brain enhancement technology accessible to all Canadians.
                            </p>
                            
                            <p className="text-white text-lg leading-relaxed">
                                As the authorized Canadian distributor for Vielight's revolutionary photobiomodulation devices, we bridge the gap between cutting-edge neuroscience research and everyday wellness. Our founders recognized that while breakthrough brain health technology existed, Canadians needed local expertise, support, and guidance to unlock its full potential.
                            </p>
                            
                            <p className="text-white text-lg leading-relaxed">
                                Today, we're proud to have helped many Canadians enhance their cognitive performance, from busy professionals in Toronto to retired teachers in Halifax, from concussion recovery patients to biohacking enthusiasts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vielight Partnership Section */}
            <div className="w-full bg-white py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left Column - Vielight Logo and Title */}
                        <div className="space-y-8">
                            {/* Vielight Logo: width: 207px, height: 83px */}
                            <div className="mb-8">
                                <Image
                                    src="/vielight-logo.png"
                                    alt="Vielight Logo"
                                    width={207}
                                    height={83}
                                    className="w-[207px] h-[83px] object-contain"
                                />
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                                Why We Partner<br />
                                with Vielight
                            </h2>
                        </div>

                        {/* Right Column - Partnership Content */}
                        <div className="space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                After extensive research into photobiomodulation technologies, we chose Vielight as our exclusive partner because of their uncompromising commitment to science and safety.
                            </p>
                            
                            <p className="text-gray-700 text-lg leading-relaxed">
                                With over <span className="font-semibold">15 years of research</span>, <span className="font-semibold">500+ clinical trial participants</span>, and recognition from institutions like the U.S. Veterans Administration, Vielight represents the gold standard in home-use brain enhancement technology.
                            </p>
                            
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Their devices are the only consumer photobiomodulation products with both Health Canada approval and extensive peer-reviewed research backing – giving our customers confidence in both safety and efficacy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaf Transition Section */}
            <div className="relative w-full h-32 bg-white">
                <div className="absolute -bottom-[30px] left-32 transform translate-y-16">
                    <Image
                        src="/canadian-maple-leaf.png"
                        alt="Canadian Maple Leaf"
                        width={120}
                        height={120}
                        className="w-[180px] h-[180px] object-contain"
                    />
                </div>
            </div>

            {/* Our Core Values Section */}
            <div className="w-full bg-[#171717] text-white py-20">
                {/* Our Core Values Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                        Our Core Values
                    </h2>
                    <p className="text-gray-300 text-lg">
                        The principles that guide everything we do
                    </p>
                </div>

                {/* Core Values Content */}
                {/* width: 1216px, height: 420px, gap: 32px */}
                <div className="w-[1216px] mx-auto px-4">
                    <div className="grid grid-cols-3 gap-8">
                        
                        {/* Science First */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-[#EA1934] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Science First</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                We only recommend technologies backed by rigorous peer-reviewed research and clinical validation. No marketing hype, just proven science.
                            </p>
                        </div>

                        {/* Canadian Pride */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-[#EA1934] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Canadian Pride</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                As a proudly Canadian company, we understand the unique needs of our customers and provide local support, warranty, and expertise.
                            </p>
                        </div>

                        {/* Personal Service */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-[#EA1934] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Personal Service</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                Every customer receives individualized attention. We're not just selling devices; we're partnering with you on your wellness journey.
                            </p>
                        </div>

                        {/* Results Focused */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-[#EA1934] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Results Focused</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                Your success is our success. We provide ongoing support, usage guidance, and optimization strategies to ensure you achieve your goals.
                            </p>
                        </div>

                        {/* Trust & Transparency */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-[#EA1934] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Trust & Transparency</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                Clear pricing, honest communication, and transparent policies. We build lasting relationships based on trust and mutual respect.
                            </p>
                        </div>

                        {/* Continuous Learning */}
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-[#EA1934] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Continuous Learning</h3>
                            <p className="text-gray-300 text-base leading-relaxed">
                                We stay current with the latest research and innovations, constantly improving our knowledge to better serve our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* The Canadian Advantage Section */}
            <div className="w-full bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        
                        {/* Left Column - Content */}
                        <div className="space-y-8">
                            {/* Small Label */}
                            <p className="text-gray-600 text-lg font-medium">Why choose us?</p>
                            
                            {/* Main Heading */}
                            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                                The <span className="text-[#EA1934]">Canadian</span> Advantage
                            </h2>
                            
                            {/* Description */}
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                When you choose PBM Distributors, you're not just buying a device – you're investing in a comprehensive Canadian support ecosystem.
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1 gap-8">
                                {/* Row 1 */}
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-3">Local Expertise</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            Our Vancouver-based team understands Canadian regulations, shipping, and customer needs.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-3">Full Warranty Support</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            Complete Canadian warranty coverage through our authorized service network.
                                        </p>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-3">No Surprises</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            Canadian pricing, proper tax calculations, and no hidden border fees.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-3">Professional Network</h3>
                                        <p className="text-gray-600 text-base leading-relaxed">
                                            Connected with naturopaths, chiropractors, and neurologists experienced with PBM therapy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Canadian Flag Image */}
                        <div className="relative">
                            <div className="w-full h-[650px] rounded-3xl overflow-hidden">
                                <Image
                                    src="/canadian-flag-mountains.jpg"
                                    alt="Canadian flag with mountains backdrop"
                                    fill
                                    className="object-cover h-[400px] w-[200px] rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;