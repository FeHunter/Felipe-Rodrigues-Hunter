import { useEffect, useState } from 'react'
import style from './blog_card.module.css'
import { supabase } from '../../../services/supabase/supabaseClient'

export function BlogCard ({post}) {


    const [cover, setCover] = useState(null)
    useEffect(()=>{
        LoadImage()
    },[])

    const LoadImage = async () => {
        const {data: img} = await supabase.from('Blog_Images').select('*').eq('post_id', post.id)
        const img_id = Math.floor(Math.random() * img.length)
        setCover(img[img_id].img_link)
    }

    const img = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"

    return (
        <div className={style.container}>
            <div className={style.topInfor}>
                <h2>{post.title}</h2>
                <p>{new Date(post.created_at).toLocaleString()}</p>
            </div>
            <img src={cover && cover || img} alt="{titulo}.img" className={style.image} />
            <div className={style.content}>
                <p>{post.about}</p>
                <a href="">Ler mais</a>
            </div>
        </div>
    )
}