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
export const certificates = [
  {
    id: 'csharp-complete',
    title: 'C# Completo: Programação',
    institution: 'Curso de programação',
    category: 'course',
    date: '',
    description: { pt: 'Certificado de conclusão do curso de C#.', en: 'Certificate of completion for a C# course.' },
    skills: ['C#', 'Programação'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Certifica%C3%A7%C3%B5es/C%23%20COMPLETO%20Programa%C3%A7%C3%A3o.pdf`,
  },
  {
    id: 'excel-complete',
    title: 'Curso Excel Completo',
    institution: 'Curso de Excel',
    category: 'course',
    date: '',
    description: { pt: 'Certificado de conclusão do curso de Excel.', en: 'Certificate of completion for an Excel course.' },
    skills: ['Excel', 'Análise de dados'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Certifica%C3%A7%C3%B5es/Curso%20Excel%20COMPLETO%20do.pdf`,
  },
  {
    id: 'elective-react',
    title: 'Desenvolvimento Web com React',
    institution: 'Atividade eletiva — faculdade',
    category: 'course',
    date: '',
    description: { pt: 'Certificado de atividade eletiva em desenvolvimento web com React.', en: 'College elective certificate in web development with React.' },
    skills: ['React', 'Desenvolvimento Web'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Eletivas%20Faculdade/Certificado%20_%20Felipe%20Rodrigues%20da%20Silva%20_%20Desenvolvimento%20Web%20com%20React.pdf`,
  },
  {
    id: 'elective-scientific-method',
    title: 'Metodologia científica na solução de problemas em ambientes corporativos',
    institution: 'Atividade eletiva — faculdade',
    category: 'course',
    date: '',
    description: { pt: 'Certificado de atividade eletiva sobre metodologia científica aplicada a problemas corporativos.', en: 'College elective certificate on scientific methods for solving corporate problems.' },
    skills: ['Metodologia científica', 'Resolução de problemas'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Eletivas%20Faculdade/Certificado%20_%20Felipe%20Rodrigues%20da%20Silva%20_%20Metodologia%20cient%C3%ADfica%20na%20solu%C3%A7%C3%A3o%20de%20problemas%20em%20ambientes%20corporativos.pdf`,
  },
  {
    id: 'elective-ai',
    title: 'Princípios de Inteligência Artificial: generativa, LLM e Deep Learning',
    institution: 'Atividade eletiva — faculdade',
    category: 'course',
    date: '',
    description: { pt: 'Certificado de atividade eletiva sobre IA generativa, LLMs e Deep Learning.', en: 'College elective certificate covering generative AI, LLMs, and deep learning.' },
    skills: ['Inteligência Artificial', 'LLMs', 'Deep Learning'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Eletivas%20Faculdade/Certificado%20_%20Felipe%20Rodrigues%20da%20Silva%20_%20Princ%C3%ADpios%20de%20Intelig%C3%AAncia%20Artificial_%20generativa,%20LLM%20e%20Deep%20Learning.pdf`,
  },
  {
    id: 'webinar-aws-eks',
    title: 'AWS Elastic Kubernetes Service: Estratégias de AutoScaling',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Participação em webinar sobre estratégias de Auto Scaling no Amazon EKS.', en: 'Webinar on Auto Scaling strategies for Amazon EKS.' },
    skills: ['AWS', 'Kubernetes', 'Auto Scaling'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Webinar/AWS%20Elastic%20Kubernetes%20Service%20Estrat%C3%A9gias%20de%20AutoScaling.pdf`,
  },
  {
    id: 'webinar-public-security',
    title: 'Carreira Pública em Segurança da Informação: Caminhos e Estratégias',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre carreira pública e caminhos profissionais em segurança da informação.', en: 'Webinar about public-sector careers and career paths in information security.' },
    skills: ['Segurança da Informação', 'Carreira'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Webinar/Carreira%20P%C3%BAblica%20em%20Seguran%C3%A7a%20da%20Informa%C3%A7%C3%A3o%20Caminhos%20e%20Estrat%C3%A9gias.pdf`,
  },
  {
    id: 'webinar-data-science',
    title: 'Carreira em Data Science: Desafios além dos modelos',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre desafios e possibilidades de carreira em Data Science.', en: 'Webinar about challenges and career opportunities in data science.' },
    skills: ['Data Science', 'Carreira'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Webinar/Carreira%20em%20Data%20Science%20Desafios%20al%C3%A9m%20dos%20modelos.pdf`,
  },
  {
    id: 'webinar-genai-code',
    title: 'GenAI Code: Desenvolvendo Soluções com Geração Automática de Código',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre geração automática de código e soluções com IA generativa.', en: 'Webinar on automatic code generation and generative AI solutions.' },
    skills: ['IA Generativa', 'Desenvolvimento de Software'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Webinar/GenAI%20Code%20Desenvolvendo%20Solu%C3%A7%C3%B5es%20com%20Gera%C3%A7%C3%A3o%20Autom%C3%A1tica%20de%20C%C3%B3digo.pdf`,
  },
  {
    id: 'webinar-kyverno',
    title: 'Policy as Code no Kubernetes: Automação e Segurança com Kyverno',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre políticas como código, automação e segurança em Kubernetes.', en: 'Webinar on policy as code, automation, and Kubernetes security.' },
    skills: ['Kubernetes', 'Kyverno', 'Segurança'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Webinar/Policy%20As%20Code%20no%20Kubernetes%20Automa%C3%A7%C3%A3o%20e%20Seguran%C3%A7a%20com%20Kyverno.pdf`,
  },
  {
    id: 'webinar-geospatial-python',
    title: 'Resolvendo problemas geoespaciais complexos com Python',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre resolução de problemas geoespaciais usando Python.', en: 'Webinar on solving complex geospatial problems with Python.' },
    skills: ['Python', 'Geoespacial'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/Webinar/Resolvendo%20problemas%20geoespaciais%20complexos%20com%20Python%20.pdf`,
  },
]
