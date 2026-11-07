import { RPConfig } from '@react-pdf-kit/viewer'
import { PortfolioView } from './features/portfolio/views/PortfolioView'
import { CaptureFlowCaseStudy } from './features/portfolio/views/CaptureFlowCaseStudy'
import { WeekEndCaseStudy } from './features/portfolio/views/WeekEndCaseStudy'
import { DinoIslandCaseStudy } from './features/portfolio/views/DinoIslandCaseStudy'
import { DinoIslandPrivacy } from './features/portfolio/views/DinoIslandPrivacy'

export default function App() {
  const page = new URLSearchParams(window.location.search).get('page')
  const isCaptureFlowCase = page === 'case-study-captureflow'
  const isWeekEndCase = page === 'case-study-weekend'
  const isDinoIslandCase = page === 'dino-island'
  const isDinoIslandPrivacy = page === 'dino-privacy'

  return (
    <RPConfig>
      {isCaptureFlowCase
        ? <CaptureFlowCaseStudy />
        : isWeekEndCase
          ? <WeekEndCaseStudy />
          : isDinoIslandCase
            ? <DinoIslandCaseStudy />
            : isDinoIslandPrivacy
              ? <DinoIslandPrivacy />
              : <PortfolioView />}
    </RPConfig>
  )
}
