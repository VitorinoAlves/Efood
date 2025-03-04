import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../styles";

export const Card = styled.div`
    max-width: 470px;
    color: ${cores.laranja};
    position: relative;
`

export const CardContent = styled.div`
    border: 1px solid ${cores.laranja};
    border-top: none;
    background-color: #fff;
    padding: 8px;
`

export const ImageCard = styled.img`
    width: 100%;
    display: block;
    margin: 0;
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    h2{
        font-size: 18px;
    }

    p{
        font-size: 18px;
    }
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 16px;
`

export const MoreInfoButton = styled(Link)`
    padding: 4px 6px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: ${cores.laranjaClaro};
    background-color: ${cores.laranja};
`

export const Tags = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`