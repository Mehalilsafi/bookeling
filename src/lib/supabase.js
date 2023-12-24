"use server"
// Import necessary dependencies

import { createClient } from '@supabase/supabase-js';

import { createServerClient, CookieOptions } from '@supabase/ssr'

import { cookies } from 'next/headers';

// Create the supabase instance
export async function createSupabaseServerClient(){

  const cookieStore = cookies()
  return createServerClient(

     process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    cookies: {
      get(name) {
        // Retrieve the cookie value
        return cookieStore.get(name)?.value;

      },
      set(name , value, options) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name , options ) {
        cookieStore.set({ name, value: '', ...options })
      },
    },
  }
  );
}


export async function createClientSupabase(){
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}





