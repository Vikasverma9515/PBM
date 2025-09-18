// import React from 'react';
// import Image from 'next/image';

// interface ConsultationSectionProps {
//     backgroundImage?: string;
//     title?: string;
//     description?: string;
//     phoneNumber?: string;
//     showPhoneIcon?: boolean;
// }

// const ConsultationSection: React.FC<ConsultationSectionProps> = ({
//     backgroundImage = "/consultation-background.png",
//     title = "Which device is right for me?",
//     description = "Get free consultation call to understand about the devices and their functions and which device is right for you.",
//     phoneNumber = "+1 (604) 522-1717",
//     showPhoneIcon = true
// }) => {
//     return (
//         <div 
//             className="relative w-full overflow-hidden"
//             style={{
//                 width: '1500px',
//                 height: '428px',
//                 transform: 'rotate(-180deg)',
//                 opacity: 1,
//                 maxWidth: '100vw',
//                 margin: '0 auto'
//             }}
//         >
//             {/* Background Image Container */}
//             <div 
//                 className="absolute inset-0"
//                 style={{
//                     transform: 'rotate(180deg)', // Counter-rotate to make image appear normal
//                 }}
//             >
//                 <Image
//                     src={backgroundImage}
//                     alt="Medical professional using brain health device"
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//                 {/* Optional overlay for better text readability */}
//                 <div className="absolute inset-0 bg-white/10"></div>
//             </div>

//             {/* Content Container */}
//             <div 
//                 className="absolute"
//                 style={{
//                     width: '458px',
//                     height: '180px',
//                     top: '84px',
//                     left: '882px',
//                     transform: 'rotate(180deg)', // Counter-rotate to make text appear normal
//                     opacity: 1
//                 }}
//             >
//                 <div 
//                     className="flex flex-col justify-center h-full"
//                     style={{
//                         gap: '20px'
//                     }}
//                 >
//                     {/* Title */}
//                     <h2 
//                         className="font-bold text-black leading-tight"
//                         style={{
//                             fontSize: '48px',
//                             lineHeight: '1.1'
//                         }}
//                     >
//                         {title}
//                     </h2>

//                     {/* Description */}
//                     <p 
//                         className="text-gray-700 leading-relaxed"
//                         style={{
//                             fontSize: '18px',
//                             lineHeight: '1.5'
//                         }}
//                     >
//                         {description}
//                     </p>

//                     {/* Phone Number */}
//                     <div className="flex items-center" style={{ gap: '12px' }}>
//                         {showPhoneIcon && (
//                             <div className="w-6 h-6 flex-shrink-0">
//                                 <svg 
//                                     viewBox="0 0 24 24" 
//                                     fill="none" 
//                                     className="w-full h-full text-[#EA1934]"
//                                 >
//                                     <path 
//                                         d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" 
//                                         stroke="currentColor" 
//                                         strokeWidth="2" 
//                                         strokeLinecap="round" 
//                                         strokeLinejoin="round"
//                                     />
//                                 </svg>
//                             </div>
//                         )}
//                         <span 
//                             className="font-bold text-black"
//                             style={{
//                                 fontSize: '24px'
//                             }}
//                         >
//                             {phoneNumber}
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ConsultationSection;



import React from 'react';
import Image from 'next/image';

interface ConsultationSectionProps {
    backgroundImage?: string;
    title?: string;
    description?: string;
    phoneNumber?: string;
    showPhoneIcon?: boolean;
}

const ConsultationSection: React.FC<ConsultationSectionProps> = ({
    backgroundImage = "/consultation-background.png",
    title = "Which device is right for me?",
    description = "Get free consultation call to understand about the devices and their functions and which device is right for you.",
    phoneNumber = "+1 (604) 522-1717",
    showPhoneIcon = true
}) => {
    return (
        <div className="relative w-full overflow-hidden">
            
            {/* Desktop Layout - UNCHANGED */}
            <div 
                className="hidden lg:block relative w-full overflow-hidden"
                style={{
                    width: '1500px',
                    height: '428px',
                    transform: 'rotate(-180deg)',
                    opacity: 1,
                    maxWidth: '100vw',
                    margin: '0 auto'
                }}
            >
                {/* Background Image Container - Desktop */}
                <div 
                    className="absolute inset-0"
                    style={{
                        transform: 'rotate(180deg)', // Counter-rotate to make image appear normal
                    }}
                >
                    <Image
                        src={backgroundImage}
                        alt="Medical professional using brain health device"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Optional overlay for better text readability */}
                    <div className="absolute inset-0 bg-white/10"></div>
                </div>

                {/* Content Container - Desktop */}
                <div 
                    className="absolute"
                    style={{
                        width: '458px',
                        height: '180px',
                        top: '84px',
                        left: '882px',
                        transform: 'rotate(180deg)', // Counter-rotate to make text appear normal
                        opacity: 1
                    }}
                >
                    <div 
                        className="flex flex-col justify-center h-full"
                        style={{
                            gap: '20px'
                        }}
                    >
                        {/* Title */}
                        <h2 
                            className="font-bold text-black leading-tight"
                            style={{
                                fontSize: '48px',
                                lineHeight: '1.1'
                            }}
                        >
                            {title}
                        </h2>

                        {/* Description */}
                        <p 
                            className="text-gray-700 leading-relaxed"
                            style={{
                                fontSize: '18px',
                                lineHeight: '1.5'
                            }}
                        >
                            {description}
                        </p>

                        {/* Phone Number */}
                        <div className="flex items-center" style={{ gap: '12px' }}>
                            {showPhoneIcon && (
                                <div className="w-6 h-6 flex-shrink-0">
                                    <svg 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        className="w-full h-full text-[#EA1934]"
                                    >
                                        <path 
                                            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            )}
                            <span 
                                className="font-bold text-black"
                                style={{
                                    fontSize: '24px'
                                }}
                            >
                                {phoneNumber}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Layout - NEW Responsive Design */}
            <div className="block lg:hidden relative w-full">
                {/* Background Image Container - Mobile/Tablet */}
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
                    <Image
                        src={backgroundImage}
                        alt="Medical professional using brain health device"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '30% center' }}
                        priority
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
                </div>

                {/* Content Overlay - Mobile/Tablet */}
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full px-4 sm:px-6 md:px-8">
                        <div className="max-w-2xl mx-auto lg:mx-0 space-y-4 sm:space-y-6">
                            
                            {/* Title - Responsive */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight text-center sm:text-left">
                                {title}
                            </h2>

                            {/* Description - Responsive */}
                            <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
                                    {description}
                                </p>
                            </div>

                            {/* Phone Number - Responsive */}
                            <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                                <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4">
                                    {showPhoneIcon && (
                                        <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                                            <svg 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                className="w-full h-full text-[#EA1934]"
                                            >
                                                <path 
                                                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" 
                                                    stroke="currentColor" 
                                                    strokeWidth="2" 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                    <a 
                                        href={`tel:${phoneNumber}`}
                                        className="font-bold text-black text-lg sm:text-xl md:text-2xl hover:text-[#EA1934] transition-colors"
                                    >
                                        {phoneNumber}
                                    </a>
                                </div>
                            </div>

                            {/* Call-to-Action Button - Mobile/Tablet Only */}
                            <div className="flex justify-center sm:justify-start">
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="bg-[#EA1934] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-red-600 transition-colors text-sm sm:text-base shadow-lg"
                                >
                                    Call Now for Free Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultationSection;