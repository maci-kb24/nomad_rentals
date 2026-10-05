import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

console.log("=== SUPABASE CONFIG ===")
console.log("URL:", supabaseUrl)
console.log("KEY:", supabaseAnonKey ? "EXISTS ✅" : "MISSING ❌")
console.log("=======================")

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
