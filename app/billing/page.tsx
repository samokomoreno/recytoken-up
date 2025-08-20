'use client'
import { useViewMode } from '@/lib/useViewMode'
import { useState } from 'react'

export default function Billing() {
  const { viewOnly } = useViewMode()
  const [status, setStatus] = useState<string | null>(null)
  function simulate() {
    setStatus('Transacción blockchain simulada. Compra registrada (simulada).')
  }
  return (
    <div className="card max-w-2xl">
      <h1 className="text-xl font-semibold mb-4">Facturación</h1>\n      {viewOnly && <p className=\"text-sm rounded-lg bg-amber-50 border border-amber-200 text-amber-800 p-3 mt-2\">Tu correo no está verificado: solo lectura (modo view).</p>}\n
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
