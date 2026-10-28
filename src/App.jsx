import { RPConfig } from '@react-pdf-kit/viewer'
import { PortfolioView } from './features/portfolio/views/PortfolioView'

export default function App() {
  return (
    <RPConfig>
      <PortfolioView />
    </RPConfig>
  )
}
