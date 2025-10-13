import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";
import { router } from "./lib/router";

export function App() {
  const auth = useAuth();

  if (auth.loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return <RouterProvider router={router} context={{ auth }} />;
}
