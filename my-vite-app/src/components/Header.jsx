import React from 'react';
import {
  Home,
  Briefcase,
  FolderKanban,
  MessageSquare,
  Download,
  GraduationCap,
  Package,
  Terminal,
  Code2,
  Layers,
  MessageCircle,
  Mail,
  Flashlight,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, label, icon: Icon, isActive, showLabel }) => (
  <Link
    to={to}
    className={`flex items-center ${showLabel ? 'gap-2 px-3 py-2' : 'p-2'
      } rounded-md transition duration-300 ${isActive ? 'text-purple-400 font-semibold' : 'text-gray-300 hover:text-purple-300'
      }`}
  >
    <Icon className="w-5 h-5" />
    {showLabel && <span>{label}</span>}
  </Link>
);

const handleTheme = async () => {
  
}

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-zinc-900 text-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-6 py-4 flex sm:flex-row flex-col gap-5 justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold text-purple-400">
          <Code2 />
          Milan Singh
          <Flashlight onClick={handleTheme} className="bg-zinc- border border-white p-1 rounded-full size-7" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" label="Home" icon={Home} isActive={isActive('/')} showLabel />
          <NavLink to="/background" label="Experience" icon={GraduationCap} isActive={isActive('/background')} showLabel />
          <NavLink to="/portfolio" label="Portfolio" icon={Layers} isActive={isActive('/portfolio')} showLabel />
          <NavLink to="/contact" label="Contact" icon={Mail} isActive={isActive('/contact')} showLabel />

          <button
            onClick={() => alert('Resume is not available yet!')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2 transition"
          >
            Resume <Download className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Navigation (icons only) */}
        <nav className="md:hidden flex items-center gap-4">
          <NavLink to="/" icon={Home} isActive={isActive('/')} />
          <NavLink to="/background" icon={GraduationCap} isActive={isActive('/background')} />
          <NavLink to="/portfolio" icon={Layers} isActive={isActive('/portfolio')} />
          <NavLink to="/contact" icon={Mail} isActive={isActive('/contact')} />
          <button
            onClick={() => alert('Resume is not available yet!')}
            className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition"
          >
            <Download className="w-5 h-5 text-white" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;