'use client';

import React, { useState, useEffect } from 'react';

interface BillingData {
  idTransaccion: string;
  cliente: string;
  fecha: string;
  metodoPago: string;
  monto: number;
  estado: string;
  observaciones?: string;
}

export default function BillingPage() {
  const [billing, setBilling] = useState<BillingData>({
    idTransaccion: '',
    cliente: '',
    fecha: new Date().toISOString().slice(0,10),
    metodoPago: 'Efectivo',
    monto: 0,
    estado: 'Pendiente',
    observaciones: ''
  });

  const [viewOnly, setViewOnly] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setViewOnly(false); // Simula verificación de correo
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBilling(prev => ({ ...prev, [name]: name === 'monto' ? Number(value) : value }));
  }

  const registerTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registrando transacción:', billing);
    setStatus('Transacción blockchain simulada. Compra registrada (simulada).');
  }

  return (
    <div className="card max-w-2xl p-6">
      <h1 className="text-xl font-semibold mb-4">Facturación</h1>
      {viewOnly && <p className="text-sm rounded-lg bg-amber-50 border border-amber-200 text-amber-800 p-3 mt-2">
        Tu correo no está verificado: solo lectura (modo view).
      </p>}

      <form className="grid gap-4" onSubmit={registerTransaction}>
        <input name="idTransaccion" value={billing.idTransaccion} onChange={handleChange} placeholder="ID Transacción" disabled={viewOnly} className="input"/>
        <input name="cliente" value={billing.cliente} onChange={handleChange} placeholder="Cliente" disabled={viewOnly} className="input"/>
        <input name="fecha" value={billing.fecha} onChange={handleChange} type="date" disabled={viewOnly} className="input"/>
        <select name="metodoPago" value={billing.metodoPago} onChange={handleChange} disabled={viewOnly} className="input">
          <option value="Efectivo">Efectivo</option>
          <option value="Transferencia">Transferencia</option>
          <option value="Tarjeta">Tarjeta</option>
        </select>
        <input name="monto" value={billing.monto} onChange={handleChange} type="number" step="0.01" disabled={viewOnly} className="input"/>
        <select name="estado" value={billing.estado} onChange={handleChange} disabled={viewOnly} className="input">
          <option value="Pendiente">Pendiente</option>
          <option value="Pagada">Pagada</option>
          <option value="Cancelada">Cancelada</option>
        </select>
        <textarea name="observaciones" value={billing.observaciones} onChange={handleChange} placeholder="Observaciones" disabled={viewOnly} className="input"/>
        <button type="submit" disabled={viewOnly} className="btn mt-2">Registrar Factura</button>
        {status && <p className="text-green-600 font-medium mt-2">{status}</p>}
      </form>
    </div>
  );
}
