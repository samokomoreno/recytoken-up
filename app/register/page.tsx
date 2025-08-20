'use client'
import { useState } from 'react'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !password) {
      setStatus('Complete correo y contraseña.')
      return
    }
    setStatus('Registro simulado. Se envió un correo HTML de bienvenida (simulado). Modo view hasta confirmar.')
  }

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-xl font-semibold mb-4">Registro</h1>
      <form onSubmit={handleSubmit} className="grid gap-3">
        <div>
          <label className="label">Correo</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div>
          <label className="label">Contraseña</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Crear cuenta</button>
      </form>
      {status && <p className="mt-3 text-sm">{status}</p>}
    </div>
  )
}
