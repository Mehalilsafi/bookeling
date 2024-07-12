'use server '

import {createSupabaseServerClient} from "../supabase"

export async function readSession(){
         
    const supabase=  await createSupabaseServerClient()
     
    return supabase.auth.getSession()
    
}