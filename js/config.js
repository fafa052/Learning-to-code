/**
 * TARJETA DIGITAL — SOLO CAMBIA ESTE ARCHIVO
 * ==========================================
 *
 * 1) Sustituye los textos de ejemplo por los datos reales del doctor.
 * 2) Reemplaza la foto: assets/doctor.png (deja el mismo nombre).
 * 3) Guarda y vuelve a abrir index.html para ver los cambios.
 *
 * No hace falta tocar index.html, css/ ni js/app.js.
 */
window.DOCTOR_CARD = {
  // --- Lo que sale en Google ---
  seoTitle: "Dr. Andrés Navarro · Medicina Interna | Tarjeta digital",
  seoDescription:
    "Tarjeta digital del Dr. Andrés Navarro, médico internista. Teléfono, Instagram, Doctoralia y datos de consultorio.",

  // true = Google puede mostrar la página si buscan el nombre
  allowSearchIndexing: true,

  // Enlace público cuando esté en GitHub Pages
  publicUrl: "https://fafa052.github.io/Learning-to-code/",

  // Lo pegas cuando Google Search Console te dé el código de verificación
  googleSiteVerification: "",

  // --- Datos que se ven en la tarjeta ---
  name: "Dr. Andrés Navarro",
  specialty: "Medicina Interna",
  credentials: "Cédula profesional 12345678",
  tagline: "Atención cercana, clara y de confianza.",
  photo: "assets/doctor.png",
  photoAlt: "Retrato profesional del Dr. Andrés Navarro",

  phone: "+525512345678",
  phoneDisplay: "55 1234 5678",
  whatsapp: "525512345678",
  whatsappMessage:
    "Hola doctor, vi su tarjeta digital y me gustaría agendar una cita.",
  email: "contacto@consultorionavarro.mx",

  instagram: "https://www.instagram.com/dr.andresnavarro",
  instagramHandle: "@dr.andresnavarro",
  doctoralia: "https://www.doctoralia.com.mx/",
  doctoraliaLabel: "Ver perfil en Doctoralia",

  clinicName: "Consultorio Médico Navarro",
  address: "Av. Paseo de la Reforma 222, Piso 8, Juárez, Ciudad de México",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Paseo+de+la+Reforma+222+Ciudad+de+Mexico",
  hours: [
    { days: "Lunes a viernes", time: "9:00 – 14:00 y 16:00 – 19:00" },
    { days: "Sábado", time: "9:00 – 13:00" },
    { days: "Domingo", time: "Cerrado" },
  ],

  bio: "El Dr. Andrés Navarro se dedica a la medicina interna con un enfoque humano y preventivo. Acompaña a sus pacientes en el diagnóstico, el seguimiento de enfermedades crónicas y las decisiones de salud del día a día, con tiempo para explicar cada paso.",

  services: [
    "Consulta de medicina interna",
    "Chequeo médico general",
    "Seguimiento de hipertensión y diabetes",
    "Orientación preventiva",
  ],
};
