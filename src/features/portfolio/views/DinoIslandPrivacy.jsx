import { useState } from 'react'
import './dino-island-pages.css'

const content = {
  pt: {
    back: 'Voltar ao projeto', language: 'English', eyebrow: 'DINO ISLAND · DOCUMENTO LEGAL', title: 'Privacidade', subtitle: 'e Termos de Uso', updated: 'Última atualização: 7 de novembro de 2026',
    intro: 'Este documento explica, de forma simples, as condições de uso de Dino Island: The Four Crystals e como a privacidade é tratada nas versões do jogo.',
    sections: [
      ['1. Coleta e uso de dados', 'O jogo não exige criação de conta, cadastro ou fornecimento de dados pessoais para ser utilizado. O desenvolvedor não opera um sistema próprio de coleta, cadastro ou armazenamento de dados pessoais dos jogadores.'],
      ['2. Anúncios', 'A versão mobile pode exibir anúncios fornecidos por plataformas de publicidade de terceiros. Esses provedores podem coletar ou processar dados técnicos, como identificadores do dispositivo, endereço IP, informações sobre o aplicativo e interações com anúncios, conforme suas próprias políticas e configurações. O desenvolvedor não recebe nem mantém uma base própria de perfis pessoais dos jogadores. Consulte as políticas do provedor de anúncios exibidas na loja ou no aplicativo para obter detalhes sobre o tratamento realizado por terceiros.'],
      ['3. Compras e pagamentos', 'O jogo não oferece compras dentro do aplicativo, assinaturas ou pagamentos para desbloquear conteúdo.'],
      ['4. Conta e perfil', 'O jogo não possui sistema de cadastro, login ou perfil pessoal de jogador. Não é necessário fornecer nome, e-mail ou outros dados pessoais para acessar a experiência.'],
      ['5. Crianças', 'O jogo não solicita informações pessoais de crianças nem oferece mecanismos de cadastro. Anúncios de terceiros, quando presentes, continuam sujeitos às regras e configurações de classificação etária e publicidade aplicáveis à distribuição do aplicativo.'],
      ['6. Propriedade intelectual e direitos autorais', 'Dino Island: The Four Crystals, incluindo título, marca, código, personagens, narrativa, fases, elementos gráficos originais, interface e demais materiais produzidos para o jogo, é protegido por direitos autorais e demais normas de propriedade intelectual. É proibido copiar, modificar, redistribuir, vender, publicar ou disponibilizar versões não autorizadas do jogo ou de seus materiais, integral ou parcialmente, sem autorização prévia e expressa do titular dos direitos.'],
      ['7. Recursos de terceiros', 'O jogo pode incluir recursos de terceiros, como artes, fontes, efeitos sonoros ou músicas, utilizados de acordo com as licenças e créditos aplicáveis. A licença de um recurso individual não transfere direitos sobre o jogo nem autoriza sua reprodução ou redistribuição.'],
      ['8. Uso permitido', 'O usuário pode instalar e utilizar uma cópia legítima do jogo para fins pessoais e não comerciais, respeitando as regras da plataforma de distribuição. Não é permitido realizar engenharia reversa, explorar falhas, remover avisos de direitos autorais ou distribuir cópias não autorizadas, exceto quando a legislação aplicável permitir expressamente.'],
      ['9. Alterações e disponibilidade', 'O jogo, seus recursos, anúncios e condições de disponibilidade podem ser atualizados, modificados, suspensos ou descontinuados. Este documento também poderá ser atualizado para refletir mudanças no aplicativo ou em requisitos legais. A versão vigente ficará publicada nesta página.'],
      ['10. Retenção e exclusão', 'Como o desenvolvedor não mantém uma base própria de dados pessoais ou contas de jogadores, não há perfil pessoal mantido pelo desenvolvedor para consultar ou excluir. Informações técnicas eventualmente processadas por provedores de anúncios seguem os prazos e procedimentos definidos por esses provedores em suas próprias políticas.'] ,
      ['11. Contato', 'Desenvolvedor: Felipe Rodrigues (Felipe Hunter). Para dúvidas sobre este documento, privacidade, direitos autorais ou uso do jogo, entre em contato pelo e-mail felipehunter001@gmail.com.']
    ],
    disclaimer: 'Este texto é uma apresentação informativa das práticas e condições do jogo. O tratamento de dados realizado por provedores de anúncios é regido pelas políticas desses terceiros.',
    footer: 'Dino Island: The Four Crystals · Felipe Hunter'
  },
  en: {
    back: 'Back to project', language: 'Português', eyebrow: 'DINO ISLAND · LEGAL', title: 'Privacy Policy', subtitle: '& Terms of Use', updated: 'Last updated: November 7, 2026',
    intro: 'This document briefly explains the terms of use of Dino Island: The Four Crystals and how privacy is handled across game editions.',
    sections: [
      ['1. Data collection and use', 'The game does not require an account, registration, or submission of personal information to be played. The developer does not operate its own system for collecting, registering, or storing players’ personal data.'],
      ['2. Advertising', 'The mobile edition may display ads provided by third-party advertising platforms. Those providers may collect or process technical data such as device identifiers, IP address, app information, and ad interactions, according to their own policies and settings. The developer does not receive or maintain its own database of player personal profiles. Please consult the advertising provider’s policies shown in the store or app for details about third-party processing.'],
      ['3. In-app purchases and payments', 'The game does not offer in-app purchases, subscriptions, or payments to unlock content.'],
      ['4. Permissions', 'The mobile edition requests only permissions needed for its features. The game does not request access to contacts, precise location, or personal files to create a player profile.'],
      ['5. Children', 'The game does not request children’s personal information or provide account registration. Third-party ads, when present, remain subject to age-rating, advertising rules, and settings applicable to the app distribution.'],
      ['6. Intellectual property and copyright', 'Dino Island: The Four Crystals, including its title, brand, code, characters, story, levels, original artwork, interface, and other materials created for the game, is protected by copyright and intellectual property laws. Copying, modifying, redistributing, selling, publishing, or making unauthorized versions of the game or its materials available, in whole or in part, is prohibited without the rights holder’s prior express permission.'],
      ['7. Third-party assets', 'The game may include third-party resources such as artwork, fonts, sound effects, or music, used under their applicable licenses and credits. A license for an individual asset does not transfer rights to the game or authorize its reproduction or redistribution.'],
      ['8. Permitted use', 'Users may install and use one legitimate copy of the game for personal, non-commercial purposes, subject to the distribution platform’s rules. Reverse engineering, exploiting bugs, removing copyright notices, or distributing unauthorized copies is not permitted, except where expressly allowed by applicable law.'],
      ['9. Changes and availability', 'The game, its features, ads, and availability may be updated, changed, suspended, or discontinued. This document may also be updated to reflect app changes or legal requirements. The current version will be published on this page.'],
      ['10. Data retention and deletion', 'Because the developer does not maintain its own database of players’ personal data or player accounts, there is no personal player profile held by the developer to access or delete. Technical information that may be processed by advertising providers is subject to those providers’ own retention periods and procedures.'],
      ['11. Contact', 'Developer: Felipe Rodrigues (Felipe Hunter). For questions about this document, privacy, copyright, or use of the game, contact felipehunter001@gmail.com.']
    ],
    disclaimer: 'This document is an informational summary of the game’s practices and terms. Data processing performed by advertising providers is governed by those third parties’ policies.',
    footer: 'Dino Island: The Four Crystals · Felipe Hunter'
  }
}

export function DinoIslandPrivacy() {
  const [language, setLanguage] = useState('pt')
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light' } catch { return 'light' } })
  const t = content[language]
  const toggleTheme = () => setTheme((current) => { const next = current === 'light' ? 'dark' : 'light'; try { localStorage.setItem('portfolio-theme', next) } catch {} return next })

  return <main className="dino-page dino-legal-page" data-theme={theme}>
    <header className="dino-header"><a href="?page=dino-island" className="dino-back">← {t.back}</a><div className="dino-controls"><button type="button" onClick={toggleTheme}>{theme === 'light' ? '☾' : '☼'} {theme === 'light' ? (language === 'pt' ? 'Escuro' : 'Dark') : (language === 'pt' ? 'Claro' : 'Light')}</button><button type="button" onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}>{t.language}</button></div></header>
    <section className="dino-legal-hero"><p className="dino-eyebrow">{t.eyebrow}</p><h1>{t.title}<span>.</span></h1><h2>{t.subtitle}</h2><p>{t.updated}</p><div>{t.intro}</div></section>
    <article className="dino-legal-content">{t.sections.map(([heading,body])=><section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<aside>{t.disclaimer}</aside></article>
    <footer className="dino-footer dino-legal-footer"><small>{t.footer}</small><a className="dino-back" href="?page=dino-island">← {t.back}</a></footer>
  </main>
}
