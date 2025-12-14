import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-dark-800">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Have questions about our gym or membership plans? We're here to help you start your fitness journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-dark-700 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                                        <p className="text-gray-400">
                                            123 Fitness Street, Gym District<br />
                                            Mumbai, Maharashtra 400001<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                                        <p className="text-gray-400">
                                            <a href="tel:+919876543210" className="hover:text-green-400 transition-colors">
                                                +91 98765 43210
                                            </a>
                                        </p>
                                        <p className="text-gray-400">
                                            <a href="tel:+919876543211" className="hover:text-green-400 transition-colors">
                                                +91 98765 43211
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                                        <p className="text-gray-400">
                                            <a href="mailto:info@preultimategym.com" className="hover:text-purple-400 transition-colors">
                                                info@preultimategym.com
                                            </a>
                                        </p>
                                        <p className="text-gray-400">
                                            <a href="mailto:support@preultimategym.com" className="hover:text-purple-400 transition-colors">
                                                support@preultimategym.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Operating Hours */}
                        <div className="bg-dark-700 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Operating Hours</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Monday - Friday</span>
                                    <span className="text-white font-semibold">5:00 AM - 11:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Saturday</span>
                                    <span className="text-white font-semibold">6:00 AM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="text-white font-semibold">7:00 AM - 9:00 PM</span>
                                </div>
                            </div>
                            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <p className="text-blue-400 text-sm font-medium">
                                    💡 24/7 access available for premium members
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-dark-700 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>
                        <div className="bg-gray-600 rounded-lg h-96 flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gray-400 mb-4">Interactive Map Placeholder</p>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                                    Open in Google Maps
                                </button>
                            </div>
                        </div>

                        {/* Directions */}
                        <div className="mt-6 space-y-3">
                            <h4 className="text-lg font-semibold text-white">How to Reach</h4>
                            <div className="space-y-2 text-gray-400">
                                <p>🚇 Nearest Metro: Fitness Station (2 min walk)</p>
                                <p>🚌 Bus Stop: Gym Complex (Right outside)</p>
                                <p>🚗 Parking: Free parking available</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-white mb-8">Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                            <span className="text-white font-bold">f</span>
                        </a>
                        <a href="#" className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                            <span className="text-white font-bold">📷</span>
                        </a>
                        <a href="#" className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                            <span className="text-white font-bold">🐦</span>
                        </a>
                        <a href="#" className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                            <span className="text-white font-bold">▶️</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;