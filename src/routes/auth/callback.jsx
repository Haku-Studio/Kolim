import {
  createFileRoute,
  useNavigate,
  useSearch,
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
  const { token } = useSearch((search) => search.token);
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  console.log(`Token from search: ${token}`);

  useEffect(() => {
    if (token && token !== "undefined") {
      console.log(token);

      window.opener?.postMessage(
        {
          type: "oauth-token",
          token,
        },
        window.location.origin
      );

      login({
        token,
      });

      // localStorage.setItem("token", token);
      // Ferme la popup
      window.close();
      navigate({ to: "/" });
    } else {
      navigate({ to: "/onboarding" });
    }
  }, [token]);

  return <div>Hello "/auth/callback"!</div>;
}

// import {
//   createFileRoute,
//   // useNavigate,
//   useSearch,
// } from "@tanstack/react-router";
// import { useEffect } from "react";
// // import { useAuthStore } from "../../store/authStore";

// export const Route = createFileRoute("/auth/callback")({
//   validateSearch: (search) => {
//     return {
//       token: String(search.token ?? ""),
//     };
//   },
//   component: Callback,
// });

// function Callback() {
//   // const navigate = useNavigate();
//   // const search = useSearch({
//   //   strict: false,
//   // });

// const { token } = useSearch();
//   // const login = useAuthStore((s) => s.login);

// useEffect(() => {
//   if (token && token !== "undefined") {
//     console.log(token);

//     // login({
//     //   //   id: '',
//     //   token,
//     //   //   name,
//     //   //   email,
//     //   //   picture,
//     // });
//     // navigate({ to: "/" });
//   } else {
//     // navigate({ to: "/onboarding" });
//   }
// }, [token]);

//   return <p>Connexion en cours...</p>;
// }
