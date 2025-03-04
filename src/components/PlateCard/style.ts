import styled from "styled-components";
import { cores } from "../../styles";

export const PlateCardConteiter = styled.div`
    padding: 8px;
    background-color: ${cores.laranja};
    color: ${cores.laranjaClaro};
    width: 320px;
`

export const PlateName = styled.h3`
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
` 

export const PlateDescription = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`

export const AddButton = styled.button`
    background-color: ${cores.laranjaClaro};
    color: ${cores.laranja};
    margin-top: 8px;
    border: none;
    padding: 4px;
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
`