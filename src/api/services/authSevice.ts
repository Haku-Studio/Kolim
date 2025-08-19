import { useAuthStore } from "../../store/UseAuthStore";
import { useAppStore } from "../../store/useAppStore";

export const authService = {
  startGoogleLogin: () => {
    const redirectUrl = `${window.location.origin}/auth/callback`;
    window.location.href = `${(import.meta as any).env.VITE_BACKEND_API_URL}/auth/google?redirect=${encodeURIComponent(redirectUrl)}`;
  },
};
