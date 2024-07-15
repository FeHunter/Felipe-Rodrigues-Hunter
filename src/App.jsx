import { useState } from 'react';
import './App.css'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  function changeMode (){
    setDarkMode(!darkMode);
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
