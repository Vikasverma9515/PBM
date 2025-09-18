
// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { ShoppingCart, User, Minus, Plus, ArrowRight, Play, ChevronDown, ChevronUp } from 'lucide-react';

// const ProductDetailSection: React.FC = () => {
//     const [quantity, setQuantity] = useState(1);
//     const [selectedImage, setSelectedImage] = useState(0);
//     const [activeTab, setActiveTab] = useState('general');
//     const [expandedSection, setExpandedSection] = useState<string | null>('whats-in-box');

//     const productImages = [
//         '/neuro-pro-2-main.jpg',
//         '/neuro-pro-2-angle1.jpg',
//         '/neuro-pro-2-angle2.jpg',
//         '/neuro-pro-2-angle3.jpg',
//         '/neuro-pro-2-angle4.jpg'
//     ];

//     const handleQuantityChange = (action: 'increment' | 'decrement') => {
//         if (action === 'increment') {
//             setQuantity(prev => prev + 1);
//         } else if (action === 'decrement' && quantity > 1) {
//             setQuantity(prev => prev - 1);
//         }
//     };

//     const toggleSection = (section: string) => {
//         setExpandedSection(expandedSection === section ? null : section);
//     };

//     return (
//         <div className="w-full bg-gray-50 min-h-screen">


//             {/* Product Detail Section */}
//             <div className="max-w-7xl mx-auto px-8 py-16">
//                 <div className="grid lg:grid-cols-2 gap-16">

//                     {/* Left Column - Product Images */}
//                     <div className="flex gap-6">
//                         {/* Thumbnail Images */}
//                         <div className="flex flex-col space-y-4">
//                             {productImages.map((image, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setSelectedImage(index)}
//                                     className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
//                                         selectedImage === index ? 'border-[#EA1934]' : 'border-gray-200'
//                                     }`}
//                                 >
//                                     <Image
//                                         src={image}
//                                         alt={`Neuro Pro 2 view ${index + 1}`}
//                                         width={80}
//                                         height={80}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </button>
//                             ))}
//                         </div>

//                         {/* Main Product Image */}
//                         <div className="flex-1 bg-white rounded-2xl p-8 shadow-sm">
//                             <div className="relative w-full h-[500px]">
//                                 <Image
//                                     src={productImages[selectedImage]}
//                                     alt="Vielight Neuro Pro 2"
//                                     fill
//                                     className="object-contain"
//                                     priority
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Column - Product Info */}
//                     <div className="space-y-8">

//                         {/* Rating and Reviews */}
//                         <div className="flex items-center space-x-3">
//                             <div className="flex items-center gap-0">
//                                 {[...Array(4)].map((_, i) => (
//                                     <div key={i} className="w-5 h-5 bg-[#EA1934] flex items-center justify-center">
//                                         <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
//                                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                                         </svg>
//                                     </div>
//                                 ))}
//                                 <div className="w-5 h-5 bg-gray-300 flex items-center justify-center relative">
//                                     <div className="absolute left-0 top-0 w-2.5 h-5 bg-[#EA1934] flex items-center justify-center overflow-hidden">
//                                         <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
//                                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                                         </svg>
//                                     </div>
//                                     <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
//                                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                                     </svg>
//                                 </div>
//                             </div>
//                             <span className="text-gray-600 font-semibold">4.8/5 Rating | +100,000 devices sold worldwide</span>
//                         </div>

//                         {/* Product Title and Price */}
//                         <div className="space-y-4">
//                             <h1 className="text-4xl font-bold text-black">Vielight Neuro Pro 2</h1>
//                             <p className="text-3xl font-bold text-black">$5,000</p>
//                         </div>

//                         {/* Product Description */}
//                         <div className="space-y-4">
//                             <p className="text-gray-700 text-lg leading-relaxed">
//                                 The Neuro Pro 2 is <span className="font-semibold">the world's most customizable and powerful brain photobiomodulation device.</span> Featuring 12 adjustable modules and a comprehensive smartphone app, it allows you to precisely target different brain networks or the entire brain for optimal cognitive results.
//                             </p>
//                         </div>

//                         {/* Quantity and Add to Cart */}
//                         <div className="flex items-center space-x-4">
//                             {/* Quantity Selector */}
//                             <div className="flex items-center border border-gray-300 rounded-full">
//                                 <button
//                                     onClick={() => handleQuantityChange('decrement')}
//                                     className="p-3 hover:bg-gray-50 rounded-l-full transition-colors"
//                                 >
//                                     <Minus className="w-4 h-4" />
//                                 </button>
//                                 <span className="px-6 py-3 font-medium">{quantity}</span>
//                                 <button
//                                     onClick={() => handleQuantityChange('increment')}
//                                     className="p-3 hover:bg-gray-50 rounded-r-full transition-colors"
//                                 >
//                                     <Plus className="w-4 h-4" />
//                                 </button>
//                             </div>

//                             {/* Add to Cart Button */}
//                             <button className="bg-[#4285F4] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
//                                 Add to cart
//                             </button>

//                             {/* See Research Button */}
//                             <button className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors flex items-center space-x-2">
//                                 <span>See research</span>
//                                 <ArrowRight className="w-4 h-4" />
//                             </button>
//                         </div>

//                         {/* HSA/FSA Payment */}
//                         <div className="border border-gray-300 rounded-full px-6 py-3 w-fit">
//                             <span className="text-gray-700 font-medium">Pay with HSA or FSA.</span>
//                         </div>

//                         {/* Features */}
//                         <div className="grid grid-cols-1 gap-6 py-6">
//                             <div className="flex items-center space-x-4">
//                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                                     </svg>
//                                 </div>
//                                 <h4 className="font-semibold text-black text-sm">Medical grade technology</h4>
//                             </div>

//                             <div className="flex items-center space-x-4">
//                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                                     </svg>
//                                 </div>
//                                 <h4 className="font-semibold text-black text-sm">Ideal for practitioners, biohackers and meditators</h4>
//                             </div>

//                             <div className="flex items-center space-x-4">
//                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                                     </svg>
//                                 </div>
//                                 <h4 className="font-semibold text-black text-sm">2-year warranty and 6-month return policy</h4>
//                             </div>
//                         </div>


//                     </div>
//                 </div>

//                 {/* Product Information Tabs */}
//                 <div className="mt-16">
//                     {/* Tab Navigation */}
//                     <div className="flex border-b border-gray-200 mb-8">
//                         <button
//                             onClick={() => setActiveTab('general')}
//                             className={`px-8 py-4 font-semibold ${
//                                 activeTab === 'general'
//                                     ? 'border-b-2 border-[#EA1934] text-black bg-gray-200 rounded-t-xl'
//                                     : 'text-gray-500 hover:text-gray-700'
//                             }`}
//                         >
//                             General info
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('device')}
//                             className={`px-8 py-4 font-semibold ${
//                                 activeTab === 'device'
//                                     ? 'border-b-2 border-[#EA1934] text-black bg-gray-200 rounded-t-xl'
//                                     : 'text-gray-500 hover:text-gray-700'
//                             }`}
//                         >
//                             The device
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('app')}
//                             className={`px-8 py-4 font-semibold ${
//                                 activeTab === 'app'
//                                     ? 'border-b-2 border-[#EA1934] text-black bg-gray-200 rounded-t-xl'
//                                     : 'text-gray-500 hover:text-gray-700'
//                             }`}
//                         >
//                             The app
//                         </button>
//                     </div>

//                     {/* Tab Content */}
//                     {activeTab === 'general' && (
//                         <div className="space-y-8">
//                             {/* Overview & Benefits */}
//                             <div className="grid lg:grid-cols-2 gap-12 items-start">
//                                 <div className="relative">
//                                     <Image
//                                         src="/neuro-pro-2-with-app.jpg"
//                                         alt="Neuro Pro 2 with smartphone app"
//                                         width={600}
//                                         height={400}
//                                         className="rounded-2xl"
//                                     />
//                                 </div>

//                                 <div className="space-y-6">
//                                     <h2 className="text-3xl font-bold text-black">Overview & benefits</h2>

//                                     {/* Benefits Tags */}
//                                     <div className="flex flex-wrap gap-3">
//                                         {['Focus', 'Stress', 'Memory', 'Sleep', 'Mental clarity', 'Creativity', 'Brain energy'].map((benefit) => (
//                                             <span key={benefit} className="px-4 py-2 border border-gray-400 rounded-full text-sm">
//                                                 {benefit}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     <p className="text-gray-700 leading-relaxed">
//                                         Like other Neuro devices, the <span className="font-semibold">Neuro Pro 2 enhances cognition, memory, and functional connectivity.</span> However, the Neuro Pro 2 is significantly more powerful, customizable and features more Vie-LED modules than previous models.
//                                     </p>

//                                     <p className="text-gray-700 leading-relaxed">
//                                         The Neuro Pro 2 comes with the Neuro Pro App, giving you access to <span className="font-semibold underline">9 advanced guided preset protocols
//                                                                                     </span> that go beyond just Alpha and Gamma frequencies, along with nearly unlimited customization options.
//                                     </p>

//                                     {/* Key Features */}
//                                     <div className="space-y-4">
//                                         <div className="flex items-center space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                                 </svg>
//                                             </div>
//                                             <span className="font-semibold text-black">20 minutes per session</span>
//                                         </div>

//                                         <div className="flex items-center space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                                                 </svg>
//                                             </div>
//                                             <span className="font-semibold text-black">Results in 4 to 8 weeks</span>
//                                         </div>

//                                         <div className="flex items-center space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
//                                                 </svg>
//                                             </div>
//                                             <span className="font-semibold text-black">≈400% sunlight irradiance</span>
//                                         </div>

//                                         <div className="flex items-center space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                                                 </svg>
//                                             </div>
//                                             <span className="font-semibold text-black">Adjustable to target any brain area</span>
//                                         </div>

//                                         <div className="flex items-center space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
//                                                 </svg>
//                                             </div>
//                                             <span className="font-semibold text-black">Bypasses hair and enables full contact</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Collapsible Sections */}
//                             <div className="space-y-4">
//                                 {/* What's in the box */}
//                                 <div className="bg-gray-200 rounded-2xl overflow-hidden">
//                                     <button
//                                         onClick={() => toggleSection('whats-in-box')}
//                                         className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
//                                     >
//                                         <h3 className="text-xl font-bold text-black">What's in the box</h3>
//                                         {expandedSection === 'whats-in-box' ? (
//                                             <Minus className="w-6 h-6 text-black" />
//                                         ) : (
//                                             <Plus className="w-6 h-6 text-black" />
//                                         )}
//                                     </button>

//                                     {expandedSection === 'whats-in-box' && (
//                                         <div className="px-8 pb-8">
//                                             <div className="grid lg:grid-cols-2 gap-12 items-center">
//                                                 {/* Left side - List */}
//                                                 <div className="space-y-6">
//                                                     <p className="text-lg font-semibold text-black mb-6">Each device comes with:</p>

//                                                     <div className="space-y-4">
//                                                         <div className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
//                                                             <span className="text-black font-medium">1 Neuro Pro headset</span>
//                                                         </div>
//                                                         <div className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
//                                                             <span className="text-black font-medium">1 Neuro Pro intranasal applicators</span>
//                                                         </div>
//                                                         <div className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
//                                                             <span className="text-black font-medium">1 controller with side heat insulation</span>
//                                                         </div>
//                                                         <div className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
//                                                             <span className="text-black font-medium">Neuro Pro 2 app</span>
//                                                         </div>
//                                                         <div className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
//                                                             <span className="text-black font-medium">1 power adapter 5V 5A with AC input cable</span>
//                                                         </div>
//                                                         <div className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
//                                                             <span className="text-black font-medium">1 power USB-Dc jacket adapter cable</span>
//                                                         </div>
//                                                         <div className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">7</div>
//                                                             <span className="text-black font-medium">1 power adapter for the smartphone</span>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 {/* Right side - Product image with numbered annotations */}
//                                                 <div className="relative">
//                                                     <Image
//                                                         src="/neuro-pro-2-whats-in-box.jpg"
//                                                         alt="Neuro Pro 2 components"
//                                                         width={600}
//                                                         height={500}
//                                                         className="rounded-2xl"
//                                                     />
//                                                     {/* Add numbered annotations positioned over the image */}
//                                                     <div className="absolute top-[60%] left-[15%] w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
//                                                     <div className="absolute bottom-[20%] right-[15%] w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
//                                                     <div className="absolute bottom-[35%] left-[40%] w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
//                                                     <div className="absolute top-[20%] left-[25%] w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
//                                                     <div className="absolute bottom-[10%] left-[20%] w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
//                                                     <div className="absolute top-[40%] right-[25%] w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
//                                                     <div className="absolute top-[15%] right-[15%] w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">7</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* User guides & tutorials */}
//                                 <div className="bg-gray-200 rounded-2xl overflow-hidden">
//                                     <button
//                                         onClick={() => toggleSection('user-guides')}
//                                         className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
//                                     >
//                                         <h3 className="text-xl font-bold text-black">User guides & tutorials</h3>
//                                         {expandedSection === 'user-guides' ? (
//                                             <Minus className="w-6 h-6 text-black" />
//                                         ) : (
//                                             <Plus className="w-6 h-6 text-black" />
//                                         )}
//                                     </button>

//                                     {expandedSection === 'user-guides' && (
//                                         <div className="px-8 pb-8 space-y-8">
//                                             {/* User guides */}
//                                             <div>
//                                                 <h4 className="text-xl font-bold text-blue-600 mb-4">User guides</h4>
//                                                 <p className="text-gray-700 mb-6">
//                                                     Be sure to carefully review these guides in full before using the Neuro Pro 2 for the first time.
//                                                 </p>

//                                                 <div className="flex flex-wrap gap-4">
//                                                     <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//                                                         Neuro Pro 2 White user guide
//                                                     </button>
//                                                     <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//                                                         Neuro Pro 2 Black user guide
//                                                     </button>
//                                                     <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//                                                         Neuro Pro 2 WiFi Hub Guide
//                                                     </button>
//                                                     <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//                                                         See protocols
//                                                     </button>
//                                                 </div>
//                                             </div>

//                                             {/* Video tutorials */}
//                                             <div>
//                                                 <h4 className="text-xl font-bold text-blue-600 mb-6">Video tutorials</h4>

//                                                 <div className="space-y-6">
//                                                     {/* Setup Walkthrough Video */}
//                                                     <div className="relative rounded-2xl overflow-hidden bg-gray-400">
//                                                         <Image
//                                                             src="/neuro-pro-2-setup-video.jpg"
//                                                             alt="Neuro Pro 2 Setup Walkthrough"
//                                                             width={800}
//                                                             height={400}
//                                                             className="w-full h-64 object-cover"
//                                                         />
//                                                         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                                                             <div className="text-center text-white">
//                                                                 <h5 className="text-2xl font-bold mb-2">Neuro Pro 2 | Setup Walkthrough</h5>
//                                                                 <button className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-colors">
//                                                                     <Play className="w-5 h-5" />
//                                                                     <span className="font-medium">Watch the video</span>
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </div>

//                                                     {/* Access Gracefire Protocols Video */}
//                                                     <div className="relative rounded-2xl overflow-hidden bg-gray-400">
//                                                         <Image
//                                                             src="/neuro-pro-2-protocols-video.jpg"
//                                                             alt="Neuro Pro 2 Access Gracefire Protocols"
//                                                             width={800}
//                                                             height={400}
//                                                             className="w-full h-64 object-cover"
//                                                         />
//                                                         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                                                             <div className="text-center text-white">
//                                                                 <h5 className="text-2xl font-bold mb-2">Neuro Pro 2 | Access Gracefire Protocols</h5>
//                                                                 <button className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-colors">
//                                                                     <Play className="w-5 h-5" />
//                                                                     <span className="font-medium">Watch the video</span>
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {activeTab === 'device' && (
//                         <div className="space-y-12">
//                             {/* The Ultimate Device Section */}
//                             <div className="grid lg:grid-cols-2 gap-12 items-center">
//                                 <div className="relative">
//                                     <Image
//                                         src="/neuro-pro-2-device-detail.jpg"
//                                         alt="Neuro Pro 2 Device Detail"
//                                         width={600}
//                                         height={500}
//                                         className="rounded-2xl"
//                                     />
//                                 </div>

//                                 <div className="space-y-6">
//                                     <h2 className="text-3xl font-bold text-blue-600">The ultimate at-home photobiomodulation device</h2>

//                                     <p className="text-gray-700 leading-relaxed text-lg">
//                                         Boost your mental wellness and performance with the only guided full brain photobiomodulation system that targets multiple brain networks with precision or full transcranial coverage.
//                                     </p>

//                                     <div className="space-y-4">
//                                         <div className="flex items-start space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                                 </svg>
//                                             </div>
//                                             <div>
//                                                 <p className="font-semibold text-black">Up to 400 mW/cm2 irradiance, 12,000 mW total power</p>
//                                                 <p className="text-gray-600">– the highest in the industry by a significant margin.</p>
//                                             </div>
//                                         </div>

//                                         <div className="flex items-start space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                                                 </svg>
//                                             </div>
//                                             <div>
//                                                 <p className="font-semibold text-black">12 programmable and powerful Vie-LED modules,</p>
//                                                 <p className="text-gray-600">to target specific or all brain networks.</p>
//                                             </div>
//                                         </div>

//                                         <div className="flex items-start space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
//                                                 </svg>
//                                             </div>
//                                             <p className="font-semibold text-black">Featuring cross-frequency coupling, frequency sweeps and neural network synchronization.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Customize Section */}
//                             <div className="grid lg:grid-cols-2 gap-12 items-center">
//                                 <div className="order-2 lg:order-1 space-y-6">
//                                     <h2 className="text-3xl font-bold text-blue-600">Customize your brain's potential</h2>

//                                     <p className="text-gray-700                                     leading-relaxed text-lg">
//                                         The Neuro Pro 2 offers multiple customization options to tailor the device to your specific needs and goals.
//                                     </p>

//                                     <div className="space-y-4">
//                                         <div className="flex items-start space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                                 </svg>
//                                             </div>
//                                             <p className="font-semibold text-black">12,000 mW total power | 400 mW/cm2 irradiance</p>
//                                         </div>

//                                         <div className="flex items-start space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
//                                                 </svg>
//                                             </div>
//                                             <p className="font-semibold text-black">8 powerful preset protocols to modulate your brain, and the possibility to create your own</p>
//                                         </div>

//                                         <div className="flex items-start space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                                                 </svg>
//                                             </div>
//                                             <p className="font-semibold text-black">Activate Neuro Pro modules in any combination, including synchronized patterns.</p>
//                                         </div>

//                                         <div className="flex items-start space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
//                                                 </svg>
//                                             </div>
//                                             <p className="font-semibold text-black">Fully customizable session length, power intensity, phase asynchrony, duty cycle, and frequency pulse capabilities between 1 and 10,000 Hz.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="order-1 lg:order-2 relative">
//                                     <Image
//                                         src="/neuro-pro-2-customize.jpg"
//                                         alt="Customize Neuro Pro 2"
//                                         width={600}
//                                         height={500}
//                                         className="rounded-2xl"
//                                     />
//                                 </div>
//                             </div>

//                             {/* Shop Button */}
//                             <div className="text-center py-8">
//                                 <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors">
//                                     Shop Neuro Pro 2 now
//                                 </button>
//                             </div>

//                             {/* Neurofeedback Providers Section */}
//                             <div className="text-center space-y-8 py-12">
//                                 <h2 className="text-3xl font-bold text-black">Ideal for neurofeedback providers</h2>
//                                 <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//                                     Easily integrate the Neuro Pro 2 into your practice to enhance both modalities and optimize client outcomes.
//                                 </p>

//                                 <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
//                                     {/* Before */}
//                                     <div className="text-center space-y-4">
//                                         <div className="w-24 h-24 mx-auto mb-6">
//                                             <svg viewBox="0 0 100 100" className="w-full h-full">
//                                                 <path d="M20 50 Q30 30, 40 50 T60 50 T80 50" stroke="#E5E7EB" strokeWidth="3" fill="none"/>
//                                                 <path d="M20 50 Q30 30, 40 50 T60 50" stroke="#3B82F6" strokeWidth="3" fill="none"/>
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-xl font-bold text-black">Before</h3>
//                                         <p className="text-gray-600">
//                                             Boost neuroplasticity and energy, preparing the brain for peak responsiveness.
//                                         </p>
//                                     </div>

//                                     {/* During */}
//                                     <div className="text-center space-y-4">
//                                         <div className="w-24 h-24 mx-auto mb-6 relative">
//                                             <svg viewBox="0 0 100 100" className="w-full h-full">
//                                                 <path d="M20 50 Q30 30, 40 50 T60 50 T80 50" stroke="#3B82F6" strokeWidth="3" fill="none"/>
//                                                 <circle cx="60" cy="40" r="3" fill="#EF4444">
//                                                     <animate attributeName="r" values="3;6;3" dur="1s" repeatCount="indefinite"/>
//                                                 </circle>
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-xl font-bold text-blue-600">During</h3>
//                                         <p className="text-gray-600">
//                                             Enhance focus and attention to maximize engagement and results.
//                                         </p>
//                                     </div>

//                                     {/* After */}
//                                     <div className="text-center space-y-4">
//                                         <div className="w-24 h-24 mx-auto mb-6">
//                                             <svg viewBox="0 0 100 100" className="w-full h-full">
//                                                 <path d="M20 50 Q30 30, 40 50 T60 50 T80 50" stroke="#10B981" strokeWidth="3" fill="none"/>
//                                                 <circle cx="50" cy="20" r="15" stroke="#10B981" strokeWidth="2" fill="none" opacity="0.5"/>
//                                             </svg>
//                                         </div>
//                                         <h3 className="text-xl font-bold text-black">After</h3>
//                                         <p className="text-gray-600">
//                                             Support relaxation and integration, helping clients solidify the benefits for lasting impact.
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto">
//                                     <span>Read Neuro Pro 2 Practitioners Guide</span>
//                                     <ArrowRight className="w-4 h-4" />
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {activeTab === 'app' && (
//                         <div className="space-y-12">
//                             {/* How to Use App Section */}
//                             <div className="bg-gray-100 rounded-2xl p-12">
//                                 <h2 className="text-3xl font-bold text-black text-center mb-12">How to use the Neuro Pro App</h2>

//                                 <div className="grid md:grid-cols-3 gap-12">
//                                     {/* Connect */}
//                                     <div className="text-center space-y-6">
//                                         <div className="w-64 h-96 mx-auto bg-white rounded-3xl p-4 shadow-lg">
//                                             <div className="bg-black rounded-2xl h-full flex items-center justify-center relative overflow-hidden">
//                                                 <Image
//                                                     src="/app-connect-screen.jpg"
//                                                     alt="Connect Screen"
//                                                     width={200}
//                                                     height={350}
//                                                     className="object-cover rounded-xl"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="space-y-4">
//                                             <h3 className="text-2xl font-bold" style={{ color: '#FF6B9D' }}>Connect</h3>
//                                             <p className="text-black font-semibold">Connect your Neuro Pro with the Neuro Pro app.</p>
//                                             <p className="text-gray-600">
//                                                 The Neuro Pro comes with a pre-synced smartphone and the Neuro Pro App pre-installed.
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Customize */}
//                                     <div className="text-center space-y-6">
//                                         <div className="w-64 h-96 mx-auto bg-white rounded-3xl p-4 shadow-lg">
//                                             <div className="bg-black rounded-2xl h-full flex items-center justify-center relative overflow-hidden">
//                                                 <Image
//                                                     src="/app-customize-screen.jpg"
//                                                     alt="Customize Screen"
//                                                     width={200}
//                                                     height={350}
//                                                     className="object-cover rounded-xl"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="space-y-4">
//                                             <h3 className="text-2xl font-bold text-blue-600">Customize</h3>
//                                             <p className="text-black font-semibold">Customize parameters and adjust stimulation options to suit your needs.</p>
//                                             <p className="text-gray-600">
//                                                 The Neuro Pro 2 comes with 8 advanced pre-set neurofeedback protocols to choose from and guides to choose which suits you best.
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Save */}
//                                     <div className="text-center space-y-6">
//                                         <div className="w-64 h-96 mx-auto bg-white rounded-3xl p-4 shadow-lg">
//                                             <div className="bg-black rounded-2xl h-full flex items-center justify-center relative overflow-hidden">
//                                                 <Image
//                                                     src="/app-save-screen.jpg"
//                                                     alt="Save Screen"
//                                                     width={200}
//                                                     height={350}
//                                                     className="object-cover rounded-xl"
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="space-y-4">
//                                             <h3 className="text-2xl font-bold" style={{ color: '#FF8C42' }}>Save</h3>
//                                             <p className="text-black font-semibold">Easily save and categorize different settings into profiles.</p>
//                                             <p className="text-gray-600">
//                                                 Load a given profile with a simple press of a button.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Preset Protocols Section */}
//                             <div className="grid lg:grid-cols-2 gap-12 items-center">
//                                 <div className="relative rounded-2xl overflow-hidden">
//                                     <Image
//                                         src="/neuro-pro-2-preset-protocols.jpg"
//                                         alt="Preset Protocols"
//                                         width={600}
//                                         height={400}
//                                         className="w-full h-80 object-cover"
//                                     />
//                                     <div className="absolute top-6 left-6 text-white">
//                                         <p className="text-lg opacity-90">with powerful</p>
//                                         <p className="text-lg opacity-90">preset protocols beyond</p>
//                                         <p className="text-2xl font-bold">Alpha and Gamma</p>
//                                     </div>
//                                 </div>

//                                 <div className="space-y-6">
//                                     <h2 className="text-3xl font-bold text-blue-600">Preset protocols</h2>

//                                     <p className="text-gray-700 leading-relaxed">
//                                         The Neuro Pro App features <span className="font-semibold">8 advanced preset protocols, designed by leading neuroscientists,</span> that extend beyond just Alpha and Gamma frequencies.
//                                     </p>

//                                     <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
//                                         See protocols
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Manual Features Section */}
//                             <div className="grid lg:grid-cols-2 gap-12 items-center">
//                                 <div className="space-y-6">
//                                     <h2 className="text-3xl font-bold text-blue-600">Manual features</h2>

//                                     <p className="text-gray-700 leading-relaxed">
//                                         Looking for more control? The Neuro Pro also offers manual exploration of brain networks and parameters, giving you the ability to customize:
//                                     </p>

//                                     <ul className="space-y-2">
//                                         <li className="flex items-center space-x-3">
//                                             <div className="w-2 h-2 bg-black rounded-full"></div>
//                                             <span className="text-black">Pulse frequencies</span>
//                                         </li>
//                                         <li className="flex items-center space-x-3">
//                                             <div className="w-2 h-2 bg-black rounded-full"></div>
//                                             <span className="text-black">Module activation</span>
//                                         </li>
//                                         <li className="flex items-center space-x-3">
//                                             <div className="w-2 h-2 bg-black rounded-full"></div>
//                                             <span className="text-black">Point-to-point synchrony</span>
//                                         </li>
//                                         <li className="flex items-center space-x-3">
//                                             <div className="w-2 h-2 bg-black rounded-full"></div>
//                                             <span className="text-black">Phase-locking</span>
//                                         </li>
//                                     </ul>
//                                 </div>

//                                 <div className="relative rounded-2xl overflow-hidden">
//                                     <Image
//                                         src="/neuro-pro-2-manual-features.jpg"
//                                         alt="Manual Features"
//                                         width={600}
//                                         height={400}
//                                         className="w-full h-80 object-cover"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetailSection;



'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, ArrowRight } from 'lucide-react';
import Header from '@/components/header';
import { Product } from '@/types/Product';
import { useCart } from '@/context/CartContext';
import FooterSection from '../FooterSection';

interface ProductDetailSectionProps {
    product: Product;
}

const ProductDetailSection: React.FC<ProductDetailSectionProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState('general');
    const [expandedSection, setExpandedSection] = useState<string | null>('whats-in-box');

    const { addItem } = useCart();

    // Normalize product fields to work with both DB (snake_case) and frontend (camelCase)
    const images = Array.isArray((product as any).images) ? (product as any).images : [];
    const features = Array.isArray((product as any).features) ? (product as any).features : [];
    const benefits = Array.isArray((product as any).benefits) ? (product as any).benefits : [];
    const whatsInBox = Array.isArray((product as any).whatsInBox)
        ? (product as any).whatsInBox
        : Array.isArray((product as any).whats_in_box)
            ? (product as any).whats_in_box
            : [];
    const userGuides = Array.isArray((product as any).userGuides)
        ? (product as any).userGuides
        : Array.isArray((product as any).user_guides)
            ? (product as any).user_guides
            : [];
    const videos = Array.isArray((product as any).videos) ? (product as any).videos : [];
    const shortDescription = (product as any).shortDescription ?? (product as any).short_description ?? '';
    const specifications = (product as any).specifications && typeof (product as any).specifications === 'object'
        ? (product as any).specifications
        : {};

    const handleQuantityChange = (action: 'increment' | 'decrement') => {
        if (action === 'increment') {
            setQuantity(prev => prev + 1);
        } else if (action === 'decrement' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };
    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addItem({
                id: product.slug,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: images[0] || '/product-fallback.png'
            });
        }
    };

    return (
        <div className="w-full bg-gray-50 min-h-screen">
            {/* Header */}
            <Header />

            {/* Product Detail Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">

                    {/* Left Column - Product Images */}
                    <div className="flex gap-6">
                        {/* Thumbnail Images */}
                        <div className="hidden sm:flex sm:flex-col sm:space-y-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-[#EA1934]' : 'border-gray-200'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} view ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}

                            {/* Mobile thumbnails (horizontal scroll) */}
                            <div className="sm:hidden flex gap-3 overflow-x-auto py-2">
                                {images.map((image, index) => (
                                    <button
                                        key={`mobile-${index}`}
                                        onClick={() => setSelectedImage(index)}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-[#EA1934]' : 'border-gray-200'}`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${product.name} view ${index + 1}`}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Main Product Image */}
                        <div className="flex-1 p-0 sm:p-2">
                            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px]">
                                <Image
                                    src={images[selectedImage] || '/product-fallback.png'}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="space-y-8">

                        {/* Rating and Reviews */}
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center gap-0">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-5 h-5 bg-[#EA1934] flex items-center justify-center">
                                        <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                ))}
                                <div className="w-5 h-5 bg-gray-300 flex items-center justify-center relative">
                                    <div className="absolute left-0 top-0 w-2.5 h-5 bg-[#EA1934] flex items-center justify-center overflow-hidden">
                                        <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <span className="text-gray-600 font-semibold">4.8/5 Rating | +100,000 devices sold worldwide</span>
                        </div>

                        {/* Product Title and Price */}
                        <div className="space-y-2 sm:space-y-4">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">{product.name}</h1>
                            <p className="text-2xl sm:text-3xl font-bold text-black">${product.price.toLocaleString()}</p>
                        </div>

                        {/* Product Description */}
                        <div className="space-y-4">
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-300 rounded-full">
                                <button
                                    onClick={() => handleQuantityChange('decrement')}
                                    className="p-3 hover:bg-gray-50 rounded-l-full transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-6 py-3 font-medium">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange('increment')}
                                    className="p-3 hover:bg-gray-50 rounded-r-full transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={handleAddToCart}
                                className="bg-[#4285F4] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
                            >
                                Add to cart
                            </button>

                            {/* See Research Button */}
                            <button className="bg-gray-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
                                <span>See research</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* HSA/FSA Payment */}
                        <div className="border border-gray-300 rounded-full px-6 py-3 w-fit">
                            <span className="text-gray-700 font-medium">Pay with HSA or FSA.</span>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 gap-6 py-6">
                            {(Array.isArray(product.features) ? product.features : []).map((feature, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-black text-sm">{feature}</h4>
                                </div>
                            ))}
                        </div>

                        {/* Combine with other devices - Only show if product has combinedProducts */}
                        {/* {product.combinedProducts && product.combinedProducts.length > 0 && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-black">Combine this device with:</h3>
                                
                                <div className="space-y-4">
                                    {product.combinedProducts.map((combinedProduct) => (
                                        <div key={combinedProduct.slug} className="bg-white rounded-2xl p-6 shadow-sm">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <Image
                                                    src={combinedProduct.image}
                                                    alt={combinedProduct.name}
                                                    width={60}
                                                    height={60}
                                                    className="rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-black text-sm">{combinedProduct.name}</h4>
                                                    <p className="text-xl font-bold text-black">${combinedProduct.price.toLocaleString()}</p>
                                                </div>
                                                <button className="bg-[#4285F4] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">
                                                    Add to cart
                                                </button>
                                            </div>
                                            <div className="flex gap-2 flex-wrap">
                                                {combinedProduct.tags.map((tag) => (
                                                    <span key={tag} className="px-3 py-1 border border-gray-300 rounded-full text-xs">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )} */}
                    </div>
                </div>

                {/* Product Information Tabs - Same as your existing code but dynamic */}
                <div className="mt-16">
                    {/* Tab Navigation */}
                    <div className="flex overflow-x-auto border-b border-gray-200 mb-6 sm:mb-8">
                        <button
                            onClick={() => setActiveTab('general')}
                            className={`px-8 py-4 font-semibold ${activeTab === 'general'
                                ? 'border-b-2 border-[#EA1934] text-black bg-gray-200 rounded-t-xl'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            General info
                        </button>
                        <button
                            onClick={() => setActiveTab('device')}
                            className={`px-8 py-4 font-semibold ${activeTab === 'device'
                                ? 'border-b-2 border-[#EA1934] text-black bg-gray-200 rounded-t-xl'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            The device
                        </button>
                        <button
                            onClick={() => setActiveTab('app')}
                            className={`px-8 py-4 font-semibold ${activeTab === 'app'
                                ? 'border-b-2 border-[#EA1934] text-black bg-gray-200 rounded-t-xl'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            The app
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'general' && (
                        <div className="space-y-8">
                            {/* Overview & Benefits */}
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <div className="relative">
                                    <Image
                                        src={images[0] || '/product-fallback.png'}
                                        alt={`${product.name} overview`}
                                        width={600}
                                        height={400}
                                        className="rounded-2xl"
                                    />
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-black">Overview & benefits</h2>

                                    {/* Benefits Tags */}
                                    <div className="flex flex-wrap gap-3">
                                        {benefits.map((benefit) => (
                                            <span key={benefit} className="px-4 py-2 border border-gray-400 rounded-full text-sm">
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-700 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Key Specifications */}
                                    <div className="space-y-4">
                                        {Object.entries(specifications).map(([key, value]) => (
                                            <div key={key} className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="font-semibold text-black">{String(value)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* What's in the box */}
                            <div className="bg-gray-200 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('whats-in-box')}
                                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
                                >
                                    <h3 className="text-xl font-bold text-black">What's in the box</h3>
                                    {expandedSection === 'whats-in-box' ? (
                                        <Minus className="w-6 h-6 text-black" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-black" />
                                    )}
                                </button>

                                {expandedSection === 'whats-in-box' && (
                                    <div className="px-8 pb-8">
                                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                                            {/* Left side - List */}
                                            <div className="space-y-6">
                                                <p className="text-lg font-semibold text-black mb-6">Each device comes with:</p>

                                                <div className="space-y-4">
                                                    {whatsInBox.map((item, index) => (
                                                        <div key={index} className="flex items-center space-x-3">
                                                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                                {index + 1}
                                                            </div>
                                                            <span className="text-black font-medium">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right side - Product image */}
                                            <div className="relative">
                                                <Image
                                                    src={images[1] || images[0] || '/product-fallback.png'}
                                                    alt={`${product.name} components`}
                                                    width={600}
                                                    height={500}
                                                    className="rounded-2xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* User guides & tutorials */}
                            <div className="bg-gray-200 rounded-2xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('user-guides')}
                                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
                                >
                                    <h3 className="text-xl font-bold text-black">User guides & tutorials</h3>
                                    {expandedSection === 'user-guides' ? (
                                        <Minus className="w-6 h-6 text-black" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-black" />
                                    )}
                                </button>

                                {expandedSection === 'user-guides' && (
                                    <div className="px-8 pb-8 space-y-8">
                                        {/* User guides */}
                                        <div>
                                            <h4 className="text-xl font-bold text-blue-600 mb-4">User guides</h4>
                                            <p className="text-gray-700 mb-6">
                                                Be sure to carefully review these guides in full before using the {product.name} for the first time.
                                            </p>

                                            <div className="flex flex-wrap gap-4">
                                                {userGuides.map((guide, index) => (
                                                    <a
                                                        key={index}
                                                        href={guide.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                                                    >
                                                        {guide.title}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Video tutorials */}
                                        {videos.length > 0 && (
                                            <div>
                                                <h4 className="text-xl font-bold text-blue-600 mb-6">Video tutorials</h4>

                                                <div className="space-y-6">
                                                    {videos.map((video, index) => (
                                                        <div key={index} className="relative rounded-2xl overflow-hidden bg-gray-400">
                                                            <Image
                                                                src={video.thumbnail}
                                                                alt={video.title}
                                                                width={800}
                                                                height={400}
                                                                className="w-full h-64 object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                                                <div className="text-center text-white">
                                                                    <h5 className="text-2xl font-bold mb-2">{video.title}</h5>
                                                                    <button
                                                                        onClick={() => window.open(video.url, '_blank')}
                                                                        className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-colors mx-auto"
                                                                    >
                                                                        <Play className="w-5 h-5" />
                                                                        <span className="font-medium">Watch the video</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'device' && (
                        <div className="space-y-12">
                            {/* Device Details */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="relative">
                                    <Image
                                        src={images[2] || images[0] || '/product-fallback.png'}
                                        alt={`${product.name} device details`}
                                        width={600}
                                        height={500}
                                        className="rounded-2xl"
                                    />
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-blue-600">Advanced Technology</h2>

                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {product.shortDescription} featuring cutting-edge photobiomodulation technology for optimal brain health and cognitive enhancement.
                                    </p>

                                    <div className="space-y-4">
                                        {Object.entries(specifications).map(([key, value]) => (
                                            <div key={key} className="flex items-start space-x-3">
                                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                                                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                                                    <p className="text-gray-600">{String(value)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'app' && (
                        <div className="space-y-12">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-black mb-4">Device Application & Usage</h2>
                                <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                                    Learn how to use your {product.name} effectively with our comprehensive guides and protocols.
                                </p>
                            </div>

                            {/* Usage Instructions */}
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                        <span className="text-2xl font-bold text-blue-600">1</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Setup</h3>
                                    <p className="text-gray-600">Follow the setup guide to properly configure your device for first use.</p>
                                </div>

                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                        <span className="text-2xl font-bold text-blue-600">2</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Use</h3>
                                    <p className="text-gray-600">Begin your sessions following the recommended protocols and timing.</p>
                                </div>

                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                        <span className="text-2xl font-bold text-blue-600">3</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-black">Track</h3>
                                    <p className="text-gray-600">Monitor your progress and adjust settings as needed for optimal results.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <FooterSection />
        </div>
    );
};

export default ProductDetailSection;