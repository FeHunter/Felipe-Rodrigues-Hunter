import style from './SkillCard.module.css';

export function SkillCard ({label, img, icon}){
    return (
        <section className={style.container}>
            <div className={style.card}>
                <p>{label}</p>
                {
                    icon ?
                        <span className={style.skillIcon}>{icon}</span>
                    :
                        <img src={img} alt={`${label} Image`}/>
                }
            </div>
        </section>
    );
}