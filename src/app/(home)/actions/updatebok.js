'use server'
import React from 'react'
import supabase from '@/lib/supabase'
import { revalidatePath } from 'next/cache';
export async  function updatebok(bookId,book) {

    


      const { data, error } = await supabase
        .from('book')
        .update({ ...book }) 
        .eq('id', bookId)
        .single(); 
    
      if (error) {
        console.error('Error updating book:', error.message);
       
      }
      revalidatePath('/')
   
      return data;
    }
    


