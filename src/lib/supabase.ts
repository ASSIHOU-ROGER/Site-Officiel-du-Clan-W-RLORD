import { createClient } from '@supabase/supabase-js';

// On utilise des valeurs par défaut temporaires pour éviter une page blanche
// au cas où le fichier .env.local ne serait pas encore chargé par le serveur Vite.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
