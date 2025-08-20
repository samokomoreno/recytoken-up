import './globals.css'
import { ThemeProvider } from 'next-themes'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import SignOut from '@/components/SignOut'

export const metadata = {
  title: 'RECYTOKEN-UP',
  description: 'PWA prototype for recyclable materials on-chain',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <header className="border-b bg-white/70 dark:bg-zinc-900/50 backdrop-blur sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto flex items-center gap-4 p-4">
              <Link href="/" className="font-bold text-lg text-primary-700">RECYTOKEN-UP</Link>
              <div className="ml-auto flex items-center gap-3 text-sm">
                {session?.user ? (
                  <>
                    <span className="hidden md:inline">Hola, {session.user.email}</span>
                    {!(session.user as any).emailVerified && (
                      <span className="rounded-full px-3 py-1 bg-amber-100 text-amber-800 border border-amber-300">Modo view</span>
                    )}
                    <Link href="/settings" className="btn">Tema</Link>
                    <SignOut />
                  </>
                ) : (
                  <>
                    <Link href="/settings" className="btn">Tema</Link>
                    <Link href="/login" className="btn btn-primary">Iniciar sesión</Link>
                  </>
                )}
              </div>
            </nav>
          </header>
          <main className="max-w-6xl mx-auto p-4">{children}</main>
          <footer className="max-w-6xl mx-auto p-6 text-sm text-gray-500">
            © {new Date().getFullYear()} RECYTOKEN-UP — Prototipo
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
