import { createContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { type User } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp?: (email: string, password: string) => Promise<{ error: unknown }>;
  signIn?: (email: string, password: string) => Promise<{ error: unknown }>;
  signOut?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export { AuthContext };

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const syncUserWithBackend = async (session: any) => {
      console.log('🚀 syncUserWithBackend called with:', session?.user?.id)

    try {
      console.log("📤 Sending to backend:", {
        id: session.user.id,
        email: session.user.email,
        name: session.user.user_metadata?.full_name ?? null,
      });

      const response = await fetch("http://localhost:3000/api/auth/sync", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata?.full_name ?? null,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ User synced to database:", data.user);
      } else {
        console.error("❌ Sync failed:", data.error);
      }
    } catch (error) {
      // Backend might be down - don't break the app
      console.error("❌ Backend not reachable:", error);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);

      console.log("🔐 Auth event:", event);
      console.log("👤 Session user:", session?.user?.email);
      console.log(
        "🔑 Access token:",
        session?.access_token ? "EXISTS" : "MISSING",
      );

      if (event === "SIGNED_IN" && session?.user) {
        syncUserWithBackend(session);
      }

      // ── Clear state on logout ─────────────────────────
      if (event === "SIGNED_OUT") {
        console.log("👋 User signed out");
      }
    });

    return () => subscription?.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
