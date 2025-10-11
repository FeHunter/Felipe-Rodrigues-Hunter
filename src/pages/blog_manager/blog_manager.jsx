import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase/supabaseClient'
import style from './blog_manager.module.css'
import { useNavigate } from 'react-router-dom'

export function BlogManager (){

    const navigate = useNavigate()

    // Load my posts
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        LoadPosts()
    },[])
    const LoadPosts = async () => {
        const {data: posts} = await supabase.from('Blog_Post').select('*')
        if (posts) setPosts(posts)
    }

    const navigateTo = (id) => {
        navigate(`/postform/${id}`)
    }

    return (
        <main className={style.main}>
            <h2>Meus Posts</h2>
            <section className={style.postsList}>
                {posts.length > 0 && posts.map((post, i) => {
                    return (
                        <div key={`post_${i}`} className={style.postCard}>
                            <h2>{post.title}</h2>
                            <p>{post.about}</p>
                            <button onClick={()=>{navigateTo(post.id)}}>Editar</button>
                            <button>Remover</button>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}