export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  challenges: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projectsData: ProjectDetail[] = [
  {
    slug: 'comanda-flow',
    title: 'ComandaFlow — Gestión Gastronómica Integral',
    category: 'Mobile & Cloud Architecture',
    summary:
      'Digitalización operativa de punta a punta para restaurantes: control de mesas vía QR, pedidos divididos por sectores y sincronización en tiempo real.',
    problem:
      'En entornos gastronómicos con alta concurrencia, las comandas en papel generan pérdidas de stock, demoras en el despacho de cocina y falta de trazabilidad en los tiempos de atención por mesa.',
    solution:
      'Desarrollo de una suite móvil con control de acceso por roles (cliente, mozo, cocina, metre). Permite a los clientes escanear un QR físico en la mesa para ver el menú y ordenar, mientras que cocina y bar reciben los pedidos al instante mediante canales reactivos.',
    architecture: [
      'React Native & Expo para garantizar rendimiento nativo y compatibilidad multiplataforma.',
      'Supabase Database (PostgreSQL) con políticas de seguridad a nivel de fila (RLS).',
      'Supabase Realtime (WebSockets) para notificaciones instantáneas de cambio de estado en comandas.',
      'Expo Camera para validación biométrica/QR de mesas físicas sin hardware propietario.',
    ],
    challenges: [
      'Gestión de concurrencia al asignar mesas: se implementaron validaciones en base de datos para impedir que dos mozos asignen la misma mesa en simultáneo.',
      'Separación de comandas: lógica para dividir automáticamente un mismo pedido en subórdenes independientes para cocina y coctelería según la categoría de producto.',
    ],
    tags: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Realtime', 'TypeScript'],
    githubUrl: 'https://github.com/mateoutn2024',
  },
  {
    slug: 'social-hub',
    title: 'SocialHub — Enterprise REST API & Platform',
    category: 'Full Stack & Backend Architecture',
    summary:
      'Ecosistema social corporativo con API REST modular en NestJS, base de datos MongoDB y cliente web dinámico en Angular con paneles analíticos.',
    problem:
      'La necesidad de gestionar interacciones de usuarios a gran escala con requerimientos estrictos de seguridad de sesiones, auditoría de bajas de contenido y visualización gráfica de métricas operativas.',
    solution:
      'Arquitectura desacoplada en capas. El backend expone endpoints REST bajo estándares HTTP rigurosos, mientras que el frontend en Angular ofrece un panel interactivo para usuarios y un dashboard analítico para administradores.',
    architecture: [
      'NestJS con TypeScript estricto, inyección de dependencias y separación modular (Auth, Posts, Users, Stats).',
      'Autenticación JWT con rotación de tokens: access token con expiración a 15 minutos y endpoint de refresh seguro.',
      'MongoDB para persistencia flexible de publicaciones no estructuradas y comentarios anidados.',
      'Angular con Angular Router, Guards de navegación según rol y pipes/directivas personalizadas.',
    ],
    challenges: [
      'Implementación de bajas lógicas (soft deletes): preservación de relaciones e integridad de comentarios cuando una publicación es dada de baja.',
      'Monitoreo y agregaciones analíticas en MongoDB para alimentar gráficos de actividad y visitas sin degradar el tiempo de respuesta de la API.',
    ],
    tags: ['NestJS', 'Angular', 'MongoDB', 'TypeScript', 'JWT Auth', 'REST API'],
    githubUrl: 'https://github.com/mateoutn2024',
  },
];