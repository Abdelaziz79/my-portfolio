import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aryvoyijualfmzchcnjx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyeXZveWlqdWFsZm16Y2hjbmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0NDEyMjUsImV4cCI6MjA0MDAxNzIyNX0.BVt4WIVxSrDIKH2NSIr62AUm6IH7taA5oiXzDrluFXo";
const supabase = createClient(supabaseUrl, supabaseKey as string);

export default supabase;
