'use client';

import React, { useState, useEffect } from 'react';

interface Product {
  idProducto: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  stock: number;
  precioUnitario: number;
  moneda: string;
  proveedor: string;
  observaciones?: string;
}

export default function ProductsPage() {
  const [product, setProduct] = useState<Product>({
    idProducto: '',
    nombre: '',
    categoria: '',
    descripcion: '',
    stock: 0,
    precioUnitario: 0,
    moneda: 'USD',
    proveedor: '',
    observaciones: ''
  });

  const [viewOnly, setViewOnly] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setViewOnly(false);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: ['stock', 'precioUnitario'].includes(name) ? Number(value) : value
    }));
  }

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Producto guardado:', product);
    setSaved(true);
  }

  return (
    <div className="card p-6 max-w-3xl">
      <h1 className="text-xl font-semibold mb-4">Registro de Productos</h1>
      {viewOnly && <p className="text-sm rounded-lg bg-amber-50 border border-amber-200 text-amber-800 p-3 mt-2">
        Tu correo no está verificado: solo lectura (modo view).
      </p>}

      <form className="grid md:grid-cols-2 gap-4" onSubmit={save}>
        <input name="idProducto" value={product.idProducto} onChange={handleChange} placeholder="ID Producto" disabled={viewOnly} className="input"/>
        <input name="nombre" value={product.nombre} onChange={handleChange} placeholder="Nombre" disabled={viewOnly} className="input"/>
        <input name="categoria" value={product.categoria} onChange={handleChange} placeholder="Categoría" disabled={viewOnly} className="input"/>
        <textarea name="descripcion" value={product.descripcion} onChange={handleChange} placeholder="Descripción" disabled={viewOnly} className="input"/>
        <input name="stock" value={product.stock} onChange={handleChange} type="number" step="1" disabled={viewOnly} className="input"/>
        <input name="precioUnitario" value={product.precioUnitario} onChange={handleChange} type="number" step="0.01" disabled={viewOnly} className="input"/>
        <select name="moneda" value={product.moneda} onChange={handleChange} disabled={viewOnly} className="input">
          <option value="USD">USD</option>
          <option value="NIO">NIO</option>
        </select>
        <input name="proveedor" value={product.proveedor} onChange={handleChange} placeholder="Proveedor" disabled={viewOnly} className="input"/>
        <textarea name="observaciones" value={product.observaciones} onChange={handleChange} placeholder="Observaciones" disabled={viewOnly} className="input"/>
        <button type="submit" disabled={viewOnly} className="btn md:col-span-2 mt-2">Guardar Producto</button>
        {saved && <p className="text-green-600 font-medium mt-2">Producto guardado correctamente.</p>}
      </form>
    </div>
  );
}
