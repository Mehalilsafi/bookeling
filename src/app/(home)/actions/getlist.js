'use server'
import {createClientSupabase} from '@/lib/supabase'
export async function getlist() {
    const supabase = await createClientSupabase()
   let { data: book, error } = await supabase
    .from('book')
    .select()
    return { book, error };
}

