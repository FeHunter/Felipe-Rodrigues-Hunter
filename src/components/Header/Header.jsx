import { useEffect, useState } from 'react';
import { BorderButton, DefaultButton, IconButton } from '../Buttons/Buttons';
import style from './Header.module.css';
import { PopUpWindow } from '../Content/PopUpWindow/PopUpWindow';
import { setGlobalState, useGlobalState } from '../../state/states';

export function Header () {

    const [viewMenu, setViewMenu] = useState(false);
    const [viewContact, setViewContact] = useState(false);

    const [darkMode] = useGlobalState('darkMode');
    const [iconDarkMode, setIconDarkMode] = useState(darkMode ?<i class="fa-regular fa-lightbulb"></i> : <i class="fa-solid fa-lightbulb"></i>);
    useEffect(()=>{
        setIconDarkMode(darkMode ?<i class="fa-regular fa-lightbulb"></i> : <i class="fa-solid fa-lightbulb"></i>);
    }, [darkMode]);

    const scrollToComponent = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setViewMenu(false);
    }

    return (
        <header className={style.container}>
            <div className={style.titleContainer}>
                <span className={style.icon}> <i class="fa-solid fa-code"></i> </span>
                <h1>Felipe Rodrigues <span className={style.subtitle}>Hunter</span></h1>
            </div>
            <div className={style.buttonsMobile}>
                <span onClick={()=>{ setViewMenu(!viewMenu) }}> <i class="fa-solid fa-bars"></i> </span>
                <div className={viewMenu ? style.floatButtonsMobile : style.hide} >
                    <div className={style.mobileMenuButtons}>
                        <DefaultButton label={"Sobre"} width={"40%"} onClick={()=>{ scrollToComponent("Sobre") }} />
                        <DefaultButton label={"Habilidades"} width={"40%"} onClick={()=>{ scrollToComponent("Habilidades") }} />
                        <DefaultButton label={"Projetos"} width={"40%"} onClick={()=>{ scrollToComponent("Projetos") }} />
                        <DefaultButton label={"Contato"} width={"40%"} onClick={()=>{setViewContact(true)}} />
                    </div>
                    <IconButton icon={ iconDarkMode } onClick={()=>{ setGlobalState('darkMode', !darkMode) }} />
                </div>
            </div>
            <div className={style.buttonsDesktop}>
                <DefaultButton label={"Sobre"} width={"20%"} onClick={()=>{ scrollToComponent("Sobre") }} />
                <DefaultButton label={"Habilidades"} width={"20%"} onClick={()=>{ scrollToComponent("Habilidades") }} />
                <DefaultButton label={"Projetos"} width={"20%"} onClick={()=>{ scrollToComponent("Projetos") }} />
                <BorderButton label={"Contato"} width={"20%"} onClick={()=>{setViewContact(true)}} />
                <IconButton icon={ iconDarkMode } onClick={()=>{ setGlobalState('darkMode', !darkMode) }} />
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