import Titulo from "../../components/titulo"
import Avatar from "../../components/avatar"
import Paragrafo from "../../components/paragrafo"

import { Descricao, BotaoTema, SidebarContainer } from "./styles"

type Props = {
    trocaTema: () => void;
}

const Sidebar = (props: Props) => (
    <aside>
        <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Eduardo Sá</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>EduardoSa23</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Desenvolvedor front-end Jr</Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
) 

export default Sidebar