import { axiosInstance } from '../utils/axios'
import toast from 'react-hot-toast'
import { create } from 'zustand'

export const useHouseStore = create((set) => ({
  houses: [],
  currentHouse: null,
  isLoading: false,

  createHouse: async (formData) => {
    set({ isLoading: true })
    try {
      const res = await axiosInstance.post('/houses', formData)
      toast.success('House created successfully')
      set((state) => ({ ...state, houses: [...state.houses, res.data.house] }))
    } catch (error) {
      toast.error(error.response.data.msg || 'Failed to create house')
    } finally {
      set({ isLoading: false })
    }
  },
  getAllHouses: async () => {
    set({ isLoading: true })
    try {
      const res = await axiosInstance.get('/houses')
      set({ houses: res.data.houses })
    } catch (error) {
      toast.error(error.response.data.msg || 'Failed to load houses')
    } finally {
      set({ isLoading: false })
    }
  },
  getCurrentHouse: async (id) => {
    set({ isLoading: true })
    try {
      const res = await axiosInstance.get('/houses/' + id)
      set({ currentHouse: res.data.house })
    } catch (error) {
      set({ currentHouse: null })
      toast.error(error.response.data.msg || 'Failed to load houses')
    } finally {
      set({ isLoading: false })
    }
  },
}))
