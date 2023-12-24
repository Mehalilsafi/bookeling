import React from 'react'
import { Button } from "@/components/ui/button"
import {createSupabaseServerClient} from '@/lib/supabase'
import { Redirect, redirect } from 'next/navigation'
import { LogOut } from 'lucide-react'
export default function signeOut() {
   
       
    const logout=async ()=>{
        "use server"
          const supabase= await createSupabaseServerClient()
       const { error } = await supabase.auth.signOut()
       if(error){
        console.log("sing out error is here : "+error)
       }
        redirect("/main")
        
    }

    
  return (
    <form action={logout}>


    <Button>signeOut</Button>

    </form>
  )
}
