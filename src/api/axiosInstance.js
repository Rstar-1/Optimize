import axios from 'axios';
import { config } from '../config/env';

const axiosInstance = axios.create({
  baseURL: config.apiUrl,
  timeout: 10000
})

// ✅ Attach token
axiosInstance.interceptors.request.use((config) => {
  try {
    const data = JSON.parse(localStorage.getItem('appState'))
    const token = data?.auth?.token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  } catch { }

  return config
})

// ✅ Global error handling
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('appState')

      // 🔥 better than window.location
      window.location.replace('/login')
    }

    return Promise.reject(error)
  }
)

export default axiosInstance