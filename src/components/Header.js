import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container-custom">
                <div className="flex items-center justify-between py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        PRE ULTIMATE GYMS
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Home</button>
                        <button onClick={() => scrollToSection('why-choose-us')} className="hover:text-blue-400 transition-colors">Why Us</button>
                        <button onClick={() => scrollToSection('membership')} className="hover:text-blue-400 transition-colors">Membership</button>
                        <button onClick={() => scrollToSection('gallery')} className="hover:text-blue-400 transition-colors">Gallery</button>
                        <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                            <span className={`block h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-6 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden pb-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            <button onClick={() => scrollToSection('home')} className="text-left hover:text-blue-400 transition-colors">Home</button>
                            <button onClick={() => scrollToSection('why-choose-us')} className="text-left hover:text-blue-400 transition-colors">Why Us</button>
                            <button onClick={() => scrollToSection('membership')} className="text-left hover:text-blue-400 transition-colors">Membership</button>
                            <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-blue-400 transition-colors">Gallery</button>
                            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-400 transition-colors">Contact</button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;