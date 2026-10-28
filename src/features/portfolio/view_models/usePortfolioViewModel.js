import { useMemo, useState } from 'react'
import { certificateCategories, certificates, projects } from '../models/portfolio.model'
import { portfolioTranslations } from '../../../shared/i18n/portfolioTranslations'

export function usePortfolioViewModel() {
  const [language, setLanguage] = useState('pt')
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

  return {
    language,
    copy,
    projects,
    certificates: visibleCertificates,
    certificateCategories,
    certificateFilter,
    setCertificateFilter,
    toggleLanguage,
  }
}
