import { useEffect, useState } from 'react';
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaUser,
} from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'work', label: 'Work', icon: FaBriefcase },
  { id: 'about', label: 'About', icon: FaUser },
  { id: 'skills', label: 'Skills', icon: FaCode },
  { id: 'contact', label: 'Contact', icon: FaEnvelope },
];

function Header() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const sections = ['home', 'work', 'about', 'skills', 'contact'];
      const position = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (position >= top && position < bottom) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-200 ${
        scrolled ? 'shadow-[var(--shadow-soft)]' : ''
      }`}
      style={{
        background: 'var(--nav-bg)',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-ink"
          translate="no"
        >
          Milan Singh
        </a>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {links.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-accent'
                    : 'text-muted hover:text-ink'
                }`}
              >
                <Icon
                  aria-hidden="true"
                  className={`size-3.5 shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-accent'
                      : 'text-muted/70 group-hover:text-ink'
                  }`}
                />
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            Hire Me
          </a>
        </div>
      </div>

      <nav
        className="flex gap-1 overflow-x-auto border-t border-line px-4 py-2 md:hidden"
        aria-label="Mobile"
        style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      >
        {links.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive ? 'bg-accent-soft text-accent' : 'text-muted'
              }`}
            >
              <Icon className="size-3.5 shrink-0" aria-hidden="true" />
              {label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
