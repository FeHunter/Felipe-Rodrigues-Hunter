import style from './PopUpWindow.module.css';

export function PopUpWindow ({label, visible, closeClick, children}) {

    const view = visible ? {} : {display: 'none'};

    return (
        <section className={style.container} style={view}>
            <div  className={style.window}>
                <div className={style.header}>
                    <p>{label}</p>
                    <span className={style.closeButton} onClick={closeClick}><i class="fa-regular fa-circle-xmark"></i></span>
                </div>
                <div className={style.content}> {children} </div>
            </div>
        </section>
    )
}