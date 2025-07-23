import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Animacja wpływania przy załadowaniu strony
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: '#o-mnie', label: 'O mnie' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#uslugi', label: 'Usługi' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled || isMenuOpen ? 'bg-slate-900/70 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      } ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-full opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="group relative text-3xl font-black text-white tracking-wider transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">
  <span className="relative z-10">
    Zet<span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse">.</span>Point
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
</a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-slate-300 hover:text-cyan-400 transition-all duration-300 ${
                isVisible 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`text-white focus:outline-none transition-all duration-500 ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-8 opacity-0'
            }`}
            style={{
              transitionDelay: '500ms'
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-900/90 backdrop-blur-sm">
          <div className="flex flex-col items-center py-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`py-2 text-slate-300 hover:text-cyan-400 transition-all duration-300 ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;