'use client';

import React, { useState, useEffect } from 'react';

interface Movement {
  idMovimiento: string;
  tipo: string;
  fecha: string;
  producto: string;
  cantidad: number;
  precioUnitario: number;
  total: number;
  observaciones?: string;
}

export default function MovementsPage() {
  const [movement, setMovement] = useState<Movement>({
    idMovimiento: '',
    tipo: 'Entrada',
    fecha: new Date().toISOString().slice(0,10),
    producto: '',
    cantidad: 0,
    precioUnitario: 0,
    total: 0,
    observaciones: ''
  });

  const [viewOnly, setViewOnly] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setViewOnly(false);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMovement(prev => ({
      ...prev,
      [name]: ['cantidad', 'precioUnitario', 'total'].includes(name) ? Number(value) : value
    }));
  }

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    setMovement(prev => ({ ...prev, total: prev.cantidad * prev.precioUnitario }));
    console.log('Movimiento agregado:', movement);
    setSaved(true);
  }

  return (
    <div className="grid gap-6">
      <div className="card p-6">
        <h1 className="text-xl font-semibold mb-4">Registro de Movimientos (Maestro-Detalle)</h1>
        {viewOnly && <p className="text-sm rounded-lg bg-amber-50 border border-amber-200 text-amber-800 p-3 mt-2">
          Tu correo no está verificado: solo lectura (modo view).
        </p>}

        <form className="grid md:grid-cols-4 gap-3" onSubmit={addItem}>
          <input name="idMovimiento" value={movement.idMovimiento} onChange={handleChange} placeholder="ID Movimiento" disabled={viewOnly} className="input"/>
          <select name="tipo" value={movement.tipo} onChange={handleChange} disabled={viewOnly} className="input">
            <option value="Entrada">Entrada</option>
            <option value="Salida">Salida</option>
          </select>
          <input name="fecha" value={movement.fecha} onChange={handleChange} type="date" disabled={viewOnly} className="input"/>
          <input name="producto" value={movement.producto} onChange={handleChange} placeholder="Producto" disabled={viewOnly} className="input"/>
          <input name="cantidad" value={movement.cantidad} onChange={handleChange} type="number" step="0.01" disabled={viewOnly} className="input"/>
          <input name="precioUnitario" value={movement.precioUnitario} onChange={handleChange} type="number" step="0.01" disabled={viewOnly} className="input"/>
          <input name="total" value={movement.total} onChange={handleChange} type="number" step="0.01" disabled className="input"/>
          <textarea name="observaciones" value={movement.observaciones} onChange={handleChange} placeholder="Observaciones" disabled={viewOnly} className="input"/>
          <button type="submit" disabled={viewOnly} className="btn md:col-span-4 mt-2">Agregar Movimiento</button>
          {saved && <p className="text-green-600 font-medium mt-2">Movimiento registrado correctamente.</p>}
        </form>
      </div>
    </div>
  );
}
