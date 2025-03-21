import styled from "styled-components";
import { cores } from "../../styles";
import { AddButton } from "../PlateCard/style";

export const PlateListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    margin-top: 56px;
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`

export const ModalContent = styled.div`
    background-color: ${cores.laranja};
    padding: 32px;
    display: flex;
    color: #fff;
    z-index: 1;
    position: relative;

    h3 {
        font-size: 18px;
    }
    
    > img {
        height: 280px;
        width: 280px;
        object-fit: cover;
        margin-right: 24px;
    }

    p{
        margin-top: 16px;
        font-weight: 400;
        line-height: 22px;
        font-size:14px;
    }
`

export const ModalAddButton = styled(AddButton)`
    width: auto;
    padding: 4px 6px;
    margin-top: 20px;
`

export const CloseIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    width: auto;
    height: auto;
`