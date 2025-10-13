import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";
import { router } from "./lib/router";

export function App() {
  const auth = useAuth();

   console.log('🚀 App rendering - auth state:', { 
    email: auth.user?.email || 'null', 
    loading: auth.loading 
  });

  if (auth.loading) {
    console.log('⏳ App: Waiting for initial auth check...')
    return <div>Loading...</div> // Or a proper loading spinner
  }

  return <RouterProvider router={router} context={{ auth }} />;
}
