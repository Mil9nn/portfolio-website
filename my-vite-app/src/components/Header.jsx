import { useEffect, useState } from 'react';
import {
  Home,
  Download,
  GraduationCap,
  Code2,
  Layers,
  Mail,
  Flashlight,
  FlashlightOff,
} from 'lucide-react';
import useThemeStore from '../store/themeStore';

function Header() {
  
  const [activeSection, setactiveSection] = useState('home');
  const { lightMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'background', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setactiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (sectionId) => activeSection === sectionId; 

  const NavLink = ({ sectionId, label, icon: Icon = Icon, isActive, showLabel }) => {
   const handleClick = () => {
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
   }

    return <button onClick={handleClick} className={`flex items-center ${showLabel ? 'gap-2 px-3 py-2' : 'p-2'
    } rounded-md transition duration-300 ${isActive ? 'text-black font-semibold' : lightMode ? 'text-neutral-inverse hover:text-purple-300' : 'text-theme-muted'
    }`}>
    <Icon size={20} />
    {showLabel && <span>{label}</span>}
  </button>
};


  return (
    <header className={`shadow-md sticky top-0 z-20 ${!lightMode ? "bg-[#70BDE1]" : "bg-surface-light-70"}`}>
      <div className="container mx-auto px-6 py-4 flex sm:flex-row flex-col gap-5 justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold text-black">
          <Code2 />
          Milan Singh
          {lightMode ? (
            <FlashlightOff onClick={toggleTheme} className={`cursor-pointer bg-transparent border p-1 rounded-full size-8.5`} />
          ) : (
            <Flashlight onClick={toggleTheme} className={`cursor-pointer bg-transparent border p-1 rounded-full size-8.5`} />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink sectionId="home" label="Home" icon={Home} isActive={isActive('home')} showLabel />
          <NavLink sectionId="background" label="Experience" icon={GraduationCap} isActive={isActive('background')} showLabel />
          <NavLink sectionId="portfolio" label="Portfolio" icon={Layers} isActive={isActive('portfolio')} showLabel />
          <NavLink sectionId="contact" label="Contact" icon={Mail} isActive={isActive('contact')} showLabel />
        </nav>

        {/* Mobile Navigation (icons only) */}
        <nav className="md:hidden flex items-center gap-4">
          <NavLink sectionId="/" icon={Home} isActive={isActive('home')} />
          <NavLink sectionId="background" icon={GraduationCap} isActive={isActive('background')} />
          <NavLink sectionId="portfolio" icon={Layers} isActive={isActive('portfolio')} />
          <NavLink sectionId="contact" icon={Mail} isActive={isActive('contact')} />
        </nav>
      </div>
    </header>
  );
}

export default Header;