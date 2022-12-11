import create from 'zustand';

export default create((set) => ({
  states: ['default', 'hover', 'interacting'],
  currentState: 'hover',
  setState: (state) => set({ currentState: state }),

  hovereds: [],
  setHovereds: (hovereds) => set({ hovereds }),

  interactions: [],
  setInteractions: (interactions) => set({ interactions }),

  setCanInteract: () => set({ crosshairState: 2 }),
  setInteractionProgress: () => set({ crosshairState: 3 }),
  setInteractionDone: () => set({ crosshairState: 0 }),
}));
