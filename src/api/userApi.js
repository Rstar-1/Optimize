import axiosInstance from "./axiosInstance";
import { handleRequest } from "./apiHandler";

export const getUsers = (params) =>
  handleRequest(() => axiosInstance.get("/users", { params }));

export const getProfile = () =>
  handleRequest(() => axiosInstance.get("/users/profile"));

export const updateUser = ({ id, data }) =>
  handleRequest(() => axiosInstance.put(`/users/${id}`, data));

export const uploadDocuments = (data) =>
  handleRequest(() => axiosInstance.post("/users/upload-documents", data));
