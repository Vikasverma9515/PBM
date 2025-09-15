import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CustomerTestimonialsSection: React.FC = () => {
    return (
        <div className="w-full bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-8">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    {/* Main Title with Trustpilot Rating */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <h2 className="text-4xl lg:text-5xl font-bold text-black">
                            Our customers say Excellent
                        </h2>
                        
                        {/* Trustpilot Stars */}
                        <div className="flex items-center gap-1 bg-green-500 px-3 py-2 rounded">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-white" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    {/* Rating Description */}
                    <p className="text-gray-600 text-lg">
                        <span className="font-semibold">4.8 Rating</span> based on <span className="font-semibold">215 reviews</span> by everyday people and professionals
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button className="absolute -left-[50px] top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    
                    <button className="absolute -right-[50px] top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <ChevronRight className="w-6 h-6 text-gray-600" />

                    </button>

                    {/* Testimonials Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                            {/* Quote Icon */}
                            <div className="text-[#219653] mb-6">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                            </div>

                            {/* Testimonial Title */}
                            <h3 className="text-xl font-bold text-black mb-4">A worthwhile investment</h3>
                            
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-green-500" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">Mar 10, 2023</span>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                The Vielight Neuro has become part of my routine for maintaining peak mental performance before...
                            </p>

                            {/* Reviewer Name */}
                            <p className="font-semibold text-black">Jordan</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                            {/* Quote Icon */}
                            <div className="text-[#219653] mb-6">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                            </div>

                            {/* Testimonial Title */}
                            <h3 className="text-xl font-bold text-black mb-4">Better sleep in 2 months</h3>
                            
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-green-500" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">Sep 14, 2024</span>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                I have been using my DUO for Gamma pulses in the morning and Alpha in the evening. I have...
                            </p>

                            {/* Reviewer Name */}
                            <p className="font-semibold text-black">Pat C.</p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
                            {/* Quote Icon */}
                            <div className="text-[#219653] mb-6">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                </svg>
                            </div>

                            {/* Testimonial Title */}
                            <h3 className="text-xl font-bold text-black mb-4">Great for athletes</h3>
                            
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-green-500" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">Oct 22, 2022</span>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                I started using the Vielight 655 just about a year ago. I'm a competitive swimmer and had heard that...
                            </p>

                            {/* Reviewer Name */}
                            <p className="font-semibold text-black">Aleks Evans</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTestimonialsSection;


// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const CustomerTestimonialsSection: React.FC = () => {
//     return (
//         <div className="w-full bg-gray-50 py-16">
//             <div className="max-w-7xl mx-auto px-8">
                
//                 {/* Header Section */}
//                 <div className="text-center mb-16">
//                     {/* Main Title with Trustpilot Rating */}
//                     <div className="flex items-center justify-center gap-4 mb-6">
//                         <h2 className="text-4xl lg:text-5xl font-bold text-black">
//                             Our customers say Excellent
//                         </h2>
                        
//                         {/* Trustpilot Stars - Individual green squares */}
//                         <div className="flex items-center gap-0">
//                             {[...Array(4)].map((_, i) => (
//                                 <div key={i} className="w-8 h-8 bg-[#00B67A] flex items-center justify-center">
//                                     <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
//                                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                                     </svg>
//                                 </div>
//                             ))}
//                             {/* Half-filled star */}
//                             <div className="w-8 h-8 bg-gray-300 flex items-center justify-center relative">
//                                 <div className="absolute left-0 top-0 w-4 h-8 bg-[#00B67A] flex items-center justify-center overflow-hidden">
//                                     <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
//                                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                                     </svg>
//                                 </div>
//                                 <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
//                                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Rating Description */}
//                     <p className="text-gray-600 text-lg">
//                         <span className="font-semibold">4.8 Rating</span> based on <span className="font-semibold">215 reviews</span> by everyday people and professionals
//                     </p>
//                 </div>

//                 {/* Testimonials Grid */}
//                 <div className="relative">
//                     {/* Navigation Arrows */}
//                     <button className="absolute -left-[50px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
//                         <ChevronLeft className="w-6 h-6 text-gray-600" />
//                     </button>
                    
//                     <button className="absolute -right-[50px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
//                         <ChevronRight className="w-6 h-6 text-gray-600" />
//                     </button>

//                     {/* Testimonials Cards */}
//                     <div className="grid md:grid-cols-3 gap-8">
                        
//                         {/* Testimonial 1 */}
//                         <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
//                             {/* Quote Icon */}
//                             <div className="text-[#00B67A] mb-6">
//                                 <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
//                                 </svg>
//                             </div>

//                             {/* Testimonial Title */}
//                             <h3 className="text-xl font-bold text-black mb-4">A worthwhile investment</h3>
                            
//                             {/* Trustpilot-style Stars Row */}
//                             <div className="flex items-center gap-2 mb-4">
//                                 <div className="flex items-center gap-0">
//                                     {[...Array(5)].map((_, i) => (
//                                         <div key={i} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center">
//                                             <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
//                                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                                             </svg>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <span className="text-gray-500 text-sm">Mar 10, 2023</span>
//                             </div>

//                             {/* Review Text */}
//                             <p className="text-gray-600 leading-relaxed mb-6">
//                                 The Vielight Neuro has become part of my routine for maintaining peak mental performance before...
//                             </p>

//                             {/* Reviewer Name */}
//                             <p className="font-semibold text-black">Jordan</p>
//                         </div>

//                         {/* Testimonial 2 */}
//                         <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
//                             {/* Quote Icon */}
//                             <div className="text-[#00B67A] mb-6">
//                                 <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
//                                 </svg>
//                             </div>

//                             {/* Testimonial Title */}
//                             <h3 className="text-xl font-bold text-black mb-4">Better sleep in 2 months</h3>
                            
//                             {/* Trustpilot-style Stars Row */}
//                             <div className="flex items-center gap-2 mb-4">
//                                 <div className="flex items-center gap-0">
//                                     {[...Array(5)].map((_, i) => (
//                                         <div key={i} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center">
//                                             <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
//                                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                                             </svg>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <span className="text-gray-500 text-sm">Sep 14, 2024</span>
//                             </div>

//                             {/* Review Text */}
//                             <p className="text-gray-600 leading-relaxed mb-6">
//                                 I have been using my DUO for Gamma pulses in the morning and Alpha in the evening. I have...
//                             </p>

//                             {/* Reviewer Name */}
//                             <p className="font-semibold text-black">Pat C.</p>
//                         </div>

//                         {/* Testimonial 3 */}
//                         <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative">
//                             {/* Quote Icon */}
//                             <div className="text-[#00B67A] mb-6">
//                                 <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//                                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
//                                 </svg>
//                             </div>

//                             {/* Testimonial Title */}
//                             <h3 className="text-xl font-bold text-black mb-4">Great for athletes</h3>
                            
//                             {/* Trustpilot-style Stars Row */}
//                             <div className="flex items-center gap-2 mb-4">
//                                 <div className="flex items-center gap-0">
//                                     {[...Array(5)].map((_, i) => (
//                                         <div key={i} className="w-5 h-5 bg-[#00B67A] flex items-center justify-center">
//                                             <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
//                                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                                             </svg>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <span className="text-gray-500 text-sm">Oct 22, 2022</span>
//                             </div>

//                             {/* Review Text */}
//                             <p className="text-gray-600 leading-relaxed mb-6">
//                                 I started using the Vielight 655 just about a year ago. I'm a competitive swimmer and had heard that...
//                             </p>

//                             {/* Reviewer Name */}
//                             <p className="font-semibold text-black">Aleks Evans</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerTestimonialsSection;