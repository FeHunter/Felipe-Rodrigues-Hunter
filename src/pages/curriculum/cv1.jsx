import styles from './cv1.module.css'

export function CV1 () {

  const whatsapp_msg_link = `https://wa.me/${11989183372}?text=${encodeURIComponent(`Olá, Felipe! Tudo bem?`)}`

    return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.name}>Felipe Rodrigues</h1>
          <p className={styles.role}>Fullstack Júnior (Foco Técnico)</p>
          <p className={styles.stack}>
            JavaScript • TypeScript • React • Supabase • PostgreSQL
          </p>
        </header>

        {/* Perfil Profissional */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Perfil Profissional</h2>
          <p className={styles.text}>
            Desenvolvedor Fullstack Júnior com foco em JavaScript e TypeScript, experiência prática no desenvolvimento
            de aplicações web completas, utilizando arquitetura serverless com Supabase e Edge Functions. Atuação em
            projetos reais envolvendo e-commerce, integrações com APIs externas, regras de negócio, autenticação,
            banco de dados e segurança (RLS). Experiência prévia como desenvolvedor freelancer e sólido conhecimento em
            lógica de programação.
          </p>
        </section>

        {/* Tecnologias */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tecnologias</h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Frontend</h3>
              <p>HTML, CSS, JavaScript, TypeScript e React</p>
            </div>

            <div className={styles.card}>
              <h3>Backend</h3>
              <p>Supabase (Database, Auth, RLS, Edge Functions), APIs REST</p>
            </div>

            <div className={styles.card}>
              <h3>Banco de Dados</h3>
              <p>PostgreSQL (schemas, relacionamentos, regras de acesso)</p>
            </div>

            <div className={styles.card}>
              <h3>Integrações</h3>
              <p>Frenet (frete), InfinitePay (pagamentos), APIs de CEP</p>
            </div>

            <div className={styles.card}>
              <h3>Outros</h3>
              <p>Git, arquitetura serverless, lógica de negócio, validações</p>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>

          <div className={styles.stackCards}>
            <div className={styles.cardHighlight}>
              <h3>E-commerce Fullstack (Projeto Principal)</h3>
              <p className={styles.subtitle}>Projeto completo em desenvolvimento avançado</p>
              <ul className={styles.list}>
                <li>Implementação de CRUD de produtos</li>
                <li>Modelagem de schema de banco de dados PostgreSQL</li>
                <li>Configuração de Row Level Security (RLS)</li>
                <li>Backend com Supabase Edge Functions</li>
                <li>Integração com APIs externas:</li>
                <ul className={styles.sublist}>
                  <li>Consulta de CEP</li>
                  <li>Cálculo de frete com Frenet</li>
                  <li>Pagamentos via InfinitePay</li>
                </ul>
                <li>Definição e aplicação de regras de negócio (checkout, pedidos, validações)</li>
              </ul>
              <a href="https://lalunejessybags.web.app" target="_blank" rel="noopener noreferrer">lalunejessybags.web.app</a>
            </div>

            <div className={styles.card}>
              <h3>Freelance – Landing Pages</h3>
              <p>
                Desenvolvimento de landing pages responsivas utilizando HTML, CSS e JavaScript
                para pequenos negócios.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Jogos e Aplicativos – Unity Engine</h3>
              <p>
                Criação de jogos e aplicativos com foco em lógica de programação, estruturação
                de sistemas e interação do usuário.
              </p>
            </div>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experiência Profissional</h2>

          <div className={styles.card}>
            <h3>Desenvolvedor Freelancer</h3>
            <ul className={styles.list}>
              <li>Desenvolvimento de landing pages e projetos web simples</li>
              <li>Aplicação de boas práticas de estruturação de código</li>
              <li>Contato direto com clientes e levantamento de requisitos</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Recepcionista Bilíngue</h3>
            <ul className={styles.list}>
              <li>Atendimento em inglês e português</li>
              <li>Comunicação clara com clientes internacionais</li>
              <li>Organização, responsabilidade e trabalho sob pressão</li>
            </ul>
          </div>
        </section>

        {/* Formação */}
        <section className={styles.sectionGrid}>
          <div className={styles.card}>
            <h3>Formação</h3>
            <p>
              Análise e Desenvolvimento de Sistemas<br />
              Instituto Infnet (em andamento)
            </p>
          </div>

          <div className={styles.card}>
            <h3>Idiomas</h3>
            <p>
              Português: Nativo<br />
              Inglês: Avançado (Certificação Cambridge B2)
            </p>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.card}>
            <h3>Contato</h3>
            <div className={styles.cardItemsContent}>
              <a href="mailto:felipehunter001@gmail.com" target='_blank' >E-mail 1: felipehunter001@gmail.com</a>
              <a href="mailto:felipe.rsilva@al.infnet.edu.br" target='_blank' >E-mail 2: felipe.rsilva@al.infnet.edu.br</a>
              <a href={whatsapp_msg_link} target='_blank' >WhatsApp: (11) 9 8918-3372</a>
            </div>
          </div>
          <div className={styles.card}>
            <h3>Redes</h3>
            <div className={styles.cardItemsContent}>
              <a href="https://www.linkedin.com/in/felipe-rodrigues-silver/" target='_blank' >Linkedin</a>
              <a href="https://github.com/FeHunter" target='_blank' >GitHub</a>
              <a href="https://felipehunter.itch.io" target='_blank' >Itch.io</a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  )
}