import create from 'zustand';
import mockCreated from '../mock-data.json';

export default create((set) => ({
  created: [],
  isLoading: false,
  isLoaded: false,
  isError: false,
  getCreated: async () => {
    set({ isLoading: true });
    try {
      //   const response = await fetch('/api/created');
      //   const created = await response.json();
      const created = mockCreated;
      set({ created, isLoading: false, isLoaded: true });
    } catch (error) {
      set({ isLoading: false, isError: true });
    }
  },
}));
