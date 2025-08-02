import { useEffect, useState } from 'react';
import style from './PopUpWindow.module.css';

export function PopUpWindow ({label, visible, closeClick, children}) {

    // window controller - visible
    const [isVisible, setIsVisible] = useState(visible)
    const [windowAnim, setWindowAnim] = useState(style.animationOn) // style.animationOff
    useEffect(()=>{
        setIsVisible(visible)
        setWindowAnim(visible && style.animationOn)
    }, [visible])

    // max and min window width
    const windowMin = { width: '75%', height: '80%', transition: '.5s' }
    const windowMax = { width: '100%', height: '100%', transition: '.5s' }
    const [windowFull, setWindowFull] = useState(false)
    const [windowSize, setWindowSize] = useState(windowMin)
    const changeWindowSize = () => {
        setWindowFull((prev) => !prev )
    }
    useEffect(()=>{
        setWindowSize(windowFull ? windowMax : windowMin)
        console.log(windowFull)
    },[windowFull])

    return (
        <>
            <section className={`${isVisible && style.container} ${windowAnim}`}>
                {isVisible && <> <div  className={style.mainWindow}>
                    <div className={style.content}>
                        <div className={style.windowContent} style={windowSize}>
                            <div className={style.header}>
                                <p className={style.label}><i class="fa-solid fa-terminal"></i> {label}</p>
                                <div className={style.headerButtons}>
                                    <span className={style.closeButton} onClick={changeWindowSize}>
                                        {windowFull && <i class="fa-solid fa-compress"></i> || <i class="fa-solid fa-expand"></i>}
                                    </span>
                                    <span className={style.closeButton} onClick={()=>{
                                        setTimeout(() => {
                                            closeClick()
                                        }, 200)
                                        setWindowAnim(style.animationOff)
                                    }}>
                                        <i class="fa-regular fa-circle-xmark"></i>
                                    </span>
                                </div>
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
                </div> </>}
            </section>
        </>
    )
}