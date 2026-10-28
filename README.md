# Felipe Rodrigues - Hunter — Portfolio

Bilingual developer portfolio built with React, Vite, and JavaScript, deployed to GitHub Pages.

**Live site:** https://fehunter.github.io/Felipe-Rodrigues-Hunter/

## Direction

A professional, minimal interface with terminal-inspired details, a persistent light/dark theme switch, and Portuguese/English content. The light theme is the default; the dark theme preserves the terminal-inspired visual direction. The portfolio presents product work, engineering decisions, and AI-assisted development as a workflow grounded in understanding and validation.

## Stack

- React + Vite
- JavaScript (ES modules)
- React Router using `HashRouter` for static hosting compatibility
- CSS with responsive layout and reduced-motion support
- GitHub Pages deployment

## MVVM structure

```text
src/
├── features/
│   └── portfolio/
│       ├── models/
│       │   └── portfolio.model.js
│       ├── view_models/
│       │   └── usePortfolioViewModel.js
│       └── views/
│           ├── PortfolioView.jsx
│           └── portfolio.css
├── shared/
│   └── i18n/
│       └── portfolioTranslations.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

- **Model:** project and certificate data.
- **ViewModel:** language selection and certificate filtering state.
- **View:** React components that render the portfolio.
- **Shared:** translations and shared presentation conventions.

The ViewModel is implemented with React hooks rather than artificial classes, keeping the pattern idiomatic to React.

## Projects shown

- **Fim de Semana** — mobile product in progress; React Native, Expo, TypeScript, Supabase, PostgreSQL, MVVM.
- **La Lune Jessy Bags** — published e-commerce: https://lalunejessybags.web.app
- **Dino Island: The Four Crystals** — Unity/C# game: https://felipehunter.itch.io/dino-island-the-four-crystals

Project descriptions communicate current scope without inventing usage statistics or business results.

## Certificates

Add verified entries to `src/features/portfolio/models/portfolio.model.js` in the `certificates` array. Supported categories:

- `certification`
- `course`
- `talk`
- `webinar`

Suggested record:

```js
{
  id: 'unique-id',
  title: 'Credential title',
  institution: 'Organizer or institution',
  category: 'course',
  date: '2026',
  description: {
    pt: 'Descrição em português.',
    en: 'Description in English.',
  },
  skills: ['React', 'Accessibility'],
  credentialUrl: 'https://example.com/verify',
  fileUrl: '',
  language: 'pt',
}
```

Only add credentials that have actually been completed or attended. Use a verification URL or certificate file when available. The empty state is intentional until real credentials are supplied.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The existing Vite base path in `vite.config.js` must remain `/Felipe-Rodrigues-Hunter/` for this GitHub Pages project site.

## Deployment

The repository already contains a `deploy` script using `gh-pages`. Run:

```bash
npm run deploy
```

Alternatively, use the repository's configured GitHub Pages workflow if deployment is managed through GitHub Actions.

## Contact and profiles

- GitHub: https://github.com/FeHunter
- LinkedIn: https://www.linkedin.com/in/felipe-rodrigues-silver/
- itch.io: https://felipehunter.itch.io
- Email: felipehunter001@gmail.com
