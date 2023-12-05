 'use server'
import supabase from '@/lib/supabase';

export async function deletebook(id) {
  const { error } = await supabase
    .from('book')
    .delete()
    .eq('id', id); 

  if (error) {
    console.error('Error deleting book:', error.message);
  }
}

