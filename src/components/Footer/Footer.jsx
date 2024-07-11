import style from './Footer.module.css';

export function Footer () {
    return (
        <footer className={style.container}>
            <p>&copy; Felipe Hunter</p>
            <div className={style.linksContainer}>
                <a className={style.externalLink} href='https://www.linkedin.com/in/felipe-rodrigues-silver/' target='_newblank'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a className={style.externalLink} href='https://github.com/FeHunter' target='_newblank'>
                    <i class="fa-brands fa-square-github"></i>
                </a>
                <a className={style.externalLink} href='https://felipehunter.itch.io' target='_newblank'>
                    <i class="fa-brands fa-itch-io"></i>
                </a>
            </div>
        </footer>
    );
}