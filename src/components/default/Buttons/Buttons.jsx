import style from './Buttons.module.css';

export function DefaultButton ({ label, onClick, width }){
    return <button className={style.DefaultButton} style={{ width: width }} onClick={onClick} >{label}</button>;
}

export function BorderButton ({ label, onClick, width }){
    return <button className={style.BorderButton} style={{ width: width }} onClick={onClick} >{label}</button>;
}