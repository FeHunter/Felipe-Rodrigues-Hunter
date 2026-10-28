import { HashRouter, Route, Routes } from 'react-router-dom'
import { PortfolioView } from './features/portfolio/views/PortfolioView'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PortfolioView />} />
      </Routes>
    </HashRouter>
  )
}
