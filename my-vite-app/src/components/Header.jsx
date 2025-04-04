import React, { useState, useEffect } from 'react';
import { Home, Briefcase, FolderKanban, MessageSquare, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const getActiveClasses = (activeClass, isActive, isScrolled) => {
  // Map color names to their respective Tailwind classes
  const colorMap = {
    cyan: {
      text: 'text-cyan-300',
      hover: 'hover:text-cyan-300',
      gradient: 'bg-gradient-to-r from-cyan-300 to-cyan-500'
    },
    pink: {
      text: 'text-pink-300',
      hover: 'hover:text-pink-300',
      gradient: 'bg-gradient-to-r from-pink-300 to-pink-500'
    },
    purple: {
      text: 'text-purple-300',
      hover: 'hover:text-purple-300',
      gradient: 'bg-gradient-to-r from-purple-300 to-purple-500'
    },
    green: {
      text: 'text-green-300',
      hover: 'hover:text-green-300',
      gradient: 'bg-gradient-to-r from-green-300 to-green-500'
    }
  };

  const colorClasses = colorMap[activeClass] || colorMap.cyan; // Default to cyan if not found

  return {
    text: isActive ? colorClasses.text : (isScrolled ? 'text-white' : 'text-gray-300'),
    hover: colorClasses.hover,
    gradient: colorClasses.gradient
  };
};

const NavLink = ({ to, label, isActive, isScrolled, activeClass }) => {
  const classes = getActiveClasses(activeClass, isActive, isScrolled);

  return (
    <Link
      to={to}
      className={`relative px-2 py-1 transition-all duration-300 ${classes.text} ${!isActive ? classes.hover : ''} ${isActive ? 'font-medium' : ''}`}
    >
      {isActive && (
        <span className={`absolute bottom-[-8px] left-[-5px] w-15 h-15 bg-[#8080804a] rounded-full`}></span>
      )}
      {label}
    </Link>
  );
};

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`${isScrolled ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg' : 'bg-gray-900'} sticky top-0 z-10 transition-all duration-300`}>
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" label="Home" isScrolled={isScrolled} activeClass="cyan" />
            <NavLink to="/background" label="Experience" isScrolled={isScrolled} activeClass="pink" />
            <NavLink to="/portfolio" label="Portfolio" isScrolled={isScrolled} activeClass="purple" />
            <NavLink to="/contact" label="Contact" isScrolled={isScrolled} activeClass="green" />

            <button
              onClick={() => { alert("Resume is not available yet!") }}
              className="bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold py-2.5 px-6 rounded-full hover:shadow-lg hover:shadow-blue-500/50 hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>Download Resume</span>
              <Download size={16} />
            </button>
          </nav>

          {/* Mobile Navigation with SVG Icons */}
          <nav className="md:hidden flex items-center space-x-3">
            <NavLink to="/" label={<Home size={35} />} isActive={isActive('/')} isScrolled={isScrolled} activeClass="cyan" />
            <NavLink to="/background" label={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35" color="#000000" fill="#fff">
              <path d="M8 7L16 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 11L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 21.5V21C13 18.1716 13 16.7574 13.8787 15.8787C14.7574 15 16.1716 15 19 15H19.5M20 13.3431V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22877 2 6.34315 2 5.17157 3.17157C4 4.34314 4 6.22876 4 10L4 14.5442C4 17.7892 4 19.4117 4.88607 20.5107C5.06508 20.7327 5.26731 20.9349 5.48933 21.1139C6.58831 22 8.21082 22 11.4558 22C12.1614 22 12.5141 22 12.8372 21.886C12.9044 21.8623 12.9702 21.835 13.0345 21.8043C13.3436 21.6564 13.593 21.407 14.0919 20.9081L18.8284 16.1716C19.4065 15.5935 19.6955 15.3045 19.8478 14.9369C20 14.5694 20 14.1606 20 13.3431Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>} isActive={isActive('/background')} isScrolled={isScrolled} activeClass="pink" />
            <NavLink to="/portfolio" label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
            </svg>} isActive={isActive('/portfolio')} isScrolled={isScrolled} activeClass="purple" />
            <NavLink to="/contact" label={<img className="w-10 h-10 text-white" src="/chat.gif" alt="contact-logo-gif" />} isActive={isActive('/contact')} isScrolled={isScrolled} activeClass="green" />

            <button
              onClick={() => { alert("Resume is not available yet!") }}
              className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-2 rounded-full hover:shadow-lg hover:shadow-blue-500/50 hover:from-blue-500 hover:to-purple-600 transform hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Download size={22} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;