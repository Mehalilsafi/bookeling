'use server'
import {createSupabaseServerClient} from "@/lib/supabase"
export async function  singInWithEmailAndPassword({email,password}){

        const supabase= await createSupabaseServerClient()
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
        })
   
      

}