'use server'
import supabase from '@/lib/supabase'
export async function getlist() {
    
   let { data: book, error } = await supabase
    .from('book')
    .select('*')
    return { book, error };
}

