import styled from "styled-components";
import { cores } from "../../styles";

export const Image = styled.div`
    width: 100%;
    height: 384px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justfy-content: center;

`

export const Content = styled.div`
    width: 100%;
    text-align: center;
`

export const Logo = styled.img`
    margin-top: 40px;
`

export const Title = styled.h1`
    font-size: 36px;
    text-align: center;
    color: ${cores.laranja};
    margin-top: 124px;
`