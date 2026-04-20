import axiosInstance from './axiosInstance'
import { handleRequest } from './apiHandler'

export const loginUser = (data) =>
  handleRequest(() =>
    axiosInstance.post('/login', data)
  )

export const registerUser = (data) =>
  handleRequest(() =>
    axiosInstance.post('/register', data)
  )