/**
 * FUENTE ÚNICA DE CONTENIDO — Grupo LA
 * Todos los textos, datos de contacto y proyectos viven aquí.
 * Los valores marcados como PLACEHOLDER están sin confirmar por el cliente
 * y la UI los muestra como contenido de demostración.
 */

const rawBase = import.meta.env.BASE_URL || '/';
export const BASE = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/** Construye una URL respetando el base path del deploy. */
export const url = (path = ''): string => BASE + path.replace(/^\/+/, '');

/* ---------- Datos de contacto ----------
 * Cuando el cliente entregue los datos reales, rellenar SOLO estas constantes:
 * los enlaces (tel:, wa.me, mailto:) se construyen solos y la UI deja de
 * mostrar los avisos de "pendiente". Dejar vacío lo que no esté confirmado.
 */
const PHONE = ''; // ej. '+58 412 123 4567'
const WHATSAPP = ''; // ej. '584121234567' (sin +, sin espacios)
const EMAIL = ''; // ej. 'contacto@grupola.com'
const ADDRESS = ''; // ej. 'Av. ... , Caracas'
const SERVICE_AREA = 'Caracas y Gran Caracas (a confirmar)';

const digits = (value: string): string => value.replace(/[^\d]/g, '');
const whatsappHref = WHATSAPP
  ? `https://wa.me/${digits(WHATSAPP)}?text=${encodeURIComponent(
      'Hola Grupo LA, quiero cotizar una obra.'
    )}`
  : '';

export const site = {
  name: 'Grupo LA',
  tagline: 'Construcción y remodelaciones',
  description:
    'Grupo LA construye y remodifica espacios residenciales y comerciales: obra nueva, ampliaciones, cocinas, baños y locales. Presupuesto claro, plazos cumplidos y acabados que duran.',
  demo: true,
  demoNotice:
    'Contenido de demostración: los datos de contacto, proyectos y testimonios son provisionales hasta que el cliente los entregue.',
  contact: {
    phone: PHONE || 'Teléfono pendiente por confirmar',
    phoneHref: PHONE ? `tel:+${digits(PHONE)}` : '',
    whatsappNumber: WHATSAPP || 'WhatsApp pendiente por confirmar',
    whatsappHref,
    email: EMAIL || 'Correo pendiente por confirmar',
    emailHref: EMAIL ? `mailto:${EMAIL}` : '',
    address: ADDRESS || 'Dirección pendiente por confirmar',
    hours: 'Lunes a viernes 8:00 – 17:00 · Sábados 8:00 – 12:00',
    serviceArea: SERVICE_AREA,
  },
  /** Endpoint del webhook de n8n que recibe las solicitudes de cotización. */
  quoteEndpoint: '',
  stats: [
    { value: '—', label: 'Años de experiencia' },
    { value: '—', label: 'Obras entregadas' },
    { value: '—', label: 'm² construidos' },
    { value: '—', label: 'Equipo propio' },
  ],
};

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Preguntas', href: '#faq' },
];

export const services = [
  {
    title: 'Obra nueva y ampliaciones',
    desc: 'Construcción desde los planos hasta la entrega: fundaciones, estructura, techos y acabados.',
    icon: 'building',
  },
  {
    title: 'Remodelación de interiores',
    desc: 'Reorganización de espacios, tabiquería, yeso, cerámicas, iluminación y pintura.',
    icon: 'layout',
  },
  {
    title: 'Cocinas y baños',
    desc: 'Impermeabilización, grifería, mobiliario a medida y cambios de instalaciones.',
    icon: 'drop',
  },
  {
    title: 'Fachadas y exteriores',
    desc: 'Frisos, revestimientos, pintura exterior, jardines y zonas sociales.',
    icon: 'facade',
  },
  {
    title: 'Instalaciones técnicas',
    desc: 'Electricidad, plomería, gas y aguas servidas con planos actualizados.',
    icon: 'bolt',
  },
  {
    title: 'Locales comerciales',
    desc: 'Adecuación de locales, oficinas y fondos de comercio con criterio operativo.',
    icon: 'store',
  },
];

export const process = [
  {
    step: '01',
    title: 'Visita y levantamiento',
    desc: 'Medimos, revisamos el estado real del inmueble y escuchamos qué necesita cada espacio.',
  },
  {
    step: '02',
    title: 'Presupuesto detallado',
    desc: 'Partidas, materiales, tiempos y forma de pago por escrito. Sin extras sorpresa.',
  },
  {
    step: '03',
    title: 'Ejecución con reportes',
    desc: 'Un responsable por obra, avance semanal con fotos y control de materiales.',
  },
  {
    step: '04',
    title: 'Entrega y garantía',
    desc: 'Limpieza, checklist de acabados y garantía escrita sobre lo ejecutado.',
  },
];

export const projects = [
  {
    title: 'Apartamento familiar',
    meta: 'Remodelación integral · m² por confirmar',
    summary: 'Cocina cerrada convertida en espacio abierto con isla, más dos baños renovados.',
    tags: ['Cocina', 'Baños', 'Pintura'],
  },
  {
    title: 'Casa de dos niveles',
    meta: 'Ampliación · m² por confirmar',
    summary: 'Segundo nivel con habitación principal, walking closet y terraza posterior.',
    tags: ['Ampliación', 'Estructura'],
  },
  {
    title: 'Local comercial',
    meta: 'Adecuación · m² por confirmar',
    summary: 'Local vacío transformado en tienda con vitrina, depósito y baño para público.',
    tags: ['Comercial', 'Electricidad'],
  },
  {
    title: 'Oficina corporativa',
    meta: 'Remodelación · m² por confirmar',
    summary: 'Nueve puestos de trabajo, sala de reuniones insonorizada y recepción.',
    tags: ['Oficina', 'Climatización'],
  },
  {
    title: 'Fachada y jardín',
    meta: 'Exteriores · m² por confirmar',
    summary: 'Friso nuevo, pintura exterior, pérgola y reordenamiento del jardín.',
    tags: ['Fachada', 'Exteriores'],
  },
  {
    title: 'Baño principal',
    meta: 'Remodelación · m² por confirmar',
    summary: 'Impermeabilización, cerámica de gran formato, walk-in shower y mobiliario suspendido.',
    tags: ['Baño', 'Impermeabilización'],
  },
];

export const about = {
  title: 'Construimos con criterio, no con improvisación',
  paragraphs: [
    'Grupo LA nace para resolver un problema repetido: obras que empiezan con promesas y terminan con sobreprecios. Trabajamos con presupuesto cerrado por partidas, un responsable por obra y reportes de avance con fotos.',
    'Tenemos equipo propio de albañilería, yeso, cerámica y pintura, y aliados de confianza para instalaciones eléctricas y sanitarias. Eso nos deja controlar la calidad de punta a punta.',
  ],
  bullets: [
    'Presupuesto detallado por partidas, por escrito.',
    'Responsable de obra asignado y reportes semanales.',
    'Garantía escrita sobre los trabajos ejecutados.',
  ],
};

export const testimonials = [
  {
    quote: 'Testimonio de ejemplo: pendiente de la versión autorizada por el cliente.',
    author: 'Cliente por confirmar',
    role: 'Remodelación de apartamento',
  },
  {
    quote: 'Testimonio de ejemplo: pendiente de la versión autorizada por el cliente.',
    author: 'Cliente por confirmar',
    role: 'Adecuación de local',
  },
  {
    quote: 'Testimonio de ejemplo: pendiente de la versión autorizada por el cliente.',
    author: 'Cliente por confirmar',
    role: 'Ampliación de vivienda',
  },
];

export const faqs = [
  {
    q: '¿Cómo se calcula el presupuesto?',
    a: 'Hacemos una visita de levantamiento y entregamos un presupuesto por partidas: materiales, mano de obra y tiempo estimado. Ese documento es la base del contrato.',
  },
  {
    q: '¿Trabajan con planos existentes o hay que diseñar?',
    a: 'Trabajamos con los planos del cliente si están actualizados. Si no existen, hacemos el levantamiento y coordinamos el diseño con un profesional aliado.',
  },
  {
    q: '¿Cuánto tarda una remodelación?',
    a: 'Depende del alcance. Un baño completo puede tomar de 2 a 3 semanas; una remodelación integral de apartamento, entre 6 y 10 semanas. La fecha queda escrita en el presupuesto.',
  },
  {
    q: '¿Cómo se manejan los pagos?',
    a: 'Por avance de partidas, con anticipo para materiales y pagos contra entrega de etapas verificadas. Todo queda en el presupuesto firmado.',
  },
  {
    q: '¿La garantía cubre materiales?',
    a: 'La garantía cubre la mano de obra ejecutada. Los materiales mantienen la garantía del fabricante y se entregan sus respaldos al cierre de la obra.',
  },
];

export const quoteForm = {
  title: 'Cuenta qué necesitas',
  subtitle:
    'Responde el formulario y coordinamos la visita de levantamiento. Sin costo en Caracas y Gran Caracas.',
  fields: {
    name: 'Nombre y apellido',
    phone: 'Teléfono / WhatsApp',
    email: 'Correo electrónico',
    type: 'Tipo de trabajo',
    location: 'Zona o municipio',
    message: 'Detalle del proyecto',
  },
  workTypes: [
    'Remodelación de interiores',
    'Obra nueva o ampliación',
    'Cocina o baño',
    'Fachada o exteriores',
    'Local comercial u oficina',
    'Instalaciones técnicas',
    'Otro',
  ],
  submit: 'Solicitar cotización',
  success: 'Recibido. Te contactamos dentro de un día hábil.',
  error:
    'El formulario aún no está conectado al buzón de Grupo LA (endpoint pendiente). Escríbenos por WhatsApp mientras lo terminamos.',
};
