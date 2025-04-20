import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fwuzfsrdtdcrsccpkclc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3dXpmc3JkdGRjcnNjY3BrY2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNzAxODYsImV4cCI6MjA2MDc0NjE4Nn0.EGGkhjiddpfdo2ObD-x3JQA0d7eZtsrVKekAzB_yNJs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);