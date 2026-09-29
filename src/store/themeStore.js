import { create } from 'zustand';

document.documentElement.classList.add('dark');

const useThemeStore = create((set) => ({
  darkMode: true,
  toggleTheme: () =>
    set((state) => {
      const next = !state.darkMode;
      document.documentElement.classList.toggle('dark', next);
      return { darkMode: next };
    }),
}));

export default useThemeStore;
