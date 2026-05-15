import axios from "axios";
import { config } from "../config/env";

const axiosInstance = axios.create({
  baseURL: config.apiUrl, // http://localhost:3000/api
  timeout: 10000,
});

// ================= TOKEN ATTACH =================
axiosInstance.interceptors.request.use((req) => {
  try {
    const data = JSON.parse(localStorage.getItem("appState"));
    const token = data?.auth?.token;

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {}

  return req;
});

// ================= GLOBAL ERROR =================
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("appState");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;