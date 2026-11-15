// ============================================
// CONFIGURACIÓN CENTRAL — SCRIMS MIXTAS SPIDER'S
// ============================================

// Staff con sus credenciales y bloques asignados
// ⚠️ En producción usa contraseñas hasheadas (ver README al final)
const STAFF = {
  "gero": {
    pass: "gero2026",
    nombre: "Gero",
    rol: "Organizador",
    bloques: ["L1"] // Lunes/Viernes Bloque 1 (04:00 MX · 05:00 CO)
  },
  "kevin": {
    pass: "kevin2026",
    nombre: "Kevin",
    rol: "Organizador",
    bloques: ["L2", "S2"] // L1 06:00 y Sáb/Dom 06:00
  },
  "camilla": {
    pass: "camilla2026",
    nombre: "Camilla",
    rol: "Organizadora",
    bloques: ["L2"]
  },
  "anthony": {
    pass: "anthony2026",
    nombre: "Anthony",
    rol: "Organizador",
    bloques: ["L3"]
  },
  "lesly": {
    pass: "lesly2026",
    nombre: "Lesly",
    rol: "Organizadora",
    bloques: ["S2"]
  },
  "sebastian": {
    pass: "sebas2026",
    nombre: "Sebastián",
    rol: "Organizador",
    bloques: ["S3"] // Sáb/Dom Bloque 2
  },
  "alexander": {
    pass: "alex2026",
    nombre: "Alexander",
    rol: "Organizador",
    bloques: ["S4"] // Sáb/Dom Bloque 3
  }
};

// Bloques oficiales de la corporación
// id → usado internamente, no cambiar
// estado → "libre" | "en_curso" | "cerrado" | "cancelado"
// slots → lista de equipos inscritos (máx 12 por bloque por defecto)
const BLOQUES = {
  // ---- LUNES / VIERNES ----
  L1: {
    dia: "Lunes / Viernes",
    nombre: "Bloque 1",
    hora: "04:00 🇲🇽 · 05:00 🇨🇴",
    orgDefault: "Gero",
    maxSlots: 12,
    estado: "libre",
    notas: "",
    equipos: []
  },
  L2: {
    dia: "Lunes / Viernes",
    nombre: "Bloque 1 (segundo turno)",
    hora: "06:00 🇲🇽 · 07:00 🇨🇴",
    orgDefault: "Kevin & Camilla",
    maxSlots: 12,
    estado: "libre",
    notas: "",
    equipos: []
  },
  L3: {
    dia: "Lunes / Viernes",
    nombre: "Bloque 3",
    hora: "10:00 🇨🇴 · 11:00 🇨🇴",
    orgDefault: "Anthony",
    maxSlots: 12,
    estado: "libre",
    notas: "",
    equipos: []
  },
  // ---- SÁBADO / DOMINGO ----
  S1: {
    dia: "Sábado / Domingo",
    nombre: "Bloque 1",
    hora: "04:00 🇲🇽 · 05:00 🇨🇴",
    orgDefault: "",
    maxSlots: 12,
    estado: "libre",
    notas: "Sin organizador asignado aún",
    equipos: []
  },
  S2: {
    dia: "Sábado / Domingo",
    nombre: "Bloque 2",
    hora: "06:00 🇲🇽 · 07:00 🇨🇴",
    orgDefault: "Kevin & Lesly",
    maxSlots: 12,
    estado: "libre",
    notas: "",
    equipos: []
  },
  S3: {
    dia: "Sábado / Domingo",
    nombre: "Bloque 3",
    hora: "08:00 🇲🇽 · 09:00 🇨🇴",
    orgDefault: "Sebastián",
    maxSlots: 12,
    estado: "libre",
    notas: "",
    equipos: []
  },
  S4: {
    dia: "Sábado / Domingo",
    nombre: "Bloque 4",
    hora: "10:00 🇲🇽 · 11:00 🇨🇴",
    orgDefault: "Alexander",
    maxSlots: 12,
    estado: "libre",
    notas: "",
    equipos: []
  }
};

// Links oficiales
const LINKS = {
  grupo1: "https://chat.whatsapp.com/DE0YSHrvRhR0K5UOdfmpR7?s=cl&p=a&iam=2",
  grupo2: "https://chat.whatsapp.com/DphDT8gHJwD5lnSNhvdhR4?s=cl&p=a&iam=2",
  instagram: "https://www.instagram.com/corpspiders?vrfl=MW1oMTZoaW51c3BwNQ=="
};

// Dueños / CEO (para mostrar en footer público)
const DIRECTIVA = [
  { rol: "Dueños", nombres: "Pánico - Camila" },
  { rol: "CEO", nombres: "Juan - Mar" }
];
