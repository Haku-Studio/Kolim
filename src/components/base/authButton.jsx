import { openOAuthPopup } from "../../utils/openOAuthPopup";
import { useAuthStore } from "../../store/UseAuthStore";

export default function AuthButton({ children, ...props }) {
  const login = useAuthStore((s) => s.login);

  const handleLogin = () => {
    openOAuthPopup(
      "http://localhost:3000/api/auth/google", // URL backend de démarrage OAuth
      (token) => {
        login({ token });
        window.location.reload(); // ou navigate({ to: '/' })
      },
      () => {
        alert("Échec de l’authentification Google");
      }
    );
  };

  return (
    <button
      className="flex items-center justify-center space-x-2 py-[13px] border border-solid border-greyScale50 bg-greyScale0 w-full rounded-[10px]"
      onClick={handleLogin}
    >
      <span className="text-sm text-greyScale400">{props.name}</span>
      {children}
    </button>
  );
}
