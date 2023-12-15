
// Import necessary dependencies
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

// Create the supabase instance
const supabase =  createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    cookies: {
      get(name) {
        // Retrieve the cookie value
        return cookies().get(name)?.value;
      },
      set(name , value, options) {
        res.setHeader("Set-Cookie", serialize(name, value, options));
      },
      remove(name , options ) {
        res.setHeader("Set-Cookie", serialize(name, "", options));
      },
    },
  }
);


export default supabase;


