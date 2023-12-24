'use server'

import {createSupabaseServerClient} from "@/lib/supabase"
export async function signUpWithEmailAndPassword({ email, password }) {

      const supabase = await createSupabaseServerClient()
      console.log("email of the user is here in server action" + email);
    
      try {
        const { user, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
    
        if (error) {
          throw error;
        }
    
        return JSON.stringify(user);
      } catch (error) {
        console.error("Error during sign up:", error.message);
        return JSON.stringify({ error: error.message });
      }
    }
    
  

  
  