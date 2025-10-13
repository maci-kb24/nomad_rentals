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

  useEffect(() => {
    console.log("🔄 AuthProvider: Initializing...");

    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(
        "✅ Initial session check:",
        session?.user?.email || "No user"
      );
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(
        "🔔 Auth state changed:",
        event,
        session?.user?.email || "No user"
      );
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      console.log("🧹 Cleaning up auth subscription");
      subscription?.unsubscribe();
    };
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

  console.log("📊 AuthContext value:", {
    email: user?.email || "null",
    loading,
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
