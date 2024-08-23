import supabase from "./supabase";

export async function getAllCertifications() {
  const { data, error } = await supabase.from("certifications").select("*");
  if (error) {
    throw error;
  }
  return data;
}
