import { BorderButton, DefaultButton } from '../Buttons/Buttons';
import style from './Header.module.css';

export function Header () {
    return (
        <header className={style.container}>
            <div className={style.titleContainer}>
                <span className={style.icon}> <i class="fa-solid fa-code"></i> </span>
                <h1>Felipe Rodrigues <span className={style.subtitle}>Hunter</span></h1>
            </div>
            <div className={style.buttonsContainer}>
                <DefaultButton label={"Sobre"} width={"20%"} />
                <DefaultButton label={"Habilidades"} width={"20%"} />
                <DefaultButton label={"Projetos"} width={"20%"} />
                <BorderButton label={"Contato"} width={"20%"} />
            </div>
        </header>
    );
}