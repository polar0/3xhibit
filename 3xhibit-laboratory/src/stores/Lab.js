import create from 'zustand';

export default create((set) => ({
  /**
   * Room
   */
  // States
  themes: ['light', 'dark'],
  activeTheme: 'light',
  background: {
    color: 'ivory',
  },
  floor: {
    color: 'ivory',
  },
  walls: {
    color: 'ivory',
  },
  // Setters
  setTheme: (theme) => {
    theme === 'light'
      ? set((state) => ({
          ...state,
          activeTheme: 'light',
          background: {
            color: 'ivory',
          },
          floor: {
            color: 'ivory',
          },
          walls: {
            color: 'ivory',
          },
        }))
      : set((state) => ({
          ...state,
          activeTheme: 'dark',
          background: {
            color: '#131313',
          },
          floor: {
            color: '#5f5f5f',
          },
          walls: {
            color: '#131313',
          },
        }));
  },

  /**
   * Light
   */
  // States
  neonEnabled: true,
  neonColor: '#ffffffff',
  flashlightIntensity: 0.4,
  // Setters
  setNeonEnabled: (enabled) => set({ neonEnabled: enabled }),
  setNeonColor: (color) => set({ neonColor: color }),
  setFlashlightIntensity: (intensity) =>
    set({ flashlightIntensity: intensity }),
}));
