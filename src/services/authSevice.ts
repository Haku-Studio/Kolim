import { openOAuthPopup } from '../utils/openOAuthPopup';
import { useAuthStore } from '../store/UseAuthStore';

export const authService = {
  startGoogleLogin: () => {
    openOAuthPopup(
      import.meta.env.VITE_BACKEND_API_URL + "/auth/google",
      (token) => {
        useAuthStore.getState().login(token);
      },
      () => {
        alert("Échec de l’authentification Google");
      }
    );
  },
};
