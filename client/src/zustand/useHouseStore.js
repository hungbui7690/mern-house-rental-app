import { axiosInstance } from '../utils/axios'
import toast from 'react-hot-toast'
import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  houses: [],
  isLoading: false,

  getAllHouses: async () => {
    set({ isLoading: true })
    try {
      const res = await axiosInstance.get('/houses')
      set({ houses: res.data.houses, isLoading: false })
    } catch (error) {
      toast.error(error.response.data.msg || 'Failed to load houses')
    } finally {
      set({ isLoading: false })
    }
  },
}))
