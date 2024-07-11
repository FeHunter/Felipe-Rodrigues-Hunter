import { Children } from 'react';
import style from './CardContent.module.css';

export function CardContent ({title, children}){
    return (
        <section className={style.container}>
            <h2 className={style.title}>{title}</h2>
            <div className={style.text}>{children}</div>
        </section>
    );
}