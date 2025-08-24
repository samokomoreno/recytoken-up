export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
}

export const siteConfig = {
  name: 'RECYTOKENUP',
  description: 'Plataforma de tokenización de materiales reciclables',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
}