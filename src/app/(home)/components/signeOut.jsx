import React from 'react'
import { Button } from "@/components/ui/button"
import supabase from '@/lib/supabase'
import { Redirect, redirect } from 'next/navigation'
import { LogOut } from 'lucide-react'
export default function signeOut() {
   
    
    const logout=async ()=>{
        "use server"
        const res =  supabase.auth.signOut
        redirect("/main")
        
    }

    
  return (
    <form action={logout}>


    <Button>signeOut</Button>

    </form>
  )
}
