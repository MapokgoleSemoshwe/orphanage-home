// supabase-config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.43.0/dist/esm/index.js'

const supabaseUrl = 'https://irzqdsxdiifosqzqdypj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyenFkc3hkaWlmb3NxenFkeXBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MTgwMjYsImV4cCI6MjA5ODk5NDAyNn0.2mzC2WjiVIN2imGfKh0aKhdP97PCT6eLsTxOS4lfbh0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

console.log('✅ Supabase initialized')
//console.log('📍 Auth URL:', supabaseUrl + '/auth/v1')