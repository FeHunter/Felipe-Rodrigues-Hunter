import style from './CodeCard.module.css'

export function CodeCard ({title, code, about, aboutSolution}){
    return (
        <section className={style.codeArea}>
            <h2>{title}</h2>
            <figure className={style.code}>
                <pre>
                    <code className={style.codeText}>{code}</code>
                </pre>
            </figure>
            <div>
                <p className={style.subTitle}>Sobre</p>
                <p>{about}</p>
            </div>
            <div>
                <p className={style.subTitle}>Solução</p>
                <p>{aboutSolution}</p>
            </div>
        </section>
    )
}