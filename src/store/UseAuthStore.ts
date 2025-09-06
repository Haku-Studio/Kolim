import { create } from "zustand";

type AuthState = {
  token: string | null;
  getToken: () => string | null;
  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  getToken: () => localStorage.getItem("token"),
  login: (token) => {
    set({ token });
    try {
      localStorage.setItem("token", token);
    } catch (e) {}
  },
  logout: () => {
    set({ token: null });
    try {
      localStorage.removeItem("token");
    } catch (e) {}
  },
}));
