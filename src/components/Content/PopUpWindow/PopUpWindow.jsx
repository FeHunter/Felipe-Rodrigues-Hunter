import style from './PopUpWindow.module.css';

export function PopUpWindow ({label, visible, closeClick, children}) {

    return (
        <section className={`${visible && style.container} ${visible && style.animationOn || style.animationOff}`}>
            {visible &&
            <>
                <div  className={style.window}>
                    <div className={style.header}>
                        <p className={style.label}><i class="fa-solid fa-terminal"></i> {label}</p>
                        <span className={style.closeButton} onClick={closeClick}><i class="fa-regular fa-circle-xmark"></i></span>
                    </div>
                    <div className={style.content}> {children} </div>
                </div>
            </>}
        </section>
    )
}