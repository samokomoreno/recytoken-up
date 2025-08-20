'use client'
import { useState } from 'react'

export default function Clients() {
  const [saved, setSaved] = useState(false)
  function save(e: React.FormEvent) {
    e.preventDefault()
    setSaved(true)
  }
  return (
    <div className="grid gap-6">
      <div className="card">
        <h1 className="text-xl font-semibold mb-4">Registro de Clientes / Proveedores</h1>
        <form className="grid md:grid-cols-2 gap-4" onSubmit={save}>
          <fieldset className="md:col-span-2"><legend className="font-semibold">Identificación</legend></fieldset>
          <div><label className="label">ID Cliente</label><input className="input" placeholder="AUTOGENERADO" disabled /></div>
          <div><label className="label">Tipo de persona</label><select className="input"><option>Natural</option><option>Jurídica</option></select></div>
          <div><label className="label">Clasificación</label><select className="input"><option>Comprador</option><option>Vendedor</option></select></div>
          <div><label className="label">Nombre / Razón social</label><input className="input" /></div>
          <div><label className="label">NIF/RUC/NIT/RTN</label><input className="input" /></div>
          <div><label className="label">Cédula/DNI/Pasaporte</label><input className="input" /></div>

          <fieldset className="md:col-span-2"><legend className="font-semibold">Contacto</legend></fieldset>
          <div><label className="label">Teléfono</label><input className="input" /></div>
          <div><label className="label">Correo</label><input className="input" type="email" /></div>
          <div><label className="label">Página web</label><input className="input" /></div>
          <div><label className="label">Persona de contacto</label><input className="input" /></div>

          <fieldset className="md:col-span-2"><legend className="font-semibold">Dirección</legend></fieldset>
          <div><label className="label">País</label><input className="input" /></div>
          <div><label className="label">Departamento/Estado</label><input className="input" /></div>
          <div><label className="label">Ciudad/Municipio</label><input className="input" /></div>
          <div><label className="label">Dirección fiscal</label><input className="input" /></div>
          <div><label className="label">Coordenadas</label><input className="input" placeholder="lat, lng" /></div>
          <div><label className="label">Dirección de entrega</label><input className="input" /></div>
          <div><label className="label">Código postal</label><input className="input" /></div>

          <fieldset className="md:col-span-2"><legend className="font-semibold">Comercial</legend></fieldset>
          <div><label className="label">Moneda</label><select className="input"><option>USD</option><option>Córdobas</option></select></div>
          <div><label className="label">Cuenta bancaria</label><input className="input" placeholder="Banco / Cuenta / Titular" /></div>
          <div className="md:col-span-2"><label className="label">Observaciones</label><textarea className="input" /></div>

          <fieldset className="md:col-span-2"><legend className="font-semibold">Fiscal/Legal</legend></fieldset>
          <div><label className="label">Régimen fiscal</label><input className="input" /></div>
          <div><label className="label">RUC</label><input className="input" /></div>
          <div><label className="label">Exención</label><input className="input" /></div>
          <div><label className="label">Retenciones</label><input className="input" /></div>

          <fieldset className="md:col-span-2"><legend className="font-semibold">Seguimiento</legend></fieldset>
          <div><label className="label">Fecha alta</label><input className="input" type="date" /></div>
          <div><label className="label">Estado</label><select className="input"><option>Activo</option><option>Inactivo</option><option>Suspendido</option></select></div>

          <fieldset className="md:col-span-2"><legend className="font-semibold">Seguridad</legend></fieldset>
          <div className="md:col-span-2"><label className="label">Consentimiento de uso de datos</label><input className="input" type="checkbox" /> <span className="text-sm">Acepto</span></div>

          <div className="md:col-span-2 flex gap-2 mt-4">
            <button className="btn btn-primary" type="submit">Guardar</button>
            <button className="btn" type="reset">Limpiar</button>
          </div>
        </form>
        {saved && <p className="mt-3 text-sm">Guardado (simulado). Validaciones pueden añadirse con Zod/React Hook Form.</p>}
      </div>
    </div>
  )
}
