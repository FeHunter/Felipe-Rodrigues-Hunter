import { Header } from '../../components/Header/Header'
import { BlogCard } from '../../components/blog/blog_card/blog_card'
import style from './blog.module.css'

export function Blog () {
    return (
        <main>
            <section>
                <h2>Projetos</h2>
                <div className={style.listContainer}>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </section>
        </main>
    )
}