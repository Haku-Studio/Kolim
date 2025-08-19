// @ts-nocheck
import axios from "axios";
import { useAuthStore } from "../store/UseAuthStore";
import { useNavigate } from "@tanstack/react-router";

const axiosWithToken = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
});

axiosWithToken.interceptors.request.use((config) => {
  const token = useAuthStore((s) => s.token);

  token && (config.headers.Authorization = `Bearer ${token}`);

  return config;
});

axiosWithToken.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const navigate = useNavigate();

    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      navigate({ to: "/onboarding" });
    //   window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default axiosWithToken;
