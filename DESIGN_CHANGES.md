# 🎨 Cambios de Diseño - Inspirado en Yendo

Basado en https://yendo.com.ar/bodanatiyren/

## ✨ Nuevas Características

### 1. **Hero Rediseñado**
- Fecha arriba en formato más sutil
- Nombres de pareja más prominentes
- Mensaje personalizado más grande
- Layout más limpio y espacioso

### 2. **Countdown con Espaciado Especial**
- "F A L T A N…" con espaciado entre letras
- Números más grandes y elegantes
- Mejor espaciado entre elementos

### 3. **Secciones de Eventos Compactas**
- Ceremonia y Fiesta más minimalistas
- Sin tarjetas pesadas, más aire
- Enfoque en la información esencial

### 4. **Nueva Sección: Sugerencias de Música** 🎵
- Permite a invitados sugerir canciones
- Botón destacado para el formulario
- Opcional (se activa/desactiva en config)

### 5. **Títulos Mejorados en Info**
- "¡A PONERSE LINDOS!" para dress code
- "¿PUEDEN IR NIÑOS?" para política de niños
- "SI QUERÉS REGALARNOS ALGO..." para regalos
- Más amigables y conversacionales

### 6. **Dos Cuentas Bancarias**
- Soporte para cuenta en pesos
- Soporte para cuenta en dólares (opcional)
- Diseño claro y separado por moneda

### 7. **Footer Festivo**
- "¡A celebrar!" como mensaje final
- Más alegre y acorde al evento

## 📝 Configuración Actualizada

### Música (Nuevo)

```javascript
music: {
  enabled: true,  // true para mostrar, false para ocultar
  title: "¡Que no falte tu tema favorito!",
  description: "Ayudanos a armar la lista de canciones para nuestra fiesta",
  buttonText: "SUGERÍ TU TEMA ACÁ",
  formUrl: "https://forms.gle/tu-formulario-musica"
}
```

### Títulos Actualizados

```javascript
dressCode: {
  title: "¡A PONERSE LINDOS!",
  description: "El dress code de nuestra boda es **elegante**.\n\nNo olvides estar cómodo. Evitar blanco y tonos similares."
}

children: {
  title: "¿PUEDEN IR NIÑOS?",
  description: "Este es un festejo destinado solo a adultos..."
}

gift: {
  title: "SI QUERÉS REGALARNOS ALGO...",
  description: "**Lo que más queremos es compartir con vos nuestro gran día**..."
}
```

### Dos Cuentas Bancarias

```javascript
gift: {
  // ... descripción ...
  
  // Primera cuenta (siempre visible)
  account1: {
    currency: "PESOS",
    accountHolder: "Emilia Labu",
    accountNumber: "1254875968554455223366",
    alias: "BODA.EMILIA.BRUNO",
    bank: "Banco Nación"
  },
  
  // Segunda cuenta (opcional)
  account2: {
    enabled: true,  // Cambiar a true para mostrar
    currency: "DÓLARES",
    accountHolder: "Emilia Labu",
    accountNumber: "9876543210123456789012",
    alias: "BODAEMILIABRUNO",
    bank: "Banco Nación"
  }
}
```

## 🎯 Diferencias Clave con el Diseño Anterior

| Aspecto | Antes | Ahora |
|---------|-------|-------|
| **Hero** | Nombres grandes arriba | Fecha arriba, mensaje principal |
| **Countdown** | "FALTAN…" | "F A L T A N…" (espaciado) |
| **Eventos** | Tarjetas con sombras | Diseño plano y limpio |
| **Info** | Cards con hover | Layout vertical centrado |
| **Regalo** | Una cuenta | Hasta dos cuentas |
| **Música** | No existía | Nueva sección opcional |
| **Footer** | "¡Te esperamos!" | "¡A celebrar!" |

## 🎨 Mejoras de UX

1. **Menos scroll**: Secciones más compactas
2. **Más legible**: Mejor espaciado y tipografía
3. **Más personal**: Títulos conversacionales
4. **Más interactivo**: Sección de música
5. **Más flexible**: Dos cuentas bancarias

## 📱 Responsive

Todos los cambios mantienen el diseño responsive:
- Mobile: Textos más pequeños, elementos apilados
- Tablet: Tamaños intermedios
- Desktop: Layout completo con espaciado óptimo

## 🚀 Para Activar la Sección de Música

1. Crea un Google Form para sugerencias de música
2. En `config.js`, cambia `music.enabled` a `true`
3. Actualiza `music.formUrl` con tu enlace
4. ¡Listo! La sección aparecerá automáticamente

## 💡 Tips de Personalización

### Cambiar el orden de las secciones

En `app/page.js`, puedes reordenar los componentes:

```javascript
<main>
  <Hero />
  <Countdown />
  <MusicSuggestions />  // Mover aquí si quieres antes
  <Ceremony />
  <Reception />
  <InfoSection />
  <RSVP />
</main>
```

### Ocultar una sección

Simplemente comenta o elimina el componente:

```javascript
// <MusicSuggestions />  // Ahora está oculto
```

### Personalizar colores para este diseño

Sugerencias que funcionan bien con este layout:

```javascript
colors: {
  primary: "#c9a961",     // Dorado champagne
  secondary: "#8b8378",   // Gris cálido
  background: "#faf9f7",  // Blanco roto
  text: "#2d2d2d",
  textLight: "#6b6b6b"
}
```

---

**Servidor actual:** http://localhost:3004

Recarga tu navegador para ver todos los cambios! 🎉
