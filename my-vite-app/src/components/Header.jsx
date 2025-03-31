import React, { useState, useEffect } from 'react';
import { Home, Briefcase, FolderKanban, MessageSquare, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, label, isActive, isScrolled, activeClass }) => (
  <Link
    to={to}
    className={`relative px-2 py-1 transition-all duration-300 ${
      isActive 
        ? `text-${activeClass}-300 font-medium` 
        : isScrolled 
          ? 'text-white hover:text-' + activeClass + '-300' 
          : 'text-gray-300 hover:text-' + activeClass + '-300'
    }`}
  >
    {isActive && (
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-${activeClass}-300 to-${activeClass}-500 rounded-full`}></span>
    )}
    {label}
  </Link>
);

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
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold shadow-md transform hover:scale-105 transition-transform duration-300">
              MS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" label="Home" isActive={isActive('/')} isScrolled={isScrolled} activeClass="cyan" />
            <NavLink to="/background" label="Experience" isActive={isActive('/background')} isScrolled={isScrolled} activeClass="pink" />
            <NavLink to="/portfolio" label="Portfolio" isActive={isActive('/portfolio')} isScrolled={isScrolled} activeClass="purple" />
            <NavLink to="/contact" label="Contact" isActive={isActive('/contact')} isScrolled={isScrolled} activeClass="green" />

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
            <NavLink to="/background" label={<Briefcase size={35} />} isActive={isActive('/background')} isScrolled={isScrolled} activeClass="pink" />
            <NavLink to="/portfolio" label={<FolderKanban size={35} />} isActive={isActive('/portfolio')} isScrolled={isScrolled} activeClass="purple" />
            <NavLink to="/contact" label={<MessageSquare size={35} />} isActive={isActive('/contact')} isScrolled={isScrolled} activeClass="green" />

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
