import { useEffect } from 'react';
import './App.css'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'
import { useGlobalState } from './state/states';

function App() {

  const [darkMode] = useGlobalState('darkMode');

  useEffect(()=>{
    if (darkMode){
      document.documentElement.style.setProperty("--default-font", 'white');
      document.documentElement.style.setProperty("--background-highlith-color", '#3C4959');
      document.documentElement.style.setProperty("--h2-font", "gold");
      document.documentElement.style.setProperty("--highligth-font-color", "gold");
      document.documentElement.style.setProperty("--background-color-progress", "white");
      document.documentElement.style.setProperty("--background-color", "#010D00");
    }else {
      document.documentElement.style.setProperty("--default-font", 'black');
      document.documentElement.style.setProperty("--background-highlith-color", '#a0aebe');
      document.documentElement.style.setProperty("--h2-font", "steelblue");
      document.documentElement.style.setProperty("--highligth-font-color", "dodgerblue");
      document.documentElement.style.setProperty("--background-color-progress", "black");
      document.documentElement.style.setProperty("--background-color", "whitesmoke");
    }
  }, [darkMode]);

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
      <div className='header'> <Header/> </div>
      <div className='content'> <Content/> </div>
    </section>
  )
}

export default App