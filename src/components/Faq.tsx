'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQsSection: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default

    const faqs = [
        {
            id: 0,
            question: "What is photobiomodulation?",
            answer: "Photobiomodulation (PBM) is a non-invasive therapy that uses light to stimulate cellular function. It promotes healing, reduces inflammation, and enhances cognitive performance. Our devices utilize this technology to support brain health."
        },
        {
            id: 1,
            question: "How to use devices?",
            answer: "Using our devices is simple and user-friendly. Just wear the headset as instructed, ensuring proper placement. Follow the recommended session duration for optimal results."
        },
        {
            id: 2,
            question: "Where to purchase?",
            answer: "You can purchase our products directly from our eCommerce website. We offer secure checkout and free shipping across Canada and the US. Browse our selection and order today!"
        },
        {
            id: 3,
            question: "Are there any discounts?",
            answer: "We occasionally offer promotions and discounts on our products. Subscribe to our newsletter to stay updated on special offers. Don't miss your chance to save on enhancing your brain health!"
        },
        {
            id: 4,
            question: "What if I have issues?",
            answer: "If you encounter any issues with your device, please reach out to our customer support team. We are here to assist you with troubleshooting and warranty inquiries. Your satisfaction is our priority."
        }
    ];

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div 
            className="w-full h-[1200px] bg-[#171717] text-white"
            style={{ 
                paddingTop: '80px', // Section Padding Large
                paddingBottom: '0px', // Section Padding Large
                paddingLeft: '32px', // Page Padding Global
                paddingRight: '32px' // Page Padding Global
            }}
        >
            <div className="max-w-[1440px] mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                        FAQs
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Find answers to your questions about our products and photobiomodulation technology.
                    </p>
                </div>

                {/* FAQs Container */}
                {/* width: 768px, height: 744px, max-width: 768px, border-bottom-width: Divider Width */}
                <div className="max-w-[768px] mx-auto">
                    <div className="space-y-0">
                        {faqs.map((faq, index) => (
                            <div 
                                key={faq.id} 
                                className="border-b border-gray-600"
                                style={{ borderBottomWidth: '1px' }}
                            >
                                {/* FAQ Question Button */}
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full py-8 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors px-4"
                                >
                                    <h3 className="text-xl font-semibold text-white pr-8">
                                        {faq.question}
                                    </h3>
                                    <div className="flex-shrink-0">
                                        {openFAQ === faq.id ? (
                                            <ChevronUp className="w-6 h-6 text-white" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-white" />
                                        )}
                                    </div>
                                </button>

                                {/* FAQ Answer */}
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-4 pb-8">
                                        <p className="text-gray-300 leading-relaxed text-base">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Still Have Questions Section */}
                <div className="text-center mt-20">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Still have questions?
                    </h3>
                    <p className="text-gray-300 text-lg mb-8">
                        We're here to help you!
                    </p>
                    <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQsSection;