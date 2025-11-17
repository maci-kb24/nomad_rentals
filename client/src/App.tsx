import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";
import { router } from "./lib/router";
import { useEffect } from "react";

function useDarkMode() {
  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      const isDark = hour >= 20 || hour < 6;
      
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    updateTheme();
    const interval = setInterval(updateTheme, 60000);
    
    return () => clearInterval(interval);
  }, []);
}

export function App() {
  const auth = useAuth();
  useDarkMode();

  if (auth.loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 text-gray-900 dark:text-white w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return <RouterProvider router={router} context={{ auth }} />;
}
