import { createClient } from '@supabase/supabase-js';

const env = (import.meta as unknown as {
  env?: Record<string, string | undefined>;
}).env ?? {};
const supabaseUrl = env.VITE_SUPABASE_URL;
const supabasePublishableKey = env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = supabaseUrl && supabasePublishableKey
  ? createClient(supabaseUrl, supabasePublishableKey)
  : null;