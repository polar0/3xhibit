import create from 'zustand';

export default create((set) => ({
  color: 'ivory',
  setColor: (color) => set({ color }),
}));
