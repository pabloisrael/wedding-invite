// WEDDING INVITATION CONFIGURATION
export const CONFIG = {
  // COUPLE INFORMATION
  couple: {
    name1: "Ele",
    name2: "Fran"
  },

  // EVENT DATE
  date: {
    day: "11",
    month: "ABRIL",
    year: "2026",
    // Format: YYYY-MM-DD HH:MM:SS
    fullDate: "2026-04-11 20:00:00"
  },

  // MAIN TITLE
  heroMessage: "¡NOS CASAMOS!",
  subtitle: "Queremos compartir nuestro gran día con vos",

  // CEREMONY
  ceremony: {
    name: "La Rural",
    address: "Av Santa Fe 1111",
    city: "CABA",
    time: "20:00 HS",
    mapsUrl: "https://maps.google.com/?q=Basílica+del+Santísimo+Sacramento+San+Martín+1035+CABA"
  },

  // RECEPTION
  reception: {
    name: "La Rural",
    address: "Av Santa Fe 1111",
    city: "CABA",
    time: "21:00 HS",
    mapsUrl: "https://maps.google.com/?q=Hotel+Hilton+Buenos+Aires+Macacha+Guemes+351+CABA"
  },

  // PHOTO GALLERY (optional)
  gallery: {
    enabled: true,
    photos: [
      "/images/gallery/ef1.jpeg",
      "/images/gallery/ef2.jpeg",
      "/images/gallery/ef3.jpeg",
      "/images/gallery/ef3-1.jpeg",
      "/images/gallery/ef4.jpeg",
      "/images/gallery/ef5.jpeg",
      "/images/gallery/ef6.jpeg"
    ]
  },

  // MUSIC SUGGESTIONS (optional)
  music: {
    enabled: true,
    title: "¡Que no falte tu tema favorito!",
    description: "Ayudanos a armar la lista de canciones para nuestra fiesta",
    buttonText: "SUGERÍ TU TEMA ACÁ",
    formUrl: "https://forms.gle/tu-formulario-musica"
  },

  // USEFUL INFORMATION
  dressCode: {
    title: "¡A PONERSE LINDOS!",
    description: "El dress code de nuestra boda es **elegante**.\n\nNo olvides estar cómodo. Evitar blanco y tonos similares."
  },

  children: {
    title: "¿PUEDEN IR NIÑOS?",
    description: "Este es un festejo destinado solo a adultos, no contará con las instalaciones necesarias para niños."
  },

  gift: {
    title: "SI QUERÉS REGALARNOS ALGO...",
    description: "**Lo que más queremos es compartir con vos nuestro gran día**, pero si deseas regalarnos algo te brindamos nuestros datos bancarios.",
    // Primera cuenta (pesos)
    account1: {
      currency: "PESOS",
      accountHolder: "Ele y Fran",
      accountNumber: "1254875968554455223366",
      alias: "BODA.ELE.FRAN",
      bank: "Banco Nación"
    },
    // Segunda cuenta (opcional - dólares u otra moneda)
    account2: {
      enabled: true, // Cambiar a true para mostrar segunda cuenta
      currency: "DÓLARES",
      accountHolder: "Ele y Fran",
      accountNumber: "9876543210123456789012",
      alias: "BDDA.USD",
      bank: "Banco Nación"
    }
  },

  // RSVP
  rsvp: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    subtitle: "¡En el día más feliz de nuestra vida, no podés faltar!",
    description: "Te pedimos que confirmes tu asistencia antes del 20/06/2025.\n\nSi fuiste invitado con un acompañante, completar un formulario por persona.",
    buttonText: "CONFIRMAR MI ASISTENCIA",
    // Google Forms URL or similar
    formUrl: "https://forms.gle/tu-formulario-aqui"
  },

  // IMAGES
  images: {
    // Main logo (leave empty "" if you don't have one)
    logo: "/images/gallery/logo-2.png",
    // Hero background image (optional)
    heroBackground: "",
    // Favicon
    favicon: ""
  },

  // COLORS (customize your theme colors)
  colors: {
    primary: "#d4a574", // gold/beige
    secondary: "#8b7355",
    background: "#faf8f5",
    text: "#333333",
    textLight: "#666666"
  },

  // SOCIAL MEDIA AND CONTACT
  contact: {
    instagram: "@yendoinvitaciones",
    whatsapp: "",
    email: ""
  }
};
