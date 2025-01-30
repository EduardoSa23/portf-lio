import Titulo from "../../components/titulo";
import Paragrafo from "../../components/paragrafo";
import { GithubSecao } from "./styles";


const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="principal">Graduado em pela Universidade Mogi das Cruzes (UMC), cursando Engenharia Front-end pela EBAC – Escola Britânica de Artes Criativas e Tecnologia. Possuo experiências em desenvolvimento front-end utilizando a linguagem JavaScript, HTML5, CSS, jQuery, Bootstrap, React, Vue.js e Angular. 
        Desenvolvi projetos como um site para uma loja de roupas sociais, um site completo para um restaurante, lista de tarefas, software de controle de estoque, calculadora e um "Sorteador", que realiza sorteios numéricos, entre outros. Usei jQuery, CSS, Node.js, Grunt, LESS, SASS, Vue, Angular e React. Como Desenvolvedor Full Stack Jr na Plotyx (Austrália), atuei no front-end e back-end de um sistema de dashboards de engajamento voltado a agências de marketing, desenvolvendo interfaces com HTML, 
        CSS, Bootstrap, Node, jQuery e Angular, além de auxiliar a equipe de desenvolvimento.
        </Paragrafo>
        <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=EduardoSa23&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=EduardoSa23&layout=compact&langs_count=7&theme=dracula"/>
        </GithubSecao>
    </section>

)

export default Sobre