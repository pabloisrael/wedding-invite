'use client'

import { useEffect } from 'react'
import { CONFIG } from '../../config'

export default function ColorCustomizer() {
  useEffect(() => {
    if (CONFIG.colores) {
      document.documentElement.style.setProperty('--color-primary', CONFIG.colores.primario)
      document.documentElement.style.setProperty('--color-secondary', CONFIG.colores.secundario)
      document.documentElement.style.setProperty('--color-background', CONFIG.colores.fondo)
      document.documentElement.style.setProperty('--color-text', CONFIG.colores.texto)
      document.documentElement.style.setProperty('--color-text-light', CONFIG.colores.textoClaro)
    }
  }, [])

  return null
}
