import './App.css'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'

function App() {
  return (
    <section className='AppSection'>
      <div className='header'> <Header/> </div>
      <div className='content'> <Content/> </div>
    </section>
  )
}

export default App
