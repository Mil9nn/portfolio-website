import React from 'react';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg' : 'bg-transparent'} sticky top-0 z-10 transition-all duration-300`}>
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold shadow-md transform hover:scale-105 transition-transform duration-300">
              MS
            </div>
            <h1 className={`${isScrolled ? 'text-white' : 'text-gray-900 dark:text-white'} text-2xl font-extrabold transition-colors duration-300`}>Milan Singh</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Theme Toggle - Added here */}
            <ThemeToggle />
            
            <a href="https://github.com/Mil9nn" className={`${isScrolled ? 'text-white hover:text-yellow-300' : 'text-blue-700 dark:text-blue-300 hover:text-purple-700 dark:hover:text-purple-300'} font-bold py-2 px-4 rounded-lg hover:underline transition-all duration-300 cursor-pointer`}>
              View my Work
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2.5 px-6 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2">
              <span>Download Resume</span>
              <img src="/svgs/download.svg" alt="download-icon" className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle for Mobile - Added here */}
            <ThemeToggle />
            
            <button
              className={`${isScrolled ? 'text-white' : 'text-blue-700 dark:text-white'} transition-colors duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pt-4 border-t border-amber-400/30 mt-3 animate-fadeDown">
            <div className="flex flex-col space-y-3">
              <a href="https://github.com/Mil9nn" className="text-blue-700 dark:text-blue-300 font-bold py-3 px-4 rounded-lg hover:bg-amber-200/80 dark:hover:bg-gray-700 transition-all text-left">
                View my Work
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-3 px-5 rounded-lg transition-all text-left hover:shadow-md">
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;