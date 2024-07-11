import style from './SkillCard.module.css';

export function SkillCard ({label, img}){
    return (
        <section className={style.container}>
            <div className={style.card}>
                <p>{label}</p>
                {/* <p>{img}</p> */}
                <img src={img} alt={`${label} Image`}/>
            </div>
        </section>
    );
}