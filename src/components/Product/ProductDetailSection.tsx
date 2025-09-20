'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, ArrowRight, Play } from 'lucide-react';
import Header from '@/components/header';
import { Product } from '@/types/Product';
import { useCart } from '@/context/CartContext';
import FooterSection from '../FooterSection';
import NeuroPro2Details from '../products/NeuroPro2Details';
import NeuroGammaDetails from '../products/NeuroGammaDetails';
import NeuroProDetails from '../products/NeuroProDetails';
import NeuroDuoDetails from '../products/NeuroDuoDetails';
import NeuroAlphaDetails from '../products/NeuroAlphaDetails';

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

    const props = { activeTab, expandedSection, toggleSection };

    return (
        <div className="w-full bg-white min-h-screen">
            {/* Header */}
            <Header />

            {/* Product Detail Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-12">

{/* Left Column - Product Images */}
<div className="order-1">
    <div className="flex gap-4 lg:gap-6">
        {/* Thumbnail Images - Vertical on Desktop, Horizontal on Mobile */}
        <div className={`flex flex-row lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible scrollbar-hide py-2 lg:py-0 ${
            images.length > 5 ? 'lg:max-h-[500px] lg:overflow-y-auto lg:scrollbar-default' : ''
        }`}>
            {images.map((image: string, index: number) => (
                <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                        selectedImage === index 
                            ? 'border-[#EA1934] scale-100 shadow-md' 
                            : 'border-gray-200 hover:border-gray-300 hover:scale-105'
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
        </div>

        {/* Main Product Image */}
        <div className="flex-1 min-w-0">
            <div className="relative   overflow-hidden ">
                <div className="aspect-square relative">
                    <Image
                        src={images[selectedImage] || '/product-fallback.png'}
                        alt={product.name}
                        fill
                        className="object-contain p-4 sm:p-6 lg:p-8"
                        priority
                    />
                </div>
            </div>
        </div>
    </div>
</div>

                    {/* Right Column - Product Info */}
                    <div className="order-2 space-y-6 lg:space-y-8">
                        {/* Rating and Reviews */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                            <div className="flex items-center gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-5 h-5 bg-[#EA1934] rounded-sm flex items-center justify-center">
                                        <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                ))}
                                <div className="w-5 h-5 bg-gray-300 rounded-sm flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute left-0 top-0 w-2.5 h-5 bg-[#EA1934] flex items-center justify-center">
                                        <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 font-medium">
                                4.8/5 Rating | +100,000 devices sold worldwide
                            </div>
                        </div>

                        {/* Product Title and Price */}
                        <div className="space-y-3">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-3xl sm:text-4xl font-bold text-black">
                                ${product.price.toLocaleString()}
                            </p>
                        </div>

                        {/* Product Description */}
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            {/* Quantity and Add to Cart */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                {/* Quantity Selector */}
                                <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden bg-white shadow-sm">
                                    <button
                                        onClick={() => handleQuantityChange('decrement')}
                                        className="p-3 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <div className="px-6 py-3 font-semibold min-w-[60px] text-center border-x border-gray-200">
                                        {quantity}
                                    </div>
                                    <button
                                        onClick={() => handleQuantityChange('increment')}
                                        className="p-3 hover:bg-gray-50 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-[#EA1934] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d61729] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Add to cart
                                </button>
                            </div>

                            {/* See Research Button */}
                            <a
                                href="https://www.vielight.com/research/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <span>See research</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* HSA/FSA Payment */}
                        <div className="inline-block">
                            <div className="border border-gray-300 rounded-full px-4 py-2 bg-gray-50">
                                <span className="text-gray-700 font-medium text-sm">Pay with HSA or FSA.</span>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-black">Key Features</h3>
                            <div className="space-y-3">
                                {(Array.isArray(product.features) ? product.features : []).map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-4 p-3 bg-blue-50 rounded-xl">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="font-medium text-black text-sm sm:text-base">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Information Tabs */}
                <div className="mt-12 lg:mt-16">
                    {/* Tab Navigation */}
                    {product.slug !== 'neuro-duo' && product.slug !== 'vielight-alpha-4' && product.slug !== 'neuro-gamma-4' && (
                        <div className="border-b border-gray-200 mb-8">
                            <div className="flex overflow-x-auto scrollbar-hide">
                                {[
                                    { id: 'general', label: 'General info' },
                                    { id: 'device', label: 'The device' },
                                    { id: 'app', label: 'The app' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-4 font-semibold whitespace-nowrap transition-all duration-200 ${
                                            activeTab === tab.id
                                                ? 'border-b-2 border-[#EA1934] text-black bg-gray-50 rounded-t-xl'
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-t-xl'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tab Content */}
                    {product.slug === 'neuro-pro-2' ? (
                        <NeuroPro2Details {...props} />
                    ) : product.slug === 'neuro-gamma-4' ? (
                        <NeuroGammaDetails {...props} />
                    ) : product.slug === 'neuro-duo' ? (
                        <NeuroDuoDetails {...props} />
                    ) : product.slug === 'vielight-alpha-4' ? (
                        <NeuroAlphaDetails {...props} />
                    ) : (
                        <div className="space-y-12">
                            {activeTab === 'general' && (
                                <div className="space-y-8">
                                    {/* Overview & Benefits */}
                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                                        <div className="relative">
                                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                                <Image
                                                    src={images[0] || '/product-fallback.png'}
                                                    alt={`${product.name} overview`}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-contain p-4 sm:p-6 lg:p-8"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <h2 className="text-2xl sm:text-3xl font-bold text-black">Overview & benefits</h2>

                                            {/* Benefits Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {benefits.map((benefit: string) => (
                                                    <span key={benefit} className="px-3 py-1.5 border border-gray-300 rounded-full text-sm font-medium bg-white shadow-sm hover:shadow-md transition-shadow">
                                                        {benefit}
                                                    </span>
                                                ))}
                                            </div>

                                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                                {product.description}
                                            </p>

                                            {/* Key Specifications */}
                                            {Object.keys(specifications).length > 0 && (
                                                <div className="space-y-3">
                                                    <h4 className="text-lg font-semibold text-black">Specifications</h4>
                                                    {Object.entries(specifications).map(([key, value]) => (
                                                        <div key={key} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                                                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                                                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <span className="font-medium text-black capitalize text-sm">
                                                                    {key.replace(/([A-Z])/g, ' $1')}: 
                                                                </span>
                                                                <span className="text-gray-700 ml-2">{String(value)}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* What's in the box */}
                                    {whatsInBox.length > 0 && (
                                        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                            <button
                                                onClick={() => toggleSection('whats-in-box')}
                                                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between hover:bg-gray-200 transition-colors"
                                            >
                                                <h3 className="text-xl font-bold text-black">What's in the box</h3>
                                                {expandedSection === 'whats-in-box' ? (
                                                    <Minus className="w-6 h-6 text-black" />
                                                ) : (
                                                    <Plus className="w-6 h-6 text-black" />
                                                )}
                                            </button>

                                            {expandedSection === 'whats-in-box' && (
                                                <div className="px-6 sm:px-8 pb-8">
                                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                                        {/* Left side - List */}
                                                        <div className="space-y-6">
                                                            <p className="text-lg font-semibold text-black">Each device comes with:</p>

                                                            <div className="space-y-3">
                                                                {whatsInBox.map((item: string, index: number) => (
                                                                    <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm">
                                                                        <div className="w-8 h-8 bg-[#EA1934] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                                            {index + 1}
                                                                        </div>
                                                                        <span className="text-black font-medium">{item}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                                                                                {/* Right side - Product image */}
                                                        <div className="relative">
                                                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                                                <Image
                                                                    src={images[1] || images[0] || '/product-fallback.png'}
                                                                    alt={`${product.name} components`}
                                                                    width={600}
                                                                    height={500}
                                                                    className="w-full h-full object-contain p-4 sm:p-6"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* User guides & tutorials */}
                                    {(userGuides.length > 0 || videos.length > 0) && (
                                        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                            <button
                                                onClick={() => toggleSection('user-guides')}
                                                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between hover:bg-gray-200 transition-colors"
                                            >
                                                <h3 className="text-xl font-bold text-black">User guides & tutorials</h3>
                                                {expandedSection === 'user-guides' ? (
                                                    <Minus className="w-6 h-6 text-black" />
                                                ) : (
                                                    <Plus className="w-6 h-6 text-black" />
                                                )}
                                            </button>

                                            {expandedSection === 'user-guides' && (
                                                <div className="px-6 sm:px-8 pb-8 space-y-8">
                                                    {/* User guides */}
                                                    {userGuides.length > 0 && (
                                                        <div>
                                                            <h4 className="text-xl font-bold text-[#EA1934] mb-4">User guides</h4>
                                                            <p className="text-gray-700 mb-6 text-sm sm:text-base">
                                                                Be sure to carefully review these guides in full before using the {product.name} for the first time.
                                                            </p>

                                                            <div className="flex flex-wrap gap-3">
                                                                {userGuides.map((guide: any, index: number) => (
                                                                    <a
                                                                        key={index}
                                                                        href={guide.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="bg-[#EA1934] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d61729] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                                                    >
                                                                        {guide.title}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Video tutorials */}
                                                    {videos.length > 0 && (
                                                        <div>
                                                            <h4 className="text-xl font-bold text-[#EA1934] mb-6">Video tutorials</h4>

                                                            <div className="space-y-6">
                                                                {videos.map((video: any, index: number) => (
                                                                    <div key={index} className="relative rounded-2xl overflow-hidden bg-gray-400 shadow-lg">
                                                                        <Image
                                                                            src={video.thumbnail}
                                                                            alt={video.title}
                                                                            width={800}
                                                                            height={400}
                                                                            className="w-full h-48 sm:h-64 object-cover"
                                                                        />
                                                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-50 transition-colors">
                                                                            <div className="text-center text-white p-4">
                                                                                <h5 className="text-xl sm:text-2xl font-bold mb-4">{video.title}</h5>
                                                                                <button
                                                                                    onClick={() => window.open(video.url, '_blank')}
                                                                                    className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200 mx-auto shadow-lg"
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
                                    )}
                                </div>
                            )}

                            {activeTab === 'device' && (
                                <div className="space-y-12">
                                    {/* Device Details */}
                                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                        <div className="relative">
                                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                                <Image
                                                    src={images[2] || images[0] || '/product-fallback.png'}
                                                    alt={`${product.name} device details`}
                                                    width={600}
                                                    height={500}
                                                    className="w-full h-full object-contain p-4 sm:p-6 lg:p-8"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <h2 className="text-2xl sm:text-3xl font-bold text-[#EA1934]">Advanced Technology</h2>

                                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                                {shortDescription || product.description} featuring cutting-edge photobiomodulation technology for optimal brain health and cognitive enhancement.
                                            </p>

                                            <div className="space-y-4">
                                                {Object.entries(specifications).length > 0 ? (
                                                    Object.entries(specifications).map(([key, value]) => (
                                                        <div key={key} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-black capitalize">
                                                                    {key.replace(/([A-Z])/g, ' $1')}
                                                                </p>
                                                                <p className="text-gray-600">{String(value)}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    // Default device features if no specifications
                                                    <>
                                                        <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-black">Advanced LED Technology</p>
                                                                <p className="text-gray-600">Precision-engineered light modules for optimal delivery.</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-black">Clinical Grade Quality</p>
                                                                <p className="text-gray-600">Built to medical device standards for reliability.</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm">
                                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-black">Easy to Use</p>
                                                                <p className="text-gray-600">Simple setup and operation for home use.</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Device Information */}
                                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8">
                                        <h3 className="text-xl font-bold text-black mb-4">Why Choose This Device?</h3>
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <div className="text-center space-y-3">
                                                <div className="w-12 h-12 bg-[#EA1934] rounded-full flex items-center justify-center mx-auto">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <h4 className="font-semibold text-black">Proven Results</h4>
                                                <p className="text-gray-600 text-sm">Backed by extensive research and clinical studies.</p>
                                            </div>
                                            <div className="text-center space-y-3">
                                                <div className="w-12 h-12 bg-[#EA1934] rounded-full flex items-center justify-center mx-auto">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                </div>
                                                <h4 className="font-semibold text-black">Fast & Effective</h4>
                                                <p className="text-gray-600 text-sm">See results in as little as 4-8 weeks of regular use.</p>
                                            </div>
                                            <div className="text-center space-y-3">
                                                <div className="w-12 h-12 bg-[#EA1934] rounded-full flex items-center justify-center mx-auto">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                                    </svg>
                                                </div>
                                                <h4 className="font-semibold text-black">Home Convenience</h4>
                                                <p className="text-gray-600 text-sm">Professional-grade therapy in the comfort of your home.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'app' && (
                                <div className="space-y-12">
                                    {/* Usage Guide Header */}
                                    <div className="text-center space-y-4">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-black">Device Application & Usage</h2>
                                        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto">
                                            Learn how to use your {product.name} effectively with our comprehensive guides and protocols.
                                        </p>
                                    </div>

                                    {/* Usage Instructions */}
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                        <div className="text-center space-y-4 p-6 bg-white rounded-2xl shadow-sm">
                                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                                <span className="text-2xl font-bold text-blue-600">1</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-black">Setup</h3>
                                            <p className="text-gray-600">Follow the setup guide to properly configure your device for first use.</p>
                                        </div>

                                        <div className="text-center space-y-4 p-6 bg-white rounded-2xl shadow-sm">
                                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                                <span className="text-2xl font-bold text-blue-600">2</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-black">Use</h3>
                                            <p className="text-gray-600">Begin your sessions following the recommended protocols and timing.</p>
                                        </div>

                                        <div className="text-center space-y-4 p-6 bg-white rounded-2xl shadow-sm sm:col-span-2 lg:col-span-1">
                                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                                <span className="text-2xl font-bold text-blue-600">3</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-black">Track</h3>
                                            <p className="text-gray-600">Monitor your progress and adjust settings as needed for optimal results.</p>
                                        </div>
                                    </div>

                                    {/* Protocol Information */}
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8">
                                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">Recommended Usage Protocol</h3>
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-black flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>Session Duration</span>
                                                </h4>
                                                <p className="text-gray-700">20 minutes per session for optimal results</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-black flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>Frequency</span>
                                                </h4>
                                                <p className="text-gray-700">Daily use recommended, or as advised by your healthcare provider</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-black flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                    <span>Expected Results</span>
                                                </h4>
                                                <p className="text-gray-700">Most users notice improvements within 4-8 weeks</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="font-semibold text-black flex items-center space-x-2">
                                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                    <span>Safety</span>
                                                </h4>
                                                <p className="text-gray-700">FDA cleared and clinically tested for safety</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
            {/* Footer */}
            <FooterSection />
        </div>
    );
};

export default ProductDetailSection;

// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Minus, Plus, ArrowRight, Play } from 'lucide-react';
// import Header from '@/components/header';
// import { Product } from '@/types/Product';
// import { useCart } from '@/context/CartContext';
// import FooterSection from '../FooterSection';
// import NeuroPro2Details from '../products/NeuroPro2Details';


// import NeuroGammaDetails from '../products/NeuroGammaDetails';
// import NeuroProDetails from '../products/NeuroProDetails';
// import NeuroDuoDetails from '../products/NeuroDuoDetails';
// import NeuroAlphaDetails from '../products/NeuroAlphaDetails';

// interface ProductDetailSectionProps {
//     product: Product;
// }

// const ProductDetailSection: React.FC<ProductDetailSectionProps> = ({ product }) => {
//     const [quantity, setQuantity] = useState(1);
//     const [selectedImage, setSelectedImage] = useState(0);
//     const [activeTab, setActiveTab] = useState('general');
//     const [expandedSection, setExpandedSection] = useState<string | null>('whats-in-box');


//     const { addItem } = useCart();

//     // Normalize product fields to work with both DB (snake_case) and frontend (camelCase)
//     const images = Array.isArray((product as any).images) ? (product as any).images : [];
//     const features = Array.isArray((product as any).features) ? (product as any).features : [];
//     const benefits = Array.isArray((product as any).benefits) ? (product as any).benefits : [];
//     const whatsInBox = Array.isArray((product as any).whatsInBox)
//         ? (product as any).whatsInBox
//         : Array.isArray((product as any).whats_in_box)
//             ? (product as any).whats_in_box
//             : [];
//     const userGuides = Array.isArray((product as any).userGuides)
//         ? (product as any).userGuides
//         : Array.isArray((product as any).user_guides)
//             ? (product as any).user_guides
//             : [];
//     const videos = Array.isArray((product as any).videos) ? (product as any).videos : [];
//     const shortDescription = (product as any).shortDescription ?? (product as any).short_description ?? '';
//     const specifications = (product as any).specifications && typeof (product as any).specifications === 'object'
//         ? (product as any).specifications
//         : {};

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
//     const handleAddToCart = () => {
//         for (let i = 0; i < quantity; i++) {
//             addItem({
//                 id: product.slug,
//                 slug: product.slug,
//                 name: product.name,
//                 price: product.price,
//                 image: images[0] || '/product-fallback.png'
//             });
//         }
//     };

//     const props = { activeTab, expandedSection, toggleSection };

//     switch (product.slug) {
//         case 'neuro-pro-2':
//             // Fall through to generic layout; render details in tab content
//             break;
//         case 'vielight-alpha-4':
//             // Fall through to generic layout; render details in tab content
//             break;
//         case 'neuro-gamma-4':
//             // Use the generic layout with NeuroGammaDetails in tab content
//             break;
//         case 'neuro-duo':
//             // Hide tabs for Duo; full detail component handles sections
//             break;
//         default:
//             break;
//     }


// return (
//     <div className="w-full bg-gray-50 min-h-screen">
//         {/* Header */}
//         <Header />

//         {/* Product Detail Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
//             <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">

//                 {/* Left Column - Product Images */}
//                 <div className="flex gap-6">
//                     {/* Thumbnail Images */}
//                     <div className="hidden sm:flex sm:flex-col sm:space-y-4">
//                         {/* {images.map((image, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setSelectedImage(index)}
//                                     className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-[#EA1934]' : 'border-gray-200'
//                                         }`}
//                                 >
//                                     <Image
//                                         src={image}
//                                         alt={`${product.name} view ${index + 1}`}
//                                         width={80}
//                                         height={80}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </button>
//                             ))} */}
//                         {images.map((image: string, index: number) => (
//                             <button
//                                 key={index}
//                                 onClick={() => setSelectedImage(index)}
//                                 className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-[#EA1934]' : 'border-gray-200'
//                                     }`}
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={`${product.name} view ${index + 1}`}
//                                     width={80}
//                                     height={80}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </button>
//                         ))}

//                         {/* Mobile thumbnails (horizontal scroll) */}
//                         <div className="sm:hidden flex gap-3 overflow-x-auto py-2">
//                             {/* {images.map((image, index) => (
//                                     <button
//                                         key={`mobile-${index}`}
//                                         onClick={() => setSelectedImage(index)}
//                                         className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-[#EA1934]' : 'border-gray-200'}`}
//                                     >
//                                         <Image
//                                             src={image}
//                                             alt={`${product.name} view ${index + 1}`}
//                                             width={64}
//                                             height={64}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </button>
//                                 ))} */}
//                             {images.map((image: string, index: number) => (
//                                 <button
//                                     key={`mobile-${index}`}
//                                     onClick={() => setSelectedImage(index)}
//                                     className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-[#EA1934]' : 'border-gray-200'
//                                         }`}
//                                 >
//                                     <Image
//                                         src={image}
//                                         alt={`${product.name} view ${index + 1}`}
//                                         width={64}
//                                         height={64}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Main Product Image */}
//                     <div className="flex-1 p-0 sm:p-2">
//                         <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px]">
//                             <Image
//                                 src={images[selectedImage] || '/product-fallback.png'}
//                                 alt={product.name}
//                                 fill
//                                 className="object-contain"
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column - Product Info */}
//                 <div className="space-y-8">

//                     {/* Rating and Reviews */}
//                     <div className="flex items-center space-x-3">
//                         <div className="flex items-center gap-0">
//                             {[...Array(4)].map((_, i) => (
//                                 <div key={i} className="w-5 h-5 bg-[#EA1934] flex items-center justify-center">
//                                     <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
//                                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                     </svg>
//                                 </div>
//                             ))}
//                             <div className="w-5 h-5 bg-gray-300 flex items-center justify-center relative">
//                                 <div className="absolute left-0 top-0 w-2.5 h-5 bg-[#EA1934] flex items-center justify-center overflow-hidden">
//                                     <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
//                                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                         <span className="text-gray-600 font-semibold">4.8/5 Rating | +100,000 devices sold worldwide</span>
//                     </div>

//                     {/* Product Title and Price */}
//                     <div className="space-y-2 sm:space-y-4">
//                         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">{product.name}</h1>
//                         <p className="text-2xl sm:text-3xl font-bold text-black">${product.price.toLocaleString()}</p>
//                     </div>

//                     {/* Product Description */}
//                     <div className="space-y-4">
//                         <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
//                             {product.description}
//                         </p>
//                     </div>

//                     {/* Quantity and Add to Cart */}
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
//                         {/* Quantity Selector */}
//                         <div className="flex items-center border border-gray-300 rounded-full">
//                             <button
//                                 onClick={() => handleQuantityChange('decrement')}
//                                 className="p-3 hover:bg-gray-50 rounded-l-full transition-colors"
//                             >
//                                 <Minus className="w-4 h-4" />
//                             </button>
//                             <span className="px-6 py-3 font-medium">{quantity}</span>
//                             <button
//                                 onClick={() => handleQuantityChange('increment')}
//                                 className="p-3 hover:bg-gray-50 rounded-r-full transition-colors"
//                             >
//                                 <Plus className="w-4 h-4" />
//                             </button>
//                         </div>

//                         {/* Add to Cart Button */}
//                         <button
//                             onClick={handleAddToCart}
//                             className="bg-[#EA1934] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-colors"
//                         >
//                             Add to cart
//                         </button>

//                         {/* See Research Button */}
//                         <a
//                             href="https://www.vielight.com/research/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-gray-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
//                         >
//                             <span>See research</span>
//                             <ArrowRight className="w-4 h-4" />
//                         </a>
//                     </div>

//                     {/* HSA/FSA Payment */}
//                     <div className="border border-gray-300 rounded-full px-6 py-3 w-fit">
//                         <span className="text-gray-700 font-medium">Pay with HSA or FSA.</span>
//                     </div>

//                     {/* Features */}
//                     <div className="grid grid-cols-1 gap-6 py-6">
//                         {(Array.isArray(product.features) ? product.features : []).map((feature, index) => (
//                             <div key={index} className="flex items-center space-x-4">
//                                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
//                                     <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                     </svg>
//                                 </div>
//                                 <h4 className="font-semibold text-black text-sm">{feature}</h4>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Combine with other devices - Only show if product has combinedProducts */}
//                     {/* {product.combinedProducts && product.combinedProducts.length > 0 && (
//                             <div className="space-y-6">
//                                 <h3 className="text-xl font-bold text-black">Combine this device with:</h3>
                                
//                                 <div className="space-y-4">
//                                     {product.combinedProducts.map((combinedProduct) => (
//                                         <div key={combinedProduct.slug} className="bg-white rounded-2xl p-6 shadow-sm">
//                                             <div className="flex items-center space-x-4 mb-4">
//                                                 <Image
//                                                     src={combinedProduct.image}
//                                                     alt={combinedProduct.name}
//                                                     width={60}
//                                                     height={60}
//                                                     className="rounded-lg"
//                                                 />
//                                                 <div className="flex-1">
//                                                     <h4 className="font-semibold text-black text-sm">{combinedProduct.name}</h4>
//                                                     <p className="text-xl font-bold text-black">${combinedProduct.price.toLocaleString()}</p>
//                                                 </div>
//                                                 <button className="bg-[#4285F4] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">
//                                                     Add to cart
//                                                 </button>
//                                             </div>
//                                             <div className="flex gap-2 flex-wrap">
//                                                 {combinedProduct.tags.map((tag) => (
//                                                     <span key={tag} className="px-3 py-1 border border-gray-300 rounded-full text-xs">{tag}</span>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )} */}
//                 </div>
//             </div>

//             {/* Product Information Tabs - Same as your existing code but dynamic */}
//             <div className="mt-16">
//                 {/* Tab Navigation */}
//                 {product.slug !== 'neuro-duo' && product.slug !=='vielight-alpha-4' && product.slug !=='neuro-gamma-4'  && (
//                     <div className="flex overflow-x-auto border-b border-gray-200 mb-6 sm:mb-8">
//                         <button
//                             onClick={() => setActiveTab('general')}
//                             className={`px-8 py-4 font-semibold ${activeTab === 'general'
//                                 ? 'border-b-2 border-[#EA1934] text-black bg-gray-200 rounded-t-xl'
//                                 : 'text-gray-500 hover:text-gray-700'
//                                 }`}
//                         >
//                             General info
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('device')}
//                             className={`px-8 py-4 font-semibold ${activeTab === 'device'
//                                 ? 'border-b-2 border-[#EA1934] text-black bg-gray-200 rounded-t-xl'
//                                 : 'text-gray-500 hover:text-gray-700'
//                                 }`}
//                         >
//                             The device
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('app')}
//                             className={`px-8 py-4 font-semibold ${activeTab === 'app'
//                                 ? 'border-b-2 border-[#EA1934] text-black bg-gray-200 rounded-t-xl'
//                                 : 'text-gray-500 hover:text-gray-700'
//                                 }`}
//                         >
//                             The app
//                         </button>
//                     </div>
//                 )}

//                 {/* Tab Content */}
//                 {product.slug === 'neuro-pro-2' ? (
//                     <NeuroPro2Details {...props} />
//                 ) : product.slug === 'neuro-gamma-4' ? (
//                     <NeuroGammaDetails {...props} />
//                 ) : product.slug === 'neuro-duo' ? (
//                     <NeuroDuoDetails  {...props} />
//                 ) : product.slug === 'vielight-alpha-4' ? (
//                     <NeuroAlphaDetails  {...props} />
                
//                 ) : activeTab === 'general' && (
//                     <div className="space-y-8">
//                         {/* Overview & Benefits */}
//                         <div className="grid lg:grid-cols-2 gap-12 items-start">
//                             <div className="relative">
//                                 <Image
//                                     src={images[0] || '/product-fallback.png'}
//                                     alt={`${product.name} overview`}
//                                     width={600}
//                                     height={400}
//                                     className="rounded-2xl"
//                                 />
//                             </div>

//                             <div className="space-y-6">
//                                 <h2 className="text-3xl font-bold text-black">Overview & benefits</h2>

//                                 {/* Benefits Tags */}
//                                 <div className="flex flex-wrap gap-3">
//                                     {/* {benefits.map((benefit) => (
//                                             <span key={benefit} className="px-4 py-2 border border-gray-400 rounded-full text-sm">
//                                                 {benefit}
//                                             </span>
//                                         ))} */}
//                                     {benefits.map((benefit: string) => (
//                                         <span key={benefit} className="px-4 py-2 border border-gray-400 rounded-full text-sm">
//                                             {benefit}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 <p className="text-gray-700 leading-relaxed">
//                                     {product.description}
//                                 </p>

//                                 {/* Key Specifications */}
//                                 <div className="space-y-4">
//                                     {Object.entries(specifications).map(([key, value]) => (
//                                         <div key={key} className="flex items-center space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                                 </svg>
//                                             </div>
//                                             <span className="font-semibold text-black">{String(value)}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* What's in the box */}
//                         <div className="bg-gray-200 rounded-2xl overflow-hidden">
//                             <button
//                                 onClick={() => toggleSection('whats-in-box')}
//                                 className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
//                             >
//                                 <h3 className="text-xl font-bold text-black">What's in the box</h3>
//                                 {expandedSection === 'whats-in-box' ? (
//                                     <Minus className="w-6 h-6 text-black" />
//                                 ) : (
//                                     <Plus className="w-6 h-6 text-black" />
//                                 )}
//                             </button>

//                             {expandedSection === 'whats-in-box' && (
//                                 <div className="px-8 pb-8">
//                                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                                         {/* Left side - List */}
//                                         <div className="space-y-6">
//                                             <p className="text-lg font-semibold text-black mb-6">Each device comes with:</p>

//                                             <div className="space-y-4">
//                                                 {/* {whatsInBox.map((item, index) => (
//                                                         <div key={index} className="flex items-center space-x-3">
//                                                             <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
//                                                                 {index + 1}
//                                                             </div>
//                                                             <span className="text-black font-medium">{item}</span>
//                                                         </div>
//                                                     ))} */}
//                                                 {whatsInBox.map((item: string, index: number) => (
//                                                     <div key={index} className="flex items-center space-x-3">
//                                                         <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
//                                                             {index + 1}
//                                                         </div>
//                                                         <span className="text-black font-medium">{item}</span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>

//                                         {/* Right side - Product image */}
//                                         <div className="relative">
//                                             <Image
//                                                 src={images[1] || images[0] || '/product-fallback.png'}
//                                                 alt={`${product.name} components`}
//                                                 width={600}
//                                                 height={500}
//                                                 className="rounded-2xl"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* User guides & tutorials */}
//                         <div className="bg-gray-200 rounded-2xl overflow-hidden">
//                             <button
//                                 onClick={() => toggleSection('user-guides')}
//                                 className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-300 transition-colors"
//                             >
//                                 <h3 className="text-xl font-bold text-black">User guides & tutorials</h3>
//                                 {expandedSection === 'user-guides' ? (
//                                     <Minus className="w-6 h-6 text-black" />
//                                 ) : (
//                                     <Plus className="w-6 h-6 text-black" />
//                                 )}
//                             </button>

//                             {expandedSection === 'user-guides' && (
//                                 <div className="px-8 pb-8 space-y-8">
//                                     {/* User guides */}
//                                     <div>
//                                         <h4 className="text-xl font-bold text-blue-600 mb-4">User guides</h4>
//                                         <p className="text-gray-700 mb-6">
//                                             Be sure to carefully review these guides in full before using the {product.name} for the first time.
//                                         </p>

//                                         <div className="flex flex-wrap gap-4">
//                                             {/* {userGuides.map((guide, index) => (
//                                                     <a
//                                                         key={index}
//                                                         href={guide.url}
//                                                         target="_blank"
//                                                         rel="noopener noreferrer"
//                                                         className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
//                                                     >
//                                                         {guide.title}
//                                                     </a>
//                                                 ))} */}
//                                             {userGuides.map((guide: any, index: number) => (
//                                                 <a
//                                                     key={index}
//                                                     href={guide.url}
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                     className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
//                                                 >
//                                                     {guide.title}
//                                                 </a>
//                                             ))}
//                                         </div>
//                                     </div>

//                                     {/* Video tutorials */}
//                                     {videos.length > 0 && (
//                                         <div>
//                                             <h4 className="text-xl font-bold text-blue-600 mb-6">Video tutorials</h4>

//                                             <div className="space-y-6">
//                                                 {/* {videos.map((video, index) => (
//                                                         <div key={index} className="relative rounded-2xl overflow-hidden bg-gray-400">
//                                                             <Image
//                                                                 src={video.thumbnail}
//                                                                 alt={video.title}
//                                                                 width={800}
//                                                                 height={400}
//                                                                 className="w-full h-64 object-cover"
//                                                             />
//                                                             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                                                                 <div className="text-center text-white">
//                                                                     <h5 className="text-2xl font-bold mb-2">{video.title}</h5>
//                                                                     <button
//                                                                         onClick={() => window.open(video.url, '_blank')}
//                                                                         className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-colors mx-auto"
//                                                                     >
//                                                                         <Play className="w-5 h-5" />
//                                                                         <span className="font-medium">Watch the video</span>
//                                                                     </button>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     ))} */}
//                                                 {videos.map((video: any, index: number) => (
//                                                     <div key={index} className="relative rounded-2xl overflow-hidden bg-gray-400">
//                                                         <Image
//                                                             src={video.thumbnail}
//                                                             alt={video.title}
//                                                             width={800}
//                                                             height={400}
//                                                             className="w-full h-64 object-cover"
//                                                         />
//                                                         <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                                                             <div className="text-center text-white">
//                                                                 <h5 className="text-2xl font-bold mb-2">{video.title}</h5>
//                                                                 <button
//                                                                     onClick={() => window.open(video.url, '_blank')}
//                                                                     className="flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-opacity-30 transition-colors mx-auto"
//                                                                 >
//                                                                     <Play className="w-5 h-5" />
//                                                                     <span className="font-medium">Watch the video</span>
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'device' && (
//                     <div className="space-y-12">
//                         {/* Device Details */}
//                         <div className="grid lg:grid-cols-2 gap-12 items-center">
//                             <div className="relative">
//                                 <Image
//                                     src={images[2] || images[0] || '/product-fallback.png'}
//                                     alt={`${product.name} device details`}
//                                     width={600}
//                                     height={500}
//                                     className="rounded-2xl"
//                                 />
//                             </div>

//                             <div className="space-y-6">
//                                 <h2 className="text-3xl font-bold text-blue-600">Advanced Technology</h2>

//                                 <p className="text-gray-700 leading-relaxed text-lg">
//                                     {/* {product.shortDescription} featuring cutting-edge photobiomodulation technology for optimal brain health and cognitive enhancement. */}
//                                     {shortDescription || product.description} featuring cutting-edge photobiomodulation technology for optimal brain health and cognitive enhancement.
//                                 </p>

//                                 <div className="space-y-4">
//                                     {Object.entries(specifications).map(([key, value]) => (
//                                         <div key={key} className="flex items-start space-x-3">
//                                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
//                                                 <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                                                 </svg>
//                                             </div>
//                                             <div>
//                                                 <p className="font-semibold text-black capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
//                                                 <p className="text-gray-600">{String(value)}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {activeTab === 'app' && (
//                     <div className="space-y-12">
//                         <div className="text-center">
//                             <h2 className="text-3xl font-bold text-black mb-4">Device Application & Usage</h2>
//                             <p className="text-gray-700 text-lg max-w-3xl mx-auto">
//                                 Learn how to use your {product.name} effectively with our comprehensive guides and protocols.
//                             </p>
//                         </div>

//                         {/* Usage Instructions */}
//                         <div className="grid md:grid-cols-3 gap-8">
//                             <div className="text-center space-y-4">
//                                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
//                                     <span className="text-2xl font-bold text-blue-600">1</span>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-black">Setup</h3>
//                                 <p className="text-gray-600">Follow the setup guide to properly configure your device for first use.</p>
//                             </div>

//                             <div className="text-center space-y-4">
//                                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
//                                     <span className="text-2xl font-bold text-blue-600">2</span>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-black">Use</h3>
//                                 <p className="text-gray-600">Begin your sessions following the recommended protocols and timing.</p>
//                             </div>

//                             <div className="text-center space-y-4">
//                                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
//                                     <span className="text-2xl font-bold text-blue-600">3</span>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-black">Track</h3>
//                                 <p className="text-gray-600">Monitor your progress and adjust settings as needed for optimal results.</p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//         <FooterSection />
//     </div>
//     );
// };



// export default ProductDetailSection;