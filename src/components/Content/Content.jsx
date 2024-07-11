import { CardContent } from './CardContent/CardContent';
import style from './Content.module.css';

export function Content (){
    return (
        <section className={style.container}>
            <CardContent title={"Sobre {}"}>
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
                        Sou entusiasta de videogames, e mesmo que minha dedicação a eles tenha diminuído, ainda reservo um tempo para essa atividade. A curiosidade sobre como os jogos são criados foi o impulso inicial que me levou a explorar a programação e desenvolver minhas habilidades nesse campo.
                    </p>
                </div>
                <div className={style.list}>
                    <h3>Educação</h3>
                    <ul>
                        <li>
                            <p>Análise e Desenvolvimento de Sistemas - Infnet</p>
                            <p className={style.cursando}>Cursando</p>
                        </li>
                        <li>
                            <p>Curso em Vídeo HTML5</p>
                            <a href="pdf/Certificado_do_Curso_Em_Vidio_HTML5.pdf" target="_blank">Certificado</a>
                        </li>
                        <li>
                            <p>Curso Completo de Linguagem C e C++ - Iniciante Ao Avançado</p>
                            <a href="pdf/Certificado_C&C++_Udemy.pdf" target="_blank">Certificado</a>
                        </li>
                        <li>
                            <p>C# COMPLETO Programação Orientada a Objetos + Projetos</p>
                            <p className={style.cursando}>Cursando</p>
                        </li>
                        <li>
                            <p>Banco de Dados SQL do Zero ao Avançado + Projetos Reais 2023</p>
                            <p className={style.cursando}>Cursando</p>
                        </li>
                        <li>
                            <p>Aprenda Microsoft POWER BI em 7 dias + Projetos Reais (2023)</p>
                            <a href="pdf/Certificado Udemy Power BI.pdf" target="_blank"> Certificado</a>
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
        </section>
    );
}