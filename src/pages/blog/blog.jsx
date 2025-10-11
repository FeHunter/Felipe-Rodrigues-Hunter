import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { BlogCard } from '../../components/blog/blog_card/blog_card'
import { supabase } from '../../services/supabase/supabaseClient'
import style from './blog.module.css'

export function Blog () {

    const [posts, setPosts] = useState(null)

    useEffect(()=>{
        LoadPosts()
    },[])
    const LoadPosts = async () => {
        const { data: posts } = await supabase.from('Blog_Post').select('*')
        setPosts(posts)
    }

    return (
        <main className={style.container}>
            <aside className={style.aside}>
                <div className={style.buttons}>
                    <button className={style.button}> Início </button>
                    <button className={style.button}> Habilidades </button>
                    <button className={style.button}> Projetos </button>
                    <button className={style.button}> Contato </button>
                </div>
                <nav>
                    <p>Posts</p>
                    <ul>
                        <li>Post 1</li>
                        <li>Post 2</li>
                        <li>Post 3</li>
                    </ul>
                </nav>
            </aside>
            <section className={style.content}>
                <h2>Projetos</h2>
                <div className={style.listContainer}>
                    {posts && posts.map((post, i) => {
                        return <BlogCard key={`post_${i}`} post={post} />
                    })}
                </div>
            </section>
        </main>
    )
}