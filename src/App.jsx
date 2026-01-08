import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useGlobalState } from './state/states'

// Pages
import { Blog } from './pages/blog/blog'
import { AddBlogPostForm } from './pages/add_blog_post/add_blog_post'
import { BlogManager } from './pages/blog_manager/blog_manager'
import { UserPage } from './pages/user_page/user_page'
import { Content } from './components/Content/Content'
import { CV1 } from './pages/curriculum/cv1'
import { CV2 } from './pages/curriculum/cv2'

function App() {
  const [darkMode] = useGlobalState('darkMode')

  useEffect(()=>{
    if (darkMode) {
      document.documentElement.style.setProperty("--default-font", "#E0E0E0") // texto principal
      document.documentElement.style.setProperty("--background-highlith-color", "#2C2C2C") // blocos em destaque
      document.documentElement.style.setProperty("--h2-font", "#D6D6D6") // títulos claros
      document.documentElement.style.setProperty("--highligth-font-color", "#BFBFBF") // textos de destaque
      document.documentElement.style.setProperty("--background-color-progress", "#E0E0E0") // barras claras
      document.documentElement.style.setProperty("--background-color", "#121212") // fundo geral
    } else {
      document.documentElement.style.setProperty("--default-font", "#1C1C1C") // texto principal
      document.documentElement.style.setProperty("--background-highlith-color", "#E5E5E5") // blocos em destaque
      document.documentElement.style.setProperty("--h2-font", "#3C3C3C") // títulos
      document.documentElement.style.setProperty("--highligth-font-color", "#5A5A5A") // textos de destaque
      document.documentElement.style.setProperty("--background-color-progress", "#1C1C1C") // barras escuras
      document.documentElement.style.setProperty("--background-color", "#FAFAFA") // fundo geral
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
    <HashRouter>
      <Routes> 
        <Route path="/" element={ <CV1/> } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/postform/:id" element={<AddBlogPostForm />} />
      </Routes>
    </HashRouter>
  )
}

export default App
