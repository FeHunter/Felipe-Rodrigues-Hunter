import { Children } from 'react';
import style from './CardContent.module.css';

export function CardContent ({title, icon, children}){
    return (
        <section className={style.container}>
            <h2 className={style.title}>{icon} {title}</h2>
            <div className={style.text}>{children}</div>
        </section>
    );
}