import create from 'zustand';

export default create((set) => ({
  neonEnabled: true,
  setNeonEnabled: (enabled) => set({ neonEnabled: enabled }),
  neonColor: '#ffffff',
  setNeonColor: (color) => set({ neonColor: color }),
}));
