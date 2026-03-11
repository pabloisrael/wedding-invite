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
    monthShort: "ABR",
    year: "2026",
    // Format: YYYY-MM-DD HH:MM:SS
    fullDate: "2026-04-11 20:00:00"
  },

  // MAIN TITLE
  heroMessage: "¡NOS CASAMOS!",
  subtitle: "Queremos compartir nuestro gran día con vos",

  // CEREMONY
  ceremony: {
    name: "SALON EL CENTRAL",
    subtitle: "La Rural de Buenos Aires",
    address: "Av. Sarmiento 2704",
    city: "CABA",
    time: "18:00 HS",
    mapsUrl: "https://www.google.com/maps/place/El+Central+-+Bistro+de+campo/@-34.5798009,-58.4219392,16.67z/data=!4m14!1m7!3m6!1s0x95bcb59cd6452553:0x6b521307d135059a!2sLa+Rural!8m2!3d-34.5797805!4d-58.4209327!16s%2Fg%2F1ymyp0my0!3m5!1s0x95bcb5dad5e638b9:0x43f3fde47288149e!8m2!3d-34.5793172!4d-58.4202742!16s%2Fg%2F11sy3jgqvx?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
  },

  // RECEPTION
  reception: {
    name: "SALON EL CENTRAL",
    subtitle: "La Rural de Buenos Aires",
    address: "Av. Sarmiento 2704",
    city: "CABA",
    time: "20:00 HS",
    mapsUrl: "https://www.google.com/maps/place/El+Central+-+Bistro+de+campo/@-34.5798009,-58.4219392,16.67z/data=!4m14!1m7!3m6!1s0x95bcb59cd6452553:0x6b521307d135059a!2sLa+Rural!8m2!3d-34.5797805!4d-58.4209327!16s%2Fg%2F1ymyp0my0!3m5!1s0x95bcb5dad5e638b9:0x43f3fde47288149e!8m2!3d-34.5793172!4d-58.4202742!16s%2Fg%2F11sy3jgqvx?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
  },

  // PHOTO GALLERY (optional)
  gallery: {
    enabled: true,
    photos: [
      "/images/gallery/ef2.jpeg",
      "/images/gallery/ef1.jpeg",
      "/images/gallery/ef3.jpeg",
      "/images/gallery/ef3-1.jpeg",
      "/images/gallery/ef4.jpeg",
      "/images/gallery/ef5.jpeg",
      "/images/gallery/ef6.jpeg"
    ]
  },

  // MUSIC SUGGESTIONS (optional)
  music: {
    enabled: false,
    title: "¡Que no falte tu tema favorito!",
    description: "Ayudanos a armar la lista de canciones para nuestra fiesta",
    buttonText: "SUGERÍ TU TEMA ACÁ",
    formUrl: "https://forms.gle/tu-formulario-musica"
  },

  // USEFUL INFORMATION
  dressCode: {
    title: "DRESS CODE",
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
      accountHolder: "Maria Elena Corraro Bianchi",
      accountNumber: "0070020730004041799807",
      alias: "Eleyfran2026",
      bank: "Banco Galicia"
    },
    // Segunda cuenta (opcional - dólares u otra moneda)
    account2: {
      enabled: true,
      currency: "DÓLARES",
      accountHolder: "Maria Elena Corraro Bianchi",
      accountNumber: "0070020731004009864753",
      alias: "Casamientoeleyfran",
      bank: "Banco Galicia"
    }
  },

  // RSVP
  rsvp: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    subtitle: "¡En el día más feliz de nuestra vida, no podés faltar!",
    description: "Te pedimos que confirmes tu asistencia antes del 14 de marzo.\n\nSi fuiste invitado con un acompañante, completar un formulario por persona.",
    buttonText: "CONFIRMAR MI ASISTENCIA",
    // Google Forms URL or similar
    formUrl: "https://forms.gle/jPzo64tjkcBxx2rp9"
  },

  // IMAGES
  images: {
    // Main logo (leave empty "" if you don't have one)
    logo: "/images/gallery/eleyfran11.jpeg",
    // Hero background image (optional)
    heroBackground: "",
    // Favicon
    favicon: ""
  },

  // COLORS (customize your theme colors)
  colors: {
    primary: "#d4a574", // gold/beige
    secondary: "#82b08c", // sage green
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
