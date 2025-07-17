import type { Database } from "~/types/database.types";

export async function useFetchRoadmap() {
  const supabase = useSupabaseClient<Database>();

  const { data, error } = await supabase
    .from("roadmap")
    .select(`*, images (id, image_url, unique_id)`)
    .order("index", { ascending: true });

  if (error) throw error;

  return data;
}
