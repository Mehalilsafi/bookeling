import React from 'react'
import supabase from '@/lib/supabase'
export async function addbook({formData}) {

    console.log("safi king "+formData)
    const { data, error } = await supabase
    .from('book')
    .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
  .select()
  
}
