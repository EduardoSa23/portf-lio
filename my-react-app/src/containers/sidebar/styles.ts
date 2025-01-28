import styled from "styled-components";
import { P } from "../../components/paragrafo/styles";

export const Descricao = styled(P)`
    margin: 24px 0 40px 0;
`

export const BotaoTema = styled.button`
    border-radius: 12px;
    padding: 8px;
    color: #eee;
    font-size: 10px;
    font-weight: bold;
    background-color: #282a35;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`

export const SidebarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`