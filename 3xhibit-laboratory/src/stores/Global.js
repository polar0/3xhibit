import create from 'zustand';

export default create((set) => ({
  // Location
  activeLocation: 'museum',
  setActiveLocation: (location) => set({ activeLocation: location }),

  // Theme
  defaultTheme: 'light',
  setTheme: (theme) => {
    theme === 'light'
      ? set((state) => ({
          ...state,
          defaultTheme: 'light',
          background: {
            color: 'ivory',
          },
          material: {
            color: 'ivory',
          },
        }))
      : set((state) => ({
          ...state,
          defaultTheme: 'dark',
          background: {
            color: '#131313',
          },
          material: {
            color: '#5f5f5f',
          },
        }));
  },
  // Default
  background: {
    color: 'ivory',
  },
  material: {
    color: 'ivory',
  },
}));
