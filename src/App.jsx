import { RPConfig } from '@react-pdf-kit/viewer'
import { PortfolioView } from './features/portfolio/views/PortfolioView'
import { CaptureFlowCaseStudy } from './features/portfolio/views/CaptureFlowCaseStudy'
import { CaptureFlowPrivacyPolicy } from './features/portfolio/views/CaptureFlowPrivacyPolicy'
import { WeekEndCaseStudy } from './features/portfolio/views/WeekEndCaseStudy'

export default function App() {
  const page = new URLSearchParams(window.location.search).get('page')
  const isCaptureFlowCase = page === 'case-study-captureflow'
  const isCaptureFlowPrivacy = window.location.pathname.endsWith('/captureflow/privacy/') ||
    window.location.pathname.endsWith('/captureflow/privacy') ||
    page === 'captureflow-privacy'
  const isWeekEndCase = page === 'case-study-weekend'

  return (
    <RPConfig>
      {isCaptureFlowPrivacy
        ? <CaptureFlowPrivacyPolicy />
        : isCaptureFlowCase
          ? <CaptureFlowCaseStudy />
          : isWeekEndCase
            ? <WeekEndCaseStudy />
            : <PortfolioView />}
    </RPConfig>
  )
}
