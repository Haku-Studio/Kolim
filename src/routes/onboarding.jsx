import { createFileRoute, useNavigate } from "@tanstack/react-router";
import onboarding from "@/assets/backgrounds/onboarding.png";
import AuthModal from "../components/modals/authModal";
import { useAuthStore } from "../store/UseAuthStore";
import { useAppStore } from "../store/useAppStore";
import { useEffect } from "react";

export const Route = createFileRoute("/onboarding")({
  component: Onboarding,
});

function Onboarding() {
  const isAuthModalOpen = useAppStore((state) => state.isAuthModalOpen);
  const openAuthModal = useAppStore((state) => state.openAuthModal);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate({ to: "/" });
    }
  }, [token]);

  return (
    <div
      style={{
        backgroundImage: `url('${onboarding}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen w-full relative font-dmSansRegular"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

      {/* Content container */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="mb-4">
          <h1 className="text-xxxl font-bold mb-2">Bienvenue sur Koli</h1>
          <p className="text-md">
            Connectez-vous pour suivre vos commandes et vos récompenses,
            enregistrer votre présence pour une récupération plus rapide et
            recevoir des recommandations personnalisées pour vos achats.
          </p>
        </div>

        <button
          onClick={openAuthModal}
          className="w-full text-sm font-dmSansMedium  bg-blue-500 text-white font-medium py-4 px-6 rounded-[8px]"
        >
          Se connecter
        </button>
      </div>

      {isAuthModalOpen && <AuthModal />}
    </div>
  );
}
