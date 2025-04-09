import styled from "styled-components";
import { cores } from "../../styles";
import { AddButton } from "../PlateList/style";

export const CartConteiner = styled.div`
    display: none;

    &.is-open {
    display: flex;
    }
`

export const Sidebar = styled.aside`
    background-color: ${cores.laranja};
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding: 32px 8px;
    overflow-y: auto; /* Adiciona a barra de rolagem vertical */
    width: 356px;
    

    ul{
        padding: 0;
    }

    h3 {
        font-size: 16px;
        color: ${cores.laranjaClaro};
        font-weight: 700;
        margin-bottom: 16px;
    }
`
export const CartItem = styled.li`
    background-color: ${cores.laranjaClaro};
    padding: 8px;
    display: flex;
    width: 340px;
    color: ${cores.laranja};
    margin-bottom: 16px;
    position: relative;

    .productPhoto{
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    h4{
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    p{
        font-size: 14px;
    }
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    
`

export const ValueText = styled.div`
    color: ${cores.laranjaClaro};
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 16px;
`

export const TrashIcon = styled.img`
    height: 16px;
    width: 16px;
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
`

export const Form = styled.form`
    color: ${cores.laranjaClaro};

    label {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 8px;
        display: block;
    }

    input {
        background-color: ${cores.laranjaClaro};
        margin-bottom: 8px;
        border: none;
        display: block;
        padding: 8px;
        width: 100%;
    }

    .rowHalfLine {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }

    .rowTwoThird {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 30px;
    }

    .buttons {
        margin-top: 24px;
    }
`

export const CartButton = styled(AddButton)`
    margin-bottom: 8px;
`

export const OrderFinishedText = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${cores.laranjaClaro};
    margin-bottom: 24px;
`

