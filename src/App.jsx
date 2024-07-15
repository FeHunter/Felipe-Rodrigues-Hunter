import './App.css'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'
import { setGlobalState, useGlobalState } from './state/states';

function App() {

  const [darkMode] = useGlobalState('darkMode');
  function changeMode (){
    setGlobalState('darkMode', !darkMode);
  }

  const viewMode = darkMode ?
    {
      backgroundColor: '#010D00',
      color: 'white',
      transition: '.5s'
    }
    :
    {
      backgroundColor: 'white',
      color: 'black',
      transition: '.5s'
    };

  return (
    <section className='AppSection' style={viewMode}>
      <div className='header'> <Header darkMode={darkMode} changeDarkMode={changeMode}/> </div>
      <div className='content'> <Content/> </div>
    </section>
  )
}

export default App
