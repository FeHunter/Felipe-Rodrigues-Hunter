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
import { LeetcodeCard } from './LeetCodeCard/LeetcodeCard';
import { CodeCard } from './CodeCard/CodeCard';

export function Content (){

    const [popWindow, setPopWindow] = useState({
        "Dino Island" : false,
        "E-Commerce Loja Virtual" : false,
        "The Dark Forest" : false,
        "Fim de Semana" : false,
        "Portfolio" : false,
        "ECommerce React" : false,
        "Rede Social" : false,
        "Tela de Login" : false,
    })

    // CARTÕES DOS PROJETOS
    function togglePopWindow (key) {
        setPopWindow(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    }

    function ContentOfPopWindows (){
        return (
            <section>
                {/* Dino Island The Four Crystals */}
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
                            <img className={style.projectImage} src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxMjc3NzguZ2lm/347x500/UftXH4.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" />
                            <img className={style.projectImage} src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxMjc3OTguZ2lm/347x500/EmXVle.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" srcset="" />
                            <img className={style.projectImage} src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxNjQyODAuZ2lm/347x500/fJRcUH.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" />
                            <img className={style.projectImage} src="https://img.itch.zone/aW1hZ2UvNzkyNDU3LzUxNjQyNzguZ2lm/347x500/KVnF5F.gif" alt="Dino Island The Four Crystal - BY Felipe Hunter" />
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

                {/* The Dark Forest Guardians */}
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
                            <img className={style.projectImage} src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NjAucG5n/347x500/vWmWjj.png" alt="The Dark Forest by Felipe H."/>
                            <img className={style.projectImage} src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NTkucG5n/347x500/ct6Prb.png" alt="The Dark Forest by Felipe H."/>
                            <img className={style.projectImage} src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzI5NTI2NTcucG5n/347x500/DrBGhv.png" alt="The Dark Forest by Felipe H."/>
                            <img className={style.projectImage} src="https://img.itch.zone/aW1hZ2UvNTYyNjE1LzMxNTIwNjcucG5n/347x500/%2FkWCuG.png" alt="The Dark Forest by Felipe H."/>
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

                {/* Fim de Semana */}
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
                            title={"Sobre o desenvolvimento"}
                            text={"Esta plataforma foi desenvolvida utilizando React e técnicas como Mobile First e Scrum. Todo o versionamento do código foi feito utilizando o GitHub. Foram usadas APIs de terceiros como Sympla, Google Analytics e Google Maps. \n\n Estou utilizando o sistema de autenticação do Google Firebase para cadastrar os usuários na plataforma, mas pretendo migrar futuramente para o Auth0, que permitirá mais opções de login com uma maior facilidade de implementação. \n\n Um dos maiores desafios foi implementar a API do Google Maps. Mesmo com vários tutoriais disponíveis na internet sobre o assunto, nada parecia funcionar corretamente. Depois de muito tempo, comecei a entender o funcionamento o suficiente para conseguir mostrar a rota entre duas localizações: a localização padrão do usuário informada no cadastro até o local do evento. \n\n Uma função desafiadora para programar, sem sombra de dúvidas, foi o sistema de cardápio para os eventos. A ideia é permitir ao usuário montar seu cardápio com os itens disponíveis no evento; ao arrastar o item para seu carrinho, o valor do item é adicionado à soma total."}
                        />
                        <ProjectImages label={"Imagens da Plataforma"}>
                            <img className={style.projectImage} src='https://i.ibb.co/wr81JBQ/Fim-de-Semana-App-scr1.png' alt='Fim de Semana by Felipe Hunter' />
                            <img className={style.projectImage} src='https://i.ibb.co/6P2xv7J/Fim-de-Semana-App-scr2.png' alt='Fim de Semana by Felipe Hunter' />
                            <img className={style.projectImage} src='https://i.ibb.co/0cF9Lpq/Fim-de-Semana-App-scr3.png' alt='Fim de Semana by Felipe Hunter' />
                            <img className={style.projectImage} src='https://i.ibb.co/1MKSJNy/Fim-de-Semana-App-scr4.png' alt='Fim de Semana by Felipe Hunter' />
                        </ProjectImages>
                        <ProjectText
                            title={"Algumas Funcionalidades"}
                            text={"Cardápio: A plataforma permite ao usuário montar um cardápio dos itens que pretende consumir no evento, proporcionando assim um controle sobre seus gastos. Junto com o estabelecimento, a plataforma disponibiliza ao usuário as opções de alimentos para consumo no local. Caso deseje, o usuário também pode realizar compras através da plataforma. \n\n Transporte por Aplicativo: A plataforma, em parceria com alguns serviços de transporte, disponibiliza ao usuário diversas opções de transporte até o evento e de volta para sua residência ou local de escolha, sempre prezando pela segurança e transparência. \n\n Além de outras funcionalidades, como filtros por região, categorias, faixa etária e mais."}
                        />
                        <ProjectText
                            title={"Código"}
                            text={"Por motivos de segurança, o código não está público, pois contém chaves de segurança que não podem ser exibidas publicamente."}
                        />
                        {/* <ProjectLink label={"Código no GitHub"} link={"https://github.com/FeHunter/Fins-De-Semana-APP"} /> */}
                    </section>
                </PopUpWindow>

                {/* Site Portfólio */}
                <PopUpWindow
                    label={"Site Portfólio"}
                    visible={popWindow['Portfolio']}
                    closeClick={()=>{ togglePopWindow("Portfolio") }}
                >
                    <section>
                        <div>
                            <ProjectText
                                title={"Sobre?"}
                                text={"Este site serve para apresentar minhas experiências, habilidades e projetos como programador. Inclui uma breve apresentação pessoal, com detalhes sobre projetos, imagens, vídeos e códigos no GitHub."}
                            />
                            <ProjectText
                                title={"Recursos do site:"}
                                text={"- Responsividade:\nO site está adaptado para diferentes tamanhos de tela. \n\n- Tema:\nOpções de tema claro e escuro. \n\n- Slider:\nSlider para apresentar os projetos. \n\n- Pop-up:\nJanela em formato de pop-up para apresentar conteúdo. \n\n- Hospedagem:\nO site está hospedado no GitHub Pages. \n\n-Arquivos:\nArquivos em formato PDF estão hospedados no Google Drive, imagens estão no imgBB e os vídeos estão no YouTube."}
                            />
                        </div>
                    </section>
                    <ProjectImages label={"Screenshots do jogo rodando no navegador"}> 
                        <img className={style.projectImage} src='https://i.ibb.co/Vgmg5HG/portfolio-scr-1.png' alt='Portfolio JS by Felipe Hunter' />
                        <img className={style.projectImage} src='https://i.ibb.co/PNs2HN3/portfolio-scr-1.png' alt='Portfolio JS by Felipe Hunter' />
                        <img className={style.projectImage} src='https://i.ibb.co/6XjvDT6/portfolio-scr-5.png' alt='Portfolio JS by Felipe Hunter' />
                        <img className={style.projectImage} src='https://i.ibb.co/7kYTFCn/portfolio-scr-4.png' alt='Portfolio JS by Felipe Hunter'/>
                        <img className={style.projectImage} src='https://i.ibb.co/BfRTH94/portfolio-scr-3.png' alt='Portfolio JS by Felipe Hunter' />
                        <img className={style.projectImage} src='https://i.ibb.co/BtM022w/portfolio-scr-6.png' alt='Portfolio JS by Felipe Hunter' />
                    </ProjectImages>
                    <ProjectLink label={"Código no GitHub"} link={"https://github.com/FeHunter/Felipe-Rodrigues-Hunter"} />
                </PopUpWindow>

                {/* E-Commerce para avaliação da faculdade */}
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
                            <img className={style.projectImage} src='https://i.ibb.co/fGNrgmK/eccomerce-scr1.png' alt='ECommerce React by Felipe Hunter' />
                            <img  className={style.projectImage} src='https://i.ibb.co/RPbHhYY/eccomerce-scr2.png' alt='ECommerce React by Felipe Hunter' />
                        </ProjectImages>
                        <ProjectLink label={"Código no GitHub"} link={"https://github.com/FeHunter/Site-Ecommerce-AT"} />
                    </section>
                </PopUpWindow>

                {/* E-commerce - Loja Virtual */}
                <PopUpWindow
                    label={"E-Commerce Loja Virtual"}
                    visible={popWindow['E-Commerce Loja Virtual']}
                    closeClick={()=>{ togglePopWindow("E-Commerce Loja Virtual") }}
                >
                    <section>
                        <ProjectText
                            title={"Sobre"}
                            text={"Este é projeto de e-commerce que estou desenvolvendo como projeto pessoal, no início era para minha irmã vender bolsas artesanais na internet. Porém, por uma oportunidade melhor ela não seguiu com o projeto, então continue trabalhando no site para finalizar o projeto de um e-commerce. \n\n DETALHE: O projeto esta em andamento, estou trabalhando com Móbile First então o projeto esta sendo desenvolvido inicialmente para telas de smartphones, não se assuste ao abrir no Desktop user o F12 que ira ficar bem melhor."}
                        />
                        <ProjectImages label={"Screenshots"}> 
                            <img className={style.projectImage} src='https://i.ibb.co/cXptMLvw/Ecommerce-img-1.jpg' alt='E-Commerce Loja Virtual 1 by Felipe Hunter' />
                            <img className={style.projectImage} src='https://i.ibb.co/cSHwzgtY/Ecommerce-img-2.jpg' alt='E-Commerce Loja Virtual 2 by Felipe Hunter' />
                            <img className={style.projectImage} src='https://i.ibb.co/387bd4f/Ecommerce-img-3.jpg' alt='E-Commerce Loja Virtual 3 by Felipe Hunter' />
                            <img className={style.projectImage} src='https://i.ibb.co/fjcSJLn/Ecommerce-img-4.jpg' alt='E-Commerce Loja Virtual 4 by Felipe Hunter' />
                            <img className={style.projectImage} src='https://i.ibb.co/b9TbL5L/Ecommerce-img-5.jpg' alt='E-Commerce Loja Virtual 5 by Felipe Hunter' />
                        </ProjectImages>
                        <ProjectLink label={"Link do site"} link={"https://lalunejessybags.firebaseapp.com/"} />
                    </section>
                </PopUpWindow>

                {/* Projeto Rede Social feito para avaliação da faculdade */}
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
                            <img className={style.projectImage} src='https://i.ibb.co/j8Z8ZHM/social-Cars-Scr2.png' alt='Rede Social by Felipe Hunter' />
                            <img className={style.projectImage} src='https://i.ibb.co/PGVJqQJ/social-Cars-Scr1.png' alt='Rede Social by Felipe Hunter' />
                            <img className={style.projectImage} src='https://i.ibb.co/nQ0wfPC/social-Cars-Scr3.png' alt='Rede Social by Felipe Hunter' />
                        </ProjectImages>
                        <ProjectLink label={"Código no GitHub"} link={"https://github.com/FeHunter/Rede-Social-AT-Mobile-First"} />
                    </section>
                </PopUpWindow>
            </section>
        )
    }

    const skillDescriptions = {
        html5: "HTML 5 é a base de todas as páginas webs. Meu primeiro contato com o html foi com o professor Gustavo Guanabara em seu canal do YouTube, curso em vídeo onde aprendi muito sobre esta linguagem de marcação de texto.",
        css3: "CSS3 para a estilização das páginas web pode ser usado com o JavaScript ou algum outro framework para realizar diversas estilizações e animações na página.",
        javascript: "JavaScript é a principal linguagem usada para criar páginas webs. Durante a faculdade, ganhei muita experiência e uma base sólida da linguagem. Aprendi algumas bibliotecas como React que utilizam o JavaScript em sua base.",
        react: "React é a minha biblioteca preferida quando se trata de criar aplicações webs. Uso para todos os projetos que posso, aprendi muito sobre React na faculdade e aprimorei minhas habilidades desenvolvendo projetos pessoais e comerciais.",
        sql: "Estou estudando SQL na faculdade e por alguns cursos na Udemy, continuo aprendendo sobre banco de dados. Consigo criar e manter um projeto com SQL apesar de ainda não ser muito bom com banco de dados.",
        cSharp: "C-Sharp foi a primeira linguagem de programação que aprendi, comecei a programar usando a Unity para criar alguns jogos e tive meu primeiro contato com a linguagem. Durante a faculdade, aprimorei meus conhecimentos na linguagem e aprendi o .NET e ASP.NET Core que me permitiu ter um conhecimento mais amplo sobre a linguagem.",
        unityEngine: "Criei alguns games usando a ferramenta. Aprimorei muito minhas habilidades com C# entre outras habilidades como Designer, Áudio, Arte e algumas outras envolvidas no processo de desenvolvimento de um jogo.",
        powerBI: "Meu primeiro contato com Power Bi foi durante meu trabalho como recepcionista Bilíngue, onde em certo momento fiquei responsável por criar indicadores gráficos utilizando a ferramenta. Desde então, busquei cursos para aprimorar minhas habilidades.",
        scrum: "Aprendi sobre esta metodologia durante a faculdade, apliquei em alguns trabalhos desenvolvidos com alguns colegas. Uma das minhas preferidas para manter a equipe e o projeto em constante evolução.",
        rup: "Aprendi o RUP no bloco de Back-End da faculdade, achei bem completo e requer um conhecimento a mais da equipe sobre a metodologia para aplicá-la no dia a dia. Particularmente, sempre que posso, tento aplicar no desenvolvimento dos projetos que participo.",
    }

    const leetCodeSolutions = {
        TwoSum: `
        public class Solution {
            public int[] TwoSum(int[] nums, int target) {
                for (int i=0; i < nums.Length; i++) {
                    for (int j=0; j < nums.Length; j++) {
                        int sum = nums[i] + nums[j];
                        if (sum == target && i != j) {
                            return new int[2] {i, j};
                        }
                    }
                }
            return new int[2]{0, 0};
            }
        }`,

    }

    return (
        <section className={style.container}>
            {/* SOBRE */}
            <CardContent id={"Sobre"} title={"Sobre"} icon={<i class="fa-solid fa-circle-info"></i>}>
                <div className={style.aboutText}>
                <p>
                    Olá, sou Felipe, desenvolvedor com interesse em criar soluções inovadoras. Tenho experiência sólida em JavaScript, HTML5, CSS3 e React. Iniciei minha jornada com C#, fascinado pelo desenvolvimento de jogos, o que me levou à Unity Engine e posteriormente ao desenvolvimento em .NET. Busco oportunidades que me permitam aplicar minha experiência em projetos desafiadores, buscando continuamente aprender e crescer como profissional.
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
                            <p>React</p>
                            <span className={style.cursando}><i class="fa-solid fa-circle-check"></i> Instituto Infnet</span>
                        </ItemList>
                        <ItemList progressBar={'100%'}>
                            <p>C# ASP.NET</p>
                            <span className={style.cursando}><i class="fa-solid fa-circle-check"></i> Instituto Infnet</span>
                        </ItemList>
                        <ItemList  progressBar={'100%'}>
                            <p>C# Programação Orientada a Objetos + Projetos</p>
                            <a href="https://drive.google.com/uc?export=download&id=15NsOEErMdOgui6GaT9WPzhCaQrOcU3dh" target="_blank"><i class="fa-solid fa-circle-check"></i> Certificado</a>
                        </ItemList>
                        <ItemList  progressBar={'30%'}>
                            <p>Banco de Dados SQL</p>
                            <span className={style.cursando}> <i class="fa-solid fa-hourglass-end"></i> Cursando...</span>
                        </ItemList>
                        <ItemList  progressBar={'100%'}>
                            <p>Microsoft POWER BI 2023</p>
                            <a href="https://drive.google.com/uc?id=1VcqeeNumr1k9NgshOeELQqdFWI5IHZa5&export=download" target="_blank"><i class="fa-solid fa-circle-check"></i> Certificado</a>
                        </ItemList>
                        <ItemList progressBar={'100%'}>
                            <p>Curso em Vídeo HTML5</p>
                            <a href="https://drive.google.com/uc?id=1_sUbyI7zA0FTAFkvL-uXmCPcq5PKEnvw&export=download" target="_blank"><i class="fa-solid fa-circle-check"></i> Certificado</a>
                        </ItemList>
                    </ul>
                </div>
                <div  className={style.list}>
                    <h3>Experiência Profissional</h3>
                    <ul>
                        <br/>
                        <li>
                            <p>Recepcionista Bilíngue - Verzani & Sandrini - Itaú BBA S.A.</p>
                            <p>2022 - 2025</p>
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
                <div>
                    <a
                        className={style.resumeLink}
                        href="https://drive.google.com/uc?id=1SyUQ6lPKLjpu0_j52NqRiuOmCtbQdnE3&export=download" target="_blank"
                    >
                        <i class="fa-solid fa-file"></i> Currículo
                    </a>
                </div>
            </CardContent>

            {/* HABILIDADES */}
            <CardContent id={"Habilidades"} title={"Habilidades"} icon={<i class="fa-regular fa-file-code"></i>} >
                <section className={style.skillContainer}>
                    <div className={style.skills}>
                        <SkillCard label={"HTML 5"} about={skillDescriptions.html5} img={"https://i.ibb.co/fXz53Jk/html5.png"} icon={<i class="fa-brands fa-html5"></i>} />
                        <SkillCard label={"CSS 3"} about={skillDescriptions.css3} img={"https://i.ibb.co/c2zqG4N/css.png"} icon={<i class="fa-brands fa-css3-alt"></i>} />
                        <SkillCard label={"Javascript"} about={skillDescriptions.javascript} img={"https://i.ibb.co/kKP423K/javascript.png"} icon={<i class="fa-brands fa-js"></i>} />
                        <SkillCard label={"React"} about={skillDescriptions.react} img={"https://i.ibb.co/kQtXB3y/react.png"} icon={<i class="fa-brands fa-react"></i>} />
                        <SkillCard label={"SQL"} about={skillDescriptions.sql} img={"https://i.ibb.co/9TMkFr9/sql.png"} icon={<i class="fa-solid fa-database"></i>} />
                        <SkillCard label={"C-Sharp"} about={skillDescriptions.cSharp} img={"https://i.ibb.co/6R9MJhb/c-sharp.png"} icon={"C#"} />
                        <SkillCard label={"Unity Engine"} about={skillDescriptions.unityEngine} img={"https://i.ibb.co/pdMzW8Z/unity.png"} icon={<i class="fa-brands fa-unity"></i>} />
                        {/* <SkillCard label={"Game Dev"} img={"https://i.ibb.co/jbFZZJY/game-development.png"} icon={<i class="fa-solid fa-gamepad"></i>} /> */}
                        <SkillCard label={"Power BI"} about={skillDescriptions.powerBI} img={"https://i.ibb.co/2Mb0YDF/powerBi.png"} icon={<i class="fa-solid fa-chart-column"></i>} />
                        <SkillCard label={"Metodologia Scrum"} about={skillDescriptions.scrum} img={"https://i.ibb.co/2Mb0YDF/powerBi.png"} icon={<i class="fa-solid fa-scroll"></i>} />
                        <SkillCard label={"Metodologia RUP"} about={skillDescriptions.rup} img={"https://i.ibb.co/2Mb0YDF/powerBi.png"} icon={<i class="fa-solid fa-scroll"></i>} />
                    </div>
                </section>
            </CardContent>

            {/* PROJETOS */}
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
                                    title={"E-Commerce Loja Virtual"}
                                    img={"https://i.ibb.co/vSybn3r/Ecommerce-img-cover.jpg"}
                                    onClick={()=>{ togglePopWindow("E-Commerce Loja Virtual") }}
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
                                    title={"Portfolio"}
                                    img={"https://i.ibb.co/BtM022w/portfolio-scr-6.png"}
                                    onClick={()=>{ togglePopWindow("Portfolio") }}
                                />,
                            ]}
                        />
                    </div>
                </div>
                {/* Janelas de PopUp dos projetos */}
                {ContentOfPopWindows()}
            </CardContent>

            {/* LEET CODE */}
            {/* code nos comentários */}

            <Footer/>
        </section>
    );
}

/*
<CardContent id={"LeetCode"} title={"Leet Code"} icon={<i class="fa-solid fa-code"></i>} >
    <div className={style.projectsContainer}>
        <div className={style.projects}>
            <ContentSlider
                blocks={[
                    <LeetcodeCard
                        title="Two Sum"
                        content={
                            <CodeCard
                                title="Two Sum"
                                code={leetCodeSolutions.TwoSum}
                                about={<p>
                                    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
                                </p>}
                                aboutSolution={<p>
                                    Usando laços for aninhados para percorre pela array verificando todos os números, ingorando somente o número que o indice de 'i' e 'j' são o mesmo.
                                </p>}
                            />
                        }
                    />,
                    <LeetcodeCard title="Test 2" />,
                    <LeetcodeCard title="Test 3" />,
                ]}
            />
        </div>
    </div>
    {ContentOfPopWindows()}
</CardContent>
*/