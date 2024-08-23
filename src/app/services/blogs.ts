import supabase from "./supabase";

export async function getAllBlogs() {
  const { data, error } = await supabase.from("blogs").select("id,title");

  if (error) {
    throw error;
  }

  return data;
}

export async function getBlogById(id: string) {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
