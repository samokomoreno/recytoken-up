'use client'
import { useState } from 'react'

type Item = { producto: string; cantidad: number; valorOnChain: string }

export default function Movements() {
  const [items, setItems] = useState<Item[]>([])
  const [producto, setProducto] = useState('')
  const [cantidad, setCantidad] = useState(1)
  const [valor, setValor] = useState('')

  function addItem(e: React.FormEvent) {
    e.preventDefault()
    if (!producto || !valor) return
    setItems([...items, { producto, cantidad, valorOnChain: valor }])
    setProducto(''); setCantidad(1); setValor('')
  }

  return (
    <div className="grid gap-6">
      <div className="card">
        <h1 className="text-xl font-semibold mb-4">Registro de Movimientos (Maestro-Detalle)</h1>
        <form className="grid md:grid-cols-4 gap-3" onSubmit={addItem}>
          <div className="md:col-span-2">
            <label className="label">Producto</label>
            <input className="input" value={producto} onChange={e=>setProducto(e.target.value)} />
          </div>
          <div>
            <label className="label">Cantidad</label>
            <input className="input" type="number" value={cantidad} onChange={e=>setCantidad(parseInt(e.target.value || '0'))} />
          </div>
          <div>
            <label className="label">Valor blockchain</label>
            <input className="input" value={valor} onChange={e=>setValor(e.target.value)} />
          </div>
          <div className="md:col-span-4">
            <button className="btn btn-primary" type="submit">Agregar detalle</button>
          </div>
        </form>

        <table className="w-full mt-4 text-sm">
          <thead><tr className="text-left"><th>Producto</th><th>Cantidad</th><th>Valor on-chain</th></tr></thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i}><td>{it.producto}</td><td>{it.cantidad}</td><td>{it.valorOnChain}</td></tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <button className="btn" title="Generar contrato inteligente (simulado)">Generar contrato inteligente</button>
          <button className="btn btn-primary ml-2" title="Aplicar transacción (simulado)">Aplicar transacción</button>
        </div>
      </div>
    </div>
  )
}
