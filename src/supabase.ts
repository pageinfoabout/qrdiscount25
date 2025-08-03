import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ekzqaxqswglgfnioygwv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrenFheHFzd2dsZ2ZuaW95Z3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMzE5MzAsImV4cCI6MjA2OTgwNzkzMH0.GnXVrIEb1uiGrS7_oKb4GRIi7bU1VVyQ3ONHeGw0jx0';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface UserData {
  id: string;
  name: string;
  email: string;
  qr_code: string;
  created_at: string;
} 