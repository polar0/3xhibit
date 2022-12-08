import create from 'zustand';

export default create((set) => ({
  defaultTheme: 'light',
  activeLocation: 'museum',
  setTheme: (theme) => set({ defaultTheme: theme }),
  setActiveLocation: (location) => set({ activeLocation: location }),
}));
