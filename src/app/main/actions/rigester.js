'use server'

import supabase from "@/lib/supabase"
export async function signUpWithEmailAndPassword(formData) {
      console.log("data coming from logifrom befor signe in  "+ formData)
const email =formData.get("email")
const password=formData.get("password")

     let result=await supabase.auth.signUp(email,password)
     console.log("the data of reusulet after signe in "+result)
     return JSON.stringify(result)
    
  }
  

  
  