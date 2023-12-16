'use server'

import supabase from "@/lib/supabase"
export async function signUpWithEmailAndPassword(data) {
   
     let result=await supabase.auth.signUp(data.userName,data.password)
     return JSON.stringify(result)
    
  }
  

  
  