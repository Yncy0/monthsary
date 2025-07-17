import type { Database } from "~/types/database.types";

export async function useFetchImage() {
  const supabase = useSupabaseClient<Database>();

  const { data, error } = await supabase
    .from("images")
    .select("*")
    .order("id", { ascending: true });

  if (error) throw error;

  return data;
}
