'use client'
import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') // placeholder; no credentials provider configured
  const [message, setMessage] = useState<string | null>(null)

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault()
    if (!email) { setMessage('Ingrese su correo.'); return }
    const res = await signIn('email', { email, redirect: true, callbackUrl: '/' })
    setMessage('Enviamos un enlace a tu correo (si existe). Revisa tu bandeja.')
  }

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-xl font-semibold mb-4">Iniciar sesión</h1>

      <form onSubmit={handleEmail} className="grid gap-3">
        <div>
          <label className="label">Correo (enlace mágico)</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Enviar enlace</button>
      </form>
      {message && <p className="mt-3 text-sm">{message}</p>}

      <div className="mt-6">
        <p className="text-sm mb-2">O usa redes sociales:</p>
        <div className="flex gap-2">
          <button className="btn" onClick={() => signIn('google', { callbackUrl: '/' })}>Google</button>
          <button className="btn" onClick={() => signIn('facebook', { callbackUrl: '/' })}>Facebook</button>
        </div>
      </div>

      <p className="text-sm mt-6">¿No tienes cuenta? <Link href="/register" className="underline">Regístrate</Link></p>
    </div>
  )
}
