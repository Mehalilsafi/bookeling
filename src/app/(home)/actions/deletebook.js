 'use server'
import supabase from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
export async function deletebook(id) {
  const { error } = await supabase
    .from('book')
    .delete()
    .eq('id', id); 
    revalidatePath('/')
  if (error) {
    console.error('Error deleting book:', error.message);
  }
}

