import './App.css'
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import { history } from './history'

import { useEffect } from 'react';
import { useGlobalState } from './state/states';

// Pages
import { Content } from './components/Content/Content'
import { Blog } from './pages/blog/blog';
import { AddBlogPostForm } from './pages/add_blog_post/add_blog_post';


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

  return (
    <HistoryRouter history={history}>
      <Routes> 
        <Route path={'*'} element={<AddBlogPostForm />} />
        <Route path={'/Blog'} element={<Blog />} />
      </Routes>
    </HistoryRouter>
  )
}

export default App