export const authApi = {
    loginWithGoogle: async (googleCode: string) => {

    }
}

// openOAuthPopup(
//       "http://localhost:3000/api/auth/google", // URL backend de démarrage OAuth
//       (token) => {
//         login({ token });
//         navigate({ to: "/" });
//       },
//       () => {
//         alert("Échec de l’authentification Google");
//       }
//     );