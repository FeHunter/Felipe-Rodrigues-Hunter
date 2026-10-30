/**
 * Portfolio domain models.
 *
 * Certificate records should only be added after the credential has been
 * provided or verified. Keep the fields below as the source of truth.
 */
export const projects = [
  {
    id: 'captureflow',
    number: '01',
    name: 'CaptureFlow',
    kind: 'android · engineering case study',
    status: 'inProgress',
    href: 'https://github.com/FeHunter/captureflow',
    repository: 'FeHunter/captureflow',
    caseStudyUrl: '?page=case-study-captureflow',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room', 'ML Kit', 'Coroutines'],
    summary: {
      pt: 'Aplicativo Android para capturar, organizar e transformar links, textos e imagens em referências acionáveis. Case de produto e engenharia.',
      en: 'An Android app to capture, organize, and turn links, text, and images into actionable references. A product and engineering case study.',
    },
    highlights: {
      pt: ['Compartilhamento nativo, metadata e OCR on-device', 'Arquitetura Feature-first com MVVM e Clean Architecture pragmática', 'Persistência local, anotações, subtarefas e filtros'],
      en: ['Native sharing, metadata extraction, and on-device OCR', 'Feature-first architecture with MVVM and pragmatic Clean Architecture', 'Local persistence, notes, subtasks, and filters'],
    },
  },
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

export const certificateCategories = ['all', 'course', 'webinar']

/**
 * Add verified credentials here.
 * Required shape:
 * {
 *   id, title, institution, category, date, description, skills,
 *   credentialUrl?, fileUrl?, language?
 * }
 *
 * category must be one of: course, webinar.
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
    fileUrl: `${import.meta.env.BASE_URL}certificates/csharp-completo.pdf`,
  },
  {
    id: 'excel-complete',
    title: 'Curso Excel Completo',
    institution: 'Curso de Excel',
    category: 'course',
    date: '',
    description: { pt: 'Certificado de conclusão do curso de Excel.', en: 'Certificate of completion for an Excel course.' },
    skills: ['Excel', 'Análise de dados'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/excel-completo.pdf`,
  },
  {
    id: 'elective-react',
    title: 'Desenvolvimento Web com React',
    institution: 'Atividade eletiva — faculdade',
    category: 'course',
    date: '',
    description: { pt: 'Certificado de atividade eletiva em desenvolvimento web com React.', en: 'College elective certificate in web development with React.' },
    skills: ['React', 'Desenvolvimento Web'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/react-web.pdf`,
  },
  {
    id: 'elective-scientific-method',
    title: 'Metodologia científica na solução de problemas em ambientes corporativos',
    institution: 'Atividade eletiva — faculdade',
    category: 'course',
    date: '',
    description: { pt: 'Certificado de atividade eletiva sobre metodologia científica aplicada a problemas corporativos.', en: 'College elective certificate on scientific methods for solving corporate problems.' },
    skills: ['Metodologia científica', 'Resolução de problemas'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/metodologia-cientifica.pdf`,
  },
  {
    id: 'elective-ai',
    title: 'Princípios de Inteligência Artificial: generativa, LLM e Deep Learning',
    institution: 'Atividade eletiva — faculdade',
    category: 'course',
    date: '',
    description: { pt: 'Certificado de atividade eletiva sobre IA generativa, LLMs e Deep Learning.', en: 'College elective certificate covering generative AI, LLMs, and deep learning.' },
    skills: ['Inteligência Artificial', 'LLMs', 'Deep Learning'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/inteligencia-artificial.pdf`,
  },
  {
    id: 'webinar-aws-eks',
    title: 'AWS Elastic Kubernetes Service: Estratégias de AutoScaling',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Participação em webinar sobre estratégias de Auto Scaling no Amazon EKS.', en: 'Webinar on Auto Scaling strategies for Amazon EKS.' },
    skills: ['AWS', 'Kubernetes', 'Auto Scaling'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/aws-eks-autoscaling.pdf`,
  },
  {
    id: 'webinar-public-security',
    title: 'Carreira Pública em Segurança da Informação: Caminhos e Estratégias',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre carreira pública e caminhos profissionais em segurança da informação.', en: 'Webinar about public-sector careers and career paths in information security.' },
    skills: ['Segurança da Informação', 'Carreira'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/seguranca-informacao.pdf`,
  },
  {
    id: 'webinar-data-science',
    title: 'Carreira em Data Science: Desafios além dos modelos',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre desafios e possibilidades de carreira em Data Science.', en: 'Webinar about challenges and career opportunities in data science.' },
    skills: ['Data Science', 'Carreira'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/carreira-data-science.pdf`,
  },
  {
    id: 'webinar-genai-code',
    title: 'GenAI Code: Desenvolvendo Soluções com Geração Automática de Código',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre geração automática de código e soluções com IA generativa.', en: 'Webinar on automatic code generation and generative AI solutions.' },
    skills: ['IA Generativa', 'Desenvolvimento de Software'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/genai-code.pdf`,
  },
  {
    id: 'webinar-kyverno',
    title: 'Policy as Code no Kubernetes: Automação e Segurança com Kyverno',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre políticas como código, automação e segurança em Kubernetes.', en: 'Webinar on policy as code, automation, and Kubernetes security.' },
    skills: ['Kubernetes', 'Kyverno', 'Segurança'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/kyverno-policy-as-code.pdf`,
  },
  {
    id: 'webinar-geospatial-python',
    title: 'Resolvendo problemas geoespaciais complexos com Python',
    institution: 'Webinar',
    category: 'webinar',
    date: '',
    description: { pt: 'Webinar sobre resolução de problemas geoespaciais usando Python.', en: 'Webinar on solving complex geospatial problems with Python.' },
    skills: ['Python', 'Geoespacial'],
    fileUrl: `${import.meta.env.BASE_URL}certificates/python-geoespacial.pdf`,
  },
]
