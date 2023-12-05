import React from 'react'
import supabase from '@/lib/supabase' 

export async function deletebook() {

const { error } = await supabase
.from('book')
.delete()
.eq('some_column', 'someValue')


}
