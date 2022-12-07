import create from 'zustand';

export default create((set) => ({
  defaultTheme: 'light',
  activeLocation: 'laboratory',
  setTheme: (theme) => set({ defaultTheme: theme }),
  setActiveLocation: (location) => set({ activeLocation: location }),
}));
