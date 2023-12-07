"use server"

import React from 'react'
import supabase from '@/lib/supabase'
import { revalidatePath } from 'next/cache';


export async function addbook(formData) {
    console.log("safi king "+formData)
    await supabase
    .from('book')
    .insert([
    { book_name: formData.bookName, author: formData.author,status:formData.status },
  ])
  

  revalidatePath('/')
  
}
