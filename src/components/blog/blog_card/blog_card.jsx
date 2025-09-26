import style from './blog_card.module.css'

export function BlogCard () {

    const img = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"

    return (
        <div className={style.container}>
            <div className={style.topInfor}>
                <h2>Título do cartão</h2>
                <p>dd/mm/yyyy</p>
            </div>
            <img src={img} alt="{titulo}.img" className={style.image} />
            <div className={style.content}>
                <p>Descrição...</p>
                <a href="">Ler mais</a>
            </div>
        </div>
    )
}