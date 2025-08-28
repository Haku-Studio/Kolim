import axios from "axios";
import { useAuthStore } from "../../store/UseAuthStore";

const axiosWithToken = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL + '/api',
});

axiosWithToken.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  token && (config.headers.Authorization = `Bearer ${token}`);

  return config;
});

axiosWithToken.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = '/onboarding';
    }

    return Promise.reject(error);
  }
);

export default axiosWithToken;