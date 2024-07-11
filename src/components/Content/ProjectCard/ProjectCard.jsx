import style from './ProjectCard.module.css';

export function ProjectCard ({title, img}) {
    return (
        <section className={style.container}>
            <h2 className={style.title}>{title} <i class="fa-solid fa-up-right-and-down-left-from-center"></i></h2>
            <img className={style.image} src={img} alt={`${title} Imagem - by Felipe Hunter`} />
        </section>
    );
}