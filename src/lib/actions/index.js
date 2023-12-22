'user server '

import supabase from "../supabase"

export async function readSession(){
    return supabase.auth.getSession()
     
}