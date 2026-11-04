import { useState } from 'react'
import './weekend-case-study.css'

const content = {
  pt: {
    back: 'Voltar ao portfólio', language: 'English', eyebrow: 'CASE DE ESTUDO · MOBILE · PRODUTO & ENGENHARIA',
    title: 'Fim de Semana', subtitle: 'Da descoberta de um lugar à operação de uma experiência compartilhada.',
    intro: 'Fim de Semana é um aplicativo mobile que conecta pessoas, grupos e estabelecimentos. A experiência atravessa diferentes contextos: descobrir um lugar, organizar uma Party, solicitar uma mesa e acompanhar o atendimento, os pedidos e a comanda dentro do estabelecimento.',
    status: 'Em desenvolvimento', repo: 'Repositório privado', repoNote: 'O código-fonte não está público no momento. Referências técnicas podem ser apresentadas mediante solicitação.',
    toc: ['Visão do produto','Jornada integrada','Arquitetura','Engenharia de dados','Segurança e integridade','Qualidade e validação','Desenvolvimento com IA'],
    overview: '01 / Visão do produto', problemTitle: 'O desafio', problem: 'A experiência de sair em grupo costuma ficar fragmentada entre descoberta, conversa, escolha de itens e operação do estabelecimento. Quando esses contextos não compartilham estado e regras, surgem retrabalho, inconsistências e perda de contexto.',
    solutionTitle: 'A abordagem', solution: 'Construir uma jornada mobile integrada. Party organiza participantes e escolhas; o estabelecimento recebe a solicitação de mesa; o atendimento transforma seleções em pedidos; e a cozinha acompanha a preparação por meio do KDS.',
    journey: '02 / Jornada integrada', journeyIntro: 'O diferencial do produto está na continuidade do domínio entre a experiência do cliente e a operação do estabelecimento.',
    stages: [['01','Explorar','Descoberta de eventos e estabelecimentos, com informações, mídia e detalhes do negócio.'],['02','Organizar uma Party','Criar um grupo, convidar participantes e registrar preferências e seleções individuais.'],['03','Solicitar uma mesa','Enviar a solicitação e permitir que a operação avalie a capacidade e atribua uma mesa.'],['04','Atender e confirmar pedidos','O garçom acompanha a comanda e confirma itens selecionados pelo grupo.'],['05','Preparar e encerrar','O KDS acompanha os pedidos em preparo; a comanda conduz pagamentos operacionais e fechamento.']],
    flowLabel: 'FLUXO DE DOMÍNIO', flow: ['Party','Table request','Attendance','Command','Orders','KDS','Closing'],
    architecture: '03 / Arquitetura', architectureIntro: 'O aplicativo usa organização por feature e MVVM como padrão, separando apresentação, coordenação de fluxo, regras de serviço e acesso a dados. A implementação adapta as camadas ao contexto de cada feature, sem afirmar uma Clean Architecture rígida.',
    layers: [['View','Interface, interação e estado visual.'],['ViewModel','Coordenação do estado e das ações da tela.'],['Service','Regras de aplicação e orquestração do domínio.'],['Repository','Acesso a Supabase, RPCs e fontes externas.'],['Backend','PostgreSQL, RLS, constraints, triggers e funções transacionais.']],
    featuresLabel: 'FEATURES', features: 'auth · party · event_business_details · waiter_command_feature · waiter_kds · partner_page · explore_business',
    decisions: '04 / Engenharia de dados', decisionsIntro: 'Algumas decisões de domínio merecem destaque porque protegem a consistência entre ações simultâneas e diferentes atores.',
    engineeringItems: [['Draft não é pedido','A seleção feita pelo participante permanece como Draft. Ela só vira pedido confirmado quando o garçom executa a operação correspondente.'],['Confirmação transacional','A confirmação cria o pedido e remove o Draft na mesma operação no banco, preservando a origem por source_draft_item_id.'],['Idempotência e concorrência','RPCs e migrations tratam solicitações duplicadas e serializam operações críticas quando necessário.'],['Ciclo de vida coordenado','Party, attendance, command, orders e closing precisam evoluir de forma consistente, com validações no backend.'],['Realtime operacional','O KDS acompanha alterações relevantes de pedidos e atendimentos por Supabase Realtime.']],
    dataFlow: 'Party Draft', dataFlowMiddle: 'RPC transacional', dataFlowEnd: 'Order + Order Item', dataFlowNote: 'A seleção do usuário não é cobrada nem enviada à cozinha antes da confirmação operacional do garçom.',
    security: '05 / Segurança e integridade', securityIntro: 'O cliente não é a autoridade de autorização nem de integridade. As operações críticas dependem de validações no backend.',
    securityItems: [['Supabase Auth','Identidade e sessão autenticada.'],['RLS e grants','Controle de leitura e escrita condicionado ao usuário, ownership e vínculo operacional.'],['RPCs','Operações privilegiadas e transições multi-entidade encapsuladas no banco.'],['Constraints e triggers','Integridade de estados, relações e regras financeiras persistidas.'],['Edge Function','Envio de convites com validação de sessão e autorização no servidor.']],
    securityNote: 'A apresentação descreve controles encontrados no código, migrations e documentação. Não representa pentest, certificação ou auditoria de segurança independente em produção.',
    quality: '06 / Qualidade e validação', qualityIntro: 'A preparação do repositório adicionou uma rotina automatizada de qualidade e testes focados em regras puras e limites de serviço.',
    qualityFacts: [['Typecheck','TypeScript — concluído na CI'],['ESLint','0 erros e 0 warnings na rodada do PR #8'],['11 testes','11 pass / 0 fail na suíte registrada'],['CI','Workflow executado com sucesso após o merge na master']],
    caveatsTitle: 'O que esses resultados comprovam — e o que não comprovam', caveats: ['Os testes de serviço usam repositories fake/controlados; não são integração autenticada com Supabase.','Testes de RLS/RPC, transações, rollback e concorrência no PostgreSQL ainda precisam de uma suíte de integração dedicada.','A jornada E2E em dispositivo e a captura de telas reais ainda precisam ser registradas.','O sucesso da CI não equivale a uma release mobile assinada ou validação completa em produção.'],
    ai: '07 / Desenvolvimento assistido por IA', aiTitle: 'IA como ferramenta de engenharia', aiText: 'A IA foi utilizada como apoio para investigar problemas, explorar alternativas, implementar mudanças, revisar código, organizar documentação e conduzir ciclos de correção. O processo foi estruturado em etapas: análise, alterações por grupos, execução de CI, leitura das falhas e nova iteração quando necessário.',
    aiPrinciples: [['Direção humana','Requisitos, prioridades e critérios de aceite definidos e revisados durante o desenvolvimento.'],['Mudanças rastreáveis','Trabalho organizado em branches e Pull Requests, com diffs revisáveis.'],['Validação contínua','Typecheck, lint e testes automatizados usados como feedback objetivo.'],['Responsabilidade técnica','Código gerado foi inspecionado e integrado; IA não substituiu decisões nem validação.']],
    next: 'Próximos passos', nextItems: ['Executar testes integrados com Supabase local/de teste para RLS, RPC, transações e rollback.','Ampliar cenários de concorrência e idempotência no banco.','Validar os principais fluxos E2E em Android e registrar a build utilizada.','Capturar screenshots reais com dados fictícios e preparar uma demonstração visual.','Reconciliar dependências externas e o estado remoto das migrations antes de qualquer afirmação de produção.'],
    closing: 'Fim de Semana é um estudo de engenharia de produto: conectar jornadas de usuários e operação real exige mais do que telas. Exige modelagem de domínio, contratos claros, integridade no backend, observabilidade do fluxo e validação contínua.',
    footer: 'Conteúdo baseado na revisão do repositório em 04/11/2026. Funcionalidades e validações são apresentadas conforme as evidências disponíveis.'
  },
  en: {
    back: 'Back to portfolio', language: 'Português', eyebrow: 'CASE STUDY · MOBILE · PRODUCT & ENGINEERING',
    title: 'Fim de Semana', subtitle: 'From discovering a place to operating a shared experience.',
    intro: 'Fim de Semana is a mobile app connecting people, groups, and venues. Its experience spans multiple contexts: discovering a place, organizing a Party, requesting a table, and following service, orders, and the tab inside the venue.',
    status: 'In development', repo: 'Private repository', repoNote: 'The source code is not public at this time. Technical references can be shared upon request.',
    toc: ['Product overview','End-to-end journey','Architecture','Data engineering','Security and integrity','Quality and validation','AI-assisted development'],
    overview: '01 / Product overview', problemTitle: 'The challenge', problem: 'A group outing is often fragmented across discovery, conversations, item selection, and venue operations. When these contexts do not share state and business rules, teams face rework, inconsistencies, and lost context.',
    solutionTitle: 'The approach', solution: 'Build an integrated mobile journey. Party organizes participants and selections; the venue receives a table request; service turns selections into orders; and the kitchen tracks preparation through a KDS.',
    journey: '02 / End-to-end journey', journeyIntro: 'The product’s differentiator is continuity across the customer experience and venue operations.',
    stages: [['01','Explore','Discover events and venues, with business information, media, and details.'],['02','Organize a Party','Create a group, invite participants, and collect preferences and individual selections.'],['03','Request a table','Submit a request and let venue operations evaluate capacity and assign a table.'],['04','Serve and confirm orders','The waiter follows the tab and confirms items selected by the group.'],['05','Prepare and close','The KDS tracks orders in preparation; the tab supports operational payment records and closing.']],
    flowLabel: 'DOMAIN FLOW', flow: ['Party','Table request','Attendance','Command','Orders','KDS','Closing'],
    architecture: '03 / Architecture', architectureIntro: 'The app is organized by feature and uses MVVM as its default pattern, separating presentation, flow coordination, service rules, and data access. Layers are adapted to each feature rather than enforcing a rigid Clean Architecture.',
    layers: [['View','Interface, interaction, and visual state.'],['ViewModel','Screen state and action coordination.'],['Service','Application rules and domain orchestration.'],['Repository','Access to Supabase, RPCs, and external sources.'],['Backend','PostgreSQL, RLS, constraints, triggers, and transactional functions.']],
    featuresLabel: 'FEATURES', features: 'auth · party · event_business_details · waiter_command_feature · waiter_kds · partner_page · explore_business',
    decisions: '04 / Data engineering', decisionsIntro: 'Several domain decisions stand out because they protect consistency across concurrent actions and different actors.',
    engineeringItems: [['A Draft is not an order','A participant’s selection remains a Draft. It only becomes a confirmed order when the waiter performs the corresponding operation.'],['Transactional confirmation','Confirmation creates the order and removes the Draft in the same database operation, preserving its origin through source_draft_item_id.'],['Idempotency and concurrency','RPCs and migrations handle duplicate requests and serialize critical operations where needed.'],['Coordinated lifecycle','Party, attendance, command, orders, and closing must evolve consistently, with backend validation.'],['Operational Realtime','The KDS follows relevant order and attendance changes through Supabase Realtime.']],
    dataFlow: 'Party Draft', dataFlowMiddle: 'Transactional RPC', dataFlowEnd: 'Order + Order Item', dataFlowNote: 'A user selection is not charged or sent to the kitchen before the waiter confirms it operationally.',
    security: '05 / Security and integrity', securityIntro: 'The client is not the authority for authorization or data integrity. Critical operations rely on backend validation.',
    securityItems: [['Supabase Auth','Authenticated identity and session.'],['RLS and grants','Read/write access controlled by user, ownership, and operational membership.'],['RPCs','Privileged operations and multi-entity transitions encapsulated in the database.'],['Constraints and triggers','Integrity of persisted states, relationships, and financial rules.'],['Edge Function','Invitation delivery with server-side session and authorization checks.']],
    securityNote: 'This section describes controls found in code, migrations, and documentation. It is not a penetration test, certification, or independent production security audit.',
    quality: '06 / Quality and validation', qualityIntro: 'Repository readiness work added automated quality checks and tests focused on pure rules and service boundaries.',
    qualityFacts: [['Typecheck','TypeScript — passed in CI'],['ESLint','0 errors and 0 warnings in PR #8'],['11 tests','11 pass / 0 fail in the recorded suite'],['CI','Workflow succeeded after the merge to master']],
    caveatsTitle: 'What these results prove — and what they do not', caveats: ['Service tests use fake/controlled repositories; they are not authenticated Supabase integration tests.','RLS/RPC, transaction, rollback, and PostgreSQL concurrency tests still need a dedicated integration suite.','Device E2E journeys and real application screenshots still need to be recorded.','A green CI run is not a signed mobile release or full production validation.'],
    ai: '07 / AI-assisted development', aiTitle: 'AI as an engineering tool', aiText: 'AI supported problem investigation, alternative exploration, implementation, code review, documentation, and iterative fixes. The workflow was structured into stages: analysis, grouped changes, CI execution, failure review, and another iteration when needed.',
    aiPrinciples: [['Human direction','Requirements, priorities, and acceptance criteria were defined and reviewed during development.'],['Traceable changes','Work organized through branches and Pull Requests with reviewable diffs.'],['Continuous validation','Typecheck, lint, and automated tests used as objective feedback.'],['Technical ownership','Generated code was inspected and integrated; AI did not replace decisions or validation.']],
    next: 'Next steps', nextItems: ['Run Supabase local/test integration tests for RLS, RPCs, transactions, and rollback.','Expand database idempotency and concurrency scenarios.','Validate core E2E journeys on Android and record the build used.','Capture real screenshots with fictitious data and prepare a visual demo.','Reconcile external dependencies and remote migration state before making production claims.'],
    closing: 'Fim de Semana is a product engineering study: connecting user journeys with real operations takes more than screens. It requires domain modeling, clear contracts, backend integrity, flow observability, and continuous validation.',
    footer: 'Content based on the repository review dated Nov 4, 2026. Features and validation are described according to available evidence.'
  }
}

export function WeekEndCaseStudy() {
  const [language, setLanguage] = useState('pt')
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light' } catch { return 'light' }
  })
  const t = content[language]
  const toggleTheme = () => setTheme((current) => {
    const next = current === 'light' ? 'dark' : 'light'
    try { localStorage.setItem('portfolio-theme', next) } catch {}
    return next
  })

  return (
    <main className="weekend-case-shell" data-theme={theme}>
      <header className="weekend-case-header">
        <a className="weekend-case-back" href="./">← {t.back}</a>
        <div className="weekend-case-controls">
          <button type="button" onClick={toggleTheme}>{theme === 'light' ? '☾' : '☼'} {theme === 'light' ? (language === 'pt' ? 'Escuro' : 'Dark') : (language === 'pt' ? 'Claro' : 'Light')}</button>
          <button type="button" onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}>{t.language}</button>
        </div>
      </header>

      <section className="weekend-case-hero">
        <p className="weekend-case-eyebrow">{t.eyebrow}</p>
        <div className="weekend-case-title-row"><div><h1>{t.title}<span>.</span></h1><p className="weekend-case-subtitle">{t.subtitle}</p></div><span className="weekend-case-status">{t.status}</span></div>
        <p className="weekend-case-intro">{t.intro}</p>
        <div className="weekend-case-actions"><span className="weekend-case-private">{t.repo}</span><span className="weekend-case-stack">REACT NATIVE · EXPO SDK 58 · TYPESCRIPT · SUPABASE · POSTGRESQL · MVVM</span></div>
        <p className="weekend-case-private-note">{t.repoNote}</p>
      </section>

      <nav className="weekend-case-toc" aria-label={language === 'pt' ? 'Seções do case' : 'Case study sections'}>
        {t.toc.map((item, index) => <a href={`#weekend-case-${index + 1}`} key={item}><span>0{index + 1}</span>{item}</a>)}
      </nav>

      <section className="weekend-case-section" id="weekend-case-1">
        <p className="weekend-case-eyebrow">{t.overview}</p>
        <div className="weekend-case-two-col"><article><h2>{t.problemTitle}</h2><p>{t.problem}</p></article><article><h2>{t.solutionTitle}</h2><p>{t.solution}</p></article></div>
      </section>

      <section className="weekend-case-section" id="weekend-case-2">
        <p className="weekend-case-eyebrow">{t.journey}</p><p className="weekend-case-section-intro">{t.journeyIntro}</p>
        <div className="weekend-case-stages">{t.stages.map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        <div className="weekend-case-flow"><p>{t.flowLabel}</p><div>{t.flow.map((step, index) => <span key={step}>{step}{index < t.flow.length - 1 && <i aria-hidden="true">→</i>}</span>)}</div></div>
      </section>

      <section className="weekend-case-section" id="weekend-case-3">
        <p className="weekend-case-eyebrow">{t.architecture}</p><p className="weekend-case-section-intro">{t.architectureIntro}</p>
        <div className="weekend-case-layers">{t.layers.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div>{index < t.layers.length - 1 && <b aria-hidden="true">↓</b>}</article>)}</div>
        <div className="weekend-case-features"><strong>{t.featuresLabel}</strong><span>{t.features}</span></div>
      </section>

      <section className="weekend-case-section" id="weekend-case-4">
        <p className="weekend-case-eyebrow">{t.decisions}</p><p className="weekend-case-section-intro">{t.decisionsIntro}</p>
        <div className="weekend-case-engineering">{t.engineeringItems.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        <div className="weekend-case-transaction"><div><span>{t.dataFlow}</span><b>→</b><span>{t.dataFlowMiddle}</span><b>→</b><strong>{t.dataFlowEnd}</strong></div><p>{t.dataFlowNote}</p></div>
      </section>

      <section className="weekend-case-section" id="weekend-case-5">
        <p className="weekend-case-eyebrow">{t.security}</p><p className="weekend-case-section-intro">{t.securityIntro}</p>
        <div className="weekend-case-security">{t.securityItems.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        <p className="weekend-case-note">{t.securityNote}</p>
      </section>

      <section className="weekend-case-section" id="weekend-case-6">
        <p className="weekend-case-eyebrow">{t.quality}</p><p className="weekend-case-section-intro">{t.qualityIntro}</p>
        <div className="weekend-case-quality">{t.qualityFacts.map(([value, label]) => <article key={value}><strong>{value}</strong><p>{label}</p></article>)}</div>
        <div className="weekend-case-caveats"><h3>{t.caveatsTitle}</h3><ul>{t.caveats.map(item => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="weekend-case-section" id="weekend-case-7">
        <p className="weekend-case-eyebrow">{t.ai}</p><div className="weekend-case-ai"><h2>{t.aiTitle}</h2><p>{t.aiText}</p></div>
        <div className="weekend-case-ai-grid">{t.aiPrinciples.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="weekend-case-next"><h3>{t.next}</h3><ul>{t.nextItems.map(item => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <footer className="weekend-case-footer"><p>{t.closing}</p><a className="weekend-case-back" href="./">← {t.back}</a><small>{t.footer}</small></footer>
    </main>
  )
}
