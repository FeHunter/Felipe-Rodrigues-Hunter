import { RPConfig } from '@react-pdf-kit/viewer'
import { PortfolioView } from './features/portfolio/views/PortfolioView'
import { CaptureFlowCaseStudy } from './features/portfolio/views/CaptureFlowCaseStudy'

export default function App() {
  const isCaptureFlowCase = new URLSearchParams(window.location.search).get('page') === 'case-study-captureflow'

  return (
    <RPConfig>
      {isCaptureFlowCase ? <CaptureFlowCaseStudy /> : <PortfolioView />}
    </RPConfig>
  )
}
