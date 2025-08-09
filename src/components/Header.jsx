import React, { useState, useEffect } from 'react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/edunation-logo.png" 
              alt="EDUNATION FEST 2025" 
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain max-w-[250px] sm:max-w-[300px] lg:max-w-[350px]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-accent-700 hover:text-primary-600 font-medium transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('speakers')}
              className="text-accent-700 hover:text-primary-600 font-medium transition-colors"
            >
              Pembicara
            </button>
            <button 
              onClick={() => scrollToSection('workshop')}
              className="text-accent-700 hover:text-primary-600 font-medium transition-colors"
            >
              Workshop
            </button>
            <button 
              onClick={() => scrollToSection('details')}
              className="text-accent-700 hover:text-primary-600 font-medium transition-colors"
            >
              Detail Acara
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-accent-700 hover:text-primary-600 font-medium transition-colors"
            >
              Kontak
            </button>
            <button className="btn-primary">
              Daftar Sekarang
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-accent-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-accent-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-accent-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="py-4 space-y-4 border-t border-accent-200">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-accent-700 hover:text-primary-600 font-medium py-2 transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('speakers')}
              className="block w-full text-left text-accent-700 hover:text-primary-600 font-medium py-2 transition-colors"
            >
              Pembicara
            </button>
            <button 
              onClick={() => scrollToSection('workshop')}
              className="block w-full text-left text-accent-700 hover:text-primary-600 font-medium py-2 transition-colors"
            >
              Workshop
            </button>
            <button 
              onClick={() => scrollToSection('details')}
              className="block w-full text-left text-accent-700 hover:text-primary-600 font-medium py-2 transition-colors"
            >
              Detail Acara
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-accent-700 hover:text-primary-600 font-medium py-2 transition-colors"
            >
              Kontak
            </button>
            <button className="btn-primary w-full mt-4">
              Daftar Sekarang
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
