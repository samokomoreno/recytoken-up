'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function Register() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) { setStatus('Ingrese su correo.'); return }
    await signIn('email', { email, redirect: true, callbackUrl: '/' })
    setStatus('Te enviamos un correo con enlace de verificación. Hasta confirmar tendrás modo view.')
  }

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-xl font-semibold mb-4">Registro</h1>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <div>
          <label className="label">Correo</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Crear cuenta</button>
      </form>
      {status && <p className="mt-3 text-sm">{status}</p>}
    </div>
  )
}
