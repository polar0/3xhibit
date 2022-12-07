import { getRandomColor } from '../utils/getRandomColor';
import create from 'zustand';

export default create((set) => ({
  colorA: getRandomColor(),
  colorB: getRandomColor(),
  intensity: 0.2,
  wireframe: false,
  setColorA: (color) => set({ colorA: color }),
  setColorB: (color) => set({ colorB: color }),
  setIntensity: (intensity) => set({ intensity }),
  setWireframe: (wireframe) => set({ wireframe }),
  randomize: () => set({ colorA: getRandomColor(), colorB: getRandomColor() }),
}));
