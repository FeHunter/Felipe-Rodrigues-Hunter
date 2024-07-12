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
                        <ProjectText
                            title={"Porque este jogo?"}
                            text={"Meu gênero de jogo favorito é plataforma. Gosto muito desse tipo de jogo, como Super Mario World, Jak and Daxter e Adventure Island, que foi a inspiração direta para Dino Island. Comecei o jogo em meados de 2021 e ainda estou fazendo algumas melhorias até hoje."}
                        />
                        <ProjectText
                            title={"Sobre o jogo"}
                            text={"Este é um jogo de plataforma 2D sidescroll com desafios de plataforma e progressão de níveis. \n Neste jogo você jogará com um dinossauro que é o guardião do cristal azul, seu objetivo será recuperar os outros três cristais que foram levados por um mago malvado que quer todo o poder dos cristais."}
                        />
                        <ProjectImages label={"Imagens do jogo"}>
                            <img src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxMjc3NzguZ2lm/347x500/UftXH4.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" />
                            <img src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxMjc3OTguZ2lm/347x500/EmXVle.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" srcset="" />
                            <img src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxNjQyODAuZ2lm/347x500/fJRcUH.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" />
                            <img src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxNjQyNzguZ2lm/347x500/KVnF5F.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" />
                        </ProjectImages>
                        <ProjectText
                            title={"Um pouco sobre o desenvolvimento"}
                            text={"Iniciei este projeto com a Unity 2022, se me lembro bem. A programação em si não foi o maior desafio; nesse lado eu me dou bem e é a parte que mais gosto de fazer no desenvolvimento. \n\n O desafio maior em si foi a arte para o jogo, que se compõe do trabalho de vários outros artistas que disponibilizam seus trabalhos como assets gratuitos. Alguns elementos eu mesmo tive que fazer ou adaptar para se encaixar no contexto do jogo. Outro desafio foram os efeitos sonoros, que também foram encontrados em sites que disponibilizam áudios gratuitamente e, claro, improvisei alguns também. \n\n O suporte ao Gamepad foi implementado em suas últimas atualizações. O suporte foi implantado utilizando o novo Input System da Unity, que permite de forma fácil e de uma só vez programar todos os movimentos e ações para diferentes tipos de entradas, como Gamepad e Teclado."}
                        />
                        <ProjectText
                            title={"O que esperar deste projeto?"}
                            text={"Atualmente, estou trabalhando em atualizações que finalizarão de vez o desenvolvimento de Ilha dos Dinossauros. No entanto, a jornada continuará em outra aventura que chegará em breve à Steam."}
                        />
                        <ProjectVideo label={"Vídeos do jogo"}>
                            <iframe
                                width="560" height="315" src="https://www.youtube.com/embed/wkU8fbxVK-A?si=Pip_S3tdD4EScCKY" title="Dino Island The Four Crystals Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/U3NIZ9258Jc?si=RZem2Q6vTVzViQIz" title="Dino Island The Four Crystals Gameplay Level" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </ProjectVideo>
                        <ProjectText
                            title={"Considerações finais"}
                            text={"O jogo está disponível para download de forma gratuita na plataforma Itch.io. Você pode baixar o jogo, que está disponível para Windows."}
                        />
                        <ProjectLink label={"Link do jogo"} link={"https://felipehunter.itch.io/dino-island-the-four-crystals"} />
                    </section>
                </PopUpWindow>
                <PopUpWindow
                    label={"The Dark Forest Guardians - Unity, C#"}
                    visible={popWindow['The Dark Forest']}
                    closeClick={()=>{ togglePopWindow("The Dark Forest") }}
                >
                    <section>
                        <ProjectText
                            title={"Sobre o jogo?"}
                            text={"Este foi o primeiro grande jogo que fiz, o primeiro a ser publicado na internet. Foi bem difícil, pois eu ainda estava aprendendo os conceitos de Game Design. Assim como mencionado sobre Dino Island, criar artes para o jogo não é o meu ponto forte; sou mais voltado para a programação. No entanto, isso não me impediu de utilizar assets gratuitos e criar alguns por conta própria."}
                        />
                        <ProjectText
                            title={"Sobre o desenvolvimento"}
                            text={"Aqui foi minha primeira interação com um projeto grande que exigia gerenciamento para sair do papel. Minha maior dificuldade foi com o aspecto visual do jogo; eu não sabia muito bem como lidar com diferentes assets de diferentes artistas e mesclá-los. O jogo acabou ficando bastante escuro até eu conseguir adaptar um shader para aumentar o brilho."}
                        />
                        <ProjectImages label={"Imagens do jogo"}>
                            <img src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NjAucG5n/347x500/vWmWjj.png" alt="The Dark Forest by Felipe H."/>
                            <img src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NTkucG5n/347x500/ct6Prb.png" alt="The Dark Forest by Felipe H."/>
                            <img src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NTcucG5n/347x500/DrBGhv.png" alt="The Dark Forest by Felipe H."/>
                            <img src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzMxNTIwNjcucG5n/347x500/%2FkWCuG.png" alt="The Dark Forest by Felipe H."/>
                        </ProjectImages>
                        <ProjectText
                            title={"Considerações finais"}
                            text={"Considero o projeto finalizado; não pretendo fazer mais alterações neste jogo. Vou guardá-lo como uma memória do meu primeiro trabalho como desenvolvedor de jogos."}
                        />
                        <ProjectVideo label={"Vídeos do jogo"}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/belNQJRYU8k?si=YGaSsOAiMmdvmTYh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/uclSN7YKR2o?si=IYRKlBaFEsfXr5tL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </ProjectVideo>
                        <ProjectLink label={"Link do jogo"} link={"https://felipehunter.itch.io/the-dark-forest-guardians"} />
                    </section>
                </PopUpWindow>
                <PopUpWindow
                    label={"Fim de Semana"}
                    visible={popWindow['Fim de Semana']}
                    closeClick={()=>{ togglePopWindow("Fim de Semana") }}
                >
                    <section>
                        <ProjectText
                            title={"O que é?"}
                            text={"Uma aplicação web que permita aos usuários terem acesso aos eventos (Festa, Parques, Museus etc.) que estão ocorrendo no mês e, principalmente, no final de semana em uma determinada localidade."}
                        />
                        <ProjectText
                            title={"Sobre o desenvolvimento:"}
                            text={"Esta plataforma foi desenvolvida utilizando React e técnicas como Mobile First e Scrum. Todo o versionamento do código foi feito utilizando o GitHub. Foram usadas APIs de terceiros como Sympla, Google Analytics e Google Maps. \n\n Estou utilizando o sistema de autenticação do Google Firebase para cadastrar os usuários na plataforma, mas pretendo migrar futuramente para o Auth0, que permitirá mais opções de login com uma maior facilidade de implementação. \n\n Um dos maiores desafios foi implementar a API do Google Maps. Mesmo com vários tutoriais disponíveis na internet sobre o assunto, nada parecia funcionar corretamente. Depois de muito tempo, comecei a entender o funcionamento o suficiente para conseguir mostrar a rota entre duas localizações: a localização padrão do usuário informada no cadastro até o local do evento. \n\n Uma função desafiadora para programar, sem sombra de dúvidas, foi o sistema de cardápio para os eventos. A ideia é permitir ao usuário montar seu cardápio com os itens disponíveis no evento; ao arrastar o item para seu carrinho, o valor do item é adicionado à soma total."}
                        />
                        <ProjectImages label={"Imagens da Plataforma"}>
                            <img src='https://i.ibb.co/wr81JBQ/Fim-de-Semana-App-scr1.png' alt='Fim de Semana by Felipe Hunter' width={"40%"} />
                            <img src='https://i.ibb.co/6P2xv7J/Fim-de-Semana-App-scr2.png' alt='Fim de Semana by Felipe Hunter' width={"40%"} />
                            <img src='https://i.ibb.co/0cF9Lpq/Fim-de-Semana-App-scr3.png' alt='Fim de Semana by Felipe Hunter' width={"40%"} />
                            <img src='https://i.ibb.co/1MKSJNy/Fim-de-Semana-App-scr4.png' alt='Fim de Semana by Felipe Hunter' width={"40%"} />
                        </ProjectImages>
                        <ProjectText
                            title={"Algumas Funcionalidades:"}
                            text={"Cardápio: A plataforma permite ao usuário montar um cardápio dos itens que pretende consumir no evento, proporcionando assim um controle sobre seus gastos. Junto com o estabelecimento, a plataforma disponibiliza ao usuário as opções de alimentos para consumo no local. Caso deseje, o usuário também pode realizar compras através da plataforma. \n\n Transporte por Aplicativo: A plataforma, em parceria com alguns serviços de transporte, disponibiliza ao usuário diversas opções de transporte até o evento e de volta para sua residência ou local de escolha, sempre prezando pela segurança e transparência. \n\n Além de outras funcionalidades, como filtros por região, categorias, faixa etária e mais."}
                        />
                    </section>
                </PopUpWindow>
                <PopUpWindow
                    label={"Jogo da Velha - Javascript"}
                    visible={popWindow['Jogo Da Velha']}
                    closeClick={()=>{ togglePopWindow("Jogo Da Velha") }}
                >
                    <section>
                        <div>
                            <ProjectText
                                title={"O que é?"}
                                text={"Este jogo da velha foi feito durante uma aula no Curso de ADS no Instituo Infnet enquanto estavamos aprendendo a programa em Javascript."}
                            />
                            <ProjectText
                                title={"Sobre:"}
                                text={"O jogo é bem simples como todos conhecem, permitir que um ou dois usuários possam jogar entre si."}
                            />
                        </div>
                    </section>
                    <ProjectImages label={"Screenshots do jogo rodando no navegador"}> 
                        <img src='https://i.ibb.co/4SQpbgc/Jogo-Da-Velha-JS-Scr2.png' alt='Jogo da Velha JS by Felipe Hunter' width={"40%"} />
                        <img src='https://i.ibb.co/vDk7fPC/Jogo-Da-Velha-JS-Scr1.png' alt='Jogo da Velha JS by Felipe Hunter' width={"40%"} />
                        <img src='https://i.ibb.co/RB8Cnrq/Jogo-Da-Velha-JS.jpg' alt='Jogo da Velha JS by Felipe Hunter' width={"40%"} />
                    </ProjectImages>
                    <ProjectLink label={"Código no GitHub"} link={"https://github.com/FeHunter/JogoDaVelha_JS"} />
                </PopUpWindow>
                <PopUpWindow
                    label={"E-Commerce para avaliação da faculdade"}
                    visible={popWindow['ECommerce React']}
                    closeClick={()=>{ togglePopWindow("ECommerce React") }}
                >
                    <section>
                        <ProjectText
                            title={"Sobre"}
                            text={"Projeto feito para avaliação da faculdade. Site e-commerce, uma loja que vende peças exclusivas para lamborghini. Site totalmente responsivo e pensando em Mobile First. \n\n Técninas e tecnologias usadas usadas: Mobile First, React, CSS Module, HTML, CSS, JS, Responsividade. \n\n Este projeto foi fundamental para fixar os conceitos de responsividade e o conceito de Mobile First. Foi um dos primeiros desafios durante a faculdade; hoje é algo simples, mas no começo foi bem desafiador."}
                        />
                        <ProjectImages label={"Screenshots"}> 
                            <img src='https://i.ibb.co/fGNrgmK/eccomerce-scr1.png' alt='ECommerce React by Felipe Hunter' width={"40%"} />
                            <img src='https://i.ibb.co/RPbHhYY/eccomerce-scr2.png' alt='ECommerce React by Felipe Hunter' width={"40%"} />
                        </ProjectImages>
                        <ProjectLink label={"Código no GitHub"} link={"https://github.com/FeHunter/Site-Ecommerce-AT"} />
                    </section>
                </PopUpWindow>
                <PopUpWindow
                    label={"Projeto Rede Social feito para avaliação da faculdade"}
                    visible={popWindow['Rede Social']}
                    closeClick={()=>{ togglePopWindow("Rede Social") }}
                >
                    <section>
                        <ProjectText
                            title={"Sobre:"}
                            text={"Projeto Rede Social feito para avaliação da faculdade. Site de uma rede social com tema de F1 e carros, campos como feed de postagem, amigos sugestão de amizades e comentários em cada post. \n\n Técninas e tecnologias usadas usadas Mobile First, React, CSS Module, HTML, CSS, JS, Material UI, Responsividade. \n\n Assim como dito no projeto do E-Commerce de auto-peças este projeto foi um dos pilhares para fixar os conceitos de responsividade, mobile first e Material UI."}
                        />
                        <ProjectImages label={"Screenshots"}> 
                            <img src='https://i.ibb.co/j8Z8ZHM/social-Cars-Scr2.png' alt='Rede Social by Felipe Hunter' width={"40%"} />
                            <img src='https://i.ibb.co/PGVJqQJ/social-Cars-Scr1.png' alt='Rede Social by Felipe Hunter' width={"40%"} />
                            <img src='https://i.ibb.co/nQ0wfPC/social-Cars-Scr3.png' alt='Rede Social by Felipe Hunter' width={"40%"} />
                        </ProjectImages>
                        <ProjectLink label={"Código no GitHub"} link={"https://github.com/FeHunter/Rede-Social-AT-Mobile-First"} />
                    </section>
                </PopUpWindow>
            </section>
        )
    }

    return (
        <section className={style.container}>
            <CardContent id={"Sobre"} title={"Sobre"} icon={<i class="fa-solid fa-circle-info"></i>}>
                <div className={style.aboutText}>
                <p>
                    Me chamo Felipe, tenho 23 anos e sou desenvolvedor. Possuo conhecimentos em linguagens como JavaScript, além de HTML5, CSS3 e o React usados na construção de sites e aplicativos. C# foi a primeira linguagem que aprendi; quando jovem, queria fazer jogos e acabei descobrindo a Unity Engine, que me introduziu ao mundo da programação. Hoje, tenho amplo conhecimento em C# e .NET.
                </p>
                <p>
                    Tenho experiência em trabalhar em grandes projetos, adquirida no desenvolvimento dos meus jogos publicados no Itch.io, além de projetos pessoais e trabalhos acadêmicos. Atualmente, estou estudando Análise e Desenvolvimento de Sistemas no Instituto Infnet, com previsão de conclusão do curso em 2025.
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
                            <a href="src/assets/pdf/Certificado_do_Curso_Em_Vidio_HTML5.pdf" target="_blank"><i class="fa-solid fa-circle-check"></i> Certificado</a>
                        </ItemList>
                        {/* <ItemList  progressBar={'100%'}>
                            <p>Curso Completo de Linguagem C e C++</p>
                            <a href="src/assets/pdf/Certificado_C&C++_Udemy.pdf" target="_blank"><i class="fa-solid fa-circle-check"></i> Certificado</a>
                        </ItemList> */}
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
                            <a href="src/assets/pdf/Certificado Udemy Power BI.pdf" target="_blank"><i class="fa-solid fa-circle-check"></i> Certificado</a>
                        </ItemList>
                    </ul>
                </div>
                <div  className={style.list}>
                    <h3>Experiência Profissional</h3>
                    <ul>
                        <br/>
                        <li>
                            <p>Recepcionista Bilíngue - Verzani & Sandrini - Itaú BBA S.A.</p>
                            <p>2022 - Atualmente</p>
                        </li>
                        <br/>
                        <li>
                            <p>Programador Web - Freelance</p>
                            <p>2021 - 2022</p>
                        </li>
                        <br/>
                        <li>
                            <p>Desenvolvedor de jogos indies</p>
                            <p>2018 - Atualmente</p>
                        </li>
                        
                    </ul>
                </div>
            </CardContent>
            <CardContent id={"Habilidades"} title={"Habilidades"} icon={<i class="fa-regular fa-file-code"></i>} >
                <section className={style.skillContainer}>
                    <div className={style.skills}>
                        <SkillCard label={"HTML 5"} img={"https://i.ibb.co/fXz53Jk/html5.png"} />
                        <SkillCard label={"CSS 3"} img={"https://i.ibb.co/c2zqG4N/css.png"} />
                        <SkillCard label={"Javascript"} img={"https://i.ibb.co/kKP423K/javascript.png"} />
                        <SkillCard label={"React"} img={"https://i.ibb.co/kQtXB3y/react.png"} />
                        <SkillCard label={"SQL"} img={"https://i.ibb.co/9TMkFr9/sql.png"} />
                        <SkillCard label={"C#"} img={"https://i.ibb.co/6R9MJhb/c-sharp.png"} />
                        <SkillCard label={"Unity Engine"} img={"https://i.ibb.co/pdMzW8Z/unity.png"} />
                        <SkillCard label={"Game Dev"} img={"https://i.ibb.co/jbFZZJY/game-development.png"} />
                        <SkillCard label={"Power BI"} img={"https://i.ibb.co/2Mb0YDF/powerBi.png"} />
                    </div>
                </section>
            </CardContent>
            <CardContent id={"Projetos"} title={"Projetos"} icon={<i class="fa-regular fa-folder-open"></i>} >
                <div className={style.projectsContainer}>
                    <div className={style.projects}>
                        <ContentSlider
                            blocks={[
                                <ProjectCard
                                    title={"Dino Island The Four Crystals - Unity, C#"}
                                    img={"https://img.itch.zone/aW1hZ2UvNzkyNDU3LzExMzMwNTM3LmpwZw==/original/IKZOMQ.jpg"}
                                    onClick={()=>{ togglePopWindow("Dino Island") }}
                                />,
                                <ProjectCard
                                    title={"Fim de Semana App - React"}
                                    img={"https://i.ibb.co/1MKSJNy/Fim-de-Semana-App-scr4.png"}
                                    onClick={()=>{ togglePopWindow("Fim de Semana") }}
                                />,
                                <ProjectCard
                                    title={"The Dark Forest Guardians - Unity, C#"}
                                    img={"https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NjAucG5n/original/DZTAhl.png"}
                                    onClick={()=>{ togglePopWindow("The Dark Forest") }}
                                />,
                                <ProjectCard
                                    title={"Jogo Da Velha - JavaScript"}
                                    img={"https://i.ibb.co/4SQpbgc/Jogo-Da-Velha-JS-Scr2.png"}
                                    onClick={()=>{ togglePopWindow("Jogo Da Velha") }}
                                />,
                                <ProjectCard
                                    title={"E-Commerce com React"}
                                    img={"https://i.ibb.co/28DV8TB/E-commerce-Img.png"}
                                    onClick={()=>{ togglePopWindow("ECommerce React") }}
                                />,
                                <ProjectCard
                                    title={"Rede Social com React"}
                                    img={"https://i.ibb.co/7S3bjwD/Social-Network-Img.png"}
                                    onClick={()=>{ togglePopWindow("Rede Social") }}
                                />,
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