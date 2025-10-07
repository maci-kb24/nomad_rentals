import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";
import { router } from "../lib/router";

export function App() {
    const auth = useAuth();
  return <RouterProvider router={router} context={{auth}} />;
};

