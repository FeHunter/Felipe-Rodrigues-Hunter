import style from './PopUpWindow.module.css';

export function PopUpWindow ({label, visible, closeClick, children}) {

    return (
        <section className={`${visible && style.container} ${visible && style.animationOn || style.animationOff}`}>
            {visible &&
            <>
                <div  className={style.window}>
                    <div className={style.content}>
                        <div className={style.windowContent}>
                            <div className={style.header}>
                                <p className={style.label}><i class="fa-solid fa-terminal"></i> {label}</p>
                                <span className={style.closeButton} onClick={closeClick}><i class="fa-regular fa-circle-xmark"></i></span>
                            </div>
                            <div className={style.windowLocal}> {children} </div>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <button className={style.bottomBtn}> <i class="fa-solid fa-file-lines"></i> </button>
                        <button className={style.bottomBtn}> <i class="fa-solid fa-images"></i> </button>
                        <button className={style.bottomBtn}> <i class="fa-solid fa-photo-film"></i> </button>
                        <button className={style.bottomBtn}> <i class="fa-solid fa-link"></i> </button>
                    </div>
                </div>
            </>}
        </section>
    )
}