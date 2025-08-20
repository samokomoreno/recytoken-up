'use client'
import { useViewMode } from '@/lib/useViewMode'
import { useState } from 'react'

export default function Products() {
  const { viewOnly } = useViewMode()
  const [saved, setSaved] = useState(false)
  function save(e: React.FormEvent) { e.preventDefault(); setSaved(true) }

  return (
    <div className="card">
      <h1 className="text-xl font-semibold mb-4">Registro de Productos</h1>\n      {viewOnly && <p className=\"text-sm rounded-lg bg-amber-50 border border-amber-200 text-amber-800 p-3 mt-2\">Tu correo no está verificado: solo lectura (modo view).</p>}\n
      <form className="grid md:grid-cols-2 gap-4" onSubmit={save}>
        <fieldset className="md:col-span-2"><legend className="font-semibold">Identificación On-chain</legend></fieldset>
        <div><label className="label">ID Token / Hash</label><input className="input" /></div>
        <div><label className="label">Dirección creador (wallet)</label><input className="input" /></div>
        <div><label className="label">TxID registro</label><input className="input" /></div>
        <div><label className="label">Estado</label><select className="input"><option>Disponible</option><option>Vendido</option><option>Transferido</option><option>Quemado</option></select></div>

        <fieldset className="md:col-span-2"><legend className="font-semibold">Metadatos (NFT)</legend></fieldset>
        <div><label className="label">Nombre</label><input className="input" /></div>
        <div><label className="label">Categoría</label><select className="input"><option>Aluminio</option><option>Papel</option><option>Cartón</option><option>Hierro</option><option>Plástico</option></select></div>
        <div><label className="label">Subcategoría</label><input className="input" placeholder="PET, PEAD, etc." /></div>
        <div className="md:col-span-2"><label className="label">Descripción</label><textarea className="input" /></div>
        <div className="md:col-span-2"><label className="label">Imagen (URL/IPFS)</label><input className="input" /></div>

        <fieldset className="md:col-span-2"><legend className="font-semibold">Medición y Clasificación</legend></fieldset>
        <div><label className="label">Unidad</label><select className="input"><option>kg</option><option>tonelada</option><option>saco</option><option>fardo</option></select></div>
        <div><label className="label">Cantidad/Peso</label><input className="input" type="number" /></div>
        <div><label className="label">Pureza/Calidad (%)</label><input className="input" type="number" /></div>
        <div><label className="label">Presentación</label><input className="input" /></div>
        <div><label className="label">Fecha de acopio</label><input className="input" type="date" /></div>
        <div><label className="label">Lugar de producción/acopio</label><input className="input" /></div>

        <fieldset className="md:col-span-2"><legend className="font-semibold">Trazabilidad y Auditoría</legend></fieldset>
        <div><label className="label">Código/QR lote</label><input className="input" /></div>
        <div><label className="label">Verificador (wallet)</label><input className="input" /></div>
        <div><label className="label">Docs asociados (hash)</label><input className="input" /></div>
        <div><label className="label">Ubicación aprox.</label><input className="input" /></div>
        <div className="md:col-span-2"><label className="label">Historial transferencias (on-chain)</label><textarea className="input" placeholder="Lista o referencia" /></div>

        <fieldset className="md:col-span-2"><legend className="font-semibold">Datos Comerciales</legend></fieldset>
        <div><label className="label">Precio base</label><input className="input" type="number" /></div>
        <div><label className="label">Moneda</label><input className="input" placeholder="USDC, Córdobas tokenizadas" /></div>
        <div><label className="label">Condición de venta</label><select className="input"><option>Contado</option><option>Crédito</option></select></div>
        <div><label className="label">Escrow</label><select className="input"><option>Sí</option><option>No</option></select></div>

        <fieldset className="md:col-span-2"><legend className="font-semibold">Cumplimiento y Regulación</legend></fieldset>
        <div><label className="label">Código fiscal/Partida arancelaria</label><input className="input" /></div>
        <div><label className="label">IVA/Exento</label><input className="input" /></div>
        <div><label className="label">Permisos ambientales (hash)</label><input className="input" /></div>
        <div><label className="label">Certificado reciclaje (hash + IPFS)</label><input className="input" /></div>

        <fieldset className="md:col-span-2"><legend className="font-semibold">Recompensas (opcional)</legend></fieldset>
        <div><label className="label">Tokens de utilidad</label><input className="input" /></div>
        <div><label className="label">Bonos ambientales</label><input className="input" /></div>
        <div><label className="label">Certificado verde digital</label><input className="input" /></div>

        <div className="md:col-span-2 flex gap-2 mt-4">
          <button className="btn btn-primary" type="submit" disabled={viewOnly}>Guardar</button>
          <button className="btn" type="reset" disabled={viewOnly}>Limpiar</button>
        </div>
      </form>
      {saved && <p className="mt-3 text-sm">Producto guardado (simulado).</p>}
    </div>
  )
}
