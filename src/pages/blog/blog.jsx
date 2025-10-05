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
        <main>
            <section>
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