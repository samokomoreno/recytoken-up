'use client'
import { useState } from 'react'

type Res = { id: number; nombre: string; tipo: string; lat: number; lng: number; vendedor: string }

const MOCK: Res[] = [
  { id:1, nombre:'Cartón prensado', tipo:'Cartón', lat:12.122, lng:-86.268, vendedor:'EcoNica' },
  { id:2, nombre:'PET transparente', tipo:'Plástico', lat:12.136, lng:-86.251, vendedor:'PlastiCoop' },
]

export default function Search() {
  const [tipo, setTipo] = useState('')
  const [radio, setRadio] = useState(10)
  const results = MOCK.filter(r => !tipo || r.tipo===tipo)

  return (
    <div className="card">
      <h1 className="text-xl font-semibold mb-4">Búsqueda de productos</h1>
      <div className="grid md:grid-cols-4 gap-3">
        <div><label className="label">Tipo</label>
          <select className="input" value={tipo} onChange={e=>setTipo(e.target.value)}>
            <option value="">Todos</option><option>Aluminio</option><option>Papel</option><option>Cartón</option><option>Hierro</option><option>Plástico</option>
          </select>
        </div>
        <div><label className="label">Radio (km)</label><input className="input" type="number" value={radio} onChange={e=>setRadio(parseInt(e.target.value || '0'))} /></div>
      </div>

      <div className="mt-4 grid gap-3">
        <div className="rounded-xl border p-4 bg-white dark:bg-zinc-900">
          <p className="text-sm mb-2">Mapa Google (placeholder). Integra Google Maps JS API con NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.</p>
          <div className="h-64 bg-green-100 dark:bg-zinc-800 rounded-xl grid place-content-center">[Mapa]</div>
        </div>
        <ul className="grid gap-2">
          {results.map(r => (
            <li key={r.id} className="rounded-xl border p-3">
              <div className="font-medium">{r.nombre} — {r.tipo}</div>
              <div className="text-sm">Vendedor: {r.vendedor} | Ubicación aprox: {r.lat}, {r.lng}</div>
              <button className="btn mt-2">Ver detalle</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
