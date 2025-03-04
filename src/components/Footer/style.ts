import styled from "styled-components";
import { cores } from "../../styles";

export const FooterContainer = styled.footer`
    background-color: ${cores.laranjaClaro};
    margin-top: 120px;
    padding: 40px;
    text-align: center;
`

export const Social = styled.div`
    margin-top: 36px;
    :nth-child(2) {
        margin: 0 8px;
    }
`

export const FooterText = styled.p`
    font-size: 10px;
    color: ${cores.laranja};
    margin-top: 80px;
`