'use client';
import React, { useState } from 'react';
import { Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        agreeToPolicy: false
    });

    const [countryCode, setCountryCode] = useState('US');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div className="w-full bg-white">
            {/* Contact Info Section */}
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-[#EA1934] text-lg font-medium mb-4">Contact us</p>
                        <h1 className="text-5xl font-bold text-black mb-6">
                            We'd love to hear from you
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Our friendly team is always here to chat.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {/* Email */}
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                                <Mail className="w-8 h-8 text-[#EA1934]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">Email</h3>
                                <a 
                                    href="mailto:pmbdistributors@gmail.com"
                                    className="text-[#EA1934] text-lg font-medium hover:underline"
                                >
                                    pmbdistributors@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Office */}
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                                <MapPin className="w-8 h-8 text-[#EA1934]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">Office</h3>
                                <div className="text-[#EA1934] text-lg font-medium">
                                    <p>5345 West Blvd.</p>
                                    <p>Vancouver, BC V6M 3W4</p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                                <Phone className="w-8 h-8 text-[#EA1934]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-4">Phone</h3>
                                <a 
                                    href="tel:+16045655191"
                                    className="text-[#EA1934] text-lg font-medium hover:underline"
                                >
                                    +1 (604) 565-5191
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p className="text-[#EA1934] text-lg font-medium mb-4">Contact us</p>
                        <h2 className="text-4xl font-bold text-black mb-6">
                            Get in touch
                        </h2>
                        <p className="text-gray-600 text-lg">
                            We'd love to hear from you. Please fill out this form.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* First Name & Last Name */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="First name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-1 focus:ring-[#EA1934] transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Last name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-1 focus:ring-[#EA1934] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@company.com"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-1 focus:ring-[#EA1934] transition-colors"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
                                Phone number
                            </label>
                            <div className="flex">
                                <div className="relative">
                                    <select 
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="appearance-none bg-white border border-gray-300 border-r-0 rounded-l-lg px-4 py-3 pr-8 focus:outline-none focus:border-[#EA1934] focus:ring-1 focus:ring-[#EA1934] transition-colors"
                                    >
                                        <option value="US">US</option>
                                        <option value="CA">CA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                </div>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="+1 (555) 000-0000"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:border-[#EA1934] focus:ring-1 focus:ring-[#EA1934] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Leave us a message..."
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EA1934] focus:ring-1 focus:ring-[#EA1934] transition-colors resize-none"
                                required
                            />
                        </div>

                        {/* Privacy Policy Checkbox */}
                        <div className="flex items-start space-x-3">
                            <input
                                type="checkbox"
                                id="agreeToPolicy"
                                name="agreeToPolicy"
                                checked={formData.agreeToPolicy}
                                onChange={handleInputChange}
                                className="mt-1 w-4 h-4 text-[#EA1934] border-gray-300 rounded focus:ring-[#EA1934] focus:ring-2"
                                required
                            />
                            <label htmlFor="agreeToPolicy" className="text-gray-600 text-sm">
                                You agree to our friendly{' '}
                                <a href="/privacy-policy" className="text-gray-900 underline hover:text-[#EA1934]">
                                    privacy policy
                                </a>
                                .
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#EA1934] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-[#EA1934] focus:ring-offset-2 transition-colors"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;