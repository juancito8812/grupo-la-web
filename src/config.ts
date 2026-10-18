/**
 * FUENTE ÚNICA DE CONTENIDO — Grupo LA
 * Todos los textos, datos de contacto y proyectos viven aquí.
 * Los valores marcados como pendientes están sin confirmar por el cliente
 * y la UI los muestra como avisos de "pendiente" en lugar de inventar datos.
 *
 * Identidad: Grupo LA — marca de la Arq. Luz Aché (@larquitecto_),
 * arquitectura · ingeniería · diseño interior · ejecución de obra.
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

/** Instagram de la marca — dato confirmado, se publica tal cual. */
const INSTAGRAM = 'https://www.instagram.com/larquitecto_/';
const INSTAGRAM_HANDLE = '@larquitecto_';

const digits = (value: string): string => value.replace(/[^\d]/g, '');
const whatsappHref = WHATSAPP
  ? `https://wa.me/${digits(WHATSAPP)}?text=${encodeURIComponent(
      'Hola Grupo LA, quiero cotizar una obra.'
    )}`
  : '';

export const site = {
  name: 'Grupo LA',
  tagline: 'Arquitectura · Ingeniería · Diseño interior',
  description:
    'Grupo LA, con la Arq. Luz Aché a la cabeza, diseña, calcula, inspecciona y ejecuta obras residenciales y comerciales: arquitectura, ingeniería, diseño interior y remodelaciones con presupuesto por partidas.',
  demo: true,
  demoNotice:
    'Contenido de demostración: los datos de contacto y las fotos son provisionales hasta que el cliente los entregue.',
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

/** Redes y prueba social — solo datos verificados del perfil. */
export const social = {
  instagramHref: INSTAGRAM,
  instagramHandle: INSTAGRAM_HANDLE,
  label: 'Síguenos en Instagram',
  note: 'Obra en proceso, acabados y detalles: el día a día se publica en Instagram.',
};

/** Aliados con los que Grupo LA ejecuta los proyectos (mencionados en obra). */
export const allies = [
  { handle: '@tumobili', role: 'Mobiliario a medida' },
  { handle: '@marmoleriaroraimastone', role: 'Mármoles y topes' },
  { handle: '@luzmax.ve', role: 'Iluminación' },
  { handle: '@sillaplace', role: 'Sillas y equipamiento' },
  { handle: '@innovarccs', role: 'Climatización' },
  { handle: '@quality_metal', role: 'Herrería y metal' },
];

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Preguntas', href: '#faq' },
];

export const services = [
  {
    title: 'Arquitectura y proyectos',
    desc: 'Diseño del espacio, planos, implantación y visualización antes de mover un bloque. El proyecto guía la obra, no al revés.',
    icon: 'compass',
  },
  {
    title: 'Ingeniería y cálculo',
    desc: 'Estructuras, instalaciones eléctricas y sanitarias calculadas y documentadas. Coordinamos ingeniería aliada cuando el alcance lo exige.',
    icon: 'ruler',
  },
  {
    title: 'Diseño interior',
    desc: 'Materiales, iluminación, mobiliario y detalles a medida. Espacios pensados para quien los va a habitar, no para la foto.',
    icon: 'swatch',
  },
  {
    title: 'Construcción y remodelación',
    desc: 'Ejecución de obra nueva, ampliaciones y remodelaciones: albañilería, drywall, encamisado, cerámica, acabados y pintura.',
    icon: 'building',
  },
  {
    title: 'Inspección y gerencia de obra',
    desc: 'Supervisión técnica, control de avance, revisión de lo evidente y acompañamiento cuando el cliente ya tiene contratista.',
    icon: 'hardhat',
  },
  {
    title: 'Asesorías y acompañamiento',
    desc: 'Consultoría puntual antes de comprar, remodelar o alquilar: qué se puede hacer, cuánto cuesta y en qué orden conviene hacerlo.',
    icon: 'chat',
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
    title: 'Proyecto y presupuesto',
    desc: 'Diseño cuando aplica y presupuesto detallado por partidas: materiales, mano de obra y tiempos por escrito.',
  },
  {
    step: '03',
    title: 'Ejecución con reportes',
    desc: 'Un responsable por obra, avance documentado con fotos y control de materiales.',
  },
  {
    step: '04',
    title: 'Entrega y garantía',
    desc: 'Limpieza, checklist de acabados y garantía escrita sobre lo ejecutado.',
  },
];

/* Proyectos reales mencionados en el perfil de Instagram (@larquitecto_).
 * Las fotos antes/después siguen pendientes por entregar: el componente las
 * muestra como marcador de posición. */
export const projects = [
  {
    title: 'Proyecto 42',
    meta: 'Rediseño integral · aliados: mobiliario, mármol, iluminación',
    summary:
      'Empezó como un cambio puntual y terminó en rediseño completo: acabados, mobiliario a medida e iluminación trabajados con aliados de obra.',
    tags: ['Diseño interior', 'Remodelación', 'Mobiliario'],
    featured: true,
  },
  {
    title: 'Boca Café',
    meta: 'Local comercial · reconocido en The South America’s 100 Best Coffee Shops 2026',
    summary:
      'Ejecución de un local de café: producción, barra y atención al público. El proyecto creció hasta quedar entre los 100 mejores cafés de Sudamérica.',
    tags: ['Comercial', 'Ejecución de obra'],
    featured: true,
  },
  {
    title: 'Baño con pieza de diseño propio',
    meta: 'Remodelación · lavamanos de diseño propio',
    summary:
      'Piso en madera de deck y lavamanos diseñado para el espacio: acabado que resiste humedad sin repetir el porcelanato de todas las paredes.',
    tags: ['Baño', 'Diseño de pieza', 'Acabados'],
  },
  {
    title: 'Encamisado y drywall',
    meta: 'Obra en ejecución · técnicas de acabado',
    summary:
      'Levantamiento de paredes en drywall, encamisado y mastique con lijado fino: la base que decide si el acabado final se ve parejo.',
    tags: ['Drywall', 'Albañilería'],
  },
];

export const about = {
  title: 'Detrás de Grupo LA está la Arq. Luz Aché',
  paragraphs: [
    'Grupo LA nace cuando un solo árbol no hace montaña: la Arq. Luz Aché (@larquitecto_) pasó de trabajar sola a poner su nombre al frente de un grupo de personas valiosas detrás de cada proyecto y cada obra.',
    'Trabajamos con presupuesto por partidas, un responsable por obra y documentación fotográfica del avance. Y con algo que no se cotiza: criterio para decirte qué conviene hacer, en qué orden y qué no vale la pena.',
    'Acompañamos proyectos desde la idea hasta la entrega; también entramos cuando el cliente ya tiene contratista y necesita supervisión, inspección o una segunda opinión técnica.',
  ],
  bullets: [
    'Arquitectura, ingeniería y diseño interior bajo un mismo techo.',
    'Presupuesto detallado por partidas, por escrito.',
    'Inspección y gerencia de obra aunque no ejecutemos nosotros.',
    'Garantía escrita sobre los trabajos ejecutados.',
  ],
};

export const faqs = [
  {
    q: '¿Trabajan solo con proyectos propios?',
    a: 'No. Ejecutamos obras con nuestro proyecto o con planos ya existentes, y también aceptamos gerencia, inspección o supervisión de una obra que otro contratista está ejecutando.',
  },
  {
    q: '¿Cómo se calcula el presupuesto?',
    a: 'Hacemos una visita de levantamiento y entregamos un presupuesto por partidas: materiales, mano de obra y tiempo estimado. Ese documento es la base del contrato.',
  },
  {
    q: '¿Diseñan el proyecto o lo entrego yo?',
    a: 'Ambas. Si los planos están actualizados los usamos; si no existen, hacemos el levantamiento y desarrollamos el diseño con nuestra arquitecta y los ingenieros aliados.',
  },
  {
    q: '¿Cuánto tarda una remodelación?',
    a: 'Depende del alcance. Un baño completo puede tomar de 2 a 3 semanas; una remodelación integral de apartamento, entre 6 y 10 semanas. La fecha queda escrita en el presupuesto.',
  },
  {
    q: '¿Cómo se manejan los pagos?',
    a: 'Por avance de partidas, con anticipo para materiales y pagos contra entrega de etapas verificadas. Todo queda en el presupuesto firmado.',
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
    'Proyecto de arquitectura',
    'Ingeniería y cálculo',
    'Diseño interior',
    'Construcción o ampliación',
    'Remodelación integral',
    'Inspección o gerencia',
    'Asesoría puntual',
    'Local u oficina',
    'Otro',
  ],
  submit: 'Solicitar cotización',
  success: 'Recibido. Te contactamos dentro de un día hábil.',
  error:
    'El formulario aún no está conectado al buzón de Grupo LA (endpoint pendiente). Escríbenos por Instagram @larquitecto_ mientras lo terminamos.',
};
