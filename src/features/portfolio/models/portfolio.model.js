/**
 * Portfolio domain models.
 *
 * Certificate records should only be added after the credential has been
 * provided or verified. Keep the fields below as the source of truth.
 */
export const projects = [
  {
    id: 'weekend',
    number: '01',
    name: 'Fim de Semana',
    kind: 'mobile',
    status: 'inProgress',
    href: 'https://github.com/FeHunter/week_end_app',
    repository: 'FeHunter/week_end_app',
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL', 'MVVM'],
    summary: {
      pt: 'Aplicativo mobile em desenvolvimento para descobrir lugares e planejar experiências de fim de semana.',
      en: 'A mobile app in development to discover places and plan weekend experiences.',
    },
    highlights: {
      pt: ['Estrutura MVVM e separação de responsabilidades', 'Integração com serviços e dados', 'Experiência mobile com React Native Expo'],
      en: ['MVVM structure and separation of concerns', 'Service and data integration', 'Mobile experience with React Native Expo'],
    },
  },
  {
    id: 'la-lune',
    number: '02',
    name: 'La Lune Jessy Bags',
    kind: 'web',
    status: 'live',
    href: 'https://lalunejessybags.web.app',
    repository: null,
    stack: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Supabase', 'PostgreSQL'],
    summary: {
      pt: 'E-commerce para uma loja real, com catálogo de produtos e integrações voltadas à operação da loja.',
      en: 'An e-commerce experience for a real store, with a product catalog and integrations supporting store operations.',
    },
    highlights: {
      pt: ['Persistência e regras de acesso com Supabase e RLS', 'Integrações de pagamento e frete', 'Regras de negócio e fluxos de compra'],
      en: ['Persistence and access rules with Supabase and RLS', 'Payment and shipping integrations', 'Business rules and purchase flows'],
    },
  },
  {
    id: 'dino-island',
    number: '03',
    name: 'Dino Island: The Four Crystals',
    kind: 'game',
    status: 'live',
    href: 'https://felipehunter.itch.io/dino-island-the-four-crystals',
    repository: null,
    stack: ['Unity', 'C#', 'Game Development'],
    summary: {
      pt: 'Projeto de jogo que demonstra fundamentos de programação, lógica de sistemas e desenvolvimento interativo.',
      en: 'A game project demonstrating programming fundamentals, system logic, and interactive development.',
    },
    highlights: {
      pt: ['Lógica de gameplay em C#', 'Desenvolvimento com Unity Engine', 'Projeto publicado no itch.io'],
      en: ['Gameplay logic in C#', 'Development with Unity Engine', 'Published project on itch.io'],
    },
  },
]

export const certificateCategories = ['all', 'certification', 'course', 'talk', 'webinar']

/**
 * Add verified credentials here.
 * Required shape:
 * {
 *   id, title, institution, category, date, description, skills,
 *   credentialUrl?, fileUrl?, language?
 * }
 *
 * category must be one of: certification, course, talk, webinar.
 */
export const certificates = []
