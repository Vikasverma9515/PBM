'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const FooterSection: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <footer className="w-full bg-[#EA1934] text-white">
            {/* Main Footer Content */}
            {/* Content container: width: 1280px, height: 381px, max-width: 1280px, gap: 80px */}
            <div className="w-[1280px] h-[381px] max-w-[1280px] mx-auto px-8 py-16 ">
                <div className="grid grid-cols-4 gap-20 h-full">
                    
                    {/* Left Column - Logo and Newsletter */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div>
                            {/* <Image
                                src="/logo1.png"
                                alt="PBM Distributors"
                                width={120}
                                height={60}
                                className="h-16 w-auto mb-6"
                            /> */}
                            <div>
    <Image
        src="/logo1.png"
        alt="PBM Distributors"
        width={120}
        height={60}
        className="h-16 w-auto mb-6 brightness-0 invert"
    />
</div>
                        </div>

                        {/* Newsletter Description */}
                        <p className="text-white text-base leading-relaxed mb-6">
                            Subscribe to our newsletter for updates on features, releases, and exclusive offers.
                        </p>

                        {/* Newsletter Form */}
                        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email here"
                                    className="flex-1 px-4 py-2 bg-transparent border-b border-white/40 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                                    required
                                />
                                <button
                                    type="submit"
                                    className=" text-white border-1 rounded-xl px-6 py-2 hover:bg-gray-100 transition-colors"
                                >
                                    Join
                                </button>
                            </div>
                        </form>

                        {/* Privacy Notice */}
                        <p className="text-white/80 text-sm">
                            By subscribing, you consent to our Privacy Policy and agree to receive updates.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='ml-20'>
                        <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">Product Info</a></li>
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">Customer Support</a></li>
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">FAQs</a></li>
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">Blog Posts</a></li>
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div className="ml-20">
                        <h3 className="text-xl font-semibold text-white mb-6">Connect With Us</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">Newsletter</a></li>
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">Events</a></li>
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">Webinars</a></li>
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">Partnerships</a></li>
                            <li><a href="#" className="text-white hover:text-white/80 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Stay Social */}
                    <div className="ml-20">
                        <h3 className="text-xl font-bold text-white mb-6 ">Stay Social</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297L3.886 16.94l1.246-1.235c-.784-.86-1.267-2.006-1.267-3.259 0-2.634 2.122-4.756 4.756-4.756 2.634 0 4.756 2.122 4.756 4.756 0 2.634-2.122 4.756-4.756 4.756z"/>
                                    </svg>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                    <span>X</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                    <span>YouTube</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/20 py-6 pt-10">
                <div className="max-w-[1280px] mx-auto px-8">
                    <div className="flex justify-between items-center">
                        {/* Copyright */}
                        <p className="text-white text-sm">
                            © 2025 PBMDistributors. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex items-center space-x-8">
                            <a href="#" className="text-white text-sm underline hover:text-white/80 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-white text-sm underline hover:text-white/80 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-white text-sm underline hover:text-white/80 transition-colors">
                                Cookie Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;