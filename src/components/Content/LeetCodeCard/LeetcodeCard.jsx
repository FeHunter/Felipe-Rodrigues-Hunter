import { useState } from 'react'
import { PopUpWindow } from '../PopUpWindow/PopUpWindow'
import style from './LeetcodeCard.module.css'
import { CodeCard } from '../CodeCard/CodeCard'

export function LeetcodeCard ({title, content}){

    const [popUp, setPopUp] = useState(false)

    return (
        <>
            <div className={style.cardContent} onClick={()=>{setPopUp(true)}}>
                <h2>{title}</h2>
                <i class="fa-regular fa-file-code"></i>
            </div>
            <PopUpWindow
                key={`popUpContent_${title}`}
                label={title}
                visible={popUp}
                closeClick={()=>{setPopUp(false)}}
                children={content}
            />
        </>
    )
}