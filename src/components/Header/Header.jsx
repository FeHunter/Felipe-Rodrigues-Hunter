import { useState } from 'react';
import { BorderButton, DefaultButton } from '../Buttons/Buttons';
import style from './Header.module.css';
import { PopUpWindow } from '../Content/PopUpWindow/PopUpWindow';

export function Header () {

    const [viewContact, setViewContact] = useState(false);
    

    const scrollToComponent = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className={style.container}>
            <div className={style.titleContainer}>
                <span className={style.icon}> <i class="fa-solid fa-code"></i> </span>
                <h1>Felipe Rodrigues <span className={style.subtitle}>Hunter</span></h1>
            </div>
            <div className={style.buttonsContainer}>
                <DefaultButton label={"Sobre"} width={"20%"} onClick={()=>{ scrollToComponent("Sobre") }} />
                <DefaultButton label={"Habilidades"} width={"20%"} onClick={()=>{ scrollToComponent("Habilidades") }} />
                <DefaultButton label={"Projetos"} width={"20%"} onClick={()=>{ scrollToComponent("Projetos") }} />
                <BorderButton label={"Contato"} width={"20%"} onClick={()=>{setViewContact(true)}} />
            </div>
            <PopUpWindow label={"Contato"} visible={viewContact} closeClick={()=>{setViewContact(false)}}>
                <div className={style.linksContainer}>
                    <p className={style.externalLink}><i class="fa-solid fa-at"></i> E-mail (1): felipehunter001@gmail.com</p>
                    <p className={style.externalLink}><i class="fa-solid fa-at"></i> E-mail (2): hunterfe1111@gmail.com</p>
                    <a className={style.externalLink} href='https://www.linkedin.com/in/felipe-rodrigues-silver/' target="_blank">
                        <p><i class="fa-brands fa-linkedin"></i> Linkedin</p>
                    </a>
                    <a className={style.externalLink} href='https://github.com/FeHunter' target="_blank">
                        <p><i class="fa-brands fa-square-github"></i> GitHub</p>
                    </a>
                    <a className={style.externalLink} href='https://felipehunter.itch.io' target="_blank">
                        <p><i class="fa-brands fa-itch-io"></i> Games</p>
                    </a>
                </div>
            </PopUpWindow>
        </header>
    );
}