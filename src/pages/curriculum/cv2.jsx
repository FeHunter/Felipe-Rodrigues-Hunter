import styles from './cv1.module.css'

export function CV2 () {
    return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.name}>Felipe Hunter</h1>
          <p className={styles.role}>Fullstack Júnior (Foco Startups / Faria Lima)</p>
        </header>

        {/* Perfil */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Perfil Profissional</h2>
          <p className={styles.text}>
            Desenvolvedor Fullstack Júnior com forte capacidade de resolver problemas reais de negócio através da tecnologia.
            Experiência prática em construção de produtos digitais, integração de serviços externos, definição de regras de negócio
            e desenvolvimento de soluções escaláveis utilizando JavaScript, Supabase e arquitetura serverless. Perfil analítico,
            comunicativo e adaptável, com vivência em ambientes dinâmicos e atendimento bilíngue.
          </p>
        </section>

        {/* Competências */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Principais Competências</h2>
          <ul className={styles.list}>
            <li>Desenvolvimento de aplicações web end-to-end</li>
            <li>Integração com APIs de pagamento, frete e serviços externos</li>
            <li>Estruturação de backend escalável e seguro</li>
            <li>Entendimento de fluxos de e-commerce e regras de negócio</li>
            <li>Comunicação clara com times técnicos e não técnicos</li>
          </ul>
        </section>

        {/* Stack */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Stack Tecnológica</h2>
          <ul className={styles.gridList}>
            <li>JavaScript / TypeScript</li>
            <li>Supabase (Auth, Database, RLS, Edge Functions)</li>
            <li>PostgreSQL</li>
            <li>APIs REST</li>
            <li>HTML, CSS</li>
            <li>Git</li>
          </ul>
        </section>

        {/* Projeto */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projeto Relevante</h2>

          <div className={styles.cardHighlight}>
            <h3>Plataforma de E-commerce (Produto Digital)</h3>
            <p className={styles.subtitle}>
              Desenvolvimento de uma plataforma de e-commerce com foco em escalabilidade e integração de serviços.
            </p>
            <ul className={styles.list}>
              <li>Backend serverless com Edge Functions</li>
              <li>Banco de dados estruturado com regras de segurança (RLS)</li>
              <li>Integração com Frenet (logística e frete)</li>
              <li>Integração com InfinitePay (pagamentos)</li>
              <li>Integração com APIs de endereço (CEP)</li>
              <li>Implementação de fluxos completos de compra</li>
              <li>Visão orientada a produto e experiência do usuário</li>
            </ul>
          </div>
        </section>

        {/* Experiência */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experiência</h2>

          <div className={styles.card}>
            <h3>Desenvolvedor Freelancer</h3>
            <ul className={styles.list}>
              <li>Criação de soluções web sob demanda</li>
              <li>Desenvolvimento rápido e iterativo</li>
              <li>Foco em entrega e qualidade</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Recepcionista Bilíngue</h3>
            <ul className={styles.list}>
              <li>Atendimento em inglês em ambiente profissional</li>
              <li>Comunicação com clientes e equipes diversas</li>
              <li>Organização e senso de responsabilidade</li>
            </ul>
          </div>
        </section>

        {/* Formação */}
        <section className={styles.sectionGrid}>
          <div className={styles.card}>
            <h3>Formação Acadêmica</h3>
            <p>Análise e Desenvolvimento de Sistemas – Instituto Infnet (em andamento)</p>
          </div>

          <div className={styles.card}>
            <h3>Idiomas</h3>
            <p>Inglês Avançado – Cambridge B2</p>
          </div>
        </section>

        {/* Observações */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Observações</h2>
          <p className={styles.text}>
            Disponível para atuação como Desenvolvedor Fullstack Júnior, com interesse em ambientes de inovação,
            startups e times de produto.
          </p>
        </section>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} Felipe Hunter
        </footer>

      </div>
    </main>
  )
}