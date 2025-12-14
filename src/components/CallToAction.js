import React from 'react';

const CallToAction = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="section-padding bg-gradient-to-br from-dark-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce-slow"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Body?
                    </h2>

                    {/* Subtext */}
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                        Join PRE ULTIMATE GYMS today and achieve your fitness goals with our expert trainers,
                        modern equipment, and supportive community.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                        <button
                            onClick={() => scrollToSection('free-trial')}
                            className="btn-primary text-lg px-12 py-4 w-full sm:w-auto"
                        >
                            Join Now
                        </button>
                        <button
                            onClick={() => scrollToSection('membership')}
                            className="btn-secondary text-lg px-12 py-4 w-full sm:w-auto"
                        >
                            View Plans
                        </button>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Quick Results</h3>
                            <p className="text-gray-400">See visible changes in just 30 days with our proven training methods</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                            <p className="text-gray-400">Professional trainers guide you every step of your fitness journey</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Guaranteed Success</h3>
                            <p className="text-gray-400">30-day money-back guarantee if you're not satisfied with results</p>
                        </div>
                    </div>

                    {/* Urgency Element */}
                    <div className="mt-16 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <svg className="w-6 h-6 text-red-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-red-400 font-bold text-lg">Limited Time Offer</span>
                        </div>
                        <p className="text-gray-300 text-lg">
                            Join this month and get <span className="text-yellow-400 font-bold">50% OFF</span> your first month +
                            <span className="text-blue-400 font-bold"> FREE personal training session</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;