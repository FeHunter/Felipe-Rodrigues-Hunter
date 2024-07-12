import { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { CardContent } from './CardContent/CardContent';
import style from './Content.module.css';
import { ContentSlider } from './ContentSlider/ContentSlider';
import { ItemList } from './List/ItemList';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { SkillCard } from './SkillCard/SkillCard';
import { PopUpWindow } from './PopUpWindow/PopUpWindow';
import { ProjectImages, ProjectLink, ProjectText, ProjectVideo } from './ProjectCard/ProjectContent';

export function Content (){

    const [popWindow, setPopWindow] = useState({
        "Dino Island" : false,
        "The Dark Forest" : false,
        "Fim de Semana" : false,
        "Jogo Da Velha" : false,
        "ECommerce React" : false,
        "Rede Social" : false,
        "Tela de Login" : false,
    })
    function togglePopWindow (key) {
        setPopWindow(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
        console.log(key);
    }

    function ContentOfPopWindows (){
        return (
            <section>
                <PopUpWindow
                    label={"Dino Island The Four Crystals - Unity, C#"}
                    visible={popWindow['Dino Island']}
                    closeClick={()=>{ togglePopWindow("Dino Island") }}
                >
                    <section>
                        <div>
                            <ProjectText
                                title={"Porque este jogo?"}
                                text={"Meu genêro de jogo favorito é plataforma, gosto muito desse tipo de jogo como Super Mario World, Jak And Daxter, Adventure Island que foi a inspiração direta para Dino Island. Comecei o jogo em meados de 2021 e ainda estou fazendo algums melhorias até hoje..."}
                            />
                            <ProjectText
                                title={"Sobre o jogo"}
                                text={"Neste jogo você jogará com um dinossauro que é o guardião do cristal azul, seu objetivo será recuperar os outros três cristais que foram levados por um mago malvado que quer todo o poder dos cristais. Mas você não está sozinho, há outro mago que o ajudará a recuperar os cristais que você pegou. Você terá que passar por desafios na ilha dos dinossauros tendo que evitar seus amigos dinossauros que estão desesperados sem cristais. Para isso, o bom bruxo criou uma poção que faz os dinossauros adormecerem e que o ajudará em sua jornada."}
                            />
                        </div>
                        <ProjectImages label={"Imagens do jogo"}>
                            <img src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxMjc3NzguZ2lm/347x500/UftXH4.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" />
                            <img src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxMjc3OTguZ2lm/347x500/EmXVle.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" srcset="" />
                            <img src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxNjQyODAuZ2lm/347x500/fJRcUH.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" />
                            <img src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxNjQyNzguZ2lm/347x500/KVnF5F.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" />
                        </ProjectImages>
                        <ProjectVideo label={"Vídeos do jogo"}>
                            <iframe
                                width="560" height="315" src="https://www.youtube.com/embed/wkU8fbxVK-A?si=Pip_S3tdD4EScCKY" title="Dino Island The Four Crystals Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/U3NIZ9258Jc?si=RZem2Q6vTVzViQIz" title="Dino Island The Four Crystals Gameplay Level" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </ProjectVideo>
                        <ProjectLink label={"Link do jogo"} link={"https://felipehunter.itch.io/dino-island-the-four-crystals"} />
                    </section>
                </PopUpWindow>
                <PopUpWindow
                    label={"The Dark Forest Guardians - Unity, C#"}
                    visible={popWindow['The Dark Forest']}
                    closeClick={()=>{ togglePopWindow("The Dark Forest") }}
                >
                    <section>
                        <div>
                            <ProjectText
                                title={"Sobre o jogo?"}
                                text={"Este foi o primeiro grande jogo que fiz, o primeiro a ser públicado na internet. Bem difícil por sinal eu ainda estava aprendendo os conteitos do Game Design."}
                            />
                        </div>
                    </section>
                    <ProjectImages label={"Imagens do jogo"}>
                        <img src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NjAucG5n/347x500/vWmWjj.png" alt="The Dark Forest by Felipe H."/>
                        <img src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NTkucG5n/347x500/ct6Prb.png" alt="The Dark Forest by Felipe H."/>
                        <img src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NTcucG5n/347x500/DrBGhv.png" alt="The Dark Forest by Felipe H."/>
                        <img src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzMxNTIwNjcucG5n/347x500/%2FkWCuG.png" alt="The Dark Forest by Felipe H."/>
                    </ProjectImages>
                    <ProjectVideo label={"Vídeos do jogo"}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/belNQJRYU8k?si=YGaSsOAiMmdvmTYh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uclSN7YKR2o?si=IYRKlBaFEsfXr5tL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </ProjectVideo>
                    <ProjectLink label={"Link do jogo"} link={"https://felipehunter.itch.io/the-dark-forest-guardians"} />
                </PopUpWindow>
                <PopUpWindow
                    label={"Fim de Semana"}
                    visible={popWindow['Fim de Semana']}
                    closeClick={()=>{ togglePopWindow("Fim de Semana") }}
                >
                    <section>
                        <div>
                            <ProjectText
                                title={"O que é?"}
                                text={"A ideia é simples você deseja ir a um evento no fim de semana, mas você não sabe pra onde ainda então você abre o app que ira lista os eventos disponvieis na sua localização."}
                            />
                        </div>
                    </section>
                </PopUpWindow>
            </section>
        )
    }

    return (
        <section className={style.container}>
            <CardContent title={"Sobre"} icon={<i class="fa-solid fa-circle-info"></i>} >
                <div className={style.aboutText}>
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
                        <ItemList  progressBar={'60%'}>
                            <p>Análise e Desenvolvimento de Sistemas - Infnet (2023/2025)</p>
                            <span className={style.cursando}><i class="fa-solid fa-hourglass-end"></i> Cursando...</span>
                        </ItemList>
                        <ItemList progressBar={'100%'}>
                            <p>Curso em Vídeo HTML5</p>
                            <a href="pdf/Certificado_do_Curso_Em_Vidio_HTML5.pdf" target="_blank"><i class="fa-solid fa-circle-check"></i> Certificado</a>
                        </ItemList>
                        <ItemList  progressBar={'100%'}>
                            <p>Curso Completo de Linguagem C e C++</p>
                            <a href="pdf/Certificado_C&C++_Udemy.pdf" target="_blank"><i class="fa-solid fa-circle-check"></i> Certificado</a>
                        </ItemList>
                        <ItemList  progressBar={'95%'}>
                            <p>C# Programação Orientada a Objetos + Projetos</p>
                            <span className={style.cursando}><i class="fa-solid fa-hourglass-end"></i> Cursando...</span>
                        </ItemList>
                        <ItemList  progressBar={'30%'}>
                            <p>Banco de Dados SQL do Zero ao Avançado + Projetos Reais 2023</p>
                            <span className={style.cursando}> <i class="fa-solid fa-hourglass-end"></i> Cursando...</span>
                        </ItemList>
                        <ItemList  progressBar={'100%'}>
                            <p>Microsoft POWER BI 2023</p>
                            <a href="pdf/Certificado Udemy Power BI.pdf" target="_blank"><i class="fa-solid fa-circle-check"></i> Certificado</a>
                        </ItemList>
                    </ul>
                </div>
                <div  className={style.list}>
                    <h3>Experiência Profissional</h3>
                    <ul>
                        <br/>
                        <li>
                            <p>Desenvolvedor de jogos indies</p>
                            <p>2018 - Atualmente</p>
                        </li>
                        <br/>
                        <li>
                            <p>Programador Web - Freelance</p>
                            <p>2020 - 2022</p>
                        </li>
                        <br/>
                        <li>
                            <p>Recepcionista Bilíngue - Verzani & Sandrini - Itaú BBA S.A.</p>
                            <p>2022 - Atualmente</p>
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
            <CardContent title={"Projetos"} icon={<i class="fa-regular fa-folder-open"></i>} >
                <div className={style.projectsContainer}>
                    <div className={style.projects}>
                        <ContentSlider
                            blocks={[
                                <ProjectCard
                                    title={"Dino Island The Four Crystals - Unity, C#"}
                                    img={"src/assets/img/Projetos/Dino_Island_TFC.jpg"}
                                    onClick={()=>{ togglePopWindow("Dino Island") }}
                                />,
                                <ProjectCard
                                    title={"The Dark Forest Guardians - Unity, C#"}
                                    img={"src/assets/img/Projetos/The_Dark_Forest_G.png"}
                                    onClick={()=>{ togglePopWindow("The Dark Forest") }}
                                />,
                                <ProjectCard
                                    title={"Fim de Semana App - React"}
                                    img={"src/assets/img/Projetos/Dino_Island_TFC.jpg"}
                                    onClick={()=>{ togglePopWindow("Fim de Semana") }}
                                />,
                                <ProjectCard title={"Jogo Da Velha - JavaScript"} img={"src/assets/img/Projetos/JogoDaVelha_JS.JPG"} />,
                                <ProjectCard title={"E-Commerce com React, Mobile First e Responsivo"} img={"src/assets/img/Projetos/E-commerce Img.png"} />,
                                <ProjectCard title={"Rede Social com React, Material UI, Mobile First e Responsivo"} img={"src/assets/img/Projetos/Social Network Img.png"} />,
                                <ProjectCard title={"Tela de Login - HTML/CSS"} img={"src/assets/img/Projetos/Login_Page_FRONT-END.JPG"} />,
                            ]}
                        />
                    </div>
                </div>
                {/* Janelas de PopUp dos projetos */}
                {ContentOfPopWindows()}
            </CardContent>
            <Footer/>
        </section>
    );
}