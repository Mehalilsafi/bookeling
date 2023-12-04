
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://iifzoalqntvrnbvqoltt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZnpvYWxxbnR2cm5idnFvbHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MjExOTgsImV4cCI6MjAxNzI5NzE5OH0.3mTm1WdosnlYOcKy4Q2VjcVtXGa2_QX49VD4q-6vEZ8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase