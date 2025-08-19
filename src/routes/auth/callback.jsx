import {
  createFileRoute,
  useSearch,
  useNavigate,
} from "@tanstack/react-router";
import { useAuthStore } from "../../store/UseAuthStore";
import { useEffect } from "react";

export const Route = createFileRoute("/auth/callback")({
  validateSearch: (search) => ({
    token: String(search.token ?? ""),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { token } = useSearch( search => search.token );
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      login(token);
      navigate({ to: "/" });
    }
  }, [token, login, navigate]);

  return <div>Authentification en cours...</div>;
}
