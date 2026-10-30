# Portfolio — design system, produto e UX

> Auditoria do repositório `FeHunter/Felipe-Rodrigues-Hunter`, branch `main`, em 30/10/2026. Este documento descreve o código encontrado, distinguindo estilos efetivamente ativos de resíduos visuais legados.

## 1. Identidade visual atual

A direção atual não é verde suave. O produto usa uma identidade **azul-marinho + azul-ciano**, com dois temas. O tema claro é o padrão; a escolha do tema escuro é persistida em `localStorage` pela chave `portfolio-theme`.

### Tokens e cores observados

| Papel | Tema claro | Tema escuro |
|---|---|---|
| Fundo da página | `#f4f8fb` | `#06111d` |
| Texto principal | `#1d2b22` | `#edf5fa` |
| Cor de destaque / links / CTA | `#236b8e` | `#69bfe5` |
| Superfície | branco `#ffffff` | `#0b1b29` |
| Superfície elevada | — | `#102536` |
| Bordas | `#d8e4ec` / `#dce6ed` | `#203c50` / `#29475c` |
| Texto secundário | `#58695d` | `#9aafbd` |
| Fundo de seção clara | `#eaf2f7` | — |

No tema escuro, os tokens-base definidos em `:root` incluem `--page-bg: #06111d`, `--surface: #0b1b29`, `--surface-raised: #102536`, `--border: #203c50`, `--muted: #9aafbd`, `--text: #edf5fa` e `--green: #69bfe5`. Apesar do nome histórico `--green`, seu valor atual é azul-ciano. No tema claro, o destaque é sobrescrito para `#236b8e`.

**Nota de manutenção:** ainda há declarações decorativas com tons verdes/oliva e valores antigos de hover/sombra no CSS. Elas não representam a cor de destaque semântica atual, mas indicam resíduos da identidade anterior que podem ser limpos em uma revisão visual futura.

## 2. Tipografia e linguagem visual

- **Manrope** para títulos, corpo, navegação e controles.
- **DM Mono** para eyebrows, índices, detalhes técnicos, terminal, labels e metadados.
- Títulos grandes com tracking negativo e pesos moderados; textos de apoio com line-height generoso.
- Linguagem visual minimalista/editorial com inspiração técnica/terminal, sem excesso de ornamentos.
- Bordas finas, superfícies discretas, cantos pequenos (4–9px), sombras suaves e gradientes radiais sutis.
- Links e ações usam setas, índices e microcopy em monospace para reforçar o caráter técnico.

## 3. Layout e wireframes atuais

### Página principal — desktop

```text
┌──────────────────────────────────────────────────────────────────┐
│ H. Felipe Rodrigues       Projetos Como construo Certificados ... │
│                          [Tema] [PT/EN] [Contato]                 │
├──────────────────────────────────────────────────────────────────┤
│ HERO                                                             │
│ ┌─────────────────────────────┐  ┌─────────────────────────────┐ │
│ │ disponibilidade             │  │ janela terminal             │ │
│ │ eyebrow                     │  │ linhas de código            │ │
│ │ Título em duas linhas       │  │ cursor / build              │ │
│ │ descrição                   │  └─────────────────────────────┘ │
│ │ [Projetos] [Contato]        │                                  │
│ │ GitHub · LinkedIn · itch.io │                                  │
├──────────────────────────────────────────────────────────────────┤
│ MÉTRICAS / RESUMO DE PROJETOS                                    │
├──────────────────────────────────────────────────────────────────┤
│ PROJETOS — cards em grid                                         │
├──────────────────────────────────────────────────────────────────┤
│ COMO EU CONSTRUO — pilares + stack                               │
├──────────────────────────────────────────────────────────────────┤
│ CERTIFICADOS — filtros + cards / empty state                     │
├──────────────────────────────────────────────────────────────────┤
│ SOBRE — apresentação + fatos                                     │
├──────────────────────────────────────────────────────────────────┤
│ CONTATO — CTA + redes + rodapé                                   │
└──────────────────────────────────────────────────────────────────┘
```

### Página principal — mobile

- Header compacto com navegação reorganizada; ações de tema e idioma permanecem acessíveis.
- Hero e terminal empilhados em uma coluna.
- Cards, pilares, certificados e fatos passam a grids de uma coluna ou colunas reduzidas.
- CTAs quebram linha e mantêm alvos clicáveis.
- Largura mínima global de 320px e breakpoints responsivos no CSS.

### Página de case study — CaptureFlow

```text
┌───────────────────────────────────────────────────────────────┐
│ ← Portfólio                                [Tema] [Idioma]    │
├───────────────────────────────────────────────────────────────┤
│ CASE STUDY · ANDROID                                          │
│ CaptureFlow.                         [MVP funcional]          │
│ Subtítulo + resumo do produto                                  │
│ [Repositório]  STACK                                          │
├───────────────────────────────────────────────────────────────┤
│ ÍNDICE DE SEÇÕES                                               │
├───────────────────────────────────────────────────────────────┤
│ 01 Visão do produto — problema / proposta                     │
│ 02 Experiência e funcionalidades — cards                       │
│ 03 Decisões de engenharia — lista de decisões                  │
│ 04 Arquitetura — camadas + features                             │
│ 05 Jornada — timeline                                           │
│ 06 Qualidade — fatos + ressalvas                                │
│ 07 Próximos passos — checklist editorial                       │
├───────────────────────────────────────────────────────────────┤
│ Conclusão + GitHub + voltar ao portfólio                       │
└───────────────────────────────────────────────────────────────┘
```

No mobile, índice e cards se reorganizam em duas colunas ou uma coluna, sem exigir scroll horizontal.

## 4. Funcionalidades presentes no portfólio

- Landing page bilíngue PT/EN; idioma controlado por estado React.
- Tema claro/escuro; tema salvo em `localStorage`.
- Hero com apresentação, disponibilidade, CTAs, links sociais e terminal ilustrativo.
- Faixa de métricas/resumo.
- Cards de projetos com status, stack, resumo, destaques de engenharia e links externos.
- Seção “Como eu construo” com três pilares e stack tecnológica.
- Certificados com filtros (todos, cursos, webinars), cards e visualizador de PDF.
- Estado vazio informativo quando não há credenciais verificáveis cadastradas em determinada categoria.
- Seção Sobre com formação, idiomas e experiência complementar.
- Seção de contato com e-mail e redes profissionais.
- Acessibilidade básica: landmarks, labels/aria, foco visível, navegação semântica e respeito parcial a reduced motion no CSS.
- Página de case study CaptureFlow com idioma e tema próprios, navegação por seções, decisões, arquitetura, timeline, qualidade e próximos passos.

## 5. Estrutura técnica observada

- React 19 + Vite 5, JavaScript ES modules.
- CSS responsivo, CSS Modules em partes do legado e stylesheet dedicado na experiência principal.
- Organização MVVM na feature portfolio: model de projetos/certificados, ViewModel com hooks e view React.
- React Router está listado no package, mas a experiência principal atual é renderizada diretamente pelo App; a página de case foi integrada por query string (`?page=case-study-captureflow`) para compatibilidade simples com GitHub Pages e sem conflitar com âncoras internas.
- GitHub Pages com base `/Felipe-Rodrigues-Hunter/`.

## 6. Projetos apresentados

1. CaptureFlow — Android nativo, Kotlin, Compose, Room, ML Kit; link para case de estudo e repositório.
2. Fim de Semana — React Native, Expo, TypeScript, Supabase, PostgreSQL, MVVM; em desenvolvimento.
3. La Lune Jessy Bags — e-commerce publicado; React, Vite, Supabase, PostgreSQL.
4. Dino Island: The Four Crystals — jogo Unity/C# publicado no itch.io.

## 7. Princípios de UX a preservar

- Clareza e hierarquia antes de efeitos visuais.
- Ações principais visíveis, links externos identificados e CTAs consistentes.
- Conteúdo em blocos curtos, com escaneabilidade por índices, labels e listas.
- Paridade de conteúdo PT/EN nas páginas principais e de case study.
- Layout fluido sem overflow horizontal; foco visível e controles semânticos.
- Não apresentar métricas sem fonte nem declarar validações que não foram executadas.
- Case study deve explicar contexto, decisão, trade-off e estado real, e não apenas listar tecnologias.

## 8. Arquivos de referência

- `src/features/portfolio/views/portfolio.css` — tokens, layout, temas e responsividade.
- `src/features/portfolio/views/PortfolioView.jsx` — composição da landing page.
- `src/features/portfolio/models/portfolio.model.js` — projetos e certificados.
- `src/features/portfolio/view_models/usePortfolioViewModel.js` — estado de idioma, tema e filtros.
- `src/shared/i18n/portfolioTranslations.js` — conteúdo PT/EN.
- `src/features/portfolio/views/CaptureFlowCaseStudy.jsx` — case study.
- `src/features/portfolio/views/captureflow-case-study.css` — estilos dedicados ao case.
