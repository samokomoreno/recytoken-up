'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Settings() {
  const { theme, setTheme } = useTheme()
  const [fontSize, setFontSize] = useState('16')

  useEffect(() => {
    const size = localStorage.getItem('fontSize') || '16'
    setFontSize(size)
    document.documentElement.style.setProperty('--font-size', size + 'px')
  }, [])

  function applySize(v: string) {
    setFontSize(v)
    localStorage.setItem('fontSize', v)
    document.documentElement.style.setProperty('--font-size', v + 'px')
  }

  return (
    <div className="card max-w-xl">
      <h1 className="text-xl font-semibold mb-4">Personalización</h1>
      <div className="grid gap-4">
        <div>
          <label className="label">Tema</label>
          <div className="flex gap-2 mt-2">
            <button className="btn btn-primary" onClick={() => setTheme('light')}>Claro</button>
            <button className="btn" onClick={() => setTheme('dark')}>Oscuro</button>
            <button className="btn" onClick={() => setTheme('system')}>Sistema</button>
          </div>
        </div>
        <div>
          <label className="label">Tamaño de letra: {fontSize}px</label>
          <input
            type="range" min={12} max={22} value={fontSize}
            onChange={(e) => applySize(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}
