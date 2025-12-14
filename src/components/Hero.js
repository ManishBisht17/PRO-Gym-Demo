import React from 'react';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700"></div>
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-bounce-slow"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-20 container-custom text-center animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                        PRE ULTIMATE
                    </span>
                    <br />
                    <span className="text-white">GYMS</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up">
                    Transform Your Body. Transform Your Life.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <button
                        onClick={() => scrollToSection('membership')}
                        className="btn-primary w-full sm:w-auto"
                    >
                        Join Now
                    </button>
                    <button
                        onClick={() => scrollToSection('free-trial')}
                        className="btn-secondary w-full sm:w-auto"
                    >
                        Book Free Trial
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
                        <div className="text-gray-400">Happy Members</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
                        <div className="text-gray-400">Expert Trainers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
                        <div className="text-gray-400">Access</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">5+</div>
                        <div className="text-gray-400">Years Experience</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;