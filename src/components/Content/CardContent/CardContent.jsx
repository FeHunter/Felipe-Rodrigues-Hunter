import { Children } from 'react';
import style from './CardContent.module.css';

export function CardContent ({title, icon, id, children}){
    return (
        <section className={style.container} id={id}>
            <h2 className={style.title}>{icon} {title}</h2>
            <div className={style.text}>{children}</div>
        </section>
    );
}