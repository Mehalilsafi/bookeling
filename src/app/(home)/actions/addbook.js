"use server"

import React from 'react'
import {createClientSupabase }from '@/lib/supabase'
import { revalidatePath } from 'next/cache';


export async function addbook(formData) {
    console.log("safi king "+formData)
    const supabase = await createClientSupabase()
    await supabase
    .from('book')
    .insert([
    { book_name: formData.bookName, author: formData.author,status:formData.status },
  ])
  

  revalidatePath('/')
  
}
