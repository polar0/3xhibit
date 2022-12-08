import useGlobal from '../hooks/useGlobal';
import create from 'zustand';

export default create((set) => ({
  /**
   * Room
   */
  // States
  activeTheme: useGlobal.getState().defaultTheme,
  background: {
    color: 'ivory',
  },
  material: {
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
          material: {
            color: 'ivory',
          },
        }))
      : set((state) => ({
          ...state,
          activeTheme: 'dark',
          background: {
            color: '#131313',
          },
          material: {
            color: '#5f5f5f',
          },
        }));
  },

  /**
   * Light
   */
  // States
  neonEnabled: true,
  neonColor: '#ffffff',
  // flashlightIntensity: 0,
  // Setters
  setNeonEnabled: (enabled) => set({ neonEnabled: enabled }),
  setNeonColor: (color) => set({ neonColor: color }),
  // setFlashlightIntensity: (intensity) =>
  //   set({ flashlightIntensity: intensity }),
}));
