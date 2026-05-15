import axiosInstance from "./axiosInstance";
import { handleRequest } from "./apiHandler";

// ================= LOGIN =================
export const loginUser = (data) =>
  handleRequest(() => axiosInstance.post("/auth/login", data));

// ================= REGISTER =================
export const registerUser = (data) =>
  handleRequest(() => axiosInstance.post("/auth/register", data));

// ================= VERIFY OTP =================
export const verifyOtpUser = (data) =>
  handleRequest(() => axiosInstance.post("/auth/verify-otp", data));