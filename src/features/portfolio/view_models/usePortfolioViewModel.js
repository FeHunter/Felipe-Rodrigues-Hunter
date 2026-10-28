import { useMemo, useState } from 'react'
import { certificateCategories, certificates, projects } from '../models/portfolio.model'
import { portfolioTranslations } from '../../../shared/i18n/portfolioTranslations'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    return window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export function usePortfolioViewModel() {
  const [language, setLanguage] = useState('pt')
  const [theme, setTheme] = useState(getInitialTheme)
  const [certificateFilter, setCertificateFilter] = useState('all')

  const copy = portfolioTranslations[language]
  const visibleCertificates = useMemo(
    () => certificateFilter === 'all'
      ? certificates
      : certificates.filter((certificate) => certificate.category === certificateFilter),
    [certificateFilter],
  )

  const toggleLanguage = () => {
    setLanguage((current) => current === 'pt' ? 'en' : 'pt')
  }

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === 'light' ? 'dark' : 'light'
      try {
        window.localStorage.setItem('portfolio-theme', nextTheme)
      } catch {
        // Theme still works for the current session if storage is unavailable.
      }
      return nextTheme
    })
  }

  return {
    language,
    theme,
    copy,
    projects,
    certificates: visibleCertificates,
    certificateCategories,
    certificateFilter,
    setCertificateFilter,
    toggleLanguage,
    toggleTheme,
  }
}
