import { getRandomColor } from '../utils/getRandomColor';
import create from 'zustand';

export default create((set) => ({
  color: getRandomColor(),
  pointSize: 3,
  setColor: (color) => set({ color }),
  setPointSize: (pointSize) => set({ pointSize }),
}));
