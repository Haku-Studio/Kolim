import {
  createFileRoute,
  useSearch,
} from "@tanstack/react-router";
// import { useAuthStore } from "../../store/UseAuthStore";
// import { useEffect } from "react";

export const Route = createFileRoute("/auth/callback")({
  validateSearch: (search) => ({
    token: String(search.token ?? ""),
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const {token} = useSearch((search) => search.token);
  // const login = useAuthStore((s) => s.login);

  // useEffect(() => {

      window.opener?.postMessage(
        {
          type: "oauth-token",
          token,
        },
        window.location.origin
      );

      // login({
      //   token,
      // });
      
      // Ferme la popup
      window.close();
  // }, [token]);

  return <div>Connexion en cours...</div>;
}