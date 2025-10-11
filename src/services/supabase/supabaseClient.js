import { createClient } from '@supabase/supabase-js'

const supabase_url = "https://iongpqdkuwojjrmnkocp.supabase.co"
const supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvbmdwcWRrdXdvampybW5rb2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MjUxNjIsImV4cCI6MjA3NDUwMTE2Mn0.P0MOvKiFzoEW_CIvbvUWLyK1RxG_UCLnFHGTvv-qqBc"

export const supabase = createClient(supabase_url, supabase_key)