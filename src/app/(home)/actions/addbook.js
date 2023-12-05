"use server"

import React from 'react'
import supabase from '@/lib/supabase'
export async function addbook(formData) {
    
    console.log("safi king "+formData)
    const { data, error } = await supabase
    .from('book')
    .insert([
    { book_name: formData.bookName, author: formData.author,status:formData.status },
  ])
  .select()
  
}
