import styled, { css } from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const BannerContent= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 68px;
`

export const SharedTextStyle = css`
    font-size: 18px;
    font-weight: bold;
    color: ${cores.laranja};
    cursor: pointer;
`;

export const BannerTexts = styled.p`
    ${SharedTextStyle}
`;

export const StyledLink = styled(Link)`
    ${SharedTextStyle}
    text-decoration: none;
`;

export const ReataurantImage = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
export const ReataurantImageContent = styled.div`
    background-color: rgba(0,0,0, 0.5);
    height: 100%;
    color: #fff;
    font-size:32px;
    padding-top: 24px;
    padding-bottom: 32px;

    p{
        font-weight: 100;
        
    }

    h2{
        font-weight: bold;
        margin-top: 156px;
    }
`
