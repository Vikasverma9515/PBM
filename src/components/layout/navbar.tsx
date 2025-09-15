"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ChevronRight, Brain, Search, ShoppingCart, User, Pill } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@headlessui/react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
      isScrolled ? "bg-white/90 shadow-sm border-b border-gray-200" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
          <div className="text-2xl font-bold">
            <span className="text-gray-900">PBM</span>
            <span className="text-gray-600 font-normal">DISTRIBUTORS</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/shop" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Shop
          </Link>
          <Link href="/videos" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Videos
          </Link>
          <Link href="/research" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Research
          </Link>
          <Link href="/faqs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            FAQs
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="hidden md:flex gap-4 items-center">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ShoppingCart className="w-4 h-4" />
            Cart
          </Button>
          <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-lg px-6">
            Login
          </Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>
      
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-lg border-b border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/about" className="py-2 text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/shop" className="py-2 text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/videos" className="py-2 text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Videos
              </Link>
              <Link href="/research" className="py-2 text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Research
              </Link>
              <Link href="/faqs" className="py-2 text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                FAQs
              </Link>
              <Link href="/contact" className="py-2 text-sm font-medium text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
                <Button variant="ghost" className="flex items-center gap-2 text-gray-700 justify-start">
                  <ShoppingCart className="w-4 h-4" />
                  Cart
                </Button>
                <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-lg">
                  Login
                </Button>
              </div>
            </div>
          </motion.div>
        )}
    </header>
  )
}
