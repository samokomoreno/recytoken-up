'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password) {
      setMessage('Ingrese correo y contraseña.')
      return
    }
    setMessage('Inicio de sesión simulado ✓ (implementar NextAuth para producción)')
  }

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-xl font-semibold mb-4">Iniciar sesión</h1>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <div>
          <label className="label">Correo</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label className="label">Contraseña</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Entrar</button>
      </form>
      {message && <p className="mt-3 text-sm">{message}</p>}
      <div className="mt-6">
        <p className="text-sm mb-2">Acceso con redes sociales (placeholder):</p>
        <div className="flex gap-2">
          <button className="btn" title="Requiere configurar Google OAuth">Google</button>
          <button className="btn" title="Requiere configurar Facebook OAuth">Facebook</button>
        </div>
      </div>
      <p className="text-sm mt-6">¿No tienes cuenta? <Link href="/register" className="underline">Regístrate</Link></p>
    </div>
  )
}
