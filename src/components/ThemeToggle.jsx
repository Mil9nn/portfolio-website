import { Moon, Sun } from 'lucide-react';
import useThemeStore from '../store/themeStore';

function ThemeToggle() {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={darkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className="theme-toggle group"
    >
      <Sun
        size={14}
        aria-hidden="true"
        className={`theme-toggle-icon left-1.5 ${darkMode ? 'text-muted/40' : 'text-accent'}`}
      />
      <Moon
        size={14}
        aria-hidden="true"
        className={`theme-toggle-icon right-1.5 ${darkMode ? 'text-accent' : 'text-muted/40'}`}
      />
      <span
        aria-hidden="true"
        className={`theme-toggle-thumb ${darkMode ? 'is-dark' : ''}`}
      />
    </button>
  );
}

export default ThemeToggle;
