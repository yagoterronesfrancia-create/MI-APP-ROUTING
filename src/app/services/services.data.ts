/** Modelo compartido para las tarjetas y páginas de detalle de servicios. */
export interface ServiceItem {
  /** Identificador usado en la URL, por ejemplo /services/web-apps. */
  slug: string;
  /** Emoji que identifica visualmente el servicio. */
  icon: string;
  /** Nombre visible del servicio. */
  title: string;
  /** Explicación breve del servicio. */
  description: string;
  /** Texto de apoyo para la página de detalle. */
  detail: string;
  /** Lista de capacidades incluidas en el servicio. */
  features: string[];
  /** Fondo visual aplicado al icono de la tarjeta. */
  accent: string;
}

/** Catálogo único reutilizado por la lista y el detalle de cada servicio. */
export const SERVICES: ServiceItem[] = [
  {
    slug: 'web-apps',
    icon: '💻',
    title: 'Diseño Web Apps',
    description: 'Desarrollo de sitios web y aplicaciones modernas, adaptables a diferentes dispositivos y orientadas a mejorar la experiencia del usuario.',
    detail: 'Creamos experiencias web rápidas, claras y preparadas para crecer junto con tu negocio.',
    features: ['Diseño responsive', 'Interfaces modernas', 'Optimización de rendimiento'],
    accent: 'linear-gradient(135deg, #3b82f6, #2563eb)'
  },
  {
    slug: 'redes-sociales',
    icon: '📱',
    title: 'Redes Sociales',
    description: 'Gestión y creación de contenido para fortalecer la presencia digital de las empresas y conectar con sus clientes.',
    detail: 'Construimos una presencia constante y coherente para que tu marca conecte con su comunidad.',
    features: ['Calendario de contenido', 'Diseño de publicaciones', 'Análisis de resultados'],
    accent: 'linear-gradient(135deg, #ec4899, #d946ef)'
  },
  {
    slug: 'marketing-digital',
    icon: '📈',
    title: 'Marketing Digital',
    description: 'Diseño de estrategias digitales para atraer clientes, aumentar la visibilidad y mejorar los resultados comerciales.',
    detail: 'Definimos campañas y acciones medibles para atraer oportunidades y convertirlas en resultados.',
    features: ['Estrategia de contenidos', 'Campañas digitales', 'Métricas y seguimiento'],
    accent: 'linear-gradient(135deg, #10b981, #059669)'
  },
  {
    slug: 'software',
    icon: '🧩',
    title: 'Desarrollo Software',
    description: 'Desarrollo de soluciones de software personalizadas de acuerdo con las necesidades y procesos de cada organización.',
    detail: 'Convertimos procesos complejos en herramientas digitales seguras, escalables y fáciles de usar.',
    features: ['Análisis de requerimientos', 'Arquitectura escalable', 'Mantenimiento evolutivo'],
    accent: 'linear-gradient(135deg, #f59e0b, #ea580c)'
  },
  {
    slug: 'hosting-dominio',
    icon: '🌐',
    title: 'Hosting & Dominio',
    description: 'Servicios de alojamiento web y registro de dominios para mantener los proyectos digitales disponibles en Internet.',
    detail: 'Te ayudamos a poner tu proyecto en línea con una base estable y acompañamiento técnico.',
    features: ['Configuración de dominio', 'Alojamiento web', 'Soporte técnico'],
    accent: 'linear-gradient(135deg, #06b6d4, #0284c7)'
  },
  {
    slug: 'estrategia-digital',
    icon: '🎯',
    title: 'Estrategia Digital',
    description: 'Planificación de estrategias digitales orientadas a mejorar la presencia, competitividad y crecimiento de una empresa.',
    detail: 'Ordenamos tus objetivos y canales digitales en un plan práctico, priorizado y medible.',
    features: ['Diagnóstico digital', 'Definición de objetivos', 'Plan de acción'],
    accent: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
  },
  {
    slug: 'identidad-corporativa',
    icon: '🎨',
    title: 'Identidad Corporativa',
    description: 'Diseño de elementos visuales que permiten construir una identidad de marca profesional, coherente y reconocible.',
    detail: 'Creamos una identidad visual consistente para que tu empresa sea reconocible en cada punto de contacto.',
    features: ['Concepto visual', 'Paleta de colores', 'Guía de uso de marca'],
    accent: 'linear-gradient(135deg, #ef4444, #dc2626)'
  }
];
