import create from 'zustand';

export default create((set) => ({
  // Location
  activeLocation: 'museum',
  setActiveLocation: (location) => set({ activeLocation: location }),

  // Materials
  background: {
    color: 'ivory',
  },
  material: {
    color: 'ivory',
  },

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

  /**
   * Museum
   */
  // Physics
  gravity: [0, -9.81, 0],
  setGravity: (gravity) => set({ gravity }),
  // Player
  speed: 5,
  setSpeed: (speed) => set({ speed }),

  // Interface
  showInterface: false,
  setShowInterface: (showInterface) => set({ showInterface }),
}));
