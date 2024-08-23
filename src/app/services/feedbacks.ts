import supabase from "./supabase";

export async function getAllFeedbacks() {
  const { data, error } = await supabase.from("feedbacks").select("*");
  if (error) {
    throw error;
  }
  return data;
}
