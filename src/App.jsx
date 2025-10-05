import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useGlobalState } from './state/states'

// Pages
import { Blog } from './pages/blog/blog'
import { AddBlogPostForm } from './pages/add_blog_post/add_blog_post'
import { BlogManager } from './pages/blog_manager/blog_manager'
import { UserPage } from './pages/user_page/user_page'

function App() {
  const [darkMode] = useGlobalState('darkMode')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty("--default-font", 'white')
      document.documentElement.style.setProperty("--background-highlith-color", '#3C4959')
      document.documentElement.style.setProperty("--h2-font", "gold")
      document.documentElement.style.setProperty("--highligth-font-color", "gold")
      document.documentElement.style.setProperty("--background-color-progress", "white")
      document.documentElement.style.setProperty("--background-color", "#010D00")
    } else {
      document.documentElement.style.setProperty("--default-font", 'black')
      document.documentElement.style.setProperty("--background-highlith-color", '#a0aebe')
      document.documentElement.style.setProperty("--h2-font", "steelblue")
      document.documentElement.style.setProperty("--highligth-font-color", "dodgerblue")
      document.documentElement.style.setProperty("--background-color-progress", "black")
      document.documentElement.style.setProperty("--background-color", "whitesmoke")
    }
  }, [darkMode])

  return (
    <HashRouter>
      <Routes> 
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/postform/:id" element={<AddBlogPostForm />} />
      </Routes>
    </HashRouter>
  )
}

export default App
