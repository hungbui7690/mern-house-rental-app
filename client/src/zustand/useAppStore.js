import { create } from 'zustand'

export const useAppStore = create((set) => ({
  utilities: [],
  addUtility: (utility) => {
    set((state) => ({
      utilities: [...state.utilities, utility],
    }))
  },
  removeUtility: (utility) => {
    set((state) => ({
      utilities: state.utilities.filter((item) => item !== utility),
    }))
  },
}))
