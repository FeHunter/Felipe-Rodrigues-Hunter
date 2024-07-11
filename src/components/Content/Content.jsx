import { CardContent } from './CardContent/CardContent';
import style from './Content.module.css';
import { SkillCard } from './SkillCard/SkillCard';

export function Content (){
    return (
        <section className={style.container}>
            <CardContent title={"Sobre"} icon={<i class="fa-solid fa-circle-info"></i>} >
                <div>
                    <p>
                        Olá, meu nome é Felipe, tenho 22 anos e moro em Embu Das Artes, São Paulo. Atuo como Desenvolvedor Web e de Jogos, possuindo habilidades em HTML, CSS, Javascript, C/C++, C# e <a href="https://unity.com/pt" target="_blank">Unity Engine</a>. Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas no <a href="https://www.infnet.edu.br/infnet/home/" target="_blank">Instituto Infnet</a>.
                    </p>
                    <p>
                        Meu principal objetivo é ingressar no mercado de Tecnologia da Informação, buscando oportunidades de estágio ou posição júnior como Programador Front-End ou Programador Unity.
                    </p>
                    <p>
                        Embora trabalhe como Recepcionista Bilíngue no Banco Itaú e aprecie essa experiência, minha paixão pela área de TI me motiva a migrar para esse setor.
                    </p>
                    <p>
                        Sou entusiasta de videogames a curiosidade sobre como os jogos são criados foi o impulso inicial que me levou a explorar a programação e desenvolver minhas habilidades nesse campo.
                    </p>
                </div>
                <div className={style.list}>
                    <h3>Educação</h3>
                    <ul>
                        <li>
                            <p>Análise e Desenvolvimento de Sistemas - Infnet</p>
                            <p className={style.cursando}><i class="fa-solid fa-terminal"></i> Cursando...</p>
                        </li>
                        <li>
                            <p>Curso em Vídeo HTML5</p>
                            <a href="pdf/Certificado_do_Curso_Em_Vidio_HTML5.pdf" target="_blank"><i class="fa-solid fa-terminal"></i> Certificado</a>
                        </li>
                        <li>
                            <p>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</p>
                            <a href="pdf/Certificado_C&C++_Udemy.pdf" target="_blank"><i class="fa-solid fa-terminal"></i> Certificado</a>
                        </li>
                        <li>
                            <p>C# COMPLETO Programação Orientada a Objetos + Projetos</p>
                            <p className={style.cursando}><i class="fa-solid fa-terminal"></i> Cursando...</p>
                        </li>
                        <li>
                            <p>Banco de Dados SQL do Zero ao Avançado + Projetos Reais 2023</p>
                            <p className={style.cursando}> <i class="fa-solid fa-terminal"></i> Cursando...</p>
                        </li>
                        <li>
                            <p>Aprenda Microsoft POWER BI em 7 dias + Projetos Reais (2023)</p>
                            <a href="pdf/Certificado Udemy Power BI.pdf" target="_blank"><i class="fa-solid fa-terminal"></i> Certificado</a>
                        </li>
                    </ul>
                </div>
                <div  className={style.list}>
                    <h3>Experiência Profissional</h3>
                    <ul>
                        <li>
                            <p>Recepcionista Bilíngue - Verzani & Sandrini - Itaú BBA S.A.</p>
                            <p>2022 - Atualmente.</p>
                        </li>
                    </ul>
                </div>
            </CardContent>
            <CardContent title={"Habilidades"} icon={<i class="fa-regular fa-file-code"></i>} >
                <section className={style.skillContainer}>
                    <div className={style.skills}>
                        <SkillCard label={"HTML 5"} img={"src/assets/img/Habilidades/html5.png"} />
                        <SkillCard label={"CSS 3"} img={"src/assets/img/Habilidades/css.png"} />
                        <SkillCard label={"Javascript"} img={"src/assets/img/Habilidades/javascript.png"} />
                        <SkillCard label={"React"} img={"src/assets/img/Habilidades/react.png"} />
                        <SkillCard label={"SQL"} img={"src/assets/img/Habilidades/sql.png"} />
                        <SkillCard label={"C#"} img={"src/assets/img/Habilidades/c-sharp.png"} />
                        <SkillCard label={"Unity Engine"} img={"src/assets/img/Habilidades/unity.png"} />
                        <SkillCard label={"Game Dev"} img={"src/assets/img/Habilidades/game-development.png"} />
                        <SkillCard label={"Power BI"} img={"src/assets/img/Habilidades/powerBi.png"} />
                    </div>
                </section>
            </CardContent>
            <CardContent title={"Projetos"} icon={<i class="fa-regular fa-folder-open"></i>} ></CardContent>
        </section>
    );
}