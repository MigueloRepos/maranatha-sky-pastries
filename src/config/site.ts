/**
 * Configuración central de Maranatha.
 * Los datos comerciales están VACÍOS a propósito: no se conocen.
 * Rellénalos solo con información real; los campos vacíos se ocultan en la web.
 */
export const SITE = {
  brand: "Maranatha",
  tagline: "La pastelería del cielo",
  address: "",
  hours: "",
  email: "",
  instagram: "",
  facebook: "",
};

/** Número de WhatsApp en formato internacional sin "+" ni espacios (p. ej. "34600000000"). Vacío = sin configurar. */
export const WHATSAPP_NUMBER = "";

export const isWhatsAppConfigured = () => /^\d{8,15}$/.test(WHATSAPP_NUMBER);

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#creaciones", label: "Creaciones" },
  { href: "#esencia", label: "Nuestra esencia" },
  { href: "#encargos", label: "Encargos" },
  { href: "#contacto", label: "Contacto" },
];
