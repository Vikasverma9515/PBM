// import React from 'react';
// import Link from 'next/link';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-50 border-t border-gray-200">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center mb-4">
//               <div className="bg-primary-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
//                 AI
//               </div>
//               <span className="ml-2 text-xl font-semibold text-gray-900">Marketplace</span>
//             </div>
//             <p className="text-gray-600 text-sm">
//               The premier marketplace for AI-generated assets. Discover, buy, and sell 
//               code, images, datasets, and prompts created by AI.
//             </p>
//           </div>
          
//           <div>
//             <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
//               Marketplace
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/marketplace?category=code" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Code
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/marketplace?category=image" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Images
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/marketplace?category=dataset" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Datasets
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/marketplace?category=prompt" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Prompts
//                 </Link>
//               </li>
//             </ul>
//           </div>
//                    <div>
//             <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
//               Support
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/help" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Help Center
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
//                   Privacy Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="mt-8 pt-8 border-t border-gray-200">
//           <p className="text-center text-sm text-gray-500">
//             © 2024 AI Marketplace. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer; 



import Link from "next/link"
import { Brain, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-gray-900">
              <div className="text-2xl font-bold">
                <span className="text-gray-900">PBM</span>
                <span className="text-gray-600 font-normal">DISTRIBUTORS</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Leading distributor of photobiomodulation devices for brain health and cognitive enhancement. 
              Discover the future of brain health with cutting-edge light therapy technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>1-800-PBM-HELP</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@pbmdistributors.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Vielight Neuro
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Vielight Duo
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Vielight Alpha
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 hover:text-gray-900 transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/research" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} PBM Distributors. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}