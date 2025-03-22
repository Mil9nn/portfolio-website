
import React from 'react';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
  })

  return (
    <header className={`${isScrolled ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' : 'bg-white'} sticky top-0 z-10`}>
      <div className="container rounded-sm mx-auto py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
              MS
            </div>
            <h1 className={`${isScrolled ? 'text-gray-900' : ''} text-2xl font-extrabold`}>Milan Singh</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="https://github.com/Mil9nn" className={`${isScrolled ? 'text-yellow-400' : ''} text-blue-700 hover:text-purple-700 font-bold py-2 px-3 rounded-lg hover:underline transition-all cursor-pointer`}>
              View my Work
            </a>
            <button className="bg-blue-700 flex gap-1 items-center text-white font-bold py-2 px-4 rounded-full hover:scale-[1.1] active:scale-[0.9] transition-all cursor-pointer">
              <span>Download Resume</span>
              <img src="/svgs/download.svg" alt="download-icon" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 pt-4 border-t border-amber-400 mt-3">
            <div className="flex flex-col space-y-3">
              <button className="text-blue-700 font-bold py-2 px-3 rounded-lg hover:bg-amber-200 transition-all text-left">
                View my Work
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-all text-left">
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