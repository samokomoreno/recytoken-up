'use client'
import { useState } from 'react'

export default function Billing() {
  const [status, setStatus] = useState<string | null>(null)
  function simulate() {
    setStatus('Transacción blockchain simulada. Compra registrada (simulada).')
  }
  return (
    <div className="card max-w-2xl">
      <h1 className="text-xl font-semibold mb-4">Facturación</h1>
      <div className="grid gap-3">
        <div>
          <label className="label">Método de pago</label>
          <select className="input"><option>USDC</option><option>Tarjeta</option><option>Transferencia</option></select>
        </div>
        <div>
          <label className="label">Monto</label>
          <input className="input" type="number" placeholder="0.00" />
        </div>
        <button className="btn btn-primary" onClick={simulate}>Simular transacción</button>
        {status && <p className="text-sm">{status}</p>}
      </div>
    </div>
  )
}
