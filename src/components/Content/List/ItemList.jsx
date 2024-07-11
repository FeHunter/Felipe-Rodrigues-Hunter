import style from './ItemList.module.css';

export function ItemList ({progressBar, onClick, children}){
    return (
        <li className={style.item} onClick={onClick} >
            <div className={style.content}>{children}</div>
            <div className={style.progressBar} style={{width: progressBar}}></div>
        </li>
    );
}