import supabase from "./supabase";

export async function getAllWorks() {
  const { data, error } = await supabase.from("works").select("*");
  if (error) {
    throw error;
  }
  return data;
}
