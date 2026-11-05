import { RPConfig } from '@react-pdf-kit/viewer'
import { PortfolioView } from './features/portfolio/views/PortfolioView'
import { CaptureFlowCaseStudy } from './features/portfolio/views/CaptureFlowCaseStudy'
import { WeekEndCaseStudy } from './features/portfolio/views/WeekEndCaseStudy'

export default function App() {
  const page = new URLSearchParams(window.location.search).get('page')
  const isCaptureFlowCase = page === 'case-study-captureflow'
  const isWeekEndCase = page === 'case-study-weekend'

  return (
    <RPConfig>
      {isCaptureFlowCase
        ? <CaptureFlowCaseStudy />
        : isWeekEndCase
          ? <WeekEndCaseStudy />
          : <PortfolioView />}
    </RPConfig>
  )
}
