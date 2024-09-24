import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://mern-twitter-app-clone.onrender.com/api/v1',
})

axiosInstance.defaults.withCredentials = true
