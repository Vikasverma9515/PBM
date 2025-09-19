// // components/Header.tsx - Add authentication state
// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingCart, User, LogOut } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import { useSession, signOut } from 'next-auth/react';

// const Header: React.FC = () => {
//     const { toggleCart, getTotalItems } = useCart();
//     const { data: session } = useSession();

//     return (
//                 <nav className="flex items-center justify-between px-8 py-6 ">
//             {/* Logo */}
//             <Link href="/" className="flex items-center">
//                 <Image
//                     src="/logo1.png"
//                     alt="PBM Distributors"
//                     width={120}
//                     height={60}
//                     className="h-12 w-auto"
//                 />
//             </Link>

//             {/* Navigation Links */}
//             <div className="hidden md:flex items-center space-x-8">
//                 <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</Link>
//                 <Link href="/shop" className="text-gray-700 hover:text-gray-900 font-medium">Shop</Link>
//                 <a href="#videos" className="text-gray-700 hover:text-gray-900 font-medium">Videos</a>
//                 <a href="#research" className="text-gray-700 hover:text-gray-900 font-medium">Research</a>
//                 <a href="#faqs" className="text-gray-700 hover:text-gray-900 font-medium">FAQs</a>
//                 <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
//             </div>

//             {/* Cart and User Actions */}
//             <div className="flex items-center space-x-4">
//                 <button 
//                     onClick={toggleCart}
//                     className="relative flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
//                 >
//                     <ShoppingCart className="w-4 h-4" />
//                     <span className="text-sm font-medium">Cart</span>
//                     {getTotalItems() > 0 && (
//                         <span className="absolute -top-2 -right-2 bg-[#EA1934] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                             {getTotalItems()}
//                         </span>
//                     )}
//                 </button>

//                 {session ? (
//                     <div className="relative group">
//                         <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
//                             <User className="w-4 h-4" />
//                             <span className="text-sm font-medium">{session.user?.name || 'Account'}</span>
//                         </button>
                        
//                         {/* Dropdown Menu */}
//                         <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                             <Link 
//                                 href="/account" 
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
//                             >
//                                 My Account
//                             </Link>
//                             <Link 
//                                 href="/orders" 
//                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                             >
//                                 Order History
//                             </Link>
//                             <button
//                                 onClick={() => signOut({ callbackUrl: '/' })}
//                                 className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-lg flex items-center"
//                             >
//                                 <LogOut className="w-4 h-4 mr-2" />
//                                 Sign Out
//                             </button>
//                         </div>
//                     </div>
//                 ) : (
//                     <Link 
//                         href="/signin"
//                         className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
//                     >
//                         <User className="w-4 h-4" />
//                         <span className="text-sm font-medium">Sign In</span>
//                     </Link>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Header;
// components/Header.tsx - Fix black background issue
'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useSession, signOut } from 'next-auth/react';

const Header: React.FC = () => {
    const { toggleCart, getTotalItems } = useCart();
    const { data: session } = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Close mobile menu when screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navigationLinks = [
        { href: '/about', label: 'About' },
        { href: '/shop', label: 'Shop' },
        { href: '#videos', label: 'Videos' },
        { href: '#research', label: 'Research' },
        { href: '#faqs', label: 'FAQs' },
        { href: '/contact', label: 'Contact' }
    ];

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center flex-shrink-0">
                            <Image
                                src="/Logo1.png"
                                alt="PBM Distributors"
                                width={100}
                                height={50}
                                className="h-8 sm:h-10 lg:h-12 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-700 hover:text-[#EA1934] font-medium text-sm xl:text-base transition-colors duration-200 relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EA1934] transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            ))}
                            {session?.user?.role === 'ADMIN' && (
                                <Link
                                    href="/admin"
                                    className="text-gray-700 hover:text-[#EA1934] font-semibold text-sm xl:text-base transition-colors duration-200 relative group"
                                >
                                    Admin
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EA1934] transition-all duration-200 group-hover:w-full"></span>
                                </Link>
                            )}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            {/* Cart Button */}
                            <button 
                                onClick={toggleCart}
                                className="relative flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 hover:border-[#EA1934] transition-all duration-200 group"
                            >
                                <ShoppingCart className="w-4 h-4 text-gray-600 group-hover:text-[#EA1934] transition-colors" />
                                <span className="hidden sm:inline text-sm font-medium text-gray-700 group-hover:text-[#EA1934]">Cart</span>
                                {getTotalItems() > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#EA1934] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                        {getTotalItems()}
                                    </span>
                                )}
                            </button>

                            {/* User Authentication */}
                            {session ? (
                                <div className="relative">
                                    <button 
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
                                    >
                                        <User className="w-4 h-4 text-gray-600" />
                                        <span className="hidden sm:inline text-sm font-medium text-gray-700 max-w-20 truncate">
                                            {session.user?.name?.split(' ')[0] || 'User'}
                                        </span>
                                    </button>
                                    
                                    {/* User Dropdown Menu */}
                                    {isUserMenuOpen && (
                                        <>
                                            <div 
                                                className="fixed inset-0 z-10"
                                                onClick={() => setIsUserMenuOpen(false)}
                                            />
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                                                <Link 
                                                    href="/account" 
                                                    onClick={() => setIsUserMenuOpen(false)}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                >
                                                    My Account
                                                </Link>
                                                <Link 
                                                    href="/orders" 
                                                    onClick={() => setIsUserMenuOpen(false)}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                >
                                                    Order History
                                                </Link>
                                                {session?.user?.role === 'ADMIN' && (
                                                    <Link 
                                                        href="/admin" 
                                                        onClick={() => setIsUserMenuOpen(false)}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                    >
                                                        Admin Dashboard
                                                    </Link>
                                                )}
                                                <hr className="my-1 border-gray-200" />
                                                <button
                                                    onClick={() => {
                                                        setIsUserMenuOpen(false);
                                                        signOut({ callbackUrl: '/' });
                                                    }}
                                                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center"
                                                >
                                                    <LogOut className="w-4 h-4 mr-2" />
                                                    Sign Out
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <Link 
                                    href="/signin"
                                    className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-[#EA1934] text-white rounded-full hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
                                >
                                    <User className="w-4 h-4" />
                                    <span className="hidden sm:inline text-sm font-medium">Sign In</span>
                                </Link>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu - No black overlay */}
                <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out z-40 ${
                    isMobileMenuOpen 
                        ? 'max-h-screen opacity-100 visible' 
                        : 'max-h-0 opacity-0 invisible overflow-hidden'
                }`}>
                    <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                        {navigationLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className={`block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#EA1934] hover:bg-gray-50 rounded-md transition-all duration-200 ${
                                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                }`}
                                style={{ 
                                    transitionDelay: `${index * 50}ms` 
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        
                        {/* Mobile User Menu */}
                        {session && (
                            <>
                                <hr className="my-4 border-gray-200" />
                                <Link
                                    href="/account"
                                    onClick={closeMobileMenu}
                                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#EA1934] hover:bg-gray-50 rounded-md transition-colors"
                                >
                                    My Account
                                </Link>
                                <Link
                                    href="/orders"
                                    onClick={closeMobileMenu}
                                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#EA1934] hover:bg-gray-50 rounded-md transition-colors"
                                >
                                    Order History
                                </Link>
                                {session?.user?.role === 'ADMIN' && (
                                    <Link
                                        href="/admin"
                                        onClick={closeMobileMenu}
                                        className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#EA1934] hover:bg-gray-50 rounded-md transition-colors"
                                    >
                                        Admin Dashboard
                                    </Link>
                                )}
                                <button
                                    onClick={() => {
                                        closeMobileMenu();
                                        signOut({ callbackUrl: '/' });
                                    }}
                                    className="w-full text-left px-3 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center"
                                >
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Sign Out
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;