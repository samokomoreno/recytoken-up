import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid gap-6">
      <section className="card">
        <h1 className="text-2xl font-semibold mb-2">Bienvenida/o a RECYTOKEN-UP</h1>
        <p className="mb-4">Prototipo PWA con Next.js, Tailwind y soporte de temas.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/login" className="btn btn-primary">Iniciar sesión</Link>
          <Link href="/clients" className="btn">Clientes/Proveedores</Link>
          <Link href="/products" className="btn">Productos</Link>
          <Link href="/movements" className="btn">Movimientos</Link>
          <Link href="/search" className="btn">Búsqueda / Mapa</Link>
          <Link href="/billing" className="btn">Facturación</Link>
        </div>
      </section>
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Características</h2>
        <ul className="list-disc pl-6">
          <li>PWA responsive</li>
          <li>Temas, fuente y tamaño de letra configurables</li>
          <li>Formularios con validaciones básicas</li>
          <li>Estructura SQL y datos de ejemplo</li>
        </ul>
      </section>
    </div>
  )
}
