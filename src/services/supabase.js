import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://eppgoeuhqrqmtaxnfqcg.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwcGdvZXVocXJxbXRheG5mcWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1NDM5MDEsImV4cCI6MjAyMjExOTkwMX0.VSJBaOxAfc6ZQX6gtqWp0GI9HKf67N3ZkPmLnCD7h5U';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
