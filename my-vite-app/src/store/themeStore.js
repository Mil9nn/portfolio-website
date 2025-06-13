import { create } from 'zustand';

const useThemeStore = create((set) => ({
  lightMode: false,
  setLightMode: (value) => set({ lightMode: value }),
  toggleTheme: () => set((state) => ({ lightMode: !state.lightMode })),
}));

export default useThemeStore;
