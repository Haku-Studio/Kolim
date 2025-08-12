import { create } from "zustand";

// type AuthUser = {
//   name: string;
//   email: string;
//   role: string;
//   id: string;
//   avatar: string;
// };

// type AuthPayload = {
//   token: string;
//   user: AuthUser;
// };

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  // user: AuthUser | null;
  // login: (payload: AuthPayload) => void;
  login: (token: string) => void;
  logout: () => void;
};

const setTokenInLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  user: null,
  // login: (payload) => set({ token: payload.token, isAuthenticated: true, user: payload.user }),
  login: (token) => {
    set({ token, isAuthenticated: true });
    setTokenInLocalStorage(token);
  },
  logout: () => {
    set({ token: null, isAuthenticated: false });
    localStorage.removeItem("token");
  },
}));
