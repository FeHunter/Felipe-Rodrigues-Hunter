import { useState } from 'react';
import style from './SkillCard.module.css';

export function SkillCard ({label, about, img, icon}){

    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const [floatPanelStyle, setfloatPanelStyle] = useState(style.floatingHidden)

    const gotToMousePosition = () => {
        setfloatPanelStyle(style.floatingContent)
        window.addEventListener("mousemove", (e) => {
            setPosX(e.clientX);
            setPosY(e.clientY)
        })
    }

    const hideContent = () => {
        setfloatPanelStyle(style.floatingHidden)
    }

    return (
        <section className={style.container}>
            <div className={style.card} onMouseOver={gotToMousePosition} onMouseOut={hideContent}>
                <p>{label}</p>
                {
                    icon ?
                        <span className={style.skillIcon}>{icon}</span>
                    :
                        <img src={img} alt={`${label} Image`}/>
                }
            </div>
            {/* floating panel */}
            <div className={floatPanelStyle} style={{ top: posY + 40, left: posX - (150 / 2) }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', width: '100%', marginBottom: '10px' }}>
                    <span className={style.skillIcon}>{icon}</span>
                    <p>{label}</p>
                </div>
                <p className={style.floatPanelAboutText}>{about}</p>
            </div>
        </section>
    );
}