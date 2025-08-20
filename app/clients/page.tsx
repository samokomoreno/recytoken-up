'use client';

import React, { useState, useEffect } from 'react';

interface Client {
  idCliente: string;
  tipoPersona: string;
  clasificacion: string;
  nombre: string;
  numeroFiscal: string;
  identificacion: string;
  telefono: string;
  correo: string;
  paginaWeb?: string;
  personaContacto?: string;
  pais: string;
  departamento: string;
  ciudad: string;
  direccionFiscal: string;
  coordenadas: string;
  direccionEntrega?: string;
  codigoPostal?: string;
  moneda: string;
  banco?: string;
  cuenta?: string;
  cuentahabiente?: string;
  observaciones?: string;
  regimenFiscal: string;
  numeroRUC: string;
  certificadoExencion?: string;
  retenciones?: string;
  fechaAlta: string;
  estado: string;
  consentimientoDatos: boolean;
}

export default function ClientsPage() {
  const [client, setClient] = useState<Client>({
    idCliente: '',
    tipoPersona: 'Natural',
    clasificacion: 'Comprador',
    nombre: '',
    numeroFiscal: '',
    identificacion: '',
    telefono: '',
    correo: '',
    paginaWeb: '',
    personaContacto: '',
    pais: '',
    departamento: '',
    ciudad: '',
    direccionFiscal: '',
    coordenadas: '',
    direccionEntrega: '',
    codigoPostal: '',
    moneda: '',
    banco: '',
    cuenta: '',
    cuentahabiente: '',
    observaciones: '',
    regimenFiscal: '',
    numeroRUC: '',
    certificadoExencion: '',
    retenciones: '',
    fechaAlta: new Date().toISOString().slice(0,10),
    estado: 'Activo',
    consentimientoDatos: false,
  });

  const [saved, setSaved] = useState(false);
  const [viewOnly, setViewOnly] = useState(true);

  // Simula verificación de correo
  useEffect(() => {
    // Aquí se podría comprobar status real del correo
    setViewOnly(false); // cambiar a true si no está verificado
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setClient(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Guardando cliente:', client);
    setSaved(true);
  }

  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <h1 className="text-xl font-semibold mb-4">Registro de Clientes / Proveedores</h1>
        {viewOnly && <p className="text-sm rounded-lg bg-amber-50 border border-amber-200 text-amber-800 p-3 mt-2">
          Tu correo no está verificado: solo lectura (modo view).
        </p>}

        <form className="grid md:grid-cols-2 gap-4" onSubmit={save}>
          {/* Identificación */}
          <fieldset className="md:col-span-2 border p-3 rounded">
            <legend className="font-semibold">Identificación del Cliente</legend>
            <input name="idCliente" value={client.idCliente} onChange={handleChange} placeholder="ID Cliente" disabled={viewOnly} className="input"/>
            <select name="tipoPersona" value={client.tipoPersona} onChange={handleChange} disabled={viewOnly} className="input">
              <option value="Natural">Persona Natural</option>
              <option value="Juridica">Persona Jurídica</option>
            </select>
            <select name="clasificacion" value={client.clasificacion} onChange={handleChange} disabled={viewOnly} className="input">
              <option value="Comprador">Comprador</option>
              <option value="Vendedor">Vendedor</option>
            </select>
            <input name="nombre" value={client.nombre} onChange={handleChange} placeholder="Nombre / Razón social" disabled={viewOnly} className="input"/>
            <input name="numeroFiscal" value={client.numeroFiscal} onChange={handleChange} placeholder="Número Fiscal (NIF/RUC/NIT/RTN)" disabled={viewOnly} className="input"/>
            <input name="identificacion" value={client.identificacion} onChange={handleChange} placeholder="Cédula/DNI/Pasaporte" disabled={viewOnly} className="input"/>
          </fieldset>

          {/* Contacto */}
          <fieldset className="md:col-span-2 border p-3 rounded">
            <legend className="font-semibold">Datos de Contacto</legend>
            <input name="telefono" value={client.telefono} onChange={handleChange} placeholder="Teléfono" disabled={viewOnly} className="input"/>
            <input name="correo" value={client.correo} onChange={handleChange} placeholder="Correo" disabled={viewOnly} className="input"/>
            <input name="paginaWeb" value={client.paginaWeb} onChange={handleChange} placeholder="Página web" disabled={viewOnly} className="input"/>
            <input name="personaContacto" value={client.personaContacto} onChange={handleChange} placeholder="Persona de contacto" disabled={viewOnly} className="input"/>
          </fieldset>

          {/* Dirección */}
          <fieldset className="md:col-span-2 border p-3 rounded">
            <legend className="font-semibold">Dirección</legend>
            <input name="pais" value={client.pais} onChange={handleChange} placeholder="País" disabled={viewOnly} className="input"/>
            <input name="departamento" value={client.departamento} onChange={handleChange} placeholder="Departamento / Estado / Provincia" disabled={viewOnly} className="input"/>
            <input name="ciudad" value={client.ciudad} onChange={handleChange} placeholder="Ciudad / Municipio" disabled={viewOnly} className="input"/>
            <input name="direccionFiscal" value={client.direccionFiscal} onChange={handleChange} placeholder="Dirección Fiscal" disabled={viewOnly} className="input"/>
            <input name="coordenadas" value={client.coordenadas} onChange={handleChange} placeholder="Coordenadas GPS" disabled={viewOnly} className="input"/>
            <input name="direccionEntrega" value={client.direccionEntrega} onChange={handleChange} placeholder="Dirección de Entrega" disabled={viewOnly} className="input"/>
            <input name="codigoPostal" value={client.codigoPostal} onChange={handleChange} placeholder="Código Postal" disabled={viewOnly} className="input"/>
          </fieldset>

          {/* Comerciales */}
          <fieldset className="md:col-span-2 border p-3 rounded">
            <legend className="font-semibold">Datos Comerciales</legend>
            <input name="moneda" value={client.moneda} onChange={handleChange} placeholder="Moneda preferida" disabled={viewOnly} className="input"/>
            <input name="banco" value={client.banco} onChange={handleChange} placeholder="Banco" disabled={viewOnly} className="input"/>
            <input name="cuenta" value={client.cuenta} onChange={handleChange} placeholder="Número de cuenta" disabled={viewOnly} className="input"/>
            <input name="cuentahabiente" value={client.cuentahabiente} onChange={handleChange} placeholder="Cuentahabiente" disabled={viewOnly} className="input"/>
            <textarea name="observaciones" value={client.observaciones} onChange={handleChange} placeholder="Observaciones" disabled={viewOnly} className="input"/>
          </fieldset>

          {/* Fiscales y legales */}
          <fieldset className="md:col-span-2 border p-3 rounded">
            <legend className="font-semibold">Datos Fiscales y Legales</legend>
            <input name="regimenFiscal" value={client.regimenFiscal} onChange={handleChange} placeholder="Régimen fiscal" disabled={viewOnly} className="input"/>
            <input name="numeroRUC" value={client.numeroRUC} onChange={handleChange} placeholder="Número RUC" disabled={viewOnly} className="input"/>
            <input name="certificadoExencion" value={client.certificadoExencion} onChange={handleChange} placeholder="Certificado de exención" disabled={viewOnly} className="input"/>
            <input name="retenciones" value={client.retenciones} onChange={handleChange} placeholder="Retenciones aplicables" disabled={viewOnly} className="input"/>
          </fieldset>

          {/* Historial y seguridad */}
          <fieldset className="md:col-span-2 border p-3 rounded">
            <legend className="font-semibold">Seguridad y Cumplimiento</legend>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="consentimientoDatos" checked={client.consentimientoDatos} onChange={handleChange} disabled={viewOnly}/>
              Acepto el uso de datos personales
            </label>
            <input name="fechaAlta" value={client.fechaAlta} onChange={handleChange} type="date" disabled={viewOnly} className="input"/>
            <select name="estado" value={client.estado} onChange={handleChange} disabled={viewOnly} className="input">
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
              <option value="Suspendido">Suspendido</option>
            </select>
          </fieldset>

          <button type="submit" disabled={viewOnly} className="btn mt-4 md:col-span-2">Guardar Cliente</button>
          {saved && <p className="text-green-600 font-medium mt-2">Cliente guardado correctamente.</p>}
        </form>
      </div>
    </div>
  )
}
