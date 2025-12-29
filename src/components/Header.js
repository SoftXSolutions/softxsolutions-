import { useState, useEffect } from 'react';
import logoImage from '../assets/images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        }
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ${isScrolled
                ? 'bg-white/10 backdrop-blur-xl border-b border-white/20'
                : 'bg-white/5 backdrop-blur-lg'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16 sm:h-18 lg:h-20 relative overflow-visible">
                    {/* Centered Logo - Extended below header */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center top-0">
                        <div className="hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,69,0,0.5)] transition-all duration-300 cursor-pointer">
                            <img
                                src={logoImage}
                                alt="SoftXSol Logo"
                                className="h-14 sm:h-16 lg:h-16 lg:mt-4 w-auto object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Fallback logo */}
                            <div className="hidden items-center space-x-1">
                                <div className="relative">
                                    <span className="text-softx-orange bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">C</span>
                                </div>
                                <div className="text-2xl lg:text-3xl font-bold text-softx-white">
                                    <span className="text-softx-orange">X</span><span className="text-softx-white">S</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation - Right Side */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-auto">
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-softx-white hover:text-softx-orange transition-colors duration-300 font-normal text-base lg:text-lg"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('faqs')}
                            className="text-softx-white hover:text-softx-orange transition-colors duration-300 font-normal text-base lg:text-lg"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            FAQ's
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-softx-white hover:text-softx-orange transition-colors duration-300 font-normal text-base lg:text-lg"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Contact Us
                        </button>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden absolute right-0">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-softx-white hover:text-softx-orange focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-softx-gray-light rounded-lg mt-2">
                            <button
                                onClick={() => scrollToSection('services')}
                                className="block w-full text-left px-3 py-2 text-softx-white hover:text-softx-orange transition-colors duration-300"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection('faqs')}
                                className="block w-full text-left px-3 py-2 text-softx-white hover:text-softx-orange transition-colors duration-300"
                            >
                                FAQ's
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="block w-full text-left px-3 py-2 text-softx-white hover:text-softx-orange transition-colors duration-300"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;