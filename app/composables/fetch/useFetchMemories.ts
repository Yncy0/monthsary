import type { Database } from "~/types/database.types";

export async function useFetchMemories() {
  const supabase = useSupabaseClient<Database>();

  const { data, error } = await supabase
    .from("memories")
    .select(` *, images(id, image_url, unique_id)`)
    .order("date", { ascending: true });

  if (error) throw error;

  return data;
}
